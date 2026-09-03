---
product: VSCode
version: 1.136.0
release_title: Visual Studio Code 1.136
release_date: 2026-09-02
source_url: "https://code.visualstudio.com/updates/v1_136"
archived_at: 2026-09-03
---

# Visual Studio Code 1.136

# Visual Studio Code 1.136

[LinkedIn](https://www.linkedin.com/showcase/vs-code)や[X](https://go.microsoft.com/fwlink/?LinkID=533687)でフォローしてください、[Bluesky](https://bsky.app/profile/vscode.dev)、[Instagram](https://www.instagram.com/vscode.ig)

* * *

_リリース日: 2026年9月2日_

ダウンロード：Windows：[x64](https://update.code.visualstudio.com/1.136.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.136.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.136.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.136.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.136.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.136.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.136.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.136.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.136.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.136 のリリースへようこそ。このリリースでは、エージェントを活用してプルリクエストを完了させたり、複雑なワークスペースや関連するチャットにわたるエージェントの作業を管理したりできるようになります。

-   [エージェントマージ (プレビュー)](#_agent-merge-preview): プルリクエストがマージ可能な状態になるまで、レビューのフィードバック、チェックの失敗、マージの競合を解決します。
 
-   [マルチルートワークスペース (実験的機能)](#_multi-root-workspaces-in-editor-window-experimental): マルチルートワークスペース内のすべてのフォルダにわたって、Copilot および Claude エージェントのセッションを利用できます。
 
-   [チャットの背景 (実験的機能)](#_chat-backgrounds-in-the-agents-window-experimental): 組み込みのパターンや独自の画像を使用して、エージェントウィンドウをカスタマイズできます。
    
-   [チャットセッション](#_navigate-related-chats-and-sessions): 関連するチャットをセッション階層で整理し、対応が必要なチャットをすばやく確認できます。
    

プログラミングをお楽しみください！

* * *

VS Code は全ユーザー向けに段階的に展開されています。VS Code の **更新の確認** を使用して、最新バージョンをすぐに入手してください。

新機能をいち早く試したい場合は、[**ナイトリーの Insiders ビルドをダウンロード**](https://code.visualstudio.com/insiders)してください。このビルドには、最新の更新プログラムが利用可能になり次第、すぐに反映されます。

* * *

## VS Codeのストーリー：世界初公開

VS Codeの誕生から、今日では数百万人の開発者が利用するプラットフォームへと成長するまでの軌跡、そしてその発展を支えてきたコミュニティの物語をご覧ください。

**[プレミア：9月4日 午前8:00（太平洋標準時）。ぜひご参加ください！](https://aka.ms/the-story-of-vs-code)**

[![暗い背景にプログラミングコードが散りばめられ、その上に VS Code のロゴが光り輝くグラフィックポスター。「The Story of VS Code」というタイトルが付いています。](/assets/updates/1_136/the-story-of-vs-code.png)](https://aka.ms/vscode-trailer)

## エージェント

### エディタウィンドウ内のマルチルートワークスペース（実験的機能）

**設定**: chat.agentHost.copilotAgent.multiRootEnabled VS Code で開く VS Code Insiders で開く、chat.agentHost.claudeAgent.multiRootEnabled VS Code で開く VS Code Insiders で開く

エディタウィンドウのチャットビューにおける Copilot および Claude エージェントセッションは、[マルチルートワークスペース](https://code.visualstudio.com/docs/editing/workspaces/multi-root-workspaces)に対応しています。

この機能は現在、エディタウィンドウ内に限定されています。

[エージェントフック](https://code.visualstudio.com/docs/agent-customization/hooks) の適用範囲は、引き続き単一のワークスペースフォルダーに限定されます。複数のフォルダーでフックが検出された場合、VS Code は、フックを読み込む元のフォルダーを選択するよう促します。

### 刷新された「新しいセッション」入力画面

再設計された「新しいセッション」入力画面では、設定の手間を軽減して委任作業を開始できます。更新された操作環境では、プロンプト、モデルの選択、ワークスペースの選択、その他のセッション制御が 1 つのレイアウトにまとめられています。

![「エージェント」ウィンドウ内の再設計された新規セッション入力画面のスクリーンショット。コンテキスト、権限、ワークツリー、ブランチの制御機能が含まれています。](/assets/updates/1_136/agents-new-session-input.webp)

### ワークスペースの解決機能の改善

エージェントは、絶対パスやワークスペース URI に加え、プロジェクト名によってもワークスペースを解決できるようになりました。また、セッションツールでは、マルチルートワークスペースのプロジェクト URI およびすべての作業ディレクトリが保持されます。

その結果、 完全なパスを指定しなくても、「これを VSCode ワークスペースで実行して」といったリクエストを行うことができます。同じ名前のワークスペースが複数ある場合、エージェントは自動的に1つを選択するのではなく、候補となるワークスペースを報告します。リモートワークスペースの URI もサポートされています。

### 関連するチャットやセッションへの移動

関連するエージェントの作業を整理し、「エージェント」ウィンドウのセッション一覧からセッションやチャット間を移動できます。チャットは親セッションの子として表示されるため、関連性のないセッションを個別に管理することなく、どのチャットが関連しているかを把握できます。

各チャットの行には、タイトル、ステータス、承認待ちの項目が表示されるため、どのチャットに操作が必要か一目で確認できます。階層を展開または折りたたみ、ツリーから直接個々のチャットを開いたり、名前を変更したり、移動したり、削除したりできます。

エージェントが独立した作業を複数のチャットに委任した場合、作成された各チャットには意味のあるタイトルが付与され、この階層に表示されます。

新しいセッションまたはチャットは、その発信元に近い位置に配置され、受信したリクエストには **「別のセッションから送信」** や **「別のチャットから送信」** といった発信元へのリンクが含まれます。 リンクを選択すると、そのリクエストの発信元となった正確なセッションまたはチャットに戻ることができます。

![「別のチャットから送信」という送信元リンクが付いた委任リクエストを示すスクリーンショット。](/assets/updates/1_136/session-chat-source.webp)

### セッションファイルの読みやすいブレッドクラム

内部セッション状態ディレクトリで作成されたファイルは、以前はエディタのブレッドクラムに内部セッション識別子が表示されていました。ブレッドクラムでは現在、安定したプロバイダーおよびセッションラベルが使用されるようになり、実装の詳細を公開することなく、ファイルの場所を識別しやすくなりました。

![エージェントが作成したファイルのブレッドクラムに、わかりやすいセッションラベルが表示されているスクリーンショット。](/assets/updates/1_136/session-breadcrumbs.webp)

### 「エージェント」ウィンドウのチャット背景（実験的機能）

**設定**: chat.agentSessions.preferredDarkBackgroundImage VS Code で開く VS Code Insiders で開く、chat.agentSessions.preferredLightBackgroundImage VS Code で開く VS Code Insiders で開く、chat.agentSessions.backgroundImageLayout VS Code で開く VS Code Insiders で開く

装飾的なチャット背景を使用して、エージェントウィンドウをカスタマイズできます。テーマに応じた VS Code 組み込みアイコンのパターン、またはご自身の画像のいずれかを選択できます。

**「チャット: 背景の設定...」** を実行し、**「Codicons」** パターンとローカルマシン上の画像のいずれかを選択します。最近使用した 5 つの画像は **「最近使用したもの」** に表示され、このリストは当該マシンにのみ保存されます。

![「エージェント」ウィンドウの新しいセッション入力欄の背後に Codicons パターンが表示されているスクリーンショット。](/assets/updates/1_136/agents-chat-background-codicons.webp)

独自の画像を使用する場合は、**Chat: 背景レイアウトの変更...** を実行して配置してください。利用可能なレイアウトは、**繰り返し**、**引き伸ばし**、**中央揃え**、および各端と角の計11種類です。リストを順に選択していくと、各レイアウトが実際に適用された状態のプレビューが表示されるため、確定する前に結果を確認できます。 **Chat: 背景をクリア** を実行すると、無地の背景に戻ります。

ダークテーマとライトテーマでは、背景が別々に設定されます。すべてのダークテーマでは chat.agentSessions.preferredDarkBackgroundImage が共有され、すべてのライトテーマでは chat.agentSessions.preferredLightBackgroundImage VS Codeで開く VS Codeで開く Insiders を共有するため、ダークテーマとライトテーマを切り替えると、背景もそれに合わせて切り替わります。高コントラストテーマでは背景が完全に非表示になるため、これら3つのコマンドは利用できません。

チャットコンテンツには独自の塗りつぶしが適用されるため、背後に何があっても読みやすさが保たれます。ユーザーのリクエストは完全に不透明なまま、エージェントの応答は両側の余白を通じて徐々にフェードアウトし、Markdown テーブルやターミナル出力などの幅の広いコンテンツは完全に背景に表示されたままになります。

![Codiconsの背景の上でも読みやすいエージェントの返信とMarkdownテーブルを示すスクリーンショット。](/assets/updates/1_136/agents-chat-background-readability.webp)

[チャットのカスタマイズ](https://code.visualstudio.com/docs/chat/chat-overview#_personalize-chat)について詳しくはこちらをご覧ください。

### エージェント セッションの通知

**設定**: chat.notifyWindowOnConfirmation VS Code で開く VS Code Insiders で開く , chat.notifyWindowOnResponseReceived VS Code で開く VS Code Insiders で開く

VS Code では、エージェント セッションで入力が必要になった場合や作業が完了した場合に通知を受け取ることができます。これは、複数のセッション、ワークスペース、または VS Code ウィンドウ間で作業を割り当てる場合に特に役立ちます。

デフォルトでは、通知は VS Code ウィンドウにフォーカスが当たっていない場合にのみ表示されます。入力が必要なセッションと、応答を受信したセッションについて、それぞれ個別に通知を設定できます。通知には関連するセッションへの直接リンクが含まれているため、通知を選択すると、適切なウィンドウにフォーカスが移り、対応が必要なセッションが開きます。

### Agent Merge（プレビュー）

**設定**: chat.agentMerge.enabled VS Code で開く VS Code Insiders で開く

Agent Merge は、プルリクエストを完了させるのに役立ちます。 この機能は、エージェントに対し、レビューのフィードバックへの対応、チェックの失敗の修正、マージの競合の解決、およびワークフローの再実行を依頼します。Agent Merge は、プルリクエストがマージ可能な状態になるまで、このプロセスを繰り返します。

Agent Merge を試すには、chat.agentMerge.enabled を有効にしてください。VS Code で開く VS Code で開く Insiders。 現在、セッションごとに Agent Merge を有効にできるのは「エージェント」ウィンドウからのみです。「**アクティブなセッションで Agent Merge を有効にする**」を実行するか、タイトルバーの **Agent Merge** ボタンを選択してください。[Agent Merge の使用方法](https://code.visualstudio.com/docs/agents/run/agents-window#_finish-a-pull-request-with-agent-merge)をご覧ください。

### エージェントホスト

エージェントホストを使用すると、複数の VS Code ウィンドウから同じエージェントセッションに接続できます。これは、[エージェントホストプロトコル](https://microsoft.github.io/agent-host-protocol/) （AHP）に基づいて、エージェント・ハーネスを専用プロセスで実行します。エージェント・ホストの Copilot エージェントは、[Copilot SDK](https://www.npmjs.com/package/@github/copilot-sdk) によって駆動されており、これによりエージェントの動作と機能は、Copilot CLI、 スタンドアロンの GitHub Copilot アプリ、およびその他の Copilot 製品と整合性を保っています。

現在、エージェントホストの開発を積極的に進めています。以下のスクリーンショットは、エディタウィンドウ内のエージェントホストで `Copilot` ハーネスが選択されている様子を示しています：

![エディタウィンドウ内のハネスドロップダウンを示すスクリーンショット。](/assets/updates/1_136/agent-host-harness-dropdown-editor.webp)

詳細については、[エージェントホストのドキュメント](https://code.visualstudio.com/docs/agents/concepts/agent-host) や、新しい [エージェントホストに関するブログ記事](https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture)をご覧ください。ここでは、エージェントホストを開発した理由、VS Codeで実現できる機能、アーキテクチャとオープンプロトコルの仕組み、そして実際に試せるワークフローについて解説しています。

フィードバックやご要望がございましたら、[イシューを登録](https://github.com/microsoft/vscode/issues) してご一報ください。

## チャット

### ディクテーションデータに関するエンタープライズ制御

管理者は、エンタープライズポリシーを通じて、ディクテーションモデルおよび言語モデルの文字起こしデータのクリーンアップを管理できます。

この新しい制御機能により、デバイス上での文字起こしを必須にしたり、言語モデルによるクリーンアップを無効にしたりすることが可能になります。これにより、ディクテーション機能は利用可能なまま、ディクテーションデータがクラウド文字起こしサービスやCopilotモデルに送信されるのを防ぐことができます。 [ディクテーションデータに関するエンタープライズ制御](https://code.visualstudio.com/docs/enterprise/ai-settings#control-dictation-data)の詳細をご覧ください。

## アクセシビリティ

### 「エージェント」ウィンドウの「スクリーンリーダー最適化」バッジ

「エージェント」ウィンドウのタイトルバーにある **「スクリーンリーダー最適化」** バッジにより、アクティブなアクセシビリティモードを一目で識別しやすくなりました。このバッジは、「スクリーンリーダー最適化」モードが有効になっているときに表示されます。このモードを無効にするには、バッジを選択してください。

![「エージェント」ウィンドウのタイトルバーにある「スクリーンリーダー最適化」バッジのスクリーンショット。](/assets/updates/1_136/agents-screen-reader-optimized-badge.webp)

## エディターの操作性

### エディタウィンドウのレイアウト密度（実験的機能）

**設定**: workbench.experimental.modernUI VS Codeで開く VS Code Insidersで開く、window.density.layout VS Codeで開く VS Code Insidersで開く

**「コンパクト」**レイアウト密度を使用すると、エディタウィンドウにより多くのコンテンツを表示できます。workbench.experimental.modernUI（VS Codeで開く、VS Code Insiders）が有効になっている場合、2つのレイアウト密度から選択できます：

-   **「デフォルト」**レイアウト密度は、現在のエディタウィンドウのレイアウトと同じです。
-   **コンパクト** レイアウト密度では、パネル間の余白が削除され、パネル内部の余白も縮小されます。

この設定は、[設定] メニューの **レイアウト密度** セクションで利用可能であり、window.density.layout [VS Code で開く] [VS Code Insiders で開く] を使用して設定することもできます。

## コード編集

### ワードラップの改善

挿入されたテキストによって、改行された行がエディタのビューポート外にはみ出すことがなくなりました。ワードラップでは、カラーデコレータ、インレイヒントの間隔、インライン進行状況インジケータ、ブレークポイントプレースホルダーの視覚的な幅が考慮されます。以下のスクリーンショットで、変更前後の様子をご確認ください。 上の画像では、`rgba` がわずかに切り取られているのがわかります。一方、2 番目の画像では切り取られていません。

![エディタのビューポートの端で切り取られた、改行された CSS 行を示すスクリーンショット。](/assets/updates/1_136/word-wrapping-before.jpg)

![改行された CSS 行がエディタのビューポート内に収まっている様子を示すスクリーンショット。](/assets/updates/1_136/word-wrapping-after.jpg)

## 統合ブラウザ

### スペルチェックの候補

編集可能なフィールド内のスペルミスのある単語を右クリックして、修正候補を選択します。永続的なデータストレージを使用しているセッションでは、**辞書に追加**も選択できます。

![統合ブラウザのコンテキストメニューに表示されるスペルチェックの候補と「辞書に追加」を示すスクリーンショット。](/assets/updates/1_136/spell-check.webp)

## ターミナル

### コマンド実行時の遅延の軽減

特定のタイミング条件下でシェル統合の準備が整っている場合、拡張機能によって実行されるターミナルコマンドで不要な遅延が発生しなくなりました。このケースに該当する JavaScript デバッガーのユーザーは、プログラムの起動時に 5 秒間の遅延が発生しなくなりました。

## 非推奨となった機能と設定

なし

## 謝辞

`vscode` への貢献者：

-   [@abmahdy (Ahmed Mahdy)](https://github.com/abmahdy): プロンプトファイル検出時の読み取りの並行処理を制限 [PR #331855](https://github.com/microsoft/vscode/pull/331855)
-   [@DanTup (Danny Tuppeny)](https://github.com/DanTup): 同じ位置にある InlayHints は順序通りに表示されることに注意 [PR #175525](https://github.com/microsoft/vscode/pull/175525)
-   [@davidbitton (David B. Bitton)](https://github.com/davidbitton): 統合ブラウザのコンテキストメニューにスペル修正の候補を追加 [PR #333043](https://github.com/microsoft/vscode/pull/333043)
-   [@JeffreyCA](https://github.com/JeffreyCA): Azure Developer CLI (azd) の Fig 仕様を更新 [PR #331727](https://github.com/microsoft/vscode/pull/331727)
-   [@juliagongms (Julia Gong)](https://github.com/juliagongms): nes: デフォルトのプロバイダーパスに supportsUnifiedCompletions を適用 [PR #332802](https://github.com/microsoft/vscode/pull/332802)
-   [@koubaki](https://github.com/koubaki): inlineChatIntent.ts のエラーメッセージを更新 [PR #329157](https://github.com/microsoft/vscode/pull/329157)
-   [@ktsoator (ktsoator)](https://github.com/ktsoator): ホバー時：長いコンテンツのスクロール位置を復元 [PR #331439](https://github.com/microsoft/vscode/pull/331439)
-   [@na2co3-ftw (na2co3)](https://github.com/na2co3-ftw): モダンUI：タブ操作時のフェード効果に関するCSSの特異性の修正 [PR #332103](https://github.com/microsoft/vscode/pull/332103)
-   [@preitinger (Peter Reitinger)](https://github.com/preitinger): snippet.md の更新 [PR #231790](https://github.com/microsoft/vscode/pull/231790)
-   [@remcohaszing (Remco Haszing)](https://github.com/remcohaszing)
    -   行末でのカーソル移動動作を標準化 [PR #296712](https://github.com/microsoft/vscode/pull/296712)
    -   改行を伴うテキスト選択時の範囲外問題を修正 [PR #262910](https://github.com/microsoft/vscode/pull/262910)
    -   カスタム行の高さを丸め処理するようにした [PR #298421](https://github.com/microsoft/vscode/pull/298421)
    -   Monacoエディタでscore関数を公開 [PR #322959](https://github.com/microsoft/vscode/pull/322959)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   修正：エクスプローラービューアーのメモリリーク [PR #332332](https://github.com/microsoft/vscode/pull/332332)
    -   修正：LSP ターミナルの補完機能におけるメモリリーク [PR #332173](https://github.com/microsoft/vscode/pull/332173)
-   [@TheNotary](https://github.com/TheNotary)： 非対応のスキル属性に関するエラーメッセージを更新 [PR #328318](https://github.com/microsoft/vscode/pull/328318)
-   [@tisilent (xiejialong)](https://github.com/tisilent): ラベルと説明を更新。 [PR #219949](https://github.com/microsoft/vscode/pull/219949)
-   [@unsupportedpastels (Mark S.)](https://github.com/unsupportedpastels): カスタムエージェントファイルでの推論作業のサポート [PR #329263](https://github.com/microsoft/vscode/pull/329263)
-   [@weidehai (io)](https://github.com/weidehai): エラー修正の手順 [PR #249715](https://github.com/microsoft/vscode/pull/249715)

`vscode-emmet-helper` への貢献：

-   [@danfiedler-msft (Dan Fiedler)](https://github.com/danfiedler-msft)： GitHub Actions を完全なコミット SHA に固定 [PR #108](https://github.com/microsoft/vscode-emmet-helper/pull/108)

`vscode-livepreview` への貢献:

-   [@danfiedler-msft (Dan Fiedler)](https://github.com/danfiedler-msft): GitHub Actions を完全なコミット SHA に固定 [PR #854](https://github.com/microsoft/vscode-livepreview/pull/854)

`docfind` への貢献:

-   [@danfiedler-msft (Dan Fiedler)](https://github.com/danfiedler-msft): GitHub Actions を完全なコミット SHA に固定 [PR #62](https://github.com/microsoft/docfind/pull/62)

`node-pty`への貢献:

-   [@danfiedler-msft (Dan Fiedler)](https://github.com/danfiedler-msft): GitHub Actions を完全なコミット SHA に固定 [PR #958](https://github.com/microsoft/node-pty/pull/958)

### 課題追跡

イシュー追跡への貢献：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@saroasid-web (Saswwo)](https://github.com/saroasid-web)
-   [@zotabee (zotabee)](https://github.com/zotabee)
-   [@lppedd (Edoardo Luppi)](https://github.com/lppedd)
-   [@sandstrom (sandstrom)](https://github.com/sandstrom)

* * *

新機能が利用可能になり次第、ぜひお試しいただければ幸いです。定期的にこちらをチェックして、新機能についてご確認ください。

> 過去の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [更新情報](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
