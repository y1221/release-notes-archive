---
product: VSCode
version: 1.135.0
release_title: Visual Studio Code 1.135
release_date: 2026-08-26
source_url: "https://code.visualstudio.com/updates/v1_135"
archived_at: 2026-08-27
---

# Visual Studio Code 1.135

# Visual Studio Code 1.135

[LinkedIn](https://www.linkedin.com/showcase/vs-code)、[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)、[Instagram](https://www.instagram.com/vscode.ig)

* * *

_リリース日：2026年8月26日_

ダウンロード：Windows：[x64](https://update.code.visualstudio.com/1.135.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.135.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.135.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.135.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.135.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.135.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.135.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.135.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.135.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.135 のリリースへようこそ。このリリースでは、アプリケーションをまたいでエージェントセッションを継続したり、エージェントの作業内容についてセカンドオピニオンを得たり、より洗練された「エージェント」ウィンドウで作業しながらチャットの利用状況を把握したりできるようになります。

-   [外部エージェント セッション](#_continue-external-agent-sessions-in-vs-code): 他のアプリケーションで実行していた最近の Copilot または Claude エージェント セッションを、VS Code で継続できます。
    
-   [Rubber Duck (実験的機能)](#_rubber-duck-experimental): 補完的なモデルからセカンドオピニオンを得て、見落としがちな詳細やエッジケースを明らかにします。
    
-   [エージェントウィンドウのUX改善](#_single-pane-side-layout-is-now-the-default): 洗練されたサイドレイアウト、簡素化されたセッション制御、そして見つけやすくなったセッション情報を活用して作業できます。
    
-   [チャットの詳細な使用状況](#_view-detailed-chat-turn-usage): 各チャットターンについて、モデルごとの入力トークン、キャッシュされた入力トークン、出力トークンの内訳を確認できます。
 

楽しいコーディングを！

* * *

VS Code は全ユーザーに向けて段階的に展開されています。 VS Code の **更新を確認** 機能を使用すると、すぐに最新バージョンを入手できます。

新機能をいち早く試したい場合は、[**ナイトリー Insiders ビルドをダウンロード**](https://code.visualstudio.com/insiders) してください。このビルドには、最新の更新プログラムが利用可能になり次第、すぐに反映されます。

* * *

## エージェント

### エージェントホスト

エージェントホストを使用すると、複数の VS Code ウィンドウから同じエージェントセッションに接続できます。これは、[エージェントホストプロトコル](https://microsoft.github.io/agent-host-protocol/) （AHP）に基づいて、エージェントハネスを専用プロセスで実行します。エージェントホストの Copilot エージェントは、[Copilot SDK](https://www.npmjs.com/package/@github/copilot-sdk) によって駆動されており、これによりエージェントの動作や機能が Copilot CLI、 スタンドアロンの GitHub Copilot アプリ、およびその他の Copilot 製品と整合させています。

現在、エージェントホストの開発を積極的に進めています。次のスクリーンショットは、エディタウィンドウ内でエージェントホスト用に選択された `Copilot` ハーネスを示しています：

![エディタウィンドウ内のハーネスドロップダウンを示すスクリーンショット。](/assets/updates/1_135/agent-host-harness-dropdown-editor.webp)

詳細については、[VS Code エージェントホストのドキュメント](https://code.visualstudio.com/docs/agents/concepts/agent-host) や、以下の動画をご覧ください。フィードバックやご要望がございましたら、[イシューを登録](https://github.com/microsoft/vscode/issues) してご意見をお寄せください。

実際の動作は、[Agent Host 紹介 YouTube 動画](https://www.youtube.com/watch?v=k91ejc3G1YM)でご覧いただけます。

### VS Code で外部エージェントのセッションを継続する

**設定**: chat.agentSessions.showExternal VS Code で開く VS Code Insiders で開く

VS Codeの「セッション」リストに、他のアプリケーションで作成した最近のCopilotまたはClaudeエージェントのセッションが表示されるようになりました。デフォルトでは、VS Codeには最近更新された外部セッションが最大2件表示されます。「セッション」リストからセッションを選択すると、会話の内容を確認し、Copilotのサブスクリプションを利用してVS Code内で会話を継続できます。

外部セッションを開くと、チャット上部のバナーから、セッション一覧に表示される外部セッションの数を設定できます。また、セッション一覧のフィルターにある**外部**サブメニューを使用して、表示する外部セッションを選択することもできます。 この設定は、chat.agentSessions.showExternal Open in VS Code Open in VS Code Insiders 設定でいつでも変更できます。

### Rubber Duck（実験的機能）

Rubber Duckは、エージェントの作業内容について、補完的なモデルからセカンドオピニオンを得ることができる実験的な機能です。見落とされた詳細やエッジケースを明らかにするのに役立ちます。Copilotエージェントホストセッションで`/rubber-duck`コマンドを実行することで、Rubber Duckを使用できます。

[GitHub Copilot CLI における Rubber Duck](https://github.blog/ai-and-ml/github-copilot/github-copilot-cli-combines-model-families-for-a-second-opinion/) の詳細については、こちらをご覧ください。

### シングルペインのサイドレイアウトがデフォルトになりました

**設定**: sessions.layout.singlePaneDetailPanel VS Codeで開く VS Code Insidersで開く

前回のリリースでは、シングルペインレイアウトを導入しました。このレイアウトでは、セッションの詳細とエディタが単一のサイドペインに配置され、チャットの横に共通のタブバーが表示されます。デスクトップ版の「エージェント」ウィンドウにおいて、シングルペインレイアウトがデフォルトで有効になりました。

また、今回のリリースではレイアウトがさらに改善されました：

-   差分表示は、スペースが許す限り並列表示となり、サイドペインが狭くなりすぎた場合はインライン表示に切り替わります。エディタのタイトルメニューから **「常にインライン差分を表示」** を選択すると、画面幅にかかわらず常にインラインで差分を表示できます。
-   アクションバーの表示がすっきりしました。差分、表示モード、コードレビュー、添付ファイルに関するエディタ固有のアクションはエディタのタイトル領域に移動し、共有ヘッダーでは「詳細」の表示/非表示に重点が置かれています。

![シングルペインレイアウトにおける「変更」エディタの簡素化されたアクションバーを示すスクリーンショット。](/assets/updates/1_135/agents-single-pane-action-bar.webp)

従来のレイアウトを使用するには、`sessions.layout.singlePaneDetailPanel` を無効にし、ウィンドウを再読み込みしてください。

### 簡素化されたセッションのコントロールと情報

セッションヘッダーがすっきりとしたため、アクティブなセッションを簡単に識別でき、会話に集中できるようになりました。

セッションタイトルは目立つ位置に配置され、タイトルの横にあるオーバーフローメニューには、チャットの作成やセッションのピン留めなどのアクションがまとめられています。セッション一覧での検索機能は引き続き利用可能です。セッションに複数のチャットが含まれている場合、単一のチャットヘッダーの代わりにチャットタブが表示されます。

![簡素化された「Agents」セッションヘッダーにグループ化されたセッションおよびチャット操作を示すスクリーンショット。](/assets/updates/1_135/agents-simplified-session-header.webp)

セッション情報はチャット入力欄のすぐ上に移動し、作業中に見つけやすくなりました。ピルには、変更点、プルリクエスト、課題、エージェントが操作しているブラウザ、およびセッションのアートファクトを表示できます。たとえば、**Changes** ピルには、ファイル数と差分数がリアルタイムで表示され、セッションの変更履歴全体を開くことができます。

![チャット入力欄の上に「変更」「プルリクエスト」「アーティファクト」のピルが表示され、アーティファクトリストが展開されているスクリーンショット。](/assets/updates/1_135/agents-session-artifacts-pill.webp)

個々のピルを右クリックしてコンテキストメニューを開き、表示するピルの種類を選択できます。**変更**ピルは、セッションに変更がある限り常に表示されたままになります。

![表示するセッションピルの種類を選択するためのコンテキストメニューを示すスクリーンショット。](/assets/updates/1_135/agents-session-pill-visibility.webp)

## チャット

### チャット用のエディタスタイルのスティッキースクロール (実験的機能)

**設定**: chat.stickyScroll.enabled VS Code で開く VS Code Insiders で開く , chat.experimental.stickyScroll.enabled VS Code で開く VS Code Insiders で開く

チャットのスティッキースクロル機能を使用すると、長い応答をスクロールして確認する際も、現在のプロンプトを表示したままにしておくことができます。エディタのスティッキースクロル機能との整合性を高めるため、動作をさらに改良しました。両方の設定を有効にして、刷新された操作体験をお試しください。

### チャットターンごとの詳細な使用状況の表示

チャットの使用状況をより深く把握していただけるよう、チャット応答のフッターを再設計しました。フッターにカーソルを合わせると、そのチャットターンで使用された入力トークン、キャッシュされた入力トークン、出力トークンのモデルごとの内訳が表示されます。

![チャットターンにおける各モデルの詳細なトークン使用状況を示すスクリーンショット。](/assets/updates/1_135/chat_turn_info.webp)

### ローカルエージェントハーネスのサンドボックス化

以前、より大規模な環境や実使用ケースでの検証を行うため、ユーザーの50%を対象にサンドボックス化の展開を開始しました。特定の重大な問題は確認されませんでしたが、展開を継続するには、特にエージェントホストやCopilotハーネスの分野における優先度の高い投資に注力したい現時点において、さらなるサポートやフォローアップ- フォローアップ作業が必要となるでしょう。特にエージェントホストやCopilotハーネスといった、優先度の高い投資に注力したい現時点では、その余裕がありません。そのため、当面の間、デフォルトの展開率を0％に戻しました。

ローカルエージェントハーネスのサンドボックス機能は、UI を通じてオプトイン機能として引き続き利用可能ですので、試してみたいユーザーは引き続き有効にすることができます。

## 非推奨の機能と設定

なし

## 謝辞

`vscode` への貢献：

-   [@a-stewart (Anthony Stewart)](https://github.com/a-stewart): 残っていた `respectAutoSaveConfig` 変数の名前を `isRefactoring` に変更 [PR #160703](https://github.com/microsoft/vscode/pull/160703)
-   [@bstee615 (Benjamin Steenhoek)](https://github.com/bstee615): diffpatchのプロンプトにeagernessオプションを追加 [PR #327544](https://github.com/microsoft/vscode/pull/327544)
-   [@cipheraxat (Akshat Anand)](https://github.com/cipheraxat): 修正: 32pxのヘッダー内でModern UIパネルのタイトルタブを中央揃えにする [PR #331612](https://github.com/microsoft/vscode/pull/331612)
-   [@danyalahmed1995 (Danyal Ahmed)](https://github.com/danyalahmed1995): 大文字小文字を区別しない集約されたベースネームのグロブマッチングを修正 [PR #316387](https://github.com/microsoft/vscode/pull/316387)
-   [@dzsquared (Drew Skwiers-Koballa)](https://github.com/dzsquared): ツールピッカーの説明に mcp サーバーキーを追加 [PR #325003](https://github.com/microsoft/vscode/pull/325003)
-   [@guimmd2 (Guilherme Menezes Magalhães)](https://github.com/guimmd2): npm 12以降でパッケージ.jsonのホバーメタデータが表示されない問題を修正 [PR #327951](https://github.com/microsoft/vscode/pull/327951)
-   [@jachinsamuel (Jachin Samuel)](https://github.com/jachinsamuel): ドキュメント：使用されなくなった Gitter バッジを削除（サービスは 2023 年 6 月に終了） [PR #322702](https://github.com/microsoft/vscode/pull/322702)
-   [@jadefr (Jade Ferreira Vieira)](https://github.com/jadefr): html-language-featuresのesbuildスクリプトにおけるファイルURLからパスへの変換を修正 [PR #328557](https://github.com/microsoft/vscode/pull/328557)
-   [@jainampatel27 (Jainam Patel)](https://github.com/jainampatel27): selectionHighlightMaxLengthの説明文の誤字を修正 [PR #296427](https://github.com/microsoft/vscode/pull/296427)
-   [@juliagongms (Julia Gong)](https://github.com/juliagongms): nes: 最適化されたPatchBased02プロンプト戦略を追加 [PR #332018](https://github.com/microsoft/vscode/pull/332018)
-   [@n-gist (n-gist)](https://github.com/n-gist): `languages.getDiagnostics()` の `problem-matchers` 診断情報の重複を修正 [PR #290278](https://github.com/microsoft/vscode/pull/290278)
-   [@rfeltis (Ralph Feltis)](https://github.com/rfeltis)
    -   「エージェント」ウィンドウの起動時の A/A 実験トリガーを削除 [PR #331559](https://github.com/microsoft/vscode/pull/331559)
    -   チャットクォータの推移に対する微調整を元に戻す [PR #331401](https://github.com/microsoft/vscode/pull/331401)
-   [@RyanEwen (Ryan Ewen)](https://github.com/RyanEwen): 失敗したツール呼び出しを成功として表示しないようにした [PR #330707](https://github.com/microsoft/vscode/pull/330707)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   修正: markersTable のメモリリーク [PR #327885](https://github.com/microsoft/vscode/pull/327885)
    -   修正：mainThreadDocumentsAndEditors におけるメモリリーク [PR #331170](https://github.com/microsoft/vscode/pull/331170)
    -   修正：設定プレビューインジケーターのメモリリーク [PR #331990](https://github.com/microsoft/vscode/pull/331990)
-   [@srikanthananthula63053 (srikanthananthula)](https://github.com/srikanthananthula63053)
    -   修正: チャット添付ファイルコンテキストを遅延初期化する際に、新しいサービスアクセサを使用するようにしました（#329610 を修正） [PR #331416](https://github.com/microsoft/vscode/pull/331416)
    -   すべての項目がチェックされていない場合のセクションのチェックボックスの状態を修正 [PR #331419](https://github.com/microsoft/vscode/pull/331419)
-   [@TheRealAlexxx (alexxx)](https://github.com/TheRealAlexxx): 設定 UI の「editor.selectionHighlightMaxLength」の説明文にある誤字を修正 [PR #332162](https://github.com/microsoft/vscode/pull/332162)
-   [@zainnadeem786 (Zain Nadeem)](https://github.com/zainnadeem786)
    -   setUrisTrust() において、ワークスペースの信頼移行が完了するのを待機するように修正 [PR #328626](https://github.com/microsoft/vscode/pull/328626)
    -   `runInTerminal` 環境変数の値における PowerShell のクォーティングを修正 [PR #331753](https://github.com/microsoft/vscode/pull/331753)

`vscode-windows-process-tree` への貢献:

-   [@danfiedler-msft (Dan Fiedler)](https://github.com/danfiedler-msft): GitHub Actions を完全なコミット SHA に固定 [PR #91](https://github.com/microsoft/vscode-windows-process-tree/pull/91)

### 課題管理

課題管理への貢献:

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@xguarch (Xavier Guarch)](https://github.com/xguarch)
-   [@homeworld614 (homeworld614)](https://github.com/homeworld614)
-   [@johnnydecimal (Johnny Noble)](https://github.com/johnnydecimal)
-   [@wenma531 (noreply)](https://github.com/wenma531)

* * *

新機能が公開され次第、ぜひお試しいただければ幸いです。定期的にこのページをチェックして、新機能についてご確認ください。

> 過去の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [アップデート](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
