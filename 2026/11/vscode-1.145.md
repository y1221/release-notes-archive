---
product: VSCode
version: 1.145.0
release_title: Visual Studio Code 1.145
release_date: 2026-11-04
source_url: "https://code.visualstudio.com/updates/v1_145"
archived_at: 2026-11-05
---

# Visual Studio Code 1.145

# Visual Studio Code 1.145

リリース日：2026年11月4日 安定版

## 1.145.0のダウンロード

Windows

[x64](https://update.code.visualstudio.com/1.145.0/win32-x64-user/stable)[Arm64](https://update.code.visualstudio.com/1.145.0/win32-arm64-user/stable)

macOS

[ユニバーサル](https://update.code.visualstudio.com/1.145.0/darwin-universal-dmg/stable)[Intel](https://update.code.visualstudio.com/1.145.0/darwin-x64-dmg/stable)[Apple silicon](https://update.code.visualstudio.com/1.145.0/darwin-arm64-dmg/stable)

Linux

[.deb](https://update.code.visualstudio.com/1.145.0/linux-deb-x64/stable)[.rpm](https://update.code.visualstudio.com/1.145.0/linux-rpm-x64/stable)[.tar.gz](https://update.code.visualstudio.com/1.145.0/linux-x64/stable)[Arm用インストラクション](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions)[Snap](https://update.code.visualstudio.com/1.145.0/linux-snap-x64/stable)

## リリースのハイライト

今週は、リモートエージェントのセッションが、まるでローカルで操作しているかのような感覚になります。VS Code内で直接アプリのプレビューやキャンバスの利用が可能になり、cronを使って自動化スケジュールを微調整したり、チャットのノイズを低減したりできます。一息つきたいときは、Blobbyが遊びの相手になってくれます。

-   [リモートエージェント](#_remote-agents): 「エージェント」ウィンドウを離れることなく、リモートエージェントセッションからアプリのプレビューやインタラクティブなキャンバスの利用が可能です。
    
-   [自動化](#_cron-schedules-and-custom-agents-for-local-automations): cron を使用して、組み込みのプリセット以外のカスタムスケジュールで、繰り返し実行されるエージェントタスクを実行できます。
    
-   [エージェントの詳細表示レベル](#_choose-agent-verbosity): チャットを簡潔に保つか、エージェントの推論やツール呼び出しの詳細をすべて表示するか、お好みで選択できます。
 
-   [ファイルの除外](#_show-specific-files-in-excluded-folders): フォルダを除外しつつ、必要なファイルは表示・検索可能な状態に保ちます。
 
-   [ゲーム](#_blobby-jump-game-experimental): VS Codeのマスコット「Blobby」が主役のプラットフォームジャンプゲームで、ちょっとした休憩を楽しみましょう。
    

すでにインストール済みですか？ VS Code の **更新を確認** 機能をご利用ください。今後の機能については、[Insiders ビルド](https://code.visualstudio.com/insiders) をご利用ください。

* * *

## リモートエージェント

### リモートエージェントホストへの接続を閲覧する（プレビュー）

**設定**: workbench.browser.enableRemoteProxy VS Codeで開く VS Code Insidersで開く

[リモートエージェントホスト](https://code.visualstudio.com/docs/agents/run/remote-agent-sessions)上でエージェントセッションが実行されている場合、「エージェント」ウィンドウに統合されたブラウザは、 [リモートワークスペース](https://code.visualstudio.com/updates/v1_125#_browse-over-remote-connections-preview)と同様に動作します。 エージェントがリモートマシン上で開発サーバーを起動すると、ローカルセッションと同様に、「エージェント」ウィンドウ内で直接そのサーバーを開き、アプリのプレビュー表示、エージェントによる変更の検証、フィードバックの送信を行うことができます。

![統合ブラウザの URL バーに「Connected via kyles-mbp」と表示されているスクリーンショット。](/assets/updates/1_145/remote-browser.webp)

workbench.browser.enableRemoteProxy を有効にして、VS Code Insiders で試してみてください。問題が発生した場合は、[VS Code リポジトリ](https://github.com/microsoft/vscode/issues) に報告してください。

### リモートキャンバス (プレビュー)

**設定**: workbench.browser.enableRemoteProxy VS Codeで開く VS Codeで開く Insiders 、chat.canvases.enabled VS Codeで開く VS Codeで開く Insiders

リモートエージェントホストへの接続がサポートされたことにより、リモートエージェントホスト上でホストされている [キャンバス](https://code.visualstudio.com/docs/agents/run/canvases) も使用できるようになりました。

chat.canvases.enabled を有効にし、workbench.browser.enableRemoteProxy を有効にして試してみてください。問題が発生した場合は、[VS Code リポジトリ](https://github.com/microsoft/vscode/issues) に報告してください。

* * *

## エージェント

### 1つのセッション内でエージェント・ハーネスを組み合わせて使用（プレビュー）

**設定**: chat.agentHost.multipleChatProviders.enabled VS Codeで開く VS Code Insidersで開く

[ネストされたセッション]（https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions#_run-multiple-chats-in-a-session）を使用すると、関連する会話を単一のメインチャットセッション内にまとめておくことができます。以前は、すべてのネストされたセッションが親セッションのハーネスを継承していました。 別のエージェントにセカンドオピニオンを求めた場合、別のセッションを開始する必要があり、そのグループ化が失われていました。

今回のリリースでは、ネストされたセッションが親セッションとは異なるハーネスを使用できるようになりました。たとえば、Copilotチャットが作成したプランをClaudeにレビューしてもらうか、同じセッション内で並行してCodexに同じタスクを依頼することができます。 新しいネストされたセッションを作成する際は、ハーネスピッカーを使用して別のハーネスに切り替えてください。

各チャットには、そのハーネスに基づいた独自のモデル、エージェント、および権限レベルがあります。あるチャットでこれらを変更しても、他のチャットには影響しません。 チャットを移動しても、履歴は保持され、選択されたハーネスで継続されます。ネストされたセッションをフォークしても、同じ設定で継続されます。

セッションとは異なるハーネスを使用しているチャットの場合、チャットタブまたはセッション一覧の行にカーソルを合わせると、そのハーネスの名前が表示されます。

chat.agentHost.multipleChatProviders.enabled を有効にし、VS Code で開く VS Code Insiders で開始してください。ご意見やご感想は、[イシューを登録](https://github.com/microsoft/vscode/issues) してお知らせください。

### ローカルオートメーション向けのCronスケジュールとカスタムエージェント

エージェントタスクを手動で1つずつ実行する代わりに、[オートメーション](https://code.visualstudio.com/docs/agents/run/automations) を使用して、オンデマンドまたは設定されたスケジュールに従って、タスクを自動的にスケジュールおよび実行できます。

今回のリリースにより、ローカルオートメーションの柔軟性が向上し、「オートメーション」ビューでは進行中の作業に集中できるようになりました：

-   **Cron スケジュールの使用：** 他のスケジュールプリセットでは精度が不十分な場合、**Cron** を選択して 5 つのフィールドからなる Cron 式を入力します。 ダイアログでは式が検証され、その結果として生成されるスケジュールが説明されます。Cron スケジュールは、クラウドオートメーションでは利用できません。
 
-   **ワークスペースのカスタムエージェントの使用：** ローカルオートメーションを作成または編集する際、選択したワークスペースからカスタムエージェントを選択できます。
 
-   **アクティブなオートメーションに焦点を当てる：** 無効化されたオートメーションは、折りたたまれた**「無効化されたオートメーション」**セクションに表示されるため、実行履歴やアクティブなオートメーションの表示を妨げることはありません。
 

![ローカルオートメーションのCronスケジュールエディタを示すスクリーンショット。](/assets/updates/1_145/cron-automations.webp)

[エージェントオートメーションの作成と管理](https://code.visualstudio.com/docs/agents/run/automations)の詳細については、こちらをご覧ください。

### キャンバスをサイドバーに固定する（実験的機能）

**設定**: chat.canvases.enabled VS Codeで開く VS Code Insidersで開く

頻繁に使用するキャンバスに簡単にアクセスできるように、キャンバスを左側のサイドバーに固定できるようになりました。キャンバスを固定するには、キャンバスを開き、キャンバス上部の **サイドバーに追加****ボタンを選択します。固定されたキャンバスは、そのキャンバスから移動した後でも、サイドバーからアクセス可能です。

### Copilot ハーネス

Copilot ハーネスは、引き続き VS Code での新規セッションのデフォルト設定となります。これは Copilot SDK を基盤として構築された最新のハーネスであり、 これは、Copilot製品全体での動作、機能、改善を統一するのに役立つ共通基盤です。

新しいセッションを開始する際、ハネスピッカーに **Copilot** と表示されていれば、そのセッションがCopilotハネスを使用していることを示しています。VS Codeでは、 Copilot ハーネスによるセッションをバックグラウンドで実行し続け、VS Code のエディタウィンドウとエージェントウィンドウの両方からアクセスできます。これらのセッションは [エージェントホスト](https://code.visualstudio.com/docs/agents/concepts/agent-host) を通じて実行されます。

既存のワークフローに Copilot ハーネスをスムーズに導入できるよう、[Local-to-Copilot ハーネス移行ガイド](https://code.visualstudio.com/docs/agents/run/move-to-copilot)を追加しました。このガイドでは、カスタマイズの互換性、セッションの継続性、および組織内での展開と検証について解説しています。

これらの改善を形作るためのフィードバックをいただき、ありがとうございます。引き続き、ご利用状況に関する[問題の報告](https://github.com/microsoft/vscode/issues)をお願いいたします。特に、ワークフローや統合機能の都合で、組織がローカル・ハーネスからの移行を進められない場合は、ぜひお知らせください。

[Copilot ハーネスの活用方法](https://code.visualstudio.com/docs/agents/run/agent-harnesses) での操作方法を確認するか、[エージェントホストのブログ記事](https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture) でアーキテクチャやワークフローについて詳しくご覧ください。

### ワーキングセットの改善（実験的機能）

**設定**: chat.editor.workingSet.enabled VS Code で開く VS Code Insiders で開く

前回のリリースでは、Copilot ハーネス セッション向けのワーキングセットを導入し、エージェントによる未確定の編集内容を確認できるようにしました。 ローカル・ハーネスと同様に、変更を**保持**または**元に戻す**ことができます。

![Copilot ハーネス セッションにおけるワーキングセットのスクリーンショット。](/assets/updates/1_145/working-set.webp)

Copilot ハネス セッションにおけるワーキングセットの操作性をさらに改善しています：

-   WSL、Dev Containers、および SSH ワークスペース内のファイルは、ワーキングセットから開いた際に正しいホスト上で開かれます。
-   複数のツール呼び出しが並行して同じファイルを編集する場合、ワーキングセットはそれらの編集を追跡し、編集完了後もエディタのインラインレビューコントロールが利用可能なままになります。

ワーキングセット機能は、エディターウィンドウで引き続きデフォルトで有効になっています。[ワーキングセットを使用したエージェントの編集内容の確認](https://code.visualstudio.com/docs/agents/run/review-code-edits#_review-pending-edits-with-the-working-set)について、追跡される編集内容を含め、詳細をご覧ください。

### 必須のサンドボックス化が利用できない場合のガイダンスの改善

[エージェントのサンドボックス化](https://code.visualstudio.com/docs/agents/run/agent-sandboxing) は、ファイルシステムやネットワークリソースなど、ターミナルコマンドがアクセスできる対象を制限します。組織は、サンドボックスのバイパスを許可しない管理設定によって、これを必須とすることができます。

組織でサンドボックスの使用が必須とされているにもかかわらず、お使いのマシンで実行できない場合、警告バナーに、ターミナルコマンドがブロックされている理由と問題の解決方法が説明されます。バナーには、依存関係の欠如など具体的な原因が表示され、トラブルシューティングの手順へのリンクも記載されています。

アカウントおよび組織が [クラウド セッション (実験的)](https://code.visualstudio.com/docs/agents/run/cloud-agent-sessions) をサポートしている場合は、ローカル マシンではなくクラウド上でエージェント ツールを実行することを検討してください。

* * *

## チャット

### エージェントの詳細表示レベルを選択 (実験的)

**設定**: chat.persistentProgressVerbosity VS Codeで開く VS Code Insidersで開く

長いチャットを読みやすく保つか、エージェントの動作を理解する必要がある場合に、その推論やツール呼び出しの詳細を追跡できます。チャットビューの**その他のアクション**メニューを開き、**表示モード**を選択します:

-   **会話**：会話に焦点を当てます。推論やツール呼び出しは、応答テキストのブロックの間に折りたたまれたセクションとしてグループ化されます。セクションを展開すると、詳細を確認できます。
-   **詳細**：各ステップを追跡し、ツール呼び出しを展開表示します。ツールグループの内部スクロール制限はありません。
-   **コンパクト** （デフォルト）：ツール呼び出しの実行中にプレビューを表示し、完了したグループは折りたたまれて、展開可能な要約行になります。

新しいチャットを開始しなくてもモードを切り替えることができます。モードの変更は、会話の表示方法に影響を与えるものであり、会話の文脈やエージェントが実行する作業そのものには影響しません。

「進行状況の持続表示」を有効にすると、応答をスクロールして遡っている間も、アクティブな進行状況インジケーターがチャット入力欄の上部に表示されたままになります。代わりにアニメーション付きの入力枠を表示したい場合は、chat.progressBorder.enabled を有効にしてください。VS Code で開く VS Code で開く Insiders 。

### チャットのパフォーマンス改善

長い Copilot ハーネス チャットを再表示したり閲覧したりする際の操作がよりスムーズになりました。 VS Code は既存の推論タイトルを再利用し、ターミナル出力を表示する際に逐次レンダリングします。復元されたツール呼び出し内のターミナル出力は、一度にすべて表示されるのではなく、展開または表示した時点でレンダリングされます。

また、このリリースでは、長い会話を復元したり移動したりする際の、繰り返される進行状況の更新やレイアウトの測定が削減されています。

### チャットへのインライン添付ファイル（実験的機能）

**設定**: chat.inlineAttachments.enabled VS Code で開く VS Code Insiders で開く

ファイル参照やその他のコンテキストを、それらが属する指示のすぐ隣に保持します。この設定を有効にすると、添付ファイルのピルが、入力欄の上の別の行ではなく、プロンプト内のカーソル位置に挿入されます。

添付ファイルピルを、1 文字単位として移動、選択、または削除できます。以前のメッセージではピルがインラインで表示されるため、参照情報は周囲の指示文と一緒に保持されます。

インライン添付ファイルは、Insiders ではデフォルトで有効、Stable ではデフォルトで無効になっています。

![チャット入力欄で、ファイルや画像の添付ピルが周囲のテキストとインラインで表示されているスクリーンショット。](/assets/updates/1_145/chat-inline-attachments.webp)

### コンピューター上のどこからでもファイルを添付

以前は、デスクトップ上のスクリーンショットやモックアップなど、ワークスペース外のファイルをチャットに送信するには、ファイルマネージャーからドラッグして追加するか、エージェントにファイルの検索を依頼する必要がありました。**コンテキストを追加** (`+`) > **ファイル** を選択し、標準のファイルダイアログから1つ以上のファイルを選択できます。ワークスペースのない新しいチャットでも同様です。クラウドセッションでは、ファイル選択画面には画像のみが表示されます。

![チャット内の「コンテキストの追加」メニューを示すスクリーンショット。「クリップボードからの画像」および「スクリーンショットウィンドウ」の上部に「ファイル」の項目が表示されています。](/assets/updates/1_145/chat-attach-files-menu.webp)

Copilotハネスセッションで[サンドボックス化](https://code.visualstudio.com/docs/agents/run/agent-sandboxing)が有効になっている場合、エージェントは、ワークスペース外にあるファイルやフォルダであっても、添付されたものを読み取ることができます。添付された各パスは、セッションの残りの期間中読み取り可能ですが、 ただし、エージェントはそこに書き込みを行うことはできず、そのアクセス権限は設定に保存されません。「手動」の権限設定の場合、エージェントは添付ファイルを読み取る前に確認を求めなくなります。組織の管理設定で読み取り可能なパスのリストが個別に定義されている場合、添付ファイルはそのリストに追加されません。

* * *

## MCP

### MCP アプリが提供するツールのサポート

MCP アプリは、MCP サーバーが提供する対話型インターフェースです。これらは、言語モデルが次のリクエストで呼び出せるツールを登録できるようになりました。

たとえば、[ShaderToy サーバー](https://github.com/modelcontextprotocol/ext-apps/tree/main/examples/shadertoy-server) を使用すると、モデルがシェーダーをリアルタイムで反復処理できるようになります。

### 管理対象の MCP 許可リストの優先順位

VS Code によって起動された MCP サーバーの場合、エンタープライズで管理される `allowedMcpServers` リストが、レジストリのみのアクセスよりも優先されます。 。これにより、組織はサーバーをレジストリに公開することなく承認することができます。設定の詳細や制限については、[管理対象 MCP 許可リストに関するエンタープライズセクション](#_managed-mcp-allowlists-take-precedence-over-registry-only-access)を参照してください。

* * *

## エディタ操作

### 除外フォルダ内の特定のファイルを表示する

**設定**: files.exclude [VS Codeで開く](VS Code Insiders)、search.exclude [VS Codeで開く](VS Code Insiders)

files.exclude [VS Codeで開く](VS Code Insiders) および search.exclude [VS Codeで開く](VS Code Insiders) 設定を使用することで、エクスプローラー、検索、クイックオープンに表示されるファイルやフォルダーをフィルタリングできます。

除外されたフォルダーの一部を表示し続けるには、files.exclude 内のパターンの先頭に `!` を付けます （VS Code で開く、VS Code Insiders で開く）で、パターンの先頭に `!` を付けます。これにより、他のパターンや `.gitignore` によって除外されている場合でも、一致するファイルやフォルダがエクスプローラー、検索、クイックオープンに表示されます。search.exclude（VS Code で開く、VS Code Insiders で開く）の例外は、検索とクイックオープンのみに適用されます。

```
"files.exclude": {
    "node_modules": true,
    "!node_modules/@types": true
}
```

例外設定によってファイルが非表示になることはありません。`!**/node_modules/@types` のようなパターンは、任意の階層で一致しますが、検索速度が低下する可能性があります。

### Mermaid ダイアグラムのスマートなサブグラフタイトル

[Mermaid ダイアグラム](https://code.visualstudio.com/docs/languages/markdown#_mermaid-diagram-rendering) において、エッジがサブグラフのタイトルを覆うことはなくなりました。エッジがタイトルと交差する場合、タイトルは横に移動します。 デフォルトの `vscode` Mermaid テーマでは、サブグラフは塗りつぶしではなく輪郭線で表示されるため、ネストされたサブグラフが際立ちます。

![変更前後のネストされたサブグラフを含む Mermaid ダイアグラムのスクリーンショット：エッジがサブグラフのタイトルを横切ることはなくなり、サブグラフは塗りつぶしではなく輪郭線で表示されています。](/assets/updates/1_145/mermaid-subgraph-titles-before-after.webp)

* * *

## Enterprise

### 組織で必須とされているプラグインをアンインストールできない

組織で [エージェントプラグイン](https://code.visualstudio.com/docs/agent-customization/agent-plugins) が必須とされている場合、 （例：`enabledPlugins` マネージド設定など）、以前は **カスタマイズ** ビューでそのプラグインの **アンインストール** 操作が利用可能でした。この操作は常に失敗し、**アンインストールの再試行** に切り替わりましたが、これも失敗していました。このプラグインが提供するプロンプト、スキル、エージェント、フック、および MCP サーバーについても同様の現象が発生していました。

```
{
  "enabledPlugins": {
    "my-plugin@my-marketplace": true
  }
}
```

これらのプラグインおよびそれらが提供する機能に対する**アンインストール**アクションは現在無効化されており、マウスオーバー時やキーボードフォーカス時にメッセージが表示されます。これは、****Browse**、プラグインの詳細、プラグインエディタ、およびプラグインとMCPサーバーのメニューに適用されます。

![「Browse」のカスタマイズ画面で、組織必須のプラグインの**アンインストール**ボタンが無効化され、ホバー時に「このプラグインは組織によって管理されています」というメッセージが表示されているスクリーンショット。](/assets/updates/1_145/managed-plugin-uninstall-disabled.webp)

### 管理対象の MCP 許可リストは、レジストリのみのアクセスよりも優先されます

以前は、組織が MCP を自組織のレジストリに登録されたサーバーに限定し、さらに管理設定で許可リストを定義していた場合でも、VS Code は依然として各サーバーがレジストリに登録されていることを要求していました。許可リストで承認されているものの、レジストリに公開されていないサーバーは実行できませんでした。

現在、エンタープライズ管理の `allowedMcpServers` リストが決定権を持ちます。このリストに一致するサーバーは、レジストリに登録されていなくても実行可能となり、一致しないレジストリ登録サーバーはブロックされます。例えば、以下の [エンタープライズ管理設定](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started) では、1台のリモートサーバーと1台のローカルサーバーが許可されています：

```
{
  "allowedMcpServers": [
    { "serverUrl": "https://mcp.example.com/mcp" },
    { "serverCommand": ["node", "approved-server.js"] }
  ]
}
```

-   空のリスト (`[]`) はすべてのサーバーをブロックします。リストが存在しない場合、従来通りレジストリの制限が適用されます。
-   ユーザーおよびワークスペースの許可リストからは、エンタープライズリストにサーバーを追加することはできません。
-   `deniedMcpServers` および MCP の無効化は、引き続き許可リストよりも優先されます。
-   `serverUrl` および `serverCommand` ルールを優先してください。 `serverName` ルールは、サーバーの作成者が選択したラベルと一致します。

> **注**: この変更は、VS Code が起動する MCP サーバーに適用され、Agent Host によって管理されるサーバーには適用されません。

* * *

## 拡張機能への貢献

### GitHub プルリクエスト

[GitHub プルリクエスト](https://marketplace) において、さらなる進展がありました。visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) 拡張機能では、プルリクエストやイシューの編集、作成、管理が可能になります。新機能は以下の通りです：

-   プルリクエストの概要タイムラインには、ラベル、マイルストーン、 タイトル変更、レビュー依頼や却下、下書きやレビュー準備完了の状態への変更、フォースプッシュ、ブランチの復元、自動マージの変更、マージキューの更新など、より多くのイベントが表示されるようになりました。
-   プルリクエストの説明テンプレートでは、`${issueTitle}`、`${issueNumber}`、 `${issueNumberLabel}` などのイシュー変数をサポートしており、これらは「イシューの作業を開始」によって、そのブランチに関連付けられたイシューから自動的に埋め込まれます。
-   プルリクエストをスタックする場合、スタック内のプルリクエストで自動マージが有効になっているものがある場合は、その自動マージを無効にするよう促されます。

このリリースの詳細については、[0.176.0の変更履歴](https://github.com/microsoft/vscode-pull-request-github/blob/main/CHANGELOG.md#01760) を確認し、このリリースの全内容についてご確認ください。

* * *

## 拡張機能の作成

### タイムライン API の確定

マーケットプレイスに公開された拡張機能は、Git コミットやローカル履歴の隣に、独自の履歴をタイムラインビューに追加できます。 ファイルやフォルダの場合は `workspace.registerTimelineProvider` を、ワークスペース全体の場合は `workspace.registerWorkspaceTimelineProvider` を使用してプロバイダーを登録します。`TimelineItem.resourceUri` をそのエントリ時点のリソースの内容に設定することで、ユーザーが **[Compare Selected]****を使用して他のエントリと比較できるようになります。

タイムライン API の詳細については、[タイムライン API ドキュメント](https://code.visualstudio.com/api/extension-guides/timeline) をご覧ください。

* * *

## 楽しい！

### Blobby ジャンプゲーム（実験的機能）

VS Code のマスコット「Blobby」と一緒に、ちょっとした休憩を楽しみましょう。 チャットに `/vscode-pet` と入力すると、Blobby が表示されます。「エージェント」ウィンドウの新規セッション画面で、Blobby のコンテキストメニューから **ジャンプゲームをプレイ** を選択してください。スペースキーを長押ししてジャンプの勢いを蓄え、矢印キーを使って次のプラットフォームを狙ってください。このデバイスでのハイスコアはゲーム内に保存されます。

* * *

## 非推奨の機能と設定

### 今回のリリースで新たに非推奨となった機能

#### 「拡張機能をインストール」ツールがローカル・ハネスから削除されました

**「拡張機能をインストール」** (`#installExtension`) エージェント・ツールは、ローカル・エージェント・セッションでは利用できなくなりました。 チャットから新しいワークスペースを作成しても、エージェントは拡張機能をインストールしなくなりました。代わりに、プロジェクトに必要な拡張機能を `.vscode/extensions.json` に追加するため、[拡張機能] ビューから内容を確認してインストールできます。Jupyter 拡張機能がない状態で Jupyter ノートブック内の Python セルを実行すると、カーネルピッカーが が、その拡張機能のインストールを促すプロンプトを表示します。

カスタムエージェントやプロンプトファイルで `#installExtension` を参照している場合は、その参照を削除してください。

#### ローカルハーネスから **VS Code コマンドの実行** ツールが削除されました

**VS Code コマンドの実行** (`#runCommand`) エージェントツールは、ローカルエージェントセッションでは利用できなくなりました。 これを利用していた組み込みワークフローは、現在、このツールがなくても正常に動作します。たとえば、チャットがネットワークの問題を診断した際、**Developer: Chat Diagnostics** を実行してレポートを共有するよう求められます。

カスタムエージェントやプロンプトファイルで `#runCommand` を参照している場合は、その参照を削除してください。

#### ローカル・ハーネスからワークスペース作成ツールおよびスラッシュコマンドが削除されました

**Create New Workspace** （`#newWorkspace`、旧称 `#new`）エージェントツールおよび `/new` スラッシュコマンドは、ローカルエージェントセッションでは利用できなくなりました。ウェルカムページ上の **新しいワークスペースを生成** リンクも利用できなくなりました。専用のプロジェクト設定スキルも削除されました。

プロジェクトを作成するには、空のフォルダを開き、エージェントセッション内で希望するプロジェクトの内容を記述してください。 エージェントは、標準ツールを使用してファイルを作成し、スケルトン生成コマンドを実行し、タスクを設定します。

カスタムエージェントおよびプロンプトファイルから、`#newWorkspace`、`#new`、`/new`、`project-setup-info-local`、および `project-setup-info-context7` への参照を削除してください。また、`github.copilot.chat.newWorkspaceCreation.enabled`、`github.copilot.chat.newWorkspace.useContext7`、および `github.copilot.chat.useProjectTemplates` 設定も削除されました。ノートブックの作成方法に変更はありません。

### 今後の非推奨予定

なし

* * *

## 主な修正点

-   組織が Claude または Codex エージェントを無効にした場合、以前にそのエージェントを選択していたユーザーは、**新しいチャット** (`+`)、**新しいチャットエディタ**、および新しいウィンドウからの入力ができない読み取り専用のチャットが表示されていました。新しいチャットは現在、デフォルトのハネスにフォールバックし、送信されていないプロンプトが引き継がれるようになりました。 ポリシーが解除された場合、以前の選択が再び適用されます。_[#345207](https://github.com/microsoft/vscode/pull/345207)_
    
-   組織が GitHub Copilot ポリシーで MCP アクセスを「レジストリのみ」に設定していた場合、ネットワークエラーやレート制限などによりポリシーの更新に失敗すると、次回更新が成功するまでその制限が解除されていました。現在、VS Code は最後に認識されたレジストリポリシーを維持し、GitHub から「適用されるレジストリがない」と報告された場合にのみ、そのポリシーをクリアします。_[#344895](https://github.com/microsoft/vscode/pull/344895)_
 

* * *

## 感謝

### 課題追跡

課題追跡への貢献者：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

### プルリクエスト

`vscode` への貢献：

-   [@bompus (Aaron Queen)](https://github.com/bompus): 非表示のパネルが再構築される前に、Markdown プレビューの HTML を更新する [PR #334681](https://github.com/microsoft/vscode/pull/334681)
-   [@cipheraxat (Akshat Anand)](https://github.com/cipheraxat): web: ファイルのエディタが閉じたら `code -w -g file:line` を実行する [PR #344740](https://github.com/microsoft/vscode/pull/344740)
-   [@denizguney (Deniz Güney Yıldırım)](https://github.com/denizguney): テスト: リセット設定のモック化とテストカバレッジのサポートを追加 [PR #338159](https://github.com/microsoft/vscode/pull/338159)
-   [@hardikkaurani (Hardik K)](https://github.com/hardikkaurani): 修正（配列）：quickSelect で負のインデックスがあった場合に TypeError をスローするように [PR #342816](https://github.com/microsoft/vscode/pull/342816)
-   [@hirossan4049 (hirose)](https://github.com/hirossan4049): editorFind: findMatchのフォアグラウンドカラーの入れ替わりを修正 (#\_228782) [PR #270395](https://github.com/microsoft/vscode/pull/270395)
-   [@kinqsradio (Anh Dang)](https://github.com/kinqsradio)
    -   range、regex、および host-and-port ルールにおける requireLocalPort の修正 [PR #344185](https://github.com/microsoft/vscode/pull/344185)
    -   正確なポート属性において、継承されたポートプロトコルを保持 [PR #344764](https://github.com/microsoft/vscode/pull/344764)
-   [@nathan-vincent-dev (nathan vincent)](https://github.com/nathan-vincent-dev): 「curent」および「filterd」の誤字を修正 [PR #345134](https://github.com/microsoft/vscode/pull/345134)
-   [@Nikhil-4404 (Nikhil Kumar)](https://github.com/Nikhil-4404): SSE ストリーム全体のバイト順マークの処理を修正 [PR #344094](https://github.com/microsoft/vscode/pull/344094)
-   [@pl4nty (Tom Plant)](https://github.com/pl4nty): win32: インストーラのコンテキストメニューにある COM サロゲート終了コマンドの修正 [PR #344505](https://github.com/microsoft/vscode/pull/344505)
-   [@rfeltis (Ralph Feltis)](https://github.com/rfeltis): チャット終了プロモーション・ピップが有効になっている際のテレメトリをログに記録 [PR #337997](https://github.com/microsoft/vscode/pull/337997)
-   [@RReverser (Ingvar Stepanyan)](https://github.com/RReverser): コパイロットのコード参照出力チャネルにおけるレース条件を修正 [PR #342272](https://github.com/microsoft/vscode/pull/342272)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   修正：タスクシステムのレディネスに関する競合 [PR #342418](https://github.com/microsoft/vscode/pull/342418)
    -   修正：ターミナルの自動返信におけるメモリリーク [PR #336022](https://github.com/microsoft/vscode/pull/336022)
-   [@spencrr (Spencer Schoenberg)](https://github.com/spencrr): agentHost: Copilotの「Co-authored-by」トレーラーを無効にする設定を追加 [PR #339437](https://github.com/microsoft/vscode/pull/339437)
-   [@VaggelisGian (Vaggelis Giannopoulos)](https://github.com/VaggelisGian): 進捗状況: 開始時刻と遅延が入れ替わったスコープ付きwhile状態を保存 [PR #332735](https://github.com/microsoft/vscode/pull/332735)
-   [@vscodebot-pr (VS Code PR Bot)](https://github.com/vscodebot-pr): 修正：モデルが縮小された場合の ListView の動的高さプローブに対するガードを追加（#333550 を修正） [PR #333563](https://github.com/microsoft/vscode/pull/333563)
-   [@wozhenbang2004 (Kayokoi)](https://github.com/wozhenbang2004): テスト: 「タイプ・トゥ・フィルター」実行前のキーバインドを尊重する [PR #344892](https://github.com/microsoft/vscode/pull/344892)
-   [@wycats (Yehuda Katz)](https://github.com/wycats): Copilot セッションで userPromptTransformed プラグインのフックを認識する [PR #345068](https://github.com/microsoft/vscode/pull/345068)

`vscode-pull-request-github` への貢献：

-   [@kinqsradio (Anh Dang)](https://github.com/kinqsradio)： macOSのパスエイリアスによる孤立したスタックワークツリーのクリーンアップを修正 [PR #9100](https://github.com/microsoft/vscode-pull-request-github/pull/9100)
-   [@tamird (Tamir Duberstein)](https://github.com/tamird): ブランチ操作のための Git 設定の一括読み込み [PR #8978](https://github.com/microsoft/vscode-pull-request-github/pull/8978)

* * *

新機能が利用可能になり次第、ぜひお試しいただければ幸いです。こちらのページをこまめにチェックして、新機能についてご確認ください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [更新情報](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
