---
product: VSCode
version: 1.105.0
release_title: September 2025 (version 1.105)
release_date: 2025-10-09
source_url: "https://code.visualstudio.com/updates/v1_105"
archived_at: 2026-03-29
---

# September 2025 (version 1.105)

# 2025年9月（バージョン 1.105）

_リリース日：2025年10月9日_

**セキュリティ更新**: 以下の拡張機能にセキュリティ更新が適用されました: [GitHub.copilot-chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)。

**バージョン 1.105.1**: この更新では、以下の [コアに関する課題](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aclosed+milestone%3A%22September+2025+Recovery+1%22+)および[GitHub Copilot Chat拡張機能](https://github.com/microsoft/vscode/issues?q=is%3Aissue%20is%3Aclosed%20milestone%3A%22September%202025%20Chat%20Recovery%202%22)の以下の問題を修正しています。

**アップデート**: [GitHub Universe での VS Code](#_vs-code-at-github-universe)に関する発表をご覧ください。

ダウンロード: Windows: [x64](https://update.code.visualstudio.com/1.105.1/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.105.1/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.105.1/darwin-universal/stable) [Intel](https://update.code.visualstudio.com/1.105.1/darwin/stable) [silicon](https://update.code.visualstudio.com/1.105.1/darwin-arm64/stable) | Linux: [deb](https://update.code.visualstudio.com/1.105.1/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.105.1/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.105.1/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.105.1/linux-snap-x64/stable)

* * *

Visual Studio Code 2025年9月版へようこそ。このバージョンには、皆様に気に入っていただけるであろう多くの更新が含まれています。主なハイライトは以下の通りです：

-   **OSとの統合**
    
    -   タスクの完了やチャットへの返信に関する通知を受け取る [(詳細を表示)](#_os-notifications-for-chat-responses)
    -   macOS でのネイティブ認証機能 [(詳細を表示)](#_macos-native-broker-support-for-microsoft-authentication)
-   **開発者の生産性向上**
    
    -   複雑なコーディングタスクの計画と引き継ぎ [(詳細を表示)](#_plan-agent)
    -   AIの支援によるマージコンフリクトの解決 [(詳細を表示)](#_resolve-merge-conflicts-with-ai)
-   **エージェントツール**
 
 -   OpenAI Codexとの統合 [(詳細を表示)](#_integration-with-openai-codex)
    -   サブエージェントを使用してコンテキスト管理を改善する [(詳細を表示)](#_isolated-subagents)

  

> これらのリリースノートをオンラインで読みたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。  

> **Insiders: 新機能をいち早く試してみたいですか？**  
> ナイトリー Insiders ビルドをダウンロードすれば、最新の更新プログラムが利用可能になり次第、すぐに試すことができます。  
> [Insidersのダウンロード](https://code.visualstudio.com/insiders)  

## GitHub UniverseでのVS Code

![GitHub Universe 2025 バナー画像.](/assets/updates/1_105/universe-banner.png)

GitHub Universeでは、VS CodeでのAIを活用した開発をより生産的に進めるためのいくつかのアップデートをご紹介しました。組み込みのプランエージェントを使用して複雑なタスクの調査や計画を行ったり、サブエージェントでコンテキストをより適切に管理したり、OpenAI CodexやGitHub Copilot CLIなどのバックグラウンドエージェントを管理したりできるようになりました。

今すぐ[VS Code Insiders](https://code.visualstudio.com/insiders/)をダウンロードして、これらの機能を試してみてください。

### プランエージェント

> **注**: この機能は現在、[VS Code Insiders](https://code.visualstudio.com/insiders/)でのみ利用可能です。

複雑なコーディングタスクへの準備をより円滑にするため、VS Codeには組み込みのプランエージェントが搭載されました。プランエージェントは、タスクの分析、ステップへの分解、開発開始前の実装計画の生成を支援します。このアプローチにより、重要な要件を見落とすことを防ぐことができます。

プランエージェントを使用するには、チャットビュー（⌃⌘I（Windows、Linuxでは Ctrl+Alt+I））を開き、エージェントのドロップダウンから **Plan** を選択して、タスクの内容を入力してください。

![プランエージェントが選択され、機能の実装計画を作成するためのプロンプトが表示されたチャットビューのスクリーンショット。](/assets/updates/1_105/plan-agent-sample.png)

計画の確定後、すぐに実装を開始することも、後で使用するために計画を保存することもできます。プランエージェントは、新しい [カスタムチャットモード向けのハンドオフ機能](#_handoffs) を活用しています。

[VS Code に組み込まれたプランエージェント](https://code.visualstudio.com/docs/copilot/chat/chat-planning) の使用方法について詳しくは、こちらをご覧ください。

### ハンドオフ

> **注**: この機能は現在、[VS Code Insiders](https://code.visualstudio.com/insiders/)でのみ利用可能です。

ハンドオフを使用すると、提案された次のステップとともにチャットモード間を移行する、ガイド付きのワークフローを作成できます。チャットの応答が完了すると、ハンドオフボタンが表示され、ユーザーは関連するコンテキストと事前入力されたプロンプトとともに次のモードへ移動できます。

ハンドオフは、次のような多段階の開発ワークフローを調整するのに役立ちます。

ハンドオフを使用すると、あるチャットモードから別のモードへの移行方法を指定し、カスタマイズされた構造化されたワークフローを定義できます。別のモードに移行する際、使用するプロンプトを指定できます。

ハンドオフは、カスタムチャットモード定義のフロントマターメタデータで指定します：

```
---
description: 実施計画の生成
tools: ['search', 'fetch']
handoffs:
  - label: 実施開始
    agent: implementation
    prompt: 上記で概説した計画を実施してください。
    send: true
---
```

[カスタムチャットモードでのハンドオフの使用方法](https://code.visualstudio.com/docs/copilot/customization/custom-chat-modes#_handoffs)について詳しくはこちらをご覧ください。

### 独立したサブエージェント

> **注**: この機能は現在、[VS Code Insiders](https://code.visualstudio.com/insiders/)でのみ利用可能です。

サブエージェントを使用すると、チャットセッション内で自律的なエージェントにタスクを委任できます。サブエージェントは独自のコンテキストウィンドウを持ち、ユーザーの操作なしに動作するため、調査、分析、コンテキスト収集などのタスクに最適です。

サブエージェントがタスクを完了すると、結果をメインのチャットセッションに返します。サブエージェントは独自のコンテキストウィンドウを持つため、メインのチャットセッションにおけるコンテキスト管理の最適化に役立ちます。

チャットプロンプトやカスタムチャットモードでサブエージェントを使用するには、`#runSubagent` ツールを参照して、メインエージェントにサブエージェントを呼び出させます。例：

-   `"このアプリの認証メカニズムに関するコンテキスト収集と調査を行うため、#runSubagent ツールを実行してください。"`

[VS Codeでのサブエージェントの使用方法](https://code.visualstudio.com/docs/copilot/chat/chat-sessions#_subagents)について詳しくは、こちらをご覧ください。

### OpenAI Codexとの統合

> **注**: この機能は現在、[VS Code Insiders](https://code.visualstudio.com/insiders/)でのみ利用可能です。

VS Code Insidersの新しい[Agent Sessionsビュー](https://code.visualstudio.com/docs/copilot/chat/chat-sessions#_agent-sessions-view)は、OpenAI Codexとも連携するようになりました。ローカルおよびクラウドベースのエージェントセッションを統一されたインターフェースから管理できるため、複数のAIコーディングアシスタント間で進捗を追跡したり、タスクを割り当てたりするのが容易になります。

![OpenAI Codex セッションを表示した「エージェント セッション」ビューのスクリーンショット。](/assets/updates/1_105/agent-sessions-codex.png)

OpenAI Codex は、Copilot サブスクリプションを利用して利用できるようになりました。Codex 拡張機能をインストールして設定すると、Codex が「エージェント セッション」ビューに自動的に表示されます。 Copilot Pro+のサブスクリプションを使用すれば、追加の設定なしでCodexへの認証とアクセスが可能です。

GitHubドキュメントの[GitHub Copilotの課金およびプレミアムリクエスト](https://docs.github.com/en/copilot/concepts/billing/copilot-requests)で詳細をご確認ください。

### Copilot CLIとの統合

VS Code Insiders向けの新しい[Agent Sessionsビュー](https://code.visualstudio.com/docs/copilot/chat/chat-sessions#_agent-sessions-view)がGitHub Copilot CLIに対応しました。ローカルおよびクラウドベースのエージェント セッションを統一されたインターフェースから管理できるため、Copilot CLIとCopilot Codingエージェント間の進捗状況の追跡やタスクの割り当てが容易になります。

![Copilot CLI セッションを表示した「エージェント セッション」ビューのスクリーンショット。](/assets/updates/1_105/agent-sessions-copilot-cli.png)

-   チャットエディターまたは統合ターミナルで CLI セッションを開始および再開できます。
-   CLI チャットエディターで `/delegate` を使用すると、作業をクラウド上のコーディング エージェントに委任できます。
-   VS Code での CLI 体験を向上させます。例えば、現在の ask モードやエージェントモードと同様に、エディターからコンテキストを添付できるようになります。

## チャット

### 完全修飾ツール名

プロンプトファイルやカスタムチャットモードを使用すると、使用可能なツールを指定できます。組み込みツールと、MCPサーバーや拡張機能によって提供されるツールとの間で名前が競合するのを防ぐため、プロンプトファイルやチャットモードにおいて完全修飾ツール名をサポートするようになりました。これにより、不足している拡張機能やMCPサーバーの検出にも役立ちます。

ツール名は、それらが属するMCPサーバー、拡張機能、またはツールセットによって修飾されるようになりました。例えば、 `codebase` の代わりに `search/codebase` を、`list_issues` の代わりに `github/github-mcp-server/list_issues` を使用します。

従来の表記も引き続き使用できますが、コードアクションを利用することで新しい名称への移行が容易になります。

![未修飾のツール名を更新するコードアクションが表示されたプロンプトファイルのスクリーンショット。](/assets/updates/1_105/qualified_tool_names.png)

### カスタムモデル向けの編集ツールの改善

**設定**: github.copilot.chat.customOAIModels VS Codeで開く VS Code Insidersで開く

以下のカスタムモデル向けの編集ツールセットを改善しました [Bring Your Own Key (BYOK)](https://code.visualstudio.com/docs/copilot/customization/language-models#_bring-your-own-language-model-key) カスタムモデル向けの編集ツールセットを改善し、VS Codeの組み込みツールとの統合性を高めました。さらに、デフォルトのツールを強化し、カスタムモデルに最適なツールセットを選択するための「学習」メカニズムを追加しました。

[OpenAI互換モデル](https://code.visualstudio.com/docs/copilot/customization/language-models#_use-an-openaicompatible-model)をご利用の場合は、github.copilot.chat.customOAIModels 設定（VS Code または VS Code Insiders で開く）を使用して、編集ツールのリストを明示的に構成することも可能です。

### ネストされた AGENTS.md ファイルのサポート（実験的機能）

**設定**: chat.useNestedAgentsMdFiles VS Code で開く VS Code Insiders で開く

前回のマイルストーンでは、ワークスペースのルートにある `AGENTS.md` のサポートを導入しました。この機能は現在一般提供されており、デフォルトで有効になっています。

さらに、ワークスペースのサブフォルダ内にあるネストされた `AGENTS.md` ファイルのサポートも追加しました。これにより、コードベースの異なる部分に対して、より具体的なコンテキストや指示を提供できるようになります。例えば、 フロントエンドとバックエンドのコードで異なる指示を設定できるでしょう。この機能は現在実験段階であり、`chat.useNestedAgentsMdFiles` 設定（VS Code で開く、Insiders）で有効にできます。

[VS Code でのチャットのカスタマイズ](https://code.visualstudio.com/docs/copilot/customization/overview) について、ご自身の開発手法やチームのワークフローに合わせて詳しくご覧ください。

### チャットユーザーエクスペリエンスの改善

#### チャット応答の OS 通知

**設定**: chat.notifyWindowOnResponseReceived [VS Codeで開く](https://vscode.com/insiders)

VS Code 1.103では、VS Codeウィンドウがフォーカスされていない際にユーザーの確認を必要とするチャットセッション向けのOS通知を導入しました。今回のリリースでは、この機能を拡張し、チャットの返信を受信した際にOSバッジと通知トーストを表示するようにしました。通知には返信のプレビューが含まれており、これを選択するとチャット入力フィールドにフォーカスが移動します。

![VS Code ウィンドウがフォーカスされていない状態での OS 通知を示すスクリーンショット。](/assets/updates/1_105/chat-notification.png)

この通知の動作は、chat.notifyWindowOnResponseReceived 設定で制御できます。VS Code で開く VS Code Insiders で開く

#### 思考の連鎖 (実験的機能)

**設定**: chat.agent.thinkingStyle VS Codeで開く VS Code Insidersで開く

「思考の連鎖」は、モデルが応答する際にその推論プロセスを表示します。これは、デバッグやモデルが提供する提案を理解するのに役立ちます。GPT-5-Codexの導入により、思考トークンが応答内の展開可能なセクションとしてチャットに表示されるようになりました。

![応答内の思考トークンが展開可能なセクションとして表示されているチャット応答のスクリーンショット。](/assets/updates/1_105/chat-thinking-tokens.png)

「chat.agent.thinkingStyle」設定（VS Codeで開く VS Code Insiders）で、思考の連鎖を表示または非表示にする方法を設定できます。思考トークンは、まもなく他のモデルでも利用可能になる予定です！

#### 最近のチャットセッションを表示（実験的機能）

**設定**: chat.emptyState.history.enabled VS Codeで開く VS Code Insiders

前回のマイルストーンでは、新しいチャットセッションを作成する際（⌘N（Windows、LinuxではCtrl+N））の開始を支援する [プロンプトファイルの提案](https://code.visualstudio.com/updates/v1_104#_configure-prompt-file-suggestions-experimental) を導入しました。今回のリリースでは、その機能をさらに拡張し、最近のローカルチャット履歴を表示するようにしました。これにより、中断したところからすぐに再開したり、過去の会話を再確認したりできるようになります。

![アクティブなチャットセッションがない場合に、最近のローカルチャット履歴が表示されるチャットビューのスクリーンショット。](/assets/updates/1_105/chat-history-on-empty.png)

デフォルトではこの機能は無効になっていますが、 が、chat.emptyState.history.enabled 設定（VS Code で開く VS Code で開く Insiders）で有効にできます。

#### エージェントのループ中に変更を保持または元に戻す

以前は、エージェントがチャットリクエストを処理している間は、エージェントが完了するまでファイルの編集内容を保持したり元に戻したりすることができませんでした。現在では、編集ループが実行されている間でも、ファイルへの変更を保持または元に戻すことができます。これにより、特に長時間かかるタスクにおいて、より細かく制御できるようになります。

#### ユーザーチャットメッセージを移動するためのキーボードショートカット

チャットセッション内の過去のチャットプロンプトを素早く移動できるよう、チャットメッセージを上下に移動するためのキーボードショートカットを追加しました：

-   前のメッセージへ移動：⌥⌘↑（Windows、Linux：Ctrl+Alt+Up）
-   次のメッセージへ移動：⌥⌘↓（Windows、Linux：Ctrl+Alt+Down）

### エージェントセッション

今回のマイルストーンでは、チャットセッションビューと、リモートコーディングエージェントへのタスク委任の操作性をいくつか改善しました：

#### チャットセッションビューの機能強化

**設定**: chat.agentSessionsViewLocation VS Codeで開く VS Code Insidersで開く

[チャットセッションビュー](https://code.visualstudio.com/docs/copilot/copilot-coding-agent#_manage-sessions-with-dedicated-chat-editor-experimental) は、ローカルのチャット会話とリモートコーディングエージェントのセッションの両方を一元管理できる場所を提供します。このビューを使用すると、複数の AI セッションを同時に操作し、進捗状況を追跡し、長時間実行されるタスクを効率的に管理できます。

今回のリリースでは、チャットセッションの体験を向上させるため、UIの改良とパフォーマンスの改善をいくつか行いました。

-   チャットセッションビューでは、複数のコーディングエージェントを監視するためのステータスバー追跡、セッション管理用のコンテキストメニュー、各セッションの詳細なコンテキストを提供する詳細な説明といった機能を引き続きサポートしています。
 
-   ビューヘッダーの「+」ボタンを使用して、新しいセッションをすばやく開始できます。
    
    ![「+」ボタンから新しいセッションを開いた状態のチャットセッションビューのスクリーンショット。](/assets/updates/1_105/chat-sessions.png)
 

### リモートコーディングエージェントへの作業委託

リモートコーディングエージェントと連携する典型的なシナリオは、まずローカルチャットセッションでタスクについて議論・計画を行い（この際、コードベースの完全なコンテキストにアクセス可能です）、その後、実装作業をリモートコーディングエージェントに委任することです。リモートエージェントはバックグラウンドでタスクに取り組み、解決策を含むプルリクエストを作成します。

[Copilot コーディングエージェントが有効化されている](https://aka.ms/coding-agent-docs)リポジトリで作業している場合、チャットビューの **「コーディングエージェントに委任」** ボタンがデフォルトで表示されるようになりました。

![「コーディングエージェントに委任」ボタンが強調表示されたチャットビューのスクリーンショット。](/assets/updates/1_105/delegate-button.png)

この委任アクションを使用すると、ファイル参照を含むチャット会話のすべてのコンテキストがコーディングエージェントに転送されます。会話の内容がコーディングエージェントのコンテキストウィンドウの範囲を超える場合、VS Codeは自動的に情報を要約・圧縮し、ウィンドウに収まるように調整します。

### チャットターミナルプロファイル

プラットフォーム固有の設定として、chat.tools.terminal.terminalProfile.windows（VS Codeで開く、Insidersで開く）、chat.tools.terminal.terminalProfile.osx（VS Codeで開く、Insidersで開く）、およびchat.tools.terminal.terminalProfile.linux Open in VS Code Open in VS Code Insiders）を追加しました。

チャット専用のシェルを用意することで、通常のシェル設定から対話要素を簡素化または排除し、エージェントが使いやすくなるという利点があります。同時に、通常の環境やシェル起動スクリプトを変更する必要もありません。

```
"chat.tools.terminal.terminalProfile.osx": {
  "path": "bash", // zshの代わりにbash
  "args": [], // macOSではloginの代わりにnon-login
  "env": {
    "COPILOT": "1" // initスクリプトで使用可能な環境変数
  }
}
```

### ターミナルコマンド

#### ターミナルのプロンプトへの自動応答 (実験的)

**設定**: chat.tools.terminal.autoReplyToPrompts VS Codeで開く VS Codeで開く Insiders

`Confirm? y/n` のようなターミナルでの入力プロンプトにエージェントが自動的に応答できるようにする、オプトイン設定 `chat.tools.terminal.autoReplyToPrompts` を導入しました。

#### ターミナルでの自由形式入力要求の検出

ターミナルで自由形式の入力が求められる場合、確認プロンプトが表示されるようになりました。これにより、現在の作業に集中し続け、入力が求められる時だけ注意を向けることができます。

### Appleアカウントでのサインイン

GitHubアカウントやGoogleアカウントでのサインインに加え、Appleアカウントを使用してGitHub Copilotアカウントにサインインしたり、アカウントを設定したりできるようになりました。この機能は、VS Codeユーザーに向けて順次提供されます。

![Appleアカウントを使用するオプションが表示されたサインインダイアログのスクリーンショット。](/assets/updates/1_105/apple-sign-in.png)

詳細については、[GitHubブログ記事](https://github.blog/changelog/2025-10-07-github-now-supports-social-login-with-apple/)の発表をご覧ください。

### モデルの利用状況

今回のマイルストーンでは、チャットで以下のモデルへの対応を追加しました。利用可能なモデルは、Copilotのプランおよび設定によって異なります。

-   **GPT-5-Codex**：OpenAIのGPT-5モデルで、エージェント型コーディング向けに最適化されています。
 
-   **Claude Sonnet 4.5**：Anthropicが提供する、コーディングおよび実世界エージェント向けの最先端モデルです。
    

チャット内のモデルピッカーを使用して、さまざまなモデルから選択できます。[VS Codeの言語モデル](https://code.visualstudio.com/docs/copilot/customization/language-models)について詳しくは、こちらをご覧ください。

## MCP

### MCP マーケットプレイス (プレビュー)

**設定**: chat.mcp.gallery.enabled VS Code で開く VS Code Insiders で開く

VS Code には、ユーザーが「拡張機能」ビューから直接 MCP サーバーを閲覧・インストールできる組み込みの MCP マーケットプレイスが搭載されました。これは [GitHub MCP レジストリ](https://github.com/mcp) によって提供されており、エディタ内で直接 MCP サーバーを発見・管理するためのシームレスな体験を実現します。

> **注**: この機能は現在プレビュー段階です。すべての機能が利用可能ではなく、操作感にまだ粗い部分がある可能性があります。

MCP マーケットプレイスはデフォルトで無効になっています。MCP サーバーがインストールされていない場合、拡張機能ビューにウェルカム画面が表示され、そこから簡単に 。また、chat.mcp.gallery.enabled 設定（VS Code Insiders）を使用して、MCP マーケットプレイスを手動で有効にすることもできます。

![MCP サーバーのウェルカム画面を示すスクリーンショット。Model Context Protocol サーバーの閲覧およびインストール方法の説明テキストと、「MCP サーバー マーケットプレイスを有効にする」ボタンが表示されています。](/assets/updates/1_105/mcp-servers-welcome.png)

「Extensions」ビューから MCP サーバーを閲覧するには：

-   「Extensions」ビューの検索ボックスで `@mcp` フィルターを使用します
-   「Extensions」ビューのフィルタードロップダウンから **MCP Servers** を選択します
-   名前で特定の MCP サーバーを検索します

![VS Code内のMCPサーバーマーケットプレイスからGitHub MCPサーバーの詳細を表示したスクリーンショット。](/assets/updates/1_105/mcp-server-editor.png)

### MCPサーバーの自動起動

**設定**: chat.mcp.autostart VS Codeで開く VS Code Insidersで開く

このリリースでは、チャットメッセージを送信した際に、新規または期限切れのMCPサーバーが自動的に起動されるようになりました。また、VS Codeはサーバーの自動起動時にダイアログなどの操作をトリガーすることを避け、代わりにチャット内にインジケーターを表示して、サーバーへの対応が必要であることを通知します。

![GitHub MCPの再起動が必要であることを示す通知メッセージが表示されたチャットビューのスクリーンショット。](/assets/updates/1_105/mcp_autostart_prompt.png)

MCPの自動起動がデフォルトで有効になったことで、拡張機能を即座にアクティブ化することはなくなり、代わりに最初のチャットメッセージが送信されたときにのみ、MCPを提供する拡張機能をアクティブ化します。

拡張機能開発者の皆様向けに、`mcpServerDefinitionProviders` コントリビューションポイントへの `when` 句のサポートも追加しました。これにより、不要な場面でのアクティベーションを回避できるようになります。

### ツールから返される MCP リソースの表示改善

以前は、リソースを含むツール結果の実装において、リソースの取得方法はモデルに委ねられており、具体的な手順が明確に示されていませんでした。このバージョンの VS Code では、デフォルトでリソース内容のプレビューを表示し、完全なコンテンツを取得するための手順を追加しました。これにより、このようなツールを使用する際のモデルのパフォーマンスが向上するはずです。

### MCP仕様の更新

今回のマイルストーンでは、MCP仕様に以下の更新を採用しました：

-   [SEP-973](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/955)。これにより、MCPサーバーはデータに関連付ける`icons`を指定できるようになります。これを使用して、サーバー、リソース、ツールにカスタムアイコンを割り当てることができます。
    
    ![ツールピッカーのスクリーンショット。リスト内のMCPサーバーの1つにカスタムアイコンが表示されています。](/assets/updates/1_105/mcp_icons.png)
 
 HTTP MCPサーバーは、MCPサーバー自体がリスニングしているのと同じ権限からアイコンを提供する必要がありますが、stdioサーバーはディスク上の `file:///` URIを参照することが許可されています。
    
-   [SEP-1034](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/1035)。これにより、MCPサーバーはエリシテーションを使用する際に`default`値を提供できるようになります。
 

## アクセシビリティ

### Windows上のpwshにおけるスクリーンリーダー対応のためのシェル統合

これまで、スクリーンリーダーが検出されると、過剰な音声フィードバックによるユーザーの負担を避けるため、PSReadLineは無効化されていました。当社のターミナルのシェル統合はPSReadLineのサポートに依存しているため、スクリーンリーダーモードでは簡素化されたバージョンのPSReadLineを有効化するようになりました。 これにより、スクリーンリーダーユーザーでもシェル統合とその機能が確実に動作するようになります。

### チャットの改善

**設定**: accessibility.verboseChatProgressUpdates VS Codeで開く VS Code Insidersで開く

新しい設定「accessibility.verboseChatProgressUpdates」を有効にすると、スクリーンリーダーユーザーに対してチャットのアクティビティに関するより詳細なアナウンスが行われるようになります。

チャット入力画面から、ユーザーは最後にフォーカスされていたチャット返信項目にフォーカスを移動できます ⇧⌘↓ (Windows、Linux: Ctrl+Shift+Down)。

### アクセシブルビューの維持

VS Code と他のウィンドウを切り替える際、シームレスなワークフローを実現するため、アクセシブルビュー内のユーザーの位置情報を維持するようになりました。

## エディターの操作性

### クイック入力のデフォルトショートカットのオーバーライド

コマンドパレットで使用されるもの（クイックピック、入力ボックス）と同様に、クイック入力のコントロールでは、リストの上下移動、確定（Enter）、およびその他のいくつかの操作など、ナビゲーション用のキーボードショートカットがハードコードされていました。

これらのアクションはコマンドに移行されたため、キーボードショートカットをオーバーライドできるようになりました。たとえば、クイックピックで Tab キーを使用して確定したい場合、 これが可能になりました。上書き可能なすべてのキーボードショートカットを確認するには、キーボードショートカットエディタ `(kb(workbench.action.openGlobalKeybindings))` を開き、`quickInput.` を検索してください。

### 空白のみの次の編集候補を無効にする

**設定**: github.copilot.nextEditSuggestions.allowWhitespaceOnlyChanges VS Codeで開く VS Code Insidersで開く

コードの書式設定など、空白のみの変更を提案する「次の編集候補（NES）」を無効にできるようになりました。

## ソース管理

### AI によるマージコンフリクトの解決

git のマージコンフリクトマーカーが付いたファイルを開いた際、AI を使用してマージコンフリクトを解決できるようになりました。エディタの右下隅に新しいアクションが追加されました。この新しいアクションを選択すると、チャットビューが開き、マージベースと各ブランチからの変更をコンテキストとして、エージェントによるフローが開始されます。

![エディターでのマージ競合解決案のスクリーンショット。](/assets/updates/1_105/merge-conflict-resolution.png)

エディター内で提案されたマージ競合解決案を確認し、必要に応じて追加のコンテキストを提示できます。`AGENTS.md` ファイルを使用して、マージ競合解決をカスタマイズすることも可能です。

### ファイルのコミットをチャットコンテキストに追加

数マイルストーン前、ソースコントロールグラフビューに表示される各履歴アイテム内のファイルを表示する機能を追加しました。現在、履歴アイテム内のファイルをチャットリクエストのコンテキストとして追加できるようになりました。これは、特定のバージョンのファイルの内容をチャットプロンプトのコンテキストとして提供したい場合に役立ちます。

過去のコミットからファイルをチャットに追加するには、コミットを選択してファイルの一覧を表示し、特定のファイルを右クリックして、コンテキストメニューから**[チャットに追加]**を選択します。

![「ソースコントロールグラフ」ビューのスクリーンショット。履歴アイテム内のファイルに対するコンテキストメニューが表示され、「チャットに追加」オプションがハイライトされています。](/assets/updates/1_105/add-history-item-to-chat.png)

## テスト

### コードカバレッジ付きでテストを実行する

コード用にテスト拡張機能がインストールされている場合、チャット内の `runTests` ツールを使用すると、コマンドラインから実行する代わりに、[VS Code テスト統合](https://code.visualstudio.com/docs/debugtest/testing) を利用してエージェントがコードベース内のテストを実行できるようになります。

今回のリリースでは、`runTests` ツールがテストのコードカバレッジもエージェントに報告するようになりました。これにより、エージェントはコード全体を網羅するテストを生成・検証できるようになります。

### テスト結果列の切り替え

「テスト結果」ビューのタイトルメニューにある新しい切り替え ↔️ ボタンを使用すると、結果ツリーが表示される側を変更できます。

![「テスト結果」ビューのスクリーンショット （スワップボタンが強調表示されたもの）](/assets/updates/1_105/swap-test-result-column.png)

## タスク

### 長時間実行タスクの完了に関する OS 通知

**設定**: task.notifyWindowOnTaskCompletion VS Code で開く VS Code で開く Insiders

ユーザーが開始した 長時間実行タスクが完了すると、OSバッジと通知トーストが表示されます。通知を選択すると、タスクが完了したウィンドウにフォーカスが移動します。この動作は、`task.notifyWindowOnTaskCompletion` 設定で構成できます。

![「タスク『build』が1分21秒で完了しました」というタスク完了メッセージを表示するOS通知のスクリーンショット。](/assets/updates/1_105/task-notification.png)

### タスクのターミナルタイトルの保持

**設定**: terminal.integrated.tabs.title VS Code で開く VS Code Insiders

terminal.integrated.tabs.title VS Code で開く VS Code Insiders 設定を使用して、ターミナルタブのタイトルを設定できます。デフォルトでは、値は `${process}` となっており、ターミナルで実行中のプロセスの名前が表示されます。

タスクの場合、タスクが別のプロセスを開始するとターミナルのタイトルが変更される可能性があり、混乱を招く恐れがあります。この問題を解決するため、タスクの開始時にタスク名をターミナルのタイトルとして保持するようにしました。

## ターミナル

### 「ディクテーションを開始」の公開

ターミナルのオーバーフローメニューに **「ディクテーションを開始」** アクションを追加しました。 このアクションを使用すると、音声入力でターミナルにテキストを入力できます。必要に応じて、対応する**音声入力の停止**アクションも表示されます。

![「音声入力の開始」オプションが表示されたターミナルのオーバーフローメニューのスクリーンショット。](/assets/updates/1_105/start-dictation-terminal.png)

## 認証

### Microsoft Authentication に対する macOS ネイティブブローカーのサポート

**設定**: microsoft-authentication.implementation VS Code で開く VS Code Insiders で開く

今回のマイルストーンでは、最新の MSAL ライブラリを採用しました。これにより、Windows に加え、macOS でもネイティブ環境を通じてサインインできるようになりました：

![VS Code へのサインインを求めるネイティブブローカーのダイアログウィンドウのスクリーンショット。](/assets/updates/1_105/macOS-auth-broker.png)

ネイティブブローカー認証は、以下の環境でのみ利用可能です：

-   Mシリーズ（ARMとも呼ばれる）macOSデバイス
-   ブローカー経由で認証を行うポリシーが適用された、Intuneに登録済みのmacOSマシン

これにより、スムーズなシングルサインオンフローが実現され、Microsoft認証セッションを取得するための推奨される方法となります。 MSALチームは今後、残りのプラットフォーム（Linux、Windows ARM、macOS Intel/x64）でも順次この機能を有効にする予定ですので、ご期待ください！

> 注：ブローカー経由での認証に問題がある場合は、`microsoft-authentication.implementation` を `msal-no-broker` に変更してください。これにより、代わりにブラウザを使用して認証が行われます。

### GitHub 認証における PKCE のサポート

[GitHub は最近、](https://github.blog/changelog/2025-07-14-pkce-support-for-oauth-and-github-app-authentication/) 認証フローにおけるPKCE（[Proof Key for Code Exchange](https://www.rfc-editor.org/rfc/rfc7636)）のサポートを有効にしました。これに伴い、VS CodeがGitHubへの認証に使用するフローでもこの機能を採用しました。

## 言語

### Python

#### テスト ID のコピー操作

実行ガターアイコンのコンテキストメニューに、**Copy Test Id** コマンドが追加されました。これにより、pytest または unittest の完全修飾テスト識別子をコピーできます。

## 拡張機能への貢献

### GitHub Pull Requests

[GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) 拡張機能において、さらなる進展がありました。この拡張機能を使用すると、プルリクエストやイシューの作成、管理、作業を行うことができます。新機能は以下の通りです：

-   `#openPullRequest` ツールは、未解決の PR の差分ファイルや PR ファイルを「未解決のプルリクエスト」として認識します。
-   設定 `githubIssues.issueAvatarDisplay` を使用すると、Issues ビューに最初の割り当て先のアバターを表示するか、作成者のアバターを表示するかを制御できます。
-   更新時に Pull Requests ビューの基盤となるプルリクエストクエリを常に実行する代わりに、クエリを実行する前にリポジトリに新しい PR があるかどうかを確認するようになりました。 これにより、新しいプルリクエストがない場合の API 使用量が削減されるはずです。

このリリースの詳細については、拡張機能の [0.120.0 バージョンの変更履歴](https://github.com/microsoft/vscode-pull-request-github/blob/main/CHANGELOG.md#01200) をご確認ください。

## 拡張機能の作成

### Microsoft Authentication が WWW-Authenticate クレームのチャレンジに対応

[Azure では現在](https://learn.microsoft.com/entra/identity/authentication/concept-mandatory-multifactor-authentication)、Azure リソースに対するすべての作成/削除操作について、MFA を使用してサインインした認証済みセッションでの実行が必須となっています。 認証上の理由からMFAを必須としている組織もあれば、これを強制していない組織もありますが、後者の組織は今回のMFA強制措置の影響を受けます。

Microsoft Authenticationを使用し、ARMと通信する拡張機能をお持ちの場合は、ARM API呼び出しが`WWW-Authenticate`ヘッダーを伴う`401 Unauthorized`を返す場合を、次のように処理する必要があります：

```
Bearer realm="", authorization_uri="https://login.microsoftonline.com/common/oauth2/authorize", error="insufficient_claims", claims="SOME VALUE HERE"
```

幸いなことに、このステータスコードを処理するために使用できる、正式リリースされたAPIが導入されました:

```
const wwwAuthenticateFromRequest = headers['WWW-Authenticate']; // 上記の文字列
vscode.authentication.getSession(
  'microsoft',
  {
    wwwAuthenticate: wwwAuthenticateFromRequest,
    fallbackScopes: scopesFromOriginalRequest
  },
  {
    createIfNone: true
  }
);
```

必要なのは、その `WWW-Authenticate` の値を、当初リクエストしたスコープ（おそらく ARM スコープ）と共にそのまま渡すだけで、 Microsoft Authentication Providerが残りの処理をすべて行い、ユーザーがMFAを経由するようにします。

私たちは、Azure Resources拡張機能を管理するAzure Toolsチームと協力し、この新しいAPIを採用しました。その拡張機能、またはその拡張機能を使用する何かを利用している場合、この要件は自動的に処理されるはずです。問題が発生した場合は、[Azure Resources拡張機能](https://github.com/microsoft/vscode-azureresourcegroups)でイシューを報告してください。

> 注：ご自身の `AuthenticationProvider` で `WWW-Authenticate` チャレンジをサポートしたいですか？提案されている API に関するご意見は、イシュー [#267992](https://github.com/microsoft/vscode/issues/267992) までお寄せください。

### プロンプトおよび説明ファイルの提供

拡張機能からプロンプトおよび説明ファイルを提供できるようになりました。

```
  "contributes": {
    "chatPromptFiles": [
 {
 "name": "ReviewAndCreateIssue",
 "description": "選択されたコードを確認し、イシューを作成します",
        "path": "./prompts/reviewAndCreateIssue.prompt.md"
 }
    ],
    "chatInstructions": [
 {
 "name": "TextMateGuidelines",
 "description": "TextMateの文法を作成または変更する際に、この指示を使用してください",
        "path": "./prompts/textMateGuidelines.instructions.md"
 }
    ]
  }
```

チャットモードへの貢献（`chatModes`）は、現在提案中のAPIフラグの対象となっています。

### SecretStorage内のキーの一覧表示

今回のイテレーションでは、拡張機能がSecret Storageに保存しているすべてのキーを一覧表示するAPIを完成させました。これは `context.secrets` オブジェクトで確認できます：

```
export function activate(context: ExtensionContext) {
  const keys: string[] = await context.secrets.keys();

  const value = await context.secrets.get(keys[0]); // 存在する値
}
```

これを使用できる例の一つとして、`deactivate` メソッドが挙げられます。ここでは、Secret Storage のデータをすべて削除したい場合があるでしょう。

## エンジニアリング

### Playwright VS Code MCP サーバー

VS Code の開発ループを支援するため、ローカルの VS Code ビルドを制御できる MCP サーバーの利用についてさらに検討を進めました。スクリーンショットの解析におけるモデル理解については結果がまちまちでしたが、`#executePrompt` ツール（github.copilot.chat.executePrompt.有効化）によるサブエージェントのオーケストレーションは、コンテキストを汚染しないという点で効果的でした。

今後のリリースでさらに調査を進める予定ですので、ご期待ください！

この MCP Server を試すには、vscode リポジトリの [test/mcp フォルダ](https://github.com/microsoft/vscode/tree/main/test/mcp) をご覧ください。開始方法は非常に簡単です：

1.  Code OSS のローカル版を動作させるための [貢献ガイドライン](https://github.com/microsoft/vscode/wiki/How-to-Contribute)に従って、Code OSSのローカル版を動作させてください。
2.  [ [当方の（現時点では）ごく簡単なプロンプトファイル](https://github.com/microsoft/vscode/blob/cd7de11f65cd5ff6a491f04fc013e363780bde31/.github/prompts/playwright.prompt.md)をエージェントモードで利用し、質問を入力してください：`/playwright <ここに質問を入力>`。

## 主な修正点

-   [vscode#265842](https://github.com/microsoft/vscode/issues/265842) - チャット: Sonnet、 Gemini、および Grok モデルに影響するファイル破損の問題を修正
-   [vscode#221255](https://github.com/microsoft/vscode/issues/221255) - 「URI を開くとセキュリティ上のリスクがある可能性があります」という警告の確認に関わらず、ターミナルリンクが開いてしまう問題を修正。
-   [vscode#229374](https://github.com/microsoft/vscode/issues/229374) - ターミナル内の OSC 8 ハイパーリンクを開く際、ネイティブのファイルエクスプローラーではなく、VS Code のエクスプローラー内のフォルダーが開くように修正。
-   [vscode#268443](https://github.com/microsoft/vscode/issues/268443) - リリースノートの設定リンクが機能しない。

## 感謝

### 課題追跡

課題追跡への貢献者：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)

### プルリクエスト

`vscode`への貢献:

-   [@alpalla (Alessio Palladino)](https://github.com/alpalla): キャメルケースおよびパスカルケースへの変換アクションにおいて改行を維持する [PR #263781](https://github.com/microsoft/vscode/pull/263781)
-   [@andr8928](https://github.com/andr8928): Suggestウィジェット: バグ修正 - ウィジェットが高すぎる場合、上部と下部のスペースのうち大きい方が使用されるようにする。[PR #260583](https://github.com/microsoft/vscode/pull/260583)
-   [@avarayr (avarayr)](https://github.com/avarayr): 修正：macOS TahoeでのGPUパフォーマンス問題を回避するため、ウィンドウの影を無効化 [PR #267724](https://github.com/microsoft/vscode/pull/267724)
-   [@bwateratmsft (Brandon Waterloo \[MSFT\])](https://github.com/bwateratmsft): MCP HTTPサーバーハンドラーの型不整合問題を修正 [PR #268548](https://github.com/microsoft/vscode/pull/268548)
-   [@CGNonofr (Loïc Mangeonjean)](https://github.com/CGNonofr)
    -   修正: サポートされているタスクタイプにおけるレースコンディション [PR #265847](https://github.com/microsoft/vscode/pull/265847)
    -   修正: Firefoxでの変更時にクローンされたスタイルシートを適切に更新 [PR #269126](https://github.com/microsoft/vscode/pull/269126)
-   [@dmiska25 (Dylan Miska)](https://github.com/dmiska25): ヌルオブジェクトを回避するため、オブジェクト自体ではなく参照を破棄するように変更。 [PR #266299](https://github.com/microsoft/vscode/pull/266299)
-   [@DrSergei (Sergei Druzhkov)](https://github.com/DrSergei): canSetExpressionValue のチェックを改善 [PR #268952](https://github.com/microsoft/vscode/pull/268952)
-   [@essjay05 (Joy Serquiña)](https://github.com/essjay05): 修正: ツールチップのスクリーンリーダー用コンテキストを提供するため、aria-description を追加 [PR #267818](https://github.com/microsoft/vscode/pull/267818)
-   [@garciasdos (Diego García)](https://github.com/garciasdos): 修正: 情報収集用メールのバリデータ [PR #265326](https://github.com/microsoft/vscode/pull/265326)
-   [@harbin1053020115 (ermin.zem)](https://github.com/harbin1053020115): 新機能: ウォークスルーの「:toSide」コマンドをクリックした際、workbench.editor.splitInGroupLayoutの設定に従ってエディタグループの方向を分割 [PR #267557](https://github.com/microsoft/vscode/pull/267557)
-   [@hron (Aleksei Gusev)](https://github.com/hron): `diffEditor.revert` をキーボードショートカットに割り当て可能にする [PR #225881](https://github.com/microsoft/vscode/pull/225881)
-   [@leonard520 (Xiaoyun Ding)](https://github.com/leonard520): mcpメタに会話IDを追加 [PR #265303](https://github.com/microsoft/vscode/pull/265303)
-   [@lukocode](https://github.com/lukocode): 修正: クリップボードへのコピー前にSVG画像が読み込まれるようにする [PR #263799](https://github.com/microsoft/vscode/pull/263799)
-   [@mawosoft (Matthias Wolf)](https://github.com/mawosoft)
    -   厳格モードが有効な場合の PowerShell シェル統合を修正 [PR #266260](https://github.com/microsoft/vscode/pull/266260)
    -   PowerShell シェル統合における PSReadline のキー再マッピングを復元 [PR #267311](https://github.com/microsoft/vscode/pull/267311)
-   [@narbit (Natalya Arbit)](https://github.com/narbit): ループバック IP リダイレクトを優先し、localhost リダイレクトを許可しないようにしました [PR #267546](https://github.com/microsoft/vscode/pull/267546)
-   [@Peter-developer01 (Peter)](https://github.com/Peter-developer01): localization.contribution.ts 内の nls.localize(...) のタイプミスを修正 [PR #263228](https://github.com/microsoft/vscode/pull/263228)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD): RangeFormat のドキュメント競合状態の不具合を修正 [PR #267628](https://github.com/microsoft/vscode/pull/267628)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   修正: ReplAccessibilityAnnouncer のメモリリーク [PR #264937](https://github.com/microsoft/vscode/pull/264937)
    -   修正: チャットウィジェットのメモリリーク [PR #265002](https://github.com/microsoft/vscode/pull/265002)
    -   メモリ使用量を約1.2 MB削減 [PR #267785](https://github.com/microsoft/vscode/pull/267785)
    -   修正: 折りたたみ機能のメモリリーク [PR #269071](https://github.com/microsoft/vscode/pull/269071)
-   [@Skn0tt (Simon Knott)](https://github.com/Skn0tt): 省略記号を検索ワイルドカードとして扱う [PR #262462](https://github.com/microsoft/vscode/pull/262462)
-   [@tmm1 (Aman Karmani)](https://github.com/tmm1): BrowserSocketFactoryにおけるディスポーザブルのリークを修正 [PR #263736](https://github.com/microsoft/vscode/pull/263736)
-   [@turansky (Victor Turansky)](https://github.com/turansky): 修正: `lm.registerLanguageModelChatProvider` のjsdocフォーマットを修正 [PR #266485](https://github.com/microsoft/vscode/pull/266485)
-   [@witsaint (DQ)](https://github.com/witsaint): 修正: 確認ボタンのスタイル [PR #267438](https://github.com/microsoft/vscode/pull/267438)
-   [@yiliang114 (易良)](https://github.com/yiliang114): #263546 の修正。treeView の view/item/context サブメニューの z-index に関する問題… [PR #263555](https://github.com/microsoft/vscode/pull/263555)

`vscode-copilot-chat`への貢献:

-   [@24anisha](https://github.com/24anisha): GH Telemetryへのaccept/rejectおよびsurvivalの追加 [PR #1059](https://github.com/microsoft/vscode-copilot-chat/pull/1059)
-   [@DGideas (Wanlin Wang 王万霖)](https://github.com/DGideas): OpenAI互換カスタムモデルのURL解決機能の改善 [PR #1074](https://github.com/microsoft/vscode-copilot-chat/pull/1074)
-   [@johan-j (Johan Jansson)](https://github.com/johan-j): モデルピッカーにおけるBYOKカスタムモデルのグループ化 [PR #1111](https://github.com/microsoft/vscode-copilot-chat/pull/1111)
-   [@shaunm-msft (Shaun Miller)](https://github.com/shaunm-msft)
    -   直接エンドポイントテストでレスポンスAPIを使用できるようにする修正 [PR #1047](https://github.com/microsoft/vscode-copilot-chat/pull/1047)
    -   list-models に対する正しいサービス作成を復元 [PR #1090](https://github.com/microsoft/vscode-copilot-chat/pull/1090)
-   [@vritant24 (Vritant Bhardwaj)](https://github.com/vritant24): 埋め込みランキングに基づいてツールのグループ化を解除 [PR #678](https://github.com/microsoft/vscode-copilot-chat/pull/678)
-   [@yemohyleyemohyle](https://github.com/yemohyleyemohyle)
    -   Yemohyle/重複メッセージのテレメトリ [PR #952](https://github.com/microsoft/vscode-copilot-chat/pull/952)
    -   Yemohyle/編集フィードバック（MSFT内部向け） [PR #984](https://github.com/microsoft/vscode-copilot-chat/pull/984)

`vscode-eslint`への貢献:

-   [@frodi-karlsson (Fróði Karlsson)](https://github.com/frodi-karlsson)
    -   設定によるリアルパス対応 [PR #2068](https://github.com/microsoft/vscode-eslint/pull/2068)
    -   lintTaskのconfigでのcommand設定をサポート [PR #2081](https://github.com/microsoft/vscode-eslint/pull/2081)
-   [@fronterior (Low Front)](https://github.com/fronterior): workspaceFolder のチェックを修正し、オプションチェーンを使用するようにした [PR #2075](https://github.com/microsoft/vscode-eslint/pull/2075)

`vscode-json-languageservice`への貢献:

-   [@danila-schelkov (Danila Schelkov)](https://github.com/danila-schelkov): 新機能: propertyNames の例を用いた補完 [PR #286](https://github.com/microsoft/vscode-json-languageservice/pull/286)

`vscode-mypy`への貢献:

-   [@cnaples79 (Chase Naples)](https://github.com/cnaples79): 修正: 非対話モードでのstderrからのmypy診断情報の解析 [PR #375](https://github.com/microsoft/vscode-mypy/pull/375)

`vscode-python-environments`への貢献:

-   [@almarouk (Abdelrahman AL MAROUK)](https://github.com/almarouk): プロミスを待機せずに conda 環境がリフレッシュされる問題を修正 [PR #751](https://github.com/microsoft/vscode-python-environments/pull/751)
-   [@renan-r-santos (Renan Santos)](https://github.com/renan-r-santos): ターミナルがエディタウィンドウに移動した際にアクティベートボタンを表示する [PR #764](https://github.com/microsoft/vscode-python-environments/pull/764)

`vscode-vsce`への貢献:

-   [@joyceerhl (Joyce Er)](https://github.com/joyceerhl): 修正: `languageModelChatProvider` への貢献に対して言語モデルタグを生成する [PR #1199](https://github.com/microsoft/vscode-vsce/pull/1199)

`debug-adapter-protocol` への貢献:

-   [@dmjio (David M. Johnson)](https://github.com/dmjio): adapters.md 内のデバッグアダプター一覧を更新 [PR #562](https://github.com/microsoft/debug-adapter-protocol/pull/562)

新機能が利用可能になり次第、ぜひお試しいただければ幸いです。最新情報を確認するため、定期的にこちらをチェックしてください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
