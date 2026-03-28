import axios from 'axios';
import fs from 'fs';
import path from 'path';

/**
 * DeepL Free API で1テキストを日本語に翻訳する
 * @param {string} text 翻訳対象テキスト
 * @param {string} apiKey DeepL API キー
 * @returns {Promise<string>} 翻訳後テキスト
 */
export async function translateToJapanese(text, apiKey) {
  const response = await axios.post(
    'https://api-free.deepl.com/v2/translate',
    { text: [text], target_lang: 'JA' },
    {
      headers: {
        Authorization: `DeepL-Auth-Key ${apiKey}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data.translations[0].text;
}

/**
 * テキストを行単位でチャンク分割し、DeepL API で翻訳して結合する
 * 128 KiB 制限に対し 100,000 バイトを上限としてチャンクを確定する
 * @param {string} content 翻訳対象の全テキスト
 * @param {string} apiKey DeepL API キー
 * @param {number} maxBytes チャンク上限バイト数
 * @returns {Promise<string>} 翻訳後テキスト
 */
export async function translateInChunks(content, apiKey, maxBytes = 100_000) {
  const lines = content.split('\n');
  const chunks = [];
  let currentLines = [];
  let currentSize = 0;

  for (const line of lines) {
    // 改行1バイト分を含めてサイズを計算
    const lineSize = Buffer.byteLength(line, 'utf8') + 1;
    if (currentSize + lineSize > maxBytes && currentLines.length > 0) {
      chunks.push(currentLines.join('\n'));
      currentLines = [line];
      currentSize = lineSize;
    } else {
      currentLines.push(line);
      currentSize += lineSize;
    }
  }
  if (currentLines.length > 0) {
    chunks.push(currentLines.join('\n'));
  }

  const translated = [];
  for (const chunk of chunks) {
    try {
      translated.push(await translateToJapanese(chunk, apiKey));
    } catch (err) {
      // 文字数超過（456）の場合は原文をそのまま使用
      if (err.response?.status === 456) {
        console.log('::warning::DeepL 月間文字数制限に達しました。このチャンクは原文のまま保存します。');
        translated.push(chunk);
      } else {
        throw err;
      }
    }
  }
  return translated.join('\n');
}

/**
 * YAML フロントマター文字列を生成する
 * @param {Record<string, string>} fields フロントマターのキーと値
 * @returns {string} フロントマター文字列（--- で囲まれた形式）
 */
export function buildFrontmatter(fields) {
  const lines = Object.entries(fields).map(([key, value]) => {
    // 値にコロンやクォートが含まれる場合は引用符で囲む
    const needsQuotes = /[:"'#]/.test(value) || value.includes('\n');
    const formatted = needsQuotes ? `"${value.replace(/"/g, '\\"')}"` : value;
    return `${key}: ${formatted}`;
  });
  return `---\n${lines.join('\n')}\n---\n`;
}

/**
 * Markdown ファイルを保存する。ディレクトリが存在しない場合は自動作成する
 * @param {string} filePath 保存先ファイルパス
 * @param {string} content ファイルの内容
 */
export function saveMarkdown(filePath, content) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`保存しました: ${filePath}`);
}

/**
 * ファイルが存在するか確認する
 * @param {string} filePath 確認するファイルパス
 * @returns {boolean}
 */
export function fileExists(filePath) {
  return fs.existsSync(filePath);
}

/**
 * ISO 8601 の日時文字列から YYYY と MM を返す
 * @param {string} isoDate ISO 8601 形式の日時文字列（例: "2026-03-25T11:50:23Z"）
 * @returns {{ year: string, month: string }}
 */
export function parseYearMonth(isoDate) {
  const [year, month] = isoDate.split('T')[0].split('-');
  return { year, month };
}
