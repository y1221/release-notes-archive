---
product: VSCode
version: 1.116.0
release_title: Visual Studio Code 1.116
release_date: 2026-04-15
source_url: "https://code.visualstudio.com/updates/v1_116"
archived_at: 2026-04-16
---

# Visual Studio Code 1.116

# Visual Studio Code 1.116

[LinkedIn](https://www.linkedin.com/showcase/vs-code)、[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)でフォローしてください |

* * *

_リリース日: 2026年4月15日_

ダウンロード: Windows: [x64](https://update.code.visualstudio.com/1.116.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.116.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.116.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.116.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.116.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.116.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.116.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.116.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.116.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.116 へようこそ。今回のリリースでは、チャットやエージェントとの連携がさらに強力かつ効率的になりました。主な新機能は以下の通りです：

-   [エージェントのデバッグログ](#_debug-previous-agent-sessions): 過去のエージェントセッションのログを表示し、エージェントとのやり取りを把握・デバッグできます。
    
-   [Copilot CLI の思考負荷](#_configure-thinking-effort-in-copilot-cli): Copilot CLI でモデルの思考負荷を設定し、応答の品質とレイテンシのバランスを調整できます。
 
-   [ターミナル エージェント ツール](#_terminal-tools): エージェント セッションから任意のターミナル セッションを操作できます。
    
-   [GitHub Copilot の組み込み機能](#_github-copilot-is-now-built-in): GitHub Copilot Chat 拡張機能をインストールすることなく、AI を利用できるようになります。
 

プログラミングを楽しんでください！

* * *

## エージェントの操作体験

### 過去のエージェント セッションのデバッグ

**設定**: github.copilot.chat.agentDebugLog.fileLogging.enabled VS Code で開く VS Code で開く Insiders

「エージェント デバッグ ログ」パネルには、チャット セッション中のエージェントとのやり取りが時系列で記録されたイベント ログが表示されます。これは、プロンプトを送信した際に何が起きているかを把握したり、チャットのカスタマイズをデバッグしたりするのに役立ちます。

現在、現在のセッションだけでなく過去のセッションのログも表示できるようになり、ログはローカルのディスクに保存されます。これにより、セッションが終了した後でも、過去のエージェントとのやり取りを確認・デバッグできます。

![過去のセッションログの一覧が表示された「エージェントデバッグログ」パネルを示すスクリーンショット。](/assets/updates/1_116/agent-debug-logs.webp)

「エージェントデバッグログ」パネルを有効にする設定は、トラブルシューティング設定 github.copilot.chat.agentDebugLog.fileLogging.enabled に統合されました。VS Code で開く VS Code で開く Insiders

[エージェントデバッグログパネル](https://code.visualstudio.com/docs/copilot/chat/chat-debug-view#_agent-debug-log-panel)の詳細については、ドキュメントをご覧ください。

### Copilot CLI での推論負荷の設定

ローカルエージェントセッションと同様に、Copilot CLI セッションでも、言語モデルピッカーを使用して推論モデルの推論負荷を設定できるようになりました。推論負荷は、モデルが各リクエストに対してどの程度の推論を行うかを制御するもので、ニーズに応じて応答の品質とレイテンシのバランスを調整するのに役立ちます。

ピッカーで推論モデルを選択し、矢印をクリックして利用可能なエフォートレベルを表示します。利用可能なエフォートレベルはモデルによって異なる場合があります。非推論モデルでは、このサブメニューは表示されません。

![Copilot CLIでの推論を示すスクリーンショット。](/assets/updates/1_116/copilot-cli-reasoning.webp)

ドキュメントで[思考の負荷と推論](https://code.visualstudio.com/docs/copilot/concepts/language-models#_thinking-and-reasoning)について詳しくご確認ください。

### カスタマイズ ウェルカム ページ

**Chat: Open Customizations** コマンドまたはチャットビューの歯車アイコンからアクセスできる「チャットカスタマイズ」ダイアログに、すべてのエージェントカスタマイズを概観できるウェルカムページが追加されました。

![すべてのエージェントカスタマイズタイプを概観できる「チャットカスタマイズ」ウェルカムページのスクリーンショット。](/assets/updates/1_116/chat-customizations-overview.webp)

カスタマイズ作成は最初は難しく感じるかもしれませんが、ウェルカムページの**エージェントのカスタマイズ**入力欄を使用すると、自然言語での説明に基づいて、エージェント、スキル、指示などのカスタマイズ案を VS Code に生成させることができます。

エージェントのカスタマイズに関する詳細は、[エージェントのカスタマイズに関するドキュメント](https://code.visualstudio.com/docs/copilot/customization/overview)をご覧ください。

### ツール確認カルーセル (実験的機能)

**設定**: chat.tools.confirmationCarousel.enabled VS Code で開く VS Code Insiders で開く

複数のツール呼び出しの承認や拒否をより効率的に行うため、チャットではツール確認用のカルーセルコントロールが表示されるようになりました。このカルーセルを使用すると、会話をスクロールすることなく、複数のツール呼び出しを順番に確認・承認できる、コンパクトで操作しやすい方法を提供します。

![保留中のツール確認を確認するためのナビゲーションを備えた確認カルーセルを示すスクリーンショット。](/assets/updates/1_116/confirmation-carousel.webp)

この機能は実験的なものであり、chat.tools.confirmationCarousel.enabled 設定によって制御されます。VS Code Insiders ではデフォルトで有効になっており、フィードバックを収集しながら Stable 版へ段階的に展開されています。

### Visual Studio Code Agents (プレビュー)

前回のリリースでは、VS Code Insiders に同梱され、エージェントネイティブ開発向けに構築された新しいプレビュー版コンパニオンアプリ、**Visual Studio Code Agents** アプリをご紹介しました。

バージョン 1.115 でこのアプリを導入して以来、フィードバックに基づいて機能や修正を重ね、優れたエージェントファーストの体験を提供できるよう継続的に改善を続けています。

最新の更新内容の一部は以下の通りです：

-   **推論レベルの選択**：前述の通り、Copilot CLI セッションにおいて、推論モデルの処理負荷を設定できるようになりました。
-   **プランモードの処理**：プランニングを伴う CLI セッションでは、プランモードが自動的に有効になります。
-   **「変更」パネルでの「ファイル」タブのデフォルト表示**：「変更」パネルで **ファイル** タブがデフォルトで表示されるようになりました。
-   **セッションの応答、テーマ、レンダリングの改善**: 応答処理、視覚的な一貫性、およびレンダリングパフォーマンスに関するさまざまな改良が行われました。
-   **アプリ名**: アプリ名を **Visual Studio Code Agents - Insiders** に変更しました。

VS Code のウェルカムページから、`新しい Agents アプリを試す` への新しいエントリポイントを追加しました:

![セッションと変更内容が開かれた状態の VS Code Agents アプリのスクリーンショット。](/assets/updates/1_116/agents-welcome.png)

1.115 と同じ方法でアプリを開くことも引き続き可能です:

-   OS のスタートメニューまたは「アプリケーション」フォルダーから **Visual Studio Code Agents - Insiders** を起動します。
-   コマンドパレットから **Chat: Open Agents Application** を実行します。

![セッションと変更内容が開かれている VS Code Agents アプリのスクリーンショット](/assets/updates/1_116/agents-release-notes-1.webp)

## ターミナルツール

### エージェントツールのフォアグラウンドターミナル対応

エージェントツール `send_to_terminal` および `get_terminal_output` は、エージェントによって作成されたバックグラウンドのターミナルだけでなく、フォアグラウンドのターミナルでも動作するようになりました。これにより、エージェントは、実行中の REPL や対話型スクリプトなど、ターミナルパネルに表示されている任意のターミナルから出力を読み取り、入力を送信できるようになります。

### ターミナル入力の改善

このリリースでは、エージェントセッションにおけるターミナル入力の操作性がいくつか改善されています:

-   **ターミナル入力の検出**: LLM ベースの入力要求検出機能が削除されました。以前は、ターミナル出力の各チャンクごとに、ターミナルが入力を待機しているかどうかを分類するための追加の LLM 呼び出しが発生し、レイテンシの増加やトークンの無駄な消費を招いていました。エージェントは現在、`send_to_terminal` を通じてターミナル入力を直接処理し、必要に応じて質問カルーセルを使用してユーザーに判断を委ねます。
    
-   **進行状況メッセージ**: エージェントがターミナルに回答を送信する際、進行状況メッセージにどの質問への回答であるかが表示されるようになりました。例: `"my-project" をターミナルに送信中 (回答対象: プロジェクト名は？)`。
 
-   **ターミナルにフォーカス**: パスワードの入力や `npm init` のような対話型インストーラーなど、エージェントがターミナル入力を必要とする場合、質問カルーセルに **ターミナルにフォーカス** ボタンが表示されるようになりました。このボタンを選択すると、該当するターミナルにフォーカスが移り、直接回答を入力できます。カルーセルが開いている状態でターミナルに入力を開始すると、カルーセルは自動的に閉じられ、直接入力していることがエージェントに通知されます。
 

### バックグラウンドのターミナル通知がデフォルトで有効化

**設定**: chat.tools.terminal.backgroundNotifications VS Codeで開く VS Code Insidersで開く

バックグラウンドターミナル通知がデフォルトで有効になりました。エージェントがバックグラウンドターミナルでコマンドを実行すると、コマンドの完了、タイムアウト、または入力が必要な際に自動的に通知を受け取ります。これにより、エージェントはターミナル出力をポーリングすることなく、より迅速かつ正確に応答できるようになります。

## チャットUX

今回のリリースでは、チャットのユーザー体験（UX）にいくつかの改善が加えられています：

-   **トップレベルでの差分表示**：コードの差分がチャット画面に直接表示されるようになりました。これにより、別の差分ビューに切り替えることなく、提案された変更内容を確認できます。
 
 ![ストリーミング更新と進行状況インジケーターによるチャット表示の改善を示すスクリーンショット。](/assets/updates/1_116/chat-rendering-improvements.webp)
    
-   **レンダリングパフォーマンス**: レイアウトの乱れを軽減し、ストリーミング中の増分更新を効率化することで、チャットの応答表示が高速化されました。また、ツールの呼び出し更新が短時間に集中した際に拡張機能ホストが一時的にフリーズする問題も修正されました。
 
-   **チャット送信パフォーマンス**: チャットのカスタマイズ読み込み中にチャットメッセージの送信がブロックされる問題を修正しました。 プロンプトの読み込みがまだ進行中であっても、メッセージがチャット画面に即座に表示されるようになりました。
 
-   **サブエージェントの進行状況**: サブエージェントの進行状況を示す拡大ビューが視覚的により明確になり、サブエージェントが実行中の状態を把握しやすくなりました。
 

## アクセシビリティ

### Agentsアプリのアクセシビリティ

VS Code Insiders で利用可能な Agents アプリは、キーボードおよびスクリーンリーダーユーザー向けの包括的なアクセシビリティサポートを新たに搭載しました。

-   **アクセシビリティヘルプダイアログ**: チャット入力フィールドにフォーカスが当たっている状態で Alt+F1 (macOS では Option+F1) を押すと、アクセシビリティヘルプダイアログが開きます。このダイアログでは、Agents アプリの概要、利用可能なビューの一覧、および各ビュー間を移動するためのキーバインドが表示されます。
    
-   **キーボードナビゲーションコマンド**: 新しいキーバインドにより、Agents アプリ内の主要なビューに素早くフォーカスを合わせることができます:
 
 -   `Focus Changes View` ()
    -   `Focus Chat Customizations View` ()
    -   `Focus Files Explorer View` ()
 
 これらのキーバインドは Agents ウィンドウ内に限定されており、標準の VS Code のキーバインドを上書きすることはありません。
    
-   **詳細度設定**: `accessibility.verbosity.sessionsChat` 設定は、チャット入力時にアクセシビリティヘルプを開くための ARIA ヒントが読み上げられるかどうかを制御します。読み上げを抑制するには、この設定を無効にしてください。
    
-   **ARIAラベルとランドマーク**: 補助バーには説明的なラベルが付いた補足的なランドマークが設定され、ワークスペースピッカーのボタンには意味のあるARIAラベルが割り当てられ、セッションリストの項目には作成時刻のコンテキストが含まれるようになりました。
 

### スクリーンリーダーによるキーボードショートカット検索結果の読み上げ

キーボードショートカットエディタで検索を行う際、スクリーンリーダーが検索結果への移動方法を読み上げるようになりました。NVDA やその他のスクリーンリーダーは「Ctrl + 下矢印キーを使用して、検索されたショートカットの詳細にアクセスしてください」と読み上げるため、結果テーブルへ素早く移動できます。この読み上げは、accessibility.verbosity.keyboardShortcuts VS Code で開く VS Code Insiders で開く 設定で無効にできます。

## 統合ブラウザ

[統合ブラウザ](https://code.visualstudio.com/docs/debugtest/integrated-browser) へのアクセスが、2つの新しいエントリポイントによりさらに簡単になりました：

-   **表示** メニューの **表示** > **ブラウザ**
-   キーボードショートカット ⌥⌘/ (Windows、Linux: Ctrl+Alt+)

これらの操作により、タブが開いていない場合は統合ブラウザが開き、開いているタブをすばやく確認して移動することができます。

これらの新しい起動方法は、既存の以下の方法に追加されます：

-   **Browser: Open Integrated Browser** コマンド
-   localhost サイトへのリンククリック ( workbench.browser.openLocalhostLinks VS Code で開く VS Code Insiders で開く )
-   タイトルバーのアイコン ( workbench.browser.showInTitleBar VS Codeで開く VS Code Insidersで開く )
-   エージェントにブラウザの起動や操作を依頼する ( workbench.browser.enableChatTools VS Codeで開く VS Code Insidersで開く )

## 言語

### JS/TS Chat Features 拡張機能 (プレビュー)

**設定**: jsts-chat-features.skills.enabled VS Codeで開く VS Code Insidersで開く

新しい組み込みの JS/TS チャット機能拡張機能は、TypeScript および JavaScript に対応する Copilot の機能を強化します。この最初のリリースでは、この拡張機能は最新の TypeScript プロジェクトを設定するための機能を提供します。今後のリリースで機能を強化・拡張する予定です。

今すぐこれらのスキルをお試しいただくには、jsts-chat-features.skills.enabled VS Codeで開く VS Codeで開く Insiders 設定を有効にしてください。

## エンジニアリング

### GitHub Copilotが組み込み機能になりました

GitHub Copilot Chatは、VS Codeの組み込み拡張機能となりました。新規ユーザーは、チャット、インライン提案、エージェントなどのCopilot機能を利用するために、拡張機能をインストールする必要がなくなりました。 Copilotは、標準のVS Codeインストールの一部として、インストール直後から利用可能です。

この変更は、VS CodeをオープンソースのAIコードエディタにするという、私たちの継続的な取り組みの一環です。Copilotを組み込み拡張機能として提供することで、新規ユーザーの導入障壁を低減し、初回起動時からAI機能をシームレスに統合できるようにします。

既存ユーザーにはこの変更による影響はありません。すでにCopilot拡張機能をインストールしている場合は、これまで通り動作します。

これまでと同様に、AI機能を使用したくない場合は、Insiders設定の `chat.disableAIFeatures` で無効にすることができます。

## 拡張機能への貢献

### GitHub Pull Requests

プルリクエストやイシューの作成、管理、作業を可能にする [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) 拡張機能の開発が進みました。新機能は以下の通りです：

-   プルリクエストを作成するためのチャットツールを追加しました。
-   「ローカルブランチとリモートを削除」コマンドからワークツリーも削除できるようになりました。

この拡張機能の [0.136.0 リリースノート](https://github.com/microsoft/vscode-pull-request-github/blob/main/CHANGELOG.md#01360) を確認して、このリリースの全内容をご確認ください。

## 非推奨の機能と設定

### 今回のリリースでの新たな非推奨項目

なし

### 今後の非推奨項目

-   **編集モード**は、VS Code バージョン 1.110 をもって正式に非推奨となりました。ユーザーは、VS Code の設定 `chat.editMode.hidden` を通じて、一時的に編集モードを再有効化できます。VS Code で開く VS Code Insiders で開く。この設定はバージョン 1.125 までサポートされます。バージョン 1.125 以降、編集モードは完全に削除され、設定を通じて有効にすることはできなくなります。

## 感謝

課題追跡への貢献：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

`vscode`への貢献:

-   [@AndreasArvidsson (Andreas Arvidsson)](https://github.com/AndreasArvidsson): TextmateSnippetのcloneメソッドを修正し、\_childrenを正しく割り当てるようにした [PR #295555](https://github.com/microsoft/vscode/pull/295555)
-   [@gryan11 (Gabriel Ryan)](https://github.com/gryan11): 修正: テスト用モッククラスに欠落していたオーバーライド修飾子を追加 [PR #308558](https://github.com/microsoft/vscode/pull/308558)
-   [@maruthang (Maruthan G)](https://github.com/maruthang)
    -   修正：チャットストリーミング中にコードブロックのツールバー表示を維持 [PR #307978](https://github.com/microsoft/vscode/pull/307978)
    -   修正: インラインテスト出力メッセージからANSIエスケープコードを除去 [PR #308161](https://github.com/microsoft/vscode/pull/308161)
    -   修正: 初回起動時のマークダウンファイルのデフォルト表示を解決 [PR #308739](https://github.com/microsoft/vscode/pull/308739)
-   [@romalpani (Rohan Malpani)](https://github.com/romalpani): 新機能: 検索ウィジェットとヘッダーアクションを追加してセッションビューを強化 [PR #307679](https://github.com/microsoft/vscode/pull/307679)
-   [@winstliu (Winston Liu)](https://github.com/winstliu): --prof-startup がレンダラー/拡張機能ホストをプロファイルできない問題を修正 [PR #307849](https://github.com/microsoft/vscode/pull/307849)
-   [@yogeshwaran-c (Yogeshwaran C)](https://github.com/yogeshwaran-c)
    -   失敗したテストにスクロールバーインジケーターを追加 [PR #307996](https://github.com/microsoft/vscode/pull/307996)
    -   修正: failureInVisibleDocument のプレビューにおけるメッセージ位置の可視性を確認 [PR #308697](https://github.com/microsoft/vscode/pull/308697)
    -   ガターで Alt キーを押しながらクリックした際にブレークポイントウィジェットを表示 [PR #308687](https://github.com/microsoft/vscode/pull/308687)
    -   修正: デバッグコンソールでのテキスト選択からソース注釈を除外 [PR #308925](https://github.com/microsoft/vscode/pull/308925)
-   [@zackbach (Zack Eisbach)](https://github.com/zackbach): `tokenTypes` への `regex` サポートを追加 [PR #304885](https://github.com/microsoft/vscode/pull/304885)

* * *

新機能がリリースされ次第、すぐに試してくださる皆様に心より感謝しております。ぜひ定期的にこちらをチェックして、新機能をご確認ください。

> 過去の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
