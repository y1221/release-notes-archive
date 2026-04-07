import axios from 'axios';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import path from 'path';
import {
  buildFrontmatter,
  saveMarkdown,
  fileExists,
} from './utils.mjs';

const VS2026_URL =
  'https://learn.microsoft.com/ja-jp/visualstudio/releases/2026/release-notes';

// H2 テキストからバージョン番号（18.x.y 形式）を抽出する正規表現
const VERSION_PATTERN = /(\d{2}\.\d+\.\d+)/;

// 日本語日付テキストから年月日を抽出する正規表現
const DATE_PATTERN = /(\d{4})\s*年\s*(\d{1,2})\s*月\s*(\d{1,2})\s*日/;

/**
 * VS 2026 リリースノートページの HTML を取得する
 * @returns {Promise<string>} HTML テキスト
 */
async function fetchVs2026Page() {
  const response = await axios.get(VS2026_URL, {
    headers: { 'User-Agent': 'release-note-archive-bot' },
  });
  return response.data;
}

/**
 * バージョンとリリース日から出力ファイルパスを決定する
 * @param {string} version バージョン文字列（例: "18.4.2"）
 * @param {string} releaseDate YYYY-MM-DD 形式のリリース日
 * @returns {string} 出力ファイルパス（例: "2026/03/vs2026-18.4.2.md"）
 */
function determineOutputPath(version, releaseDate) {
  const [year, month] = releaseDate.split('-');
  return path.join(year, month, `vs2026-${version}.md`);
}

/**
 * HTML から最新バージョンのセクションを解析して返す
 * @param {string} html ページの HTML テキスト
 * @returns {{ version: string, releaseDate: string, markdown: string } | null}
 */
function parseLatestVersionSection(html) {
  const $ = cheerio.load(html);
  const turndown = new TurndownService({
    headingStyle: 'atx',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
  });

  // すべての H2 要素を検索し、バージョン番号を含む最初のものを特定
  let latestH2 = null;
  let latestVersion = null;

  $('h2').each((_, el) => {
    const text = $(el).text();
    const match = text.match(VERSION_PATTERN);
    if (match && !latestH2) {
      const versionParts = match[1].split('.');
      if (versionParts[2] !== '0') {
        console.log(`スキップ（パッチバージョン）: VS 2026 ${match[1]}`);
        return; // cheerio の each では return が continue 相当
      }
      latestH2 = el;
      latestVersion = match[1];
    }
  });

  if (!latestH2 || !latestVersion) {
    return null;
  }

  // 最新 H2 から次の H2 直前までの要素を収集する
  const sectionElements = [];
  let current = latestH2.next;
  while (current) {
    if (current.type === 'tag' && current.name === 'h2') break;
    sectionElements.push($.html(current));
    current = current.next;
  }
  const sectionHtml = sectionElements.join('\n');

  // セクション内テキストから日本語日付を検索してリリース日を抽出
  const sectionText = $(latestH2).nextUntil('h2').text();
  const dateMatch = sectionText.match(DATE_PATTERN);
  let releaseDate = '';
  if (dateMatch) {
    const year = dateMatch[1];
    const month = String(parseInt(dateMatch[2], 10)).padStart(2, '0');
    const day = String(parseInt(dateMatch[3], 10)).padStart(2, '0');
    releaseDate = `${year}-${month}-${day}`;
  } else {
    // 日付が取得できない場合は今日の日付を使用
    releaseDate = new Date().toISOString().split('T')[0];
    console.log(`::warning::VS 2026 ${latestVersion} のリリース日を取得できませんでした。本日の日付を使用します。`);
  }

  const markdown = turndown.turndown(sectionHtml);
  return { version: latestVersion, releaseDate, markdown };
}

/**
 * メイン処理: VS 2026 の最新リリースを取得・保存する
 */
async function main() {
  let html;
  try {
    html = await fetchVs2026Page();
  } catch (err) {
    console.error(`VS 2026 ページの取得に失敗しました: ${err.message}`);
    process.exit(1);
  }

  const result = parseLatestVersionSection(html);
  if (!result) {
    console.log('::warning::VS 2026 のバージョン情報を検出できませんでした。');
    return;
  }

  const { version, releaseDate, markdown } = result;
  const outputPath = determineOutputPath(version, releaseDate);

  if (fileExists(outputPath)) {
    console.log(`スキップ（既存）: ${outputPath}`);
    return;
  }

  console.log(`処理中: Visual Studio 2026 ${version}`);

  const frontmatter = buildFrontmatter({
    product: 'Visual Studio 2026',
    version,
    release_date: releaseDate,
    source_url: VS2026_URL,
    archived_at: new Date().toISOString().split('T')[0],
  });

  const fileContent = `${frontmatter}\n# Visual Studio 2026 バージョン ${version} リリースノート\n\n${markdown}\n`;
  saveMarkdown(outputPath, fileContent);
}

main().catch((err) => {
  console.error(`予期しないエラーが発生しました: ${err.message}`);
  process.exit(1);
});
