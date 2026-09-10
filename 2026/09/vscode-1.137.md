---
product: VSCode
version: 1.137.0
release_title: Visual Studio Code 1.137
release_date: 2026-09-09
source_url: "https://code.visualstudio.com/updates/v1_137"
archived_at: 2026-09-10
---

# Visual Studio Code 1.137

# Visual Studio Code 1.137

[LinkedIn](https://www.linkedin.com/showcase/vs-code)、[X](https://go.microsoft.com/fwlink/?LinkID=533687)、 [Bluesky](https://bsky.app/profile/vscode.dev)、[Instagram](https://www.instagram.com/vscode.ig)

* * *

_リリース日: 2026年9月9日_

ダウンロード：Windows：[x64](https://update.code.visualstudio.com/1.137.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.137.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.137.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.137.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.137.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.137.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.137.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.137.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.137.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.137 のリリースへようこそ。このリリースでは、繰り返し行う作業の自動化、ワークスペース内でのチャットをスムーズに続けること、音声でエージェントと会話すること、そしてエージェントウィンドウから離れることなく GitHub のイシューやプルリクエストを操作できるようになります。

-   [VS Code の物語](#_the-story-of-vs-code): VS Code のドキュメンタリーをご覧いただき、このエディタとそのコミュニティがどのように進化してきたかをご覧ください。
    
-   [自動化 (プレビュー)](#_automations-preview): エージェントの反復タスクを 1 時間ごと、1 日ごと、1 週間ごとに実行するようにスケジュールしたり、オンデマンドで実行したりできます。
 
-   [音声モード (実験的)](#_voice-mode-experimental): エージェントと会話し、エージェントがコードを処理している最中に、その処理を中断したり、別の処理に切り替えたりできます。
 
-   [ワークスペースでのクイックチャットを継続](#_continue-quick-chats-in-a-workspace): 会話履歴や現在のリクエストを失うことなく、既存のクイックチャットにプロジェクトを紐付けます。
    
-   [GitHubのイシューとプルリクエスト（実験的機能）](#_open-github-issues-and-pr-details-experimental)：リポジトリが開いていない場合でも、エージェントウィンドウ内で直接イシューやプルリクエストの詳細を確認できます。
 
-   [コンテスト： VS Codeのペットに名前を付けよう](#_help-name-the-vs-code-pet-experimental)：VS Codeのペットに会い、コンテストに参加して名前を決めましょう。
    

> **2026年9月10日に開催される [GitHub Copilot Day](https://gh.io/githubcopilotday) のライブ配信にぜひご参加ください。** エージェントやモデルの選択から、GitHub、Copilot アプリ、Copilot CLI、Visual Studio Code を横断して作業する方法まで、Copilot を最も効果的に活用する方法を学びましょう。

プログラミングを楽しんでください！

* * *

VS Code は全ユーザーに向けて段階的に展開されています。 VS Codeの**「更新を確認」**機能を使用すると、すぐに最新バージョンを入手できます。

新機能をいち早く試したい場合は、[**ナイトリー版Insidersビルドをダウンロード**](https://code.visualstudio.com/insiders)してください。このビルドには、最新アップデートが利用可能になり次第、すぐに反映されます。

* * *

## VS Codeの物語

VS Codeの誕生から、今日では数百万人の開発者が利用するプラットフォームへと成長するまでの道のり、そしてその発展を支えてきたコミュニティの物語をご紹介します。

[![暗い背景にプログラミングコードが散りばめられ、その上にVS Codeのロゴが輝いているグラフィックポスター。「The Story of VS Code」というタイトルが付いています。](/assets/updates/1_136/the-story-of-vs-code.png)](https://aka.ms/the-story-of-vs-code)

## エージェント

### オートメーション（プレビュー）

**設定**: chat.automations.enabled VS Codeで開く VS Code Insidersで開く

オートメーションは、スケジュールに従ってエージェントのタスクを繰り返し実行するため、定型作業を手動で開始する必要がありません。変更点の確認、課題の優先順位付け、バグの発見などのテンプレートから始めるか、独自のプロンプトとスケジュールを定義してください。

オートメーションを試すには、chat.automations.enabled を有効にし、VS Code で開く VS Code で開く Insiders を開き、「エージェント」ウィンドウを開いて、サイドバーから **オートメーション** を選択してください。オートメーションはオンデマンドで実行することも、1時間ごと、1日ごと、1週間ごとに実行するようにスケジュール設定することもできます。 [オートメーション](https://code.visualstudio.com/docs/agents/run/automations) の詳細については、ドキュメントをご覧ください。

オートメーションはプレビュー版であり、すべてのユーザーに順次提供されています。

### GitHub のイシューおよび PR の詳細を開く（実験的機能）

**設定**: extensions.experimental.enableAgentsWindowCapability VS Code で開く VS Code Insiders で開く

チャットでの会話で GitHub 上の作業が言及された場合、「エージェント」ウィンドウから GitHub Pull Requests 拡張機能と直接連携できます。`github.com` のイシューまたはプルリクエストのリンクを選択すると、ブラウザに切り替えることなく、「エージェント」ウィンドウ内で直接詳細を開くことができます。この機能は、そのリポジトリのワークスペースが開いていない場合でも動作します。

この初期統合機能を試すには、デフォルトの VS Code プロファイルに [GitHub Pull Requests 拡張機能](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) をデフォルトの VS Code プロファイルにインストールし、extensions.experimental.enableAgentsWindowCapability を有効にしてください。VS Code で開く VS Code で開く Insiders。

### 任意のチャットで GitHub のイシューやプルリクエストを添付する

チャットビュー、チャットエディタ、エージェントウィンドウなど、任意のチャット入力欄にある **コンテキストの追加...** メニューから、GitHub のイシューやプルリクエストをコンテキストとして追加できます。これにより、プロンプトにコピーすることなく、イシューの説明、コメント、またはプルリクエストの変更内容をエージェントが利用できるようになります。

![「コンテキストの追加」メニューから GitHub イシューを検索している様子を示すスクリーンショット。](/assets/updates/1_137/github-issue-pull-request-context.webp)

また、新しいセッションの入力欄に GitHub のイシューやプルリクエストの URL を貼り付けることもできます。URL はプロンプトに残り、コンテキストの添付が自動的に追加されます。

![チャット内にコンテキスト添付付きで貼り付けられた GitHub イシューおよびプルリクエストの URL を示すスクリーンショット。](/assets/updates/1_137/paste-github-issue-pull-request.webp)

### VS Code ペットの名前付けにご協力ください（実験的機能）

実験的な VS Code ペットは、エージェントとの作業中に反応するインタラクティブな相棒です。チャットで `/vscode-pet` と入力してペットと出会い、その名前を決めるお手伝いをしてください。

![チャットでの VS Code ペットの紹介画面のスクリーンショット。](/assets/updates/1_137/toggle.webp)

2026年9月10日から9月17日まで、[VS Code ペットの名前を応募してください](https://forms.cloud.microsoft/r/4iFTRDnvaY)。 [コンテストの規約](https://code.visualstudio.com/docs/agents/reference/chat-pet#_contest-terms-and-conditions)をご確認ください。

### ワークスペース内でクイックチャットを継続する

例えば、一般的な質問やアイデアについて話し合う場合など、ワークスペースに関連付けずに「エージェント」ウィンドウでクイックチャットを開始できます。後で会話がプロジェクト固有の内容になった場合は、Copilotエージェントにローカルフォルダの添付を依頼し、同じチャットを継続してください。

ワークスペースを確認し、フォルダーを直接使用するかどうか、または隔離されたワークツリーを作成するかどうかを選択すると、チャットはワークスペースセッションになります。セッションのタイトル、会話履歴、現在のリクエストは保持され、ワークスペースの設定が完了すると、エージェントはプロジェクトファイルへのアクセスを維持したまま自動的にチャットを継続します。

あるいは、新しいワークスペース セッションでプロジェクト作業を開始することもできます。

> **注**: ワークスペース セッションでのチャット会話の継続は、現在 Copilot ハーネスでのみ利用可能です。

### エージェントがキューに追加したメッセージ

すでにリクエストを処理中のチャットを中断することなく、エージェントを並行して稼働させることができます。エージェントがセッション管理ツール `send_message` を使用して、処理中のチャットに連絡しようとすると、VS Code はそのメッセージをキューに入れ、アクティブなターンが正常に完了した後にメッセージの処理を開始します。

エージェントは、同じセッションまたは別のセッション内のチャットに対して、複数のメッセージをキューに入れることができます。VS Code は、送信された順序でキューに入れられたメッセージを処理するため、マルチチャットワークフローの挙動がより予測しやすくなります。

### エージェントホスト

エージェントホストを使用すると、複数の VS Code ウィンドウから同じエージェントセッションに接続できます。これは、[エージェントホストプロトコル](https://microsoft.github.io/agent-host-protocol/) （AHP）に基づいて、エージェントハーネスを専用プロセスで実行します。エージェントホストの Copilot エージェントは [Copilot SDK](https://www.npmjs.com/package/@github/copilot-sdk) によって駆動されており、これによりエージェントの動作や機能が Copilot CLI、スタンドアロンの GitHub Copilot アプリ、およびその他の Copilot 製品と整合が取れています。

現在、エージェントホストの開発を積極的に進めています。詳細については、[エージェントホストのドキュメント](https://code.visualstudio.com/docs/agents/concepts/agent-host) および [エージェントホストに関するブログ記事](https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture)をご覧ください。ここでは、エージェントホストを開発した理由、VS Codeでどのような機能が実現されるか、アーキテクチャとオープンプロトコルの仕組み、そしてご自身で試せるワークフローについて解説しています。

フィードバックやご要望がございましたら、[イシューを登録](https://github.com/microsoft/vscode/issues)してご報告ください。

## チャット

### 音声モード（実験的機能）

**設定**: agents.voice.enabled VS Codeで開く VS Code Insidersで開く、agents.voice.showTranscript VS Codeで開く VS Code Insidersで開く、agents.voice.voice VS Codeで開く VS Code Insidersで開く

音声モードを有効にすると、エージェントがコードを処理している間、自然な会話形式でエージェントと会話することができます。

試すには、agents.voice.enabled [VS Codeで開く](https://github.com/microsoft/vscode/issues) [VS Code Insiders](https://github.com/microsoft/vscode/issues) を有効にし、チャット入力欄の**音声モード**ボタンを選択してください。

エージェントが話している間に、話し始めたり、「プッシュ・トゥ・トーク」ショートカットを使用して応答を中断し、会話を続けることができます。

ボイスモードはアクティブなセッションを認識しており、実行中のセッション、選択されたモデル、および添付ファイルに関する質問に答えることができます。また、ボイスモードに新しいセッションの開始を依頼することも可能です。リクエストがルーティングされると、ボイスモードは、そのリクエストを既存のセッションに送信するのか、それとも新しいセッションを開始するのかを音声で通知します。

ボイスモードは以下の方法でカスタマイズできます：

-   agents.voice を有効にします。showTranscript VS Codeで開く VS Code Insidersで開く を有効にすると、Voice Modeがアクティブな間、チャット入力欄に会話のトランスクリプトが表示されます。Voice Modeのコントロールを使用して、音声セッションを終了することなく、トランスクリプトの表示/非表示やマイクのミュート/ミュート解除を行うことができます。
-   **Chat: Dictate: Select Microphone** を実行して、ディクテーションとボイスモードの両方で使用する入力デバイスを選択します。
-   agents.voice.voice（VS Codeで開く VS Code Insiders）を使用して、応答を音声で読み上げるボイスを選択します。
-   コマンドパレットから **Voice Mode: Show Introduction** を実行すると、紹介画面が再表示され、そこでマイクを選択したり、利用可能なボイスをプレビューしたりできます。

また、チャット入力欄の **Voice Mode** ボタンを右クリックすると、設定、操作手順、紹介、 マイクの選択、および文字起こしコントロールにすばやくアクセスできます。[Voice Mode の使用方法](https://code.visualstudio.com/docs/configure/accessibility/voice#use-voice-mode) について詳しくはこちらをご覧ください。

管理者は、組織の Copilot プレビュー機能をオフにすることで、Voice Mode を無効にできます。

## コード編集

### スマート差分エディターのレイアウト

通常の差分、複数ファイルの差分、および [Agents] ウィンドウの **変更** エディターにおいて、同じ方法で差分レイアウトを選択できます。**その他のアクション** (**...**) > **差分表示** を開き、**インライン**、**並列表示**、 **自動** を選択します。

**自動** オプションでは、現在アクティブなレイアウトが表示され、エディタの幅が変化するとそれに合わせて適応します。サッシュをドラッグしてインライン差分を意図的に広げた場合でも、サイズ変更中は差分がインラインのまま維持されるため、内容が予期せずずれることはありません。

### マルチファイル差分におけるバイナリファイル

画像などの変更されたバイナリファイルは、マルチファイル差分表示において省略されることなく表示されたままになります。差分表示では、ファイルの元の位置に **バイナリファイルが変更されました** というプレースホルダーが表示されます。**差分を開く** を選択すると、画像の差分表示や適切なカスタムエディタなど、標準的な差分表示環境でファイルを確認できます。

![マルチファイル差分表示におけるバイナリファイルのプレースホルダーと「差分を開く」アクションを示すスクリーンショット。](/assets/updates/1_137/binary-files-multi-diff.webp)

エディタウィンドウでの複数ファイルの差分表示も、「エージェント」ウィンドウでの複数ファイルの差分表示と同じ視覚デザインを採用しています。

## 言語

### Markdown エディター内の GitHub リンク (実験的機能)

**設定**: markdown.experimental.richLinks.enabled VS Code で開く VS Code Insiders で開く , chat.experimental.richLinks.enabled VS Code で開く VS Code Insiders で開く

Markdown エディター内の GitHub イシューおよびプルリクエストのリンクには、現在のタイトルとステータスが表示されるため、リンクを開かなくても各参照内容を把握できます。リンクは、CI の更新を含め、イシューやプルリクエストのステータスが変更されると更新されます。

![Markdown エディタ内で、GitHub のプルリクエストがライブステータスインジケーター付きの リッチリンクとして表示されているスクリーンショット。](/assets/updates/1_137/markdown-github-rich-links.webp)

チャットでも同様のリンク表示を使用するには、chat.experimental.richLinks.enabled Open in VS Code Open in VS Code Insiders を `true` に設定してください。

## 拡張機能への貢献

### GitHub プルリクエスト

[GitHub プルリクエスト](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) 拡張機能において、さらなる進展が見られました。この拡張機能を使用すると、プルリクエストやイシューの編集、作成、管理が可能になります。新機能は以下の通りです：

-   プルリクエストの Web ビューの起動が高速化されました
-   VS Code 内のすべての github.com リンクが、この拡張機能で開かれるようになりました（`githubPullRequests.openPullLinks` で無効化可能です）

この拡張機能の [0.166.0 バージョンの変更履歴](https://github.com/microsoft/vscode-pull-request-github/blob/main/CHANGELOG.md#01660) を確認して、このリリースに含まれるすべての内容についてご確認ください。

## 非推奨の機能と設定

なし

## 謝辞

`vscode`への貢献者：

-   [@accnops (Arthur Cnops)](https://github.com/accnops): ディクテーション用に専用のMAI文字起こしを使用 [PR #334042](https://github.com/microsoft/vscode/pull/334042)
-   [@arpankanwer (Birarpanjot Singh Kanwer)](https://github.com/arpankanwer): 修正（Copilot）： 有効期限が切れた Vision 添付ファイルの自動再試行を停止し、対処可能なエラーを表示 [PR #334129](https://github.com/microsoft/vscode/pull/334129)
-   [@bstee615 (Benjamin Steenhoek)](https://github.com/bstee615)
    -   PatchBased02Unified で eagerness オプションを認識するように [PR #333606](https://github.com/microsoft/vscode/pull/333606)
    -   PatchBased02UnifiedEagerness プロンプト戦略の追加 [PR #333302](https://github.com/microsoft/vscode/pull/333302)
-   [@hadley (Hadley Wickham)](https://github.com/hadley): `undefined` に設定された際に WebView のバッジが消えない問題を修正 [PR #331019](https://github.com/microsoft/vscode/pull/331019)
-   [@jmymay (Jeremy Majewski)](https://github.com/jmymay): platforms.ts および context に isChromeOS を追加。[PR #309097](https://github.com/microsoft/vscode/pull/309097)
-   [@joshspicer](https://github.com/joshspicer)
    -   agentHost: シェルパスおよび読み取りプロンプトに関する管理権限の修正 [PR #333249](https://github.com/microsoft/vscode/pull/333249)
    -   管理設定: キャッシュされたポリシーをより頻繁に再利用する [PR #333697](https://github.com/microsoft/vscode/pull/333697)
    -   模擬ポリシーサーバーのトラブルシューティングを改善 [PR #333930](https://github.com/microsoft/vscode/pull/333930)
    -   回帰テストにより管理設定の安定性を確保 [PR #334056](https://github.com/microsoft/vscode/pull/334056)
    -   モックポリシーサーバーのUIを洗練 [PR #334122](https://github.com/microsoft/vscode/pull/334122)
    -   旧式の「tool-rename-deprecation」スキルを削除 [PR #334279](https://github.com/microsoft/vscode/pull/334279)
    -   mock-policy-server からサンプルを削除 [PR #334361](https://github.com/microsoft/vscode/pull/334361)
-   [@kondv](https://github.com/kondv): mcp: 同一の URI 定義に対してサーバーを停止させないよう修正 [PR #333443](https://github.com/microsoft/vscode/pull/333443)
-   [@leep-frog](https://github.com/leep-frog): `editor.action.formatDocument.multiple` に引数を追加 [PR #245743](https://github.com/microsoft/vscode/pull/245743)
-   [@mcumming (Michael Cummings (MSFT))](https://github.com/mcumming)
    -   Private Marketplace へのアクセス用に Microsoft Entra ID によるサインインを有効化 [PR #325331](https://github.com/microsoft/vscode/pull/325331)
    -   extensions.gallery.authProvider をポリシー制御対象にする [PR #333837](https://github.com/microsoft/vscode/pull/333837)
-   [@mst-mkt (keito)](https://github.com/mst-mkt): 矢印関数の後に選択範囲を角括弧で囲む問題を修正 (#\_225916) [PR #321210](https://github.com/microsoft/vscode/pull/321210)
-   [@piyushmadan (Piyush Madan)](https://github.com/piyushmadan): サブエージェントの実行までの残りターンを表示 [PR #332704](https://github.com/microsoft/vscode/pull/332704)
-   [@RajeshKumar11](https://github.com/RajeshKumar11): extensions.allowed スキーマが有効なバージョン配列を無効としてフラグ付けする問題を修正 [PR #329744](https://github.com/microsoft/vscode/pull/329744)
-   [@rohit489 (Rohit Agrawal - MSFT)](https://github.com/rohit489): チャットテレメトリイベントに CAPI X-Copilot-Service-Request-Id を記録 [PR #334638](https://github.com/microsoft/vscode/pull/334638)
-   [@RyanEwen (Ryan Ewen)](https://github.com/RyanEwen): メッセージが空のブラウザツールの障害を「障害」として報告する [PR #334311](https://github.com/microsoft/vscode/pull/334311)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   修正：Gitブランチ保護プロバイダーのメモリリーク [PR #333381](https://github.com/microsoft/vscode/pull/333381)
    -   修正：拡張機能ホストの疑似端末におけるメモリリーク [PR #333397](https://github.com/microsoft/vscode/pull/333397)
    -   修正: アクセシビリティビューのツールバーにおけるメモリリーク [PR #333183](https://github.com/microsoft/vscode/pull/333183)
    -   修正: テスト結果におけるメモリリーク [PR #333244](https://github.com/microsoft/vscode/pull/333244)
    -   修正: 拡張機能ホストのコメントにおけるメモリリーク [PR #334095](https://github.com/microsoft/vscode/pull/334095)
    -   修正: mainThreadNotebook におけるメモリリーク [PR #334189](https://github.com/microsoft/vscode/pull/334189)
    -   修正: ターミナルプロファイルサービスにおけるメモリリーク [PR #334100](https://github.com/microsoft/vscode/pull/334100)
-   [@vscodebot-pr (VS Code PR Bot)](https://github.com/vscodebot-pr)
    -   修正: RangeError を防ぐため、ListView の可視範囲の反転を制限 (#333230 を修正) [PR #333236](https://github.com/microsoft/vscode/pull/333236)
    -   修正: ディスポーズ時に保留中のシングルペイン・ドックされたタブのリコンカイルをキャンセル (#333537 を修正) [PR #333541](https://github.com/microsoft/vscode/pull/333541)
    -   修正: copilotcli の診断プッシュにおける null チェックの診断コード (#333772 を修正) [PR #333781](https://github.com/microsoft/vscode/pull/333781)
    -   修正: テスト中の「Voice Mode」オンボーディングプレビューにおいて、実際の AudioContext をスキップするようにしました（vscode-engineering#3742 のビルド修正） [PR #333858](https://github.com/microsoft/vscode/pull/333858)
-   [@wibaek (Wibaek Park)](https://github.com/wibaek): 修正: IME 入力中に「検索」入力フィールドへのフォーカスが戻らないように修正 [PR #320898](https://github.com/microsoft/vscode/pull/320898)
-   [@YOSHII-Hiroto (吉井 啓人（YOSHII, Hiroto）)](https://github.com/YOSHII-Hiroto): 統合ブラウザでのMHTMLファイルの開く機能をサポート [PR #333307](https://github.com/microsoft/vscode/pull/333307)

`vscode-pull-request-github`への貢献:

-   [@jameswilmiller (James Miller)](https://github.com/jameswilmiller): ツリーにコミット SHA を常に表示する [PR #8840](https://github.com/microsoft/vscode-pull-request-github/pull/8840)
-   [@tamird (Tamir Duberstein)](https://github.com/tamird)
    -   レガシー GraphQL クエリで変数を必須化 [PR #8889](https://github.com/microsoft/vscode-pull-request-github/pull/8889)
    -   レビューコメントの再表示をページ単位で分割 [PR #8890](https://github.com/microsoft/vscode-pull-request-github/pull/8890)

### 課題管理

課題管理への貢献：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

* * *

新機能がリリースされ次第、すぐに試してくださる皆様に心より感謝申し上げます。ぜひ頻繁にこのページをチェックして、最新情報をご確認ください。

> 以前の VS Code バージョンのリリースノートを閲覧したい場合は、 [code.visualstudio.com](https://code.visualstudio.com) の [更新情報](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
