---
product: VSCode
version: 1.144.0
release_title: Visual Studio Code 1.144
release_date: 2026-10-28
source_url: "https://code.visualstudio.com/updates/v1_144"
archived_at: 2026-10-29
---

# Visual Studio Code 1.144

# Visual Studio Code 1.144

リリース日：2026年10月28日 安定版

## 1.144.0のダウンロード

Windows

[x64](https://update.code.visualstudio.com/1.144.0/win32-x64-user/stable)[Arm64](https://update.code.visualstudio.com/1.144.0/win32-arm64-user/stable)

macOS

[ユニバーサル](https://update.code.visualstudio.com/1.144.0/darwin-universal-dmg/stable)[Intel](https://update.code.visualstudio.com/1.144.0/darwin-x64-dmg/stable)[Apple Silicon](https://update.code.visualstudio.com/1.144.0/darwin-arm64-dmg/stable)

Linux

[.deb](https://update.code.visualstudio.com/1.144.0/linux-deb-x64/stable)[.rpm](https://update.code.visualstudio.com/1.144.0/linux-rpm-x64/stable)[.tar.gz](https://update.code.visualstudio.com/1.144.0/linux-x64/stable)[Arm アーキテクチャ](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions)[Snap](https://update.code.visualstudio.com/1.144.0/linux-snap-x64/stable)

## リリースのまとめ

GitHub Universe ([オンラインで参加しましょう！](https://githubuniverse.com/)) への道のりは、数多くのプルリクエストで彩られています！そこで、ひと息ついて、最近リリースされた内容を確認してみましょう。

-   クライアントを閉じるとすぐにエージェントセッションが停止してしまうことを覚えていますか？ そこで、ローカルマシン上でもリモートでもエージェントを稼働させ続けるための独立したプロセスである [Agent Host](https://code.visualstudio.com/docs/agents/concepts/agent-host) を構築しました。
 
-   言語サーバーを考慮して、 、任意のクライアントがエージェントセッションとやり取りできるように、[Agent Host Protocol (AHP)](https://microsoft.github.io/agent-host-protocol/) を設計しました。これにより、VS Code、Copilot CLI、GitHub Copilot App、github.com 間でセッションがシームレスに継続され、中断した箇所からすぐに作業を再開できるようになりました。
    
-   「エージェント」ウィンドウを使えば、自分で作業を開始する場合でも、[自動化機能](https://code.visualstudio.com/docs/agents/run/automations)を使って反復的なタスクを処理する場合でも、単一のインターフェースからワークスペースや環境をまたいでエージェントを管理できます。
    
-   デフォルトでは、エージェントは [Copilot ハーネス](https://code.visualstudio.com/docs/agents/run/agent-harnesses) によって駆動されるようになりました。これは、Copilot Code Review、 Copilot CLI、Copilot アプリ、および Copilot Cloud セッションで使用されているものと同じです。エージェントのカスタマイズを一度記述するだけで、これらすべての環境において一貫して利用できます。
 
-   [Anthropic の Claude Code ハーネスや OpenAI Codex のハーネス](https://code.visualstudio.com/docs/agents/run/agent-harnesses?id=requirements-and-setup)を好む場合は、Copilotのサブスクリプションでそれらを代わりに使用し、慣れ親しんだVS Codeの開発者体験をお楽しみください。
 
-   さまざまなプロバイダーからの新しいモデルが引き続き提供される中、どのモデルが自分のタスクに最適かをどのように判断すればよいでしょうか？ [モデル比較](https://code.visualstudio.com/docs/agents/run/compare-models)（別名「Agent Bake-Off」）を活用し、同じプロンプトを複数のモデルやハーネスで実行して、どの組み合わせが最も優れたパフォーマンスを発揮するかを確認してください。手間をかけずに済ませたい場合は、[Copilot Fusion](https://code.visualstudio.com/docs/agents/concepts/language-models#_copilot-fusion) を利用して、最適なモデルを選択し、複数のモデルを連携させてタスクを処理させることができます。
 
-   ビジョン機能は以前から提供されていましたが、皆様からはさらなる機能強化の要望が寄せられていました。 待望の機能が遂に登場し、チャット内で直接エージェントに[画像の生成](https://code.visualstudio.com/docs/chat/chat-overview#_generate-and-edit-images-experimental)を指示できるようになりました。
    
-   すべてのタスクにおいて、チャットが最適なインターフェースとは限りません。[キャンバス機能](https://code.visualstudio.com/docs/agents/run/canvases)を利用すれば、エージェントとやり取りしたり、エージェントの出力を可視化したりするための、リッチでインタラクティブなUIを作成できます。
 
-   エージェントを使ったコーディングは、単にコードを書くだけにとどまりません。 エージェントにブラウザを操作させて結果を検証させたり、自動化やタスク実行のために[コンピュータ上のアプリを操作させたり](https://code.visualstudio.com/docs/agents/run/tools#_control-desktop-applications-experimental)することも可能です。
    
-   必要なものは、自分で作ろう！そこで、私たちは美しい新しい[Markdownエディタ](https://code.visualstudio.com/docs/languages/markdown#_markdown-editor)を作成しました。 生のMarkdownを編集する代わりに、レンダリング済みのMarkdownを直接編集できます。もちろん、ご希望であればソースを編集することも可能です。
    
-   お気づきでない方もいらっしゃるかもしれませんが、[VS Codeの全体的なデザインを一新](https://code.visualstudio.com/blogs/2026/10/15/modern-ui)し、ライトテーマでもダークテーマでも、新鮮で美しい見た目になりました。
    

詳細については、[VS Code Wrappedのブログ記事](https://code.visualstudio.com/blogs)をご覧ください。

## リリースのハイライト

今回のリリースでは、環境をまたいでエージェントの作業を円滑に進め、各タスクに適したモデルを見つけ、変更やツール呼び出しを適切に管理できるようになります。

-   [セッションの継続性](#_session-continuity): リモートを 1 か所で管理し、コンピュータの電源がオフの状態でもセッションや自動化を実行し続けます。
    
-   [Copilot Fusion とモデルの比較](#_models): Copilot にモデルの選択と調整を任せたり、モデルを並べて比較したりできます。
 
-   [画像生成（プレビュー）](#_image-generation-in-copilot-preview): チャット内で直接画像を作成・編集できます。
    
-   [コンピューターの使用（実験的機能）](#_let-agents-use-desktop-apps-with-computer-use): エージェントがコンピューター上のデスクトップアプリを使用できるようにします。
    
-   [ワーキングセット（実験的機能）](#_review-copilot-file-edits-with-the-working-set-experimental)：エディタ内でエージェントによるファイル編集を保持または元に戻すことができます。
    
-   [アシスト付き権限](#_assisted-permissions-are-generally-available): リスクチェックに合格したツール呼び出しを自動的に承認することで、作業の中断を軽減します。
    
-   [カスタマイズ マーケットプレイス](#_discover-marketplace-customizations-preview) および [Copilot コネクタ](#_connect-services-with-copilot-connectors-preview) (プレビュー): ワークフローに適したスキルやプラグインを見つけ、Slack、Notion、 その他のサービスからコンテキストをエージェントセッションに取り込むことができます。
 

すでにインストール済みですか？ VS Code の **更新の確認** をご利用ください。今後追加される機能については、[Insiders ビルド](https://code.visualstudio.com/insiders) をご利用ください。

* * *

## セッションの継続性

### クラウドで Copilot タスクを実行・継続する

クラウド セッションを使用すると、開発マシンをオンラインに保つことなく、VS Code から Copilot タスクを実行できます。リポジトリとツールは、GitHub のインフラストラクチャ上の管理された環境で実行されます。

エディタ ウィンドウの **チャット ビュー** または **エージェント ウィンドウ** から、次の操作が可能です:

-   **Cloud** を選択し、GitHub リポジトリを選んでタスクを開始します。
-   追加の指示を送信したり、承認リクエストに応答したり、エージェントによる変更内容を確認したりできます。
-   セッション一覧から既存のクラウド セッションを再開し、同じ会話を継続できます。

クラウドセッションには、他の Copilot クライアントからもアクセスできます。たとえば、GitHub.com や **GitHub モバイルアプリ** で進捗状況を確認した後、VS Code に戻って作業を続行することができます。

クラウド セッションでは、別のワークスペースが使用されます。ローカルでの未コミットの変更は自動的にコピーされません。この新しいクラウド機能を利用するには、有料の Copilot プランが必要であり、組織のポリシーが適用されます。

### リモート環境の管理

VS Code では、エージェントを実行し、さまざまな（リモート）環境で開発タスクを実行できます。これらの環境の管理を容易にするため、**「リモート環境」** ダイアログを導入しました。このダイアログでは、GitHub Environments、 Dev Tunnels、WSL ディストリビューション、SSH ホストを一箇所にまとめて表示します。

環境ピッカーの下部にある ****リモート環境の管理*** を選択すると、各リモートのステータスを確認したり、接続・切断を行ったり、ピッカーに表示するリモートを選択したりできます。

![GitHub Environments、Dev Tunnels、WSL、 SSH グループ、各リモートのステータス、および接続済みのトンネルに対するインライン操作が表示された「リモート環境」ダイアログのスクリーンショット](/assets/updates/1_144/remote-environments.webp)

[リモートエージェントセッション](https://code.visualstudio.com/docs/agents/run/remote-agent-sessions)。

### クラウドオートメーション（プレビュー）

**設定:** chat.automations.cloud.enabled VS Codeで開く VS Code Insidersで開く

「Agents」ウィンドウ内で直接、Copilot クラウドオートメーションを作成・管理できます。デフォルトで有効になっており、コンピュータがオフの状態でも、スケジュールに従って、またはリポジトリのイベントに応じて GitHub のインフラストラクチャ上で実行されます。

クラウドオートメーションを作成するには、エージェントに設定を依頼するか、「Agents」ウィンドウの「Automations」ビューにある **「Create Automation」** ボタンを使用できます。

クラウドオートメーションでは、以下のことが可能です：

-   **イシューやプルリクエストのイベントに応じて実行されるオートメーションを設定する**：リポジトリでアクティビティが発生した際に自動的に動作します。例えば、自分に割り当てられたイシューを自動的にトリアージするなど。
-   **チームとクラウド上で共有ワークフローを構築する**：リポジトリへのアクセス権を持つ全員が閲覧でき、コパイロットとして機能するオートメーションを作成できます。
-   **エージェントの実行タイミングや実行可能な操作を細かく制御**：許可されるツールを制限したり、フィルターを追加したりして、オートメーションを精密に制御できます。例えば、特定のラベルが付いたイシューが割り当てられた際にオートメーションをトリガーできます。

![クラウド自動化の作成インターフェースを示すスクリーンショット。](/assets/updates/1_144/cloud-automations.webp)

詳細については、Visual Studio Code ドキュメントの [エージェント自動化の作成と管理](https://code.visualstudio.com/docs/agents/run/automations) を参照してください。

### Agent Host Protocol v1.0

VS Code がローカルおよびリモートマシン上のエージェントと通信するために使用するプロトコルである [Agent Host Protocol](https://microsoft.github.io/agent-host-protocol/) の最初のバージョンを公開しました。これには [クラウドオートメーション]（#_cloud-automations-preview）も含まれます）との通信に使用されるプロトコルです。これは、エージェント用のカスタム UI を簡単に構築したり、このプロトコルに対応した任意の UI に組み込めるエージェントプラットフォームを構築したりできるように設計された、オープンで拡張性の高いプロトコルです。

「エージェント」ウィンドウのコマンド **Agents: Add Remote Agent Host...** を使用して、WebSocket ベースのエージェントホストを VS Code インスタンスに追加できます。 `code agent endpoints` を実行すると、エディタで実行中のエージェントホストのエンドポイントを取得できます。私たちは6つの言語でライブラリを公開しており、エージェントがそれらを使用してクライアントやホストを構築するのに優れていることがわかっています。

プロトコルの詳細や追加のリソースについては、[Agent Host Protocol ウェブサイト](https://microsoft)をご覧ください。github.io/agent-host-protocol/)。

* * *

## モデル

### GitHub Copilot Fusion によるモデルのルーティングとオーケストレーション

タスクごとにモデルを選択する代わりに、モデルピッカーで**Copilot Fusion**を選択すれば、Copilotがリクエストをインテリジェントにルーティングし、モデルのオーケストレーションを自動的に行います。 Copilot Fusionは、[Project HydraFusion](https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/)のマルチモデルオーケストレーションと [Copilotの自動モデル選択](https://docs.github.com/copilot/concepts/models/auto-model-selection)によるタスクに応じたモデル選択機能を統合し、パフォーマンスとコスト効率のバランスを最適化します。

各リクエストに対して、Copilot Fusionはタスクに適したモデル、推論の労力、実行パターンを選択します。 たとえば、単純なタスクは1つのモデルで完了しますが、より難易度の高いタスクでは、1つのモデルが解決策の草案を作成し、他のモデルがそれをレビューまたは批評します。レスポンスの下にある労力レベルにカーソルを合わせると、どのモデルが使用されたかを確認できます。

品質とコストのバランスをとるために、労力レベルを選択してください。日常的なコーディング作業には**Standard**、より負荷の高いタスクには**High**、最も複雑なタスクには**Max**を選択します。

Copilot Fusionが使用する各モデルについて、標準料金が課金されます。2026年11月30日まで、有料のCopilotプランをご利用のお客様は、Copilot Fusionの利用時に30%の割引が適用されます。

GitHub Copilot Fusion が一般提供開始されました。Copilot Fusion High および Max は、Copilot Pro+、Max、Business、Enterprise プランで利用可能です。詳細については、[GitHub Copilot Fusion](https://aka.ms/vscode-copilot-fusion) のドキュメントをご覧ください。

### デフォルトおよびより多くのプロジェクトでモデルとハネスを比較

**設定**: sessions.chat.compareAgents.enabled VS Codeで開く VS Code Insidersで開く

[モデルの比較](https://code.visualstudio.com/docs/agents/run/compare-models) では、複数のモデルに対して同じプロンプトを実行し、並べて確認することができます。ユーザー設定や実験によって上書きされていない限り、エージェント ウィンドウ内の対象となる新しいセッションでは、この機能がデフォルトで有効になっています。

![4つのモデルが選択され、「完了」および「判定者を設定」ボタンが表示された「モデルの比較」ピッカーを示すスクリーンショット。](/assets/updates/1_144/compare-models-picker.webp)

今回のリリースでは、モデル比較の対象シナリオをさらに拡大しました：

-   **プロジェクトなしでアイデアを模索：** Gitリポジトリ、ジャッジ、シンセサイザーを必要とせず、フォルダのない**チャット**から独立した試行を実行できます。
-   **ローカルまたは空のリポジトリから開始：** Gitリモートや初期コミットはもはや必要ありません。コミットのないリポジトリの場合、各独立した試行は、ソースブランチやインデックスを変更することなく、無視されていない作業ファイルのスナップショットから開始されます。

キーボードから比較設定を開くには、 対象となるチャット入力欄またはモデルピッカーで ⌥⌘M（Windows、Linux では Ctrl+Alt+M）を押します。

セットアップ画面内では、ナビゲーションボタンには、一般的な「次へ」や「前へ」といったラベルではなく、**「ジャッジの設定」**、**「アテンプトの設定」**、**「合成の設定」**など、それぞれの目的が明示されています。

> **注**: Dev Containers ではモデル比較はサポートされていません。

### Copilot での画像生成 (プレビュー)

**設定:** chat.copilot.imageGeneration.model VS Codeで開く VS Codeで開く Insiders、chat.copilot.imageGeneration.watermark VS Codeで開く VS Codeで開く Insiders。

エージェントは、GPT Image 2.5 Flare を使用して、プロンプトから画像を生成できます。 エージェントに、ウェブサイト用の画像、チャットの背景、新しいアイコン、またはウェブサイトのワイヤーフレームの作成を依頼してください。また、既存の画像をチャットのコンテキストとして追加し、エージェントにその画像の修正やバリエーションの生成を依頼することもできます。

デフォルトの画像生成モデルは GPT Image 2.5 Flare です。画像生成を無効にするには、chat.copilot.imageGeneration.model（VS Code で開く、VS Code Insiders で開く）を `off` に設定してください。画像生成には、選択したモデルへのアクセスが必要であり、会話モデルで使用される AI クレジットに加えて、追加の AI クレジットが消費されます。

さらに、chat.copilot.imageGeneration.watermark（VS Codeで開く VS Code Insiders）を `true` に設定すると、画像に目に見える `Made with AI` の透かしが追加されます。

* * *

## エージェントの統合

### 「コンピュータ使用」機能でエージェントにデスクトップアプリを利用させる

**設定**: chat.agentHost.computerUse.enabled VS Codeで開く VS Code Insidersで開く

一部のタスクは、コードやターミナルではなく、デスクトップアプリで行われます。「コンピュータ使用」機能を使用すると、エージェントはコンピュータ上のアプリを表示・操作できるようになります。この機能は [Copilot ハーネス](https://code.visualstudio.com/docs/agents/run/agent-harnesses) セッションで動作します。

タスクで「コンピュータ使用」が必要な場合、エージェントから有効化の許可を求められます。また、`/computer on` を実行して有効にすることもできます。「コンピュータ使用」は、`/computer off` を実行するまで Copilot に対して有効なままになります。

[コンピュータ使用](https://code) に関する詳細は、visualstudio.com/docs/agents/run/tools#_control-desktop-applications-experimental) をご覧ください。

### キャンバス (プレビュー)

**設定**: chat.canvases.enabled VS Code で開く VS Code Insiders で開く

以前 VS Code 1.142 で導入された [キャンバス](https://code.visualstudio.com/docs/agents/run/agent-harnesses#_use-canvases-with-the-copilot-harness) は、共有される インタラクティブな領域であり、ユーザーとエージェントが同じ成果物を確認・更新できます。今回のリリースでは、キャンバスの検索、管理、および起動がより簡単になりました。

#### 「エージェントのカスタマイズ」エディターでのキャンバスの管理

「エージェントのカスタマイズ」エディターの**Canvases** セクションには、アクティブな Copilot セッションで利用可能なキャンバスが一覧表示され、それらを構成するキャンバス拡張機能がソースごとにグループ化されています。これを表示するには、少なくとも 1 つのメッセージが含まれている Copilot セッションを開き、そこからエージェントのカスタマイズ エディターを開きます。

![エージェントのカスタマイズ エディターに表示される、2 つのワークスペース拡張機能のキャンバスを示すスクリーンショット。](/assets/updates/1_144/agent-customizations-canvases.webp)

**[Browse]** セクションで **[Canvases]** を選択すると、メタデータからキャンバスを提供していることがわかるプラグインを検索できます。一部のキャンバス対応プラグインの中には、そのメタデータを持たず、代わりに**プラグイン**セクションに表示されるものもあります。[キャンバス拡張機能の管理方法](https://code.visualstudio.com/docs/agent-customization/overview#_manage-canvas-extensions)についてご確認ください。

![@type:canvas でフィルタリングされた「エージェントのカスタマイズ」の「参照」ページで、インストール可能なキャンバスプラグインが表示されているスクリーンショット。](/assets/updates/1_144/canvas-marketplace-filter.webp)

#### 「コンテキストの追加」メニューからキャンバスを開く

エディタまたは「エージェント」ウィンドウ内のチャットで、**[コンテキストの追加 (+)]** > **[キャンバス...]** を選択して、利用可能なキャンバスを開くか、フォーカスを戻します。** を選択して、利用可能なキャンバスを開くか、フォーカスを戻します。

![チャットの「コンテキストの追加」メニューで「Canvas」が選択されているスクリーンショット。](/assets/updates/1_144/canvas-add-context-menu.webp)

これにより、エディタウィンドウの **「新しいチャット (+)」** > **「キャンバス」**や、エージェントウィンドウの**「タブを追加 (+)」** > **「キャンバス」**に加え、新たなエントリポイントが追加されます。

* * *

## エージェント

### アシスト付き権限が一般的に利用可能

エージェントは、タスクを遂行するために多くのツール呼び出しを行うことができます。 すべてのツール呼び出しを承認することで、各アクションが明示的に許可されていることを保証できますが、頻繁な呼び出しやリスクの低い呼び出しの場合、この作業は煩雑になりがちです。エージェントに完全な裁量権を与えることはリスクを伴い、意図しないアクションやセキュリティ上の問題を引き起こす可能性があります。

アシスト型権限 （Copilot セッションで一般提供開始）では、エージェントが各ツール呼び出しに対して LLM ベースのリスク評価を行い、リスクの低い呼び出しを自動的に承認します。呼び出しのリスクが高いと判断された場合、またはリスクを判断できない場合は、引き続きユーザーの明示的な承認が必要となります。このアプローチにより、利便性とセキュリティのバランスをとることができます。

権限ピッカーで **アシスト型権限**を選択すると、LLMがツール呼び出しのリスクを評価します。承認された呼び出しは確認を求められずに実行されますが、それ以外の呼び出しについては引き続きユーザーの確認が必要です。「アシスト付き権限」を利用するには「フォルダ分離」が必要であり、組織によって制限される場合があります。 [アシスト型権限の一般提供に関する GitHub の発表](https://github.blog/changelog/2026-10-26-github-copilot-assisted-permissions-generally-available/)をご確認ください。

### セッションコンポーザーのコントロール (実験的機能)

新しいエージェント セッションの開始は頻繁に行う操作であるため、主要な設定を上部にまとめ、素早くアクセスできるショートカットを追加しました。

#### まず環境を選択する

セッションの継続性により、エージェントセッションを実行する場所やアクセス元は完全に自由に選択できます。そのため、「エージェント」ウィンドウで新しいセッションを作成する際、まず最初にセッションが実行される環境を選択することになるでしょう。環境ピッカーを使用して、**このコンピュータ**、**クラウド**、対象となるリモートホスト、またはサポートされている Dev Container から選択してください。

その他の設定オプションは、選択した環境に応じて変化します。たとえば、ローカルでセッションを作成する場合は、ブランチやワークツリーのコード分離オプションを指定できます。

環境ピッカーを非表示にするには、sessions.chat.experimental.environmentPicker を無効にしてください。VS Code で開く VS Code Insiders で開く。

![「新しいセッション」コンポーザー内の環境ピッカーを示すスクリーンショット。「このコンピュータ」、「クラウド」、「GitHub 環境」、 Dev Tunnels、およびSSHオプションが表示されたスクリーンショット](/assets/updates/1_144/session-composer-environment-picker.webp)

#### プロジェクトなしでのチャット

**設定**: sessions.chat.experimental.workspaceOptOut VS Code で開く VS Code で開く Insiders

特定のワークスペースやフォルダに関連付けられていないエージェントとの会話を開始したい場合があります（ワークスペースなしのチャット）。ワークスペースピッカーをスクロールする代わりに、ピッカーにカーソルを合わせ（またはキーボードフォーカスを当てる）、`X` を選択することで、現在の選択を解除できます。

`sessions.chat.experimental.workspaceOptOut` を有効にする（VS Code で開く、VS Code Insiders）ことで、選択されたワークスペースを閉じることができます。

進行中のセッションで選択されたワークスペースを閉じても、プロンプトと添付ファイルは保持されます。この操作は、ワークスペースレスチャットをサポートするハーネスおよび環境でのみ利用可能です。

#### 画面の整理

画面の煩雑さを軽減するために、各主要な設定オプションをアイコンのみ表示するように縮小できます。UI コントロールを右クリックし、**「アイコンに折りたたむ」** を選択してください。各ピッカーのツールチップとアクセシビリティ名は保持され、選択内容は再読み込みや設定の同期後も維持されます。

#### キーボードの使用

フォーカスが当たっている新規セッションのチャット入力欄から、⌘K ⌘E（Windows、Linux：Ctrl+K Ctrl+E）、⌘K ⌘B（Windows、Linux：Ctrl+K Ctrl+B）、⌘K ⌘T （Windows、Linux: Ctrl+K Ctrl+T）、または ⌘K ⌘Y（Windows、Linux: Ctrl+K Ctrl+Y）を使用して、利用可能なコントロールにアクセスできます。折りたたまれたセッションオプションは、必要に応じて展開されます。同期ショートカットはフォーカスを移動させるだけです。Enter キーを押して同期を行ってください。

### デフォルトとしての Copilot ハーネス

Copilot ハーネスは、VS Code での新規セッションのデフォルトとして引き続き使用されます。これは、Copilot SDK を基盤として構築された最新のハーネスであり、Copilot 製品全体での動作、機能、および改善を統一するための共通基盤となっています。

新しいセッションを開始する際、ハネスピッカーに表示される **Copilot** は、そのセッションが Copilot ハネスを使用していることを示しています：

![ハネスピッカーで Copilot が選択されているスクリーンショット。ホバーすると、Copilot SDK および Agent Host との統合に関する説明が表示されます。](/assets/updates/1_143/harness-copilot-description.webp)

VS Code では、Copilot ハーネス セッションをバックグラウンドで実行し続け、VS Code エディタ ウィンドウと「エージェント」ウィンドウの両方からアクセスできます。 これらのセッションは、[Agent Host](https://code.visualstudio.com/docs/agents/concepts/agent-host) を通じて実行されます。

#### ワーキングセットを使用した Copilot によるファイル編集の確認 (実験的機能)

**設定:** chat.editor.workingSet.enabled VS Code で開く VS Code Insiders で開く

Copilot ハネスは、エージェントツールを通じて行われた編集内容をワーキングセットに記録するため、ローカルハネスと同様に、変更内容を確認して、どの変更を保持するか、または元に戻すかを決定できます。エディタ内のインライン **Keep** および **Undo** コントロールを使用して個々の変更を処理するか、チャット入力欄の上にあるワーキングセットからファイルや保留中の変更をまとめて管理できます。

エディタウィンドウでは「Keep」と「Undo」がデフォルトで有効になっていますが、これらはまだ実験的な機能です。代わりに「Changes」ピルを表示するには、chat.editor.workingSet.enabled VS Code で開く VS Code Insiders で開く を `false` に設定すると、代わりに「変更」ピルが表示されます。ターミナルコマンドを通じて行われた変更は、ワーキングセットには表示されません。エージェントウィンドウの **変更** ビューを使用して、ファイルを破棄してください。

貴重なフィードバックを寄せてくださった皆様、誠にありがとうございます。今回のリリースには、皆様からのフィードバックを直接反映したさらなる改善が含まれています。引き続き、[イシューの報告](https://github.com/microsoft/vscode/issues) を通じて、Copilot ハーネスの動作状況について引き続きお知らせください。皆様からのフィードバックは大きな助けとなり、ハーネスの体験を直接形作っています。

[Copilot ハーネスの使い方](https://code.visualstudio.com/docs/agents/run/agent-harnesses) での操作方法を確認するか、[エージェントホストのブログ記事](https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture) でアーキテクチャやワークフローについて詳しくご覧ください。

### Copilot ハーネスにおける Copilot Memory

Copilot ハーネスのセッションでは、Copilot CLI、Copilot クラウドエージェント、Copilot コードレビューなど、他の Copilot インターフェースでも使用されているのと同じクラウドメモリサービスである [Copilot Memory](https://docs.github.com/copilot/concepts/agents/copilot-memory) を利用できるようになりました。

エージェントはセッション開始時に関連するリポジトリの事実やユーザーの設定を記憶し、作業中に新たに学んだことを保存するため、新しい会話のたびに同じコンテキストを繰り返す必要はありません。

記憶内容は、リポジトリへのアクセス権を持つ他のユーザーと共有される「リポジトリの事実」として、またはすべてのリポジトリに適用される「ユーザー設定」として保存されます。 規約や設定をエージェントに記憶させたい場合は、必要に応じてその適用範囲を明示してください：

```
すべてのリポジトリにおいて、コミットメッセージの件名は簡潔にすることを好むことを記憶しておいてください。
```

Copilot Memoryはデフォルトで有効になっており、[GitHub上のCopilot Memory設定](https://github.com/settings/copilot/memory)および組織のポリシーに従います。GitHub上でいつでも記憶内容を確認・削除できます。

[エージェントでのメモリの使用方法](https://code.visualstudio.com/docs/agents/run/memory) について詳しくはこちらをご覧ください。

### ワークツリーのストレージ管理（実験的機能）

**設定**: chat.agentSessions.sessionStorageCleanupSuggestion.enabled VS Code で開く VS Code Insiders で開く

前回のリリースでは、ワークツリーが使用しているディスク領域を解放できるよう、エージェント セッションのワークツリー ストレージのクリーンアップ機能を導入しました。今回のリリースでは、削除したいワークツリーを見つけるための方法がさらに追加されました：

-   **過去のすべてのワークツリーを表示**：デフォルトで **いつでも** オプションが選択されており、 これにより、最近のワークツリーだけでなく、古いものも確認できます。
-   **ワークスペースでワークツリーを検索**：各行にはワークスペースが表示され、ワークスペースフィルターで結果を絞り込むことができます。ワークスペースフィルターを変更すると、選択内容がクリアされます。

![「ワークツリーのクリーンアップ」画面のスクリーンショット。 各行にワークスペース名が表示され、「すべてのワークスペース」が選択されている状態](/assets/updates/1_144/worktree-cleanup-workspace-filter.webp)

クリーンアップの提案が有効になっており、ローカルワークツリーのディスクの空き容量が 5 GB 未満の場合、エージェントウィンドウのセッションリストの下に、ワークツリーの経過時間や数に関係なく、ワークツリーのクリーンアップを実行するよう提案が表示されます。この提案をクリックすると、**「いつでも」**が選択された状態でクリーンアップが開始されます。

![ディスク容量がほぼ満杯であることを示す通知と、「ワークツリーのクリーンアップを開く」および「再度表示しない」アクションが表示されたスクリーンショット。](/assets/updates/1_144/diskspace-full.webp)

### エージェントウィンドウでの拡張機能の有効化

拡張機能は、[エージェント]ウィンドウから直接実行したり、有効化・無効化したりできます。これには、extensions.experimental.agentsWindowManagement を VS Code で開く VS Code Insiders で `true` に設定する必要があります。

![エージェントウィンドウ内の拡張機能](/assets/updates/1_144/extensions-in-agents-window.webp)

* * *

## エージェントのカスタマイズ

### Copilot コネクタによるサービスの連携 (プレビュー)

変更の背景にある Slack のディスカッション、Notion のプロジェクトコンテキスト、または Microsoft Learn の API ドキュメントを、エージェント セッションに取り込むことができます。 [Copilot コネクタ](https://code.visualstudio.com/docs/agent-customization/copilot-connectors) は、GitHub が管理する MCP サーバーであり、ローカルサーバーのセットアップや MCP の設定を必要とせずに、エージェントをこれらのサービスに接続します。

[ブラウズを開く](vscode://chat-customizations/open?page=discover)し、ソースメニューから**Copilotコネクタ**を選択して、サービスの**接続**をクリックします。ブラウザでアクセスを承認してください。 一度接続すれば、同じアカウントでサインインしているサポート対象の Copilot クライアント間でその接続を再利用できます。

![「Browse」内の Copilot Connectors ソース画面のスクリーンショット。Port、Postman、Sentry、Slack、Statsig、Work IQ が一覧表示され、「Connect」および「Disconnect」ボタンが付いています。](/assets/updates/1_144/copilot-connectors.webp)

コネクタはすべての Copilot プランでデフォルトで有効になっており、Copilot ハーネスでのみ機能します。Business および Enterprise プランの場合、管理者が **エディターのプレビュー機能** を有効にする必要があります。 組織の MCP 制限が適用され、一部のサービスでは管理者の承認が必要となります。

### マーケットプレイスのカスタマイズ機能（プレビュー）

スキル、ツール、ワークフロー全体を、一から構築することなくエージェントに追加できます。[**閲覧**](https://code.visualstudio.com/docs/agent-customization/overview#_discover-marketplace-customizations-preview)、 「カスタマイズ」の新しいホームページでは、**GitHubフィード**と、[ご自身または所属企業が設定したマーケットプレイス](https://code.visualstudio.com/docs/agent-customization/agent-plugins#_configure-plugin-marketplaces)からのプラグインが一箇所にまとめられています。

**編集部のおすすめ**、**計画・構築・リリース**、**作業の連携**を閲覧したり、ソースやタイプで検索・フィルタリングしたりできます。[「Browse」を開く](vscode://chat-customizations/open?page=discover) するか、**Chat: カスタマイズを開く**を実行して開始してください。

![「カスタマイズ」の「ブラウズ」ページを示すスクリーンショット。**編集部のおすすめ**と**計画、構築、リリース**のセクションが表示され、ソースメニューが開いて GitHub Feed、Copilot コネクタ、プラグイン マーケットプレイスのリストが表示されています。](/assets/updates/1_144/customization-marketplace.webp)

README やチームガイドから「ブラウズ」ページへのリンクを貼ることができます。必要に応じて検索機能を追加することも可能です。例：[MCP サーバーに絞り込んだブラウズ](vscode://chat-customizations/open?page=discover&search=%40type%3Amcp)。

GitHub Feed を利用するには、サポートされているハーネスが必要であり、ローカル セッションでは利用できません。Copilot Business および Enterprise の場合、管理者が **エディターのプレビュー機能** を有効にする必要があります。

### GitHub Copilot カスタムエージェントの編集機能の強化

GitHub Copilot ハーネス用のエージェントをカスタマイズする場合、補完機能、ツールチップ、および検証機能により、利用可能なモデル、ツール、スキルを選択しやすくなり、エージェントを実行する前に設定エラーを検出できます。

-   **モデル**: `model` 属性は、Copilot モデル ID を単一の値、または優先順位付きのリストとして指定します。
-   **ツール**: `tools` 属性は、Copilot ツールのエイリアス（ `read`、`edit`、`execute` などの Copilot ツールのエイリアスに加え、適格なクライアントおよび拡張機能ツールを指定できます。
-   **スキル**: `skills` 属性では、利用可能なスキルが提示され、補完やツールチップに説明やソース情報が表示されます。
-   **設定の検証**: Copilot 固有の属性やネストされた構造（ フックやエージェントスコープの MCP サーバーなど、補完、ツールチップ、および検証機能が提供されます。未知のモデル、ツール、スキルは検出が完了した後にのみフラグが立てられるため、インベントリの読み込み中に有効な値がエラーとしてマークされることはありません。
-   **本文の機能**: GitHub Copilot のエージェントファイルでは、や などのプレースホルダーが認識され、ホバー表示が行われます。未知のプレースホルダーや、ローカルのみで有効な `#tool:` および `#file:` の参照にはフラグが立てられます。

### カスタムエージェント編集のためのハーネス対応のデフォルト設定

`.agent.md` ファイルに `target` 属性がない場合、エディタはアクティブなカスタマイズ・ハーネスを使用して、一致する補完、ホバー、診断情報を提供するようになりました。ハーネスを切り替えると、ファイルを再オープンすることなく、このガイダンスが更新されます。明示的な `target: vscode` または `target: github-copilot` を指定すると、引き続きデフォルト設定が上書きされます。

### プラグインやカスタマイズへのリンクを共有する

README やチームガイド内でディープリンクを共有することで、他のユーザーが [エージェントプラグインマーケットプレイス](https://code.visualstudio.com/docs/agent-customization/agent-plugins) へのアクセス、特定のプラグインのインストール、またはカスタマイズダイアログ内のページを開くのに役立ちます。

アクション

リンク例

マーケットプレイスを追加

`vscode://chat-plugin/add-marketplace?ref=owner/repo`

マーケットプレイスを追加し、指定したプラグインをインストール

`vscode://chat-plugin/install?source=owner/repo&plugin=plugin-name`

検索フィルターを設定して「プラグイン」ページを開く

`vscode://chat-customizations/open?page=plugins&search=github`

`owner/repo` をマーケットプレイスの GitHub リポジトリに、`plugin-name` をそのマーケットプレイスでのプラグイン名に置き換えてください。 VS Code は、マーケットプレイスの追加やプラグインのインストールを行う前に確認を求めます。これらの操作では Copilot ハーネス セッションが使用されます。利用可能なセッションがない場合、VS Code はセッションを作成する前に確認を求めます。プラグインはマシン上でコードを実行する可能性があるため、ソースを信頼できる場合にのみ操作を進めてください。

プラグインの README には、以下のリンクを ****「VS Code にインストール」** ボタンを設定する際は、[Session timeline プラグインの「はじめに」セクション](https://github.com/microsoft/vscode-team-kit/tree/main/session-timeline#getting-started) に示されているように、これらのリンクを使用してください。

カスタマイズ用のリンクでは、`agents`、`skills`、`instructions`、`hooks`、`mcp-servers`、`tools`、`migrations` などのページもサポートされています。 `search` を省略すると、フィルターなしでページが開きます。VS Code Insiders を開くには、`vscode://` の代わりに `vscode-insiders://` を使用してください。

### スラッシュコマンドで Copilot のカスタマイズを管理する

Copilot ハネス セッションのチャット ビューを離れることなく、プラグイン、MCP サーバー、およびスキルを管理できます。`/plugin`、`/mcp`、または `/skills` の後にスペースを入力すると、利用可能なサブコマンドが表示されます。

-   **プラグイン**: [エージェントプラグイン](https://code.visualstudio.com/docs/agent-customization/agent-plugins)の一覧表示、インストール、更新、有効化、無効化、アンインストールが可能です。`/plugin marketplace` を使用してマーケットプレイスを管理したり、`/plugin install` を使用してインストールするプラグインを選択したりできます。
-   **MCP サーバー**: サーバー名を指定して `/mcp show`、`/mcp enable`、または `/mcp disable` を使用し、[MCP サーバー](https://code.visualstudio.com/docs/agent-customization/mcp-servers) を確認または管理します。
-   **スキル**: スキル名を指定して `/skills info` を実行すると、利用可能な [エージェントスキル](https://code.visualstudio.com/docs/agent-customization/agent-skills) を確認できます。

補完機能により、サポートされているサブコマンドや、関連するプラグイン、マーケットプレイス、サーバー、スキルの名前が提案されます。利用可能なコマンドは Copilot ランタイムによって異なり、結果はチャットに直接表示されます。

以下の動画では、`vscode-team-kit` マーケットプレイスを閲覧し、`/plugin install` を使用して Session タイムライン プラグインをインストールする手順を紹介しています。

* * *

## セッション管理

### チャットをセッション間で移動する（プレビュー）

**設定**: chat.agentHost.moveChats.enabled VS Codeで開く VS Code Insidersで開く

[エージェントウィンドウ](https://code.visualstudio.com/docs/agents/run/agents-window) を使用すると、関連する会話をセッションごとに整理できます。作業の進捗に合わせて、会話を最初からやり直したり履歴を失ったりすることなく、それらの会話を再配置できます。

-   ネストされたチャットを別のセッションにドラッグするか、そのセッション内のネストされたチャットの間へドロップして位置を指定します。
-   ネストされたチャットを右クリックし、**「セッションに昇格」** を選択すると、そのチャット専用のセッションが作成されます。また、セッション一覧の空きスペースにドラッグすることもできます。
-   単一のチャット セッションを別のセッションの上にドラッグして、そこにネストさせることができます。
-   ネストされたチャットをドラッグして並べ替えたり、コンテキストメニューの**上へ移動**や**下へ移動**を使用したりできます。 セッション一覧にフォーカスを合わせた状態で、⇧⌥↑（Windows、Linux：Shift+Alt+上矢印）および⇧⌥↓（Windows、Linux：Shift+Alt+下矢印）を使用します。

移動時には、チャットの作業フォルダ（既存のワークツリーや、ワークスペースを持たないチャット用の一時フォルダを含む）が保持されます。共有ワークツリーは、別のセッションがそれを使用している間も利用可能です。セッション間の移動には、同じエージェントとプロバイダー、および複数のチャットをサポートする移動先が必要です。サブエージェントの会話は、独立してではなく、親チャットと共に移動します。

セッションリストには移動の進行状況が表示され、移動後に **元に戻す**機能も提供されます。Stable版でこの機能を試すには、設定を有効にしてください。Insiders版ではデフォルトで有効になっています。

[エージェント ウィンドウでのセッションの整理](https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions#_organize-sessions) について詳しくは、こちらをご覧ください。

### ネストされたセッションのワークスペースを選択する

以前は、ネストされたセッションは親セッションのワークスペースを継承していました。現在では、ネストされたセッションごとに個別のワークスペースを選択できるようになりました。これにより、関連する会話を 1 つのセッションにまとめつつ、リポジトリをまたいで作業を行うことが可能になります。たとえば、フロントエンドのチャットとバックエンドのチャットを、タスクを別々のセッションに分割することなく、異なるフォルダーで処理できます。

「エージェント」ウィンドウで **「新しいネストされたセッション」** を選択すると、コンポーザーが開き、フォルダピッカーが表示されます。このピッカーはデフォルトで親セッションのフォルダが選択されています。最近のフォルダを選択するか、別のフォルダを参照するか、または **「ワークスペースなし」** を選択して、独自の一時フォルダを持つチャットを作成できます。

Gitリポジトリの場合は、**新しいワークツリー**を選択し、ブランチを指定して、ネストされたチャットのファイル変更を分離します。ネストされたチャットは、親セッションのエージェントとホストを使用します。複数の作業ディレクトリをサポートしていないエージェントでは、親セッションのフォルダのみが利用可能です。

### クイックチャットでのネストされたセッション

個別の質問を1つの会話に混在させたり、関連する議論を見失ったりすることなく、クイックチャットをフォローアップできます。たとえば、プロジェクトフォルダを開くことなく、同じクイックチャットの下で2つのアプローチを別々のネストされたセッションで検討することができます。

「エージェント」ウィンドウのクイックチャットでは、ネストされたセッションがサポートされています。クイックチャット上の **+** を選択するか、コンテキストメニューから **新しいネストされたセッション** を選択してください。

各ネストされたセッションは、**「ワークスペースなし」**が選択された状態で開始され、親となるクイックチャットとは別の独自の一時フォルダが割り当てられます。クイックチャットは**「チャット」**セクションに残り、関連する会話がまとめて表示されます。

### セッショングループのカスタムアイコンと色

カスタムアイコンとテーマに応じた色を使用することで、ワークスペースグループ、環境グループ（リモートホストを含む）、およびカスタムグループを識別しやすくできます。「エージェント」ウィンドウで、グループのコンテキストメニューを開き、**「アイコンの変更...」**または**「色の変更...」**を選択します**を選択します。設定内容は再読み込みやホストの再接続後も保持され、**デフォルトにリセット**を選択すると、アイコンや色を個別に復元できます。_[#343576](https://github.com/microsoft/vscode/pull/343576)_

* * *

## チャット

### セッションコンテキスト付き音声会話（実験的機能）

[音声モード](https://code.visualstudio.com/docs/configure/accessibility/voice) ( agents.voice.enabled VS Codeで開く VS Codeで開く Insiders ) を使用すると、コーディングエージェントが作業している間、タスクについて声に出して話し合うことができます。独自のAPIキー ( agents.voice.useBYOKVoiceModel VS Codeで開く VS Codeで開く Insiders ) を使用して、コーディングリクエストを開始することなく、「どこまで進んだ？」や「どのセッションに入力が必要？」といった質問をすることができます。

![青い「Voice Mode」インジケーターと、その上にカーソルを合わせると OpenAI GPT Live がリアルタイム音声プロバイダーとして識別されることを示すスクリーンショット。](/assets/updates/1_144/voice-mode-connection-hover.webp)

デフォルトで有効になっている agents.voice.sessionAwareness（VS Codeで開く、VS Code Insiders）は、追跡されたセッションや最近のアクティブチャットのコンテキストに関する限定的な概要を、OpenAI BYOKボイスモードと共有します。これには、セッションのタイトル、応答の要約、 保留中のプロンプトの詳細、選択されたモデル、添付ファイル名などが含まれますが、添付ファイルの内容は含まれません。

ボイスモードのアニメーションは、より会話的な雰囲気を演出するために単一の色を使用しています。いつでも会話に加わって話すことができます。

GPT Liveでの会話では、フォローアップや進行中の作業もより予測可能な形で処理されます：

-   エージェントが作業中に質問をして回答を聞くことができ、その他の更新情報はキューに入れられ、後で読み上げられます。
-   単一質問形式では質問全文が読み上げられ、複数質問形式では番号付きの回答が1つずつ収集されます。
-   作業進行中に発話された新しいコーディング指示は、タスクが完了するまでキューに保留されるのではなく、「ステアリング」として送信されます。ステアリングは、プロバイダーがサポートする次の機会に適用されますが、即座の中断が保証されるわけではありません。作業進行中の音声のみのやり取りは、後のリクエストのために保持されません。

### ローカライズされた音声承認とより明確な接続ステータス（実験的機能）

選択した音声言語（ agents.voice.language VS Codeで開く VS Codeで開く Insiders ）でGPT Liveツールのリクエストを承認または却下できます。25の言語に対応しており、フォールバックとして英語が使用されます。 表示された選択肢のラベル、数字、または許可されている場合は自由入力で質問に回答できます。曖昧な承認については、依然として明示的な回答またはチャット操作が必要です。

音声言語の設定は、エージェントが提示する質問や選択肢を翻訳するものではありません。「skip」や「other」などのコマンドは、引き続き英語のみとなります。

* * *

## エディターの操作性

### 問題報告ツール

**設定**: issueReporter.wizard.enabled VS Code で開く VS Code で開く Insiders 、issueReporter.wizard.openLocation VS Code で開く VS Code で開く Insiders 、issueReporter.additionalRepositories VS Codeで開く VS Codeで開く Insiders

明確な手順、スクリーンショット、ログが記載されたイシューは、再現や修正が迅速に行えます。[新しいイシュー報告ツール](https://code.visualstudio.com/updates/v1_122#_improved-issue-reporting-flow)は、issueReporter.wizard.enabled VS Code で開く VS Code で開く Insiders で有効化でき、質の高いイシューを簡単に作成できるようになります。VS Code を離れることなく、キャプチャバーから、またはキーボードショートカット(workbench.action.issueReporter.captureScreenshot) や kb(workbench.action.issueReporter.toggleRecording) を使用して、VS Code を離れることなくスクリーンショットや画面録画をキャプチャできます。

今回のリリースでは、新しいイシューレポーターに以下の変更が加えられました:

-   フォームが 3 ステップから 1 ページにまとめられました。
-   ログファイルや ZIP アーカイブなど、イシューのデバッグに役立つ他のファイルを添付できるようになりました。また、画像や動画をフォームに貼り付けたり、ドラッグ＆ドロップしたりすることもできます。
-   レポーターは独立したウィンドウで開きます。代わりにエディタのタブで開くには、issueReporter.wizard.openLocation Open in VS Code Open in VS Code Insiders を `editor` に設定してください。
-   チームのトラッカーなど、他の GitHub リポジトリにイシューを登録するには、issueReporter.additionalRepositories Open in VS Code Open in VS Code Insiders に `owner/repo` 形式で追加してください。その後、フォームからリポジトリを選択します。

* * *

## ターミナル

### Windows では、ターミナルコマンドによるダイアログが VS Code の前面に開きます

**設定**: terminal.integrated.windowsReparentConsoleWindow VS Code で開く VS Code Insiders で開く

Windows では、一部のコマンドラインツールがダイアログを開きますが、ターミナルから実行すると、そのダイアログが VS Code の背後に表示される場合があります。たとえば、Azure PowerShell の `Connect-AzAccount` サインインピッカーが VS Code ウィンドウの背後で開かれていたため、VS Code を移動または最小化するまで、コマンドが応答していないように見えました。

VS Code では、Windows Terminal と同様に、各ローカルターミナルを表示するウィンドウを、そのターミナルの非表示コンソールウィンドウの所有者とするようになりました。ツールがコンソールウィンドウに添付するダイアログは、ターミナルが含まれる VS Code ウィンドウの前面に開くようになりました。

これには、terminal.integrated.windowsUseConptyDll VS Code で開く VS Code で開く Insiders が有効になっている必要があります。この設定はデフォルトで有効になっています。この動作を無効にするには、terminal.integrated.windowsReparentConsoleWindow Open in VS Code Open in VS Code Insiders を `false` に設定してください。

* * *

## エンタープライズ

### より明確な権限制限

組織によって制限されている場合、「Assisted」および「Allow All」は表示されたまま無効化され、消える代わりに説明が表示されます。

Copilot 管理設定の例：

```
{
  "permissions": {
    "disableAssistedPermissionsMode": true,
    "disableBypassPermissionsMode": "disable"
  }
}
```

![組織ポリシーにより「Assisted」の権限と「Allow All」が無効化されていることを示すスクリーンショット。](/assets/updates/1_144/managed-permission-modes.webp)

### 組織管理によるセッションのデフォルト設定

エディタウィンドウおよびエージェントウィンドウでの新しいチャットでは、組織のデフォルトモデル、[Copilot Fusion](#_route-and-orchestrate-models-with-github-copilot-fusion) ティア、および権限レベルが優先され、記憶された選択内容よりも優先されます。 ポリシーで許可されている場合、セッション内でこれらのデフォルト設定を変更できます。利用できない権限モードは「手動」にフォールバックします。

Fusion Maxが利用可能な組織におけるCopilot管理設定の例：

```
{
  "model": "fusion",
  "fusionTier": "max",
  "permissions": {
    "defaultMode": "assisted"
  }
}
```

![Copilot Fusion Max および「アシスト」権限で構成されたチャットを示すスクリーンショット。](/assets/updates/1_144/managed-session-defaults.webp)

### 管理設定の読み込み進捗

組織設定の読み込みが遅い場合、通知トーストが積み重なるのではなく、待機中のチャット内に進捗状況が表示されます。バックグラウンドでの読み込みによって作業が中断されることはなくなりました。

![チャット内で組織管理設定の読み込み進行状況が表示されているスクリーンショット。](/assets/updates/1_144/managed-settings-loading.webp)

* * *

## 拡張機能への貢献

### GitHub プルリクエスト

プルリクエストやイシューの作成、管理、作業を可能にする [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) 拡張機能の開発がさらに進みました。新機能は以下の通りです：

-   「スタックの更新」アクションは、可能な場合に GitHub API を使用してスタックされたプルリクエストを更新するようになったため、スタック内のプルリクエストをチェックアウトしておく必要がなくなりました。
-   プルリクエストの概要画面では、そのプルリクエストのブランチが、まだスタックされていない他の未解決のプルリクエストと一致している場合、スタックを作成するよう促すバナーが表示されます。 ![PRはスタック可能です](/assets/updates/1_144/pull-can-stack-banner.webp)

このリリースの詳細については、[0.174.0の変更履歴](https://github.com/microsoft/vscode-pull-request-github/blob/main/CHANGELOG.md#01740) リリースの[変更履歴](https://github.com/microsoft/vscode)を確認して、このリリースの詳細をご確認ください。

* * *

## 拡張機能の作成

### OIDC および Trusted Publishing を使用した拡張機能の公開

GitHub Actions から、リポジトリのシークレットとして個人アクセストークン (PAT) を保存することなく、Visual Studio Marketplace に拡張機能を公開できるようになりました。`vsce publish --oidc` コマンドは、GitHub Actions から短期間有効な OpenID Connect (OIDC) トークンをリクエストし、それを最大15分間有効な一時的なMarketplace認証情報と交換します。 トークンの交換に失敗した場合、`vsce` は PAT にフォールバックしません。

開始するには、Visual Studio Marketplace のパブリッシャー管理ページで、リポジトリおよびワークフロー用の Trusted Publishing ポリシーを作成し、パブリッシングジョブに `id-token: write` 権限を付与し、ワークフロー内で `vsce publish --oidc` を実行してください。OIDC をサポートする `@vscode/vsce` のバージョンを使用してください。 `4.0.2` 以降など、OIDCをサポートするバージョンを使用してください。

Trusted Publishingは現在、GitHub Actionsでのみサポートされています。Azure Pipelinesの場合は、引き続きサービス接続を使用したMicrosoft Entra IDをご利用ください。Azure DevOpsのグローバルPATは2026年12月1日に廃止されるため、拡張機能の公開を いずれかの安全な方法に移行することをお勧めします。

[vsce を使用した拡張機能の公開](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#publish-with-github-actions-and-trusted-publishing) について詳しくは、こちらをご覧ください。

[Visual Studio Marketplace ブログ記事「Trusted Publishing」](https://aka.ms/vsm/trustedpublishing/blogpost)の詳細をご覧ください。

* * *

## 非推奨の機能と設定

なし

* * *

## 謝辞

### 課題追跡

課題追跡への貢献者：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

### プルリクエスト

`vscode` への貢献：

-   [@aguashui (Noah Webber)](https://github.com/aguashui): 雑多な変更 [PR #334932](https://github.com/microsoft/vscode/pull/334932)
-   [@bluerose73 (Shengjie Ma)](https://github.com/bluerose73): xtabの推論コストと補完トークンの上限を構成可能に [PR #342204](https://github.com/microsoft/vscode/pull/342204)
-   [@cipheraxat (Akshat Anand)](https://github.com/cipheraxat): 修正: チャット内で一時停止中のデバッグ位置範囲を有効に保つ [PR #342379](https://github.com/microsoft/vscode/pull/342379)
-   [@dhairyajangir (dhairya)](https://github.com/dhairyajangir): MCPリソースURIテンプレート値のUTF-8エンコーディングを修正 [PR #339846](https://github.com/microsoft/vscode/pull/339846)
-   [@HectorHZZZ](https://github.com/HectorHZZZ): NES: 「適用後に元に戻す」という「編集拒否」メモリモードを追加 [PR #341436](https://github.com/microsoft/vscode/pull/341436)
-   [@mcumming (Michael Cummings (MSFT))](https://github.com/mcumming): RFC 9728 PRM ネゴシエーションによる Entra ID マーケットプレイス API リクエストの認証 [PR #325804](https://github.com/microsoft/vscode/pull/325804)
-   [@r3na7 (renat)](https://github.com/r3na7): ウィンドウのフォーカスが外れた際、エクスプローラーのファイル名変更入力内容を保持する [PR #338126](https://github.com/microsoft/vscode/pull/338126)
-   [@rfeltis (Ralph Feltis)](https://github.com/rfeltis): チャット：Copilot ハーネスチャット入力用のオンボーディング・スポットライトツアー [PR #337814](https://github.com/microsoft/vscode/pull/337814)
-   [@SahinurDEV (Sahinur)](https://github.com/SahinurDEV): デバッグ拡張機能ホスト: 再起動を必要とせず、実行中の拡張機能ホストでインスペクタを有効化 [PR #343437](https://github.com/microsoft/vscode/pull/343437)
-   [@timrogers (Tim Rogers)](https://github.com/timrogers)
    -   新しいクラウドオートメーションのデフォルト設定を「許可されたツールなし」に変更 [PR #342481](https://github.com/microsoft/vscode/pull/342481)
    -   クラウドオートメーションのオプション名 `require_actor_write_permission` を GitHub.com と統一し、リポジトリポリシーへの準拠を確保 [PR #344444](https://github.com/microsoft/vscode/pull/344444)

* * *

新機能が利用可能になり次第、ぜひお試しいただければ幸いです。こちらのページをこまめにチェックして、新機能についてご確認ください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [更新情報](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
