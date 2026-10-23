---
product: VSCode
version: 1.143.0
release_title: Visual Studio Code 1.143
release_date: 2026-10-22
source_url: "https://code.visualstudio.com/updates/v1_143"
archived_at: 2026-10-23
---

# Visual Studio Code 1.143

# Visual Studio Code 1.143

[LinkedIn](https://www.linkedin.com/showcase/vs-code)、[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)、[Instagram](https://www.instagram.com/vscode.ig)

* * *

Visual Studio Code バージョン 1.143 のリリースへようこそ。

## 1.143.1 のダウンロード

Windows

[x64](https://update.code.visualstudio.com/1.143.1/win32-x64-user/stable)[Arm64](https://update.code.visualstudio.com/1.143.1/win32-arm64-user/stable)

macOS

[ユニバーサル](https://update.code.visualstudio.com/1.143.1/darwin-universal-dmg/stable)[Intel](https://update.code.visualstudio.com/1.143.1/darwin-x64-dmg/stable)[Apple silicon](https://update.code.visualstudio.com/1.143.1/darwin-arm64-dmg/stable)

Linux

[.deb](https://update.code.visualstudio.com/1.143.1/linux-deb-x64/stable)[.rpm](https://update.code.visualstudio.com/1.143.1/linux-rpm-x64/stable)[.tar.gz](https://update.code.visualstudio.com/1.143.1/linux-x64/stable)[Arm版](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions)[Snap](https://update.code.visualstudio.com/1.143.1/linux-snap-x64/stable)

すでにインストール済みですか？ VS Codeの**「更新を確認」**をご利用ください。今後の機能については、[Insidersビルド](https://code.visualstudio.com/insiders)をご利用ください。

**アップデート 1.143.1**: このアップデートでは、以下の[問題](https://github.com/microsoft/vscode/pulls?q=is%3Apr+milestone%3A1.143.1+is%3Aclosed+label%3Acandidate)が修正されています。

## リリースのハイライト

このリリースでは、新しいセッションのデフォルトとして Copilot ハーネスが採用され、モデルの比較、ストレージの解放、モデルのローカル実行、ファイルの変更の確認を行うためのツールが追加されました。

-   [デフォルトでの Copilot ハーネス](#_copilot-harness-as-the-default): Copilot SDK を基盤とする新しいセッションのデフォルト設定により、エディタと「エージェント」ウィンドウを切り替えることができます。
    
-   [モデルの比較（プレビュー）](#_compare-model-results-preview): 「エージェント」ウィンドウで複数のモデルを使用して同じタスクを実行し、それぞれの解決策を比較・統合できます。
    
-   [ワークツリーのストレージ解放（実験的機能）](#_reclaim-storage-from-inactive-worktrees-experimental): 非アクティブなエージェント セッションのワークツリーを確認・削除することで、ディスク容量を解放できます。
    
-   [デバイス上でのモデル実行（実験的機能）](#_run-copilot-models-on-your-device-experimental): エージェントタスク用に、MAI Code 1.1 Flashをデバイス上でローカルに実行します。
    
-   [複数ファイルの差分リスト（実験的）](#_multi-file-diff-editor-file-list-experimental): 複数ファイルの差分エディタで、変更されたファイルの概要を把握し、ファイル間を移動できます。
 

* * *

## エージェント

### Copilot ハーネスをデフォルトに設定

**VS Code の新規セッションでは、Copilot ハーネスがデフォルトになりました。** これは、Copilot SDK を基盤として構築された最新のハーネスであり、Copilot 製品全体での動作、機能、改善を統一するための共通基盤となっています。

新しいセッションを開始すると、 ハネスピッカーに表示される **Copilot** は、そのセッションが Copilot ハネスを使用していることを示しています：

![ハネスピッカーで Copilot が選択されているスクリーンショット。ホバー時に Copilot SDK および Agent Host との統合に関する説明が表示されます。](/assets/updates/1_143/harness-copilot-description.webp)

VS Code では、Copilot ハネス セッションをバックグラウンドで実行し続け、VS Code のエディタ ウィンドウと「エージェント」ウィンドウの両方からアクセスできます。これらのセッションは [Agent Host](https://code.visualstudio.com/docs/agents/concepts/agent-host)を通じて実行されます。

貴重なフィードバックを共有してくださった皆様に心より感謝申し上げます。今回のリリースには、皆様からのフィードバックを直接反映したさらなる改善が含まれています。

皆様から寄せられた使用シナリオや環境設定に基づき、パフォーマンスの向上と遅延の低減に引き続き取り組んでいます。例えば、[チャット応答までの待ち時間が長いという報告](https://github.com/microsoft/vscode/issues/341543#issuecomment-6202370962) のおかげで、ツールの読み込みが完了していない MCP サーバーに起因する遅延を軽減することができました。

また、皆様から寄せられたフィードバックや質問をもとに、ドキュメントの分かりやすさを向上させる取り組みも続けています。 [Copilotハーネスの使い方](https://code.visualstudio.com/docs/agents/run/agent-harnesses) をご覧ください。また、[エージェントホストに関するブログ記事](https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture)をご覧ください。

Copilot ハーネスの動作状況について、引き続き [イシューの報告](https://github.com/microsoft/vscode/issues) を通じてお知らせください。皆様からのフィードバックは大変参考になり、ハーネスの体験を直接形作る重要な要素となります。

#### ファイルレベルのワーキングセットの初期サポート（実験的機能）

**設定:** chat.editor.workingSet.enabled VS Code で開く VS Code Insiders で開く

Copilot ハーネスを使用する際、エディタ内でエージェントによる編集を承認または却下するのが困難であるというフィードバックをいただきました。今回のリリースでは、変更の管理とレビューをより効果的に行えるよう、_初期段階の_ファイル単位のワーキングセットのサポートを導入しました。

エディタウィンドウ内の Copilot ハーネス セッションでは、チャット入力欄の上にある実験的なワーキングセットで、ファイル単位の **Keep** がサポートされるようになりました。chat.editor.workingSet.enabled を有効にして、VS Code で開く VS Code で開く Insiders で試してみてください。

ファイル上の **Keep** を選択すると、変更がレビュー済みとしてマークされ、ワーキングセットから削除されます。編集内容はディスク上に残され、エージェントが再度変更を加えた場合はファイルがワーキングセットに戻ります。

**今後の予定：** ワーキングセットに対してファイル単位の **元に戻す**機能を追加し、個々の変更に対して **Keep** および **Undo** をエディタに再び導入する予定です。これらは今後のリリースで実装される予定で、まず [Insiders](https://code.visualstudio.com/insiders/) に導入され、その後 Stable 版に反映されます。

### 「エージェント」ウィンドウで、より多くのチェンジセットの変更を破棄する

「エージェント」ウィンドウの**「変更」**ビューでは、エージェントによって行われたすべての変更を確認できます。これまで、保留中の変更を破棄できるのは**「未コミットの変更」**チェンジセットのみでした。

![「未コミットの変更」チェンジセット内の「変更を破棄」オプションを示すスクリーンショット。](/assets/updates/1_143/discard-branch-changes.webp)

今回のリリースでは、**「ブランチの変更」**、 **セッションの変更**、および **前回のターンでの変更** チェンジセットでも、変更を破棄できるようになりました。**変更** ビューまたはマルチファイル差分エディタで、ファイルに対して **変更を破棄** を選択してください。VS Code が破棄する内容は、チェンジセットによって異なります：

-   ****ブランチの変更**：ファイルを、そのブランチがベースブランチから分岐した時点のバージョンに復元し、そのブランチで追加されたファイルを削除します。
-   ****セッションの変更**：セッション内のファイルへの編集を元に戻し、自身の編集など、セッション外で行われた変更は保持します。
-   ****前回のターンでの変更**：ファイルに対する直近のターンの編集のみを元に戻し、それ以外の変更はすべて保持します。

### モデルの結果を比較（プレビュー）

**設定**: sessions.chat.compareAgents.enabled VS Codeで開く VS Codeで開く Insiders（「エージェント」ウィンドウのみ）

異なるモデルやハーネスが、同じコーディングタスクにどのように取り組むかを比較します。試行を並行して実行し、結果を確認して、アイデアを1つの解決策に統合します。

開始するには、エージェントウィンドウで sessions.chat.compareAgents.enabled を有効にし、モデルピッカーから **モデルの比較** を選択してください。

-   **比較するアプローチの選択：** タスクを個別に実行するモデルを2つ以上選択します。 Copilot、Claude、Codexの各ハーネスを組み合わせて使用したり、異なる推論レベルを設定したりできます。
 
 ![エージェント・ベイクオフ用に、異なる推論レベルを持つ4つのモデルが選択されているスクリーンショット。](/assets/updates/1_143/bake-off-picker.webp)
    
-   **試行を実行する：** 1つのプロンプトを入力し、選択したすべての試行を同時に開始します。
 
 ![4つのエージェント・ベイクオフ試行で実行準備が整ったプロンプトを示すスクリーンショット。](/assets/updates/1_143/bake-off-multiple-attempts.webp)
 
-   **進行状況を並べて確認：** 各試行は個別のセッションで実行されるため、そのアプローチを比較したり、いつでもワークツリーや変更内容を開いたりできます。
    
    ![4つのエージェント・ベイクオフ試行がグリッド形式で並列に実行されているスクリーンショット。](/assets/updates/1_143/bake-off-grid.webp)
    
-   **結果を評価して統合する：** 必要に応じて、Judgeモデルを選択して試行を評価し、解決策を推奨させることができます。そのスコアカードには、所要時間とトークン使用量が表示され、展開可能な根拠、検証の証拠、 各試行へのリンクが含まれています。その後、**「統合（Synthesize）」**を選択して、推奨された試行を基に他の試行からのアイデアを取り入れて構築することができます。統合は、ユーザーがリクエストしたときにのみ開始されます。
    
    ![推奨される試行、スコアカード、および「統合」アクションが表示されたエージェント・ベイクオフの結果を示すスクリーンショット。](/assets/updates/1_143/bake-off-results.webp)
 

### 空のサイドペインでのタブのショートカット

[エージェントウィンドウ](https://code.visualstudio.com/docs/agents/run/agents-window)のサイドペインにあるすべてのタブを閉じると、エディタ領域が空白になり、**[タブを追加] (+)** メニューを探して、セッションの変更内容やファイルに戻る必要がありました。

現在、空のエディタ領域には、**変更**、**ファイル**、**ブラウザ**、**検索**など、追加可能なタブがアイコンとキーボードショートカットとともに一覧表示されるようになりました。項目を選択すると、そのタブが開きます。Canvas 拡張機能がインストールされている場合は、**Canvas** 項目に利用可能なキャンバスが一覧表示されます。 エディタ領域が空のセッションに切り替えた場合、VS Code は **変更** や **ファイル** タブを自動的に再表示する代わりに、このリストを表示します。

### セッションアクティビティバー (実験的機能)

**セッション**: sessions.showSessionActivityBar VS Code で開く VS Code Insiders で開く、sessions.sessionActivityBar.showLayoutActions VS Code で開く VS Code Insiders で開く

セッションアクティビティバーは、セッションの **Changes**、**Files**、**Browser**、および利用可能なキャンバスをサイドペインの横に表示し、これらのエディタやアーティファクトを開いた場所と視覚的に結びつけます。セッション上部のピルからセッションのアーティファクトを開くことも引き続き可能です。

セッションアクティビティバーは、アクティブなチャットの右端にある細長い縦長のアイコンストリップです。アイコンを選択すると、サイドペインでそのタブが開きます。サイドペインが閉じられている場合は、そのタブがアクティブな状態で開きます。タブがすでに開いている場合は、VS Code は別のタブを開くのではなく、そのタブにフォーカスを移します。キャンバス拡張機能がインストールされている場合、**Canvas** エントリを選択すると、利用可能なキャンバスのサブメニューが開きます。

セッションアクティビティバーのグリップをドラッグして上下に移動させ、邪魔にならない場所に配置できます。また、グリップをダブルクリックすると、位置がリセットされます。チャット領域を分割した場合、フォーカスされているグループのみにアクティビティバーが表示されます。

セッション関連のレイアウト操作をまとめて管理するには、アクティビティバーを右クリックして **レイアウト操作を表示** を選択します。これにより、**サイドパネルの切り替え** および **パネルの切り替え** 操作がタイトルバーからアクティビティバーに移動します。

Stable 版では、セッションアクティビティバーはデフォルトで非表示になっています。**[表示]** > **[外観]** > **[セッションアクティビティバー]** を選択して有効にします。再び非表示にするには、アクティビティバーを右クリックし、**[セッションアクティビティバーを非表示]** を選択します。

また、これらのオプションは `sessions.showSessionActivityBar`（VS Code で開く、VS Code Insiders で開く）および `sessions.sessionActivityBar.showLayoutActions`（VS Code で開く、VS Code Insiders で開く）で設定することもできます。 以前に `sessions.showSessionToolbar` を設定していた場合、VS Code はその値を `sessions.showSessionActivityBar` に引き継ぎます。VS Code で開く VS Code で開く（Insiders）。

### 空の [ファイル] タブからのファイルの検索と作成 (実験的機能)

**設定**: sessions.experimental.emptyFileEditorActions VS Code で開く VS Code Insiders で開く

[エージェント] ウィンドウでは、ファイルが開かれていない場合、**[ファイル]** タブは空白になっていました。 そのため、セッションのフォルダ内でファイルを検索または作成するには、[ファイル] ビューに切り替える必要がありました。

`sessions.experimental.emptyFileEditorActions` を有効にすると、空の **[ファイル]** タブに検索ボックスと **[新規ファイル]** アクションが表示されます。 この検索機能は、[クイックオープン](https://code.visualstudio.com/docs/editing/getting-started/tips-and-tricks#_quick-open) (⌘P (Windows、Linux: Ctrl+P)) と同様に動作し、順位付け、ハイライト、ファイルアイコンも同様ですが、現在のセッションのフォルダ内にあるファイルのみを検索対象とします。 検索結果を選択するとエディタでファイルが開き、**新規ファイル**を選択するとセッションのフォルダ内にファイルが作成されます。ファイルを閉じると、検索ボックスが再び表示されます。

### 大容量のチャットを開く際のパフォーマンスが向上

以前は、[エージェントホスト](https://code.visualstudio.com/docs/agents/concepts/agent-host) の長いチャットを「エージェント」ウィンドウで開くと、チャットの履歴が復元される間、ウィンドウが最大で30秒間フリーズしていました。今回のリリースでは、履歴の復元を1つの長いブロック処理ではなく、小さな単位に分けて行うようになったため、ウィンドウは常に応答性を維持します。大規模なチャットの開く、切り替える、再読み込みが大幅に高速化されました。

シナリオ

チャット

開くまでの時間: 1.142 → 1.143

ウィンドウの応答停止時間: 1.142 → 1.143

初回起動

チャット A（約 1,150 リクエスト、約 530 MB の履歴）

35.6 秒 → 9.0 秒

28.3秒 → 0.6秒

初回起動

チャットB（約1,450リクエスト、約200 MBの履歴）

20.3秒 → 3.0秒

20.3秒 → 0.4秒

再起動

チャットA

26.7秒 → 0.6秒

26.8秒 → 0.3秒

再起動

チャットB

16.4秒 → 0.4秒

16.4秒 → 0.2秒

ウィンドウの再読み込み

チャットA

26.7秒 → 2.9秒

25.3秒 → 0.9秒

ウィンドウの再読み込み

チャット B

22.3 秒 → 2.2 秒

20.8 秒 → 0.4 秒

_macOS での 3 回の実行結果の中央値。日常の開発における実際のチャットデータに基づく。 「コールドオープン」とは、ウィンドウの起動後にチャットを初めて開くことを指します。「再オープン」とは、別のチャットに切り替えてから元のチャットに戻ることを指します。「ウィンドウが応答しない」とは、ウィンドウが開いている間に、入力に対して応答できなかった最長時間を指します。_

### 非アクティブなワークツリーからストレージを解放する（実験的機能）

**設定**: chat.agentSessions.sessionStorageCleanupSuggestion.enabled VS Codeで開く VS Code Insidersで開く（エージェントウィンドウのみ）

ワークツリーは、エージェントが互いの変更を妨げることなく、複数の機能を同時に処理するために非常に役立ちます。時間が経つにつれて、非アクティブなワークツリーが蓄積され、かなりのディスク容量を消費する可能性があります。

コマンドパレットから **Chat: Open Worktree Cleanup** を実行すると、非アクティブなエージェント セッションのワークツリーが使用しているディスク容量を確認し、 不要なワークツリーを削除できます。セッションを非アクティブ状態になってからの期間でフィルタリングし、各ワークツリーのサイズを確認して、クリーンアップするワークツリーを選択します。

クリーンアップを実行すると、選択したセッションは「完了」としてマークされ、そのワークツリーが削除されます。後でセッションを復元して、ワークツリーを再作成することも可能です。アクティブなセッション、 実行中、入力待ち、および固定されたセッションは、クリーンアップの対象外となります。

クリーンアップエディタでは、プルリクエストがマージされたセッションの自動クリーンアップを設定したり、セッションの保存容量が大きくなった際に VS Code がクリーンアップを提案するかどうかを制御したりできます。

![クリーンアップ設定と非アクティブなセッションのワークツリーが表示されたワークツリー・クリーンアップ・エディタのスクリーンショット。](/assets/updates/1_143/worktree-cleanup-editor.webp)

chat.agentSessions.sessionStorageCleanupSuggestion.enabled VS Codeで開く VS Code Insidersで開く が有効になっている場合、非アクティブなワークツリーが蓄積されたり、クリーンアップを行う価値があるほどディスク容量を消費したりすると、「エージェント」ウィンドウで通知されます。

![「エージェント」ウィンドウに表示されるワークツリーのクリーンアップ提案を示すスクリーンショット。](/assets/updates/1_141/worktree-cleanup.webp)

* * *

## モデル

### デバイス上で Copilot モデルを実行する（実験的機能）

最大 128 GB の統合メモリを備えた NVIDIA RTX Spark を搭載した新しい [Surface Laptop Ultra](https://www.microsoft.com/en-us/surface/devices/surface-laptop-ultra)のようなノートパソコンは、最大128 GBの統合メモリを備えたNVIDIA RTX Sparkを搭載しており、高性能なコーディングモデルをローカルで実行するのに十分なGPUメモリを備えています。 デバイス上モデルを利用すれば、そのハードウェアを Copilot で活用できます。モデルピッカーの新しい **「このデバイス上」** タブから MAI Code 1.1 Flash をダウンロードし、Copilot ハネス セッションでチャットを行うと、モデル処理がデバイス上で実行されます。

VS Codeがモデルのダウンロードと管理を自動的に行います。デバイス上で実行される応答には**On-device**というラベルが付与され、AIクレジットは消費されません。Autoが適切なリクエストをオンデバイスモデルにルーティングし、クラウドをフォールバックとして使用できるようにするには、モデルの詳細ページで**Use in Auto**を有効にしてください。

開始するには：

-   モデルをサポートする [llama.cpp ビルド](https://github.com/ggml-org/llama.cpp/releases) をインストールします
-   chat.copilot.localModel.llamaServerPath VS Codeで開く VS Code Insidersで開く を、その `llama-server` 実行ファイルに設定します
-   chat.copilot.localModel.enabled を有効にします VS Codeで開く VS Code Insidersで開く

オンデバイスモデルを利用するには、GitHubへのサインインと、96 GB以上のGPUメモリを搭載したNVIDIA GPUが必要です。

[オンデバイスモデル](https://code.visualstudio.com/docs/agent-customization/language-models#_use-on-device-models-experimental)の詳細については、こちらをご覧ください。

### 独自の OpenAI モデルをボイスモードに持ち込む（プレビュー）

**設定**: agents.voice.enabled VS Code で開く VS Code で開く Insiders、agents.voice.useBYOKVoiceModel VS Code で開く VS Code で開く Insiders

ホスト型 Voice Mode バックエンドの代わりに、独自の OpenAI API キーとライブモデルを使用して、音声によるコーディング会話を行えます。Language Models エディタで OpenAI キーを追加し、agents.voice.enabled を有効にし、agents.voice.useBYOKVoiceModel を、キーでアクセス可能な `gpt-live-1` などのライブモデル ID に設定します。

* * *

## サンドボックス

### サンドボックス証明書の信頼管理

サンドボックス証明書の信頼管理は、Windows または macOS を実行しているエージェントホストで利用可能です。

サンドボックス認証情報プロキシを使用すると、ツールは実際の認証トークンをサンドボックス化されたプロセスに公開することなく、承認されたサービスに対して認証を行うことができます。このプロキシはツールにプレースホルダーの認証情報を提供し、承認された宛先へリクエストを転送する際に実際の認証情報に置き換えます。HTTPSリクエストの場合、プロキシは独自のTLS証明書を提示する必要があり、ツールはこれを信頼する必要があります。

Copilot は、これをサポートするツール向けに証明書バンドルを提供します。一部のツールは、代わりにオペレーティングシステムの証明書信頼ストアに依存しており、プロキシの認証局 (CA) が信頼されていない場合、証明書エラーが発生する可能性があります。CA をインストールすることで、これらのツールとの互換性が向上します。 **ドメインフィルタリングのみを行う場合は、CAのインストールは不要です：** 組み込みのローカルプロキシは、HTTPSトラフィックを復号化することなく、宛先を確認し、トンネル化することができます。

VS Codeでは、**「Sandboxの信頼済みCAがインストールされていません」**という通知が表示され、これを閉じることができます。信頼設定が不足しており、インストールがサポートされている場合は、**「インストール** オプション付きの**「Sandboxの信頼済みCAがインストールされていません」**という通知を表示します。インストールを行うと、ローカルで生成されたCAの公開証明書が、Windowsの場合はマシン全体の信頼ストアに、macOSの場合はユーザーのログインキーチェーンに追加されます。この際、オペレーティングシステムの承認が必要になる場合があります。

また、コマンドパレットから****Sandbox: 信頼済み CA の管理****を実行して、最後にフォーカスが当たっていたチャットのエージェントホスト（ローカルまたはリモートを問わず）に対する信頼のインストール、ローテーション、または削除を行うこともできます。各操作では確認が求められ、対象ホストが特定されます。 **削除** を選択すると、オペレーティングシステムの信頼関係は解除されますが、保存されている証明書と秘密鍵は保持されます。証明書の変更後、実行中のツールを再起動する必要がある場合があります。

インストールは任意です。信頼関係が設定されていなくても、チャットの起動やメッセージの送信は妨げられず、チャットを開いたからといって証明書の信頼関係が変更されることはありません。

詳細については、[Windows および macOS でのサンドボックス CA 証明書の信頼設定](https://code.visualstudio.com/docs/agents/run/agent-sandboxing#_trust-the-sandbox-ca-certificate-on-windows-and-macos)を参照してください。

### ポリシーが許可する場合のセッションのサンドボックス設定の変更

組織の管理ポリシーでサンドボックスのバイパスが許可されている場合、グローバル設定を変更することなく、個々の Copilot ハーネス セッションに対して [サンドボックス](https://code.visualstudio.com/docs/agents/run/agent-sandboxing) を無効にすることができます。 エディタまたは「Agents」ウィンドウのセッション権限メニューにある **「ターミナルのサンドボックス化」** トグルを使用します。管理者は、バイパスを許可しないことでサンドボックス化を引き続き必須とすることができます。これにより、トグルはオン状態のままロックされます。

変更内容は、エージェントランタイムによる承認の対象となります。変更が拒否された場合、VS Code はエラーを表示し、最後に適用されたサンドボックス状態を復元します。折りたたまれた権限コントロールと再表示されたメニューには、その状態が反映されます。

* * *

## チャット

### チャットメニューからキャンバスを開く (プレビュー)

**設定**: chat.canvases.enabled VS Code で開く VS Code Insiders で開く

VS Code 1.142 では、エージェントとのコラボレーションのための共有型インタラクティブ画面であるキャンバス（プレビュー）が導入されました。

今回のリリースでは、Copilotに開くよう依頼することなく、エディタウィンドウの**[新しいチャット (+)]** > **[キャンバス]**から利用可能なキャンバスを開けるようになりました。

![エディタウィンドウの「新しいチャット」メニューにある「キャンバス」サブメニューのスクリーンショット。Cache Stats、Chess、Diagram Explorer、 Token Pac-Man]がリストされているスクリーンショット。(/assets/updates/1_143/editor-canvas-menu.webp)

キャンバスのサポートが有効になっており、キャンバス拡張機能がインストールされている場合、Copilotハネスセッションで_最初のメッセージを送信した後_にこのサブメニューが表示されます。また、エージェントウィンドウの `+` メニューからキャンバスを開くこともできます。

以下の内容について詳しくはこちらをご覧ください [Copilotハネスでのキャンバスのインストール、作成、および使用方法](https://code.visualstudio.com/docs/agents/run/agent-harnesses#_use-canvases-with-the-copilot-harness)をご覧ください。

### 分離されたバックグラウンドシェルからの出力を確認する

[Copilotハネス](https://code.visualstudio.com/docs/agents/run/agent-harnesses) セッションでは、エージェントは、応答後も実行を継続する必要があるコマンドを、分離されたバックグラウンドシェルで起動できます。開発用サーバーやファイルウォッチャーは、そのようなコマンドの一般的な例です。

以前は、分離されたバックグラウンドシェルの出力を確認することができませんでした。 例えば、開発用サーバーが正常に起動したかどうかを確認することができませんでした。現在、分離されたシェルも、接続されたシェルと同様にその出力をストリーミングするようになりました。**Background Shells** ピルを選択し、分離されたシェルを選択すると、コマンドの実行中にその出力を監視できます。チャット応答内のシェルのターミナル出力は、エージェントが応答を完了した後も更新され続けます。 コマンドが終了すると、シェルはリストから削除されますが、チャット応答にはコマンドの出力と終了ステータスが保持されます。

![分離されたバックグラウンドシェルの出力が詳細画面でストリーミング表示されているスクリーンショット。 「**Background Shells**」リストの横に「Detached」とマークされたシェルが表示されています。](/assets/updates/1_143/background-shell-detached.webp)

以前は[アタッチされたシェルでのみ利用可能だった](https://code.visualstudio.com/updates/v1_142#_stop-background-shells)「デタッチされたシェルの停止」機能も、現在では利用可能になりました。開発用サーバーやウォッチャーが不要になった場合は、シェルの詳細画面で**「シェルを停止」**を選択してください。

* * *

## エディターの操作性

### 診断情報のハイライト制限

報告された問題が多いファイルにおける診断情報の可視性を向上させるため、エディタのハイライト制限が、1ファイルあたり500件から5,000件に引き上げられました。

パフォーマンス上の理由により、診断情報またはそのハイライトが制限されている場合は、エディタの言語ステータスインジケーターに警告が表示されます:

-   **診断のソース制限：** 各拡張機能の診断コレクションは、1ファイルあたり最大1,000件の診断情報を提供できます。コレクションがこの制限を超える場合、警告が表示され、一部の診断情報が表示されていないことが示されます。
 
-   **エディタのハイライト制限：** エディタは、すべてのソースを合わせて、ファイルあたり最大 5,000 件の診断項目をハイライト表示します。この制限を超えた場合、警告により、5,000 件の診断項目のみがハイライト表示されていることが示されます。
    

両方の制限に達した場合、警告には両方の状況が報告されます。ステータスバーの言語ステータスインジケーターにカーソルを合わせると、詳細を確認できます。

![言語ステータスバーの診断ハイライト追加を示すスクリーンショット](/assets/updates/1_143/diagnostic-highlights.webp)

* * *

## ソース管理

### マルチファイル差分エディタのファイル一覧 (実験的機能)

**設定**: multiDiffEditor.experimental.fileList VS Code で開く VS Code Insiders で開く

マルチファイル差分ビューの横に表示されるファイル一覧を使用して、コミット、スタッシュ、およびエージェント セッションからの変更をナビゲートできます。試してみるには、multiDiffEditor.experimental.fileList を有効にしてください。VS Code で開く VS Code で開く Insiders

リスト内の各ファイルには、ステータスを示す文字（A：追加、M：変更、D：削除、R：名前変更）が付いています。スクロールすると、現在表示中のファイルがリスト内でハイライト表示されます。リスト内のファイルを選択すると、その差分表示にジャンプします。エディターツールバーの **エディタツールバーの **その他のアクション** (**...**) メニューから **ファイルの表示と配置** を選択し、**リスト表示** または **ツリー表示** を選択したり、ファイルを差分の **左側** または **右側** に配置したりできます。

![変更された各ファイルのステータス文字が表示された、マルチファイル差分エディタのファイル一覧を示すスクリーンショット。](/assets/updates/1_143/multi-file-diff-editor-file-list.webp)

* * *

## エンタープライズ

### マネージド OpenTelemetry 用の動的ヘッダー

管理者は、新しい `telemetry.headersProvider` マネージド設定を使用して、OpenTelemetry (OTel) エクスポート用の HTTP ヘッダーを生成および更新できます。たとえば、ヘルパーを使用して、コレクター向けに有効期限の短い短命な認証トークンを渡すことができます。これにより、開発者に手動でヘッダーを更新させたり、個人のOTel設定でオプトインさせたりする必要がなくなります。

この設定は**Copilot Agent Hostセッションにのみ適用されます**。設定は [エンタープライズ管理設定](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started)で設定し、ユーザー設定では行わないでください：

```
{
  "telemetry": {
    "enabled": true,
    "endpoint": "https://<collector-host>:4318",
    "protocol": "http",
    "headersProvider": {
 "path": "<ヘッダーヘルパーへの絶対パス>",
 "args": [],
 "refreshIntervalMs": 5000
    }
  }
}
```

このヘルパーは、ヘッダー名と文字列値からなる JSON オブジェクトを標準出力に書き出します。

ヘルパーの要件や詳細については、[動的ヘッダーの設定](https://code.visualstudio.com/docs/agents/guides/monitoring-agents#_configure-dynamic-headers) を参照してください。

### マネージドモデルのデフォルト設定

新しい Copilot ハネスチャットでは、chat.defaultModel を別の設定に変更した場合でも、組織のマネージドデフォルトが使用されます。モデルピッカーと設定画面には、どのデフォルトが適用されるかが説明されるようになりました。チャットごとにモデルやサポートされるオプションを変更することは引き続き可能です。

![組織のデフォルトが示され、そのチャットで別のモデルを選択できることが説明されているモデルピッカーのスクリーンショット。](/assets/updates/1_143/managed-model-default-picker.webp)

たとえば、以下の設定では、新しいチャットのデフォルトが「Auto」に設定され、Intelligence ティアが [エンタープライズ管理設定](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started)では、新しいチャットのデフォルトが「Auto」に設定され、Intelligenceティアが適用されます：

```
{
  "model": "auto",
  "autoTier": "intelligence"
}
```

### 「ローカル」が無効化される理由

エンタープライズポリシーで [Copilot ハーネス](https://code.visualstudio.com/docs/agents/run/agent-harnesses) の使用が義務付けられている場合、「ローカル」ハーネスは表示されたままになりますが、ハーネスピッカーでは無効化されます。この制限に関する説明は [**詳細はこちら**](https://aka.ms/vscode-copilot-harness-policy) リンクが表示され、制限の理由が説明されます。

![ハネスピッカーでポリシーにより「Local」が無効化されているスクリーンショット。組織がCopilotを必須としていることを説明する「詳細はこちら」リンクが表示されています。](/assets/updates/1_143/local-harness-disabled-by-policy.webp)

以下の臨時的なオーバーライドが適用されない限り、空ではない管理対象の `permissions.deny` ルールまたは `sandbox.enabled: true` を適用するには、Copilot が必要です。その他の `permissions.*` 設定や、空の拒否リストでは、この要件はトリガーされません。

管理者は、ユーザー設定ではなく、以下のエンタープライズ管理設定を使用して Local を禁止できます：

```
{
  "vscode": {
    "temporaryAllowLocalHarness": false,
    "temporaryDefaultToLocalHarness": false
  }
}
```

設定

説明

`vscode.temporaryAllowLocalHarness`

`false` に設定すると、Local、Claude、および Codex ハーネスが禁止され、以下の「一時的なデフォルト」設定が上書きされます。 `true` の場合、他のポリシーは上書きされません。

`vscode.temporaryDefaultToLocalHarness`

`true` の場合、Local を利用可能に保ち、拒否リストやサンドボックスの要件を含む Copilot への自動ルーティングを抑制します。明示的な選択や記憶された選択は保持されます。

Copilotが必須の場合、アーカイブされていないLocalチャットを開くと、それらはCopilotに移動されます。エディタのインラインチャットや、その他のClaudeおよびCodexに関する制限は変更されません。

> **注**: これらの制御は、Localが廃止されるまでの暫定的なものです。Localでは、実行時限定の権限やサンドボックス制御を強制することはできません。 これらの制御が必要な場合は、一時的な Local のオーバーライドを有効にしないでください。企業環境で Copilot が正常に動作しない場合は、[問題を報告](https://github.com/microsoft/vscode/issues)してください。

### 組織設定の読み込み中の中断を軽減

Copilotのハーネスセッションおよびモデルの変更は、読み込みに時間がかかる組織設定が完了するまで待機するようになりました。進行状況が表示され、失敗した場合は再試行オプションも利用できます。待機中は引き続き**停止**を選択できます。リクエストの実行前には、組織の制限が適用されます。

### 管理対象ツールに対する承認プロンプトの表示回数が減少

[アシストされた権限](https://code.visualstudio.com/updates/v1_142#_manage-copilot-permission-modes-independently) では、承認済みの対象となる管理対象ツールのリクエストに対して、再度プロンプトが表示されることはなくなりました。1回限りの制限、管理対象の拒否、およびサンドボックスの制限は引き続き適用されます。

### 管理対象プラグインの自動インストール

Copilot ハーネス セッションでは、使用前に組織で必須とされている [エージェント プラグイン](https://code.visualstudio.com/docs/agent-customization/agent-plugins) を自動的にインストールまたは更新するようになりました。

たとえば、[エンタープライズ管理設定](https://docs) でプラグインを必須に設定した場合。github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started) でプラグインを必須に設定する場合：

```
{
  "enabledPlugins": {
    "my-plugin@my-marketplace": true
  }
}
```

信頼済みリポジトリの設定によって有効化されたプラグイン、および組織がチームに割り当てたプラグインは、チャットを中断することなくバックグラウンドでインストールされます。

-   優先順位は、管理設定、信頼済みリポジトリの設定、そしてユーザー自身の選択の順となります。
-   チームへの割り当ては、他に選択肢がない場合にのみ適用されます。
-   自動的にインストールされたプラグインは、そのセッション中のみ有効となり、ユーザー設定には追加されません。

### Claude および Codex セッション

ポリシーにより Copilot ハーネスの使用が義務付けられている場合でも、既存の Claude および Codex セッションはセッション一覧に表示されたままとなるため、Copilot ハーネスを使用してそれらのセッションを継続することができます。このシナリオでは、新しい Claude または Codex セッションの作成は引き続き無効のままとなります。

* * *

## VS Code のセットアップ

### VS Code を使用して GitHub Copilot CLI をインストールする

VS Code インストーラーを使用して [GitHub Copilot CLI](https://github.com/features/copilot/cli) をインストールできるようになり、[GitHub Copilot CLI](https://github.com/features/copilot/cli) の利用開始がさらに簡単になりました。

**注:** 組織は、[管理対象 AI 設定](https://code.visualstudio.com/docs/enterprise/manage-ai-settings#_enable-or-disable-the-copilot-command) を通じてこのオプションを無効にすることができます。

-   Windows
    
    Windows 版の VS Code インストーラーには、GitHub Copilot CLI をインストールするオプションが追加されました。すでにインストール済みの場合は、このオプションは表示されません。 詳細については、[Windows での Copilot コマンドの設定](https://code.visualstudio.com/docs/setup/windows#_setup-the-copilot-command) をご覧ください。
    
    ![Windows インストーラーでの Copilot のインストール](/assets/updates/1_143/windows-installer-copilot.webp)
 
-   Linux
 
 VS Code の Linux インストーラーは、ユーザーのパスに `copilot` 実行ファイルを追加します。
 
 ターミナルで `copilot` コマンドを実行すると、GitHub Copilot CLI がインストールされていない場合はインストールを促すプロンプトが表示され、 すでにインストール済みの場合は GitHub Copilot CLI を実行します。
 
-   macOS
 
 macOS では、VS Code のコマンドパレットから `$PATH` 環境変数に VS Code を追加する際に、GitHub Copilot CLI のインストールを促すメッセージが表示されます。
    
    ![command-to-add-code-to-path](/assets/updates/1_143/macos_install_copilot.webp)
 

* * *

## 非推奨の機能と設定

なし

* * *

## 謝辞

`vscode` への貢献者：

-   [@bstee615 (Benjamin Steenhoek)](https://github.com/bstee615): nes: 低/中程度のイージネスモードのみを有効にするプロンプトテンプレートを追加 [PR #340404](https://github.com/microsoft/vscode/pull/340404)
-   [@davidfowl (David Fowler)](https://github.com/davidfowl): Mission Controlのサンドボックスセッション検出の不備を修正 [PR #341823](https://github.com/microsoft/vscode/pull/341823)
-   [@denizguney (Deniz Güney Yıldırım)](https://github.com/denizguney): `getContextProviderAPI` メソッドにバージョン検証チェックを追加 [PR #339523](https://github.com/microsoft/vscode/pull/339523)
-   [@KRRT7 (Kevin Turcios)](https://github.com/KRRT7): デバッグログがオフのときは一括編集のシリアライズをスキップ [PR #341765](https://github.com/microsoft/vscode/pull/341765)
-   [@matt-sorenson (Matt Sorenson)](https://github.com/matt-sorenson): zsh 統合関数内の変数をローカルとしてマーク [PR #290298](https://github.com/microsoft/vscode/pull/290298)
-   [@mcumming (Michael Cummings (MSFT))](https://github.com/mcumming)
    -   Private Marketplace 拡張機能のブロック：ギャラリーおよびインストールの強制を追加 [PR #333859](https://github.com/microsoft/vscode/pull/333859)
    -   拡張機能ギャラリーサービスのインデックスとして、マニフェストを含まない 200 レスポンスを拒否 [PR #331804](https://github.com/microsoft/vscode/pull/331804)
    -   サインアウトしたユーザーが「利用可能」なマーケットプレイスに残ってしまう競合問題を修正 [PR #331800](https://github.com/microsoft/vscode/pull/331800)
-   [@na2co3-ftw (na2co3)](https://github.com/na2co3-ftw): Modern UI: フロストガラス風メニュー背景の角の表示不具合を修正 [PR #339456](https://github.com/microsoft/vscode/pull/339456)
-   [@pwang347 (Paul)](https://github.com/pwang347)
    -   保留中の Copilot コネクタの再試行を許可 [PR #341081](https://github.com/microsoft/vscode/pull/341081)
    -   agentHost: SDKスキルのインストールを有効化 [PR #340762](https://github.com/microsoft/vscode/pull/340762)
    -   カスタマイズ・マーケットプレイスのサインインを修正 [PR #341648](https://github.com/microsoft/vscode/pull/341648)
-   [@rahadbhuiya (Rahad)](https://github.com/rahadbhuiya): CLI: VSCODE\_PORTABLE を尊重し、Quality の解析を大文字小文字を区別しないように [PR #341565](https://github.com/microsoft/vscode/pull/341565)
-   [@rksharma-owg (RKS)](https://github.com/rksharma-owg): セッション: スティッキースクロール中の承認行の高さを安定化 [PR #338210](https://github.com/microsoft/vscode/pull/338210)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   修正：タイムラインプロバイダーのメモリリーク [PR #340881](https://github.com/microsoft/vscode/pull/340881)
    -   修正：チャットデバッグプロバイダーのメモリリーク [PR #340880](https://github.com/microsoft/vscode/pull/340880)
    -   修正：言語モデルの削除通知におけるメモリリーク [PR #340577](https://github.com/microsoft/vscode/pull/340577)
    -   修正: キャンセルされたツリードラッグ転送におけるメモリリーク [PR #340845](https://github.com/microsoft/vscode/pull/340845)
    -   修正: 保留中のクイックピック項目におけるメモリリーク [PR #340846](https://github.com/microsoft/vscode/pull/340846)
    -   修正：ノートブックの差分入力のライフサイクルを適切に管理 [PR #339389](https://github.com/microsoft/vscode/pull/339389)
    -   修正：ターミナルプロセスの起動時のメモリリーク [PR #340582](https://github.com/microsoft/vscode/pull/340582)
    -   修正：サジェストが有効な入力時のメモリリーク [PR #340913](https://github.com/microsoft/vscode/pull/340913)
-   [@sw23 (Spencer Williams)](https://github.com/sw23): コンテンツ除外パスルールの適用範囲をリポジトリ内に限定 [PR #339415](https://github.com/microsoft/vscode/pull/339415)
-   [@VirajMishra1 (Viraj Mishra)](https://github.com/VirajMishra1): 修正：パス、URI、JSON編集ユーティリティのバグ [PR #334259](https://github.com/microsoft/vscode/pull/334259)
-   [@vscodebot-pr (VS Code PR Bot)](https://github.com/vscodebot-pr)
    -   修正：ウィンドウ閉じた後のデバッグアダプターメッセージを許容するように (#340511 を修正) [PR #340519](https://github.com/microsoft/vscode/pull/340519)
    -   修正: 破棄されたフレームサブツリーに対する WebView 検索のガードを追加（#339314 を修正） [PR #339331](https://github.com/microsoft/vscode/pull/339331)
    -   修正：キャンセルされたターンに対するストリームプッシュの自動ルーティングをガード（#341067 を修正） [PR #341077](https://github.com/microsoft/vscode/pull/341077)
-   [@wycats (Yehuda Katz)](https://github.com/wycats): チャット: Agent Host BYOKリクエストにおける会話IDの保持 [PR #341450](https://github.com/microsoft/vscode/pull/341450)
-   [@yuki-nakano-520 (yuki nakano)](https://github.com/yuki-nakano-520): 修正: ターミナルのタイプアヘッドの遅延を数値順に並べ替え [PR #341303](https://github.com/microsoft/vscode/pull/341303)

* * *

新機能が利用可能になり次第、ぜひお試しいただければ幸いです。こちらのページをこまめにチェックして、新機能についてご確認ください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com/updates) の [更新情報](https://code.visualstudio.com/updates)(https://code.visualstudio.com)の[更新情報](https://code.visualstudio.com/updates)をご覧ください。

[](# "ページトップへ")
