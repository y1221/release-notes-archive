---
product: VSCode
version: 1.138.0
release_title: Visual Studio Code 1.138
release_date: 2026-09-16
source_url: "https://code.visualstudio.com/updates/v1_138"
archived_at: 2026-09-17
---

# Visual Studio Code 1.138

# Visual Studio Code 1.138

[LinkedIn](https://www.linkedin.com/showcase/vs-code)、[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)、[Instagram](https://www.instagram.com/vscode.ig)

* * *

_リリース日：2026年9月16日_

ダウンロード：Windows：[x64](https://update.code.visualstudio.com/1.138.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.138.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.138.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.138.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.138.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.138.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.138.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.138.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.138.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.138 のリリースへようこそ。 このリリースでは、プロジェクトの開発環境でのエージェントの実行が容易になり、Codex セッションの柔軟性が向上し、完了したセッションを整理しやすくなりました。

-   [Dev Containers でのエージェント セッション](#_run-agent-sessions-in-local-dev-containers): ローカルの Dev Container 内で、プロジェクトのツールや依存関係を利用してエージェントを実行できます。
    
-   [拡張された Codex ハネス](#_expanded-codex-support-in-the-agent-host): アプリをまたいで Codex セッションを継続したり、Copilot と ChatGPT のサブスクリプションを切り替えたり、VS Code のツールを利用したりできます。
    
-   [セッションのクリーンアップ (プレビュー)](#_keep-completed-sessions-organized-preview): マージされたセッションを自動的に「完了」としてマークし、必要に応じて猶予期間後に削除できます。
 

_このリリースノートは GitHub Copilot を使用して生成されたものであり、不正確な情報が含まれている可能性があります。_

プログラミングをお楽しみください！

* * *

VS Code は全ユーザー向けに段階的に展開されています。VS Code の **更新の確認** を使用して、すぐに最新バージョンを入手してください。

新機能をいち早く試すには、[**ナイトリー版 Insiders ビルドをダウンロード**](https://code.visualstudio.com/insiders) してください。このビルドには、最新アップデートが利用可能になり次第、すぐに反映されます。

* * *

## エージェント

[エージェントホスト](https://code.visualstudio.com/docs/agents/concepts/agent-host) は、[エージェントホストプロトコル](https://microsoft.github.io/agent-host-protocol/) （AHP）に基づいて専用プロセスでエージェントハーネスを実行するため、複数の VS Code ウィンドウから同じセッションに接続できます。そのアーキテクチャとワークフローの詳細については、[エージェントホストのブログ記事](https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture)をご覧ください。

### オートメーションがデフォルトで有効になり、共有も可能になりました

**設定**: chat.automations.enabled VS Codeで開く VS Code Insidersで開く (エージェントウィンドウのみ)

オートメーションがデフォルトで有効になり、反復的なタスクの効率化がさらに容易になりました。また、オートメーションをエクスポートおよびインポートして、異なる環境間やチーム内で共有することも可能です。VS Code ドキュメントの [オートメーション](https://code.visualstudio.com/docs/agents/run/automations) について詳しくご覧ください。

### ローカルの Dev Containers でエージェントセッションを実行する

**設定**: chat.agentHost.devContainer.enabled VS Code で開く VS Code で開く Insiders（エージェントウィンドウのみ）

ローカルフォルダの Dev Container 内でセッションを実行することで、エージェントの作業をプロジェクトのツールチェーンと整合させることができます。エージェントは、ローカルマシン上の環境や依存関係ではなく、プロジェクト用に構成された環境と依存関係を使用します。

この設定を有効にすると、サポートされている Dev Container 構成を持つローカルフォルダには、**「Dev Container を使用」**アクションを含むフォルダメニューが自動的に表示されます。このアクションを選択すると、そのフォルダの Dev Container 内でエージェントセッションが実行されます。なお、お使いのマシンには Docker がインストールされている必要があります。

![ワークスペースピッカー内のフォルダに表示される「Dev Containerを使用」アクションを示すスクリーンショット。](/assets/updates/1_138/dev-container-workspace-picker.webp)

> **注**: ローカル Dev Container セッションは段階的に展開されているため、お使いの環境ではまだこの設定がデフォルトで有効になっていない可能性があります。今すぐこの機能を試すには、手動で設定を有効にしてください。

### エージェントホストにおける Codex サポートの拡張

**設定**: chat.agentHost.codexAgent.enabled VS Code で開く VS Code で開く Insiders 、 chat.editor.codex.preferAgentHost VS Code で開く VS Code で開く Insiders

今回のリリースでは、エージェントホストにおける Codex のサポートが拡張されました。これにより、作業場所や方法を変更しても、同じコーディングセッションを維持できるようになります。

-   **サブスクリプションの選択**: GitHub Copilot サブスクリプションまたは ChatGPT サブスクリプションで Codex をご利用いただけます。両方にサインインしている場合は、現在の会話を失うことなく、モデルピッカーから Copilot ベースのモデルと ChatGPT ベースのモデルを切り替えることができます。
    -   GitHub Copilot にサインインしておらず、ChatGPT サブスクリプションのみで Codex 機能を利用したい場合は、chat.agentHost.allowSignedOutWhenUsable を有効にする必要があります。VS Code で開く VS Code で開く Insiders 。
-   **アプリ間で継続**：新しい会話を開始する代わりに、同じ Codex セッションを ChatGPT アプリと VS Code の間で移動できます。
-   **VS Code からデスクトップアプリと連携**: ChatGPT アプリがインストールされ、コンピュータでの使用が設定されている場合、VS Code の Codex ハーネスはその設定を再利用して、コンピュータ上のアプリと連携できます。これは、Copilot サブスクリプションまたは ChatGPT サブスクリプションのいずれのモデルでも機能します。
-   **VS Codeのツールを使用**：Codexは、組み込みツール、拡張機能、MCPツールを含む、[VS Codeが提供するすべてのツール](https://code.visualstudio.com/docs/agents/concepts/tools)を利用できます。ChatGPTベースのモデルを使用する場合、 Codexはセッション内で画像生成ツールを直接使用することも可能です。

![ChatGPT アプリから VS Code に引き継がれた Codex セッションで、画像が生成されている様子を示すスクリーンショット。](/assets/updates/1_138/codex-session-handoff-and-image-generation.webp)

### ワークスペースでの Codex クイックチャットの継続

前回のリリースでは、Copilot セッション向けに [ワークスペースでのクイックチャットの継続](https://code.visualstudio.com/updates/v1_137#_continue-quick-chats-in-a-workspace)を導入しました。今回のリリースでは、このフローをCodexにも拡張したため、プロジェクト固有の作業を開始しても、ワークスペースのないCodexクイックチャットを中断する必要がなくなりました。 Codexにローカルフォルダーの追加を依頼し、そのフォルダーを直接使用するかどうか、あるいは隔離されたワークツリーを作成するかどうかを選択します。

変更を確認すると、そのチャットとネイティブのCodexスレッドがワークスペースセッションになります。 セッションのタイトル、会話履歴、現在のリクエスト、選択されたモデル、および権限モードは保持されます。その後、Codexはプロジェクトファイルへのアクセス権限を持ってリクエストを継続します。

ワークスペースへの変換は、インタラクティブモードの非アクティブな Codex クイックチャットで利用可能で、シングルルートワークスペースのターゲットをサポートしています。変更がキャンセルされた場合や適用できない場合でも、元のワークスペースなしのチャットは引き続き利用可能です。

### オンデマンドのエージェント SDK ダウンロード

[Agents] ウィンドウ内の Claude および Codex エージェントは、VS Code に同梱されていない SDK に依存しており、初めて必要になった際にダウンロードされます。以前は、ダウンロードの案内はサインアウト状態のアカウント設定時のみ表示されていたため、サインインしている場合は最初のメッセージでダウンロードが行われていました。

現在では、続行するためにダウンロードが必要であることを明確にするため、SDK が存在しない場合はいつでもダウンロードの案内が表示されます。

![「エージェント」ウィンドウのチャット入力欄上部に表示される「Claudeエージェントをダウンロード」という通知を示すスクリーンショット。ダウンロードアクションと、ハルネスピッカーで選択されたClaudeエージェントが表示されています。](/assets/updates/1_138/agent-sdk-download-offer.jpg)

そのエージェント用のモデルがすでに利用可能な場合、通知には 2 つのオプションが表示されます。**「ダウンロード」** を選択するか、ターンの一部としてメッセージを送信して SDK をダウンロードするかです。通知が表示されている間にモデルが利用可能になった場合、表示文言はその場で更新されます。

### エージェントセッションからプルリクエストを作成する

**設定**: chat.agentMerge.enabled VS Codeで開く VS Code Insidersで開く（オプション、Agent Merge専用）

「エージェント」ウィンドウ内の [エージェントホストセッション](https://code.visualstudio.com/docs/agents/concepts/agent-host) からプルリクエストを作成します。1つのフォームを使用して、生成されたタイトルや説明の確認・編集、下書きステータスの選択、利用可能なマージオプションの設定を行うことができます。 プルリクエストを直接作成するか、エージェントにリクエストを送信できます。選択したオプションは次回のために記憶されます。

> **注**: **Agent Merge** オプションは実験的な機能であり、上記の設定が有効になっている場合にのみ利用可能です。

![編集可能なタイトルと説明、下書きおよびマージオプション、プルリクエストを作成するための「分割」ボタンが表示された「PR 作成」フォームのスクリーンショット。](/assets/updates/1_138/create-pull-request-form.webp)

### 完了したセッションを整理する (プレビュー)

**設定**: chat.agentSessions.archiveNudge.enabled VS Code で開く VS Code で開く Insiders , chat.agentSessions.autoMarkAsDoneMergedSessionsAfterDays VS Code で開く VS Code で開く Insiders , chat.agentSessions.autoDeleteArchivedMergedSessionsAfterDays VS Codeで開く VS Codeで開く（Insiders）、sessions.markAsDoneConfetti VS Codeで開く VS Codeで開く（Insiders）（「エージェント」ウィンドウのみ）

完了した作業は邪魔にならないようにしつつ、後で参照できるよう会話を保存しておきましょう。非アクティブなセッションのプルリクエストがすべてマージされると、「エージェント」ウィンドウで、そのセッションを「完了」としてマークすることを提案する場合があります。初回利用ガイドでは、セッション一覧で**「完了としてマーク」**がどこにあるかを確認できます。

これらの提案を表示するには、chat.agentSessions.archiveNudge.enabled を有効にしてください。VS Code で開く VS Code Insiders で開く

![プルリクエストがマージされた後にセッションを完了としてマークするよう提案するスクリーンショット。](/assets/updates/1_138/mark-session-as-done.webp)

クリーンアップを自動化するには、プルリクエストがマージされた後に非アクティブなセッションを完了としてマークし、必要に応じて別の猶予期間を経た後にそれらを削除します。これらの自動クリーンアップ設定は、デフォルトでは無効になっています。

セッションのすべてのプルリクエストがマージされたら、**完了としてマーク**の提案から **自動クリーンアップの設定** を選択すると、設定を有効にすることなく両方の設定画面を開くことができます。

sessions.markAsDoneConfetti を有効にすると、セッションを完了としてマークした際にコンフェッティのアニメーションが表示されます。このアニメーションは、モーションの軽減設定に従って表示されます。

### 対応が必要なセッションを確認する（プレビュー）

**設定**: sessions.showApplicationBadge VS Code で開く VS Code Insiders で開く（エージェント ウィンドウのみ）

VS Code に戻ることなく、macOS ドック、Linux ランチャー、または Windows タスクバー上のバッジで、エージェント セッションに注意が必要なタイミングを確認できます。このバッジは、新しい結果があるセッション、入力が必要なセッション、または確認が必要なプルリクエストがあるセッションを強調表示します。

バッジを表示するには、上記のプレビュー設定を有効にしてください。

![Windows タスクバー上のアプリケーションアイコンに、対応が必要なセッションが 1 つあることを示すバッジが表示されているスクリーンショット。](/assets/updates/1_138/sessions-application-badge.webp)

### 統合ワークスペースおよびリポジトリピッカー (実験的機能)

**設定**: sessions.chat.unifiedWorkspacePicker.enabled VS Codeで開く VS Code Insidersで開く (「エージェント」ウィンドウのみ)

ローカルフォルダ、GitHubリポジトリ、クラウドリポジトリ、およびリモートターゲットを検索可能な1つのリストから、エージェント作業を開始できます。リモート接続操作は、**「リモート」**エントリから引き続き利用可能です。

![ローカルフォルダ、リポジトリ、リモートオプションを含む統合ワークスペースピッカーを示すスクリーンショット。](/assets/updates/1_138/unified-workspace-picker.webp)

**「リポジトリで作業」**を選択すると、クラウド優先のワークフローが使用されます。 まだローカルに存在しない GitHub リポジトリは、クローン作成の確認メッセージが表示されることなく、Cloud ハネスによって即座に選択されます。後でローカル ハネスを選択した場合、VS Code はリポジトリのクローン作成を促しますが、キャンセルしてもクラウドの選択設定は保持されます。

### カラーテーマによるチャット背景のカスタマイズ (実験的機能)

**設定**: chat.agentSessions.preferredDarkBackgroundImageLayout VS Code で開く VS Code Insiders で開く、chat.agentSessions.preferredLightBackgroundImageLayout VS Code で開く VS Code Insiders で開く（「エージェント」ウィンドウのみ）

「エージェント」ウィンドウでは、セッションの背後に装飾用のチャット背景を表示できます。これは、VS Code に組み込まれたアイコンのパターン、または独自の画像のいずれかを選択でき、ダークテーマとライトテーマで個別に設定可能です。

![「エージェント」ウィンドウでチャット背景として Codicons パターンが使用されているスクリーンショット。その上に表示されるエージェントの応答も読みやすい状態を維持しています。](/assets/updates/1_138/agents-chat-background-codicons.webp)

以前は、画像はテーマの種類ごとに設定されていましたが、レイアウトはテーマごとに固定されていませんでした。そのため、ダークテーマの背景を右揃えにし、ライトテーマの背景を左揃えにすると、どちらも左揃えになってしまっていました。現在では、レイアウトも画像と同様にテーマの種類ごとに保存されるようになり、ダークテーマとライトテーマを切り替えると、そのテーマに応じた配置が復元されます。 これら2つの新しい設定は、`chat.agentSessions.backgroundImageLayout`に代わるものです。

背景のクリア機能も移動しました。**チャット：背景の設定...** の先頭に **背景なし** が追加され、これをクリックすると現在使用中のカラーテーマの背景がクリアされ、もう一方のテーマの背景は変更されません。

応答とリクエストの領域は不透明になっているため、コントラストの高い背景を使用しても、エージェントの応答の可読性が低下することはありません。

![「エージェント」ウィンドウでチャットの背景としてカスタム写真が使用されているスクリーンショット。その上に不透明なバブルとして表示されたエージェントの応答が、はっきりと読み取れる状態を示しています。](/assets/updates/1_138/agents-chat-background-image.jpg)

## チャット

### ボイスモードのセッション認識機能の改善（実験的機能）

ボイスモードを離れることなく、並行して進行中のエージェント作業をナビゲートおよび監視できます。ボイスモードでは、最近のエージェントセッションを検索し、ラベルごとに切り替え、各セッションのステータスを報告することができます。

## 非推奨の機能と設定

### 今回のリリースで新たに非推奨となった項目

-   `chat.agentSessions.backgroundImageLayout` は、Insiders 向けの `chat.agentSessions.preferredDarkBackgroundImageLayout`（VS Code で開く VS Code で開く）および `chat.agentSessions.preferredLightBackgroundImageLayout VS Codeで開く VS Codeで開く Insiders に変更され、エージェントウィンドウのチャット背景レイアウトを、ダークテーマとライトテーマで個別に設定できるようになりました。
-   **チャット：背景をクリア** が削除されました。**チャット：背景の設定...** で **背景なし** を選択して を選択して、現在のカラーテーマの背景をクリアしてください。

## 謝辞

`vscode` への貢献：

-   [@denizguney (Deniz Güney Yıldırım)](https://github.com/denizguney): files.exclude 設定の補完テストを更新 [PR #332809](https://github.com/microsoft/vscode/pull/332809)
-   [@DhineshPonnarasan (Dhinesh Ponnarasan)](https://github.com/DhineshPonnarasan): 完了した進捗通知の非表示処理を修正 [PR #315184](https://github.com/microsoft/vscode/pull/315184)
-   [@jacobjove (Jacob T. Jove)](https://github.com/jacobjove): 未処理のバッファされた pty ホストサービスイベントによるメインプロセスの OOM を修正 [PR #323980](https://github.com/microsoft/vscode/pull/323980)
-   [@RyanEwen (Ryan Ewen)](https://github.com/RyanEwen): Codex MCP ツールの進行状況をツール結果から除外 [PR #334053](https://github.com/microsoft/vscode/pull/334053)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke): 修正：マーカーテーブルのメモリリーク [PR #333241](https://github.com/microsoft/vscode/pull/333241)
-   [@vladstudio (Vlad Gerasimov)](https://github.com/vladstudio): 修正：分離されたインスタンスでターミナルエディタのShiftキーを押しながらドラッグ＆ドロップがトリガーされる問題 [PR #318756](https://github.com/microsoft/vscode/pull/318756)
-   [@vscodebot-pr (VS Code PR Bot)](https://github.com/vscodebot-pr): 修正: ネイティブポリシー・スモークフィクスチャにおける win32 product.json のパスを解決 (vscode-engineering#3813 に対するビルド修正) [PR #335152](https://github.com/microsoft/vscode/pull/335152)
-   [@yutotnh (yutotnh)](https://github.com/yutotnh): コミットメッセージの出力を UTF-8 に強制 [PR #331087](https://github.com/microsoft/vscode/pull/331087)
-   [@zhichli (Zhichao Li)](https://github.com/zhichli): ドキュメント：OTelのガイダンスをAgent Hostアーキテクチャに合わせて調整 [PR #335175](https://github.com/microsoft/vscode/pull/335175)

`vscode-chat-customizations-evaluation` への貢献:

-   [@JakLuminth (Jacob Searcy)](https://github.com/JakLuminth): ログ出力チャネルを用いた言語クライアントの起動修正 [PR #286](https://github.com/microsoft/vscode-chat-customizations-evaluation/pull/286)

### 課題追跡

課題追跡への貢献:

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

* * *

新機能が公開され次第、すぐに試してくださる皆様に心より感謝いたします。ぜひ定期的にこのページをチェックして、新機能についてご確認ください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[Updates](https://code) をご覧ください。visualstudio.com/updates) on [code.visualstudio.com](https://code.visualstudio.com)。

[](# "トップへスクロール")
