---
product: VSCode
version: 1.113.0
release_title: Visual Studio Code 1.113
release_date: 2026-03-25
source_url: "https://code.visualstudio.com/updates/v1_113"
archived_at: 2026-03-29
---

# Visual Studio Code 1.113

# Visual Studio Code 1.113

_リリース日: 2026年3月25日_

ダウンロード: Windows: [x64](https://update.code.visualstudio.com/1.113.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.113.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.113.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.113.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.113.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.113.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.113.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.113.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.113.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.113 のリリースへようこそ。このリリースでは、**エージェントおよび開発者体験**全般にわたるさまざまな改善が含まれています。

-   [**チャットのカスタマイズ**](#_chat-customizations-editor-preview): 単一の統合インターフェースから、チャットに関連するすべてのカスタマイズを管理できます。
 
-   [**設定可能な推論レベル**](#_configurable-thinking-effort-in-model-picker): UI から直接、モデルの推論レベルを制御できます。
    
-   [**ネストされたサブエージェント**](#_nested-subagents): 複雑な多段階ワークフローのために、サブエージェントが他のサブエージェントを呼び出せるようになりました。
 
-   [**CLIエージェント機能**](#_agent-experience): CLIエージェントでMCPサーバーの使用、セッションの分岐、デバッグログの表示が可能です。
 
-   [**画像のプレビュー**](#_images-preview-for-chat-attachments): チャット内の画像を、フル機能の画像ビューアでプレビューできます。
 
-   [**デフォルトテーマの刷新**](#_new-default-themes): 更新されたデフォルトのライトテーマとダークテーマで、新鮮なデザインをお楽しみください。
    

プログラミングを楽しんでください！

* * *

VS Codeは全ユーザー向けに段階的に展開されています。VS Codeの**[更新を確認](https://vscode.com/updates)]**を使用して、すぐに最新バージョンを入手してください。

新機能をいち早く試したい場合は、[**ナイトリーInsidersビルドをダウンロード**](https://code.visualstudio.com/insiders)してください。このビルドには、最新アップデートが利用可能になり次第、すぐに反映されます。

* * *

## エージェントの操作体験

ローカル、CLI、Claudeエージェントで同じツールとワークフローを使用し、よりスムーズに多段階の自動化を作成できます。

### Copilot CLI および Claude エージェントにおける MCP のサポート

以前は、VS Code で設定した MCP サーバーは、エディター内で実行されているローカルエージェントでのみ利用可能でした。今回のリリースでは、Copilot CLI および Claude エージェントにおける MCP サーバーのサポートが追加されました。

VS Codeに登録したMCPサーバーは、Copilot CLIおよびClaudeエージェントにブリッジされます。これは、ユーザー定義のサーバーと、`mcp.json`ファイルを通じてワークスペースで定義されたサーバーの両方に適用されます。

[VS CodeでのMCPサーバーの使用方法](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)について詳しくは、こちらをご覧ください。

### Copilot CLI および Claude エージェントでのセッションのフォーク

**設定**: github.copilot.chat.cli.forkSessions.enabled VS Code で開く VS Code Insiders で開く

セッションのフォーク機能を使用すると、会話履歴の任意の時点にある既存のセッションのコピーを作成できます。これは、元のセッションの文脈を失うことなく、別の考え方を模索したり、異なるプロンプトを試したりしたい場合に便利です。

![Copilot CLI セッションのフォークを示すスクリーンショット。](/assets/updates/1_113/copilot-cli-fork-sessions.png)

今回のリリースより、Copilot CLI（実験的機能）およびClaudeエージェントの両方でセッションのフォークが可能になりました。Copilot CLIでフォーク機能を有効にするには、設定の github.copilot.chat.cli.forkSessions.enabled を有効にしてください。

ドキュメントの [チャットセッションのフォーク](https://code.visualstudio.com/docs/copilot/chat/chat-sessions#_fork-a-chat-session)について、ドキュメントでご確認ください。

### Copilot CLI および Claude CLI セッションのエージェントデバッグログ (プレビュー)

「エージェントデバッグログ」パネルは、プロンプトを送信した際に何が起きているかを把握するための主要なツールです。 このパネルには、チャット セッション中のエージェントとのやり取りが時系列で記録されたイベント ログが表示されます。Copilot CLI および Claude エージェント セッションでも、エージェント デバッグ ログ パネルが利用可能になりました。ローカル エージェント セッションへの対応は既に提供されていました。

![Copilot CLI セッションのログを表示したエージェント デバッグ ログ パネルのスクリーンショット。](/assets/updates/1_113/agent-flow-chart-v2.png)

[エージェントデバッグログパネル](https://code.visualstudio.com/docs/copilot/chat/chat-debug-view#_agent-debug-log-panel)の詳細については、ドキュメントをご覧ください。

### SDK API を利用した Claude セッションの一覧表示

VS Code では、セッションとそのメッセージを一覧表示するために、Claude エージェント SDK の公式 API を採用するようになりました。以前はディスク上の Claude JSONL ファイルを解析して表示していましたが、Claude の構造が変更された場合に同期が取れなくなるリスクがありました。Claude エージェントにすべてのセッションやメッセージが表示されないといった問題が発生していた場合、これで解決されるはずです。

### ネストされたサブエージェント

**設定**: chat.subagents.allowInvocationsFromSubagents VS Codeで開く VS Code Insidersで開く

サブエージェントが他のサブエージェントを呼び出せるようになり、より複雑な多段階ワークフローが可能になりました。以前は、無限再帰を防ぐため、サブエージェントが他のサブエージェントを呼び出すことは制限されていました。 新しい設定 `chat.subagents.allowInvocationsFromSubagents`（VS Codeで開く VS Codeで開く Insiders）を使用することで、必要に応じてこの機能を有効にできます。

ドキュメントの [サブエージェントの使用方法](https://code.visualstudio.com/docs/copilot/agents/subagents) について詳しくご覧ください。

### プラグインマーケットプレイスの管理

設定済みのすべてのプラグインマーケットプレイスを一覧表示する新しいコマンド **Chat: Manage Plugin Marketplaces** を追加しました。各マーケットプレイスについて、プラグインの閲覧、ローカルディレクトリの開く、および削除を行うことができます。

[エージェントプラグインの使用方法](https://code.visualstudio.com/docs/copilot/customization/agent-plugins) については、ドキュメントをご覧ください。

### プラグインインストール用の URL ハンドラー

URL ハンドラーを使用して、VS Code プラグインのインストールをトリガーできます。マーケットプレイスをインストールするには、次の形式のリンクをトリガーします。

```
vscode://chat-plugin/add-marketplace?ref=<source>
```

ここで、「source」は GitHub の `repo/owner` または Base64 エンコードされた Git URI です。拡張機能をインストールするには、次の形式を使用します。

```
vscode://chat-plugin/install?source=<source>
```

VS Code Insiders を対象にする場合は、URL 内の `vscode` を `vscode-insiders` に置き換えてください。

## チャット体験

単一のエディターからプロジェクトに合わせて AI を調整し、モデルが応答する前に推論を行う度合いを制御し、チャットを離れることなく視覚的なコンテキストを確認できます。

### チャットカスタマイズエディター (プレビュー)

チャットカスタマイズエディターは、すべてのチャットカスタマイズを一元的に作成・管理できる UI を提供します。このエディターでは、カスタマイズの種類（カスタム指示、プロンプトファイル、カスタムエージェント、エージェントスキルなど）が個別のタブに整理されています。また、構文の強調表示と検証機能を備えた組み込みのコードエディターも提供されます。

カスタマイズをゼロから作成することも、AI を使用してプロジェクトに基づいた初期コンテンツを生成することも可能です。MCP サーバーやエージェントプラグインを追加するには、エディターから直接対応するマーケットプレイスを参照してください。

エディターを開くには、チャットビューで **「チャットの設定（歯車アイコン）」** を選択するか、コマンドパレット（⇧⌘P（Windows、Linux では Ctrl+Shift+P））から **「Chat: チャットカスタマイズを開く」** を実行してください。

[Chat Customizationsエディタ](https://code.visualstudio.com/docs/copilot/customization/overview#_chat-customizations-editor)の詳細については、ドキュメントをご覧ください。

### モデルピッカーでの推論負荷の設定

Claude Sonnet 4.6 や GPT-5.4 などの推論をサポートするモデルでは、モデルピッカーに直接 **Thinking Effort** サブメニューが表示されるようになりました。これを使用すると、VS Code の設定画面に移動することなく、各リクエストに対してモデルが適用する推論の量を制御できます。VS Code は、会話全体を通じてモデルごとに選択された負荷レベルを保持します。

ピッカーで推論モデルを選択し、矢印をクリックすると、利用可能な思考負荷レベルが表示されます。利用可能なレベルはモデルによって異なる場合があります。推論機能のないモデルには、このサブメニューは表示されません。

![推論モデルに対して「低」「中」「高」の思考負荷レベルが表示された「思考負荷」サブメニューを含むモデルピッカーのスクリーンショット。](/assets/updates/1_113/chat-model-picker.png)

モデルピッカーのラベルには、選択されたエフォートレベル（例：「GPT-5.3-Codex · Medium」）も表示されるようになりました。これにより、各モデルで現在どのエフォートレベルが有効になっているかを一目で確認しやすくなりました。

ドキュメントで[思考エフォートと推論](https://code.visualstudio.com/docs/copilot/concepts/language-models#_thinking-and-reasoning)について詳しくご覧ください。

> **注:** github.copilot.chat.anthropic.thinking.effort [VS Codeで開く](https://github.com/github-copilot/github-copilot/repository/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copilot/github-copil

### チャット添付ファイルの画像プレビュー

**設定**: imageCarousel.chat.enabled (VS Codeで開く、Insiders版)、imageCarousel.explorerContextMenu.enabled (VS Codeで開く、Insiders版)

チャット内で画像を扱う際、リクエストにスクリーンショットを添付した場合でも、エージェントがツール呼び出しを通じて画像を生成した場合でも、任意の画像添付ファイルを選択して、フルスクリーンの画像ビューアで開くことができるようになりました。

ビューアーはモーダルオーバーレイとして開き、以下の機能をサポートしています：

-   **ナビゲーション**：矢印ボタン、キーボードの矢印キー、または下部のサムネイルストリップを使用して、現在のチャットセッションのすべての画像を閲覧できます。
-   **セクション**: 画像は会話のやり取りごとにグループ化されているため、特定のリクエストやレスポンスからどの画像が送信されたかを確認できます。
-   **ズームとパン**: クリックで拡大、Option+クリック（Mac）またはCtrl+クリック（Windows/Linux）で縮小、スクロールやピンチ操作で連続的にズームできます。高倍率のズーム時には、スクロールして画像内を移動できます。

画像ビューアは、画像ファイルのエクスプローラービューのコンテキストメニューからも利用できるようになりました。**「Images Preview で開く」**を選択すると、現在のフォルダ内のすべての画像が表示された状態でビューアが開きます。

両機能はデフォルトで有効になっています。個別に設定するには、imageCarousel.chat.enabled Open in VS Code Open in VS Code Insiders および imageCarousel.explorerContextMenu.enabled Open in VS Code Open in VS Code Insiders を使用してください。

## エディターの操作性

統合ブラウザで Web アプリの開発とテストをより安心して行えるようになり、エディターのデフォルトの見た目が刷新されました。

### 統合ブラウザでの自己署名証明書の使用

安全な HTTPS 接続に依存する Web アプリケーションを開発する場合、テスト中に自己署名証明書を使用する必要があることがよくあります。

通常、このような証明書は信頼されるべきではありません。以前は、信頼できない証明書を提示するサイトは、統合ブラウザで読み込みに失敗し、これを回避するオプションはありませんでした。

現在では、ほとんどのブラウザと同様に、検証できない証明書を一時的に信頼することを選択でき、このような状況での開発を可能にしています。

![証明書エラーが表示され、戻るまたは続行するオプションが表示された統合ブラウザのスクリーンショット。](/assets/updates/1_113/browser-cert-error.png)

続行すると、その証明書を使用した現在のホストへの接続が1週間許可されます。URLバーには接続が安全ではないことが表示され、いつでも信頼を取り消すオプションが利用可能です。

![現在のページが安全でないことを示すURLバーのポップアップ画面。「信頼を解除して閉じる」オプションが表示されている。](/assets/updates/1_113/browser-trust-dialog.png)

[統合ブラウザ](https://code.visualstudio.com/docs/debugtest/integrated-browser)の詳細については、ドキュメントをご覧ください。

### ブラウザタブ管理の改善

**設定**: workbench.browser.showInTitleBar VS Codeで開く VS Code Insidersで開く

開いているタブの管理は、もともと難しいものです。統合ブラウザタブの利用を推奨するにあたり、それらを簡単に管理できる機能をさらに追加しました。

-   **ブラウザタブのクイックオープン**
 
 このコマンドを実行すると、開いているすべてのブラウザタブを表示するクイックピックが開き、タブのフィルタリング、フォーカス、および閉じをすばやく行うことができます。
    
    このコマンドは、ブラウザがアクティブな状態で ⇧⌘A (Windows、Linux: Ctrl+Shift+A) のキーボードショートカットで実行できるほか、ブラウザタブが開いているときに表示される VS Code タイトルバーの新しいショートカットボタンからも実行できます。
    
    ![VS Codeのタイトルバーのスクリーンショット。地球儀のアイコンが付いた新しいボタンが表示されています。](/assets/updates/1_113/browser-title-bar-button.png)
 
 このボタンの表示/非表示は、workbench.browser.showInTitleBar Open in VS Code Open in VS Code Insiders 設定で変更可能です。
    
-   **すべてのブラウザタブを閉じる**
 
 ブラウザタブのコンテキストメニューに、既存の「すべて閉じる」項目と同様に、同じグループ内のすべてのブラウザタブを閉じるオプションが追加されました。また、すべてのグループにわたるブラウザタブは、コマンドパレットからも閉じることができます。
    
    ![開いている統合ブラウザタブのコンテキストメニューのスクリーンショット。「すべてのブラウザタブを閉じる」項目が表示されています。](/assets/updates/1_113/browser-close-all-item.png)
    

### 新しいデフォルトテーマ

VS Codeには、「VS Code Light」と「VS Code Dark」という新しいデフォルトテーマが搭載されました。これらのテーマは、従来のデフォルトテーマ「Modern」の使いやすさと親しみやすさを維持しつつ、新鮮でモダンな外観を提供するように設計されています。さらに、新規ユーザーの場合、OSテーマの同期はデフォルトで新しいテーマに設定されるため、VS Codeはオペレーティングシステムのライトモード/ダークモードに合わせて自動的に新しいテーマを適用します。

![VS Codeの新しいダークテーマのスクリーンショット。](/assets/updates/1_113/vs-code-dark-theme.png) _VS Code Dark_

![VS Codeの新しいライトテーマのスクリーンショット。](/assets/updates/1_113/vs-code-light-theme.png) _VS Code Light_

## 非推奨の機能と設定

### このリリースでの新しい非推奨項目

なし

### 今後の非推奨項目

-   **編集モード**は、VS Code バージョン 1.110 をもって正式に非推奨となりました。ユーザーは、VS Code の設定 `chat.editMode.hidden` を通じて、一時的に編集モードを再有効化できます。VS Code で開く VS Code Insiders で開く。この設定はバージョン 1.125 までサポートされます。 バージョン 1.125 以降、編集モードは完全に削除され、設定から有効にすることはできなくなります。

## 感謝

### 課題追跡

課題追跡への貢献者：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

`vscode`への貢献:

-   [@jcansdale (Jamie Cansdale)](https://github.com/jcansdale): 複数行のターミナル実行テキストにブラケット付きペーストを使用 [PR #302526](https://github.com/microsoft/vscode/pull/302526)
-   [@jeevaratnamputla](https://github.com/jeevaratnamputla): コマンドインジェクションのリスクを防ぐため、child\_process.exec を execFile に置き換え [PR #291825](https://github.com/microsoft/vscode/pull/291825)
-   [@kbhujbal (Kunal Bhujbal)](https://github.com/kbhujbal): コード品質の問題を修正：エラーロギングとJSDocの誤字 [PR #297893](https://github.com/microsoft/vscode/pull/297893)
-   [@sathvikc (Sathvik C)](https://github.com/sathvikc): 修正: re-entrant renderGettingStartedTipIfNeeded での重複するヒントノードの発生を防止 [PR #302317](https://github.com/microsoft/vscode/pull/302317)
-   [@ShehabSherif0 (Shehab Sherif)](https://github.com/ShehabSherif0): 修正: `sanitizeId` の正規表現におけるグローバルフラグの欠落 [PR #303603](https://github.com/microsoft/vscode/pull/303603)
-   [@xingsy97 (xingsy97)](https://github.com/xingsy97): Git - ワークツリーの無視パス計算を最適化 [PR #303955](https://github.com/microsoft/vscode/pull/303955)

`vscode-copilot-chat`への貢献:

-   [@24anisha (Anisha Agarwal)](https://github.com/24anisha)
    -   検索サブエージェント -- 相対パスと絶対パスの解決 [PR #4429](https://github.com/microsoft/vscode-copilot-chat/pull/4429)
    -   検索サブエージェントに対応するためのシステムプロンプトの更新 [PR #4500](https://github.com/microsoft/vscode-copilot-chat/pull/4500)
-   [@etvorun (ET)](https://github.com/etvorun): 修正: NESのデバウンスと言語コンテキストの取得がキャンセルトークンを無視していた問題 [PR #4384](https://github.com/microsoft/vscode-copilot-chat/pull/4384)

`vscode-python-environments`への貢献:

-   [@00zayn](https://github.com/00zayn): ${workspaceFolder}スコープのグローバル変数 `defaultInterpreterPath` による、不要な未解決インタプリタ警告を修正 [PR #1334](https://github.com/microsoft/vscode-python-environments/pull/1334)
-   [@StellaHuang95 (Stella Huang)](https://github.com/StellaHuang95): マネージャー登録の失敗に関するテレメトリを追加 [PR #1365](https://github.com/microsoft/vscode-python-environments/pull/1365)

`vscode-windows-process-tree`への貢献：

-   [@ZA139](https://github.com/ZA139): 新機能：すべてのシステムプロセスを取得するための getAllProcesses API の追加 [PR #84](https://github.com/microsoft/vscode-windows-process-tree/pull/84)

* * *

新機能がリリースされ次第、ぜひお試しいただければ幸いです。定期的にこちらをチェックして、最新情報をご確認ください。

> 過去の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
