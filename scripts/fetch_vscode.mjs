import axios from 'axios';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import path from 'path';
import {
  translateInChunks,
  buildFrontmatter,
  saveMarkdown,
  fileExists,
  parseYearMonth,
} from './utils.mjs';

const GITHUB_API_URL = 'https://api.github.com/repos/microsoft/vscode/releases';
const VSCODE_UPDATES_BASE = 'https://code.visualstudio.com/updates/';

/**
 * バージョン文字列を VSCode 更新ページの URL スラッグに変換する
 * 例: "1.113.0" → "v1_113"
 * @param {string} version タグ名から取得したバージョン文字列
 * @returns {string} URL スラッグ
 */
function versionToUrlSlug(version) {
  const parts = version.split('.');
  return `v${parts[0]}_${parts[1]}`;
}

/**
 * バージョンとリリース日から出力ファイルパスを決定する
 * @param {string} version バージョン文字列（例: "1.113.0"）
 * @param {string} publishedAt GitHub API の published_at（ISO 8601）
 * @returns {string} 出力ファイルパス（例: "2026/03/vscode-1.113.md"）
 */
function determineOutputPath(version, publishedAt) {
  const { year, month } = parseYearMonth(publishedAt);
  const parts = version.split('.');
  const minorVersion = `${parts[0]}.${parts[1]}`;
  return path.join(year, month, `vscode-${minorVersion}.md`);
}

/**
 * GitHub API からリリース一覧を取得し、未処理のマイナーリリースを返す
 * パッチリリース（x.y.1 以上）は除外する
 * @returns {Promise<Array<{version: string, publishedAt: string, slug: string, outputPath: string}>>}
 */
async function getNewVscodeReleases() {
  const response = await axios.get(GITHUB_API_URL, {
    headers: { 'User-Agent': 'release-note-archive-bot' },
    params: { per_page: 20 },
  });

  const newReleases = [];
  for (const release of response.data) {
    // プレリリースおよびドラフトは除外
    if (release.prerelease || release.draft) continue;

    const version = release.tag_name;
    const parts = version.split('.');

    // パッチバージョンが 0 でないものはパッチリリースとして除外
    if (parts[2] !== '0') continue;

    const outputPath = determineOutputPath(version, release.published_at);

    // 既にアーカイブ済みのリリースはスキップ
    if (fileExists(outputPath)) {
      console.log(`スキップ（既存）: ${outputPath}`);
      continue;
    }

    newReleases.push({
      version,
      publishedAt: release.published_at,
      slug: versionToUrlSlug(version),
      outputPath,
    });
  }
  return newReleases;
}

/**
 * VSCode 更新ページをスクレイプし、Markdown に変換して返す
 * @param {string} slug URL スラッグ（例: "v1_113"）
 * @returns {Promise<{title: string, markdown: string}>}
 */
async function scrapeVscodeReleasePage(slug) {
  const url = `${VSCODE_UPDATES_BASE}${slug}`;
  const response = await axios.get(url, {
    headers: { 'User-Agent': 'release-note-archive-bot' },
  });

  const $ = cheerio.load(response.data);

  // ページタイトルを H1 から取得
  const title = $('h1').first().text().trim();

  // メインコンテンツ領域を特定（フォールバックあり）
  let mainContent = $('main');
  if (!mainContent.length) {
    mainContent = $('#main-content');
  }
  if (!mainContent.length) {
    mainContent = $('body');
  }

  // 不要な要素を削除
  mainContent.find('nav, aside, header, footer, script, style, .feedback-section').remove();

  // HTML → Markdown 変換
  const turndown = new TurndownService({
    headingStyle: 'atx',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
  });
  const markdown = turndown.turndown(mainContent.html() || '');

  return { title, markdown };
}

/**
 * メイン処理: 新規 VSCode リリースを取得・翻訳・保存する
 */
async function main() {
  const apiKey = process.env.DEEPL_API_KEY;
  if (!apiKey) {
    console.error('エラー: 環境変数 DEEPL_API_KEY が設定されていません。');
    process.exit(1);
  }

  let newReleases;
  try {
    newReleases = await getNewVscodeReleases();
  } catch (err) {
    console.error(`GitHub API の取得に失敗しました: ${err.message}`);
    process.exit(1);
  }

  if (newReleases.length === 0) {
    console.log('新規 VSCode リリースはありません。');
    return;
  }

  for (const release of newReleases) {
    console.log(`処理中: VSCode ${release.version}`);

    let title, markdown;
    try {
      ({ title, markdown } = await scrapeVscodeReleasePage(release.slug));
    } catch (err) {
      console.log(`::warning::VSCode ${release.version} のページ取得に失敗しました: ${err.message}`);
      continue;
    }

    let translatedContent;
    try {
      translatedContent = await translateInChunks(markdown, apiKey);
    } catch (err) {
      if (err.response?.status === 401) {
        console.error('エラー: DeepL API キーが無効です。');
        process.exit(1);
      }
      console.log(`::warning::VSCode ${release.version} の翻訳に失敗しました: ${err.message}`);
      translatedContent = markdown;
    }

    // リリース日を YYYY-MM-DD 形式に変換
    const releaseDate = release.publishedAt.split('T')[0];
    const slug = release.slug;

    const frontmatter = buildFrontmatter({
      product: 'VSCode',
      version: release.version,
      release_title: title,
      release_date: releaseDate,
      source_url: `${VSCODE_UPDATES_BASE}${slug}`,
      archived_at: new Date().toISOString().split('T')[0],
    });

    const fileContent = `${frontmatter}\n# ${title}\n\n${translatedContent}\n`;
    saveMarkdown(release.outputPath, fileContent);
  }
}

main().catch((err) => {
  console.error(`予期しないエラーが発生しました: ${err.message}`);
  process.exit(1);
});
