---
product: VSCode
version: 1.140.0
release_title: Visual Studio Code 1.140
release_date: 2026-09-30
source_url: "https://code.visualstudio.com/updates/v1_140"
archived_at: 2026-10-01
---

# Visual Studio Code 1.140

# Visual Studio Code 1.140

2026年9月30日リリース 安定版

## 1.140.0のダウンロード

Windows

[x64](https://update.code.visualstudio.com/1.140.0/win32-x64-user/stable)[Arm64](https://update.code.visualstudio.com/1.140.0/win32-arm64-user/stable)

macOS

[ユニバーサル](https://update.code.visualstudio.com/1.140.0/darwin-universal-dmg/stable)[Intel](https://update.code.visualstudio.com/1.140.0/darwin-x64-dmg/stable)[Apple silicon](https://update.code.visualstudio.com/1.140.0/darwin-arm64-dmg/stable)

Linux

[.deb](https://update.code.visualstudio.com/1.140.0/linux-deb-x64/stable)[.rpm](https://update.code.visualstudio.com/1.140.0/linux-rpm-x64/stable)[.tar.gz](https://update.code.visualstudio.com/1.140.0/linux-x64/stable)[Arm に関する説明](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions)[Snap](https://update.code.visualstudio.com/1.140.0/linux-snap-x64/stable)

すでにインストール済みですか？ VS Code の **更新の確認** をご利用ください。今後の機能については、[Insiders ビルド](https://code.visualstudio.com/insiders) をご利用ください。

## リリースのハイライト

このリリースでは、エージェントのワークフローが拡張され、ワークツリーの再利用性が向上し、エンタープライズ AI コントロールが追加されました。

-   [Copilot ハーネス](#_copilot-harness)：Copilot ハーネスを使用することで、Copilot 製品全体で一貫したエージェントの動作を実現します。
    
-   [マルチフォルダ セッション（実験的）](#_multi-folder-sessions-experimental): 単一のエージェント セッション内で、複数のフォルダにまたがるタスクを処理できます。
    
-   [リモート委任（実験的機能）](#_delegate-tasks-to-remote-agent-hosts-experimental): 接続されたリモートエージェントホストにタスクを委任できます。
    
-   [HydraFusion（研究プレビュー）](#_hydrafusion-model-orchestration-research-preview)：手動で調整することなく、複数のモデルにコーディングタスクの草案作成、批評、修正を行わせることができます。
    
-   [ワークツリー間での共有フォルダ（実験的機能）](#_reuse-ignored-folders-across-worktrees-experimental): ワークツリー間で無視対象フォルダーを再利用することで、依存関係の再インストールやアーティファクトの重複を回避します。
 
-   [エンタープライズ制御](#_enterprise): 組織内の全員が AI のバージョン要件とデフォルト設定に従うようにします。
 

* * *

## エージェント

### Copilot ハーネス

Copilot ハーネスは、使い慣れた作業スタイルを維持しつつ、VS Code に画期的な新しいエージェント機能を追加します。Copilot SDK を基盤としているため、その動作や機能は、スタンドアロンの GitHub Copilot アプリや Copilot CLI を含む他の Copilot 製品と一貫しています。

Copilot ハーネスの使用を開始するには、チャット入力欄のハーネスピッカーから Copilot ハーネスを選択してください。今回のリリースでは、すでにデフォルトで選択されている場合があります。その後は、普段どおり作業を続けることができます。

![ハネスピッカーで Copilot ハネスが選択されている様子を示すスクリーンショット。](/assets/updates/1_140/Harness-Copilot.webp)

このハネスは、Agent Host Protocol (AHP) に基づく専用の [エージェントホスト](https://code.visualstudio.com/docs/agents/concepts/agent-host) プロセスで実行されるため、複数の VS Code ウィンドウから同じエージェントセッションに接続できます。

[Copilot ハーネスの使用方法](https://code.visualstudio.com/docs/agents/run/agent-harnesses#use-the-copilot-harness)を参照するか、[エージェントホストのブログ記事](https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture)でアーキテクチャやワークフローについて詳しくご覧ください。 フィードバックやご要望がございましたら、[イシューを登録してください](https://github.com/microsoft/vscode/issues)。

### HydraFusion モデルオーケストレーション（リサーチプレビュー）

[HydraFusion](https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/)は、各コーディングタスクに適したモデルとワークフローを選択する適応型モデルオーケストレーションシステムです。1つのモデルでタスクを解決したり、 より強力なモデルにエスカレーションしたり、別のモデルに結果を批評・修正させたりすることも可能です。このアプローチは、ユーザーが自らモデルを調整する必要なく、速度とコストのバランスを取りながら結果の品質を向上させることを目的としています。

プレビュー機能が有効になっている対象ユーザーは、モデルピッカーで HydraFusion を選択できます。

### マルチフォルダ セッション (実験的機能)

マルチフォルダ・セッションを使用すると、1つのセッション内で、リポジトリや分離されたワークツリーにまたがる関連作業を調整できます。以前は、[マルチチャット・セッション](https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions#_run-multiple-chats-in-a-session)内のすべてのチャットは、同じフォルダとチェックアウトを共有していました。今回のリリースでは、各チャットが独自のフォルダまたはワークツリーを使用できるようになり、チャット間で変更内容が漏れることはありません。

各チャットは、そのフォルダをターミナル、タスク、変更内容、プルリクエスト、 およびエージェントのマージ状態を管理します。同じフォルダを使用するチャット間では、その状態が共有されます。セッション一覧でセッションにカーソルを合わせると、そのセッション内のすべてのフォルダにわたる概要が表示され、ネストされたチャットにカーソルを合わせると、そのフォルダのみの詳細が表示されます。

![メインチャットを含むセッションにカーソルを合わせた際のスクリーンショットワークスペース、ワークツリー、ブランチ、プルリクエストのホバー表示、および2つのリポジトリとそのプルリクエストを一覧表示するセッション概要を示したスクリーンショット](/assets/updates/1_140/multi-folder-session-hover.webp)

使用例としては、次のようなものがあります：

-   **リポジトリをまたいで機能を実装する**：メインチャットで1つのリポジトリの作業を行い、2つ目のリポジトリ用にピアチャットを作成します。
    
-   **別々のワークツリーでのアプローチを比較する**：メインチャットに、同じリポジトリの新しいワークツリーをそれぞれ使用するピアチャットを作成するよう依頼します。各アプローチには、独自のブランチ、変更内容、プルリクエストが割り当てられます。
 

マルチフォルダセッションは実験的な機能であり、デフォルトでは無効になっています。設定エディタにはこの設定は表示されません。 ユーザースコープの `settings.json` ファイルで、使用するハルネスの設定を `true` に設定してから、セッションを作成してください:

-   Copilot: chat.agentHost.copilotAgent.multiRootEnabled VS Code で開く VS Code で開く Insiders
-   Claude: chat.agentHost.claudeAgent.multiRootEnabled VS Code で開く VS Code で開く Insiders
-   Codex: chat.agentHost.codexAgent.multiRootEnabled VS Code で開く VS Code で開く Insiders

新しいセッションでは、Agent Hostを再起動しなくても設定の変更が反映されます。フォルダーを追加したり、ピアチャットのフォルダーを選択したりするためのUIは用意されていないため、メインチャットにピアチャットの作成を依頼し、使用するリポジトリまたはワークツリーを指定してください。

### セッション内のチャットをアーカイブする

あるチャットが処理を完了しても、セッションの残りの部分はアクティブなままにしておきます。セッションには複数のチャットが含まれる可能性があるため、**「完了としてマーク」**を選択して、セッション全体ではなく、完了したピアチャットのみをアーカイブしてください。タイトルとチャット履歴をそのままにして復元するには、セッション一覧で **「完了」** フィルターを選択してください。

### Dev Container の自動クリーンアップ

**設定**: chat.agentHost.devContainer.enabled VS Code で開く VS Code で開く Insiders、chat.agentHost.devContainer.idleTimeout VS Code で開く VS Code で開く Insiders（エージェントウィンドウのみ）

Dev Container を使用するすべてのセッションが 5 分間非アクティブの状態になると、 VS Code はコンテナを停止します。作業を再開すると、コンテナは自動的に再起動します。最後のセッションを「完了」としてマークするか削除すると、コンテナは削除されます。

### Dev コンテナの起動を高速化

**設定**: chat.agentHost.devContainer.enabled VS Code で開く VS Code で開く Insiders （エージェント ウィンドウのみ）

Dev Container セッションにより、エージェントは隔離された環境でプロジェクトのツールや依存関係を使用できます。新規のコンテナは、キャッシュされた VS Code Server および CLI のダウンロードを再利用できるため、セットアップ時間の短縮や、プロジェクト間の重複ダウンロードを防ぐことができます。

### 委任作業のセッション関係とワークスペースの選択

エージェントに作業を委任する際は、2つの決定を別々に行います。まず、そのタスクが現在のセッションの計画（plan）に属するか、成果物（deliverable）に属するかを決定します。次に、タスクにリポジトリのファイルが必要な場合にのみワークスペースを指定し、ファイルの変更を隔離する必要がある場合にのみワークツリーを要求します。関連する作業では、別のワークスペースを使用することも可能です。

-   **関連作業用のピアチャットを作成する**：エージェントに、現在のセッション内でピアチャットを作成するよう依頼します。現在のワークスペースとチェックアウトを再利用したい場合は、プロンプトでその旨を明記してください。 ピアチャットではチェックアウトが共有されるため、このオプションは、ファイルの変更を隔離する必要のない調査、計画、または関連作業に使用してください。
 
 ```
    認証フローを確認するために、現在のワークスペースとチェックアウトを再利用するピアチャットをこのセッション内に作成してください。ファイルは変更しないでください。
    ```
    
-   **関連のない作業用の独立したセッションを作成する**：リポジトリファイルを必要としない別の成果物については、エージェントにワークスペースのない独立したセッションを作成するよう依頼してください。新しいセッションはソースフォルダを継承しません。作業にリポジトリが必要な場合は、プロジェクトまたはフォルダ名を指定し、変更の分離が必要な場合は明示的にワークツリーを要求してください。
    
    ```
    別のプロジェクトのライセンスオプションを調査するために、ワークスペースのない独立したセッションを作成してください。
    ```
    

[チャットとセッションの調整](https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions#_orchestrate-sessions-from-agent-host-sessions) について詳しくはこちらをご覧ください。

### リモートエージェントホスト上でワークスペースなしのチャットを作成する

**設定**: sessions.chat.unifiedWorkspacePicker.enabled VS Codeで開く VS Code Insidersで開く (エージェントウィンドウのみ)

[エージェントホスト](https://code.visualstudio.com/docs/agents/run/remote-agent-sessions) を使用すると、リモートホスト上でエージェントセッションを実行および追跡できます。このリリースでは、リモートホスト上でワークスペースなしのチャットを実行する機能が追加されました。

統合ワークスペースピッカーから、ワークスペースを選択せずに接続済みのホストを選択します。**Chat** エントリには選択されたホストが表示されるため、セッションを開始する前に、セッションがどこで実行されるかを確認できます。

![リモートエージェントホストでのワークスペース不要のチャットを示すスクリーンショット。Chat エントリに選択されたホストが表示されています。](/assets/updates/1_140/workspace-less-chat-remote-host.webp)

メインピッカーには、ローカルフォルダーに加えてリモートフォルダーも表示されます。これにより、**Remote** サブメニューを開かなくても、頻繁に使用するリモートワークスペースを簡単に選択できるようになります。

### リモートエージェントホストへのタスクの委任（実験的機能）

**設定**: chat.remoteAgentHostsEnabled VS Codeで開く VS Code Insidersで開く、chat.remoteSessions.tools.enabled VS Codeで開く VS Code Insidersで開く（「エージェント」ウィンドウのみ）

エージェントは、「エージェント」ウィンドウから接続済みの [リモートエージェントホスト](https://code.visualstudio.com/docs/agents/run/remote-agent-sessions) に作業を委任できます。これにより、タスクごとにピッカーでホストを選択する手間が省けます。

新しい組み込みツールにより、エージェントは以下の操作が可能になります：

-   `list_agent_hosts` を使用して、ホスト、モデル、リソース容量、およびセッションの負荷を検出します。
-   `create_remote_session` を使用してセッションを開始します。ホストを指定するか、自動配置機能にオペレーティングシステム （Windows、Linux、またはmacOS）、最小メモリ容量、論理CPU数、およびオプションのモデルに基づいて自動配置を行うことも可能です。一致するホストのうち、実行中のセッション数と作成待ちのセッション数が最も少ないホストが優先的に割り当てられます。
-   `get_remote_session` を使用して、リモートセッションのステータスと最新の応答を確認できます。
-   `send_remote_message` を使用して、フォローアップ作業を送信したり、結果や質問を元のチャットに報告したりします。

これらのツールはデフォルトでは無効になっています。chat.remoteAgentHostsEnabled を有効にし、VS Code で開く VS Code で開く Insiders に接続して、使用したいホストを接続してください。 エージェントホスト上で実行中のチャットから、次のように指示します。

```
メモリが 16 GiB 以上、論理 CPU が 8 個以上の接続済み Linux ホストでリモートセッションを開始してください。インストールされている Node.js および Python のバージョンを確認し、このチャットに報告してください。
```

ワークスペースを指定しない限り、セッションにはワークスペースがありません。リポジトリ作業を行う場合は、ターゲットホスト上の既存の信頼済みフォルダを、直接、または新しい Git ワークツリー内で使用してください。ツールは元のワークスペースをクローンしたりコピーしたりすることはなく、通常の承認手順は引き続き適用されます。

メッセージのやり取りを行うには、調整用の「Agents」ウィンドウを開いたまま、接続を維持してください。リモートエージェントは `send_remote_message` を通じて報告を行いますが、その最終回答は自動的に転送されません。

### 新規セッションのウェルカムメッセージをカスタマイズする（実験的機能）

**設定**: sessions.chat.experimental.welcomePhrases VS Codeで開く VS Code Insidersで開く、sessions.chat.experimental.welcomeName VS Codeで開く VS Code Insidersで開く、accessibility.verbosity.newSessionWelcome VS Codeで開く VS Code Insidersで開く（エージェントウィンドウのみ）

エージェントウィンドウで新しいセッションを作成する際に、オプションのウェルカム見出しを表示して、エージェントウィンドウに個性を加えましょう。見出しには、**「何を作っているの？」**や**「何かリリースしよう」**など、5つのフレーズのいずれかが表示され、GitHub プロフィールのファーストネームを追加することもできます。

![「Let's cook, Megan」というパーソナライズされたウェルカムフレーズが表示された、エージェントウィンドウの新規セッション作成画面のスクリーンショット。](/assets/updates/1_140/custom-welcome-phrases.webp)

ウェルカムフレーズはデフォルトで無効になっています。有効にした場合、見出し、そのコンテキストメニュー、またはコマンドパレットから **ウェルカム名を設定** を選択して、別の名前を設定できます。設定した名前はデバイス間で同期されます。名前をクリアすると、GitHub プロファイルに名前が登録されている場合はその名前が使用され、登録されていない場合は汎用フレーズが表示されます。

スクリーンリーダー最適化モードが有効な場合、コンポーザーが表示されると VS Code が見出しを一度読み上げます。この読み上げを聞きたくない場合は、`accessibility.verbosity.newSessionWelcome` を無効にしてください。VS Code で開く VS Code で開く Insiders。

### セッションコンポーザーのコントロールの改善（実験的機能）

**設定**: sessions.chat.experimental.newSessionComposerLayout VS Code で開く VS Code Insiders で開く 、sessions.chat.unifiedWorkspacePicker.enabled VS Code で開く VS Code Insiders で開く （エージェントウィンドウのみ）

実験的なセッションコンポーザーのレイアウトにより、エージェントウィンドウ内の別々の部分間を移動する必要が軽減されます。新しいセッションでは、ワークスペース、ブランチ、ワークツリー、およびハーネスのコントロールが、チャット入力欄の上部にグループ化されています。

![チャット入力欄の上にワークスペース、ブランチ、ワークツリー、ハーネスのコントロールがグループ化された、実験的なセッションコンポーザーレイアウトを示すスクリーンショット。](/assets/updates/1_140/composer-layout.webp)

このレイアウトを使用するには、両方の設定を有効にしてください。

統合されたワークスペースピッカーには、そのコントロールに直接移動するためのコマンドも用意されています。⌘K ⌘F (Windows、Linux: Ctrl+K Ctrl+F) を使用してワークスペースピッカーにフォーカスを合わせたり、⌘K ⌘H (Windows、Linux: Ctrl+K Ctrl+H) を押すと、ハーネスピッカーにフォーカスが移ります。カーソルを合わせると設定済みのキーバインドが表示され、各ピッカーのコンテキストメニューには **キーバインドの設定** アクションが用意されています。これらのキーボード操作の改善には、実験的なコンポーザーレイアウトではなく、統一されたワークスペースピッカーのみが必要です。

このマイルストーン以降、新しいワークツリーセッションを作成する際、ブランチピッカーのデフォルトは、`origin/main` など、現在のブランチの上流ブランチになります。ワークツリーを作成する前に、VS Code は選択されたリモートブランチを自動的に取得しようと試みるため、セッションは利用可能な最新のリモート状態から開始されます。

また、ピッカーはワークスペースごとに1回だけブランチを読み込み、ローカルでフィルタリングを行うため、特に大規模なリポジトリにおいて検索の遅延が大幅に軽減されます。

![「新しいワークツリー」が選択され、デフォルトブランチとして `origin/main` が設定された新規セッションページのスクリーンショット。](/assets/updates/1_140/new-session-branch-picker.webp)

### 最近完了したセッションを最初に表示

「エージェント」ウィンドウの **完了** セクションでは、セッションを「完了」としてマークした日時順に並べ替えられるようになり、最も最近完了したセッションが最初に表示されるようになりました。この順序は、**作成** や **更新** での並べ替えに切り替えた場合や、VS Code を再読み込みした後も維持されます。

### より信頼性の高いエージェントのオーケストレーション（実験的機能）

**設定**: chat.agentHost.agentOrchestrationLimits VS Code で開く VS Code Insiders で開く

調整作業の多いエージェントのワークフローでも、作業が完了する前に停止する可能性が低くなりました。このリリースでは、エージェントが作成するセッション、チャット、セッション間メッセージ、および再帰的なセッション作成について、プロセス全体の上限値が引き上げられました。

たとえば、エージェントはCIの失敗を分類し、 各修正を個別のセッションに委任し、作業が完了する前にメッセージ制限に達することなく、それらのセッションを調整できるようになります。制限に達しても、新しいオーケストレーション操作はブロックされますが、すでに実行中の作業は中断されません。

この設定のデフォルトは `on` であり、変更は Agent Host を再起動せずに適用されます。オーケストレーションの制限を解除するには、`off` に設定してください。 確認要件および入力の妥当性チェックは引き続き適用されます。

### URL から「エージェント」ウィンドウで新しいセッションを開く

別のツールやウェブページから、「Agents」ウィンドウを開き、レビューの準備が整ったワークスペースと編集可能なプロンプトを表示させます。`agents/new` パスを含む URL を使用し、オプションで `prompt` および `workspace` クエリパラメータを指定してください。

たとえば、次の URL は、ワークスペースなしで、プロンプトがすでに入力された状態で新しいセッションを開きます：

```
vscode://agents/new?prompt=このプロジェクトがテストをどのように実行しているかを説明してください。まだ何も実行しないでください。
```

VS Code は、デコードされたプロンプトを送信せずに、**[新しいセッション]** コンポーザーに配置します。ワークスペースを選択するには、URL エンコードされたフォルダ URI を指定した `workspace` パラメータを追加してください。URL に `workspace` が省略されている場合、 下書きでは **No Workspace** が使用されます。既存の使用中のコンポーザーは変更されないため、リンクを開いても進行中の作業が上書きされることはありません。

[URL を使用して VS Code を開く方法](https://code.visualstudio.com/docs/configure/command-line#_opening-vs-code-with-urls) について詳しくはこちらをご覧ください。

> **注:** VS Code Insiders をご利用の場合は、`vscode://` の代わりに `vscode-insiders://` を使用してください。

* * *

## チャット

### エージェントの応答に対する進行状況の持続表示（実験的機能）

**設定**: chat.experimental.persistentProgress VS Code で開く VS Code Insiders で開く 、chat.experimental.persistentProgressVerbosity VS Code で開く VS Code Insiders で開く

進行状況の継続表示により、長時間かかるエージェントの応答も追跡しやすくなります。有効にすると、応答が完了するまでチャット画面の下部に進行状況インジケーターが表示されます。

進行状況の継続表示を有効にすると、処理中の応答の表示や視認性も向上します。 推論結果は個別の折りたたみ可能なプレビューに表示され、ツール呼び出しは実行中も表示されたままになります。**Compact** 表示レベルでは、応答テキストの表示が再開されたり応答が完了したりすると、完了したツールグループは展開可能な要約に折りたたまれます。ツール呼び出しの詳細をすべて表示したままにするには、**Verbose** を選択すると、ツール呼び出しの詳細がすべて表示されたままになります。

chat.experimental.persistentProgress VS Code で開く VS Code Insiders で開く を使用して、インジケーターをオフにしたり、カラーまたはモノクロの Draw アニメーションを選択したりできます。この設定は VS Code Insiders ではデフォルトで **Draw** に設定されており、Stable 版へ段階的に展開されています。

### ターミナル出力のリフロー

**設定**: chat.tools.terminal.outputReflow VS Code で開く VS Code Insiders で開く

[VS Code 1.132](https://code.visualstudio.com/updates/v1_132#_terminal-output-reflow) 以降、チャット内のターミナル出力は、出力プレビューの幅に合わせて再配置されるようになりました。

新しい設定「chat.tools.terminal.outputReflow」VS Code で開く VS Code Insiders で開く を使用すると、この動作を制御できます。出力の幅を固定したい場合は、この設定を無効にし、長い行を読む際に水平方向にスクロールしてください。デフォルトでは、リフローは有効のままです。

### エディタウィンドウでの複数のチャットの利用

1つのセッションには複数のチャットを含めることができます。 これまでは、メインチャットとそのネストされたピアチャットは「エージェント」ウィンドウにのみ表示されていました。エディタウィンドウでもこれらが表示されるようになりました。「**セッション**」ビューには、**チャット**ビューの隣に、メインチャットとその下にネストされたピアチャットが一覧表示されます。任意の行を選択すると、そのチャットが**チャット**ビューで開きます。

![エディタウィンドウのスクリーンショット。**Sessions** ビューにはセッションとそのネストされたピアチャットが一覧表示され、その横の **Chat** ビューには選択されたチャットが表示されています。](/assets/updates/1_140/editor-window-multi-chats.webp)

* * *

## MCP

### ポータブル設定ファイルへのMCPサーバーの追加

**MCP: サーバーの追加**フローから、ポータブル設定ファイルにMCPサーバーを追加できます。これにより、JSONを手動で編集することなく、互換性のあるCopilotツール間で同じサーバー設定を使用できます。

グローバルサーバーの場合は、**Copilot Global** を選択してサーバーを `$COPILOT_HOME/mcp-config.json` に保存するか、`COPILOT_HOME` が設定されていない場合は `~/.copilot/mcp-config.json` に保存します。

![Copilot Global と、グローバル MCP サーバーの保存先として使用される非推奨のユーザー設定を示したスクリーンショット。](/assets/updates/1_140/mcp-global-configuration.webp)

ワークスペースサーバーの場合は、`.mcp.json` を選択して、ワークスペースのルートにサーバーを保存してください。

![ワークスペースのルートにある `.mcp.json` と、非推奨の `.vscode/mcp.json` をワークスペースの MCP サーバーの保存先として設定しているスクリーンショット。](/assets/updates/1_140/mcp-workspace-configuration.webp)

* * *

## アクセシビリティ

### コンフェッティが表示されたときに音で知らせる

**設定**: accessibility.signals.confetti VS Codeで開く VS Code Insidersで開く

新しい **Confetti** アクセシビリティシグナルは、アニメーションが見えない場合でも、同様の祝賀フィードバックを提供します。チャットの「いいね」コンフェッティが表示されたときや、エージェントウィンドウでセッションを「完了」としてマークに成功したときに、喜びの音が鳴ります。

* * *

## ソース管理

### ワークツリー間で無視フォルダーを再利用 (実験的機能)

**設定**: git.worktreeSymlinkFolders VS Code で開く VS Code で開く Insiders

各 [Git ワークツリー](https://code.visualstudio.com/docs/sourcecontrol/branches-worktrees#_understanding-worktrees)で、依存関係の再インストールや大規模なビルドアーティファクトの重複を回避します。`git.worktreeSymlinkFolders`（VS Codeで開く VS Code Insiders）を、`node_modules`などの無視対象フォルダーに対して`.gitignore`スタイルのパターンで設定します。VS Codeが新しいワークツリー（エージェントセッション用を含む）を作成する際、現在のチェックアウト内にある一致するフォルダーへのシンボリックリンクを作成します。

* * *

## コード編集

### 選択テキストの大文字小文字の区別を制御する新しいオプション

**設定**: editor.selectedTextMatchMode VS Code で開く VS Code で開く Insiders

選択範囲のマッチングにおける大文字小文字の区別を制御するための新しい設定 editor.selectedTextMatchMode VS Code で開く VS Code で開く Insiders を追加しました。

デフォルト値である `findOptions` は、選択範囲の一致の感度が、従来通り「検索」ウィジェットに連動することを意味します。その他に `caseSensitive` と `caseInsensitive` の 2 つの値があり、それぞれ大文字小文字を区別する選択範囲の一致と、区別しない選択範囲の一致に対応しています。

* * *

## ターミナル

### macOS でのターミナルテキストの鮮明化 (実験的)

**設定**: terminal.integrated.fontRendering VS Code で開く VS Code Insiders で開く

macOS の高 DPI ディスプレイでは、ターミナル上のテキストが他のターミナルで表示される同じフォントよりもぼやけて見えることがあります。ターミナル上のテキストをより鮮明に表示するには、terminal.integrated.fontRendering を `grayscale` に設定してください。

* * *

## エンタープライズ

### 最小バージョン要件の説明

管理者は、例えば新しいサンドボックス保護機能を導入するためなど、開発者に AI 機能の使用前に VS Code の更新を義務付けることができます。**「更新が必要です」** ダイアログの代わりに、AI 機能が利用できない場所では、VS Code がその要件を説明するようになりました:

-   **チャット**：必要なバージョンとインストール済みのバージョンを表示し、更新アクションを提示します。
-   **エディタウィンドウ**：チャットが閉じられている場合でもバナーを表示します。その他のエディタ機能は引き続き利用可能です。
-   **エージェントウィンドウ**：操作をブロックするオーバーレイを表示し、**エディタウィンドウを開く**アクションを提示します。

更新が利用可能な場合、VS Code はそれに応じた **更新を確認**、**更新をダウンロード**、**更新をインストール**、または **更新のために再起動** アクションを表示します。組織のポリシーにより組み込みの更新が無効になっている場合、VS Code は代わりに管理者に連絡するよう促します。要件が満たされると、通知は消えます。 VS Code が要件を適用する仕組みに変更はありません。

![AI 機能を使用するには新しいバージョンが必要であることを説明するバナーとチャット通知が表示されたエディタウィンドウのスクリーンショット。](/assets/updates/1_140/minversion-chat-banner.webp)

### デフォルトの「Auto」ティアの設定

VS Code の「Auto」モデルは、効率性、バランス、または知能のいずれかに最適化されたさまざまなティアで動作します。管理者は、開発者が別のティアを選択することを妨げることなく、「Auto」モデルのデフォルトの動作を組織の優先事項に合わせて調整できます。

管理者は、`autoTier` マネージド設定を使用して、Auto モデルのデフォルトのティアを設定できます。有効な値は `efficiency`、`balance`、`intelligence` です。

このティアは、ローカル・ハーネスおよび同じマシン上の Copilot エージェント・ホストにおける新しいチャットに適用されます。マネージド・ティアは、モデルピッカーに **デフォルト** として表示されます。

管理対象のティアは出発点であり、制限ではありません。開発者は引き続き別のティアを選択できます。管理対象のティアが変更されたり削除されたりしても、VS Code は明示的に設定された選択や復元された選択を保持します。

![Auto モデルの「Optimize for」メニューのスクリーンショット。Intelligence が選択され、デフォルトとしてマークされています。](/assets/updates/1_140/managed-auto-tier-default.webp)

### OpenTelemetry でのユーザー ID の取得

**設定**: github.copilot.chat.otel.captureIdentity VS Code で開く VS Code Insiders で開く

組織は、[Copilot OpenTelemetry](https://code.visualstudio.com/docs/enterprise/ai-settings#_configure-telemetry-export-with-opentelemetry) のデータを個々の開発者に紐付けることができます。IDの取得が有効になっている場合、 ローカルチャットセッションには、以下の属性が追加されます:

-   サブエージェントやインラインチャットを含む、エージェント呼び出しスパン上の `user.name`。
-   リソース属性としての `process.user.name` および `host.name`。

ID キャプチャはデフォルトで無効になっており、コンテンツキャプチャとは独立しています。管理者は、`telemetry.capture.identity` 管理設定（`CopilotOtelCaptureIdentity` ポリシー）を使用して ID キャプチャを制御します。管理設定の値は、`COPILOT_OTEL_CAPTURE_IDENTITY` およびユーザー設定よりも優先されます。 ポリシーによってキャプチャが拒否された場合、VS Code はリロードを行わずに、以降のエクスポートから識別情報を削除します。これには、リソース属性として明示的に設定された識別属性も含まれます。

また、このリリースでは、管理対象のテレメトリ設定の解決方法も変更されています：

-   VS Code は、優先順位が最も高い配信チャネル（ネイティブ MDM、 次にサーバー、その次にファイルの順です。選択されたブロックで省略されたフィールドは、優先度の低いチャネルから補完されることはなくなりました。
-   管理対象の `telemetry.resourceAttributes` が、`OTEL_RESOURCE_ATTRIBUTES` よりも優先されるようになりました。

> **注**: 識別情報の取得は、現在ローカル・ハーネスのみに適用されます。エージェント・ホストへの対応については、[#337413](https://github.com/microsoft/vscode/issues/337413)で追跡されています。

* * *

## ソーシャルメディア

VS Code が Instagram に登場しました！[@vscode.ig](https://www.instagram.com/vscode.ig) をフォローして、VS Code の最新情報、新機能、ヒントなどをチェックしてください。

* * *

## 提案中の API

### 認証セッションにおける認証サーバー

`authIssuers` 提案により、拡張機能は認証に使用する OAuth 認証サーバーを指定できるようになります。これは、VS Code が MCP 向けに [1.1101のリリースノート](https://code.visualstudio.com/updates/v1_101#_authentication-providers-supported-authorization-servers-for-mcp)で導入されました。今回のリリースでは、その逆方向の機能も追加され、セッションがどの認証サーバーによって発行されたかを特定できるようになりました。

```
export interface AuthenticationSession {
  /**
   * 認証プロバイダーから提供された場合、このセッションを発行した認証サーバー。
   * これは OAuth サーバーを識別するものであり、REST API のエンドポイントやリソースの対象範囲を示すものではありません。
   */
  readonly authorizationServer?: Uri;
}
```

拡張機能が、パブリック GitHub や GitHub Enterprise ホストなど、1 つのサービスの複数のデプロイメントと通信する場合、ユーザーが個別に変更できる設定を読み取る代わりに、各認証情報を、それが発行された宛先と紐付けることができます。これにより、有効なトークンが誤ったホストに送信されるのを防ぐことができます。

2つの点に留意してください。この値はAPIエンドポイントではなくOAuth発行者を識別するものであるため、独自のエンドポイントにマッピングしてください。 組み込みの GitHub プロバイダーは、パブリック GitHub セッションとエンタープライズ セッションの両方でこの値を設定するため、この値が存在しているだけでは、そのセッションがエンタープライズ セッションであるとは限りません。

ぜひ試してみて、[API 提案のイシュー](https://github.com/microsoft/vscode/issues/248775) までご意見をお寄せください。提案に基づいて開発を行う方法については、[提案中の API の使用方法](https://code.visualstudio.com/api/advanced-topics/using-proposed-api) をご覧ください。

* * *

## 非推奨の機能と設定

なし

* * *

## 謝辞

`vscode` への貢献：

-   [@na2co3-ftw (na2co3)](https://github.com/na2co3-ftw)：モダン UI： 接続されたエディタタブでの冗長なタブ操作のフェードインを修正 [PR #336871](https://github.com/microsoft/vscode/pull/336871)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   修正: ターミナルリプレイにおけるメモリリーク [PR #338252](https://github.com/microsoft/vscode/pull/338252)
    -   修正：セマンティックトークンにおけるメモリリーク [PR #336024](https://github.com/microsoft/vscode/pull/336024)
    -   修正：検索エディタにおけるメモリリーク [PR #331014](https://github.com/microsoft/vscode/pull/331014)
    -   ターミナル：破棄時の不要なテレメトリタイムアウトを解除 [PR #333963](https://github.com/microsoft/vscode/pull/333963)
    -   修正：アニメーションフレームウィンドウの破棄時のメモリリーク [PR #338263](https://github.com/microsoft/vscode/pull/338263)
    -   修正：チャット参加者の破棄時のメモリリーク [PR #338230](https://github.com/microsoft/vscode/pull/338230)
    -   修正：カスタムドキュメントの破棄時のメモリリーク [PR #338250](https://github.com/microsoft/vscode/pull/338250)
    -   修正：マッピングされた編集プロバイダーの解放時のメモリリーク [PR #338245](https://github.com/microsoft/vscode/pull/338245)
    -   修正：拡張機能ホストのテレメトリにおけるメモリリーク [PR #334096](https://github.com/microsoft/vscode/pull/334096)
    -   修正: 補助ウィンドウのフォント測定におけるメモリリーク [PR #338255](https://github.com/microsoft/vscode/pull/338255)
    -   修正: SCM アーティファクトコマンドにおけるメモリリーク [PR #338251](https://github.com/microsoft/vscode/pull/338251)
    -   修正: ピクセル比率ウィンドウの破棄時のメモリリーク [PR #338257](https://github.com/microsoft/vscode/pull/338257)
    -   修正: 統合ブラウザ要素のハンドルにおけるメモリリーク [PR #338247](https://github.com/microsoft/vscode/pull/338247)
    -   修正: ターミナルの水平スクロールバーにおけるメモリリーク [PR #338241](https://github.com/microsoft/vscode/pull/338241)
    -   修正: 拡張機能ホストのツリービュー破棄時のメモリリーク [PR #338235](https://github.com/microsoft/vscode/pull/338235)
    -   修正: 複合ドラッグ＆ドロップの登録におけるメモリリーク [PR #338215](https://github.com/microsoft/vscode/pull/338215)
    -   修正: 統合ブラウザインスペクタのセッションにおけるメモリリーク [PR #338228](https://github.com/microsoft/vscode/pull/338228)
    -   修正：chatInputPart におけるメモリリーク [PR #327157](https://github.com/microsoft/vscode/pull/327157)
    -   修正: ターミナルシェル実行ストリームにおけるメモリリーク [PR #338243](https://github.com/microsoft/vscode/pull/338243)
    -   修正: ノートブックのセルステータスバーコマンドにおけるメモリリーク [PR #336028](https://github.com/microsoft/vscode/pull/336028)
    -   修正: issueReporterModel におけるメモリリーク [PR #335098](https://github.com/microsoft/vscode/pull/335098)
    -   修正：画像カルーセルエディタのメモリリーク [PR #333981](https://github.com/microsoft/vscode/pull/333981)
    -   修正：ノートブックシリアライザの破棄におけるメモリリーク [PR #338212](https://github.com/microsoft/vscode/pull/338212)
    -   修正: MainThreadShare におけるメモリリーク [PR #334110](https://github.com/microsoft/vscode/pull/334110)
    -   修正: マルチディフエディタのタブにおけるメモリリーク [PR #333186](https://github.com/microsoft/vscode/pull/333186)
    -   修正: テストオブザーバーの破棄時のメモリリーク [PR #338213](https://github.com/microsoft/vscode/pull/338213)
    -   修正: modalEditorPart におけるメモリリーク [PR #326885](https://github.com/microsoft/vscode/pull/326885)
    -   修正: コメントスレッドの破棄におけるメモリリーク [PR #338216](https://github.com/microsoft/vscode/pull/338216)
    -   修正: 行データイベントアドオンにおけるメモリリーク [PR #332139](https://github.com/microsoft/vscode/pull/332139)

### 課題追跡

課題追跡への貢献:

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

* * *

新機能が公開され次第、ぜひお試しいただければ幸いです。こちらのページをこまめにチェックして、新機能についてご確認ください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [更新情報](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
