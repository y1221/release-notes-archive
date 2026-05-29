---
product: VSCode
version: 1.122.0
release_title: Visual Studio Code 1.122
release_date: 2026-05-28
source_url: "https://code.visualstudio.com/updates/v1_122"
archived_at: 2026-05-29
---

# Visual Studio Code 1.122

# Visual Studio Code 1.122

[LinkedIn](https://www.linkedin.com/showcase/vs-code)、[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)でフォローしてください

* * *

_リリース日: 2026年5月28日_

ダウンロード: Windows: [x64](https://update.code.visualstudio.com/1.122.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.122.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.122.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.122.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.122.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.122.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.122.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.122.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.122.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.122 のリリースへようこそ。今回のリリースでは、エージェントの操作性をさらに向上させ、BYOKの柔軟性を高めるとともに、さまざまなデバイスでのWebアプリテストに向けた新機能を追加しました。

-   [エアギャップ環境でのBYOK](#_use-byok-without-a-github-sign-in): インターネットに接続していない場合でも、独自の言語モデルを使用できます。
    
-   [ブラウザによるデバイスエミュレーション](#_emulate-devices): 統合ブラウザ上で、さまざまなデバイスにおけるウェブサイトのレスポンシブ性を直接テストできます。
 
-   [充実したイシュー報告機能](#_improved-issue-reporting-flow): スクリーンショットや動画記録を含めた、詳細な VS Code イシューレポートを作成できます。
    

プログラミングを楽しんでください！

* * *

## エージェント

### エージェントウィンドウ (プレビュー)

[エージェントウィンドウ](https://aka.ms/VSCode/Agents/docs) は、プロジェクト、ハーネス、マシンにわたるエージェントセッションの探索、反復、レビューに最適化された専用のコンパニオンウィンドウです。私たちは継続的に改善を行っており、今回のリリースでの更新内容は以下の通りです：

-   **セッションのホバー詳細**: セッションリスト内のセッションにカーソルを合わせると、その詳細を一目で確認できます。ホバー表示には、使用されたハーネスを示すアイコン付きのセッションタイトルに加え、プロジェクト、ワークツリー、変更されたファイルが表示されます。
    
-   **ローカル VS Code ハーネス（Insiders 限定）**: カスタムエージェントピッカーの改善など、Agents ウィンドウでのローカルハーネスの利用機能について、引き続き改良を進めています。ローカルハーネスの利用は、VS Code Insiders でのみ利用可能な初期段階の実験的機能です。試してみるには、Insiders で sessions.chat.localAgent.enabled 設定を有効にしてください。
    

![リスト内のセッションにカーソルを合わせた状態の「Agents」ウィンドウを示すスクリーンショット](/assets/updates/1_122/Agents-window-hover.webp)

「Agents」ウィンドウは、VS Codeのタイトルバーにある**「Agentsで開く」**ボタンを含む、いくつかの方法で開くことができます。 その仕組みや機能の詳細については、[Agents ウィンドウのドキュメント](https://aka.ms/VSCode/Agents/docs)をご覧ください。また、Agents ウィンドウがエージェントファーストの開発ワークフローにどのように組み込まれるかについて解説した、新しい [VS Code Insiders ポッドキャストのエピソード](https://www.youtube.com/watch?v=45DA9KP38po)もぜひお聴きください。

皆様からのフィードバックは、Agents の改善に大いに役立っています。すでに利用してフィードバックをいただいている皆様、ありがとうございます！ 引き続き、[GitHubでイシューを登録](https://github.com/microsoft/vscode/issues)するか、[既存のイシュー](https://github.com/microsoft/vscode/issues?q=state%3Aopen%20label%3A%22agents-window%22)をご覧ください。

### エージェント向けのより充実した OpenTelemetry シグナル

ローカルエージェントセッションは、[GitHub Copilot CLI の OpenTelemetry 規約](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference#opentelemetry-monitoring) に準拠した、標準的な `github.copilot.*` 属性ネームスペースを OpenTelemetry に送信するようになりました。 新しいシグナルにより、各セッションにリポジトリのコンテキスト、エージェントの種類、構造化されたツールパラメータ、およびフックの結果が追加されます。

属性の完全なリファレンスについては、[OpenTelemetry を使用したエージェントの使用状況の監視](https://code.visualstudio.com/docs/copilot/guides/monitoring-agents)を参照してください。

### サンドボックス

**設定**: chat.agent.sandbox.enabled VS Codeで開く VS Code Insidersで開く この設定は組織レベルで管理されます。変更するには、管理者にお問い合わせください。ORG

以前は、**承認のバイパス**または**オートパイロット**モードでコマンドを実行すると、まずサンドボックス内で試行されていました。コマンドが 0 以外の終了コードで失敗した場合、サンドボックス外で自動的に再試行されていました。いずれにせよ承認はバイパスされていたため、これには有意義な安全上の利点はなく、動作の理解を難しくする恐れがありました。

Insidersユーザーからのフィードバックに基づき、ターミナルのサンドボックス化は**デフォルト承認**を使用する場合にのみ適用されるようになりました。これにより、安全性と利便性のバランスがより明確になります。

## 言語モデル

### GitHubへのサインインなしでBYOKを使用する

以前は、VS Codeで独自の言語モデルAPIキーを使用するには、GitHubへのサインインが必要でした。現在、 [Bring Your Own Key (BYOK)](https://code.visualstudio.com/docs/copilot/customization/language-models#_bring-your-own-language-model-key)はサインインなしで動作するため、GitHubへのサインインが不可能なエアギャップ環境や制限された環境でも、チャット、ツール、MCPサーバーを利用できます。これにより、Ollamaなどのローカルモデルを使用した完全なオフラインワークフローも可能になります。

利用を開始するには、コマンドパレットから**言語モデルの管理**を実行し、Anthropic、Azure、Gemini、OpenAI、Ollama、OpenRouter、または[カスタムエンドポイント](https://code.visualstudio.com/docs/copilot/customization/language-models#_add-a-custom-endpoint-model)などのプロバイダーを追加してください。 BYOKモデルが1つ以上設定されると、チャットビューが利用可能になり、サインインの要求は表示されなくなります。

組み込みツールおよび設定済みのMCPサーバーは引き続き動作します。リクエストはプロバイダーに直接送信されます。

> **注**: インライン提案および次回の編集提案 (NES) には、引き続きGitHubへのサインインが必要です。BYOKはチャット、ツール、およびMCPサーバーのみに対応しています。

#### ユーティリティモデルの通知

**設定**: chat.utilityModel VS Codeで開く VS Code Insidersで開く , chat.utilitySmallModel VS Codeで開く VS Code Insidersで開く

VS Code の一部のフロー（チャットのタイトル生成、コミットメッセージの生成、フィードバックなど）では、通常は Copilot サブスクリプションから提供される、より小型の [ユーティリティモデル](https://code.visualstudio.com/docs/copilot/customization/language-models#_change-the-model-for-utility-tasks) が使用されます。 サインアウト状態でBYOKを使用する場合、デフォルトのユーティリティモデルにはアクセスできないため、チャット入力欄に通知が表示され、BYOKモデルの中から1つを指定するよう促されます。

以下の2つのオプションがあります：

-   **設定** を選択して設定画面を開き、chat.utilityModel Open in VS Code Open in VS Code Insiders および chat.utilitySmallModel Open in VS Code Open in VS Code Insiders 用のBYOKモデルを選択します。 これにより、独自の言語モデルを使用した AI 機能の全セットが利用可能になります。
 
-   チャット機能のみを使用する場合は、通知を閉じます。モデルを設定するまで、ユーティリティ駆動の機能は非アクティブのままです。
 

両方のユーティリティ設定を構成するか、GitHub にサインインするか、すべての BYOK モデルを削除すると、通知は自動的に非表示になります。

### 安定版でのカスタムエンドポイントプロバイダー

カスタムエンドポイントプロバイダーを使用すると、Chat Completions、Responses、またはMessages APIを実装するモデルを接続できるため、独自のエンドポイントとAPIキーを使用してチャット機能を利用できます。これを使用して、セルフホスト型、エンタープライズ、またはその他の互換性のあるAIエンドポイントに接続できます。

カスタムエンドポイントプロバイダーが、VS Code Stable で利用可能になりました。

設定方法については、[カスタムエンドポイントモデルの追加](https://code.visualstudio.com/docs/copilot/customization/language-models#_add-a-custom-endpoint-model) を参照してください。

### Agents ウィンドウでのモデル管理

「エージェント」ウィンドウから直接 **Chat: Manage Language Models** コマンドを実行し、作業中に使用する言語モデルを設定できるようになりました。

これはローカルセッションで機能し、同じ手順で BYOK モデルを使用することも可能です。モデルの設定はエディタウィンドウと共有されるため、どちらの場所で変更を行っても、両方に反映されます。

### 「言語モデルの管理」における BYOK プロバイダーグループの詳細な操作

BYOKプロバイダーの管理では、APIキーの更新やプロバイダーグループの名称変更など、細かい更新を行うことがよくあります。これまでは、JSON設定ファイルを開いて手動で編集する必要がありました。

言語モデルエディターでは、サポートされているプロバイダーグループに対して、プロバイダースキーマに基づいた対象を絞ったアクション（**APIキーの更新**、**モデルの追加**、**グループの名称変更**、**削除**）が利用可能になりました。これにより、同じワークフローを維持したまま、プロバイダーの一般的なメンテナンス作業を迅速に行えます。

## リモート開発

[リモート開発拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) を使用すると、[Dev Container](https://code.visualstudio.com/docs/devcontainers/containers)、 SSHや[リモートトンネル](https://code.visualstudio.com/docs/remote/tunnels)経由のリモートマシン、あるいは[Windows Subsystem for Linux](https://learn.microsoft.com/windows/wsl) (WSL)を、フル機能の開発環境として利用できるようになります。

主な機能は以下の通りです：

-   32 ビット ARM Linux ホストのサポート終了

これらの機能の詳細については、[リモート開発のリリースノート](https://github.com/microsoft/vscode-docs/blob/main/remote-release-notes/v1_122.md)をご覧ください。

## 統合ブラウザ

### デバイスのエミュレーション

統合ブラウザには、画面サイズ、モバイル/タッチ操作のエミュレーション、カスタムユーザーエージェントなど、デバイスエミュレーションの機能が標準でサポートされるようになりました。これは特にWeb開発やデバッグに有用で、別のブラウザに切り替えたり外部ツールを使用したりすることなく、VS Codeから直接、さまざまなデバイスにおけるWebサイトのレスポンシブ性や動作を迅速にテストできます。

ブラウザタブから開始するには、オーバーフローメニューから**Show Emulation Toolbar**コマンドを選択します。

また、Playwrightコードを介してデバイスエミュレーションをトリガーすることも可能です。例えば、モバイルのレスポンシブ表示に関する問題を特定する場合などに役立ちます：

### ブラウザのスクリーンショットをチャットのコンテキストとして追加

新しい**「スクリーンショットをチャットに追加」**機能を使用すると、現在のブラウザビューポートのスクリーンショットをコンテキストとしてチャットに添付できます。これは、レイアウトの問題のデバッグなど、UI関連のタスクで特に役立ちます。

## エディターの操作性

### 課題報告フローの改善

**設定**: issueReporter.wizard.enabled VS Codeで開く VS Code Insidersで開く

VS Code でお困りの問題をより正確に把握し、修正するために、新しい問題報告ウィザードを導入し、問題報告フローを改善しました。このウィザードを使用すると、関連する詳細情報、スクリーンショット、動画記録の追加を含め、VS Code から直接高品質な問題報告を作成できます。

新しい問題報告機能を利用するには、**issueReporter.wizard.enabled** 設定を有効にしてください。

## 廃止予定の機能と設定

### 今回のリリースでの廃止予定機能

### 今後の廃止予定機能

## 主な修正

## 感謝

問題追跡への貢献：

-   [ ]

## 非推奨の機能と設定

### 今回のリリースでの新たな非推奨項目

### 今後の非推奨予定

## 主な修正点

## 感謝

課題追跡への貢献:

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

`vscode`への貢献:

-   [@aaronpowell (Aaron Powell)](https://github.com/aaronpowell): プラグインマーケットプレイス向けのマーケットプレイス参照機能を追加 [PR #317901](https://github.com/microsoft/vscode/pull/317901)
-   [@oded-ist (Oded S)](https://github.com/oded-ist): read_cell_output がすべての出力を「大きすぎる」と誤って報告する問題を修正 [PR #318148](https://github.com/microsoft/vscode/pull/318148)
-   [@PenguinDOOM (Penguin)](https://github.com/PenguinDOOM): BYOKの無効なステートフルマーカーの再試行を修正 [PR #317292](https://github.com/microsoft/vscode/pull/317292)
-   [@SLdragon (rentu)](https://github.com/SLdragon): 機能追加: nes/inline 補完プロバイダ向けに languageDiagnosticsService オプションを追加 [PR #317678](https://github.com/microsoft/vscode/pull/317678)

* * *

新機能が利用可能になり次第、ぜひお試しいただければ幸いです。最新情報については、こちらを頻繁にチェックしてください。

> 過去の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
