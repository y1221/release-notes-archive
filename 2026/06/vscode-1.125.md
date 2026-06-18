---
product: VSCode
version: 1.125.0
release_title: Visual Studio Code 1.125
release_date: 2026-06-17
source_url: "https://code.visualstudio.com/updates/v1_125"
archived_at: 2026-06-18
---

# Visual Studio Code 1.125

# Visual Studio Code 1.125

[LinkedIn](https://www.linkedin.com/showcase/vs-code)や[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)

* * *

_リリース日: 2026年6月17日_

ダウンロード: Windows: [x64](https://update.code.visualstudio.com/1.125.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.125.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.125.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.125.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.125.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.125.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.125.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.125.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.125.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.125 のリリースへようこそ。今回のリリースでは、よりスマートになった統合ブラウザ、拡張機能の更新に対する制御性の向上、および Copilot のエンタープライズ管理機能の強化が実現されています。

-   [モデルプロバイダーのインストール](#_install-model-providers-from-the-language-models-editor): マーケットプレイスから追加のモデルを検索してインストールできます。
    
-   [統合ブラウザ](#_integrated-browser): VS Code を離れることなく、ウェブ検索やリモート接続経由での安全なブラウジングが可能です。
    
-   [自動更新の遅延時間の設定](#_configurable-extension-auto-update-delay): 拡張機能の更新をインストールするまでの待機時間を設定できます。
    
-   [Copilot ポリシー](#_native-mdm-delivery-for-managed-copilot-settings): 既存のデバイス管理ツールを通じて、管理対象の Copilot 設定を配信します。
 

プログラミングをお楽しみください！

* * *

## エージェント

### VS Code で追加利用額の使用状況を確認する

超過料金の発生を防ぐため、Copilot ステータスダッシュボードには、Copilot の追加予算のうち、すでに消費した割合が表示されるようになりました。これにより、設定された上限に達する前に利用状況を調整できます。

![Copilot ステータスダッシュボードに表示される追加予算の制限を示すスクリーンショット。](/assets/updates/1_125/additional_budget.webp)

[Copilot 設定](https://github.com/settings/copilot/features) で、詳細な使用状況を確認したり、追加予算を管理したりできます。

## 言語モデル

### 言語モデルエディターからのモデルプロバイダーのインストール

BYOK（Bring Your Own Key）モデル以外にも、拡張機能は独自のモデルプロバイダーを提供できます。以前は、このような拡張機能を見つけるには、[拡張機能]ビューで検索するための適切なタグ（`language-models`）を知っている必要がありました。

現在、言語モデルエディタには**「モデルプロバイダをインストール」**ボタンが追加されており、これをクリックすると、モデルプロバイダを提供する拡張機能に絞り込まれた「拡張機能」ビューが開くため、それらの発見とインストールが容易になりました。プロバイダをインストールすると、そのモデルは、設定済みの他のモデルとともにモデルピッカーに表示されます。

詳細については、[言語モデルのドキュメント](https://code.visualstudio.com/docs/agent-customization/language-models)を参照してください。

## 統合ブラウザ

### アドレスバーからの Web 検索

**設定**: workbench.browser.searchEngine VS Code で開く VS Code Insiders で開く

VS Code を離れることなく情報を検索できます。統合ブラウザのアドレスバーにクエリを入力すると、スタンドアロンのブラウザと同じように、設定済みの検索エンジンで検索が実行されます。使用する検索エンジンを選択するには、workbench.browser.searchEngine 設定（VS Code で開く、VS Code で開く、Insiders）を使用してください。

![統合ブラウザのアドレスバーからの Web 検索を示すスクリーンショット。](/assets/updates/1_125/browser-search.webp)

### リモート接続でのブラウジング (プレビュー)

**設定**: workbench.browser.enableRemoteProxy VS Code で開く VS Code で開く Insiders

リモートワークスペースで統合ブラウザを開いた際、HTTP(S) 経由の Web トラフィックをリモート接続を介してプロキシできるようになりました。これにより、リモートマシンからのみアクセス可能なポートやサービスにも安全に接続できます。

これはプレビュー機能であるため、バグが発生する可能性があります。 試してみるには、workbench.browser.enableRemoteProxy 設定を有効にしてください。VS Code で開く VS Code で開く Insiders。問題が発生した場合は、[VS Code リポジトリ](https://github.com/microsoft/vscode/issues) に報告してください。

### 転送されたポートとのエージェント間の連携の改善

リモートワークスペースでポートを転送している場合、ポート番号が異なる可能性があるため、以前はエージェントがブラウザを開く際に問題が生じることがありました。

現在では、エージェントが転送済みのポートをリクエストした場合（かつリモートプロキシが有効になっていない場合）、URL が書き換えられ、エージェントにその変更が通知されます。

## エディターの操作性

### 拡張機能の自動更新設定

**設定**: extensions.autoUpdate VS Codeで開く VS Code Insidersで開く この設定は組織レベルで管理されます。変更するには、管理者に連絡してください。ORG

extensions.autoUpdate 設定（VS Codeで開く VS Code Insidersで開く）を使用して、拡張機能の自動更新を有効または無効にできます。この設定は組織レベルで管理されます。 変更するには、管理者に連絡してください。ORG 設定。このリリースでは、設定を `on` および `off` の値を使用するように簡素化しました。`true`、`false`、`onlyEnabledExtensions`、`delayed` などの以前の値は自動的に移行されます。

自動更新が有効になっている場合、VS Code は有効になっている拡張機能のみを更新します。無効になっている拡張機能は、もはや自動的に更新されません。これらの拡張機能は、次に有効にした際に更新されます。

> **注**: 管理者は、extensions.autoUpdate を一元的に管理できます。VS Code で開く VS Code Insiders で開く この設定は組織レベルで管理されます。変更するには、管理者に連絡してください。ORG および extensions.autoUpdateDelay VS Code で開く VS Code Insiders で開く この設定は組織レベルで管理されます。 変更するには、管理者に連絡してください。ORGの設定は[エンタープライズポリシー](https://code.visualstudio.com/docs/enterprise/policies)に基づいて管理されます。

### 拡張機能の自動更新遅延の設定

**設定**: extensions.autoUpdateDelay VS Code で開く VS Code Insiders で開く この設定は組織レベルで管理されます。変更するには、管理者にお問い合わせください。ORG

拡張機能の更新がインストールされるタイミングをより細かく制御できるよう、拡張機能の自動更新の遅延時間を設定できるようになりました。 これは、前回のリリースで導入された [拡張機能の自動更新の遅延](https://code.visualstudio.com/updates/v1_123#_delayed-extension-autoupdates) 機能をさらに発展させたものです。

extensions.autoUpdateDelay 設定（VS Code で開く、VS Code Insiders で開く。この設定は組織レベルで管理されます。変更するには管理者にお問い合わせください。ORG）を使用して、遅延時間を時間単位で設定できます。デフォルトでは、VS Code は拡張機能の更新をインストールする前に 2 時間待機します。この遅延は、自動更新が有効になっている場合にのみ適用されます。

## 拡張機能の開発

### 言語サーバープロトコル

言語サーバーを構築する拡張機能開発者は、[Language Server Protocol バージョン 3.18](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/) に更新することで、最新のプロトコル機能を採用できるようになりました。 対応する VS Code クライアントおよびサーバーパッケージは、`vscode-languageclient@10.0.0` および `vscode-languageserver@10.0.0` として利用可能です。 プロトコルの追加機能および互換性を損なう変更点の完全なリストについては、[vscode-languageserver-node の変更履歴](https://github.com/microsoft/vscode-languageserver-node/blob/main/README)を参照してください。md#3180-protocol-900-json-rpc-1000-client-and-1000-server)。

## エンタープライズ

### 管理対象の Copilot 設定に対するネイティブ MDM 配信

管理者は、アカウントベースのエンタープライズ設定ファイルに加え、Windows および macOS 上のネイティブ デバイス管理 (MDM) チャネルを通じて、管理対象の GitHub Copilot 設定を配信できるようになりました。 これは [エンタープライズ管理型 Copilot プラグインポリシー](https://code.visualstudio.com/updates/v1_124#_enterprise) を基盤としており、組織はポリシーを適用するためにユーザーごとのサインインに依存することなく、既存のデバイス管理ツールを使用して Copilot の構成を強制適用できるようになります。

開発者にとって、MDMを通じて提供される設定はVS Code上でポリシーによって強制されたものとして表示され、ローカルで上書きすることはできません。今後のアップデートでは、Copilotの各画面でサポートされるポリシーキーのセットが拡張される予定です。

## 非推奨の機能と設定

なし

## 謝辞

`vscode`への貢献者：

-   [@arun-357 (Arunachalam Nachiappan)](https://github.com/arun-357)
    -   画像カルーセルのキャプションに表示される生のマークダウンを修正 [PR #320754](https://github.com/microsoft/vscode/pull/320754)
    -   モーダルエディタのタイトルで、画像カルーセルにマウスオーバー時に UUID が表示される問題を修正 [PR #320739](https://github.com/microsoft/vscode/pull/320739)
    -   「画像プレビュー」エディタのラベルにメディアアイコンを使用するようにしました [PR #320951](https://github.com/microsoft/vscode/pull/320951)
-   [@dymaaaj7 (Dimitrije)](https://github.com/dymaaaj7): CompletionItemKind における File と Reference の宣言順序を修正 [PR #314958](https://github.com/microsoft/vscode/pull/314958)
-   [@g0w6y (ⳕⲛτⲉⲅⲥⲉⳏτⲟⲅ 🕵🏻)](https://github.com/g0w6y): MCP HTTP クライアントにおけるクロスオリジンリダイレクト時のリダイレクトスキームの検証と認証情報の削除 [PR #320347](https://github.com/microsoft/vscode/pull/320347)
-   [@guomaggie](https://github.com/guomaggie): Copilot Proxy から CAPI V3 への切り替え [PR #320472](https://github.com/microsoft/vscode/pull/320472)
-   [@kangarko (Matej)](https://github.com/kangarko): 変更されたチャットファイルをdiffではなくエディタで開く設定を追加 [PR #320948](https://github.com/microsoft/vscode/pull/320948)
-   [@lucaspar (Lucas Parzianello)](https://github.com/lucaspar): CLI 更新時のタイプミスを修正 [PR #245751](https://github.com/microsoft/vscode/pull/245751)
-   [@merfanian (Mahdi Erfanian)](https://github.com/merfanian): チャット参照APIの境界を越えて画像ソースの出所情報を保持するようにしました [PR #320624](https://github.com/microsoft/vscode/pull/320624)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD): 修正: コメントの継続を空白で区切られたスラッシュに制限 [PR #321230](https://github.com/microsoft/vscode/pull/321230)
-   [@Tyriar (Daniel Imms)](https://github.com/Tyriar): 修正(ターミナル): 変更検出のための合字アドオン設定の追跡 [PR #318992](https://github.com/microsoft/vscode/pull/318992)

### 課題追跡

当プロジェクトの課題追跡への貢献：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

* * *

新機能が利用可能になり次第、ぜひお試しいただければ幸いです。こちらのページをこまめにチェックして、新機能についてご確認ください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [更新情報](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
