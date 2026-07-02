---
product: VSCode
version: 1.127.0
release_title: Visual Studio Code 1.127
release_date: 2026-07-01
source_url: "https://code.visualstudio.com/updates/v1_127"
archived_at: 2026-07-02
---

# Visual Studio Code 1.127

# Visual Studio Code 1.127

[LinkedIn](https://www.linkedin.com/showcase/vs-code)、[X](https://go.microsoft.com/fwlink/?LinkID=533687)、 [Bluesky](https://bsky.app/profile/vscode.dev)

* * *

_リリース日: 2026年7月1日_

ダウンロード：Windows：[x64](https://update.code.visualstudio.com/1.127.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.127.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.127.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.127.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.127.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.127.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.127.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.127.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.127.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.127 のリリースへようこそ。今回のリリースでは、ブラウザ内で Web アプリをビルドおよびテストできるエージェント、サイトごとのより安全なブラウジング、そして多数のアクティブなエージェント セッションを整理するための新しい方法が導入されました。

-   [エージェント向けブラウザ ツール](#_agent-tools-are-generally-available): エージェントがページを開いたり、スクリーンショットを撮ったり、クリック操作を行って自身の作業を検証できるようになりました。これらは現在、一般提供されています。
 
-   [サイトごとのブラウザ権限](#_camera-location-devices-and-more): 各サイトごとにプロンプトを表示し、ページに対してカメラ、位置情報、デバイスなどへのアクセスを許可できます。
    
-   [エージェントセッション](#_use-groups-to-organize-sessions): 関連するセッションをグループ化し、ドラッグ＆ドロップで「忙しいエージェント」ウィンドウを整理できます。
    
-   [チャット入力バナー](#_chat-input-banners): 会話画面を離れることなく、CI チェックの失敗やプルリクエストへのコメントに対応できます。
 
-   [サブエージェントのクレジット](#_subagent-credits): サブエージェントにカーソルを合わせると、そのサブエージェントが処理した作業のコストを確認できます。
    

プログラミングを楽しんでください！

* * *

VS Codeは全ユーザーに向けて段階的に展開されています。VS Codeの**「更新を確認」**を使用して、すぐに最新バージョンを入手してください。

新機能をいち早く試したい場合は、[**Insiders ナイトリービルドをダウンロード**](https://code.visualstudio.com/insiders)してください。このビルドには、最新アップデートが利用可能になり次第、すぐに反映されます。

* * *

## エージェント

### エージェントウィンドウ (プレビュー)

[エージェントウィンドウ](https://code.visualstudio.com/docs/agents/agents-window) は、プロジェクトやマシンをまたいでエージェントセッションを探索、反復、確認するために最適化された専用のコンパニオンウィンドウです。今回のリリースでは、セッションリストを整理し、多数のセッションが混在するリストを管理しやすくするための新しい方法が導入されました。

#### グループ機能を使ったセッションの整理

複数のエージェントセッションを同時に実行すると、セッション一覧はすぐに膨れ上がり、全体を把握しにくくなることがあります。今回、セッション一覧をグループに整理して、関連するセッションをまとめて管理できるようになりました。独自のグループを作成し、グループヘッダーを折りたたむことで、一覧を整理し、重要な部分に集中できます。

各グループにはクイックアクションも用意されています。グループ内で直接新しいセッションを開始したり、1回の操作ですべてのセッションを「完了」としてマークしたりできます。

#### セッションリストでのドラッグ＆ドロップ

セッションリストでドラッグ＆ドロップがサポートされ、セッションの整理がさらに容易になりました：

-   セッションを上下にドラッグして順序を変更
-   セッショングループやワークスペースの見出しをドラッグしてリストの並び替え
-   セッションをグループの上にドラッグして、そのグループに追加
-   セッションを**「固定」**セクションにドロップして固定
-   複数のセッションを選択し、ブロックとしてまとめて移動

#### チャット入力バナー

コーディングエージェントのセッションでプルリクエストが開かれている場合、「エージェント」ウィンドウのチャット入力欄のすぐ上にバナーが表示され、作業中の画面から直接、チェックの失敗や届いたフィードバックに対処できます。各バナーには、会話画面を離れることなく問題を修正または確認するための単一のアクションが用意されています：

-   **CI 失敗：** プルリクエストのチェックが失敗すると、バナーに失敗したチェックの数（例：「5つのチェックのうち2つが失敗しました」）とクイックアクションが表示されます。**チェックを修正**はエージェントによる修正を開始し、**チェックを表示**は「変更」ビューで失敗したチェックを開きます。

-   **プルリクエストのコメント：** 新しいレビューコメントが届くと、バナーにコメント数とアクションが表示されます。**コメントに対応**を選択するとエージェントにコメントが引き渡され、**コメントを表示**を選択するとエディタでコメントが開きます。

#### オンボーディングツアー（実験的機能）

エージェントがどのような役割を果たせるのかよく分からない場合、エージェントの使い始めは難しく感じるかもしれません。エージェントウィンドウにオンボーディングツアーが追加され、すぐに使いこなせるようサポートします。 これらのガイド付きツアーでは、主要な機能が紹介され、エージェントを最大限に活用する方法が示されるため、タスクを委任する最適な方法を見つけ、初日から生産性を維持できるようになります。

現在、新規ユーザーにこの機能を最も効果的に紹介する方法を見つけるため、これらのツアーを試験的に導入しています。

#### エージェントによる変更を確認する際のエディタのガターフィードバック

エージェントによる変更を確認する際、変更してほしいコードの正確な箇所を指定するのは、手間のかからないものであるべきです。 エディタのガターから直接フィードバックを残せるようになりました。行にカーソルを合わせるとガターに**「フィードバックを追加」**アイコンが表示され、これを選択するとその行にコメントが追加されるため、エージェントにコード内の特定の箇所を素早く指示できるようになります。

また、今回のリリースでは、フィードバックの入力方法、ホバー時の動作、および全体的な視覚的な統一性を改善し、エージェントへのフィードバック体験をさらに洗練させました。

#### セッションのコンテキストに基づいた、より適切なプルリクエストのタイトルと説明

以前は、「エージェント」ウィンドウからプルリクエストを作成すると、汎用的なタイトルや説明が生成され、手動で編集する必要があることがよくありました。**「プルリクエストを作成」**ボタンは、セッションのコンテキストを利用してプルリクエストのタイトルと説明を生成するようになり、セッションで行われた作業をより正確に反映した、説明的なプルリクエストが生成されるようになりました。

#### マルチチャットセッション

マルチチャットセッションでは、1つのエージェントホストCopilotセッション内で複数のチャットを実行できます。今回のリリースでは、その基盤をさらに強化し、以下の改善が施されています。

##### チャットの閉じ、再開、削除

セッションヘッダーの**\+ 新しいチャット**ボタンから新しいチャットを作成できます。複数のチャットが開かれていると、タブストリップが表示され、末尾に**+**が付いており、さらにチャットを追加できます。 タブの **X** ボタンでチャットを閉じると、チャットは破棄されるのではなく非表示になります。**Conversations** ドロップダウンからチャットを再表示できます。各チャットには、表示/非表示を切り替えるチェックボックスがあります。チャットを完全に削除するには、タブのコンテキストメニューを開き、**Delete Chat** を選択してください。

##### すべてのチャットにわたる進行状況と変更

以前は、セッションにはアクティブなチャットの活動状況のみが反映されていたため、他のチャットがまだ動作しているかどうか、あるいは何が変更されたのかを把握するのが困難でした。現在では、進行状況とファイルの変更がすべてのチャットにわたって集約されるようになりました： いずれかのチャットが稼働している間はセッションが「進行中」と表示され、各タブにはそのチャット独自の進行状況が表示され、セッションヘッダーの「変更」ピルにはすべてのピアチャットからの編集内容が統合されて反映されます。

##### 会話をピアチャットに分岐させる

マルチチャットセッション内で会話を分岐させる際、分岐によって新しいトップレベルセッションが作成されるのではなく、同じセッション内に新しいピアチャットが作成されるようになりました。 分岐されたチャットは、分岐点までの会話を継承し、兄弟チャットとは独立して動作し、自動的に生成されたタイトルが付けられます。シングルチャットおよびエージェントがホストしていないセッションでは、新しいセッションに分岐するという従来の動作が維持されます。

#### セッションのレイアウト

##### セッションヘッダーにおけるピルの統一

セッションタイトルの下にあるアクション行は、統一されたコンパクトなセカンダリボタンピルとして一貫して表示されるようになりました。**ワークスペースピル**には、ワークスペースアイコン（ワークスペースの種類に応じてクラウド、フォルダ、またはワークツリー）とラベルが表示され、長い名前は省略されます。 **変更ピル**（`N ファイル +X -Y`）は、セッションのデフォルトのチェンジセットを読み込んで開き、Copilot およびエージェントホストプロバイダーの両方で、そのカウントと開かれる複数ファイルの差分が一致するようにします。

![セッションヘッダーで統一された「ワークスペース」および「変更」ピルを示すスクリーンショット。](/assets/updates/1_127/session-header-pills.webp)

##### セッション切り替え時にチャット入力欄にフォーカスが移動

「Agents」ウィンドウでセッションを開くと、セッションにエディタが開いていたり「Changes」ビューが読み込まれていたりする場合でも、キーボードフォーカスがチャット入力欄に設定され、すぐに文字入力を開始できるようになりました。セッションリスト内の項目をキーボードでハイライトしても、実際にセッションを開くまではフォーカスは移動しません。

##### レスポンシブなセッションサイドバー（実験的機能）

**設定**: sessions.layout.autoCollapseSessionsSidebar VS Codeで開く VS Code Insidersで開く

狭いウィンドウで、エディタ、サイドパネル、 セッションサイドバーを同時に表示すると、作業スペースがほとんど残らなくなります。この機能を有効にすると、ウィンドウが狭く、エディタとサイドパネルの両方が開いている場合、Agents ウィンドウは自動的にセッションサイドバーを非表示にし、スペースが確保されると再び表示します。手動での閉じ操作は尊重され、複数のセッションが同時に表示されている場合はこの動作を一時停止します。

### /troubleshoot を使用したエージェントの動作のトラブルシューティング

`/troubleshoot` コマンドで呼び出されるトラブルシューティング機能は、チャットセッションのログを分析し、エージェントの動作に関する洞察を提供することで、チャットの問題の診断を支援します。カスタム指示が無視されたり、応答が遅くなったりする原因を調査する際に使用してください。

今回のリリースでは、`/troubleshoot` を使用して、ローカルおよびリモートセッションを含むエージェントホストセッションの診断が可能になりました。「Agents」ウィンドウのチャット入力欄に `/troubleshoot` と入力し、その後に `#session` を続けて入力します。次に、トラブルシューティングを行うセッションを選択し、発生している問題に関する質問や説明を追加してください。

![「エージェント」ウィンドウにおけるエージェントホストセッションのトラブルシューティング結果を示すスクリーンショット。](/assets/updates/1_127/ahptroubleshoot.jpg)

## コスト管理

### サブエージェントのクレジット

エージェントがサブエージェントに作業を委任した場合、その作業にかかるコストを把握するのが難しい場合があります。これをより透明化するため、チャット応答内のサブエージェントセクションにカーソルを合わせると、そのサブエージェントが使用した AI クレジットを確認できるようになりました。

![チャット応答内のサブエージェントセクションにカーソルを合わせた際のクレジット使用状況を示すスクリーンショット。](/assets/updates/1_127/subagent_cost_hover.webp)

## チャット

### macOS および Linux におけるターミナルコマンドのサンドボックス化

エージェントが実行するターミナルコマンドを毎回承認するのは、すぐに面倒な作業になってしまいます。今回のリリースから、macOSおよびLinuxにおけるターミナルコマンドのサンドボックス化を導入します。これにより、コマンドはネットワークアクセスがブロックされ、ファイルシステムへのアクセスが制限された状態で実行されるため、エージェントがユーザーに確認を求める回数が減ります。

エージェントが承認を求めるのは、コマンドが権限を昇格させてサンドボックスの外で実行する必要がある場合のみです。詳細については、[エージェントのサンドボックス化](https://code.visualstudio.com/docs/agents/concepts/trust-and-safety#_agent-sandboxing)をご覧ください。

この機能は、「権限」ドロップダウンから無効にできます：

![「デフォルトの承認」モードで利用可能なサンドボックス化の切り替えボタンを示すスクリーンショット。](/assets/updates/1_127/sandboxing-toggle.webp)

## 言語モデル

### 組み込みの Ollama プロバイダーの非推奨化

モデルプロバイダーは、拡張機能を通じて VS Code のチャット機能にモデルを提供できます。拡張機能を使用することで、プロバイダーは組み込みのプロバイダーよりも迅速に新しいモデルや機能のサポートを提供できます。

Ollamaには現在、[公式のVS Code拡張機能](https://marketplace.visualstudio.com/publishers/Ollama)が用意されており、チャットでローカルのOllamaモデルを使用するには、こちらを利用することを推奨します。

そのため、組み込みのOllamaプロバイダーは非推奨となりました。[Bring Your Own Key (BYOK)]（https://code.visualstudio.com/docs/copilot/customization/language-models#_bring-your-own-language-model-key）を使用してローカルモデルを実行している場合は、公式拡張機能をインストールし、組み込みプロバイダーを削除することで、Ollamaモデルを中断なく引き続き使用できます。以下の動画では、非推奨となったプロバイダーの削除方法を紹介しています。

## 統合ブラウザ

### カメラ、位置情報、デバイスなど

統合ブラウザは、サイトごとの権限設定に対応するようになりました。これにより、ページでは以下のような、より多くの Web API を利用できるようになります。

-   位置情報
-   カメラとマイク
-   加速度センサーやジャイロスコープなどのセンサー
-   クリップボード
-   Bluetooth、USB、シリアル、HID などのデバイス

ページが権限を要求すると、従来のブラウザと同様に、VS Code からその要求を許可するか拒否するかを尋ねるプロンプトが表示されます。

![app.zoom.us がマイクへのアクセスを要求するシステムダイアログのスクリーンショット。「許可」、「ブロック」、「キャンセル」のオプションが表示されています。](/assets/updates/1_127/browser-permission-prompt.webp)

**「サイトの権限」**というブラウザメニュー項目から、現在のサイトの権限を管理できます。

### エージェントツールが一般提供開始

**設定**: workbench.browser.enableChatTools VS Codeで開く VS Codeで開く Insiders この設定は組織レベルで管理されます。変更するには、管理者に連絡してください。ORG

ブラウザツールを使用すると、エージェントは統合ブラウザでページを開き、コンテンツやコンソールエラーを確認し、 スクリーンショットを撮影し、選択・入力・ナビゲーションを行って自身の作業を確認できます。これらすべてを、外部の MCP サーバーを必要とせずに実行できます。プレビュー版でのいくつかのマイルストーンを経て、ブラウザツールは一般提供され、デフォルトで有効になっています。

プレビュー版を実行し、問題を報告し、フィードバックを共有してくださった皆様に心より感謝申し上げます。皆様のテスト結果が、今回のリリースに含まれる「セッションごとのタブ分離」、「明示的なページ共有制御」、および「権限モデル」の直接的な形作りに寄与しました。

エージェントに Web アプリの構築と検証を依頼するか、ステップバイステップのガイド [ブラウザエージェントツールを使用した Web アプリの構築とテスト](https://code.visualstudio.com/docs/agents/guides/browser-agent-testing-guide)の手順に従って、ビルド・テスト・修正の閉ループが実際に機能する様子を確認してください。詳細なリファレンスについては、[エージェント向けブラウザツール](https://code.visualstudio.com/docs/debugtest/integrated-browser#_browser-tools-for-agents)を参照してください。

管理者は、エンタープライズポリシーを通じてブラウザツールを管理できます。`BrowserChatTools` ポリシーで完全に無効化したり、エージェントのネットワークフィルタリング（`ChatAgentNetworkFilter` および許可・拒否ドメインリスト）を使用して、エージェントツールがアクセスできるドメインを制限したりできます。 詳細は、[組織の AI 設定の構成](https://code.visualstudio.com/docs/enterprise/ai-settings#_configure-agent-network-filtering)を参照してください。

## エンタープライズ

### 管理対象の Copilot 設定のファイルベース配信

管理者は、 [ネイティブ MDM チャネル](https://code.visualstudio.com/updates/v1_125#_native-mdm-delivery-for-managed-copilot-settings)やアカウントベースのエンタープライズ設定ファイルに加え、ディスク上の JSON ファイルから管理対象の GitHub Copilot 設定を配信できるようになりました。

これにより、組織は、デバイス管理ソリューションに登録されていないマシンや、ネイティブの MDM ペイロードを作成するよりも、既存のツール（構成管理システムやイメージングパイプラインなど）を通じてファイルをプロビジョニングする方が簡単なマシンに対して、ポリシーを適用する簡単な方法を得ることができます。

VS Code は、OS ごとに定められた既知の場所にある `managed-settings.json` ファイルを読み取ります。このファイルは、MDM またはアカウントベースのエンタープライズ設定が存在しない場合にのみ適用されます。

-   **macOS**: `/Library/Application Support/GitHubCopilot/managed-settings.json`
-   **Linux**: `/etc/github-copilot/managed-settings.json`
-   **Windows**: `%ProgramFiles%\GitHubCopilot\managed-settings.json`

このファイルには、管理者が GitHub.com を通じて作成するものと同じスキーマを使用した JSON オブジェクトが含まれています。例：

```
{
  "permissions": {
    "disableBypassPermissionsMode": "disable"
  },
  "enabledPlugins": {
    "plugin@marketplace": false
  }
}
```

詳細については、GitHub の [エンタープライズ管理クライアント設定](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-plugin-standards) のドキュメントを参照してください。

## 非推奨の機能と設定

なし

## 謝辞

`vscode` への貢献者：

-   [@aaronpowell (Aaron Powell)](https://github.com/aaronpowell): プラグインマーケットプレイスのプルリクエスト復旧処理 [PR #318270](https://github.com/microsoft/vscode/pull/318270)
-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
    -   設定同期で使用されていない場合、ワークスペースの AuthenticationProvider 拡張機能を無効化できるようにしました [PR #320415](https://github.com/microsoft/vscode/pull/320415)
    -   :lipstick: /causedByExtension レスポンス内のコマンドの大文字小文字表記を修正 [PR #298925](https://github.com/microsoft/vscode/pull/298925)
-   [@rfeltis (Ralph Feltis)](https://github.com/rfeltis)
    -   通知テレメトリにクォータのチェックポイントを追加 [PR #322767](https://github.com/microsoft/vscode/pull/322767)
    -   チャットクォータの推移に関するリマインダーを追加 [PR #320683](https://github.com/microsoft/vscode/pull/320683)
-   [@romalpani (Rohan Malpani)](https://github.com/romalpani): 「質問を尋ねる」カルーセルに、エージェントウィンドウ内で目立つ枠を追加 [PR #322188](https://github.com/microsoft/vscode/pull/322188)
-   [@Sid200026 (Siddharth Singha Roy)](https://github.com/Sid200026): chat.modelChange テレメトリに chatSessionId を追加 [PR #322579](https://github.com/microsoft/vscode/pull/322579)
-   [@tamuratak (Takashi Tamura)](https://github.com/tamuratak): 修正：チャット停止時に `provideLanguageModelChatResponse` へ CancellationToken が伝播されない問題 [PR #319098](https://github.com/microsoft/vscode/pull/319098)
-   [@yavanosta (Dmitry Guketlev)](https://github.com/yavanosta): インライン補完における `handleEndOfLifetime` の `supersededBy` 追跡を修正 [PR #320143](https://github.com/microsoft/vscode/pull/320143)
-   [@yulia-vasyura](https://github.com/yulia-vasyura): 「Apply Update...」コマンドを「Apply Update from File...」に名称変更。 [PR #322504](https://github.com/microsoft/vscode/pull/322504)

`node-pty` への貢献：

-   [@codebytere-ant (Shelley Vohr)](https://github.com/codebytere-ant)
    -   修正: macOS における SetupExitCallback での kqueue fd の閉じ忘れ [PR #931](https://github.com/microsoft/node-pty/pull/931)
    -   修正: Windows において、CreateProcessW の失敗を uncaughtException ではなく 'exit' として表示するように [PR #934](https://github.com/microsoft/node-pty/pull/934)
    -   修正: conpty の起動に失敗した際のパイプハンドルの閉じと属性リストの解放 [PR #935](https://github.com/microsoft/node-pty/pull/935)

### 課題追跡

課題追跡への貢献：

-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@mantasu (Mantas)](https://github.com/mantasu)
-   [@davemcom (DaveM.)](https://github.com/davemcom)

* * *

新機能が利用可能になり次第、すぐに試してくださる皆様に心より感謝しております。ぜひ定期的にこのページをチェックして、新機能をご確認ください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[Updates](https://code.visualstudio.com/updates) の [code.visualstudio.com](https://code.visualstudio.com)の[更新情報](https://code.visualstudio.com/updates)をご覧ください。

[](# "ページトップへ")
