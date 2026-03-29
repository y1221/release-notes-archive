---
product: VSCode
version: 1.112.0
release_title: Visual Studio Code 1.112
release_date: 2026-03-18
source_url: "https://code.visualstudio.com/updates/v1_112"
archived_at: 2026-03-29
---

# Visual Studio Code 1.112

# Visual Studio Code 1.112

_リリース日: 2026年3月18日_

ダウンロード: Windows: [x64](https://update.code.visualstudio.com/1.112.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.112.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.112.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.112.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.112.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.112.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.112.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.112.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.112.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.112 のリリースへようこそ。このリリースでは、**エージェントおよび開発者エクスペリエンス**全般にわたるさまざまな改善が含まれています。

-   [**統合ブラウザデバッグ**](#_debug-web-apps-with-the-integrated-browser): VS Code を離れることなく、Web アプリをエンドツーエンドでデバッグできます。
    
-   [**Copilot CLI の権限**](#_permissions-levels-in-copilot-cli): Copilot CLI セッションの自律性を高め、中断を最小限に抑えてタスクを完了できるようにします。
    
-   [**MCP サーバーのサンドボックス化**](#_sandbox-locally-running-mcp-servers): ローカルの MCP サーバーをサンドボックス内で実行し、マシン上でアクセス可能なリソースを制限します。
    
-   [**エージェントのイメージ対応**](#_image-and-binary-file-support-for-agents): エージェントとの会話内で、スクリーンショット、図、バイナリファイルを直接扱えます。
    
-   [**モノレポのカスタマイズ**](#_customizations-discovery-in-parent-repositories): モノレポ内のすべてのパッケージ間で、エージェントへの指示やスキルを共有します。
 

プログラミングを楽しんでください！

* * *

VS Codeは全ユーザーに向けて段階的に展開されています。VS Codeの**更新の確認**を使用して、すぐに最新バージョンを入手してください。

新機能をいち早く試すには、[**Nightly Insiders ビルドをダウンロード**](https://code.visualstudio.com/insiders)してください。このビルドには、最新アップデートが利用可能になり次第、すぐに反映されます。

* * *

## エージェントの体験

エージェントにより多くの自律性、より豊富なコンテキスト、そしてより簡単な診断機能を提供し、介入を減らして複雑なタスクを処理できるようにします。

### Copilot CLI でのメッセージの誘導とキューイング

ローカルエージェントセッションでは、前のリクエストが実行中の間にメッセージを送信し、エージェントを別の応答へと誘導したり、フォローアップメッセージをキューに追加したりできます。今回のリリースでは、Copilot CLI セッションへのメッセージの誘導とキューイングのサポートが追加されました。

![Copilot CLI セッションの誘導およびキューイングオプションを示すスクリーンショット。](/assets/updates/1_112/copilot-cli-steering.png)

ドキュメントで [メッセージのステアリングとキューイング](https://code.visualstudio.com/docs/copilot/chat/chat-sessions#_send-messages-while-a-request-is-running) について詳しくご確認ください。

### Copilot CLI にタスクを委任する前に変更内容をプレビューする

ワークスペースに未コミットの変更がある状態で Copilot CLI にタスクを委任しようとすると、Copilot CLI がそのセッション用に作成するワークツリー内で、それらの変更をコピー、移動、または無視するかを選択できます。しかし、決定を下す前に、ソースコントロールビューを確認して変更内容を確認する必要がありました。

今回のリリースでは、チャットビューに保留中の変更リストが表示されるようになり、Copilot CLIへの委任時に作成されるワークツリーへ移行可能な変更内容を簡単に確認できるようになりました。

![Copilot CLIへのタスク委任をリクエストした際の、チャットビューに表示される保留中の変更を示すスクリーンショット。](/assets/updates/1_112/copilot-cli-delegation-view-changes.png)

### Copilot CLI ターミナル出力内のクリック可能なファイルリンク

**設定**: github.copilot.chat.cli.terminalLinks.enabled VS Codeで開く VS Code Insidersで開く

ターミナルのファイルリンク検出機能が、`~/.copilot/session-state/` ディレクトリ下のファイルを参照する Copilot CLI によって生成されたパスを認識するようになりました。以前は、組み込みのリンク検出機能が Copilot CLI のセッション状態ディレクトリ構造を認識していなかったため、これらのパスは正しく解決されませんでした。

リンク検出機能は、絶対パスと相対パスの両方を処理できるようになりました。絶対パスおよびチルダ（~）で始まるパスは直接開かれ、相対パスはアクティブなセッション状態ディレクトリを基準に解決され、それが不可能な場合はワークスペースのフォルダーが使用されます。

この機能はデフォルトで有効になっており、github.copilot.chat.cli.terminalLinks.enabled 設定（VS Codeで開く、Insiders）でオン/オフを切り替えることができます。

### Copilot CLI の権限レベル

**設定**: chat.autopilot.enabled VS Code で開く VS Code Insiders

チャット内のローカルエージェント セッションの権限を設定することで、エージェントの動作に対する自律性を高め、承認リクエストの数を減らすことができます。今回のリリースでは、この機能が Copilot CLI セッションにも追加されました。

Copilot CLI セッションでは、以下の権限レベルから選択できます:

-   `Default Permissions`：設定された承認設定を使用します。承認が必要なツールは、実行前に確認ダイアログを表示します。
-   `Bypass Approvals`：確認ダイアログを表示せずにすべてのツール呼び出しを自動的に承認し、エラー時には自動的に再試行します。
-   `Autopilot`：（Insiders ではデフォルトで有効）すべてのツール呼び出しを自動的に承認し、質問には自動応答し、タスクが完了するまで自律的に作業を継続します。 VS CodeのInsiders設定で `chat.autopilot.enabled` を有効にすると、Autopilotが有効になります。

![Copilot CLIセッションの権限レベルオプション（新しいAutopilotオプションを含む）を示すスクリーンショット。](/assets/updates/1_112/copilot-cli-permissions.png)

ドキュメントで [Autopilot とエージェントの権限](https://code.visualstudio.com/docs/copilot/agents/agent-tools#_permission-levels) について詳しくご覧ください。

### /troubleshoot を使用したエージェントの動作のトラブルシューティング (プレビュー)

**設定**: github.copilot.chat.agentDebugLog.enabled VS Code で開く VS Code で開く Insiders , github.copilot.chat.agentDebugLog.fileLogging.enabled VS Code で開く VS Code で開く Insiders

VS Code では、エージェントをカスタマイズするためのいくつかのオプションが用意されています。チャットエージェントが期待通りに動作しない場合、その原因を特定するのは困難な場合があります。例えば、指示やスキル、エージェントが正しく適用されていない場合や、応答が予想外に遅い場合などです。

この問題を解決するために、会話内で直接エージェントのデバッグログを分析し、エージェントの動作に関する洞察を提供する新しい `/troubleshoot` スキルを導入しました。 チャット入力欄に `/troubleshoot` と入力し、その後に質問や発生している問題の説明を続けてください。

![チャットセッションで /troubleshoot スキルを使用してエージェントの動作を分析する例を示すスクリーンショット。](/assets/updates/1_112/troubleshoot-skill.png)

このスキルは、チャットセッションからエクスポートされた JSONL デバッグログファイルを読み取り、ツールやサブエージェントが使用された理由やスキップされた理由、指示やスキルが読み込まれなかった理由、応答時間が遅くなった原因、ネットワーク接続の問題が発生したかどうかなどを把握するのに役立ちます。

チャットで `/troubleshoot` スキルを使用するには、以下の設定を有効にして VS Code を再読み込みしてください：

-   github.copilot.chat.agentDebugLog.enabled VS Code で開く VS Code で開く Insiders : エージェントのデバッグログ記録を有効にします
-   github.copilot.chat.agentDebugLog.fileLogging.enabled VS Codeで開く VS Codeで開く Insiders : デバッグログをディスク上のJSONLファイルに書き込みます

VS Codeでの[エージェントの動作のトラブルシューティング](https://code.visualstudio.com/docs/copilot/chat/chat-debug-view)について詳しくはこちらをご覧ください。

### エージェントのデバッグログのエクスポートとインポート (プレビュー)

**設定**: github.copilot.chat.agentDebugLog.enabled VS Codeで開く VS Codeで開く Insiders

VS Codeの「エージェントのデバッグログ」パネルでは、ツールの使用状況やサブエージェントの決定など、セッションにおけるエージェントの動作を詳細に確認できます。以前は、パネルで表示できるデバッグ情報はアクティブなセッションのものに限られていました。

現在では、エージェント セッションのデバッグ ログをエクスポートおよびインポートできるようになり、他者と共有したり、オフラインで分析したりできます。これは、エージェントの動作に関するトラブルシューティングや知見の共有に特に役立ちます。

![エージェント デバッグ ログ パネル内のエージェント デバッグ ログのエクスポートおよびインポート オプションを示すスクリーンショット。](/assets/updates/1_112/agent-debug-log-export-import.png)

「エージェント デバッグ ログ」パネルの詳細については、[エージェント デバッグ ログ](https://code.visualstudio.com/docs/copilot/chat/chat-debug-view) のドキュメントを参照してください。

> **注**: 50 MB を超えるファイルをインポートすると、実際のファイルサイズが記載された警告ダイアログが表示されます。この警告が表示された場合は、ファイルを縮小するか、より短いセッションをエクスポートすることを検討してください。

### エージェントにおける画像およびバイナリファイルのサポート

**設定**: chat.imageCarousel.enabled VS Codeで開く VS Code Insidersで開く , imageCarousel.explorerContextMenu.enabled VS Codeで開く VS Code Insidersで開く

エージェントは、ディスク上の画像ファイルやバイナリファイルをネイティブに読み込めるようになりました。これにより、スクリーンショットの分析やバイナリファイルからのデータ読み取りなど、より幅広いタスクにエージェントを活用できるようになります。バイナリファイルは、エージェントに対してヘックスダンプ形式で提示されます。

エージェントやツール（統合ブラウザからのスクリーンショットなど）が出力として画像を生成した場合、それらの画像はチャットでの返信内で選択可能になり、専用の画像カルーセルビューで開くことができます。この機能は、chat.imageCarousel.enabled Open in VS Code Open in VS Code Insiders 設定（実験的機能）を有効にすることで利用できます。

![複数の画像が表示された画像カルーセルビューのスクリーンショット。](/assets/updates/1_112/image-carousel.png)

imageCarousel.explorerContextMenu.enabled Open in VS Code Open in VS Code Insiders _(Experimental)_ が有効になっている場合、エクスプローラービュー内の画像ファイルやフォルダーを右クリックし、**Open Images in Carousel** を選択することで、カルーセルビューで画像を閲覧できます。

> **注**: 画像カルーセルは現在、実験的な機能です。

### シンボル参照の自動生成

クラス名、関数名、メソッド名などのシンボルをコピーしてチャットに貼り付けると、VS Code はそれを `#sym:Name` というシンボル参照として自動的に貼り付けます。これにより、エージェントはシンボルに関するコンテキストを自動的に取得し、タスクをより迅速かつ効率的に完了できるようになります。

シンボルをシンボル参照に変換せずに貼り付けたい場合は、Ctrl+Shift+V（macOSでは Cmd+Shift+V）で **テキストとして貼り付け** コマンドを使用できます。

## エージェントの拡張性

共有カスタマイズ機能を使用してプロジェクト間でエージェントの設定を拡張し、MCP サーバーやプラグインに対するより厳格な制御によってセキュリティを確保できます。

### 親リポジトリでのカスタマイズ検出

**設定**: chat.useCustomizationsInParentRepositories VS Codeで開く VS Code Insidersで開く

モノレポ環境では、リポジトリのルートではなく、特定のパッケージやサブフォルダーを VS Code で開くことがよくあります。以前は、チャットカスタマイズは現在のワークスペースフォルダーからのみ検出されていました。新しい `chat.useCustomizationsInParentRepositories` 設定（VS Code で開く、VS Code Insiders）により、VS Code は親フォルダーからリポジトリのルートに至るまでのカスタマイズファイルも検出できるようになりました。

この検出機能の改善により、リポジトリ全体にわたるガイダンスやツールを、リポジトリ全体をワークスペースとして開くことなく、モノレポ内のパッケージ間で簡単に共有できるようになります。

検出が有効になっている場合、この機能は `copilot-instructions.md`、`AGENTS.md`、`CLAUDE.md` などの常時有効な指示ファイルをはじめ、指示ファイル、プロンプトファイル、カスタムエージェント、スキル、フックなど、すべてのチャットカスタマイズタイプに適用されます。

親リポジトリの検出は、以下の条件がすべて満たされている場合にのみ適用されます：

-   開いているワークスペースフォルダ自体が Git リポジトリではない
-   親フォルダに `.git` フォルダが含まれている
-   親リポジトリが [ワークスペースの信頼](https://code.visualstudio.com/docs/editing/workspaces/workspace-trust) によって信頼されている

[エージェントのカスタマイズ](https://code.visualstudio.com/docs/copilot/customization/overview) については、ドキュメントで詳細をご確認ください。

### ローカルで実行する MCP サーバーのサンドボックス化

MCP サーバーをローカルで実行すると、セキュリティ上のリスクが生じる可能性があります。これは、MCP サーバーが VS Code を実行しているユーザーと同じ権限を持つため、その機能には本来必要のないファイルやネットワークリソースにアクセスできてしまうからです。

このリスクを軽減するため、macOS および Linux では、ローカルで設定された stdio MCP サーバーをサンドボックス環境で実行できるようになりました。サンドボックス化されたサーバーでは、ファイルシステムおよびネットワークへのアクセスが制限されます。

サンドボックスを有効にするには、`mcp.json` ファイル内のサーバーに対して `"sandboxEnabled": true` を設定してください。サンドボックス化されたサーバーが追加のフォルダーやドメインへのアクセスを必要とする場合、VS Code はその権限を許可するよう促し、その `mcp.json` ファイルのサンドボックス設定を更新します。同じ `mcp.json` ファイルで定義されたすべてのサーバーは、そのサンドボックス設定を共有します。

> **注**: ローカルで実行される MCP サーバーのサンドボックス機能は、現在 Windows では利用できません。WSL や SSH などのリモート環境では引き続き動作します。

### MCP 情報収集フォームの UI 改善

MCP サーバーがリクエストを完了するために追加情報を必要とする場合、ユーザーからその情報を収集するための情報収集フォームを起動できます。 これらの情報収集フォームは、現在「質問する」ツールと同じUIを採用しており、MCPサーバーに追加情報を提供する際、より一貫性があり使いやすい操作体験を実現しています。

![MCP情報収集フォームを示すスクリーンショット。](/assets/updates/1_112/mcp-elicit.png)

### プラグインおよびMCPサーバーの有効化・無効化

以前は、プラグインやMCPサーバーを無効化または有効化するには、それらをインストールまたはアンインストールする必要がありました。今回のリリースでは、アンインストールせずにプラグインやMCPサーバーを有効化または無効化できる機能が導入されました。

プラグインとMCPサーバーの両方について、グローバルおよびワークスペースごとに有効化・無効化が可能になりました。 これを行うには、MCP またはプラグインのページを開くか、[拡張機能] ビューまたは **[チャット: カスタマイズを開く]** ビューで各エントリを右クリックします。

![[カスタマイズ] ビューからプラグインを有効または無効にするオプションを示すスクリーンショット。](/assets/updates/1_112/enable-disable-plugin.png)

### プラグインの自動更新

**設定**: extensions.autoUpdate VS Codeで開く VS Code Insidersで開く

プラグインは、extensions.autoUpdate VS Codeで開く VS Code Insidersで開く設定に基づいて自動的に更新できるようになりました。`npm`および`pypi`からのプラグインは、更新時に新しいコードがマシン上で実行される可能性があるため、更新には承認が必要です。

## 開発者体験

より高性能な統合ブラウザと効率化されたエディタワークフローにより、VS Code を離れることなく Web アプリをビルドおよびデバッグできます。

### 統合ブラウザ

#### 統合ブラウザを使用した Web アプリのデバッグ

統合ブラウザを使用すると、VS Code 内で直接 Web アプリを開くことができ、さらに統合ブラウザからデバッグ セッションを開始できるようになりました。これにより、VS Code を離れることなく、Web アプリとの対話、ブレークポイントの設定、コードのステップ実行、変数の検査を行うことができます。

新しい `editor-browser` デバッグタイプを追加し、Launch および Attach 構成の両方で統合ブラウザのタブをデバッグできるようになりました。

既存の `msedge` および `chrome` デバッグ構成のほとんどのオプションがサポートされているため、多くの場合、`launch.json` 内の既存構成のタイプを変更するだけで移行が可能です。

統合ブラウザの詳細およびデバッグの設定方法については、ドキュメント [統合ブラウザ](https://code.visualstudio.com/docs/debugtest/integrated-browser) をご覧ください。

#### 統合ブラウザのユーザーエクスペリエンスの改善

**設定**: workbench.browser.pageZoom VS Code で開く VS Code で開く Insiders

-   **コンテキストメニュー**
 
 ブラウザページ上で右クリックすると、コピー/貼り付け、新しいタブで開く、インスペクトなどの一般的なオプションが表示されるようになりました。
 
 ![統合ブラウザで開いたコンテキストメニューを示すスクリーンショット。](/assets/updates/1_112/browser-context-menu.png)
    
-   **独立したズームレベル**
 
 統合ブラウザには、VS Code ウィンドウのズームとは独立した独自のズームレベルが設定されました。ブラウザにフォーカスがある状態で、**ズームイン** (⌘= (Windows、Linux: Ctrl+=))、**ズームアウト** (⌘- (Windows、Linux: Ctrl+-))、および **ズームのリセット** (⌘Numpad0 (Windows、Linux: Ctrl+Numpad0)) ショートカットを使用するか、URL バーのメニューから操作を行ってください。ズームレベルは、通常のブラウザと同様に、Web サイトごとに記憶されます。
    
    デフォルトのズームレベルを設定するには、workbench.browser.pageZoom Open in VS Code Open in VS Code Insiders 設定を使用します。「Match Window」に設定するか、設定しないままにすると、ブラウザは VS Code ウィンドウのズームレベルに合わせます。
    

### 検索後の「検索」ダイアログの自動閉じ

新しい `editor.find.closeOnResult` (VS Code で開く、Insiders) 設定を使用すると、一致が見つかった後に「検索」コントロールを自動的に閉じ、フォーカスをエディタに戻すことができます。

この設定はデフォルトで無効になっており、検索後も「検索」ダイアログが開いたままになる従来の動作が維持されます。

## ターミナル

### ターミナルでの IME 入力機能の改善

ターミナルの右端付近で入力メソッドエディタ（IME）を使用して入力する際、以前は入力プレビューテキストがターミナルの境界外にはみ出すことがありました。現在、入力プレビューはカーソルとターミナルの右端の間の利用可能なスペースに制限されるようになりました。新しい文字を入力するにつれて、古い文字が順次非表示になり、プレビューテキストがターミナルの表示領域内に収まるようになります。これは、Ghosttyなどの他の最新ターミナルと同じ動作です。

> **注**: Windows では、最適な IME 入力体験を得るために、terminal.integrated.windowsUseConptyDll を有効にしてください。

## 非推奨の機能と設定

### このリリースでの新しい非推奨項目

なし

### 今後の非推奨項目

-   **編集モード**は、VS Code バージョン 1.110 をもって正式に非推奨となりました。ユーザーは、VS Code の設定 chat.editMode.hidden を通じて、一時的に編集モードを再有効化できます。この設定はバージョン 1.125 までサポートされます。バージョン 1.125 以降、編集モードは完全に削除され、設定を通じて有効化することはできなくなります。

## 主な修正

-   [xtermjs/xterm.js #5737](https://github.com/xtermjs/xterm.js/pull/5737): 新しい fish + kitty キーボードプロトコルにおいて、^C で終了できない問題を修正
-   [microsoft/vscode-python #25849](https://github.com/microsoft/vscode-python/pull/25849): 2つの拡張機能による二重/三重のアクティベーションを防止

## 感謝

### 課題追跡

課題追跡への貢献:

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

`vscode`への貢献：

-   [@12LuA (Luca)](https://github.com/12LuA): 修正: authIssuers提案内のコメントのタイプミスを修正 [PR #300899](https://github.com/microsoft/vscode/pull/300899)
-   [@DrSergei (Sergei Druzhkov)](https://github.com/DrSergei): レスポンス設定後の変数更新の修正 [PR #299473](https://github.com/microsoft/vscode/pull/299473)
-   [@eliericha (Elie Richa)](https://github.com/eliericha): 起動設定環境を含む環境に基づいて変数リゾルバーを作成 [PR #299752](https://github.com/microsoft/vscode/pull/299752)
-   [@jcansdale (Jamie Cansdale)](https://github.com/jcansdale): 修正: macOS での複数行 PTY 書き込みをチャンク化し、1024 バイトのバッファ破損を回避 [PR #298993](https://github.com/microsoft/vscode/pull/298993)
-   [@jeanp413 (Jean Pierre)](https://github.com/jeanp413): リモート権限がある場合、Web Worker 拡張機能ホストでのターミナル作成をサポート [PR #300897](https://github.com/microsoft/vscode/pull/300897)
-   [@JeffreyCA](https://github.com/JeffreyCA): Azure Developer CLI (azd) の Fig 仕様を更新 [PR #299892](https://github.com/microsoft/vscode/pull/299892)
-   [@lammmab (Liam)](https://github.com/lammmab): AI 機能が無効な場合に「編集をリクエスト」のアフォーダンスを非表示にする [PR #300563](https://github.com/microsoft/vscode/pull/300563)
-   [@murataslan1 (Murat Aslan)](https://github.com/murataslan1): 修正: パラメータヒントウィジェットで長い docstring を改行する [PR #292258](https://github.com/microsoft/vscode/pull/292258)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke): 修正: MainThreadWorkspace におけるメモリリーク [PR #283450](https://github.com/microsoft/vscode/pull/283450)
-   [@tamuratak (Takashi Tamura)](https://github.com/tamuratak): markdown-language-features: URIの解析と選択機能を改善し、ドキュメントリンクの処理を強化 [PR #296821](https://github.com/microsoft/vscode/pull/296821)
-   [@xingsy97 (xingsy97)](https://github.com/xingsy97): AIエージェントワークフロー向けにターミナルツールの結果メタデータを充実 [PR #300034](https://github.com/microsoft/vscode/pull/300034)

`vscode-copilot-chat`への貢献:

-   [@24anisha (Anisha Agarwal)](https://github.com/24anisha): サブエージェントのテレメトリ検索に conversation\_id を追加 [PR #4326](https://github.com/microsoft/vscode-copilot-chat/pull/4326)
-   [@aashna (Aashna Garg)](https://github.com/aashna): ルーター決定APIにsticky\_thresholdおよびsticky\_overrideを追加 [PR #4359](https://github.com/microsoft/vscode-copilot-chat/pull/4359)
-   [@dennyac (Denny Abraham Cheriyan)](https://github.com/dennyac): イベント用のresolvedモデルを追加 [PR #4210](https://github.com/microsoft/vscode-copilot-chat/pull/4210)
-   [@IanMatthewHuff (Ian Huff)](https://github.com/IanMatthewHuff): Windowsリポジトリのパフォーマンス問題をサポートするための、リポジトリ情報のテレメトリチェックの追加 [PR #4339](https://github.com/microsoft/vscode-copilot-chat/pull/4339)

`vscode-docs`への貢献:

-   [@karlhorky (Karl Horky)](https://github.com/karlhorky): デフォルトで表示される状態における「セカンダリサイドバー」のドキュメントを改訂 [PR #9540](https://github.com/microsoft/vscode-docs/pull/9540)
-   [@mariaghiondea (Maria Ghiondea)](https://github.com/mariaghiondea): ソフト削除の変更を反映するため、拡張機能の公開に関するドキュメントを更新 [PR #9544](https://github.com/microsoft/vscode-docs/pull/9544)
-   [@putku45](https://github.com/putku45)
    -   リファクタリングのドキュメントの文法修正 [PR #9525](https://github.com/microsoft/vscode-docs/pull/9525)
    -   2017年10月のリリースノートの誤字を修正 [PR #9524](https://github.com/microsoft/vscode-docs/pull/9524)
    -   JSON補完セクションの文法ミスを修正 [PR #9526](https://github.com/microsoft/vscode-docs/pull/9526)

`node-pty`への貢献:

-   [@ritschwumm](https://github.com/ritschwumm): ドキュメントのコメント内の誤字を修正 [PR #897](https://github.com/microsoft/node-pty/pull/897)

`python-environment-tools`への貢献:

-   [@lingyaochu (Xin Zhao)](https://github.com/lingyaochu): バイナリターゲットに対してのみWindowsリソースを埋め込むように修正 [PR #374](https://github.com/microsoft/python-environment-tools/pull/374)

* * *

新機能が利用可能になり次第、ぜひお試しいただければ幸いです。定期的にこちらをチェックして、最新情報をご確認ください。

> 過去の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
