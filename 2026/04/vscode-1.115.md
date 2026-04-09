---
product: VSCode
version: 1.115.0
release_title: Visual Studio Code 1.115
release_date: 2026-04-08
source_url: "https://code.visualstudio.com/updates/v1_115"
archived_at: 2026-04-09
---

# Visual Studio Code 1.115

# Visual Studio Code 1.115

[LinkedIn](https://www.linkedin.com/showcase/vs-code)、[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)でフォローしてください |

* * *

_リリース日: 2026年4月8日_

ダウンロード：Windows：[x64](https://update.code.visualstudio.com/1.115.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.115.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.115.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.115.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.115.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.115.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.115.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.115.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.115.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.115 のリリースへようこそ。今回のリリースでは、新しいコンパニオンアプリ「VS Code Agents」の導入により、エージェントネイティブ開発の体験がさらに向上しました！

-   [VS Code Agents アプリ](#_visual-studio-code-agents-preview): エージェントネイティブ開発向けに最適化された新しいコンパニオンアプリで、VS Code Insiders と並行して動作します。
    
-   [統合ブラウザ](#_integrated-browser): エージェントが統合ブラウザをよりシームレスに利用できるよう、いくつかの改善が行われました。
 
-   [ターミナルツール](#_terminal-tools-improvements): エージェントがバックグラウンドのターミナルとやり取りするための新機能が追加されました。
 

プログラミングをお楽しみください！

* * *

## Visual Studio Code Agents (プレビュー)

**Visual Studio Code Agents** は、エージェントネイティブ開発向けに構築された、VS Code Insiders と共に提供される新しいプレビュー版コンパニオンアプリです。

-   **プロジェクト間でタスクを並行処理** - 複数のリポジトリでエージェントセッションを並行して開始し（各セッションは独自のワークツリーで分離されます）、コンテキストを素早く切り替え（選択内容に合わせてUIが適応します）、人間とエージェントによるレビューを反復的に行えます。
    
-   **監視とレビュー** - セッションの進捗を追跡し、インラインで差分を表示し、エージェントへのフィードバックを残し、アプリを離れることなくプルリクエストを作成できます。
 
-   **カスタマイズ設定が引き継がれます** - カスタム指示、プロンプトファイル、カスタムエージェント、MCPサーバー、フック、プラグインはすべて、テーマなどの他の VS Code カスタマイズと同様に、Agents アプリでも機能します。
    
-   **追加インストール不要** - このアプリは VS Code Insiders に同梱されています。OS のスタートメニューまたはアプリケーションフォルダから起動するか、コマンドパレットから **Chat: Open Agents Application** を実行してください。
 

Agents アプリは急速に進化しているプレビュー版です。現在は VS Code Insiders でのみ利用可能であり、GitHub のイシューを通じて皆様からのフィードバックをお待ちしています。

![セッションと変更内容が開かれた状態の VS Code Agents アプリのスクリーンショット。](/assets/updates/1_115/agents-release-notes-1.webp)

## 統合ブラウザ

今回のリリースでは、エージェント向けの統合ブラウザの体験と機能をさらに強化しています。

### ブラウザエージェントツールの改善

**設定**: workbench.browser.enableChatTools VS Codeで開く VS Code Insidersで開く

#### ツールラベルの改善

エージェントがブラウザツールを呼び出した際、ツール呼び出しに、より説明的なラベルと、対象のブラウザタブに直接移動するためのリンクが表示されるようになりました。

_旧バージョン:_  
![「ブラウザ内の要素をクリックしました」と表示されるツール呼び出しのスクリーンショット。](/assets/updates/1_115/browser-tool-old.webp)

_新:_  
![「Test Page」のヘッダーバナーを右クリックしました」というツール呼び出しのスクリーンショット（Test Pageへのリンク付き）。](/assets/updates/1_115/browser-tool-new.webp)

#### 長時間実行スクリプトのサポート

`Run Playwright Code` ツールは、長時間実行されるスクリプトのサポートが改善されました。 実行に5秒以上かかるスクリプト（デフォルト設定）は、エージェントがポーリングするための遅延結果を返すようになりました。

#### 重複タブの削減

エージェントによるブラウザタブの繰り返し開く行為が、より厳しく抑制されるようになりました。エージェントが新しいタブを開こうとした際、同じホストへのタブが既に開かれている場合、エージェントから明示的なフラグが渡されない限り、新しいタブは開かれません。

### 統合ブラウザでのピンチズーム（macOS）

[統合ブラウザ](https://code.visualstudio.com/docs/debugtest/integrated-browser)が、macOSでピンチズームに対応しました。トラックパッドのピンチジェスチャーを使用して、Webページのコンテンツを最大3倍まで拡大できます。

標準のブラウザズーム（⌘=（Windows、LinuxではCtrl+=） / ⌘-（Windows、LinuxではCtrl+-））とは異なり、ピンチ・トゥ・ズームは純粋に視覚的な拡大であり、ページレイアウトの再配置は行われません。

## ターミナルツールの改善

今回のリリースでは、バックグラウンドでターミナルコマンドを実行する際のエージェントの操作性が改善されました。

### バックグラウンドのターミナルへの入力送信

以前は、バックグラウンドのターミナルは読み取り専用であり、`get_terminal_output` のみが利用可能でした。これは、フォアグラウンドのターミナルがタイムアウトしてバックグラウンドに移動した場合、エージェントがそれとのやり取りができなくなるため、特に制約となっていました。

新しい `send_to_terminal` ツールを使用することで、エージェントはバックグラウンドのターミナルと引き続きやり取りできるようになります。たとえば、パスワードプロンプトを待っている間に SSH セッションがタイムアウトした場合でも、エージェントは接続を完了するために必要な入力を送信できます。

### バックグラウンドターミナルの通知 (実験的)

**設定**: chat.tools.terminal.backgroundNotifications VS Codeで開く VS Codeで開く Insiders

以前は、ターミナルコマンドがバックグラウンドで実行されている場合、エージェントはそのステータスを確認するために手動で `get_terminal_output` を呼び出す必要がありました。コマンドが完了したか、入力が必要になったかを把握する手段はありませんでした。

新しい実験的な設定 `chat.tools.terminal.backgroundNotifications` (VS Code で開く | VS Code Insiders) により、バックグラウンドで実行中のターミナルコマンドが完了したり、ユーザー入力が必要になったりした際に、エージェントに自動的に通知されるようになりました。これは、タイムアウトしてバックグラウンドに移動したフォアグラウンドのターミナルにも適用されます。これにより、エージェントは出力を確認したり、`send_to_terminal` ツールを使用して入力を提供したりするなど、適切なアクションを実行できるようになります。

## 非推奨となった機能と設定

### 本リリースでの新たな非推奨機能

なし

### 今後の非推奨機能

-   **編集モード**は、VS Code バージョン 1.110 をもって正式に非推奨となりました。ユーザーは、VS Code の設定 `chat.editMode.hidden` を通じて、一時的に編集モードを再有効化できます。この設定はバージョン 1.125 までサポートされます。 バージョン 1.125 以降、編集モードは完全に削除され、設定から有効にすることはできなくなります。

## 主な修正

-   [vscode#304257](https://github.com/microsoft/vscode/issues/304257) - 統合された pwsh のターミナル再起動により、カーソルが誤った位置に移動する問題
-   [vscode#304679](https://github.com/microsoft/vscode/issues/304679) - Caps Lock キーを押すと、VS Code ターミナル内の Claude Code に生のエスケープシーケンス "\[57358u" が挿入される

## 感謝

課題追跡への貢献:

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

`vscode`への貢献:

-   [@andysharman](https://github.com/andysharman): 機能: デフォルトの新規セッションモードに対するA/Bテストを追加 [PR #306532](https://github.com/microsoft/vscode/pull/306532)
-   [@chetanr-25](https://github.com/chetanr-25): 動的スタイルシートルールの型安全性の改善 [PR #288651](https://github.com/microsoft/vscode/pull/288651)
-   [@danplischke (Dan Plischke)](https://github.com/danplischke): serve-web CLI に default-folder、default-workspace、disable-telemetry を追加 [PR #299512](https://github.com/microsoft/vscode/pull/299512)
-   [@mossgowild (moss)](https://github.com/mossgowild): 修正: \_extractImagesFromOutput における致命的な正規表現のバックトラッキングを防止 [PR #307447](https://github.com/microsoft/vscode/pull/307447)
-   [@xingsy97 (xingsy97)](https://github.com/xingsy97): コメント: コメントパネルでツリー項目を再利用する際のメモリリークを修正 [PR #304666](https://github.com/microsoft/vscode/pull/304666)
-   [@yogeshwaran-c (Yogeshwaran C)](https://github.com/yogeshwaran-c)
    -   修正: ウィンドウタイトル内のエディタサービスのスコープを、自身のエディタグループコンテナに限定 [PR #306226](https://github.com/microsoft/vscode/pull/306226)
    -   修正: ブレークポイントウィジェットを再表示する際、「ブレークポイントを待機」の選択状態を維持する [PR #306564](https://github.com/microsoft/vscode/pull/306564)
    -   修正: 検索入力欄の矢印キーによるナビゲーションに追加の切り替えボタンを追加 [PR #306559](https://github.com/microsoft/vscode/pull/306559)
    -   新機能: ミニマップにカバレッジインジケーターを表示 [PR #307250](https://github.com/microsoft/vscode/pull/307250)
    -   修正: テストカバレッジフィルターのクイックピックの可読性を改善 [PR #306562](https://github.com/microsoft/vscode/pull/306562)
    -   修正: テストエクスプローラーで、認識されない @ で始まるテキストを通常のフィルターとして扱うようにしました [PR #307555](https://github.com/microsoft/vscode/pull/307555)

* * *

新機能が利用可能になり次第、ぜひお試しいただければ幸いです。最新情報については、こちらを頻繁にチェックしてください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
