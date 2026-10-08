---
product: VSCode
version: 1.141.0
release_title: Visual Studio Code 1.141
release_date: 2026-10-07
source_url: "https://code.visualstudio.com/updates/v1_141"
archived_at: 2026-10-08
---

# Visual Studio Code 1.141

# Visual Studio Code 1.141

2026年10月7日リリース 安定版

## 1.141.0 のダウンロード

Windows

[x64](https://update.code.visualstudio.com/1.141.0/win32-x64-user/stable)[Arm64](https://update.code.visualstudio.com/1.141.0/win32-arm64-user/stable)

macOS

[ユニバーサル](https://update.code.visualstudio.com/1.141.0/darwin-universal-dmg/stable)[Intel](https://update.code.visualstudio.com/1.141.0/darwin-x64-dmg/stable)[Apple silicon](https://update.code.visualstudio.com/1.141.0/darwin-arm64-dmg/stable)

Linux

[.deb](https://update.code.visualstudio.com/1.141.0/linux-deb-x64/stable)[.rpm](https://update.code.visualstudio.com/1.141.0/linux-rpm-x64/stable)[.tar.gz](https://update.code.visualstudio.com/1.141.0/linux-x64/stable)[Arm版](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions)[Snap](https://update.code.visualstudio.com/1.141.0/linux-snap-x64/stable)

すでにインストール済みですか？ VS Code の **更新の確認** をご利用ください。今後の機能については、[Insiders ビルド](https://code.visualstudio.com/insiders) をご利用ください。

## リリースのハイライト

今回のリリースでは、エージェント セッションの管理、エージェント ワークフローの保護、列形式のテキストの編集、および GitHub Enterprise インスタンス間の連携がより容易になりました。

-   [ワークツリーのストレージのクリーンアップ](#_reclaim-storage-from-inactive-worktrees): 非アクティブなエージェント セッションのワークツリーから、オンデマンドまたは自動的にディスク領域を解放します。
 
-   [クロスプラットフォームのサンドボックス化](#_sandboxing-in-the-copilot-agent-host): ターミナルサンドボックス化により、Windows、macOS、Linux上でエージェントによるファイルやネットワークリソースへのアクセスを制限します。
 
-   [セッションのグリッド表示](#_arrange-sessions-in-a-grid): グリッドレイアウトで複数のエージェントセッションを並べて比較・監視できます。
    
-   [外部セッションの継続](#_continue-local-external-copilot-sessions-without-reloading): コンテキストを失うことなく、VS Code 内でローカルの外部 Copilot および Codex の会話を再開します。
    
-   [ブロック貼り付け](#_spreading-block-pasting): 1つのカーソル位置から、連続する行にブロック行を貼り付けます。
    
-   [複数の GitHub Enterprise インスタンス](#_sign-in-to-multiple-github-enterprise-instances): 同じ VS Code ウィンドウから、GHE.com および GitHub Enterprise Server アカウントにサインインできます。
 

* * *

## エージェントループ

### Copilot ハーネス

Copilot ハーネスは、VS Code にエキサイティングな新しいエージェント機能を追加します。これは Copilot SDK によって駆動されているため、その動作や機能は、スタンドアロンの GitHub Copilot アプリや Copilot CLI を含む他の Copilot 製品と一貫しています。

Copilot ハーネスの使用を開始するには、チャット入力欄のハーネスピッカーから Copilot ハーネスを選択してください。今回のリリースでは、すでにデフォルトで選択されている場合があります。その後は通常どおり作業を続けることができます。

![ハーネスピッカーで Copilot ハーネスが選択されている様子を示すスクリーンショット。](/assets/updates/1_141/Harness-Copilot.webp)

このハーネスは、Agent Host Protocol (AHP) に基づく専用の [エージェントホスト](https://code.visualstudio.com/docs/agents/concepts/agent-host) プロセスで実行されるため、複数の VS Code ウィンドウから同じエージェントセッションに接続できます。

[Copilot ハーネスの使い方](https://code.visualstudio.com/docs/agents/run/agent-harnesses#use-the-copilot-harness) を確認するか、[エージェントホストに関するブログ記事](https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture) でアーキテクチャやワークフローについて詳しく確認できます。フィードバックや要望がある場合は、[イシューを登録してください](https://github.com/microsoft/vscode/issues)。

### 非アクティブなワークツリーからストレージを解放する

**Chat: Open Worktree Cleanup** を実行して、非アクティブなエージェント セッションのワークツリーが使用しているディスク容量を確認し、不要になったものを削除してください。非アクティブになってからの期間でセッションをフィルタリングし、各ワークツリーのサイズを確認して、クリーンアップするワークツリーを選択します。

また、クリーンアップエディタでは、プルリクエストがマージされたセッションの自動クリーンアップを設定したり、セッションのストレージ容量が大きくなった際に VS Code がクリーンアップを提案するかどうかを制御したりすることもできます。

![クリーンアップ設定と非アクティブなセッションのワークツリーが表示されたワークツリークリーンアップエディタのスクリーンショット。](/assets/updates/1_141/worktree-cleanup-editor.webp)

chat.agentSessions.sessionStorageCleanupSuggestion.enabled が有効になっている場合、Agents ウィンドウは、非アクティブなワークツリーが十分に蓄積されたとき、またはクリーンアップを行う価値があるほどディスク容量を消費したときに通知を表示します。

![「Agents」ウィンドウにワークツリーのクリーンアップ提案が表示されているスクリーンショット。](/assets/updates/1_141/worktree-cleanup.webp)

クリーンアップを実行すると、選択されたセッションは「完了」としてマークされ、そのワークツリーが削除されます。後でセッションを復元して、ワークツリーを再作成することができます。 アクティブなセッション、実行中のセッション、入力が必要なセッション、およびピン留めされたセッションは、クリーンアップの対象外となります。

### バックグラウンドシェルの追跡

エージェントがバックグラウンドでコマンドを実行する場合、コマンドの実行中も他のステップの処理を継続します。[Copilot harness](#_copilot-harness) セッションでは、 チャット入力欄の上にある **バックグラウンドシェル** ピルには、エージェントウィンドウとエディタウィンドウの両方で、現在も実行中のシェルが一覧表示されます。

このピルを選択すると、各シェルのコマンドと実行時間が表示されます。また、シェルを選択すると、出力がある場合、コマンドの実行中にその出力ストリームを確認できます。コマンドが終了すると、そのシェルはリストから削除されます。

![「バックグラウンドシェル」ピルが表示され、実行中のシェルの出力が詳細欄にストリーミングされているスクリーンショット。](/assets/updates/1_141/background-shell-streaming.webp)

### エージェントがトリガーするメッセージの制御機能の強化

エージェントが会話間で作業を委任する場合、他のセッションが終了するのを待つのではなく、要件の変化に応じて委任されたタスクを調整できるようになりました。`send_message` ツールは、同じエージェントホスト上のセッション間およびネストされたセッション間で、以下の操作をサポートしています：

-   修正を加えて、進行中の会話を方向転換する。
-   フォローアップを別のターンとしてキューに入れる。
-   キュー内のメッセージを、キュー内の位置を維持したまま置き換える。
-   処理が開始される前に、キュー内のメッセージをキャンセルする。

キュー内のメッセージは順番に実行されます。メッセージの処理が開始されると、そのメッセージを置き換えたりキャンセルしたりすることはできなくなります。

* * *

## エージェントのユーザー体験

### セッションをグリッドで配置

セッション間を繰り返し切り替えることなく、結果の比較、長時間実行中のタスクの監視、関連する会話間の作業を行うことができます。エディタウィンドウと同様に、「エージェント」ウィンドウの 2 次元セッショングリッドでは、セッションをドラッグして水平または垂直に分割したり、ペインのサイズを変更したりできます。

集中して作業する必要があるときはセッションを最大化し、その後グリッドに戻って複数の会話にまたがって作業を続行できます。

### コンパクトなレイアウト密度

**設定**: window.density.layout VS Code で開く VS Code で開く Insiders

「コンパクト」レイアウト密度を使用すると、エージェントウィンドウにより多くのコンテンツを表示できます。コンパクト密度では、タイトルバーが短くなり、ワークベンチ各パーツ間の隙間が取り除かれ、ペイン間の間隔が狭くなります。

デフォルトでは、 「エージェント」ウィンドウは、エディタウィンドウにも適用されるユーザーレベルの window.density.layout VS Code で開く VS Code で開く Insiders 設定に従います。「エージェント」ウィンドウのみに別の密度を設定するには、ウィンドウを開き、**[表示] > [レイアウト密度]** を選択します。エディタウィンドウの密度は変更されません。

### その他のセッションフィルタリングオプション

セッション一覧を、自分が重視する作業に絞り込みましょう。**セッションのフィルタリング**を開くと、以下ごとに個別にフィルタリングできます：

-   **環境**：セッションが実行される場所（ローカル、クラウド、リモートホストなど）。
-   **ハーネス**： セッションが使用するエージェントハーネス。
-   **作成元**：セッションを作成したアプリケーション（VS Code、Copilot CLI、Copilot アプリなど）。

このメニューには、並べ替え、グループ化、**完了したセッションを表示**、および**外部で作成されたセッション**の制御機能もまとめられています。

![環境、アプリケーション、ハーネス、外部セッションのフィルターが表示された「セッションのフィルター」メニューのスクリーンショット。](/assets/updates/1_141/sessions-filter-menu.webp)

### ネストされたセッション間のアクティビティを追跡する

[ネストされたセッション](https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions#_run-multiple-chats-in-a-session) を使用すると、関連する作業を別々の会話に分割できます。「エージェント」ウィンドウでは、 各ネストされたセッションには未読ステータスと最終更新日時が表示されるため、個別に開くことなく、最近のアクティビティや対応が必要な会話を見つけることができます。

![「エージェント」ウィンドウ内のネストされたセッションツリーを示すスクリーンショット。1つのネストされたセッションがハイライト表示され、青い未読インジケーター、リポジトリ、および最終更新日時が表示されています。](/assets/updates/1_141/nested-session-details.webp)

ステータスは各会話ごとに個別に追跡されます：

-   ネストされたセッションを開くと、その会話のみが既読としてマークされます。未読のネストされたセッションがあっても、メインセッションが未読として表示されることはありません。
-   「最終更新日時」は、その会話内のアクティビティを反映しており、メインセッションや他のネストされたセッションのアクティビティは反映されません。

ウィンドウを再読み込みしたり、VS Codeを再起動したりしても、既読ステータスと最終更新日時は保持されます。

セッションツリー全体の未読状態をクリアするには、メインセッションを右クリックして **「既読にする」** を選択します。関係のないセッションには影響しません。

### 簡素化された新規セッション操作 (実験的機能)

**設定**: sessions.chat.experimental.newSessionComposerLayout VS Code で開く VS Code Insiders で開く、sessions.chat.unifiedWorkspacePicker.enabled VS Code で開く VS Code Insiders で開く (エージェントウィンドウのみ)

実験的な新規セッションコンポーザーでは、プロンプトを中央に配置したまま、セッションの選択を簡単に確認できるようになりました。ワークスペース、リポジトリ、およびハーネスのコントロールは、チャット入力欄の上にある折りたたみ可能な**セッションオプション**トレイに表示されるようになりました。

「はじめに」のヒントは、チャット入力欄の下にある角が丸い通知として表示されるようになったため、セッションコントロールとプロンプトが分離されることはなくなりました。

![新規セッションのチャット入力欄の下に「はじめに」のヒントが表示されているスクリーンショット。](/assets/updates/1_141/new-session-composer-tip-below-input.webp)

トレイを折りたたむと、選択内容を変更することなく画面の雑然さを軽減できます。コンポーザーはユーザーの選択を記憶し、ウィンドウが狭くなるとラベルを適応させ、スクリーンリーダー最適化モードが有効な場合はオプションを展開したままにします。カスタムチャット背景を使用する場合、トレイは不透明な表面になり、コントロールが読み取りやすい状態が保たれます。

### コンテキストピッカーの位置調整の改善

**「コンテキストの追加」**ピッカーは、呼び出したボタンの横に開くようになり、そのボタンを再度選択すると閉じます。これにより、エディタやエージェントウィンドウ内で、ピッカーがチャット入力欄と視覚的につながった状態が維持されます。

![チャット入力ボタンの横に固定された「コンテキストの追加」ピッカーを示すスクリーンショット。](/assets/updates/1_141/add-context-picker-anchored.webp)

### コンテキストコントロール内のエージェントピッカーの移動（実験的機能）

**設定**: sessions.chat.experimental.agentsPickerInAttachContextMenu VS Codeで開く VS Code Insidersで開く（エージェントウィンドウのみ）

コントロールの数を減らすために、**エージェント**ピッカーをチャット入力欄から初期状態で非表示にしたい場合は、 この設定を構成することで、**コンテキストの追加**メニュー内に移動させることができます。エージェントを選択すると、ピッカーはチャット入力欄に戻ります。

### 新規セッションのウェルカムメッセージのカスタマイズ (実験的機能)

**設定**: sessions.chat.experimental.welcomePhrases VS Code で開く VS Code で開く Insiders、sessions.chat.experimental.welcomeMessages VS Code で開く VS Code で開く Insiders (エージェントウィンドウのみ)

新規セッションのウェルカムメッセージは、エージェントウィンドウに個性を加えます。 今回のリリースでは、デフォルトのフレーズに独自のフレーズを追加したり、デフォルトのフレーズを置き換えたりできます。`{name}` プレースホルダーを使用すると、フレーズ内の任意の場所にウェルカムメッセージの名前を配置できます。

見出しの横にある **「ウェルカムメッセージをカスタマイズ」** を選択して、名前を変更したり、フレーズ設定を開いたりできます。また、見出しを右クリックして **「ウェルカムメッセージを非表示」** を選択すると、ウェルカムフレーズを無効にできます。

* * *

## エージェント環境

### 再読み込みせずにローカルの外部 Copilot セッションを継続

Copilot CLI や GitHub Copilot アプリからの新しい会話は、エージェントウィンドウがすでに開いている場合でも、最初のリクエストを送信するとすぐに外部セッションとして自動的に認識されるようになりました。これらの会話は、エージェントウィンドウから直接開いて継続することができます。

**Created In** および **Created Externally** フィルターを使用して、セッション一覧に表示する会話を絞り込むことができます。

### アプリ間の Codex チャットの引き継ぎ

ChatGPT アプリまたは Codex CLI で開始された Codex チャットを引き継ぎ、同じマシン上の VS Code の「エージェント」ウィンドウで、会話履歴をそのまま維持したまま継続できます。 後で ChatGPT アプリや Codex CLI に戻って、同じチャットを再開することも可能です。

VS Code で GitHub Copilot のサブスクリプションを使用するには、モデルピッカーで Copilot モデルを選択してください。たとえば、ChatGPT の利用制限に達した後も、Copilot を使い続けることができます。

[Codexを有効化](https://code.visualstudio.com/docs/agents/run/agent-harnesses#codex)し、**「外部で作成された」**セッションが表示されている状態であれば、ChatGPTやCodex CLIで作成または更新されたチャットは、VS Codeを再読み込みすることなく数秒以内に表示されます。

一度にチャットへメッセージを送信できるアプリケーションは 1 つだけです。ChatGPT または Codex CLI でそのチャットがまだ開かれている場合、VS Code に **「このチャットは別のアプリで開かれています」** というバナーが表示され、送信ができない理由が説明されます。ChatGPT を完全に終了するか、Codex CLI セッションを終了してから、**再試行**を選択してください。下書きや添付ファイルはそのまま保持され、**再試行**ではメッセージを送信せずにアクセス状況を確認します。

### エディタからリモートファイルをダウンロードする

「ファイル」パネルでファイルを探し回る必要なく、開いているリモートファイルをローカルに保存できます。「エージェント」ウィンドウで、エディタの**その他のアクション**メニューを開き、**ダウンロード...**を選択して、ファイルをローカルの保存先にダウンロードします。

### Dev Container サンプル（実験的機能）

**設定**: chat.agentHost.devContainer.samples.enabled VS Code で開く VS Code Insiders で開く （「エージェント」ウィンドウのみ）

リポジトリをクローンしたり、言語ツールをローカルにインストールしたりすることなく、すぐに使える開発環境を備えたエージェントを試すことができます。「エージェント」ウィンドウでは、Go、.NET、Node.js、PHP、Python、Rust 向けの Dev Container サンプルが利用可能になりました。

![「エージェント」ウィンドウ内の「Dev Container サンプル」サブメニューが表示されたスクリーンショット。Go、.NET、Node.js、PHP、Python、Rust のサンプルが掲載されています。](/assets/updates/1_141/dev-container-samples.webp)

[Dockerをインストールして起動](https://code.visualstudio.com/docs/devcontainers/containers#installation)した後、設定を有効にしてください。 デスクトップの「Agents」ウィンドウで新しいセッションを開き、ワークスペースピッカーから**Dev Container Sample**を選択して、プロンプトを送信します。

これには、chat.agentHost.devContainer.enabled（VS Codeで開く、Insiders版）およびchat.remoteAgentHostsEnabled（VS Codeで開く、Insiders版）が有効になっている必要があります。

* * *

## エージェントのセキュリティ

### Copilot エージェントホストでのサンドボックス化

**設定**: chat.agent.sandbox.enabled VS Code で開く VS Code Insiders

サンドボックス化により、タスクの実行中に Copilot がアクセスできる範囲をより細かく制御できます。これにより、サポートされているエージェント操作によるファイルやネットワークリソースへのアクセスが制限され、モデルの誤動作、プロンプトインジェクション、信頼できない依存関係、およびローカルで起動されたツールサーバーによる影響を軽減するのに役立ちます。

操作やプラットフォームに応じて、これらの制限はオペレーティングシステムの保護機能、またはエージェントホストプロセス内のチェック機能を利用します。 サンドボックス化は保護の層を追加しますが、エンドポイントセキュリティに取って代わるものではなく、独立したセキュリティ境界を提供するものでもありません。

サンドボックス化は **Windows、macOS、および Linux** で利用可能です。Windows では、必要なオペレーティングシステムの更新プログラムをインストールする必要があります。詳細については、[プラットフォームの対応状況の確認](https://code.visualstudio.com/docs/agents/run/agent-sandboxing#_check-platform-availability) を参照してください。

すべてのセッションでサンドボックス機能を設定するには、chat.agent.sandbox.enabled [VS Codeで開く](VS Codeで開く) [Insiders]設定を有効にしてください。また、**[権限]**メニューの**[ターミナルのサンドボックス]**トグルを使用して、セッション単位でサンドボックス機能を制御することもできます。

![[権限]メニュー内の**ターミナルのサンドボックス化**トグルを示すスクリーンショット。](/assets/updates/1_141/sandbox-toggle.webp)

さらに、VS Code の各設定を通じて、ファイルシステムの権限やネットワークアクセスをカスタマイズすることもできます。

サンドボックス機能は、ローカルセッションと接続されたリモートセッションの両方で動作します。 ローカルセッションの場合、制限はご使用のマシン上で適用されます。リモートセッションの場合、Copilot がツールやコマンドを実行するリモートホスト上で適用されます。ファイルシステムの権限は、エージェントが実行されているマシン上のパスを指します。

サンドボックス機能が有効になっている場合、ローカルで起動された MCP および言語サーバーはデフォルトでサンドボックス化されます。

* * *

## チャット体験

### チャットでの進行状況の持続表示

**設定**: chat.experimental.persistentProgress VS Code で開く VS Code で開く Insiders、chat.experimental.persistentProgressVerbosity VS Code で開く VS Code で開く Insiders

進行状況の持続表示は、すべてのユーザーに順次提供されています。 この機能により、処理中の応答が常に表示され、進行状況の詳細表示レベルを制御できるようになります。chat.experimental.persistentProgress（VS Codeで開く、Insiders向け）を使用して、モノクロアイコンやアイコンなしを含む3種類のアイコンから選択できます。

### Blobbyとの出会い

`/vscode-pet` には「Blobby」という名前がついています。エディタやエージェントウィンドウ内の任意のチャットで `/vscode-pet` と入力して、Blobby に会ってみてください。

`/blobby` と入力して Blobby をカスタマイズしましょう。チャットを探索したり、実績を解除したりするにつれて、さらに多くのカスタマイズオプションが利用可能になります。

![Insiders 版と安定版の両方の配色で眠っている VS Code Pet を示すアニメーション。](/assets/updates/1_141/sleep-wake-pr330399.png)

[Blobby とチャットペット](https://code.visualstudio.com/docs/agents/reference/chat-pet) の詳細については、こちらをご覧ください。

* * *

## MCP

### カスタマイズエディタで検出された MCP サーバーを確認する（プレビュー）

エージェントのカスタマイズエディタの **MCP サーバー** セクションでは、設定済みのサーバーに加え、プラグイン、拡張機能、および組み込みの統合機能によって提供される MCP サーバーを確認できます。 ワークスペースの `mcp.json` 以外で検出されたサーバーは UI に表示されるため、**MCP: サーバー一覧** を使用して検索する必要はありません。

コマンドパレットから **チャット: カスタマイズを開く** を実行し、**MCP サーバー** を選択して、利用可能な統合機能を確認してください。 [MCP サーバーの追加と管理](https://code.visualstudio.com/docs/agent-customization/mcp-servers) について詳しくは、こちらをご覧ください。

* * *

## エディターの操作性

### フロストガラス風のオーバーレイとメニュー

**設定**: workbench.modernUIFrostedGlass VS Codeで開く VS Code Insidersで開く , workbench.modernUIFrostedGlassOpacity VS Codeで開く VS Code Insidersで開く

デスクトップ版のエージェントウィンドウでは、メニュー、コマンドパレット、その他のポップアップに、柔らかくぼかされたフロストガラス風の背景が使用されるようになりました。また、workbench.experimental.modernUI VS Codeで開く VS Codeで開く Insiders。

workbench.modernUIFrostedGlassOpacity VS Codeで開く VS Codeで開く Insiders を使用して、ぼかされたコンテンツがどの程度透けて見えるかを制御します。値を小さくすると背景がより透明になり、大きくするとより不透明になります。

フロストガラスは、VS Code およびお使いのオペレーティングシステムで設定された透明度低減の設定を尊重し、高コントラストのテーマを使用している場合や、この効果がサポートされていない場合は、不透明な背景を使用します。表示やパフォーマンスに問題が生じた場合は、workbench.modernUIFrostedGlass を無効にしてください（VS Code で開く、Insiders で開く）。

### タブのスタイルを選択する（実験的機能）

**設定**: workbench.experimental.modernUIEditorTabStyle VS Code で開く VS Code Insiders で開く

モダン化された UI が有効になっている場合 ( workbench.experimental.modernUI VS Code で開く VS Code Insiders で開く ) の場合、2 つのタブスタイルから選択できます:

-   `connected`: アクティブなタブとそのコンテンツを視覚的に結びつけます。
-   `pill`: タブを個別の丸みを帯びたピルとして表示します。

### ブロックの分散貼り付け

**設定**: editor.multiCursorPaste VS Code で開く VS Code で開く Insiders

コピーしたブロックを単一のカーソル位置に貼り付け、その行を連続する宛先行に分散させます。 この動作は、editor.multiCursorPaste（VS Code で開く、VS Code Insiders で開く）が `spread` に設定されている場合、デフォルトで有効になります。代わりにブロック全体を貼り付けるには、`full` に設定してください。

* * *

## 認証

### 複数の GitHub Enterprise インスタンスへのサインイン

**設定**: github-enterprise.uris VS Code で開く VS Code で開く Insiders

多くの組織では、GHE.com アカウントを通じて GitHub Copilot を利用しつつ、コードは GitHub Enterprise Server (GHES) に保管しています。`github-enterprise.uri` 設定には 1 つのインスタンスしか指定できなかったため、両方に同時にサインインすることはできませんでした。例えば、 同じ VS Code ウィンドウ内で、GHE.com アカウントで Copilot を使用しながら、GHES のプルリクエストをレビューすることはできませんでした。

新しい `github-enterprise.uris` 設定（VS Code で開く、VS Code Insiders）では、GHE.com および GHES のインスタンスのリストを指定できます:

```
"github-enterprise.uris": [
  "https://octocat.ghe.com",
  "https://github.contoso.com"
]
```

GitHub Enterprise 認証プロバイダーは、リスト内のすべてのインスタンスのアカウントを保持します。 各アカウントには `monalisa - octocat.ghe.com` のようにホスト名がラベルとして付与されるため、「アカウント」メニューで区別できます。複数のインスタンスが設定されている場合、サインイン時に使用するインスタンスを尋ねられます。エントリの順序によってデフォルトのインスタンスが決定されることはありません。

拡張機能が使用するアカウントを確認または変更するには、[アカウント] メニューから **「拡張機能のアカウント設定を管理...」** を選択するか、コマンドパレットから **「アカウント: 拡張機能のアカウント設定を管理...」** を実行してください。

以下の拡張機能は複数のインスタンスに対応しています：

-   **GitHub Copilot** は GHE.com インスタンスで動作します。**GHE.com で続行** でサインインする場合、`octocat` などのインスタンス名、またはその完全な URL を入力できます。VS Code は、他のインスタンスを削除することなく、そのインスタンスを github-enterprise.uris に追加します。また、既存のエントリが有効な URL でない場合は、そのエントリを修正するよう提案します。
-   **GitHub Pull Requests** では、まだ設定されていないエンタープライズインスタンスからリポジトリを開いた際、そのホストを github-enterprise.uris に追加するよう提案します。一度に1つのGitHub Enterpriseアカウントのみを使用するため、アカウントを切り替えた後に他のインスタンス上のリポジトリを利用できるようになります。 複数のエンタープライズインスタンスを同時に使用する場合の追跡については、[microsoft/vscode-pull-request-github#9004](https://github.com/microsoft/vscode-pull-request-github/issues/9004)を参照してください。
-   **GitHub リポジトリ** では、複数の GHE.com インスタンスのリポジトリを並べて開くことができます。GHES リポジトリはサポートされていません。

すでに `github-enterprise.uri` を使用している場合は、サインイン状態が維持されます。このリリースを初めて起動すると、VS Code は保存されている認証情報を新しい設定に合わせて移行します。`github-enterprise.uri` は非推奨となりました。両方の設定が指定されている場合、github-enterprise.uri「VS Code で開く」「VS Code Insiders で開く」の設定が優先され、空のリスト（`[]`）を指定すると GitHub Enterprise のサインインが無効になります。

* * *

## エンタープライズ

### 従来の VS Code ポリシーの Agent Host 管理設定への移行

Copilot SDK を基盤とし、VS Code の Agent Host 上で実行される Copilot ハーネスは、VS Code の実験機能を有効にしているエンタープライズユーザーにとって、徐々にデフォルトとなりつつあります。この移行期間中、既存のエンタープライズ制御を維持するため、VS Code は、可能な場合、サポートされているレガシーポリシーを実行時に統一された管理設定に変換します。この変換は同じマシン上のセッションに適用され、 ポリシー設定を変更することはありません。

企業は、一貫したポリシーを維持するために、該当する場合は引き続き [統一された管理設定](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started) への移行を推奨します。これにより、VS Code、GitHub Copilot アプリ、および Copilot CLI 全体で一貫したポリシー管理が可能になります。

### 管理設定を使用してサンドボックス化を必須にする（プレビュー）

Copilot Agent Host でサンドボックス化を必須とし、バイパスを防止するには、以下の [統一管理設定](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started)を使用してください：

```
{
  "sandbox": {
    "enabled": true,
    "allowBypass": false
  }
}
```

従来の VS Code サンドボックス設定およびデバイスポリシーは非推奨となりました。`ChatAgentSandboxEnabled` は、Agent Host における必須要件ではなく、上書き可能なデフォルト値を提供するようになりました。ローカルでの動作に変更はありません。

### Agent Host セッションをユーザーおよびマシンに紐付ける

管理者は、VS CodeのAgent Hostテレメトリにオペレーティングシステムのユーザー名とホスト名を含めることで、Agent Hostセッションをユーザーやマシンに割り当てる作業をより容易に行えるようになります。この例を、既存のテレメトリエクスポーター設定とともに、[統合管理設定](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started)に、既存のテレメトリエクスポーター設定と併せてこの例をマージしてください:

```
{
  "telemetry": {
    "enabled": true,
    "capture": {
 "identity": true
    }
  }
}
```

たとえば、キャプチャされる識別属性には次のようなものがあります（例示用の値）：

```
{
  "user.name": "octokit",
  "process.user.name": "devuser",
  "host.name": "dev-workstation"
}
```

OS のユーザー名 (`process.user.name`) およびホスト名 (`host.name`) はリソース属性です。ログイン済みの GitHub ユーザー名 (`user.name`) は、バンドルされた Copilot ランタイムがサポートしている場合、ランタイムスパンに表示されます。

IDのキャプチャはデフォルトでオフになっており、管理された値が個人の設定よりも優先されます。これはコンテンツのキャプチャとは独立しています。VS Codeのホスト側制御は、ランタイムによる直接的なエクスポートには適用されません。

### ポリシーチェック時にも選択したエージェントを維持する

企業側で [`forceRemoteSettingsRefresh`](https://github.com/github/docs/blob/main/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#supported-keys)による新たなポリシーチェックを要求する場合、chatはポリシーチェック中に**Ask**や**Edit**に切り替えるのではなく、選択済みのエージェントを維持します。定期的なバックグラウンド更新でも、読み込み中は最後に承認されたポリシーが有効なまま維持されます。起動時、アカウントの変更、および更新の失敗時には、ポリシーチェックが成功するまで送信がブロックされ続けます。新たに承認された制限は引き続き適用されます。

* * *

## 拡張機能への貢献

### GitHub プルリクエスト

プルリクエストやイシューの作成、管理、作業を可能にする [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) 拡張機能において、さらなる進展がありました。新機能は以下の通りです：

-   `githubPullRequests.experimental.stacks` を `true` に設定することで、スタックされたプルリクエストの作成、表示、マージが可能になります。
-   複数の GitHub Enterprise インスタンスの設定および選択に対応しました。

この拡張機能の [0.168.0 バージョンの変更履歴](https://github.com/microsoft/vscode-pull-request-github/blob/main/CHANGELOG.md#01680) を確認して、このリリースに含まれるすべての内容についてご確認ください。

* * *

## 非推奨となった機能と設定

### GitHub Enterprise URI 設定

`github-enterprise.uri` 設定は非推奨となり、代わりに `github-enterprise.uris` が採用されました。`github-enterprise.uris` では、複数の GHE.com および GitHub Enterprise Server インスタンスを指定できます。 `github-enterprise.uris`（VS Code で開く VS Code Insiders）が設定されていない場合、VS Code は引き続き `github-enterprise.uri` を読み取ります。

### レガシーな VS Code サンドボックス設定およびデバイスポリシー

レガシーな VS Code サンドボックス設定およびデバイスポリシーは非推奨となりました。`ChatAgentSandboxEnabled` は、Agent Host における必須要件ではなく、上書き可能なデフォルト値を提供するようになりました。ローカルでの動作に変更はありません。

* * *

## 謝辞

`vscode` への貢献：

-   [@dzamoshchin (Daniel Zamoshchin)](https://github.com/dzamoshchin): 仮想ツールグループが有効化された際に「使用中」としてマークする [PR #338812](https://github.com/microsoft/vscode/pull/338812)
-   [@jimmylewis (Jimmy Lewis)](https://github.com/jimmylewis): extensions: 更新チェックをポーリング間隔で維持 [PR #339365](https://github.com/microsoft/vscode/pull/339365)
-   [@na2co3-ftw (na2co3)](https://github.com/na2co3-ftw): Modern UI: 接続されたエディタータブでの冗長なタブアクションのフェードインを修正 [PR #336871](https://github.com/microsoft/vscode/pull/336871)
-   [@rohit489 (Rohit Agrawal - MSFT)](https://github.com/rohit489): CAPI X-GitHub-Copilot-Requestの記録-Te を記録 [PR #339087](https://github.com/microsoft/vscode/pull/339087)
-   [@shoemoney (Jeremy Schoemaker)](https://github.com/shoemoney): 修正(markdown): プレビューリンク内の行単位でない断片を保持 [PR #332661](https://github.com/microsoft/vscode/pull/332661)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   修正：ターミナル再生時のメモリリーク [PR #338252](https://github.com/microsoft/vscode/pull/338252)
    -   修正：セマンティックトークンにおけるメモリリーク [PR #336024](https://github.com/microsoft/vscode/pull/336024)
    -   修正：検索エディタにおけるメモリリーク [PR #331014](https://github.com/microsoft/vscode/pull/331014)
    -   ターミナル：破棄時の不要なテレメトリのタイムアウトを解除 [PR #333963](https://github.com/microsoft/vscode/pull/333963)
    -   修正： アニメーションフレームウィンドウの破棄時のメモリリーク [PR #338263](https://github.com/microsoft/vscode/pull/338263)
    -   修正: チャット参加者の破棄時のメモリリーク [PR #338230](https://github.com/microsoft/vscode/pull/338230)
    -   修正：カスタムドキュメントの破棄時のメモリリーク [PR #338250](https://github.com/microsoft/vscode/pull/338250)
    -   修正： マッピングされた編集プロバイダーの破棄時のメモリリーク [PR #338245](https://github.com/microsoft/vscode/pull/338245)
    -   修正: 拡張機能ホストのテレメトリにおけるメモリリーク [PR #334096](https://github.com/microsoft/vscode/pull/334096)
    -   修正：補助ウィンドウのフォント測定におけるメモリリーク [PR #338255](https://github.com/microsoft/vscode/pull/338255)
    -   修正：SCMアーティファクトコマンドにおけるメモリリーク [PR #338251](https://github.com/microsoft/vscode/pull/338251)
    -   修正: ピクセル比ウィンドウの破棄時のメモリリーク [PR #338257](https://github.com/microsoft/vscode/pull/338257)
    -   修正: 統合ブラウザの要素ハンドルにおけるメモリリーク [PR #338247](https://github.com/microsoft/vscode/pull/338247)
    -   修正: ターミナルの水平スクロールバーにおけるメモリリーク [PR #338241](https://github.com/microsoft/vscode/pull/338241)
    -   修正: 拡張機能ホストのツリービューの破棄におけるメモリリーク [PR #338235](https://github.com/microsoft/vscode/pull/338235)
    -   修正: 複合ドラッグ＆ドロップの登録におけるメモリリーク [PR #338215](https://github.com/microsoft/vscode/pull/338215)
    -   修正: 統合ブラウザインスペクタのセッションにおけるメモリリーク [PR #338228](https://github.com/microsoft/vscode/pull/338228)
    -   修正: chatInputPart におけるメモリリーク [PR #327157](https://github.com/microsoft/vscode/pull/327157)
    -   修正: ターミナルシェル実行ストリームにおけるメモリリーク [PR #338243](https://github.com/microsoft/vscode/pull/338243)
    -   修正: ノートブックのセルステータスバーコマンドにおけるメモリリーク [PR #336028](https://github.com/microsoft/vscode/pull/336028)
    -   修正：issueReporterModel におけるメモリリーク [PR #335098](https://github.com/microsoft/vscode/pull/335098)
    -   修正: 画像カルーセルエディタのメモリリーク [PR #333981](https://github.com/microsoft/vscode/pull/333981)
    -   修正: ノートブックのシリアライザの破棄処理におけるメモリリーク [PR #338212](https://github.com/microsoft/vscode/pull/338212)
    -   修正：MainThreadShare におけるメモリリーク [PR #334110](https://github.com/microsoft/vscode/pull/334110)
    -   修正: マルチディフエディタのタブにおけるメモリリーク [PR #333186](https://github.com/microsoft/vscode/pull/333186)
    -   修正: テストオブザーバーの破棄時のメモリリーク [PR #338213](https://github.com/microsoft/vscode/pull/338213)
    -   修正: modalEditorPart におけるメモリリーク [PR #326885](https://github.com/microsoft/vscode/pull/326885)
    -   修正: コメントスレッドの破棄処理におけるメモリリーク [PR #338216](https://github.com/microsoft/vscode/pull/338216)
    -   修正: ラインデータイベントアドオンにおけるメモリリーク [PR #332139](https://github.com/microsoft/vscode/pull/332139)
    -   修正: ノートブックカーネルソースメニューにおけるメモリリーク [PR #338218](https://github.com/microsoft/vscode/pull/338218)
-   [@soreavis](https://github.com/soreavis): JSON - json.schemas ファイルのファイルマッチパターンで ${workspaceFolder} のサポート [PR #326706](https://github.com/microsoft/vscode/pull/326706)
-   [@yuezhang030](https://github.com/yuezhang030): vscModelF プロンプトの追加 [PR #338809](https://github.com/microsoft/vscode/pull/338809)

### 課題管理

課題管理への貢献：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

* * *

新機能がリリースされ次第、すぐに試してくださる皆様に心より感謝しております。ぜひ定期的にこのページをチェックして、新機能についてご確認ください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [更新情報](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
