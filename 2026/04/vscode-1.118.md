---
product: VSCode
version: 1.118.0
release_title: Visual Studio Code 1.118
release_date: 2026-04-29
source_url: "https://code.visualstudio.com/updates/v1_118"
archived_at: 2026-04-30
---

# Visual Studio Code 1.118

# Visual Studio Code 1.118

[LinkedIn](https://www.linkedin.com/showcase/vs-code)、[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)でフォローしてください |

* * *

_リリース日: 2026年4月29日_

ダウンロード: Windows: [x64](https://update.code.visualstudio.com/1.118.1/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.118.1/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.118.1/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.118.1/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.118.1/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.118.1/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.118.1/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.118.1/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.118.1/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.118 へようこそ。今回のリリースでは、Copilot エージェントが利用できる範囲が拡大され、効率が向上しました。今回のリリースの主な機能は以下の通りです:

-   [リモート制御](#_remote-control-for-copilot-cli-sessions-experimental): GitHub.com やモバイル端末から、進行中の Copilot CLI セッションをリモートで追跡・制御できます。
    
-   [コードベース検索](#_codebase-search-and-context): 任意のワークスペースでのセマンティック検索や、GitHub リポジトリおよび組織全体でのテキスト検索により、必要なコードを見つけられます。
    
-   [スキル専用コンテキスト](#_dedicated-context-for-skills-experimental): スキルの実行を分離することで、メインのチャットを整理し、より的確な回答を得られます。
 
-   [チャットセッションのインサイト](#_chronicle-experimental): チャットの履歴を、スタンドアップレポートやヒント、過去の作業に関する回答に変換します。
    
-   [エンタープライズ管理](#_approved-account-organizations-policy): 管理者が信頼する組織にのみ、AI機能へのアクセスを制限します。
 
-   [トークン効率の向上](#_improving-token-efficiency): トークン使用量を削減し、各リクエストからより多くの価値を引き出します。
 

プログラミングを楽しんでください！

* * *

## エージェントの体験

### Visual Studio Code Agents (Insiders)

> **注**: Visual Studio Code Agents アプリは現在プレビュー版であり、VS Code Insiders をインストールした場合にのみ利用可能です。

[Visual Studio Code Agents](https://aka.ms/VSCode/Agents/docs) アプリは、VS Code Insiders に同梱されるコンパニオンアプリです。 このアプリは、エージェント専用の環境を提供し、リポジトリをまたいで並列セッションを実行したり、多段階のコーディングタスクを繰り返したりすることができます。Agentsアプリは[1.115](https://code.visualstudio.com/updates/v1_115#_visual-studio-code-agents-preview)で初めて導入され、ユーザーのフィードバックに基づいて改良を続けています。

今回のリリースでは、VS Code Insidersのタイトルバーから直接Agentsアプリにアクセスできるようになり、エージェントを活用したワークフローに簡単に移行できるようになりました。また、使い始めの参考となる専用の[Agentsドキュメント](https://aka.ms/VSCode/Agents/docs)も公開しました。

主な新機能は以下の通りです：

-   **VS Code と Agents 間の状態共有**: Agents アプリは VS Code Insiders との状態共有を強化し、両アプリ間の移行をよりスムーズに行えるようになりました。これには、認証（Windows の場合）、AI のカスタマイズ、ワークスペースの信頼設定、最近使用したフォルダー、キーボードショートカットなどが含まれます。
    
-   **Claudeエージェント**: AgentsアプリでClaudeエージェントが利用可能になりました。これにより、Copilot CLIやCopilot Cloudなどの他のエージェントと併用して、コーディングタスクに活用できます。
 
-   **Webクライアント**: ブラウザから [insiders.vscode.dev/agents](https://insiders.vscode.dev/agents) にアクセスして Agents を利用できます。これにより、Dev Tunnel（`code-insiders tunnel` 経由）が実行されているマシンであればどこでも、エージェント固有のワークフローを利用できるようになります。利用を開始するには、[VS Code Insidersをダウンロード](https://code.visualstudio.com/insiders)し、`code-insiders tunnel`を実行して[Dev Tunnel](https://code.visualstudio.com/docs/remote/tunnels)を設定してください。その後、Webから接続できます。
    
-   **バックグラウンドブラウザ**: 統合ブラウザはセッション間で状態が保持されるため、セッションに戻った際に再読み込みされることはなくなりました。これにより、エージェントが動作している間に統合ブラウザを使用して変更内容をプレビューする際、コンテキストの切り替えがスムーズになります。
    
-   **変更内容のレイアウト制御**: エージェントが変更を加えた際、差分ビューをチャットビューと並べて表示したり、変更内容に集中するためにモーダルウィンドウで開いたりできます。差分ビューのツールバーにあるレイアウト制御を使用して、さまざまな表示モードを切り替えることができます。
 
-   **動的なタイトルバーのエントリポイント**: ワンクリックで VS Code Insiders とエージェントアプリを切り替えることができます。 VS Code Insidersのタイトルバーから**「Agentsで開く」**を選択してAgentsアプリに切り替えたり、Agentsのタイトルバーから**「VS Codeで開く」**を選択してInsidersエディタに戻ったりできます。
 

皆様からのフィードバックはAgentsの体験を形作る上で役立ちます。[GitHubでイシューを報告](https://github.com/microsoft/vscode/issues)して、引き続きご意見をお寄せください。 また、[既存の問題](https://github.com/microsoft/vscode/issues?q=state%3Aopen%20label%3A%22agents-app%22)を確認して他のユーザーが報告した内容を確認し、特定のトピックについてフィードバックを提供することもできます。

### Copilot CLI セッションのリモート制御（実験的機能）

**設定**: github.copilot.chat.cli.remote.enabled VS Code で開く VS Code Insiders で開く

以前は、Copilot CLI セッションを操作するには、セッションを開始したマシンに居る必要がありました。席を離れている間にエージェントが承認待ちで一時停止したり、質問に遭遇したりすると、戻ってくるまで作業が停滞していました。リモートコントロール機能を使えば、どこからでも進行中の Copilot CLI セッションを監視・操作できるため、マシンに縛られることなく、より柔軟に作業を進めることができます。

[Copilot CLIのリモートコントロール](https://code.visualstudio.com/docs/copilot/agents/copilot-cli) を使用すると、Copilot CLI セッションをバックグラウンドで実行し続けながら、別のデバイス（GitHub.com または GitHub モバイルアプリを使用）から進捗の確認、承認への応答、作業の指示を行うことができます。

リモートコントロールを試すには:

1.  VS Code Insiders の設定で `github.copilot.chat.cli.remote.enabled` を有効にします。
2.  Copilot CLI のチャットに `/remote on` と入力して開始します。

`/remote` を実行するとリモートコントロールのステータスを確認でき、`/remote off` を実行するとリモートコントロールを無効にできます。

### Copilot CLI のセッションタイトルの同期

チャットセッションのタイトルは、チャットセッション一覧、チャットエディタのタブやヘッダー、Copilot CLI ターミナルインターフェースなど、さまざまなチャット画面で共通して使用され、セッションを一意に識別するための識別子として機能します。[Copilot CLI](https://code.visualstudio.com/docs/copilot/agents/copilot-cli) セッションの名前を変更した場所によっては、他のチャット画面に以前のタイトルが表示されたままになる場合があります。

VS Codeは、Copilot SDKのセッションタイトルAPIを「真実の源」として採用し、セッション一覧やチャットエディタのヘッダーを単一のタイトルリゾルバ経由で処理することで、各画面間で表示されるタイトルの一貫性を保ちます。これにより、セッションの名前変更元がどこであっても、セッション名を変更した際に、チャットセッション一覧、チャットエディタのタブとヘッダー、およびターミナルでの `copilot --resume` の表示がすべて同期されるようになりました。

Copilot CLI からターミナルで行ったセッション名の変更も、次回セッションのメタデータが読み込まれる際に VS Code に反映されます。

### Copilot がデフォルトで Git の共同作成者として追加される

VS Code では、チャットおよびエージェントワークフローにおいて、Git AI 共同作成機能がデフォルトで有効になりました。Copilot がファイルに変更を加えると、そのコミットの共同作成者として Copilot が自動的に追加されます。

git.addAICoAuthor を使用して、このデフォルトの動作を変更できます。VS Code で開く VS Code Insiders で開く。

## コードベース検索とコンテキスト

### GitHub以外のリポジトリに対するセマンティックインデックス機能が全ユーザーに提供開始

「ユーザー認証はどこで処理していますか？」といった質問をCopilotにすると、エージェントはユーザーの曖昧な意図を、関連する具体的なファイルやシンボルに変換する必要があります。プレーンテキスト検索では入力した文字列そのものと一致するかどうかしか判定できないため、コードベースで異なる用語が使用されている場合、関連するコードを見逃してしまうことがよくあります。 セマンティックインデックスにより、エージェントは「意味」に基づいて検索できるようになり、たとえコード内に「authentication」という単語が一度も登場しなくても、`login`、`signIn`、`verifyCredentials`、`OAuth token exchange` などの関連用語を使用しているファイルを抽出できます。 これにより、エージェントは回答や編集を行う際の根拠をより強固にすることができます。

セマンティックインデックスは、すべてのワークスペースで利用可能になりました。以前は、この機能は GitHub または ADO リポジトリを使用するワークスペースに限定されていました。

セマンティックインデックスは自動的に構築・維持されます。GitHub または ADO リポジトリを使用するワークスペースでは通常、すぐにセマンティック検索を利用できますが、その他のワークスペースでは初期インデックスの構築に数分かかる場合があります。 また、**Build Codebase semantic index** コマンドを使用して、現在のワークスペースのインデックスを明示的に構築することもできます。

セマンティック検索は、Copilotが質問に答えたり編集内容を生成したりする際に、ワークスペースを理解するために使用する多くのツールの一つです。 Copilotはタスクに最適なツールを選択するため、通常、検索方法を細かく管理する必要はありません。セマンティック検索やCopilotが使用するその他のツールの詳細については、[Copilotがワークスペースを理解する方法](https://code.visualstudio.com/docs/copilot/reference/workspace-context)のドキュメントをご覧ください。

### リポジトリや組織を横断するGitHubテキスト検索

エージェントが現在のワークスペース外のコードから特定の文字列、API 名、またはエラーメッセージを検索する必要がある場合、セマンティック検索が常に最適な選択肢とは限りません。既知のリポジトリや組織全体に対して、あいまいな検索ではなく、正確な一致を求めることになるでしょう。

これに対応するため、CopilotにはGitHubリポジトリまたはGitHub組織全体のコードに対してgrep形式の検索を行う組み込みエージェントツール `githubTextSearch` が追加されました。これは、GitHubリポジトリ内でセマンティック検索を行う既存の `githubRepo` ツールを補完するものです。これらを組み合わせることで、エージェントは現在作業中のコードベース以外のコードベースからもより深く学習できるようになります。

イシューやプルリクエストの検索・管理といった、より高度な GitHub 機能については、[GitHub MCP サーバー](https://github.com/github/github-mcp-server) の利用をご検討ください。

### スキル専用のコンテキスト（実験的機能）

**設定**: github.copilot.chat.skillTool.enabled VS Codeで開く VS Code Insidersで開く

複数のステップにわたるツール呼び出しを実行したり、大規模な参照資料を取り込んだりするスキルを使用する場合、その補助的なコンテンツがメインのチャットコンテキストを圧迫し、その後の応答の品質を低下させる可能性があります。

これより、メインの会話から実行を分離する専用のサブエージェントコンテキストでスキルを実行できるようになりました。これにより、メインのコンテキストは集中した状態を保ち、スキルの応答品質も維持されます。

専用のサブエージェントコンテキストでスキルを実行するには、`SKILL.md`のフロントマターで `context` 属性を設定してください：

```
---
name: my-skill
description: スキルの説明
context: fork
---
```

この機能は実験的なものであり、`github.copilot.chat.skillTool.enabled`（VS Codeで開く VS Codeで開く Insiders）設定を有効にする必要があります。

### ワークスペースの `.mcp.json` ファイルとサーバーの重複排除

Copilot CLIなどの他のツールと整合させるため、MCPサーバーを宣言するためのワークスペースレベルの `.mcp.json` ファイルのサポートを追加しました。

さらに、同じ名前を持つ MCP サーバーを重複排除する機能も導入しました。デフォルトでは、最も具体的な MCP サーバーのみが有効になり、あるサーバーを有効にすると、同じ名前の他のサーバーは無効になります。有効にする MCP サーバーは、拡張機能ビューで `@mcp @installed` を検索するか、**Chat: カスタマイズを開く** ウィンドウから制御できます。

## トークン効率の向上

4月27日、GitHubはCopilotが2026年6月1日より[使用量ベースの課金](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/)に移行することを発表しました。 プランを最大限に活用していただくため、エージェントの品質を損なうことなくトークンの効率性を向上させるべく、いくつかの取り組みを進めてきました。以下に説明する改善点のほとんどは、すでに実装されています。オプトイン設定が利用可能な場合は、該当するセクションにその旨を記載しています。

### プロンプトキャッシュの効率化

過去数回のイテレーションを通じて、エージェントの動作を変更することなく、システムプロンプト、ツール、会話履歴、要約機能全体でのキャッシュ再利用を改善してきました。実際には、これにより繰り返されるコンテキストのトークン単価が大幅に低減され（例えば、Anthropicモデルでは約10分の1）、長時間にわたるマルチターンなエージェントワークフローにおけるコスト削減に寄与しています。

**戦略的なキャッシュブレークポイントの配置。** キャッシュブレークポイントが効率的に使用され、安定した境界（システムプロンプトの末尾、ツールの末尾、直近のツールターンの末尾、および会話ターンの境界）に配置されるよう、設定箇所を検証しました。その結果、エージェントセッションが開始されると、各リクエストの93%以上が新しい入力として課金されるのではなく、キャッシュから再利用されるようになりました。

**キャッシュ安定性を確保したシステムプロンプトとツールリスト。** キャッシュされたプレフィックスの有効性は、その直前にあるバイト列の品質に左右されます。リクエスト間でバイト列がずれる原因を排除するため、システムプロンプトとツール登録パスを再検討しました。例えば、新しい chat.experimental.symbolTools.cacheStable VS Codeで開く VS Codeで開く Insidersでは、`vscode_renameSymbol`および`vscode_listCodeUsages`を、読み込まれている言語によって変化する説明ではなく、静的な説明で登録しています。 これにより、セッションの途中で言語拡張機能が有効になっても、リクエストが変更されたりキャッシュがリセットされたりすることはなくなりました。また、ツールリストの順序を再編成し、遅延ツールと非遅延ツールが予測可能な形でグループ化されるようにしたことで、ターン間でツール配列のバイト列を同一に保っています。

**キャッシュに優しいバックグラウンド圧縮。** セッションが長引くにつれ、エージェントがコンテキスト不足に陥ることなく動作し続けられるよう、バックグラウンドで古いターンを要約します。モデルは、必要に応じて以前のターンのツール結果や詳細を引き続き参照できます。これらのバックグラウンド要約は、メインのエージェントと同じキャッシュされたコンテキストを再利用するようになり、長時間のマルチターンセッションの効率が著しく向上しました。

**直近2メッセージのブレークポイント戦略。** 長いエージェントセッションでは、古いターンは最終的にキャッシュ可能な範囲から外れてしまいます。そこで、キャッシュのブレークポイントを**システムプロンプト、ツールリスト、および直近の2つのメッセージ**に固定するようにしました。これは現在、github.copilot.chat.anthropic.cacheBreakpoints.lastTwoMessages Open in VS Code Open in VS Code Insiders 設定で利用可能です。

### ツール検索ツール

ツール検索ツールは、エージェントのツールセットを2つのグループに分割することで、リクエストを軽量化します。ツール呼び出しの約88%をカバーする、約30個のツールからなるコンパクトな**常時利用可能**なコアセットが常に含まれます。 残りのツールは**遅延**されます。つまり、モデルが明示的に要求するまで、それらのスキーマはモデルのコンテキストに読み込まれません。エージェントが遅延機能が必要になると、`tool_search`を呼び出します。これにより、クライアント側で埋め込みベースのセマンティック検索が実行され、オンデマンドで最も関連性の高い一致結果が返されます。

その結果、エージェントはフルツールセットへのアクセスを維持しつつ、安定した、 キャッシュ可能なプレフィックスが毎ターン生成され、ターンごとのツール使用量が大幅に削減されます。一方で、エージェントは依然としてフルツールセットにアクセス可能です。

このツール検索機能は、Anthropicモデル（Claude Sonnet 4.5+およびOpus 4.5+）では既デフォルトで有効化されており、最大**20%のトークン削減**が確認されています。 今回のリリースでは、Responses API を通じて、対応する OpenAI モデル（**GPT-5.4 および GPT-5.5**）にもこの機能を展開しており、初期の Insiders テストでは同等かそれ以上の節約効果が確認されています。GPT モデルでツール検索ツールを使用するには、VS Code の Insiders 設定で `github.copilot.chat.responsesApi.toolSearchTool.enabled` を有効にしてください。

### 検索と実行のための新ツール

今回のリリースでは、2つの新しい専用エージェント型ツール「Search」と「Execution」を導入します。どちらも、実行コストが大幅に抑えられる小型の専用モデルによって駆動されます。1ヶ月以上にわたる試験運用を経て、最大20%のトークン削減という有望な結果が得られています。

#### エージェント型検索ツール

Agentic検索ツールは、コードベースの探索とコンテキストの取得を担当します。メインのエージェントがコンテキストを必要とする際、平易な言葉で探している内容を記述すると、検索ツールが処理を引き継ぎます。その後、検索ツールは独立したプロセスを実行し、grep、ファイル検索、セマンティック検索、 ファイル読み取りなどを駆使してワークスペースを検索し、最も関連性の高い結果を返します。

内部的には、このツールは微調整された小型言語モデルによって駆動されており、最小限のターン数で多数の検索を並列実行できるよう訓練されています。この限定された範囲により、検索品質を損なうことなく、レイテンシとコストを低く抑えています。

今後1ヶ月かけてロールアウトを継続し、すべてのCopilot Chatユーザーにこのコスト削減効果をもたらします。

#### エージェント型実行ツール

エージェント型実行ツールは、ターミナルコマンドの実行に関連するあらゆる処理を扱います。エージェントがテストを実行したりビルドを確認したりする必要がある場合、そのタスクを実行ツールに引き継ぎ、実行ツールがコマンドを実行して結果を報告します。スコープを限定するため、実行ツールはターミナルコマンドのみを実行可能であり、1回の呼び出しにつきターミナル呼び出しは10回までに制限されているため、無限ループになることはありません。

ターミナルの出力は長くなりやすく、不要な情報も含まれがちです。タスクが完了すると、実行ツールはその出力をフィルタリングして、コーディングエージェントが実際に必要とする情報のみを抽出し、関連する部分のみを返します。この処理をメインモデルから、より小型で高速なモデルにオフロードすることで、冗長な出力によるトークン消費の増加を防ぎます。

## チャットのパフォーマンスと履歴

### OpenAIモデルでのWebSocket対応

対応しているOpenAIモデルにおいて、チャットリクエストはResponses APIの[WebSocketモード](https://developers.openai.com/api/docs/guides/websocket-mode)を使用するようになりました。ターンごとに新しいHTTPリクエストを開く代わりに、 VS Codeは永続的なWebSocket接続を維持し、新しい入力項目と前回の応答IDのみを送信します。サーバーが会話の状態を保持するため、後続のターンにおけるリクエストサイズとレイテンシが削減され、特にやり取りの多いエージェントワークフローでその効果が顕著です。測定結果によると、WebSocketを使用することでOpenAIモデルの処理速度が**12%向上**します。

選択したモデルがWebSocketモードに対応している場合、設定は不要で自動的に使用されます。

### Chronicle (実験的機能)

**設定**: github.copilot.chat.localIndex.enabled VS Codeで開く VS Code Insidersで開く

Copilotの利用が増えるにつれ、チャット履歴は、自分が何に取り組んだか、どのファイルを操作したか、どのプルリクエストやイシューを参照したかといった貴重な記録となります。しかし、その履歴を振り返るのは困難です。昨日の作業内容を思い出したり、スタンドアップミーティングの準備をしたりするために過去のセッションをスクロールするのは時間がかかり、セッションをまたいで質問したり、自身の利用パターンから学んだりするための簡単な方法もありません。

Chronicleは、ローカルのSQLiteデータベースにチャットのやり取りを追跡することで、この問題を解決します。チャットを行うたびに、セッションのメタデータ（ブランチ、リポジトリ、タイムスタンプ）、会話の流れ、ツール呼び出しを通じて操作したファイル、外部参照（プルリクエスト、イシュー、コミット）が記録されるため、必要に応じてコーディング活動を検索・要約できます。また、Chronicleは利用状況を分析し、プロンプトやツールの使い方を改善するためのパーソナライズされたヒントを提供します。

Chronicleでは、チャット内で使用できるいくつかのコマンドを提供しており、セッション履歴を照会してコーディング活動に関するインサイトを得ることができます：

-   `/chronicle:standup`: 過去24時間のコーディングセッションから、機能/ブランチごとにグループ化されたスタンドアップレポートを生成します。要約、ファイルリスト、PRリンクが含まれます。
    
-   `/chronicle:standup`: 過去7日間の利用状況を分析し、プロンプト、ツールの使用方法、ワークフローに関するパーソナライズされたヒントを提供します。
 
-   `/chronicle [query]`: セッション履歴に対して自由形式の自然言語クエリを実行します（例：「昨日編集したファイルは？」）。
    

この機能は実験的なものであり、VS Code Insiders の設定で `github.copilot.chat.localIndex.enabled` を有効にする必要があります。

## 信頼性とセキュリティ

### 承認済みアカウント組織ポリシー

エンタープライズ組織は、`ChatApprovedAccountOrganizations` デバイス ポリシーを使用することで、承認済み GitHub 組織のメンバーシップに基づいて、チャットおよび関連する AI 機能の有効化を制限できるようになりました。

このポリシーにより、組織はチャットのエントリポイント全体で GitHub アカウントベースのポリシーを一貫して適用できるようになります。チャット機能は、(1) ユーザーが承認済み組織のメンバーシップを持つ GitHub アカウントにサインインし、(2) アカウントベースのポリシーの解決が完了するまで有効化されません。この「失敗時閉鎖」の動作は、GitHub.com でアカウントベースのポリシーを設定しており、チャットが表示される前に利用資格の確認を強制する必要がある企業にとって有用です。

[エンタープライズポリシー](https://code.visualstudio.com/docs/enterprise/policies)の詳細については、こちらをご覧ください。

### デフォルトの読み取り権限のサンドボックス化

`$HOME`ディレクトリ下のすべてのパスに対して、読み取りアクセスが自動的に有効化されることはなくなりました。この更新により、サンドボックスの分離が強化され、コマンドが明示的に必要なファイルのみにアクセスするよう保証されます。

コマンドがサンドボックス内で実行される前に、実行されるコマンドに基づいてのみ読み取り権限が追加され、`$HOME`ディレクトリ内のその他のすべてのパスへの読み取りアクセスは拒否されます。任意のパスにアクセスしようとすると、読み取り権限が拒否されているため失敗します。

デフォルトでは、ワークスペースフォルダーおよびサンドボックスの一時フォルダー（実行時のサンドボックス設定を管理）に対してのみ、`$HOME` ディレクトリ下での読み取りアクセスが許可されます。

## アクセシビリティ

### 質問カルーセルからターミナルにフォーカスを移すキーボードショートカット

**設定**: accessibility.verbosity.chatQuestionCarousel VS Codeで開く VS Code Insidersで開く

ターミナル操作によってトリガーされた質問カルーセル経由でCopilotが質問を表示した際、⌥T（Windows、LinuxではAlt+T）を押すことで、素早くターミナルにフォーカスを戻せるようになりました。以前は、**ターミナルにフォーカス**ボタンを選択する以外に、ターミナルに戻る方法はありませんでした。

このボタンの ARIA ラベルには、スクリーンリーダーのユーザーがより見つけやすいように、キーバインドのヒントも含まれるようになりました。カルーセルの ARIA ラベルにナビゲーションのヒントを表示するかどうかは、accessibility.verbosity.chatQuestionCarousel 設定（VS Code で開く、VS Code Insiders）で制御できます。

## エディターの操作性

### WebView における大規模なローカルリソースの読み込み最適化

速度の向上とメモリ使用量の削減を図るため、[WebView](https://code.visualstudio.com/api/extension-guides/webview) によるローカルリソースの読み込み方法を最適化しました。この変更は、WebView やカスタムエディタを使用するすべての拡張機能に加え、ノートブックのレンダリングなどの VS Code の組み込み機能にも恩恵をもたらします。

VS Code の WebView は、サービスワーカーを使用してワークスペースまたはホストのファイルシステムからリソースを読み込みます。サービスワーカーはローカルファイルへのリクエストをインターセプトし、VS Code のファイルシステム呼び出しを介してプロキシします。これにより、ディスクからのリソース読み込みだけでなく、拡張機能によって提供される仮想ファイルシステムからの読み込みも可能になります。

以前は、ファイルシステムへのリクエストに対して、VS Codeはファイル全体をバッファに読み込んでから、WebViewのサービスワーカーに送信していました。 これは、少数の小さな JavaScript ファイルや画像ファイルであれば機能しますが、1つあたり数十～数百 MB もある動画ファイルを 20 個読み込むような場合には機能しません。

現在では、ファイルの内容をチャンク単位でサービスワーカーにストリーミングしています。このアプローチにより、応答性が向上し、ブラウザエンジンに引き渡す前に VS Code が蓄積しなければならないデータ量も削減されます。

さらに、[transferable streams](https://github.com/whatwg/streams/blob/main/explainers/transferable-streams.md#transferable-streams-explained)を採用することで、ストリーミングを最適化しました。ファイルストリームはVS Codeのメインレンダラープロセスで作成され、WebViewのサービスワーカー内の`new Response(...)`によって直接消費されます。 これにより、以前は複数層に及んでいた `postMessage` 呼び出しを回避できるようになりました。

## 言語

### TypeScript 7.0 Beta のサポート

TypeScript チームと協力し、VS Code の [TypeScript 7](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0-beta/)。TypeScript 7はネイティブコードで完全に書き直されており、パフォーマンスが劇的に向上しています。

TypeScript 7.0ベータ版では、言語機能の改良がさらに進められているほか、エディタの使い勝手を向上させる多くの改善が含まれています。また、TS 7.0を試用したり、現在の安定版であるTS 6.0との間で切り替えたりすることが、さらに簡単になりました。

VS CodeでTS 7.0を試すには、[TypeScript Nativeプレビュー拡張機能](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0-beta/#editor-experience)をインストールするだけです。

## 拡張機能への貢献

### チャットカスタマイズ評価拡張機能

プロンプトファイル、カスタムエージェント、指示、スキルなどのチャットカスタマイズを分析・改善するための新しい拡張機能、**Chat Customizations Evaluations**（拡張機能 ID `ms-vscode.vscode-chat-customizations-evaluations`）を追加しました。カスタマイズファイルを分析した後、この拡張機能はファイル内で検出した問題に対する診断結果を生成し、改善のための推奨事項を提供します。

プロンプト、エージェント、指示、またはスキルの定義ファイルを開き、**[Analyze](分析)** を選択して評価を行います。診断結果が表示されたら、「カスタマイズ評価の修正」スキルを使用して、推奨される変更を適用してください。

## リモート開発

[リモート開発拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)を使用すると、[Dev Container](https://code.visualstudio.com/docs/devcontainers/containers)、 SSHや[リモートトンネル](https://code.visualstudio.com/docs/remote/tunnels)経由のリモートマシン、あるいは[Windows Subsystem for Linux](https://learn.microsoft.com/windows/wsl) (WSL)を、フル機能の開発環境として利用できます。

### デフォルトで有効化された機能用の Dev Container ロックファイル

**設定**: dev.containers.lockfile VS Code で開く VS Code Insiders で開く

ロックファイル `devcontainer-lock.json` をデフォルトで有効化します。このロックファイルは、機能が初めてインストールされた際に Dev Container 機能のバージョンとチェックサムを記録し、その特定のバージョンとチェックサムに機能を固定することで、サプライチェーン攻撃に対する耐性を向上させます。

新しいバージョンが利用可能になると、エディターは `devcontainer.json` ファイル内の Dev Container 機能に対して Code Lens を表示します。

ロックファイルを更新するためのプルリクエストを自動的に送信する [Dependabot サポート](https://containers.dev/guide/dependabot) も利用可能です。

詳細については、Dev Container仕様の[Dev Container Feature Lockfile](https://github.com/devcontainers/spec/blob/main/docs/specs/devcontainer-lockfile.md)を参照してください。

## エンジニアリング

### TypeScript 7による開発ビルドの高速化

VS Codeの開発用ウォッチタスクでは、型チェックにTypeScript 7が使用されるようになりました。これにより、コードベースのビルドおよび完全な型チェックにかかる時間が大幅に短縮されます。

以前は、VS Codeのメインプロジェクトにある約6,000ファイルの型チェックに約60秒かかっていました。TypeScript 7の導入により、新規ビルドの場合、この時間は約10秒に短縮されました。ウォッチビルドタスクの開始から、VS Codeおよびビルドされた-in拡張機能のビルドおよび完全な型チェックが完了するまで、現在は約30秒かかります。

## 非推奨の機能と設定

### このリリースでの新たな非推奨項目

なし

### 今後の非推奨項目

-   **編集モード**は、VS Code バージョン 1.110 をもって正式に非推奨となりました。ユーザーは、VS Code の設定 `chat.editMode.hidden` を通じて、一時的に編集モードを再有効化できます。VS Code で開く VS Code Insiders で開く この設定は組織レベルで管理されます。変更するには管理者にお問い合わせください。ORG。この設定はバージョン 1.125 まで引き続きサポートされます。 バージョン 1.125 以降、編集モードは完全に削除され、設定から有効にすることはできなくなります。

## 謝辞

課題追跡への貢献者：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

`vscode`への貢献：

-   [@AbhitejJohn (Abhitej John)](https://github.com/AbhitejJohn): telemetryプロパティ「skillContentRead」を「skill」プレフィックスを使用するようにリネーム [PR #311945](https://github.com/microsoft/vscode/pull/311945)
-   [@andrewkchan (Andrew Chan)](https://github.com/andrewkchan): auxウィンドウ - setTimeoutのメモリリークを修正 [PR #311824](https://github.com/microsoft/vscode/pull/311824)
-   [@austinngan (Austin Ngan)](https://github.com/austinngan): Markdownプレビューのスクロールフィードバックループを修正 (#\_303765) [PR #312237](https://github.com/microsoft/vscode/pull/312237)
-   [@fishcharlie (Charlie Fish)](https://github.com/fishcharlie): チャット: モデルピッカーで重複するBYOKモデルのプロバイダーインスタンス名を表示 [PR #312028](https://github.com/microsoft/vscode/pull/312028)
-   [@kevin-m-kent](https://github.com/kevin-m-kent): vscode\_renameSymbol および vscode\_listCodeUsages にキャッシュ保持モードを追加 (実験的) [PR #312568](https://github.com/microsoft/vscode/pull/312568)
-   [@maruthang (Maruthan G)](https://github.com/maruthang)
    -   修正: ターミナルツールの実行における heredoc/マルチラインコマンドの処理 [PR #307960](https://github.com/microsoft/vscode/pull/307960)
    -   修正(チャット): ツール確認画面で高さ制限のあるコードブロックにスクロールバーを表示するように (#\_283242) [PR #310975](https://github.com/microsoft/vscode/pull/310975)
    -   修正: ScopedContextKeyService において、disposeContext の前に親の変更リスナーをクリアするように [PR #307593](https://github.com/microsoft/vscode/pull/307593)
-   [@mossgowild (moss)](https://github.com/mossgowild): ターミナルツール: 最終出力行のプロンプトを検出 [PR #311765](https://github.com/microsoft/vscode/pull/311765)
-   [@ssg (Sedat Kapanoğlu)](https://github.com/ssg): トルコ語DOS (CP 857) エンコーディングのサポートを追加 [PR #300114](https://github.com/microsoft/vscode/pull/300114)
-   [@Tyriar (Daniel Imms)](https://github.com/Tyriar): スキップシェルの処理をサービスに移行し、最適化 [PR #311892](https://github.com/microsoft/vscode/pull/311892)
-   [@winjo](https://github.com/winjo): プロセスの破棄時に発生する AutoRepliesPtyServiceContribution のメモリリークを修正 [PR #312150](https://github.com/microsoft/vscode/pull/312150)
-   [@xingsy97 (xingsy97)](https://github.com/xingsy97): contextkey: より大きい演算子でスキャナーが '>' ではなく '>=' を返す問題を修正 [PR #307059](https://github.com/microsoft/vscode/pull/307059)
-   [@yogeshwaran-c (Yogeshwaran C)](https://github.com/yogeshwaran-c)
    -   修正: 設定インジケーターのホバー表示に setupDelayedHover を使用し、Ctrl+K I をサポート [PR #304990](https://github.com/microsoft/vscode/pull/304990)
    -   すべてのデバッグコンソール補完項目に詳細フィールドを表示 [PR #310379](https://github.com/microsoft/vscode/pull/310379)

`vscode-pull-request-github`への貢献:

-   [@Will-hxw (Will-hxw)](https://github.com/Will-hxw): fix(reviewManager): hasBranch呼び出しで pr.base.name の代わりに pr.base.ref を使用 [PR #8698](https://github.com/microsoft/vscode-pull-request-github/pull/8698)

* * *

新機能がリリースされ次第、ぜひお試しいただければ幸いです。最新情報を確認するため、定期的にこちらをチェックしてください。

> 過去の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
