---
product: VSCode
version: 1.146.0
release_title: Visual Studio Code 1.146
release_date: 2026-11-11
source_url: "https://code.visualstudio.com/updates/v1_146"
archived_at: 2026-11-13
---

# Visual Studio Code 1.146

# Visual Studio Code 1.146

リリース日: 2026年11月11日 安定版

## 1.146.0 のダウンロード

Windows

[x64](https://update.code.visualstudio.com/1.146.0/win32-x64-user/stable)[Arm64](https://update.code.visualstudio.com/1.146.0/win32-arm64-user/stable)

macOS

[ユニバーサル](https://update.code.visualstudio.com/1.146.0/darwin-universal-dmg/stable)[Intel](https://update.code.visualstudio.com/1.146.0/darwin-x64-dmg/stable)[Apple Silicon](https://update.code.visualstudio.com/1.146.0/darwin-arm64-dmg/stable)

Linux

[.deb](https://update.code.visualstudio.com/1.146.0/linux-deb-x64/stable)[.rpm](https://update.code.visualstudio.com/1.146.0/linux-rpm-x64/stable)[.tar.gz](https://update.code.visualstudio.com/1.146.0/linux-x64/stable)[Arm に関する説明](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions)[Snap](https://update.code.visualstudio.com/1.146.0/linux-snap-x64/stable)

## リリースのハイライト

本当に必要な作業に集中しましょう。インボックスモードでは、エージェントがモデルの比較を行う間も、重要なセッションを常に把握できます。チャットウィンドウや拡張機能を使って、タスクに合わせてエージェントのワークスペースをカスタマイズしましょう。

-   [インボックスモード（実験的機能）](#_inbox-mode-for-sessions-experimental): すべてのプロジェクトにわたって、注意が必要なセッションに集中し、その他のセッションは後回しにできます。
    
-   [モデル比較（プレビュー）](#_model-comparison-improvements-preview): Copilot Fusionを組み合わせて結果を比較したり、エージェントに比較処理を代行させたりできます。
 
-   [チャットウィンドウ（プレビュー）](#_chat-windows-preview): チャットを個別のウィンドウで表示し、タスクに合わせてチャット、エディタ、ターミナルの配置を自由に変更できます。
 
-   [エージェントウィンドウ内の拡張機能（実験的機能）](#_install-and-manage-extensions-in-the-agents-window-experimental): エージェントの機能をさらに充実させる拡張機能を探してインストールできます。
    
-   [ローカル・ハーネスの非推奨](#_copilot-harness-and-deprecation-of-the-local-harness): 2027年2月にローカル・ハーネスが削除される前に、Copilotハーネスへ移行してください。
 

プログラミングを楽しんでください！

すでにインストール済みですか？ VS Code の **更新の確認** をご利用ください。今後の機能については、[Insiders ビルド](https://code.visualstudio.com/insiders) をご利用ください。

* * *

## エージェント

### Copilot ハーネスとローカル・ハーネスの非推奨化

Copilot ハーネスは当社の最新のエージェント・ハーネスであり、[VS Code 1.143](https://code)以降、新規セッションのデフォルトとなっています。visualstudio.com/updates/v1_143#_copilot-harness-as-the-default)。これは Copilot SDK を基盤としており、Copilot 製品全体での動作、機能、改善を統一するための共通基盤となっています。 Copilot ハーネスのセッションは [エージェントホスト](https://code.visualstudio.com/docs/agents/concepts/agent-host) を通じて実行されるため、バックグラウンドで実行し続け、VS Code のエディタウィンドウとエージェントウィンドウの両方からアクセスできます。組織向けには、 Copilot ハーネスは、ローカル ハーネスにはない管理されたサンドボックスおよび権限ポリシーも適用します。

Copilot ハーネスをデフォルトとして使用する件についてフィードバックを寄せてくださった皆様に感謝申し上げます。皆様からのフィードバックはハーネスの体験を形作っており、今後も次のステップを進める上で指針となります。このリリースを以て、**ローカル ハーネスは非推奨となり、3 か月後（2027年2月）に削除されることとなりました**：

-   **今後 3 か月間**：ワークフローの移行中は引き続きローカル・ハーネスを使用できますが、 機能面での更新は行われません。新機能や改善点は Copilot ハーネスに重点が置かれるため、ローカル ハーネスでのサポートは保証されません。
-   **3 ヶ月後**：ローカル ハーネスは利用できなくなります。 VS Code 1.142で導入され、[Localハネスをデフォルトとして維持する](https://code.visualstudio.com/docs/enterprise/manage-ai-settings#_keep-local-harness-as-default)も削除されます。

新しいセッションではすでに Copilot ハーネスがデフォルトとなっているため、特に新しい操作を行う必要はないかもしれません。Copilot ハーネスを使用していることを確認するには、新しいセッションを開始した際にハーネスピッカーで **Copilot** を探してください：

![ハネスピッカーで Copilot が選択されているスクリーンショット。ホバーすると、Copilot SDK および Agent Host との統合に関する説明が表示されます。](/assets/updates/1_146/harness-copilot-description.webp)

現在も「Local」ハーネスをご利用の場合は、2027年2月までに「Copilot」ハーネスへ完全に移行する計画を立ててください。 [Local から Copilot ハーネスへの移行ガイド](https://code.visualstudio.com/docs/agents/run/move-to-copilot) では、カスタマイズの互換性、既存の Local 会話の継続、および組織内での展開と検証について解説しています。問題が発生した場合は、 [イシューを登録](https://github.com/microsoft/vscode/issues)してご連絡ください。

### セッションの受信トレイモード（実験的機能）

**設定**: sessions.list.inboxEnabled VS Codeで開く VS Codeで開く Insiders

各ワークスペースを確認しなくても、エージェントの状況を把握できます。インボックスモードでは、対応が必要な事項、まだ実行中の事項、マージの準備が整った事項を一元的に確認できます。

sessions.list.inboxEnabled VS Codeで開く VS Codeで開く Insiders 設定（デフォルトではオフ）を有効にし、エージェントウィンドウのセッションリストで **グループ化 > インボックスモード** を選択します。

![「エージェント」ウィンドウの「グループ化」メニューで「受信トレイモード」が選択されているスクリーンショット。](/assets/updates/1_146/sessions-inbox-mode.webp)

対応が必要なセッションは、**作業中**、**マージ準備完了**、**保留中**、**完了**の各グループの上部に表示されます。セッションが後回しにできる場合は、**インボックスから削除**、**保留にする**、または**スヌーズ**を使用して、一時的に脇に置いておきます。 気が変わった場合は、**取り消し**を選択してください。

セッションをインボックスから削除しても、アーカイブされるわけではありません。 アーカイブするには、****セッションを完了としてマーク****を選択してください。

![受信トレイ内の「処理中」、「マージ準備完了」、「保留中」、「完了」の各カテゴリの上部に、対応が必要なセッションが表示されているスクリーンショット。](/assets/updates/1_146/sessions-inbox.webp)

### セッション一覧のインライン操作（実験的機能）

**設定**: sessions.list.inlineActions VS Codeで開く VS Code Insidersで開く

「エージェント」ウィンドウのセッション一覧から、チェックの失敗を修正したり、レビューコメントに対応したりできます。この設定（デフォルトではオフ）を有効にすると、チェックの修正、コメントへの対応、またはその両方のインラインアクションが表示されます。

各アクションは、その行のセッションまたはネストされたセッションを開くことなく、バックグラウンドでリクエストを送信します。この設定は、Agent Merge を有効にしたり、アクションの権限を変更したりするものではありません。

![「Agents」ウィンドウのセッション一覧で、セッションの下に「コメントへの対応」ボタンが表示されているスクリーンショット。](/assets/updates/1_146/inline-session-actions.webp)

### チャットウィンドウ (プレビュー)

**設定**: sessions.chatWindows.enabled VS Codeで開く VS Code Insidersで開く

複数のチャットが同時に実行されている場合、それらをすべて1つの「エージェント」ウィンドウ内に収めると、チャットを切り替える必要が生じ、待ち受けているチャットを見失う可能性があります。チャットウィンドウを使用すると、 チャットを独立したウィンドウで開くことができ、そのウィンドウを、チャット、エディタ、ターミナルがタスクに合わせて配置できるように調整できます。

Stable でこのプレビュー機能を試すには、sessions.chatWindows.enabled を有効にしてください。VS Code で開く VS Code Insiders で開く。 VS Code Insiders ではデフォルトで有効になっていますが、Stable ではデフォルトで無効になっています。

[チャットウィンドウ](https://code.visualstudio.com/docs/agents/run/agents-window#_open-chats-in-separate-windows) について詳しくは、ドキュメントをご覧ください。

チャットを新しいウィンドウで開くには、セッション一覧でセッションまたはチャットを右クリックし、**[Open in]** > **[New Window]** を選択します。また、チャットを「Agents」ウィンドウからドラッグして新しいウィンドウを作成することもできます。**[Move to Main Window]** コマンドを使用すると、元のウィンドウに戻すことができます。

以下の動画では、チャットを個別のウィンドウで開く方法を紹介しています。

1つのチャットウィンドウには、1つ以上のセッションからの複数のチャットを表示できます。タイトルバーで別のセッションを選択するか、別のウィンドウからチャットをドラッグして移動するか、タイトルバーの左側にある**新しいセッション** (⌘N (Windows、Linux: Ctrl+N)) を選択して、そのウィンドウで新しいセッションを開始できます。 VS Codeを再起動しても、チャットウィンドウはチャットやエディタの内容を保持したまま再開されます。

チャットウィンドウ内のコンテンツは「パート」に整理されており、ワークフローに合わせて自由に配置を変更できます。

-   **パーツの移動:** カードの最上部に表示されるグリップをドラッグして、ウィンドウの別の側や別のパーツの隣に移動させます。また、**「パーツを左に移動」**、**「パーツを右に移動」**、**「パーツを上に移動」**、**「パーツを下に移動」** を使用することもできます。
-   **パーツ間のタブの移動:** タブを別のパーツにドラッグするか、パーツの端にドロップしてそのパーツを分割します。コマンドパレットから **エディタをパーツに移動** または **エディタを新しいパーツ（左／右／上／下）に移動** を使用しても同様の操作が可能です。 エディタタブをチャット入力欄にドラッグすると、そのエディタがコンテキストとしてチャットに添付されます。
-   **ターミナルの配置：** ターミナルをエディタの下またはチャットの下にドラッグすると、**ターミナルの位置**が **エディタの下** または **チャットの下** に設定されます。ウィンドウの下端にドロップすると、**全幅** に設定されます。また、ターミナルの **...** メニューから位置を変更することもできます。
-   **レイアウトの切り替え:** タイトルバーの **レイアウトの設定** を使用して、チャット、エディタ、またはその両方を、並べて表示するか、積み重ねて表示するかを選択できます。積み重ねレイアウトでは、**エージェント: チャット会話を切り替える** を選択すると、チャットが入力欄のみに折りたたまれ、ウィンドウの残りの領域をエディタが占めるようになります。

**開発者向け: チャットウィンドウのレイアウトをリセット** を使用すると、ウィンドウを最初に開いた状態に戻すことができます。

以下の動画では、チャットウィンドウの配置変更とレイアウトのリセット方法を紹介しています。

ご意見がございましたら、[イシューを登録](https://github.com/microsoft/vscode/issues) してください。

### Agents ウィンドウでの拡張機能のインストールと管理 (実験的機能)

「エージェントのカスタマイズ」の**「拡張機能」**セクションでは、エディタウィンドウでの有効設定を変更することなく、エージェントウィンドウで実行するインストール済み拡張機能を選択できます。以前は、拡張機能を追加するにはエディタウィンドウに切り替えてインストールする必要がありました。今回のリリースでは、エージェントウィンドウを離れることなく、拡張機能の検索、インストール、アンインストールを行うことができます：

-   **マーケットプレイスからのインストール**: 検索を行うと、マーケットプレイスも検索対象となり、まだインストールしていない一致する拡張機能が一覧表示されます。各拡張機能には、発行元、インストール数、評価が表示されます。 拡張機能をインストールすると、VS Code に追加され、エージェントウィンドウで有効になります。プレリリース版など、別のバージョンをインストールするには、**インストール**の横にあるドロップダウンメニューを使用してください。
-   **インストール前に動作しない機能を確認**: 「Agents」ウィンドウへの対応を宣言せずにビュー、デバッガー、ステータスバー項目、またはウォークスルーを提供する拡張機能については、サポートされていない機能の一覧を含む警告が表示されます。組織のポリシーによりインストールできない拡張機能などについては、その理由が表示されます。
-   **キーボードショートカットで開く**: ⇧⌘X（Windows、Linux では Ctrl+Shift+X）を押すか、**「拡張機能: 拡張機能の管理」**を実行してこのセクションを開きます。エディタウィンドウの「拡張機能」ビューのショートカットを変更した場合、そのショートカットは「エージェント」ウィンドウでも機能します。

![エージェントウィンドウの「拡張機能」セクションを示すスクリーンショット。](/assets/updates/1_146/extensions-agents-window.webp)

### モデル比較機能の改善（プレビュー）

**設定**: sessions.chat.compareAgents.tools.enabled VS Codeで開く VS Code Insidersで開く

[モデルの比較]（https://code.visualstudio.com/docs/agents/run/compare-models）を使用すると、エージェントウィンドウ内で複数のモデルに対して同じプロンプトを実行し、ジャッジ機能で結果を評価し、シンセサイザー機能で各モデルの長所を組み合わせることができます。今回のリリースでは、比較の設定、整理、自動化がより簡単になりました：

-   **チャット専用の応答を判定・合成**：ワークスペースを選択せずに、判定ツールと合成ツールを追加できます。**「合成」**を選択すると合成が開始され、元の試行を変更することなく新しいチャットが生成されます。
-   **Copilot Fusionの比較**：試行、ジャッジ、またはシンセサイザーに対して、Fusionおよびそのサポート対象の努力レベルを選択できます。
-   **エージェントによる評価の実行 (実験的機能)**: `sessions.chat.compareAgents.tools.enabled` を有効にすると、エージェントがモデルを検出し、比較を開始し、結果や会話の参照情報を読み取って、シナリオ横断的な知見を要約できるようになります。 これらのツールはデフォルトで無効になっており、「モデルの比較」が有効になっている必要があります。無効にしても、手動での比較は引き続き利用可能です。

### キャンバスの改善（プレビュー）

**設定**: chat.canvases.enabled VS Codeで開く VS Code Insidersで開く

[キャンバス](https://code.visualstudio.com/docs/agents/run/canvases) は、ユーザーと Copilot が共同で計画、ダッシュボード、その他の成果物を作成するための、共有されたインタラクティブな作業領域です。今回のリリースでは、権限の確認プロンプトが追加され、キャンバスの検出と継続性が改善されました:

-   **キャンバス拡張機能の権限**: Copilot ハネス セッションにおいて、キャンバス拡張機能は、フックなどの特権機能の初期化を行う前に、ユーザーの承認を求めます。
-   **キャンバスの検索と再開**: キャンバスメニューでは、**実行中**のキャンバスと、新しいインスタンスを作成できる**利用可能**なキャンバスが区別されます。[エージェント]ウィンドウでは、キャンバスの作成やインストールを行うアクションが**[さらに探す]**の下に表示されます。
-   **追加のプロンプトなしで再開**: 非アクティブな Copilot Harness セッションに戻った場合、そのキャンバスは追加のメッセージを送信することなく復元されます。
-   **よりスムーズな再接続**: キャンバスプロバイダーが再起動している間、最後のキャンバス画像は再接続インジケーターとともに表示されたままになります。
-   ****チャットとキャンバスを連動**：別々のチャットウィンドウでは、チャットがウィンドウから消えるとキャンバスのタブも閉じられますが、チャットが再び表示されるとタブも一緒に再開されます。また、ウィンドウの再読み込み後も、キャンバスはフォーカスを奪うことなく復元されます。

### コンピュータ共有の設定（実験的機能）

**設定**: sessions.chat.experimental.remoteEnvironmentsThisComputer VS Codeで開く VS Code Insidersで開く

「エージェント」ウィンドウ内の「リモート環境」エディタは、リモート接続を一元的に管理する場所です。今回のリリースでは、このコンピュータを他のクライアントとどのように共有するかを管理できるようになりました。共有が有効かどうかにかかわらず、ローカルセッションはこのコンピュータ上で直接実行され続けます。

GitHub Environments または Dev Tunnels を通じてこのコンピュータを共有するか、共有を無効にすることができます。 また、他のクライアントに表示されるコンピュータ名を変更することもできます。

エディタは、チャット内の環境ピッカー、コマンドパレット、またはタイトルバーの **リモート接続** メニュー（アンテナアイコン）から **リモート環境の管理** を選択して開くことができます。このメニューからも、同じ共有オプションを利用できます。

![「リモート環境」エディタの「このコンピュータ」セクションを示すスクリーンショット。**dev-workstation**という名前でDev Tunnels経由で共有されており、「その他の環境」テーブルの上部に表示されています。](/assets/updates/1_146/remote-environments-this-computer.webp)

[ホストをリモートアクセス用に公開する方法](https://code.visualstudio.com/docs/agents/run/remote-agent-sessions#_make-a-host-available-for-remote-access)について詳しくはこちらをご覧ください。

### 仮想リポジトリに対するエージェントホストのサポート

VS Code は仮想ワークスペースをサポートしており、[GitHub リポジトリをクローンせずに表示する](https://code.visualstudio.com/docs/sourcecontrol/github#_github-repositories-extension) などの操作が可能です。

以前は、Copilot ハネスは仮想リポジトリでは動作しませんでした。今回のリリースでは、仮想リポジトリのサポートが追加されたため、ローカルフォルダの場合と同様に、Copilot の機能やワークフローを利用できるようになりました。

* * *

## チャット

### VS Code 内で Copilot CLI セッションを継続する（実験的機能）

VS Code 外のターミナルで [GitHub Copilot CLI](https://github.com/features/copilot/cli) を使用している場合、そのセッションを VS Code 内に移行して作業を継続できるようになりました。

CLI で `/code` を入力するか、VS Code Insiders の場合は `/code-insiders` を入力してください。CLI が終了し、 、VS Code がそのセッションのフォルダーに対応するウィンドウの「チャット」ビューで同じセッションを開きます（VS Code が実行されていない場合は起動されます）。セッションの会話履歴、モデルと推論の進捗状況、モード、および権限は保持されます。

`/code` コマンドは、Copilot CLI において実験的な機能です。 Copilot CLI 1.0.107 以降が必要で、実験的機能が有効になっている必要があります（`/settings experimental on`）。`--allow-tool` や、セッションに対して付与した承認など、CLI プロセスにのみ適用される権限は引き継がれず、CLI は引き継ぎを行う前にそれらを一覧表示します。別の Copilot CLI プロセスでそのセッションがまだ開かれている場合、VS Code は開く前に確認を求めます。CLI に戻るには、CLI が引き継ぎを行う際に表示する `copilot --resume` コマンドを実行してください。

### バックグラウンド送信アクションの設定可能なショートカット

**設定**: chat.sendInBackgroundTip.enabled VS Code で開く VS Code Insiders で開く

エージェントウィンドウのコンポーザーで ⌘Enter（Windows、Linux では Ctrl+Enter）を押すと、セッションを開かずに新しいセッションを開始できます。 **「キーボードショートカット」**で、**「Chat: バックグラウンドで送信」**のショートカットを再割り当てまたは削除できます。

設定したショートカットと**「キーボードショートカット」**へのリンクを表示するオプションのヒントがあります。chat.sendInBackgroundTip.enabled で有効にします。VS Code で開く VS Code Insiders (実験的機能、デフォルトではオフ)。

* * *

## MCP

### MCP 経由のスキル (プレビュー)

**設定**: chat.agentHost.mcpSkills.enabled VS Code で開く VS Code Insiders で開く

今回の VS Code のリリースでは、SEP-2640 [Skills over MCP](https://github.com/modelcontextprotocol/ext-skills) のサポートが追加され、MCP サーバーがモデルにスキルを自動的に提供できるようになりました。

スキルを提供する MCP サーバーに初めて接続する際、モデルコンテキストへのスキルの受け入れを許可するよう求められます。その後、モデルはこれらのスキルとやり取りできるようになり、エージェントのカスタマイズエディタの **スキル** タブでそれらを確認できます。

* * *

## 信頼性とセキュリティ

### 権限プロンプトの改善

以前の Copilot ハーネスでは、Web フェッチ、ターミナルコマンド、ファイル読み取りなどの操作に対して、過度に広範なツールレベルの許可が提案されていました。 たとえば、URLを取得する際のデフォルトのアクションは「このセッションで許可」であり、これによりモデルはそのセッション中に任意のURLにアクセスできるようになっていました。

現在、権限プロンプトはよりきめ細かくなり、デフォルトで特定のドメイン、コマンド、ディレクトリに対する許可が追加されるようになりました。

### サンドボックス内での環境変数のマスキング

**設定**: chat.agent.sandbox.credentials.envVars VS Codeで開く VS Codeで開く Insiders

機密情報を保護するために、サンドボックス化されたセッション内でどの環境変数をマスクし、エージェントツールから非表示にするかを設定できます。サンドボックス化されたツールにはプレースホルダーが渡され、実際の値は承認された HTTPS 宛先にのみ提供されます。

この例では、サンドボックス化により `API_TOKEN` 環境変数の値がプレースホルダーに置き換えられます。実際の値が復元されるのは、`injectHosts` にリストされているホスト（ここでは `api.example.com`）への送信 HTTPS リクエストの場合のみです。その他のホストへのリクエストではプレースホルダーが保持され、実際の値は渡されません。

```
{
  "chat.agent.sandbox.credentials.envVars": {
    "API_TOKEN": {
 "injectHosts": ["api.example.com"]
    }
  }
}
```

設定には、シークレット値ではなく変数名を入力してください。Windows では、環境変数のマスキングを行うにはローカルネットワークへのアクセスが必要です。macOS および Windows では、OS による証明書の信頼を必要とするツールについては、サンドボックスの CA 証明書を信頼してください。

詳細については、[サンドボックスのネットワークアクセス](https://code.visualstudio.com/docs/agents/run/agent-sandboxing#_configure-network-access) および [証明書の信頼](https://code.visualstudio.com/docs/agents/run/agent-sandboxing#_trust-the-sandbox-ca-certificate-on-windows-and-macos) を参照してください。

### チャット入力欄のサンドボックス状態

[権限]メニューを開かなくても、ターミナルのサンドボックス機能が有効になっているかどうかを確認できます。エディタとエージェントウィンドウの両方で、**「ターミナルのサンドボックス」**がオンになっている場合、空のチャット入力欄に **(サンドボックス有効)** と表示されます。チャットを切り替えたり設定を変更したりしても、このプレースホルダーは常に最新の状態に更新されます。

![チャット入力欄のプレースホルダーに「Chat with Copilot (sandbox enabled)」と表示されているスクリーンショット。](/assets/updates/1_146/sandbox-enabled-placeholder.webp)

* * *

## アクセシビリティ

### 「ウェルカム」ページでのキーボードフォーカスの可視化

「ウェルカム」ページでは、ページ自体がキーボードフォーカスを持っているときに輪郭線が表示されるため、ナビゲーション中に現在位置を確認できます。スクリーンリーダーのユーザーも引き続きこのページにフォーカスを合わせることができます。

* * *

## エディターの操作性

### Mermaid 12 のサポート

VS Code では、チャット、Markdown プレビュー、およびノートブック内で Mermaid ダイアグラムをレンダリングする際、Mermaid 12 を使用するようになりました。ユースケース図を含む新しいダイアグラムタイプが利用可能になり、更新された自動レイアウト機能の恩恵を受けることができます。

以前：Mermaid 11

現在：Mermaid 12

![Mermaid 11 によるレンダリングを示すスクリーンショット。旧式のフローチャートおよびサブグラフのレイアウトと、ユースケース図のエラーが表示されています。](/assets/updates/1_146/mermaid-11.png)

![Mermaid 12 によるレンダリング画面のスクリーンショット。更新されたフローチャートおよびサブグラフのレイアウトと、正しくレンダリングされたユースケース図が表示されています。](/assets/updates/1_146/mermaid-12.png)

### 統合ブラウザ内のローカル HTML ファイルのアドレスをコピーする

[統合ブラウザ](https://code.visualstudio.com/docs/debugtest/integrated-browser)でローカルHTMLファイルをプレビューする際、その `file://` アドレスを選択してコピーし、外部のブラウザやターミナルに貼り付けることができます。

* * *

## エンタープライズ

### エンタープライズプロキシ経由の Copilot セッション

Copilot セッションは、ローカルで実行する場合、 WSL内、またはローカルのDev Container内で実行される場合、CopilotセッションはVS Codeの[プロキシ設定](https://code.visualstudio.com/docs/setup/network)に従います。組織のルーティングルールでは、リクエストを単一のプロキシ経由に強制するのではなく、宛先ごとに異なるプロキシや直接接続を選択できます。

### ポリシー制限に関する組織向けヘルプリンク

組織は、[エンタープライズ管理設定](https://code.visualstudio.com/docs/enterprise/manage-ai-settings）で `communication.support.url` を設定することで、ブロックされた開発者を独自のヘルプページに誘導できます。この URL には、従業員が組織の Copilot 利用ポリシーやサポートガイダンスを確認できるページを指定することをお勧めします。有効な絶対 HTTP または HTTPS URL を指定すると、エージェントの無効化や組織によるモデルの無効化など、サポートされているポリシー制限に **管理者に連絡** リンクが追加されます。

たとえば、組織の管理設定では次のように指定します。

```
{
  "communication": {
    "support": {
 "url": "https://ai.example.com/your-companys-ai-landing-support-page"
    }
  }
}
```

### キャンバス拡張機能に対するエンタープライズ制御

Copilotハネスセッションでは、`strictPluginOnlyCustomization` により、スタンドアロンのスキル、エージェント、フック、および MCP サーバーはすでに制限されていました。これに加え、ユーザー、プロジェクト、およびセッションディレクトリからのスタンドアロンのキャンバス拡張機能もブロックされるようになったため、管理者は、使用されるキャンバス拡張機能がすべて適格なプラグインから提供されることを必須に設定できるようになりました。

[エンタープライズ管理設定](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started) では、`true` を指定することで、サポートされているすべてのスタンドアロンカテゴリをブロックしつつ、適格なプラグインコンテンツのみを許可できます：

```
{
  "strictPluginOnlyCustomization": true
}
```

特定のカテゴリのみを制限するには、`true` を `"skills"`、`"agents"`、`"hooks"`、`"mcp"`、`"extensions"` のいずれかを含むリストに置き換えてください。

> **注:** VS Code のブール値のみの `ChatStrictPluginOnlyCustomization` ポリシーは、キャンバス拡張機能を制御しません。これらは Copilot SDK によって管理されるため、上記の Copilot 管理設定を使用してください。

ポリシーの詳細については、[エンタープライズ管理設定のリファレンス](https://docs.github.com/en/copilot/reference/enterprise-administrators/enterprise-managed-settings)を参照してください。

* * *

## 非推奨の機能と設定

### このリリースでの新たな非推奨項目

-   [ローカル・ハーネスは非推奨となりました](#_copilot-harness-and-deprecation-of-the-local-harness) 2027年2月に削除される予定です。

### 今後非推奨となる機能

なし

* * *

## 主な修正点

### エージェント編集メトリクスの過大計上を修正

[GitHub Copilot 使用状況メトリクス](https://docs.github.com/en/copilot/reference/copilot-usage-metrics) を通じて報告されるエージェント編集メトリクスにおいて、編集間の変更されていないテキストが、新規に追加または削除されたコードとしてカウントされることがなくなりました。

* * *

## 感謝

### 課題追跡

課題追跡への貢献：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

### プルリクエスト

`vscode`への貢献：

-   [@Aditya-kumar-yadav (Aditya Kumar Yadav)](https://github.com/Aditya-kumar-yadav): ターミナル: collapseTildePath の部分文字列の競合と、ホームディレクトリの完全な折り畳みの修正 [PR #343203](https://github.com/microsoft/vscode/pull/343203)
-   [@alok-108 (Alok Pandey)](https://github.com/alok-108): デバッグ：例外ブレークポイントのモードをデバッグアダプターに送信 [PR #341972](https://github.com/microsoft/vscode/pull/341972)
-   [@andysalerno (Andy Salerno)](https://github.com/andysalerno): エージェントホストのチャットにCopilot Fusionの推論を表示する [PR #346434](https://github.com/microsoft/vscode/pull/346434)
-   [@Carrotstudiosoftwarehouse (Carrotstudio.it)](https://github.com/Carrotstudiosoftwarehouse): プロンプトのURL確認ダイアログで完全なURIにアクセス可能な状態を維持する [PR #332937](https://github.com/microsoft/vscode/pull/332937)
-   [@Chethan616 (Chethan Krishna)](https://github.com/Chethan616): インラインチャットウィジェットの下にある空白部分をクリックした際にターミナルにフォーカスが移らない問題を修正 [PR #334804](https://github.com/microsoft/vscode/pull/334804)
-   [@ericbaum (Eric Baum)](https://github.com/ericbaum): mcp: ホームディレクトリ検出アダプタでURIベースのdefaultCwdを使用 [PR #345650](https://github.com/microsoft/vscode/pull/345650)
-   [@genius-0963 (Saurabh Sungh)](https://github.com/genius-0963): #345692 の修正：新しい下書きセッションに置き換える際、開いている下書きエディタを維持する [PR #345807](https://github.com/microsoft/vscode/pull/345807)
-   [@LuisPeixoto (Luis Peixoto)](https://github.com/LuisPeixoto): 「フック」セクションの説明を修正 [PR #346593](https://github.com/microsoft/vscode/pull/346593)
-   [@maxteneff (Max Bartenev)](https://github.com/maxteneff): すでに開かれているターミナルにおいて parentTerminal が無視される問題を修正 [PR #342420](https://github.com/microsoft/vscode/pull/342420)
-   [@mcumming (Michael Cummings (MSFT))](https://github.com/mcumming)
    -   マーケットプレイスでの403エラーによりログインが繰り返し求められる問題を修正 [PR #343686](https://github.com/microsoft/vscode/pull/343686)
    -   プライベート・マーケットプレイスの拡張機能ブロック：ワークベンチ用のユーザー体験を追加し、アクセス制御を更新 [PR #341049](https://github.com/microsoft/vscode/pull/341049)
    -   リダイレクト時にオリジンをまたいでリクエストの認証情報を転送しないようにする [PR #343690](https://github.com/microsoft/vscode/pull/343690)
    -   マーケットプレイスの保護リソース検出のキャッシュおよび統合 [PR #343687](https://github.com/microsoft/vscode/pull/343687)
-   [@minwookshin (Minwook Shin)](https://github.com/minwookshin): 明示的なインライン編集ガターメニューの表示設定を反映 [PR #339575](https://github.com/microsoft/vscode/pull/339575)
-   [@monil-patel](https://github.com/monil-patel): VS Codeの設定を通じてPolicy Helperの登録を可能にする [PR #345712](https://github.com/microsoft/vscode/pull/345712)
-   [@nkramber](https://github.com/nkramber)
    -   ターミナルエディタを別のエディタグループに移動した後も動作を維持する [PR #339488](https://github.com/microsoft/vscode/pull/339488)
    -   PATHに設定されていない場合でも、ログインシェルのパスからターミナルプロファイルを見つけられるように [PR #339556](https://github.com/microsoft/vscode/pull/339556)
-   [@RealThanhNguyxn (Thanh Nguyen)](https://github.com/RealThanhNguyxn): プロセスタスクのコマンドパス内の未解決変数を保持する (#160891 を修正) [PR #316369](https://github.com/microsoft/vscode/pull/316369)
-   [@rksharma-owg (RKS)](https://github.com/rksharma-owg)
    -   タスク：プロバイダーのファンアウトを防ぐため、ITaskHandleDTO を通じてタスクタイプを渡す [PR #336159](https://github.com/microsoft/vscode/pull/336159)
    -   完了通知の前に最終タスクマーカーをフラッシュする [PR #339551](https://github.com/microsoft/vscode/pull/339551)
    -   同一リソースからの個別のタスクエラーを保持する [PR #339550](https://github.com/microsoft/vscode/pull/339550)
-   [@ShehabSherif0 (Shehab Sherif)](https://github.com/ShehabSherif0): アクセシビリティシグナルのプロパティ変更検出における重複した条件を修正 [PR #303604](https://github.com/microsoft/vscode/pull/303604)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   パフォーマンス: 多数のテストを実行する際の Test Explorer の動作を高速化 [PR #345896](https://github.com/microsoft/vscode/pull/345896)
    -   修正：ノートブックのテキスト差分エディタにおけるメモリリーク [PR #331805](https://github.com/microsoft/vscode/pull/331805)
    -   修正：カラーピッカーのメモリリーク [PR #345461](https://github.com/microsoft/vscode/pull/345461)
    -   修正: aiSearchModel におけるメモリリーク [PR #342528](https://github.com/microsoft/vscode/pull/342528)
    -   修正: ファイル検索リスナーのメモリリーク [PR #345781](https://github.com/microsoft/vscode/pull/345781)
    -   修正: ターミナル検索ウィジェットにおけるメモリリーク [PR #346139](https://github.com/microsoft/vscode/pull/346139)
    -   修正: 検索進行状況エミッタにおけるメモリリーク [PR #346126](https://github.com/microsoft/vscode/pull/346126)
    -   パフォーマンス: メモリ使用量を 24 kB 削減 [PR #342397](https://github.com/microsoft/vscode/pull/342397)
    -   修正: タスクプロバイダーのカウンターに関するバグ [PR #339387](https://github.com/microsoft/vscode/pull/339387)
    -   修正: マーカーリソースマップにおけるメモリリーク [PR #346501](https://github.com/microsoft/vscode/pull/346501)
    -   修正：debouncedObservable におけるメモリリーク [PR #346498](https://github.com/microsoft/vscode/pull/346498)
    -   修正：キーバインディング検索におけるメモリリーク [PR #346268](https://github.com/microsoft/vscode/pull/346268)
-   [@sumit-2007-git (Sumit kumar)](https://github.com/sumit-2007-git): 修正(チャット): 幅の狭いチャットでの文字数オーバーフローを防ぐため、プロンプトの候補タイトルを短縮 (#275257 を修正) [PR #345436](https://github.com/microsoft/vscode/pull/345436)
-   [@vscodebot-pr (VS Code PR Bot)](https://github.com/vscodebot-pr)
    -   修正: レンダラーがアタッチされる前のターミナルのスクロール操作を制限 (#339313 を修正) [PR #339330](https://github.com/microsoft/vscode/pull/339330)
    -   修正：セルの破棄中にノートブックのカーソル選択表示が行われないようにする（#328986 を修正） [PR #329000](https://github.com/microsoft/vscode/pull/329000)
-   [@xingsy97 (xingsy97)](https://github.com/xingsy97): ターミナル: 有効なスタイルシーケンスが誤って拒否されるタイプアヘッド予測の不具合を修正 [PR #305103](https://github.com/microsoft/vscode/pull/305103)
-   [@zohnannor](https://github.com/zohnannor): 修正: ミニマップの不透明度が常に維持されてしまうという回帰不具合を解消 [PR #311689](https://github.com/microsoft/vscode/pull/311689)

* * *

新機能がリリースされ次第、すぐに試してくださる皆様に心より感謝しております。ぜひ定期的にこのページをチェックして、新機能についてご確認ください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [アップデート](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
