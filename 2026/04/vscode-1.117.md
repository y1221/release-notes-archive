---
product: VSCode
version: 1.117.0
release_title: Visual Studio Code 1.117
release_date: 2026-04-22
source_url: "https://code.visualstudio.com/updates/v1_117"
archived_at: 2026-04-23
---

# Visual Studio Code 1.117

# Visual Studio Code 1.117

[LinkedIn](https://www.linkedin.com/showcase/vs-code)、[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)でフォローしてください |

* * *

_リリース日: 2026年4月22日_

ダウンロード: Windows: [x64](https://update.code.visualstudio.com/1.117.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.117.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.117.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.117.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.117.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.117.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.117.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.117.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.117.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.117 のリリースへようこそ。このリリースでは、Copilot Enterprise および Business ユーザー向けの新しい機能が追加され、VS Code でのエージェント体験がさらに向上しています。このリリースの主なハイライトは以下の通りです：

-   [Business および Enterprise 向け BYOK](#_bring-your-own-key-for-copilot-business-and-enterprise): 好みのモデルや特殊なモデル用に、独自の API キーを VS Code のチャット内で直接接続できます。
    
-   [チャット応答の増分レンダリング](#_incremental-rendering-of-chat-responses-experimental): チャット応答のストリーミングがよりスムーズになります。
 
-   [ターミナルの改善](#_terminal): 任意のターミナルプロファイルから Copilot CLI を起動できるようになりました。
 

プログラミングをお楽しみください！

* * *

## Copilot Business および Enterprise での「Bring Your Own Key」

コンプライアンス、パフォーマンス、コストの理由から、チームが特定のモデルを必要とすることはよくありますが、それらを使用するためにツールを切り替えることは開発者の作業効率を低下させます。「Bring Your Own Language Model Key（BYOK）」機能により、Copilot Business および Enterprise ユーザーは、OpenRouter、Ollama、Google、OpenAI などのプロバイダーの独自の API キーを接続し、VS Code のチャット内でそれらのモデルを直接使用できるようになります。

デフォルトではBYOKは有効になっており、管理者はGitHub.comの[Copilotポリシー設定](https://github.com/settings/copilot/features)にある**「Bring Your Own Language Model Key」**ポリシーを使用してこれを無効にできます。これにより、管理者は組織で利用可能なモデルプロバイダーを制御しつつ、開発者は既存のワークフローを維持できます。

ポリシーを有効にすると、組織のメンバーは[組み込みプロバイダーからモデルを追加](https://code.visualstudio.com/docs/copilot/customization/language-models#_bring-your-own-language-model-key)したり、言語モデルプロバイダーの拡張機能をインストールしたりできるようになります。

## チャット体験

### チャット応答のインクリメンタルレンダリング（実験的機能）

インクリメンタルレンダリングでは、トークンが到着するにつれてブロック単位でコンテンツをストリーミングし、オプションでアニメーションを追加することで、チャット応答がより滑らかで自然なものになります。デフォルトのタイマーベースのレンダリングとは異なり、この実験的なアプローチでは各ブロックが準備でき次第レンダリングされるため、長い応答に対する体感待ち時間が短縮されます。

以下の設定でレスポンスの増分レンダリングを構成します：

-   chat.experimental.incrementalRendering.enabled VS Codeで開く VS Codeで開く Insiders : チャットレスポンスをストリーミングする際、ブロック単位のアニメーションをオプションで有効または無効にします。デフォルト: `true`。
-   chat.experimental.incrementalRendering.animationStyle VS Codeで開く VS Codeで開く Insiders : レスポンスの増分レンダリングのアニメーションスタイルを設定します。 オプション: `none`, `fade`, `rise`, `blur`, `scale`, `slide`, `reveal`。デフォルト: `fade`。
-   chat.experimental.incrementalRendering.buffering VS Codeで開く VS Codeで開く Insiders : インクリメンタル応答レンダリング中に、レンダリング前にコンテンツがバッファリングされる方法を設定します。 バッファリングレベルを低く設定するとレンダリングは高速化されますが、文が不完全なまま表示されたり、Markdownが部分的にしか表示されない場合があります。オプション: `off`, `word`, `paragraph`。デフォルト: `off`。

### エージェントセッションを最近のアクティビティ順に並べ替える

エージェントセッションが多数蓄積されると、目的のセッションを見つけるのが困難になる場合があります。**エージェントセッション**ビューでは、セッションの作成日時または最終更新日時で並べ替えることができるため、中断した箇所を素早く再開できます。

![フィルタコンテキストメニューが開き、更新日/作成日による並べ替えが表示されているチャットビューのスクリーンショット。](/assets/updates/1_117/sort-by-filter.webp)

### バックグラウンドのターミナルコマンドに関するシステム通知

エージェントがバックグラウンドで長時間実行されるターミナルコマンドを実行すると、その進行状況を把握しにくくなることがあります。 これらのコマンドは、チャット応答内に**システム通知**として表示されるようになったため、ターミナルに切り替えることなくステータスを確認できます。

![チャット応答に表示されるシステム通知のスクリーンショット。](/assets/updates/1_117/system-notification-terminal.webp)

## エージェントの操作体験

### Visual Studio Code Agents (Insiders)

> **注**: Visual Studio Code Agents アプリは現在プレビュー版であり、VS Code Insiders をインストールした場合にのみ利用可能です。

Visual Studio Code Agents アプリは、VS Code Insiders に同梱されるコンパニオンアプリです。リポジトリ間で並行セッションを実行したり、差分をインラインで確認したり、多段階のコーディングタスクを繰り返したりできる、エージェント専用の環境を提供します。[1.115](https://code.visualstudio.com/updates/v1_115#_visual-studio-code-agents-preview) で導入され、フィードバックに基づいて進化を続けています。

このリリースの更新点:

-   **サブセッションの作成**: セッションタイトルにある **+** を選択すると、現在のセッションからサブセッションを起動できます。 これにより、親セッションの進行状況を維持したまま、並行して行う調査やコードレビューなど、コンテキストに沿った追加作業を開始するのに便利です。
-   **インライン変更の表示**: 変更内容のインライン表示が改善され、エージェントがコードを編集した際の差分の確認や比較が容易になりました。
-   **アップデート体験**: 各オペレーティングシステムにおけるアップデートフローが改善され、最新バージョンを維持するプロセスがよりスムーズになりました。
-   **テーマ、チャット応答、およびUXの洗練**: テーマ、セッションリストと応答の表示、およびアプリ全体のUXに対する継続的な改良が行われました。

![変更案が反映された「VS Code Agents - Insiders」アプリのスクリーンショット。](/assets/updates/1_117/Agents-117.webp)

以前のリリースと同様、以下の方法でアプリを開くことができます:

-   OSのスタートメニューまたはアプリケーションフォルダーから **Visual Studio Code Agents - Insiders** を起動します。
-   VS Code Insiders コマンドパレットから **Chat: Open Agents Application** を実行します。
-   VS Code Insiders のウェルカムページから **Try out the new Agents app** を選択します。

## ターミナル

### カスタムターミナルプロファイルを使用して Copilot CLI を起動する

デフォルトのターミナルプロファイルが、macOS や Linux の `fish`、Windows の Git Bash などの非デフォルトシェルに設定されている場合でも、ターミナルパネルから Copilot CLI ターミナルプロファイルを起動できるようになりました。

以前は、この設定でターミナルプロファイルピッカーから **GitHub Copilot CLI** を選択すると、`No terminal profile options provided for id 'copilot-cli'` というエラーが発生し、ターミナルが起動できませんでした。

### エージェント CLI のターミナルタイトル

Copilot CLI、Claude Code、Gemini CLI などのエージェント CLI は通常、`node` プロセスとして実行されるため、ターミナルタイトルには一般的な `node` というラベルが表示されていました。そのため、各ターミナルでどのエージェントが実行されているのか判別しにくくなっていました。 これに対し、ターミナルはこれらのエージェント CLI を独自のシェルタイプとして検出し、CLI から送信される OSC タイトルシーケンスをターミナルタイトルとして使用するようになりました。これにより、各ターミナルがホストしているエージェントを明確に識別できるようになりました。

![OSC タイトルシーケンスを通じて実行中のエージェント CLI を反映したターミナルタイトルを示すスクリーンショット。](/assets/updates/1_117/terminalAiCliTitle.webp)

この検出機能の改善は、macOS、Linux、および Windows 上の Copilot CLI、Claude Code、Gemini CLI を対象としています。Codex は現在 OSC タイトルシーケンスを送信していないため、macOS ではまだ検出されません。この動作はデフォルトで有効になっており、terminal.integrated.tabs.allowAgentCliTitle 設定でオン/オフを切り替えることができます。

## 言語

### TypeScript 6.0.3

このリリースには、[TypeScript 6.0.3](https://github.com/microsoft/typescript/issues?q=milestone%3A%22TypeScript%206.0.3%22) のリカバリリリースが含まれています。このマイナーアップデートでは、いくつかのインポートに関するバグやリグレッションが修正されています。

## 非推奨機能と設定

### このリリースでの新たな非推奨機能

### 今後の非推奨機能

## 感謝

課題追跡への貢献:

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

`vscode`への貢献:

-   [@abadawi591 (abadawi-msft)](https://github.com/abadawi591): Abadawi/sendにルーターへの画像送信機能を追加 [PR #308321](https://github.com/microsoft/vscode/pull/308321)
-   [@andysharman](https://github.com/andysharman): 修正: 最初のセッションでデフォルトのセッションモード実験が適用されない問題 [PR #308905](https://github.com/microsoft/vscode/pull/308905)
-   [@bocan (Chris Funderburg)](https://github.com/bocan): launch.json の設定配列に null エントリがある場合のクラッシュを修正 [PR #308235](https://github.com/microsoft/vscode/pull/308235)
-   [@jamestut (James Nugraha)](https://github.com/jamestut): シャドウタブを防ぐため、ターミナルエディタの分割画面で openEditor を await するように変更 [PR #309167](https://github.com/microsoft/vscode/pull/309167)
-   [@maruthang (Maruthan G)](https://github.com/maruthang)
    -   修正(タスク): taskDefinitions 貢献スキーマの必須プロパティにホバー説明を追加 (#\_275670) [PR #310764](https://github.com/microsoft/vscode/pull/310764)
    -   fix(debug): 命令ブレークポイントを解決済みアドレスで識別し、instructionReferenceが変更された際に削除できるようにした (#\_289678) [PR #310763](https://github.com/microsoft/vscode/pull/310763)
    -   修正(terminal-chat): リスナーのリークを防ぐため、ターミナルツールセッションの登録を重複排除 (#\_309906) [PR #310740](https://github.com/microsoft/vscode/pull/310740)
    -   修正(chat): 破棄されていない入力パーツに対して renderWelcomeViewContentIfNeeded を保護 (#\_310356) [PR #310822](https://github.com/microsoft/vscode/pull/310822)
    -   修正：言語ステータスにおける重複したステータス ID によるリスナーのリークを防止 (#\_309042) [PR #309159](https://github.com/microsoft/vscode/pull/309159)
    -   修正(チャット): レスポンスがキャンセルされた際に、実行中のストリーミングツールの呼び出しをキャンセル (#\_288701) [PR #310979](https://github.com/microsoft/vscode/pull/310979)
-   [@matts1 (Matt)](https://github.com/matts1): 新機能: メインウィンドウへの切り替えをサポート。[PR #306573](https://github.com/microsoft/vscode/pull/306573)
-   [@NikolaRHristov (Nikola Hristov)](https://github.com/NikolaRHristov): 修正: マングラーのビルドエラーを解決するため、protectedメンバーをpublicに変更 [PR #310195](https://github.com/microsoft/vscode/pull/310195)
-   [@OscarPalafox (Oscar Palafox Verna)](https://github.com/OscarPalafox): theme-defaults における新しい 2026 向けの一貫性のあるインクルードパス [PR #309880](https://github.com/microsoft/vscode/pull/309880)
-   [@RieBi (Sviatoslav Zubar)](https://github.com/RieBi): パッケージの最新公開バージョンに加え、現在インストールされているバージョンも表示するように [PR #308569](https://github.com/microsoft/vscode/pull/308569)
-   [@yogeshwaran-c (Yogeshwaran C)](https://github.com/yogeshwaran-c)
    -   json: 言語モデルのキャッシュがオーバーフローではなく容量上限に達した際に削除される問題を修正 [PR #309176](https://github.com/microsoft/vscode/pull/309176)
    -   openDebug が openOnDebugBreak の場合、初回セッション開始時にデバッグビューを開かないようにした [PR #309133](https://github.com/microsoft/vscode/pull/309133)
    -   テスト: 圧縮された結果行において、右クリックメニューをホバーバーと揃える [PR #309139](https://github.com/microsoft/vscode/pull/309139)
    -   組み込み CSS サーバーに CodeAction タイプを採用 [PR #310055](https://github.com/microsoft/vscode/pull/310055)

* * *

新機能が利用可能になり次第、ぜひお試しいただければ幸いです。最新情報については、こちらを頻繁にチェックしてください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
