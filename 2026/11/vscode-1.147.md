---
product: VSCode
version: 1.147.0
release_title: Visual Studio Code 1.147
release_date: 2026-11-18
source_url: "https://code.visualstudio.com/updates/v1_147"
archived_at: 2026-11-19
---

# Visual Studio Code 1.147

# Visual Studio Code 1.147

リリース日: 2026年11月18日 安定版

## 1.147.0のダウンロード

Windows

[x64](https://update.code.visualstudio.com/1.147.0/win32-x64-user/stable)[Arm64](https://update.code.visualstudio.com/1.147.0/win32-arm64-user/stable)

macOS

[ユニバーサル](https://update.code.visualstudio.com/1.147.0/darwin-universal-dmg/stable)[Intel](https://update.code.visualstudio.com/1.147.0/darwin-x64-dmg/stable)[Apple silicon](https://update.code.visualstudio.com/1.147.0/darwin-arm64-dmg/stable)

Linux

[.deb](https://update.code.visualstudio.com/1.147.0/linux-deb-x64/stable)[.rpm](https://update.code.visualstudio.com/1.147.0/linux-rpm-x64/stable)[.tar.gz](https://update.code.visualstudio.com/1.147.0/linux-x64/stable)[Arm アーキテクチャ](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions)[Snap](https://update.code.visualstudio.com/1.147.0/linux-snap-x64/stable)

## リリースのハイライト

タスクのアイデアはあるものの、まだ送信する準備ができていない？今週からは、リクエストを下書きとして保存したり、後で送信するようにスケジュール設定したりできるようになりました。準備ができたら、モデルルーターにタスクを好みのモデルにマッチングさせましょう。 また、結果を説明するよりも見せたほうがわかりやすい場合は、チャートやモックアップを依頼しましょう。

-   [後で送信（実験的機能）](#_send-later-for-chat-requests-experimental): 「エージェント」ウィンドウで、ローカルエージェントへのリクエストやフォローアップを後で実行するようにスケジュールできます。
    
-   [ブラウザ連携（プレビュー）](#_browser-integration): エージェントからデフォルトのブラウザを操作し、リモート上のHTMLファイルを自分のマシンにコピーすることなくプレビューできます。
    
-   [リクエストの下書き（実験的機能）](#_save-and-resume-drafts-experimental): 「エージェント」ウィンドウ内で、コンテキストや設定情報を保持した複数の未送信リクエストを保存し、準備が整い次第送信できるようにします。
    
-   [アシスト付き権限のカスタマイズ](#_more-context-for-assisted-permissions): 権限審査担当者に、どのアクションが安全であると判断し、どのアクションに承認が必要かを指定できます。
    
-   [ビジュアルチャット応答](#_html-previews-and-native-visuals-in-agent-responses): HTML プレビューや実験段階のネイティブビジュアル機能を活用し、エージェントウィンドウ内でレポート、モックアップ、チャートをインラインで確認できます。
 
-   [モデルルーター（実験段階）](#_decision-model-based-model-routers-experimental): モデルルーターが、タスクごとに最適なモデルを候補の中から選択できるようにします。
 

リリースのハイライトを見る  
プログラミングを楽しんでください！

すでにインストール済みですか？ VS Code の **更新の確認** をご利用ください。今後の機能については、[Insiders ビルド](https://code.visualstudio.com/insiders) をご利用ください。

* * *

## エージェントセッション

### チャットリクエストの「後で送信」（実験的機能）

**設定**: sessions.sendLater.enabled VS Codeで開く VS Codeで開く Insiders（エージェントウィンドウのみ）

エージェントに、しばらく時間が経過してからリクエストを実行させたい場合があります。たとえば、ビルドが完了してから確認したり、翌朝にレビューのフォローアップを行ったりする場合などです。「後で送信」機能を使用すると、チャットリクエストの送信を特定の時刻まで延期できます。

チャットのリクエストは、送信ボタンの**「後で送信」** メニューを使用して、チャットリクエストをスケジュールできます。

![あらかじめ設定された時刻が表示された「後で送信」メニューのスクリーンショット。](/assets/updates/1_147/send-later-menu.webp)

特定の時刻を設定するには、**「日付と時刻を選択」**を選択し、カレンダーから日付を、ドロップダウンから時刻を選び、**「スケジュール」**を選択します。

![カレンダー、時間ドロップダウン、および「スケジュール」ボタンを備えた「後で送信」の日時選択画面のスクリーンショット。](/assets/updates/1_147/send-later-date-time.webp)

リクエストが待機する場所は、スケジュールした場所によって異なります：

-   **新規セッション**：セッション一覧の**下書き**セクション。
-   **既存のチャット**：そのチャットの**「スケジュール済み」**エリアに、送信時刻とともに表示されます。スケジュールされた時刻になってもエージェントがまだ忙しい場合、リクエストは中断することなく順番を待ちます。

![チャット内のスケジュール済みメッセージが表示されたスクリーンショット。送信予定の日時がラベルとして付いています。](/assets/updates/1_147/send-later-scheduled-message.webp)

あるいは、チャットのプロンプトで平易な言葉を使って、エージェントにリクエストのスケジュール設定を依頼することもできます。例：`「10分後にビルドを確認してください。」`

エージェントは、現在のチャット内で 1 回限りのテキストのみのリクエストをスケジュールし、送信時刻を確認します。このリクエストは、メニューからスケジュールしたものと同様に、チャットの **「スケジュール済み」** エリアに表示されます。

![エージェントが「10分後にビルドを確認する」というリクエストを確認しているスクリーンショット。フォローアップはチャットの「スケジュール済み」エリアに表示されています。](/assets/updates/1_147/send-later-ask-agent.webp)

スケジュールされた時刻には、ローカルのエージェントホストが稼働している必要があります。スケジュール設定を行っても、スリープ状態のコンピュータは起動しません。処理されなかったリクエストは、ホストが再び利用可能になった時点で処理されます。

スケジュールされたリクエストを管理（編集、即時送信、再スケジュール、キャンセル）するには、チャットまたはセッションリストでリクエストにカーソルを合わせると表示されるオプションを使用してください。保留中のリクエストがあるセッションを見つけるには、セッションリストで時計のアイコンを確認するか、セッションフィルターメニューで**「スケジュール済みのみ」**を選択してください。

リクエストのスケジュール設定に関する詳細は、[「後で送信」のドキュメント](https://code.visualstudio.com/docs/agents/run/agents-window#_send-a-request-later)をご覧ください。

> **注**: スケジュールされたリクエストは、**このコンピュータ**上のセッションでのみ機能し、オートメーションが有効になっている必要があります（ chat.automations.enabled VS Codeで開く VS Code Insiders）。

### 下書きの保存と再開（実験的機能）

**設定**: sessions.drafts.enabled VS Codeで開く VS Codeで開く Insiders

以前は、new-session 入力欄には一度に 1 件の未送信リクエストしか保持できませんでした。 下書き機能を使用すると、未送信のリクエストを複数並べて保存でき、それぞれに独自のワークスペース、エージェント、設定が割り当てられ、後で任意のリクエストに戻ることができます。

内容が含まれている新しいセッションを終了すると、VS Code はその内容をセッション一覧の **下書き** セクションに保存します。 何も送信されず、エージェント セッションも開始されません。すぐにそのセッションに戻るには、通知から **「下書きを開く」** を選択してください。

![セッション一覧の「下書き」セクションに 2 つの保存済み下書きが表示されているスクリーンショット。](/assets/updates/1_147/sessions-drafts.webp)

各下書きには、テキスト、添付ファイル、インライン参照、ワークスペース、エージェント、モデル、その他の設定など、設定したすべての情報が保持されます。下書きは、ページの再読み込みや再起動後も保持されます。

「下書き」リストから、下書きのプレビュー、開く、削除を行うことができます。下書きを送信しても、 リクエストが受理されて初めて下書きが削除されるため、送信に失敗しても作業内容が失われることはありません。

この設定をオフにすると、「下書き」セクションは非表示になりますが、保存済みの下書きは保持されます。

### リモート環境を GitHub 環境として共有する

リモートを GitHub 環境として共有すると、GitHub アカウントを使用して、別のデバイスや対応する Copilot アプリからそのエージェント セッションを引き継ぐことができます。

接続済みの SSH ホスト、WSL ディストリビューション、または Dev Tunnel を共有するには、「エージェント」ウィンドウで「リモート環境」エディタを開き、リモートの行にある **「GitHub 環境として共有」**（GitHub アイコン）を選択します。

共有されたリモートは元のグループに残り、名前の後に GitHub アイコンが表示されます。このアクションを再度選択すると、共有が停止します。

![接続済みの SSH ホストで「ビルドサーバーを GitHub 環境として共有」アクションが選択され、すでに共有されている Dev Tunnel が表示された「リモート環境」エディタのスクリーンショット。](/assets/updates/1_147/remote-environments-share-github-environment.webp)

[リモートエージェントセッション](https://code.visualstudio.com/docs/agents/run/remote-agent-sessions)の詳細については、こちらをご覧ください。

### Dev Containerの再構築後もチャットセッションを維持する（実験的機能）

**設定**: dev.containers.stateVolume.enabled VS Codeで開く VS Codeで開く Insiders , chat.agentHost.devContainer.stateVolume.enabled VS Codeで開く VS Codeで開く Insiders

以前は、Dev Containerを再構築すると、その中に保存されていたCopilotのチャットセッションが削除されていました。これらの設定を有効にすると、VS Codeは新しいDev Containerのユーザーおよびエージェントの状態をDockerボリュームに保存し、再構築後もチャット セッションを再構築後も保持します。

> **重要**: コンテナは、この設定が有効な状態で作成された場合にのみボリュームを取得します。セッションの保持を開始するには、一度再構築を行ってください。

### 受信トレイモードの改善 (実験的)

**設定**: sessions.list.inboxEnabled VS Code で開く VS Code Insiders で開く

インボックスモードでは、「エージェント」ウィンドウのセッションを、対応が必要な順にグループ化します。セッション一覧で **グループ化 > インボックスモード** を選択することで、いつでもインボックスモードに切り替えることができます。settings.list.inboxEnabled VS Codeで開く VS Codeで開く Insiders 設定を有効にすると、これがデフォルトのグループ化方法になります。

今回のリリースでは、皆様からのフィードバックを反映し、インボックスモードをより便利で管理しやすいものに改善しました：

-   **処理済みのセッションを「承認」する**
 
 セッションに注意を払う必要はないが、まだ完了していない場合は、そのセッションを「承認済み」としてマークできます（目のアイコン）。 セッションを「確認済み」にすると、そのセッションは「受信トレイ」から **「確認済み」** セクションに移動します。このセッションは、既読や完了、アーカイブ、またはクローズとしてマークされることはありません。
 
 セッションに新しいアクティビティがあると、そのセッションは「受信トレイ」に戻ります。選択した複数のセッションを一度に「確認済み」にすることができます。
    
-   **1つのワークスペースまたは環境に集中する**
 
 セッション一覧の上部にあるワークスペースおよび環境ピッカーを使用すると、現在関心のあるセッションのみを表示できます。このフィルターは、ピン留めされたセッションやアーカイブされたセッションを含むすべてのセクションに適用され、ページを再読み込みしても設定が保持されます。
    
    ![「固定」および「受信トレイ」セクションの上部にワークスペースおよび環境ピッカーが表示された受信トレイモードのスクリーンショット。](/assets/updates/1_147/sessions-inbox-scope.webp)
 

* * *

## エージェントの体験

### 決定モデルベースのモデルルーター（実験的機能）

**設定**: `chat.copilot.modelRouter.enabled`

モデルルーターを使用すると、どの種類の作業にどのモデルを使用するかを指定できます。その後、意思決定モデル `gpt-6-luna-decisions` がリクエストをルートの一つに照合し、VS Code はそのルートのモデルでチャットを実行します。ルーターは、`~/.agents/model-routers/` にある YAML ファイルであり、[Copilot harness](https://code.visualstudio.com/docs/agents/run/agent-harnesses#_copilot) セッションのモデルピッカーに表示されます。

モデルルーターはまだ開発初期段階にあり、皆様からのフィードバックが今後の改善に役立ちます。 何がうまくいき、何がうまくいかないかについて、[イシューを登録](https://github.com/microsoft/vscode/issues)して教えてください。

```
version: 1
description: ビルドにはOpus、簡単な質問にはGPT-6 Lunaを使用。
routes:
  - model: opus
    when: 機能追加、バグ修正、リファクタリングなど、多くのステップを要するコードの構築や変更時。
  - model: gpt-6-luna
    when: 何かがどこにあるか、設定の役割など、簡単な回答やちょっとした作業が必要な場合。
```

モデルルーターを試すには、ユーザーの [`settings.json`](https://code.visualstudio.com/docs/configure/settings#_settings-json-file) に `"chat.copilot.modelRouter.enabled": true` を追加してください。

ルーターを作成するには、Copilotハネスのチャットで `/model-router` と入力し、リクエストをどのようにルーティングしたいかを記述してください。 その後、モデルピッカーでそのルーターを選択してください。

### モデル比較機能の改善（プレビュー）

[モデル比較](https://code.visualstudio.com/docs/agents/run/compare-models) 機能を使用すると、エージェントウィンドウ内の複数のモデルに対して同じプロンプトを実行でき、 各モデルの結果を検証、評価、組み合わせることができます。今回のリリースでは、比較がより見つけやすくなり、理解しやすくなりました：

-   **比較結果はチャットに紐づけられます**：[エージェントに比較の実行を依頼する](https://code.visualstudio.com/docs/agents/run/compare-models#_ask-an-agent-to-run-a-comparison)すると、セッションリストのそのチャットの下に表示されます。エージェントの応答には、結果に直接移動できる**「比較を開く」**アクションが含まれています。
    
-   **比較の設定内容を確認**：セッション一覧で比較にカーソルを合わせると、リポジトリ、アイソレーション、ベースブランチ、各試行のモデルとエフォートレベル、ジャッジ、シンセサイザーといった元の設定を確認できます。確認のために各試行を開く必要はもうありません。
    
    ![セッションリスト内の比較項目にカーソルを合わせると、リポジトリ、アイソレーション、ベースブランチ、4つの試行、審査員、シンセサイザーが一覧表示される、元の比較設定を示すスクリーンショット。](/assets/updates/1_147/compare-models-settings-hover.webp)
 

### エージェントの応答における HTML プレビューとネイティブビジュアル

**設定**: chat.htmlPreview.enabled VS Codeで開く VS Code Insidersで開く、chat.nativeComponents.enabled VS Codeで開く VS Code Insidersで開く（エージェントウィンドウのみ）

アプローチの比較、モックアップ、変更前後のビルド時間など、エージェントの応答の中には、テキストとしてではなく、ビジュアルやグラフとして確認した方が分かりやすいものがあります。[エージェントウィンドウ](https://code.visualstudio.com/docs/agents/run/agents-window）では、エージェントはこれらの情報を2つの方法で応答内にインライン表示できます。それぞれに個別の設定があり、デフォルトではオフになっています。

-   **HTMLプレビュー**: レポート、図、モックアップなどの自由形式のレイアウト向けです。プレビューでは、HTML、CSS、表、インライン SVG、および展開可能なセクションが表示されます。スクリプト、フォーム、 外部リンク、および外部リソースはサポートされていません。chat.htmlPreview.enabled を有効にし、VS Code Insiders で開いて、リクエストに組み込みの `/html-preview` [スキル](https://code.visualstudio.com/docs/agent-customization/agent-skills)をリクエストに含めてください。例: `/html-preview compare the two caching approaches`。
 
-   **ネイティブビジュアル（実験的機能）**: 主要な数値や比較などのデータ用です。エージェントは、VS Code が独自にレンダリングするメトリクス、バッジ、表、棒グラフ、および展開可能な詳細情報を表示できます。これらは、ハイコントラストテーマを含め、お使いのテーマに合わせて表示されます。chat.nativeComponents.enabled VS Code で開く VS Code Insiders で開く リクエスト内で組み込みの `/vscode-ui` スキルを使用します。例: `/vscode-ui フルビルド時間と増分ビルド時間を比較する`。
    

どちらもタイトルバーや常駐ボタンなしで、応答の一部として表示されます。プレビューやビジュアルを右クリックし、**ソースを表示** を選択すると、そのマークアップを確認できます。HTML プレビューの場合、**プレビューを開く** を選択して拡大表示したり、**HTML を保存** を選択して独立した HTML ファイルとしてエクスポートしたりすることもできます。

### オートメーション

オートメーションを使用すると、特定のトリガーや条件に基づいて自動的に実行されるタスクを定義できます。「エージェント」ウィンドウの「オートメーション」ビューから、オートメーションの作成、管理、監視を行うことができます。今回のリリースでは、オートメーションの実行に対して、ガイド付きセットアップ、終了日、およびフィルターが追加されました:

-   **エージェントによる自動化の作成支援**
 
 エージェントと一緒に自動化を作成する際、より手厚いガイダンスが提供されるようになりました。エージェントが、成功した結果の定義、自動化の実行タイミングの決定、実行場所の選択を支援します。開始するには、エージェントに自動化の作成を依頼してください。 また、「オートメーション」ビューで **エージェントと作成** を選択して、チャット内で作業を続行することもできます。
 
 すべてを自分で設定したい場合は、**エージェントと作成** の横にあるドロップダウンを開き、**手動で作成** を選択してください。
 
-   **オートメーションの終了日の設定**
    
    オートメーションは、指定した期間が経過すると自動的に停止します。エージェントと共同でオートメーションを作成する際に終了日を設定するか、手動設定フォームの**詳細設定**で**日**、**週**、または**月**を選択してください。既存の終了日を削除するには、**なし**を選択してください。
    
-   **セッション一覧でのオートメーションの実行をフィルタリングする**
 
 デフォルトでは、オートメーションの実行はセッション一覧に表示されません。**「オートメーション」**フィルタを使用して、「エージェント」ウィンドウおよびエディタの「チャットセッション」一覧にそれらを含めるか除外するかを選択できます。
    

### アシスト権限に関する詳細

**設定**: chat.permissions.assisted.手順 VS Code で開く VS Code で開く Insiders

[アシスト付き権限](https://code.visualstudio.com/docs/agents/run/approvals#_permission-levels) を使用すると、LLM レビューアが Copilot ハーネス セッション内の各ツール呼び出しを評価し、リスクの低い呼び出しを承認します。 以前は、レビューアはデフォルトのガイダンスのみに依存していたため、ユーザー自身の業務において何が安全で何がリスクが高いかといった判断を考慮することができませんでした。

chat.permissions.assisted.instructions [VS Codeで開く] [VS Codeで開く] [Insiders] を使用すると、LLMレビューアに独自の指示を与えることができます。例：

```
パッケージのインストールやリモートへのプッシュを行う前には、必ず確認してください。
テストの実行や読み取り専用の Git コマンドについては、私の承認は必要ありません。
```

この指示は、レビュアーのデフォルトのガイダンスよりも優先されます。設定の変更は、すでに開かれているセッションにも適用されます。ただし、権限ルール、組織ポリシー、またはサンドボックスを無効にすることはできず、エージェントには送信されません。

レビュアーは、作業を依頼した人物についても考慮します：

-   **自動化およびその他のエージェント**：[自動化](https://code.visualstudio.com/docs/agents/run/automations) が開始するリクエストや、他のエージェントが送信するリクエストは、もはやあなたが作成したものとして扱われません。これらのセッションでは、以前は承認を求めなかったツール呼び出しでも、承認を求められる場合があります。
    
-   **あなたの回答**：エージェントからの質問やプランのレビューに対するあなたの回答は、拒否した場合も含め、すべて考慮されます。承認は、あなたの回答で説明されている後の作業をカバーすることができ、拒否は以前に承認されたアクションをブロックすることがあります。
 

### エディタの周囲に「詳細」パネルを配置する（実験的機能）

**設定**: sessions.experimental.detailsPosition VS Codeで開く VS Codeで開く Insiders、sessions.experimental.floatingDetails VS Codeで開く VS Codeで開く Insiders（エージェントウィンドウのみ）

エージェントウィンドウでは、「ファイル」、 変更点、その他の「詳細」ビューをエディタの周囲に配置し、利用可能なスペースをより有効に活用できます。**[表示] > [外観] > [詳細の位置]** を開き、**[左]**、**[右]**、**[エディタの上]**、**[エディタの下]**、または **[フローティング]** を選択します。デフォルトは **[右]** です。

「フローティング詳細」は、スペースを確保するのではなく、エディタの上にオーバーレイ表示されます。ウィジェットにカーソルを合わせたりフォーカスを合わせたりすると内容をプレビューでき、ピン留めコントロールを選択すると開いた状態を維持できます。また、ドラッグしてサイズを変更することも可能です。

### 拡張機能情報の表示

「カスタマイズ」の「拡張機能」セクションでは、エディタウィンドウの「拡張機能」ビューと同様に、インストールされている各拡張機能に関する詳細情報（バージョン、発行元、利用可能なコマンドなど）が表示されます。

![「カスタマイズ」の「拡張機能」セクションにある GitHub Pull Requests 拡張機能のスクリーンショット。](/assets/updates/1_147/customizations-extensions.webp)

* * *

## チャット

### 他のアプリのスクリーンショットを添付する（実験的機能）

**設定**: chat.appWindowScreenshots.enabled VS Codeで開く VS Code Insidersで開く

別のアプリケーションで実行中の場合でも、開発中のアプリの画面をエージェントに共有できます。**コンテキストの追加** > **アプリのウィンドウのスクリーンショット** を選択し、ブラウザやシミュレータなどのウィンドウを選択します。

また、別のアプリが最前面にある状態で ⌃⌘S（Windows、Linux では Ctrl+Shift+Alt+S）を押すと、そのウィンドウをキャプチャしてチャットに添付できます。VS Code からこのショートカットを実行すると、直前に切り替えたアプリウィンドウがキャプチャされます。送信前に画像に注釈を付けることもできます。

### チャット内の画像のキャプチャと注釈の追加

チャット入力欄の任意の画像添付ファイルで **注釈** を選択すると、送信前にトリミング、矢印や図形の描画、テキストの追加を行うことができます。これはスクリーンショット、貼り付けられた画像、ファイルから添付された画像で機能するため、レイアウトの問題を指摘したり、変更してほしい部分を強調したりできます。

### チャット内のインライン添付ピル（実験的機能）

**設定**: chat.inlineAttachments.enabled VS Codeで開く VS Code Insidersで開く

[インラインチャット添付ファイル](https://code.visualstudio.com/updates/v1_145#_inline-chat-attachments-experimental) は、ファイルや画像、その他のコンテキストを、プロンプト内で追加した位置にピルとして表示します。 これにより、参照先はそれに関連する指示のすぐ隣に表示されます。最近の更新により、チャット入力欄や送信済みリクエストにおいて、ピルの利便性がさらに向上しました：

-   **GitHub 参照のプレビューと開く**：GitHub のイシューやプルリクエストのピルにカーソルを合わせたり、フォーカスを合わせたりすると、そのタイトル、ステータス、説明が表示されます。ピルを選択すると、イシューやプルリクエストが開きます。 送信済みリクエストでは、以前はピルを選択しても何も起こりませんでしたが、インライン添付がオフの場合でもこの機能が動作するようになりました。
 
-   **ドラッグによるピルの並べ替え**：コンテキストを削除して再度添付する代わりに、ピルを同じチャット入力内の新しい位置にドラッグして移動できます。
 
-   **より見やすい送信済みリクエスト**： 送信済みリクエストでは、インラインのピルに加え、添付された画像がテキストの上部にサムネイルとして表示されます。ピルやスラッシュコマンドは、周囲のテキストと揃って表示されます。ウィンドウを再読み込みした際、画像ピルやGitHubピルは単なるリンクとして表示されるのではなく、元の状態が復元されます。
    

![チャット入力欄のプロンプトテキストとインラインで並んだ画像ピルと2つのファイルピルを示すスクリーンショット。それぞれが該当する指示の隣に配置されています。](/assets/updates/1_147/chat-inline-attachments.webp)

インライン添付ファイルは、Insiders ではデフォルトで有効、Stable ではデフォルトで無効になっています。

* * *

## ブラウザ連携

### 「ブラウザ使用」機能でエージェントにブラウザを利用させる (プレビュー)

**設定**: chat.agentHost.browserUse.enabled VS Code で開く VS Code で開く Insiders

「Browser Use」を使用すると、エージェントはデフォルトのブラウザ（Google Chrome または Microsoft Edge）を直接操作できます。これにより、VS Code に統合されたブラウザの機能を補完し、例えば、エージェントが既存の認証済みセッションを再利用したり、VS Code の外部にある Web ページを操作したりできるようになります。

「ブラウザ使用」機能を利用するには、[GitHub Copilot ブラウザ拡張機能](https://chromewebstore.google.com/detail/github-copilot/hblomdgalaelcilcdepgohfcogjiijhe)、自身のマシン上で実行される [Copilot ハーネス]（https://code.visualstudio.com/docs/agents/run/agent-harnesses）セッション（ご自身のマシン上で実行されるもの）、および `PATH` に設定された Node.js 22 以降が必要です。

ブラウザ機能の利用を開始するには：

1.  設定の `chat.agentHost.browserUse.enabled` を有効にし、VS Code を再起動します。
2.  ローカルの Copilot セッションを開き、`/plugin enable browser-use` と入力して browser-use プラグインを有効にします。
3.  Copilot にブラウザタスクの実行を依頼します。例: `localhost:3000 で私のアプリを開き、ナビゲーションを確認して、スクリーンショットを撮ってください。`
4.  プロンプトが表示されたらサイトへのアクセスを承認し、サインインや機密性の高い手順はご自身で完了させてください。
5.  `/browser-use:doctor` を実行し、表示される指示に従って設定を確認してください（問題がある場合）。

### 統合ブラウザでリモート HTML ファイルをプレビューする（プレビュー）

**設定**: workbench.browser.enableRemoteProxy VS Codeで開く VS Code Insidersで開く

SSH、WSL、Dev ContainerなどのリモートワークスペースにあるHTMLファイルを、[統合ブラウザ](https://code.visualstudio.com/docs/debugtest/integrated-ブラウザ）で開くことができるようになりました。これは、[ローカルの HTML ファイル](https://code.visualstudio.com/updates/v1_134#_open-html-files-in-the-integrated-browser-by-default)と同様に、[統合ブラウザ](https://code.visualstudio.com/docs/debugtest/integrated-browser)で開くことができます。エクスプローラーでHTMLファイルを右クリックし、**[統合ブラウザで開く]**を選択してください。ページは `file://` のアドレスを維持し、ファイルおよびスクリプト、スタイル、画像、フォントなど、ファイルが参照するリソースはリモートワークスペースから読み込まれます。リモートファイルは、信頼されたフォルダーからのみ読み込まれます。

これは、[リモートエージェントホスト](https://code.visualstudio.com/docs/agents/run/remote-agent-sessions)のセッションでも機能するため、エージェントが作成したページを、自分のマシンにコピーすることなく、あなたとエージェントの両方がプレビューできます。

workbench.browser.enableRemoteProxy を有効にして、VS Code Insiders で試してみてください。問題が発生した場合は、 [VS Code リポジトリ](https://github.com/microsoft/vscode/issues) に報告してください。

### ローカルホスト以外のリンクを統合ブラウザで開く

**設定**: workbench.externalUriOpeners VS Code で開く VS Code で開く Insiders

workbench.browser.openLocalhostLinks VS Code で開く VS Code で開く Insiders により、localhost へのリンクはすでに統合ブラウザで開くことが可能でした。 統合ブラウザは、workbench.externalUriOpeners [VS Code で開く] [VS Code で開く] [Insiders] 設定のオープナーとしてリストされるようになったため、デフォルトのブラウザの代わりに他のリンクでもこれを選択できるようになりました。たとえば、会社のサイトへのリンクを統合ブラウザで開くには、次のように設定します:

```
"workbench.externalUriOpeners": {
  "*.contoso.com": "workbench.integratedBrowser"
}
```

代わりに `*` をパターンとして指定すると、そのドメイン内のすべてのリンクを統合ブラウザで開くことができます。

### 統合ブラウザの暗転機能を無効にする

**設定**: workbench.browser.dimOnOverlay VS Code で開く VS Code Insiders

タブへのホバーやツールチップなど、何かが統合ブラウザと重なると、 ページが一時停止し、画面が暗くなります。ホバーが表示されたり消えたりするたびに、ページは繰り返し暗くなったり元に戻ったりするため、ちらつきとして見え、それに敏感なユーザーにとっては不快に感じられる可能性があります。

workbench.browser.dimOnOverlay を無効にすることで、ページが一時停止している間も画面が暗くならないように設定できます。ただし、通知が表示された場合はページが暗くなります。

* * *

## サンドボックス

### サンドボックス内で権限を更新して再試行する

ファイルやフォルダにアクセスできないためにターミナルコマンドが失敗した場合は、セッション、ワークスペース、またはユーザーレベルでアクセス権を付与できます。 [サンドボックスバイパス](https://code.visualstudio.com/docs/agents/run/agent-sandboxing#_control-approval-and-fallback-behavior)を有効にすると、Copilotはその権限を使用して、外部での実行を要求する代わりに、サンドボックス内でコマンドを再試行できます。

承認ドロップダウンを使用して、権限の適用範囲を選択します：

-   **このセッションで許可** （既定値）：このセッション内のすべてのチャットに適用されます。セッションを再開した後も有効です。
-   **このワークスペースで許可**（利用可能な場合）：同じエージェントホスト上の同じワークスペースフォルダーを持つセッションに適用されます。ホストは、ワークスペースの設定を変更することなく、この権限を保存します。
-   **このユーザーに対して許可**：ユーザー設定に権限が保存されるため、セッションやワークスペースをまたいで適用されます。

コマンドはサンドボックス内で再実行されます。これらのオプションのいずれも、サンドボックス外での実行を許可するものではありません。

* * *

## アクセシビリティ

### フォーカスとセッションの注目度の明確化

高コントラストテーマでは、エージェントウィンドウのコントロールにおいて、ポインタをホバーした際には破線のアウトラインが表示され、キーボードフォーカス時や開いている状態、展開されている状態では実線のアウトラインが表示されるようになりました。 これにより、ナビゲーション時のフォーカスの追跡が容易になります。

入力が必要なセッションも一目でわかりやすくなりました。明るいテーマではより明確な琥珀色のインジケーターが表示され、高コントラストテーマではセッション行の左端にマーカーが表示されます。ワークベンチで `agentSessionNeedsInput.foreground` を使用して色をカスタマイズできます。colorCustomizations VS Codeで開く VS Codeで開く Insiders .

![高コントラストのダークテーマおよびライトテーマにおいて、セッション行に表示される入力が必要なマーカーを示すスクリーンショット。](/assets/updates/1_147/session-needs-input-high-contrast.webp)

* * *

## エディターの操作性

### パネルの角と間隔のカスタマイズ

**設定**: workbench.sizeCustomizations VS Codeで開く VS Code Insidersで開く

Modern UIが有効な場合、エディタウィンドウおよびエージェントウィンドウ内のパネルの角の丸みと間隔をカスタマイズできます。角の丸みは0から8までの整数ピクセル単位で、間隔は0から16までの値で設定できます。例えば、 パネルの角を角張った形状にしたり、パネル間に余白を追加したり、エージェントチャットパネルに独自の角を設定したりできます：

```
{
  "workbench.sizeCustomizations": {
    "panels.cornerRadius": 0,
    "panels.spacing": 12,
    "agentsWindow.chatPanels.cornerRadius": 4
  }
}
```

コンパクトレイアウトでは隙間がなくなり、この設定によってコントロール、個々のタブ、またはネイティブウィンドウの角は変更されません。

### 連結されたパネルタブ（実験的機能）

Modern UI を有効にすると、連結されたタブスタイルがエディタタブから水平パネルやサイドバーのタブにも拡張されます。アクティビティバーが上部または下部にある場合を含め、選択されたビューはそのコンテンツと視覚的に連結されます。 `workbench.experimental.modernUIEditorTabStyle` を使用して、`connected`（デフォルト）または `pill` を選択します。VS Code で開く VS Code Insiders で開く。デフォルトの縦型アクティビティバーは変更されません。

![エディタタブから水平パネルおよびサイドバーのタブへと拡張された、接続されたタブを示すスクリーンショット。](/assets/updates/1_147/connected-panel-tabs.webp)

### Markdown テーブルをセル単位で編集

ソースで Markdown テーブルを編集する場合、パイプや区切り行を手作業で維持する必要があります。Markdown エディタでは、編集中でもテーブルのレンダリング状態が維持され、1 セルずつ編集できます。

![Markdownエディタ内のMarkdownテーブルのスクリーンショット。セル内にカーソルが置かれており、編集中に太字の構文が表示されている。](/assets/updates/1_147/markdown-editor-table-editing.webp)

### Markdown エディタにおける折りたたみ可能な詳細セクション

長いドキュメントでは、オプションのコンテンツを `<details>` セクションに隠すことがよくあります。Markdown エディタでは、GitHub と同様に、`<details>` および `<summary>` を折りたたみ可能なセクションとして表示するようになりました。`open` 属性を持つセクションは展開された状態で表示され、それ以外のセクションは折りたたまれた状態で表示されます。

![ソースタグとピンが表示された展開済みの詳細セクションと、その下に折りたたまれたセクションが表示されたMarkdownエディタのスクリーンショット。](/assets/updates/1_147/markdown-editor-details-sections.webp)

* * *

## エンタープライズ

### 管理設定と並行して Claude および Codex を許可

以前は、Copilot の [エンタープライズ管理設定](https://code.visualstudio.com/docs/enterprise/manage-ai-settings) を有効にすると、Claude および Codex の [ハーネス](https://code.visualstudio.com/docs/agents/run/agent-harnesses)がすべて無効化されていました。これは、これらのハネスが設定を強制しないためです。そのため、組織はCopilotを管理しつつ、開発者にClaudeやCodexを提供することはできませんでした。

管理者は、`vscode.allowedHarnesses`にハネスを指定することで、いずれか一方または両方のハネスを許可できるようになりました：

```
{
  "permissions": {
    "disableBypassPermissionsMode": "disable"
  },
  "vscode": {
    "allowedHarnesses": ["claude", "codex"]
  }
}
```

![`allowedHarnesses` に claude と codex を記載した管理設定ファイルのスクリーンショット。その下には、Copilot や Local の横に Claude と Codex が表示されるハネスピッカーがあります。](/assets/updates/1_147/allowed-harnesses.webp)

-   このリストには、許可されるハーネスが列挙されており、それ以外のハーネスはブロックされます。したがって、リストが空の場合、両方がブロックされます。この設定がない場合、管理設定では以前と同様に両方のハーネスが無効化されます。
-   有効なエントリは、小文字の `claude` および `codex` です。その他のエントリは無視されます。
-   ハーネスを許可しても、この制限が解除されるだけです。`vscode.temporaryAllowLocalHarness: false` などの他の制御は引き続き適用されます。
-   ファイルベースの設定または MDM 管理設定で設定してください。サーバー管理設定では、現時点ではこの設定はサポートされていません。

> **注：** ハーネスを許可しても、管理設定が強制されるわけではありません。Claude および Codex のセッションは、Copilot の管理権限、サンドボックス、MCP、およびプラグインの制御なしに実行されます。

### 管理対象シェル権限ルールにおける正規表現

以前は、管理対象シェル権限ルールは完全一致のテキストまたは `*` ワイルドカードにのみ一致したため、1つのルールで代替案や単語の境界をカバーすることはできませんでした。Copilot ハーネス セッションでは、 [エンタープライズ管理設定](https://code.visualstudio.com/docs/enterprise/manage-ai-settings) 内の `Shell(...)`、`Bash(...)`、および `PowerShell(...)` ルールは、`permissions.deny`、`permissions.ask`、および `permissions.allow` 内で `/pattern/flags` の形式で記述された JavaScript 正規表現を受け付けます。

たとえば、`git push` または `git pull` で始まるコマンドに対して承認を要求するには、次のように指定します：

```
{
  "permissions": {
    "ask": ["Shell(/^git\\s+(push|pull)\\b/)"]
  }
}
```

* * *

## 拡張機能への貢献

### GitHub プルリクエスト

プルリクエストやイシューの作成、管理、作業を可能にする [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) 拡張機能の開発がさらに進みました。新機能は以下の通りです:

-   初めて貢献するユーザーからのプルリクエストなど、GitHub Actionsのワークフローがメンテナーの承認待ちになっている場合、プルリクエストの概要画面の「チェック」セクションに**「ワークフローの実行を承認」**ボタンが表示されます。
    
-   プルリクエストの概要画面にあるコメントやその他のタイムライン項目は、サイドバーの下に表示されると全幅で表示されるようになり、また、画面幅が 768px 未満の場合、概要画面は 1000px 未満で 1 列表示に切り替わります。
    
-   [Agents] ウィンドウでは、実験的な設定 `"githubPullRequests.experimental.agentsOverviewTabs"` を有効にすると、プルリクエストの概要を **[タイムライン]**、 **チェック/マージ**、**メタデータ**の各タブに分割できます。タイムラインタブには未解決の会話数が表示され、チェック/マージタブにはプルリクエストがマージ可能な状態かどうかが表示されます。
    

この拡張機能の [0.180.0 版の変更履歴](https://github.com/microsoft/vscode-pull-request-github/blob/main/CHANGELOG.md#01800) を確認して、このリリースに含まれるすべての内容についてご確認ください。

* * *

## 非推奨の機能と設定

### このリリースでの新たな非推奨項目

-   **macOS Ventura** および **macOS Sonoma** 上の VS Code デスクトップ版は非推奨となりました。詳細については、[VS Code FAQ](https://code.visualstudio.com/docs/supporting/faq#_can-i-run-vs-code-on-old-macos-versions)を参照してください。
 
-   **32ビット ARM Linux** 上の VS Code デスクトップ版は非推奨となりました。詳細については、[VS Code FAQ](https://code.visualstudio.com/docs/supporting/faq#_can-i-run-vs-code-on-32-bit-arm-linux) をご覧ください。
 
-   ステータスバーに表示される実験的な AI 使用統計（`editor.aiStats.enabled`）は、利用率が低いため削除されました。
    

### 今後非推奨となる機能

-   [Local ハーネスは非推奨](https://code.visualstudio.com/updates/v1_146#_copilot-harness-and-deprecation-of-the-local-harness) となっており、2027年2月に削除される予定です。

* * *

## 感謝

### 課題管理

課題管理への貢献者：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

### プルリクエスト

`vscode` への貢献：

-   [@AAAkater](https://github.com/AAAkater)： agentHost: Codexサブエージェントの応答におけるモデルの帰属情報の誤りを修正 [PR #340470](https://github.com/microsoft/vscode/pull/340470)
-   [@Aryan9891 (Aryan Sachin)](https://github.com/Aryan9891): 修正(ターミナル): 「ターミナルの作成」ドロップダウンで複数のアクションビュー項目に対応 (#\_346848) [PR #346854](https://github.com/microsoft/vscode/pull/346854)
-   [@Boulea7 (Langning Zhang)](https://github.com/Boulea7): サーバーのベースパスに対するPWAマニフェストの開始URLを修正 [PR #330360](https://github.com/microsoft/vscode/pull/330360)
-   [@DivyaRaval1909 (Divya Raval)](https://github.com/DivyaRaval1909): スクリーンリーダーからアクションリスト項目のアイコンとサブメニューインジケーターを非表示にする [PR #339952](https://github.com/microsoft/vscode/pull/339952)
-   [@Iyanuoluwa007 (Oke Iyanuoluwa Enoch)](https://github.com/Iyanuoluwa007): タスクの問題収集が完了した際の保留中の行に関する問題を報告 [PR #346122](https://github.com/microsoft/vscode/pull/346122)
-   [@mcumming (Michael Cummings (MSFT))](https://github.com/mcumming): Entraのサインイントークンをマーケットプレイスに送信しないようにする [PR #343689](https://github.com/microsoft/vscode/pull/343689)
-   [@NeoMetric](https://github.com/NeoMetric): agentHost: BYOKモデルの出力を生成されたままストリーム配信する [PR #341851](https://github.com/microsoft/vscode/pull/341851)
-   [@rudy-07 (Rudransh Shekhar)](https://github.com/rudy-07): terminal-suggest: npm および yarn の package.json 検索におけるルートディレクトリのチェックを修正 [PR #347265](https://github.com/microsoft/vscode/pull/347265)
-   [@sameerihs (Sameer)](https://github.com/sameerihs)
    -   ノートブックコントローラーの言語制限をリセット [PR #347068](https://github.com/microsoft/vscode/pull/347068)
    -   不要になった WebView リソースキャッシュのクリーンアップ [PR #346867](https://github.com/microsoft/vscode/pull/346867)
    -   ブラウザタブの復元時に保留中のURLを使用 [PR #346996](https://github.com/microsoft/vscode/pull/346996)
    -   ドキュメントの再オープン後にキャッシュされたTSレスポンスを無効化 [PR #347028](https://github.com/microsoft/vscode/pull/347028)
    -   デバッガーのソース更新を最新の状態に維持 [PR #347124](https://github.com/microsoft/vscode/pull/347124)
    -   転送されたトンネル接続をソケット単位で追跡 [PR #347033](https://github.com/microsoft/vscode/pull/347033)
    -   タスクの問題マーカーを各ターミナルごとに限定 [PR #346994](https://github.com/microsoft/vscode/pull/346994)
    -   コピーされたノートブックの出力項目を分離 [PR #347117](https://github.com/microsoft/vscode/pull/347117)
    -   期限切れの「入力時の自動フォーマット」リクエストをキャンセルする [PR #347115](https://github.com/microsoft/vscode/pull/347115)
    -   設定の再試行を元のファイルに保持する [PR #347074](https://github.com/microsoft/vscode/pull/347074)
    -   メモリ内の作業コピーのバックアップを個別に保持する [PR #347066](https://github.com/microsoft/vscode/pull/347066)
    -   仮想ドキュメントの高速更新をシリアライズする [PR #346986](https://github.com/microsoft/vscode/pull/346986)
    -   新しいクイック検索の前に、バッファに保存された結果をクリアする [PR #347031](https://github.com/microsoft/vscode/pull/347031)
-   [@ShakilUrRehman21 (SHAKIL UR REHMAN)](https://github.com/ShakilUrRehman21): map: ResourceMapのコピー時にカスタム toKey を保持し、再キー設定を行う [PR #347344](https://github.com/microsoft/vscode/pull/347344)
-   [@shoutoutuoadi325 (Zhiqi Zhang)](https://github.com/shoutoutuoadi325): TextLength における UTF-16 文字列の文字数カウントを修正 [PR #345715](https://github.com/microsoft/vscode/pull/345715)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   修正：単語ハイライト機能におけるメモリリーク [PR #346673](https://github.com/microsoft/vscode/pull/346673)
    -   修正：タスクプロバイダーのメモリリーク [PR #338231](https://github.com/microsoft/vscode/pull/338231)
    -   修正：無題エディタの解決処理におけるメモリリーク [PR #346674](https://github.com/microsoft/vscode/pull/346674)
    -   パフォーマンス改善: Test Explorer でのテスト子要素の再スキャンを回避 [PR #347176](https://github.com/microsoft/vscode/pull/347176)
    -   パフォーマンス改善: Test Explorer でのテスト実行更新をバッチ処理 [PR #346656](https://github.com/microsoft/vscode/pull/346656)
    -   修正: テスト結果ターミナルでのメモリリーク [PR #347183](https://github.com/microsoft/vscode/pull/347183)
    -   新機能: アイドル時のCPU使用率を最大75%削減 [PR #338767](https://github.com/microsoft/vscode/pull/338767)
    -   修正: ノートブックカーネルピッカーにおけるレースコンディション [PR #341483](https://github.com/microsoft/vscode/pull/341483)
    -   修正: SCMリポジトリコンテキストキーにおけるメモリリーク [PR #346683](https://github.com/microsoft/vscode/pull/346683)
    -   修正: エミッタの警告名におけるメモリリーク [PR #347966](https://github.com/microsoft/vscode/pull/347966)
    -   パフォーマンス: メモリ使用量を 44 kB 削減 [PR #342392](https://github.com/microsoft/vscode/pull/342392)
    -   修正: markersView におけるメモリリーク [PR #348007](https://github.com/microsoft/vscode/pull/348007)
-   [@trivikr (Trivikram Kamat)](https://github.com/trivikr): ウィンドウを表示せずに拡張機能のテストを実行するための --hidden-window オプションを追加し、ウィンドウを表示せずに拡張機能のテストを実行できるようにした [PR #344174](https://github.com/microsoft/vscode/pull/344174)
-   [@wasim-builds (MOHAMMED WASIM KHAN)](https://github.com/wasim-builds): 修正: ExtHostTreeView 内の各ツリーノードにおける DisposableStore のリークを防止 (#\_346620) [PR #346727](https://github.com/microsoft/vscode/pull/346727)
-   [@wozhenbang2004 (Kayokoi)](https://github.com/wozhenbang2004): 拡張ホストが停止した際の認証プロバイダのクリーンアップを修正 [PR #345127](https://github.com/microsoft/vscode/pull/345127)
-   [@wynnsimon (wynn)](https://github.com/wynnsimon): 修正：findWithArgs が空の検索文字列を無視する問題を修正 (#\_151311) [PR #334803](https://github.com/microsoft/vscode/pull/334803)
-   [@YOSHII-Hiroto (吉井 啓人（YOSHII, Hiroto）)](https://github.com/YOSHII-Hiroto): モバイルエミュレーション時の要素ピッカーの修正 [PR #332183](https://github.com/microsoft/vscode/pull/332183)

`vscode-pull-request-github` への貢献:

-   [@hungud (Uong Dong Hung)](https://github.com/hungud): 修正: parseGraphQLComment におけるレビューコメントのコミットが null の場合の処理 (#9159 を修正) [PR #9168](https://github.com/microsoft/vscode-pull-request-github/pull/9168)

* * *

新機能が利用可能になり次第、すぐに試してくださる皆様に心より感謝いたします。ぜひ定期的にこのページをチェックして、新機能をご確認ください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [アップデート](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
