---
product: VSCode
version: 1.126.0
release_title: Visual Studio Code 1.126
release_date: 2026-06-24
source_url: "https://code.visualstudio.com/updates/v1_126"
archived_at: 2026-06-25
---

# Visual Studio Code 1.126

# Visual Studio Code 1.126

[LinkedIn](https://www.linkedin.com/showcase/vs-code)や[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)でフォローしてください

* * *

_リリース日: 2026年6月24日_

ダウンロード：Windows：[x64](https://update.code.visualstudio.com/1.126.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.126.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.126.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.126.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.126.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.126.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.126.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.126.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.126.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.126 のリリースへようこそ。今回のリリースでは、コストの透明性が向上し、モデルの調整が簡素化され、見慣れないコードの閲覧がより安全になりました。

-   [セッションレベルのコスト](#_session-level-cost-information): チャットセッションの総コストを確認し、リソースを多く消費する会話を特定できます。
    
-   [1 セッションあたりの複数チャット](#_multiple-chats-in-an-agent-host-copilot-session): 1 つのエージェントホスト Copilot セッション内で、複数のチャットを並行して実行できます。
    
-   [ワークスペースの信頼性](#_open-new-folders-in-restricted-mode): 制限モードで新しいフォルダを安全に閲覧できます。
 

プログラミングをお楽しみください！

* * *

## コスト管理

### セッション単位のコスト情報

個々のターンだけでなく、チャットセッション全体のコストを確認できるようになりました。これにより、どのセッションが最も多くのクレジットを消費しているかがより明確になり、コストのかかる会話を特定し、長期的な利用状況を管理しやすくなります。

![チャットセッション全体のクレジット単位のコストと、コンテキストウィンドウのトークン使用量が表示されたセッション情報ポップオーバーのスクリーンショット。](/assets/updates/1_126/session-token-usage.webp)

## 言語モデル

### 統合されたモデルカスタマイズピッカー

言語モデルの設定を簡素化するため、コンテキストサイズと推論（思考）負荷の制御機能を1つのモデルカスタマイズピッカーに統合しました。これにより、モデルを調整する際、2つの別々のドロップダウンを操作する代わりに、1か所から両方の設定を調整できるようになりました。

![コンテキストサイズと推論負荷の制御が統合されたモデルカスタマイズピッカーを示すスクリーンショット。](/assets/updates/1_126/model-customization-picker.webp)

### モデルホバーの簡素化

モデルホバーを整理し、一目で把握しやすくしました。モデルの機能について、1語で簡潔に説明する記述が表示されるようになり、関連する設定画面に直接移動できるディープリンクボタンも追加されました。

![1語の機能説明と設定画面へのダイレクトリンクボタンが表示された、簡素化されたモデルホバーのスクリーンショット。](/assets/updates/1_126/model-hover.webp)

## エージェントウィンドウ (プレビュー)

[エージェントウィンドウ](https://aka.ms/VSCode/Agents/docs) は、プロジェクトやマシンをまたいでエージェントセッションを探索、反復、確認するために最適化された専用のコンパニオンウィンドウです。

### エージェントホストの Copilot セッションにおける複数のチャット

「エージェント」ウィンドウでは、複数のエージェント セッションを並行して実行および管理できます。今回のリリースでは、エージェント ホストから開始された Copilot セッションで、一度に複数のチャットを保持できるようになりました。チャットは同じセッションと作業コンテキストを共有するため、同じワークスペース内で複数の会話を同時に進めることができます。

たとえば、メインのチャットで機能の実装に忙しくしている場合、待機したり中断したりする代わりに、セッションツールバーの**[新しいチャット]** (`+`) を選択して、同じセッション内で 2 つ目のチャットを開き、そこでこれまでの変更内容の確認、テストの草案作成、またはドキュメントの作成を行うことができます。両方が同時に実行され、各チャットは独自の会話履歴を保持します。 タブを切り替えて、中断した箇所からすぐに作業を再開できます。

チャットはウィンドウの再読み込み後も保持され、復元されます。一時的に席を外しても、最初のチャットだけでなく、セッション内のすべての会話に戻ることができます。

セッションヘッダーからセッションの名前を変更するのと同じように、各チャットの用途を把握しやすいよう、タブ上で直接チャットの名前を変更できます：

-   タブを**ダブルクリック**するか、コンテキストメニューから****名前の変更****を選択して、その場でタイトルを編集します。
-   **Enter** キーを押すと名前変更が確定し、**Escape** キーを押すとキャンセルされます。編集中に別のタブを選択しても、編集がキャンセルされ、そのタブに切り替わります。

チャットのタイトルはセッションのタイトルとは独立しているため、セッションの名前を変更しても、名前を変更したチャットの上書きは行われません。

### エージェントホストハーネスを使用した Agentic コードのフィードバック

「エージェント」ウィンドウで、生成されたコードに残したコメントはエージェントホストに保存されるようになりました。これにより、エージェントは `listComments` や `resolveComments` などのサーバーサイドツールを使用して、フィードバックに対応できるようになります。コメントはローカルセッションではなくサーバー上に保存されるため、クライアントの接続を切断してもこの機能は動作します。

また、エージェントは `addComment` ツールを使用して、ユーザーに代わってコメントを作成することもできます。`/code-review` などのレビュースキルを実行すると、コードがレビューされ、インラインでコメントが追加されます。これらのコメントは、エージェントに処理を依頼する前に、承認または削除することができます。

プルリクエストのレビューコメントも同様に機能します。 PR レビューコメントを承認してエージェントに送信することも、エージェントにすべての PR コメントの解決を依頼することもできます。まだ承認していない PR コメントの解決をエージェントに依頼すると、エージェントはまずコメントを表示する許可を求め、アクセスが許可されると、PR レビュー項目に対処します。

## エディターの操作性

### 制限モードでの新規フォルダの作成

**設定**: security.workspace.trust.startupPrompt VS Codeで開く VS Code Insidersで開く

[ワークスペースの信頼](https://code.visualstudio.com/docs/editing/workspaces/workspace-trust) を使用すると、プロジェクトフォルダでコードを自動的に実行できるかどうかを決定できます。これにより、見慣れないコードを扱う際に、セキュリティの層が追加されます。

以前は、新しいフォルダを開くと、その内容を確認する前に、そのフォルダを信頼するかどうかを尋ねるダイアログがすぐに表示され、作業が中断されていました。 現在では、新しいフォルダは [制限モード](https://code.visualstudio.com/docs/editing/workspaces/workspace-trust#_restricted-mode) で開き、信頼バナーのみが表示されます。これにより、まず安全にコードを閲覧し、準備が整った時点でフォルダを信頼できるようになります。

![新しいフォルダーを開いた際に表示される「制限モード」バナーのスクリーンショット。制限モードは安全なコード閲覧を目的としている旨のメッセージと、フォルダーを信頼するためのリンクが表示されています。](/assets/updates/1_126/restricted-mode-banner.webp)

これにより、security.workspace.trust.startupPrompt 設定のデフォルト値が `once` から `never` に変更されます。以前の動作に戻し、フォルダを初めて開いた際にプロンプトを表示させるには、値を `once` に戻してください。

### ワークスペース信頼エディタから「親フォルダを信頼」を削除

以前、ワークスペース信頼エディタには、**「信頼」**ボタンの横に**「親フォルダを信頼」**ボタンが表示されていました。このボタンは**「信頼」**ボタンと見た目が全く同じでありながら、親フォルダ全体を信頼対象としていたため、誤って選択してしまい、意図した以上に多くのフォルダを信頼してしまう可能性がありました。

このリスクを軽減するため、**「親フォルダを信頼」**ボタンは削除されました。引き続き、ワークスペース信頼エディタの**「信頼済みフォルダとワークスペース」**リストに親フォルダのパスを追加することで、親フォルダを信頼することができます。

![「**Trust Parent**」ボタンが削除され、**Trust** ボタンが 1 つだけ表示されたワークスペース・トラスト・エディタのスクリーンショット。](/assets/updates/1_126/trust-parent-button.webp)

## ウェブサイト

### VS Code ブログ

チームが次々とブログ記事を執筆するにつれ、ブログセクションの改善が必要だと気づきました。以前は、ブログセクションを開くと最新のブログ記事に直接移動するため、それ以前の記事が見落とされがちでした。 そこで、最近の投稿をいくつか紹介する [ブログランディングページ](https://code.visualstudio.com/blogs) を追加しました。

![最近のブログ記事一覧とブログアーカイブへのリンクが表示された、新しいブログランディングページのスクリーンショット。](/assets/updates/1_126/blog-landing-page.webp)

また、すべてのブログ記事の完全な一覧をお探しの場合は、[ブログアーカイブ](https://code.visualstudio.com/blogs/archive)でご確認いただけます。

### VS Code ドキュメント

ドキュメントの目次を再構成し、一目で把握しやすく、ナビゲーションが容易になるようにしました。agentic に関するすべてのドキュメントは、単一の「Agents」セクションにまとめられ、コードの編集や VS Code の設定に関連する内容は「Editor」セクションにまとめられています。

以前は、サポートされている言語や特定の拡張機能に関するドキュメントが、目次に個別に記載されていました。これらはそれぞれ「Languages and Runtimes」および「Extension Docs」の下に移動したため、必要な情報をすべて一か所で確認できるようになりました。

新しい構成についてのご意見がございましたら、microsoft/vscode-docs リポジトリで [フィードバックを送信](https://github.com/microsoft/vscode-docs/issues) してください。

## 非推奨の機能と設定

なし。

## 謝辞

`vscode` への貢献:

-   [@bikeshgyawali (Bikesh)](https://github.com/bikeshgyawali): uuid.ts 内の prefixedUuid に対する欠落していたユニットテストのカバレッジを追加 [PR #322146](https://github.com/microsoft/vscode/pull/322146)
-   [@Bryan2333 (BryanLiang)](https://github.com/Bryan2333): 課題 300307 を修正 [PR #322104](https://github.com/microsoft/vscode/pull/322104)
-   [@carlbrochu (Carl Brochu)](https://github.com/carlbrochu): GHテレメトリイベントを強化するためのSKUを追加 [PR #321046](https://github.com/microsoft/vscode/pull/321046)
-   [@cavalloJustinEmery (Justin Emery)](https://github.com/cavalloJustinEmery): 修正: リモートに接続している際にプラグインのスキルファイルにアクセスできない問題の修正 [PR #309465](https://github.com/microsoft/vscode/pull/309465)
-   [@guomaggie](https://github.com/guomaggie): 正しいサブエージェントモデルを選択 [PR #321061](https://github.com/microsoft/vscode/pull/321061)
-   [@mjbvz (Matt Bierner)](https://github.com/mjbvz)
    -   貢献者の名前を更新 [PR #321503](https://github.com/microsoft/vscode/pull/321503)
    -   通常の `npm run compile` も完全に tsgo を使用するように切り替え [PR #321646](https://github.com/microsoft/vscode/pull/321646)
    -   ウォッチモード中に esbuild インスタンスを終了・再起動 [PR #321219](https://github.com/microsoft/vscode/pull/321219)
-   [@rfeltis (Ralph Feltis)](https://github.com/rfeltis): チャットのクォータ通知バナーに関するテレメトリを追加 [PR #321793](https://github.com/microsoft/vscode/pull/321793)
-   [@romalpani (Rohan Malpani)](https://github.com/romalpani): セッション中の新規チャットに関するヒントテキストを更新 [PR #321965](https://github.com/microsoft/vscode/pull/321965)
-   [@wszgrcy (chen)](https://github.com/wszgrcy): 修正: registerToolDefinition でのタグの消失 [PR #319922](https://github.com/microsoft/vscode/pull/319922)

### 課題管理

課題管理への貢献：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

* * *

新機能が利用可能になり次第、すぐに試してくださる皆様に心より感謝いたします。ぜひ定期的にこのページをチェックして、新機能についてご確認ください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [更新情報](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
