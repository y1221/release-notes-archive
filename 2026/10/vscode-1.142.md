---
product: VSCode
version: 1.142.0
release_title: Visual Studio Code 1.142
release_date: 2026-10-14
source_url: "https://code.visualstudio.com/updates/v1_142"
archived_at: 2026-10-15
---

# Visual Studio Code 1.142

# Visual Studio Code 1.142

2026年10月14日リリース 安定版

## 1.142.0のダウンロード

Windows

[x64](https://update.code.visualstudio.com/1.142.0/win32-x64-user/stable)[Arm64](https://update.code.visualstudio.com/1.142.0/win32-arm64-user/stable)

macOS

[ユニバーサル](https://update.code.visualstudio.com/1.142.0/darwin-universal-dmg/stable)[Intel](https://update.code.visualstudio.com/1.142.0/darwin-x64-dmg/stable)[Apple silicon](https://update.code.visualstudio.com/1.142.0/darwin-arm64-dmg/stable)

Linux

[.deb](https://update.code.visualstudio.com/1.142.0/linux-deb-x64/stable)[.rpm](https://update.code.visualstudio.com/1.142.0/linux-rpm-x64/stable)[.tar.gz](https://update.code.visualstudio.com/1.142.0/linux-x64/stable)[Arm アーキテクチャ](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions)[Snap](https://update.code.visualstudio.com/1.142.0/linux-snap-x64/stable)

すでにインストール済みですか？ VS Code の **更新の確認** をご利用ください。今後の機能については、[Insiders ビルド](https://code.visualstudio.com/insiders) をご利用ください。

## リリースのハイライト

今回のリリースでは、エージェントワークフロー向けの共有キャンバスが追加され、コンテキストを失うことなくチャットを移動できるようになりました。また、Markdown エディタが拡張され、管理者はエージェントの権限をより細かく制御できるようになりました。

-   [キャンバス (プレビュー)](#_canvases-preview): 視覚的でインタラクティブなキャンバスを使用して、チャット以外の場面でもエージェントと共同作業を行えます。
    
-   [チャットの移動](#_move-chats-between-folders-and-worktrees): 会話履歴を失うことなく、別のフォルダや新しい Git ワークツリーでチャットを継続できます。
 
-   [Markdown エディタ](#_markdown-editor): 画像の貼り付け、ファイルリンクの名称変更、ブレッドクラムナビゲーションなどの機能を活用し、Markdown ファイルの編集をより効率的に行えます。
 
-   [エンタープライズ管理](#_enterprise): エージェントのサンドボックス化や権限ポリシーを適用すると同時に、開発者が使用できる権限モードを制御できます。
    
-   [再設計されたモデルピッカー](#_redesigned-model-picker): CopilotとBYOK（ユーザー提供）モデルの間を素早く切り替え、エフォートレベルやコンテキストウィンドウをより直感的に管理できます。
 

* * *

## エージェント

### Copilotハネス

Copilot ハーネスは、Copilot SDK によって駆動されています。Copilot SDK は、Copilot 製品全体で動作、機能、および改善を統一するための共通基盤です。 VS Code では、Copilot ハーネスは [エージェントホスト](https://code.visualstudio.com/docs/agents/concepts/agent-host) を通じてセッションを実行します。これにより、セッションはバックグラウンドで継続され、VS Code のエディタウィンドウと「エージェント」ウィンドウの両方からアクセスできるようになります。

Copilot ハーネスは、チャット入力画面のハーネスピッカーから利用可能でした。非常に好意的で有益なフィードバックを多数いただいたことを受け、VS Code での新規セッションのデフォルトハーネスとして順次展開しています。 新しいセッションを開始する際、ハーネスピッカーに **Copilot** と表示されていれば、そのセッションでは Copilot ハーネスが使用されることを示しています。

![「ローカル」および「Copilot」ハーネスのホバー説明が表示されたハーネスピッカーのスクリーンショット。](/assets/updates/1_142/harness-hover.webp)

フィードバックを寄せてくださった皆様、ありがとうございます。皆様からの声を積極的に活用し、ユーザー体験の改善に努めています。その一例として、Copilot ハーネスに組み込みエージェントとして **Ask** を再導入しました。皆様からのフィードバックにより、専用の読み取り専用機能には依然として価値があることがわかりました。**Ask** を使用するには、エージェントピッカーから **Ask** を選択してください。

[Copilot ハーネスの使い方](https://code.visualstudio.com/docs/agents/run/agent-harnesses#use-the-copilot-harness)をご覧ください。また、[エージェントホストのブログ記事](https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture)でアーキテクチャやワークフローについて詳しくご確認ください。 フィードバックやリクエストがある場合は、[イシューを登録してください](https://github.com/microsoft/vscode/issues)。

### キャンバス (プレビュー)

**設定**: chat.canvases.enabled VS Code で開く VS Code Insiders で開く

キャンバスは、エージェントと共同作業を行うためのインタラクティブなインターフェースです。キャンバスはチャットの横に開き、プロンプトのみによる調整ではなく、あなたとエージェントが同じ成果物を確認・更新することができます。

たとえば、カンバン・キャンバスを使用して、実装作業の計画や進捗管理を行うことができます。ユーザーはカードを直接作成・移動できる一方、エージェントは機能をタスクに分割したり、ステータスを更新したり、新たに発見された作業を追加したりできます。キャンバスは VS Code のエディタウィンドウとエージェントウィンドウの両方で動作し、 、またキャンバス拡張機能は [GitHub Copilot アプリ](https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-canvas-extensions）でもキャンバス拡張機能がサポートされています。

![エディター内のタスクと列が表示されたカンバン・キャンバスのスクリーンショット。](/assets/updates/1_142/kanban-canvas.webp)

キャンバスは、Copilot ハーネスを使用するローカル セッション向けに、VS Code デスクトップ アプリのプレビュー版で利用可能です。chat.canvases.enabled を有効にし、VS Code Insiders で VS Code を開き、Copilot ハーネスを使用して新しいセッションを開始してください。

各キャンバスは、キャンバス拡張機能によって提供されます。開始するには、次の2つの方法があります：

-   **キャンバス拡張機能を作成する**：チャット入力欄に `/create-canvas` と入力し、プロジェクトで希望するユーザーインターフェースを説明します。これにより、スキルがワークスペース内にキャンバス拡張機能を作成し、そのキャンバスを開きます。
    
-   **チャットプラグインをインストールする**: 現時点では、GitHub Copilot アプリを通じて [キャンバス拡張機能を含むチャットプラグイン](https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-canvas-extensions) をインストールしてください。 その後、VS Code に切り替えて、エージェントに利用可能なキャンバスの一覧を表示させ、そのうちの 1 つを開いてもらいます。
 

キャンバス拡張機能をインストールした後、エージェントウィンドウの **タブの追加 (+)** > **キャンバス** から、利用可能なキャンバスを開くこともできます。

[コミュニティ提供のサンプルキャンバス拡張機能](https://awesome-copilot.github.com/extensions/) を試してインストールしてみてください。

VS Code ドキュメントで [キャンバスのサポート](https://code.visualstudio.com/docs/agents/run/agent-harnesses#_use-canvases-with-the-copilot-harness) について詳しく確認してください。

### フォルダやワークツリー間のチャットの移動

以前は、あるフォルダでタスクの調査を開始した後、それを別の Git ワークツリーで実装したり、別のリポジトリで作業を続けたりする場合、新しいチャットを開始してコンテキストを再構築する必要がありました。

[エージェントウィンドウ](https://code.visualstudio.com/docs/agents/run/agents-window)では、 エージェントに現在のチャットを別のフォルダや新しい Git ワークツリーに移動するよう依頼できるようになり、会話履歴はそのまま保持されます。ワークスペースの変更は、すでにワークスペースが設定されているチャットでも機能し、エージェントは新しいワークツリー内で作業を分離することができます。

エージェントには、次のような自然言語のプロンプトで依頼します。

```
実装する前に、現在のリポジトリの新しいGitワークツリーでこのタスクを続行してください。
```

エージェントは現在のターンを終了し、チャットを移動させ、ワークスペースが変更された際に通知を表示します。その後、新しい場所で自動的にタスクを続行します。編集やコマンドは新しい場所で実行され、元のチェックアウトは変更されません。

この移動機能は、Codex ハーネスまたはインタラクティブモードの Codex を使用し、1 つのチャット と1つのローカルフォルダを含むエージェントセッションで利用可能です。前提条件や、新しい場所で利用可能なファイルの詳細については、[チャットを別のフォルダまたはワークツリーに移動する](https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions#move-a-chat-to-another-folder-or-worktree) を参照してください。

### 「エージェント」ウィンドウのセッション単位のレイアウト (実験的機能)

**設定**: sessions.experimental.layoutScope VS Code で開く VS Code Insiders で開く (「エージェント」ウィンドウのみ)

以前は、エージェントウィンドウでセッションを切り替えると、VS Code はエディタの表示状態、詳細、パネルの表示状態などのレイアウト設定をセッション間で共有していました。VS Code がワークスペースごとにレイアウトを記憶することに慣れている場合、セッション間でレイアウトを共有することは作業の妨げになる可能性があります。

新しい実験的設定 `sessions.experimental.layoutScope`（VS Code で開く、VS Code Insiders）を使用すると、各セッションがレイアウトのどの部分を記憶するかを指定できます。設定を変更した後は、ウィンドウを再読み込みしてください。以下の値がサポートされています：

-   `session-shared` (デフォルト): 現在の動作です。セッションとそのネストされたセッションは、同じエディタと選択されたパネルビューを共有します。エディタ、詳細、および下部パネルの表示状態は、既存のワークスペースセッション間で共有されます。
 
-   `chat-shared`: セッションおよびそのネストされた各セッションは、独自のエディタと選択されたパネルビューを維持しますが、エディタ、詳細、および下部パネルの表示状態は、既存のワークスペースセッション間で共有されたままになります。
 
-   `chat`: セッションおよびそのネストされた各セッションは、独自のエディタと詳細の構成、および下部パネルの表示状態も維持します。
    

ウィンドウのサイズ、ペインのサイズ、およびサイドバーは、現時点ではウィンドウ全体で共有されたままです。

### 「エージェント」ウィンドウのパネルレイアウトをカスタマイズする

「エージェント」ウィンドウで、下部パネルの配置方法を選択できるようになりました。パネルタブを右クリックし、**パネルの配置**を選択して、 以下のレイアウトのいずれかを選択します：

-   `Center`：パネルをチャット領域の下に中央揃えにし、サイドペインのためのスペースを広く確保します。
 
-   `Justify`：パネルをウィンドウの全幅に広げます。
 

選択内容はプロファイルごとに保存され、パネルを最大化または元に戻しても維持されます。

* * *

## チャット

### アクティブなハーネスを素早く特定

チャットのタイトルには、**Copilot** や **Codex** などのアクティブなハーネスの名前が表示されるため、ハーネスピッカーを開いたり、セッションリストにカーソルを合わせたりすることなく、どのハーネスかを確認できます。

![エディタウィンドウに 2 つのチャットセッションが表示されているスクリーンショット。各チャットタイトルの前に、Codex および Copilot のハーネス名が表示されています。](/assets/updates/1_142/harness-title.webp)

### バックグラウンドシェルの停止

[Copilot ハーネス](#_copilot-harness) セッションでは、チャット入力欄の上にある [バックグラウンドシェル ピル](https://code.visualstudio.com/updates/v1_141#_keep-track-of-background-shells)には、エージェントがバックグラウンドで実行中のコマンドが一覧表示されます。それらのコマンドのうち、再実行したいテスト実行や、予想以上に長く実行されているコマンドなど、不要になったものがあれば、完了を待つ代わりに停止させることができます。

****バックグラウンドシェル****ピル**を選択し、シェルを選択して詳細を表示した後、コマンドの横にある****シェルを停止****を選択します。そのコマンドのみが終了し、シェルはリストから削除されます。****シェルを停止****にはキーボードからアクセスでき、スクリーンリーダーはシェルが停止したことを読み上げます。

シェルの停止は、エージェントが現在のリクエストの一部として実行している**アタッチされたシェル**でのみ利用可能です。デタッチされたシェルはエージェントとは独立して実行されるため、このインターフェースからは停止できません。

シェルの詳細画面では、リスト上で表示が切り詰められている場合でも、各シェルのコマンドの上に完全な説明が表示されます。長い出力も切り捨てられなくなり、シェルの詳細画面とチャット応答内のターミナル出力の両方で、以前の出力をスクロールして確認できるようになりました。

### BYOKカスタムエンドポイント向けのステートフル応答

BYOK（Bring-Your-Own-Key）モデルでステートレスな Responses API を使用している場合は、`chatLanguageModels.json` 内のそのモデルエントリで `"statefulResponses": false` を設定することで、各リクエストごとに完全な会話履歴を送信できるようになります。

詳細については、[カスタムエンドポイントの設定](https://code.visualstudio.com/docs/agent-customization/language-models#stateful-responses-api-endpoints)を参照してください。

### ローカルハーネスにおける Windows サンドボックス機能のサポート終了

ローカルエージェントセッションにおけるターミナルコマンドの Windows サンドボックス機能は非推奨となりました。Windows でのサンドボックス化されたコマンド実行には、エージェントホストセッションを使用してください。詳細については、[エージェントホストのサンドボックスに関するドキュメント](https://code.visualstudio.com/docs/agents/run/agent-sandboxing)を参照してください。

### モデルピッカーの刷新

CopilotおよびBYOK（Bring-Your-Own-Key）プロバイダーは、さまざまなタスクごとにそれぞれの強みを持つ多数のモデルを提供しています。刷新されたモデルピッカーにより、業務の変化に応じてモデルの選択や切り替えがより簡単に行えるようになりました。

モデルピッカーでは、タブ形式のインターフェースを採用し、Copilot モデルと BYOK モデルを区別しています。

![「Copilot」タブが選択され、モデル一覧が表示された、再設計されたモデルピッカーのスクリーンショット。選択されたモデルには、その思考レベルとコンテキストサイズが表示されています。](/assets/updates/1_142/model-picker-list.webp)

リスト内のモデルにカーソルを合わせると、そのモデルの推論レベルやコンテキストウィンドウのサイズをさらに設定できます。

![モデルピッカー内のモデル詳細ビューを示すスクリーンショット。推論レベルとコンテキストサイズを選択するオプションが表示されています。](/assets/updates/1_142/model-picker-reasoning-effort.webp)

* * *

## Markdown エディタ

### Markdown ソースに近い編集モード

Markdown を編集する際、ソースの各行が視覚的に別々の行として表示されるため、ドキュメントの構造が把握しやすくなります。読み取り専用モードでは、従来通り Markdown がレンダリングされます。

### 画像の貼り付け

スクリーンショットなどの画像をMarkdownドキュメントに追加するには、テキストエディタで既に可能だったように、Markdownエディタに直接貼り付けるだけです。これにより、手動でファイルを保存して挿入する手間なく、視覚的なコンテンツを簡単に組み込むことができます。

### ファイルリンクの名前変更

Markdown エディタは **シンボルの名前変更** (F2) をサポートするようになりました。これにより、ファイルリンクの名前をその場で変更でき、変更内容がドキュメント全体に反映されます。

### アウトラインとブレッドクラム

Markdownエディタはアウトラインビューやブレッドクラムと連携しており、見出しの構造を確認したり、セクションへジャンプしたりするのが容易になりました。

### コードブロックのコピー

Markdown プレビューと同様に、Markdown エディタ内のコードブロックにも、カーソルを合わせると「コピー」ボタンが表示されます。これにより、誤って内容を編集してしまうことなく、複数行にわたるコード断片を簡単にコピーできます。

* * *

## エディターの操作性

### 異なるプロバイダーからのドキュメントハイライトの統合

**設定**: editor.occurrencesHighlightFromAllProviders VS Code で開く VS Code Insiders で開く

editor.occurrencesHighlightFromAllProviders を有効にすると、すべてのプロバイダーからのドキュメントのハイライトを統合できます。デフォルトでは、VS Code は優先順位が最も高いプロバイダーからのハイライトのみを使用します。

* * *

## 言語

### Python

このリリースでは、Python Environments Extension における環境の検出、インタプリタの選択、およびターミナルの起動に関する修正が含まれています。

-   **環境の検出:** `uv` によって管理されている Python インストールが、**グローバル** セクションに表示されるようになりました。 パスでインタプリタを選択すると、その仮想環境が環境リストに追加され、VS Code 外で仮想環境を削除すると、選択内容が更新されます。
    
-   **プロジェクト固有の環境：** 自動選択では、ネストされた環境よりもプロジェクト固有の仮想環境が優先されるようになりました。Conda 環境の選択および Poetry パッケージの操作はプロジェクトのスコープを尊重し、バックグラウンドでの更新によって新しいインタプリタの選択が上書きされることはなくなりました。
    
-   **インタプリタの設定:** `python.defaultInterpreterPath` 内の `${workspaceFolder}`、相対パス、および `python3` などのコマンドの解決が修正されました。プロジェクトビューの環境セレクタに **インタプリタパスの入力** が追加されました。
    
-   **ターミナルの起動:** グローバルインタプリタが変更された際に、シェル起動時の設定が更新されるようになり、環境ファイルが変更されても設定が保持されるようになりました。環境ファイルの通知には、**「ワークスペースで有効にする」**または**「フォルダで有効にする」**というアクションが含まれます。
    
-   **Pythonのインストール：** `uv` が必要であるにもかかわらず存在しない場合、セットアップでインストールを提案し、PATHの更新を必要とせずにPythonバージョンの選択画面へ進みます。
    

* * *

## Enterprise

### ポリシー管理対象のチャットを Copilot Agent Host に自動的に移動

Enterprise の管理設定により、管理者はエージェントの権限やサンドボックス化を管理できます。組織が空ではない `permissions` オブジェクトを構成するか、`sandbox.enabled`を`true`に設定すると、これらのポリシーを適用するために、VS Codeは完全なチャットセッションにおいてAgent Host内の[Copilotハネス](https://code.visualstudio.com/docs/agents/run/agent-harnesses)を必要とするようになりました。

既存の、アーカイブされていない **ローカル** チャットを開くと、そのチャットは自動的に **Copilot** に移動され、添付ファイルを含む会話履歴や未送信の下書きが保持されます。 自動的に送信されるものはありません。新しいチャットは、現在の組織ポリシーに基づく通常のモデルと権限のデフォルト設定を使用します。

VS Code は、新しいチャットが正常に開かれた後にのみ、元のチャットをアーカイブします。移動の処理中に他の画面に切り替えた場合、元のチャットは変更されず、未開の移動先チャットは削除されます。

これらのポリシーが適用されている間、Claude、 Codex、およびターミナルチャットは利用できません。エディタのインラインチャットは、限定的な閲覧および編集作業に限り引き続き利用可能です。空の `permissions` オブジェクトやレガシーポリシーだけでは、この移行はトリガーされません。管理者は [自動移行を一時的に無効にする](#_temporarily-keep-the-local-harness) ことができます。

### ローカル・ハーネスを一時的に維持する

Copilot Agent Host への移行にさらに時間を必要とする管理者は、[統合管理設定](https://docs) で `vscode.temporaryDefaultToLocalHarness` を `true` に設定できます。github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started):

```
{
  "vscode": {
    "temporaryDefaultToLocalHarness": true
  }
}
```

これにより、**ローカル**ハーネスが利用可能のままとなり、**Copilot**への自動切り替えが停止されます。また、明示的に指定されたハーネス、記憶されたハーネス、および現在のハーネスの選択も維持されます。通常のルーティングに戻すには、管理対象の値を `false` に設定するか、その設定を削除してください。

> **注:** この一時的なオプトアウトは、マネージドサンドボックスおよび権限設定で要求されるルーティングも上書きします。**Local** モードでは、これらの実行時限定のルールは適用されません。Copilot Agent Host セッションにおけるルールの適用については変更ありません。

### Copilot の権限モードを個別に管理する

管理者は、**「すべて許可」**をブロックしつつ **「アシスト」**を許可することで、開発者が権限チェックをバイパスすることなく、アシスト付きの承認を行えるようにできます。 Copilot の権限ピッカーには、組織のマネージド設定で許可されているモードが反映されます。

たとえば、この構成を [統合マネージド設定](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started）にこの構成をマージしてください：

```
{
  "permissions": {
    "disableBypassPermissionsMode": "disable",
    "disableAssistedPermissionsMode": false
  }
}
```

![「手動」および「アシスト」の権限が利用可能で、「すべて許可」が表示されていない Copilot 権限ピッカーを示すスクリーンショット。](/assets/updates/1_142/managed-permission-modes.webp)

**アシスト**モードを個別に制限するには、`permissions.disableAssistedPermissionsMode` を使用してください。`permissions.defaultMode` は初期のデフォルト値を提供するものであり、ユーザーが選択できるモードに対する制限ではありません。

従来の `ChatToolsAutoApprove: false` ポリシーは、明示的な管理モードの制限を設定しない限り、**「すべて許可」** と **「アシスト」** の両方を引き続きブロックします。`permissions.defaultMode` のみを設定しても、この従来の制限は置き換えられません。

> **注：** 現在、「Assisted Permissions」は `permissions.{allow,ask,deny}` と互換性がありません。`permissions.allow`、`permissions.ask`、`permissions.deny` のいずれかを使用している場合は、`"disableAssistedPermissionsMode": true` を設定してください。次回のリリースでは、両方が並行してサポートされる予定です。

### Windows の数値ポリシーは DWORD 値に対応

Windows では、数値を受け入れるポリシーが DWORD および QWORD をサポートしています。

* * *

## 拡張機能への貢献

### GitHub プルリクエスト

プルリクエストやイシューの作成、管理、編集を可能にする [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) 拡張機能において、さらなる進展がありました。新機能は以下の通りです：

-   スタックされたプルリクエストのサポートがデフォルトで有効になりました。
 
 ![スタックされたプルリクエストを示すスクリーンショット。](/assets/updates/1_142/pull-request-stack.webp)
 
-   競合がなく、ローカルにチェックアウトされたプルリクエストを更新できるようになりました。
    

この拡張機能の [0.170.0 バージョンの変更履歴](https://github.com/microsoft/vscode-pull-request-github/blob/main/CHANGELOG.md#01700) を確認して、このリリースに含まれるすべての内容についてご確認ください。

* * *

## 非推奨の機能と設定

### このリリースで新たに非推奨となった機能

-   [ローカルハーネス向けの Windows サンドボックス機能がサポートされなくなりました](#_windows-sandboxing-for-local-harness-is-no-longer-supported)

* * *

## 謝辞

`vscode` への貢献：

-   [@bluerose73 (Shengjie Ma)](https://github.com/bluerose73): Copilot NES: max_tokens を省略するための ExP トグルを追加 [PR #340327](https://github.com/microsoft/vscode/pull/340327)
-   [@codelovingcat (Ürem Sancaktutan)](https://github.com/codelovingcat): Issue 337524 のマルチディフ順序の修正 [PR #337565](https://github.com/microsoft/vscode/pull/337565)
-   [@denizguney (Deniz Güney Yıldırım)](https://github.com/denizguney): エージェント停止コマンドの所要時間計算の修正 [PR #338278](https://github.com/microsoft/vscode/pull/338278)
-   [@na2co3-ftw (na2co3)](https://github.com/na2co3-ftw): Modern UI: 接続されたタブをドラッグする際の縦スクロールを防止 (修正済み) [PR #338180](https://github.com/microsoft/vscode/pull/338180)
-   [@rksharma-owg (RKS)](https://github.com/rksharma-owg): クリーンアップの継続中に、新しいデバッガーの停止詳細を保持する [PR #339530](https://github.com/microsoft/vscode/pull/339530)
-   [@sgent-epic](https://github.com/sgent-epic): agentHost: ツールの継続処理を通じて BYOK 状態を維持する [PR #331749](https://github.com/microsoft/vscode/pull/331749)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   修正: ドキュメントの貼り付け編集時のメモリリーク [PR #338233](https://github.com/microsoft/vscode/pull/338233)
    -   修正: ネイティブコンテキストメニューの閉じ処理時のメモリリーク [PR #338214](https://github.com/microsoft/vscode/pull/338214)
    -   修正：出力チャネルの破棄リスナーにおけるメモリリーク [PR #338240](https://github.com/microsoft/vscode/pull/338240)
    -   修正: デバッグアダプター記述子ファクトリにおけるメモリリーク [PR #334103](https://github.com/microsoft/vscode/pull/334103)
    -   修正: 通常バッファのクリア時にターミナルコマンド履歴を解放 [PR #326931](https://github.com/microsoft/vscode/pull/326931)
    -   パフォーマンス: 文字列数を 1200 個削減 [PR #327689](https://github.com/microsoft/vscode/pull/327689)
    -   修正: MainThreadDebugService におけるメモリリーク [PR #334102](https://github.com/microsoft/vscode/pull/334102)
    -   修正: extHostTimeline におけるメモリリーク [PR #334098](https://github.com/microsoft/vscode/pull/334098)
    -   修正: デバッグ可視化登録におけるメモリリーク [PR #340046](https://github.com/microsoft/vscode/pull/340046)
    -   修正: 非表示のステータスバーのコマンド引数におけるメモリリーク [PR #338238](https://github.com/microsoft/vscode/pull/338238)
    -   修正: 拡張機能ホストの言語モデルプロバイダーにおけるメモリリーク [PR #340579](https://github.com/microsoft/vscode/pull/340579)
    -   修正：ターミナルの破棄に関するサブスクリプションにおけるメモリリーク [PR #340037](https://github.com/microsoft/vscode/pull/340037)
-   [@Tabisharaza (TABISH AYUB RAZA)](https://github.com/Tabisharaza): mcp: ワークスペース設定から移行済みのローカルサーバーを読み込む [PR #340034](https://github.com/microsoft/vscode/pull/340034)
-   [@tuanvtdeptre199](https://github.com/tuanvtdeptre199): アクティブなスレッドのスタックフレームが1つしかない場合の「Step Out」アクションを無効化 [PR #336125](https://github.com/microsoft/vscode/pull/336125)
-   [@tyrielv (Tyrie Vella)](https://github.com/tyrielv): 受信変更の装飾に対する不要な --numstat diff を回避 [PR #339008](https://github.com/microsoft/vscode/pull/339008)
-   [@yuezhang030](https://github.com/yuezhang030): VSCモデルFのプロンプトを更新 [PR #340187](https://github.com/microsoft/vscode/pull/340187)

`vscode-pull-request-github` への貢献:

-   [@L4XB (Lukas )](https://github.com/L4XB): プルリクエスト番号をクリックした際にブラウザタブが2つ開かないように修正 [PR #8962](https://github.com/microsoft/vscode-pull-request-github/pull/8962)
-   [@strawberry-little-bear](https://github.com/strawberry-little-bear): 概要ページのHTML内の不正なイシューリンクを修正 [PR #9025](https://github.com/microsoft/vscode-pull-request-github/pull/9025)
-   [@vsharha (Viktor Sharha)](https://github.com/vsharha): プルリクエスト概要におけるマージ可能性の投票機能を修正 [PR #8954](https://github.com/microsoft/vscode-pull-request-github/pull/8954)

### 課題追跡

課題追跡への貢献：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

* * *

新機能が公開され次第、すぐに試してくださる皆様に心より感謝しております。ぜひ定期的にこのページをチェックして、新機能についてご確認ください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [更新情報](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
