---
product: VSCode
version: 1.139.0
release_title: Visual Studio Code 1.139
release_date: 2026-09-23
source_url: "https://code.visualstudio.com/updates/v1_139"
archived_at: 2026-09-24
---

# Visual Studio Code 1.139

# Visual Studio Code 1.139

2026年9月23日リリース 安定版

## 1.139.0のダウンロード

Windows

[x64](https://update.code.visualstudio.com/1.139.0/win32-x64-user/stable)[Arm64](https://update.code.visualstudio.com/1.139.0/win32-arm64-user/stable)

macOS

[ユニバーサル](https://update.code.visualstudio.com/1.139.0/darwin-universal-dmg/stable)[Intel](https://update.code.visualstudio.com/1.139.0/darwin-x64-dmg/stable)[Apple silicon](https://update.code.visualstudio.com/1.139.0/darwin-arm64-dmg/stable)

Linux

[.deb](https://update.code.visualstudio.com/1.139.0/linux-deb-x64/stable)[.rpm](https://update.code.visualstudio.com/1.139.0/linux-rpm-x64/stable)[.tar.gz](https://update.code.visualstudio.com/1.139.0/linux-x64/stable)[Armに関する手順](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions)[Snap](https://update.code.visualstudio.com/1.139.0/linux-snap-x64/stable)

すでにインストール済みですか？ VS Code の **更新を確認** 機能をご利用ください。今後の機能については、[Insiders ビルド](https://code.visualstudio.com/insiders) をご利用ください。

## リリースのハイライト

このリリースでは、大規模なエージェント セッション リストの処理速度が向上し、Dev Container のサポートがリモート プロジェクトに拡張され、日常的な編集操作が改善されました。

-   [リモート Dev Container セッション](#_run-agent-sessions-in-dev-containers-on-remote-hosts): SSH、トンネル、および WSL ホスト上のプロジェクトの Dev Container 内でエージェントを実行できます。
    
-   [セッションリストの改善](#_faster-session-list-loading): 大規模なセッションリストの読み込みを高速化し、画面に表示できるセッション数を増やし、その場でセッション名を変更できるようにしました。
    
-   [エディタ操作性](#_editor-experience): 改行された行が一目で判別できるようになり、入力中に閉じ括弧の重複を回避できます。
 

* * *

## エージェント

[エージェントホスト](https://code.visualstudio.com/docs/agents/concepts/agent-host) は、[エージェントホストプロトコル](https://microsoft.github.io/agent-host-protocol/) (AHP) に基づいて、専用のプロセスでエージェントハーネスを実行します。 これにより、複数の VS Code ウィンドウから同じセッションに接続できます。そのアーキテクチャとワークフローの詳細については、[エージェントホストのブログ記事](https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture)をご覧ください。

### リモートホスト上の Dev Containers でエージェントセッションを実行する

**設定**: chat.agentHost.devContainer.enabled VS Code で開く VS Code Insiders で開く（エージェントウィンドウのみ）

エージェントが、ノートパソコンやリモートホスト上でツールチェーンの設定を重複させることなく、適切なツールと依存関係を使用してリモートプロジェクトをビルドおよびテストできるようにします。このリリースでは、Dev Container セッションの対象がローカルフォルダから、SSH、トンネル、および WSL ホスト上のプロジェクトへと拡張されました。

利用を開始するには、chat.agentHost.devContainer.enabled を有効にし（VS Codeで開く VS Codeで開く Insiders）、エージェントウィンドウのフォルダメニューから **Dev Containerを使用** を選択してください。リモートフォルダにはサポートされているDev Container構成が必要であり、リモートホスト上でDockerが利用可能である必要があります。

> **注**: Dev Container セッションは段階的に展開されているため、お使いの環境ではまだデフォルトで有効になっていない可能性があります。手動で設定を有効にすることで、今すぐこの機能を試すことができます。

### セッション一覧の読み込み速度向上

VS Code は、大規模なエージェント セッション リストの読み込みと更新をより高速に行います。エージェント ホストは、リストが構築されるたびにすべての会話データベースを開くのではなく、軽量なセッションおよびチャットのメタデータを中央カタログに保持します。会話の完全な内容は、個々のセッションおよびチャット データベース内で隔離されたままです。

以前のアプローチではセッション数に比例して処理時間が長くなっていたため、この改善効果はセッション数が増えるほど大きくなります。 開発マシン上で約 645 セッションを用いて測定した結果：

操作

以前

その後

改善率

起動後の最初のセッション一覧表示

1.3 秒

0.1 秒

約 12 倍高速化

セッション一覧の更新

0.6 秒

0.15 秒

約4倍高速化

セッション数が少ない場合は、その差も小さくなります。このリリース以前に作成されたセッションは、バックグラウンドで自動的に移行されます。

### セッションリストのコンパクト表示

「エージェント」ウィンドウのセッションリストビューで **コンパクト表示** を有効にすることで、セッションリストにより多くのセッションを表示できます。

コンパクト行では、通常はセッションタイトルが表示され、行にカーソルを合わせたりフォーカスを合わせたりするとワークスペースの詳細が表示されます。セッションで入力や承認が必要な場合、その行は展開され、これらのリクエストが常に表示された状態になります。

また、作業の主体となるチャットの進行状況もその行に表示されます。セッションを折りたたむと、親行に非表示のチャットからの進行状況がまとめられて表示されます。

### 空のセッショングループをフィルタリング

**セッションのフィルタ**から**空のグループ**を無効にすると、空のカスタムグループと空の**チャット**セクションが非表示になります。この設定はプロフィールに保存され、他のセッションリストのフィルタと一緒にリセットされます。

### セッションとチャットをその場で名前変更

セッションリスト上で直接、セッションやネストされたチャットの名前を変更できます。タイトルをダブルクリックするか、コンテキストメニューの**名前の変更**アクションを使用するか、行にフォーカスを合わせてセッションの場合は F2 キー、ネストされたチャットの場合は F2 キーを押します。インライン検証により空のタイトルは許可されず、キャンセルすると以前のタイトルに戻ります。

### セッション内のチャットの表示方法の選択（プレビュー）

**設定**: sessions.showChatTabs VS Codeで開く VS Codeで開く Insiders（エージェントウィンドウのみ）

エージェントセッションには、それぞれ異なる会話またはコンテキストを表す [複数のチャット](https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions#_run-multiple-chats-in-a-session)を含み、それぞれが異なる会話やコンテキストを表します。セッションに複数のチャットが含まれている場合、セッションヘッダーメニューからワークフローに最適な表示方法を選択してください：

-   **複数**：各チャットを個別のタブで表示します。
-   **単一**：アクティブなチャットのみを表示し、タブバーを非表示にします。

表示モードを切り替えても、開いているチャット、アクティブなチャット、および会話の状態は維持されます。単一モードでは、明示的にサイドに開いたチャットは、独自のヘッダーアクションを持つ独立したペインとして表示されます。

* * *

## チャット

### ペットの命名コンテストの最新情報（実験的機能）

VS Codeのペットの名前を提案してくださった皆様、ありがとうございました。命名コンテストは2026年9月17日に締め切られ、現在、応募資格を満たすエントリーを審査中です。 まもなく、優勝者とペットの新しい名前を発表します。

発表を待つ間、チャットで `/vscode-pet` と入力して、あなたの相棒に会い、[そのすべてのインタラクションや反応を試してみてください](https://code.visualstudio.com/docs/agents/reference/chat-pet)。

* * *

## エディタ操作体験

### 改行インジケータ

改行された行を識別しやすくするために、改行インジケータを表示します。エディタの右側にある改行位置の列に矢印が表示されると、その行が改行されていることを示します。

![エディタ内の改行インジケーターを示すスクリーンショット。](/assets/updates/1_139/word_wrap_indicators.webp)

### 括弧の自動閉じ処理の改良

VS Code では、開き括弧を入力した際に、重複する閉じ括弧が挿入されないようになっています。対応する閉じ括弧が存在する場合、VS Code はその括弧を使用します。そうでない場合、VS Code は閉じ括弧を挿入します。

* * *

## 提案中の API

### 認証セッションにおけるアクセストークンの有効期間

`AuthenticationSession` はアクセストークンを公開しますが、そのトークンが有効である期間に関する情報は提供しません。独自の更新コールバックを持つ SDK に資格情報を渡す拡張機能では、有効期限が切れないトークンと、まもなく有効期限が切れるトークンを区別することができません。 その結果、拡張機能は不必要に認証情報を更新するか、トークンの有効期限が切れた際に長時間実行中の操作が失敗してしまうことになります。

`authSessionExpiration` 提案では、`AuthenticationSession` にオプションの `expiresAfter` プロパティを追加します：

```
export interface AuthenticationSession {
  /**
   * 認証プロバイダーがセッションを返した時点での、アクセストークンの
   * 残存有効期間（ミリ秒単位）。
   */
  readonly expiresAfter?: number;
}
```

この値は、絶対的な有効期限のタイムスタンプではなく、セッションが返された時点での残存有効期間を表します。拡張機能ホストはクライアントとは異なるマシン上で実行される可能性があり、両者の時計の時間がずれることがあります。キャッシュされたセッションを返す認証プロバイダーは、この値を毎回再計算し、トークンの有効期限が不明な場合は `undefined` にします。 組み込みの Microsoft アカウントプロバイダーはこの値を提供します。

ぜひ試してみて、[API 提案のイシュー](https://github.com/microsoft/vscode/issues/335184) でご意見をお聞かせください。 提案に基づいて開発する方法については、[提案中の API の使用方法](https://code.visualstudio.com/api/advanced-topics/using-proposed-api) を参照してください。

* * *

## 非推奨の機能と設定

なし

* * *

## 主な修正点

-   アカウントポリシーにより組織がエージェントモードを無効にしているユーザーの場合、ウェルカム招待の表示を非表示にし、無効化された「エージェント」ウィンドウを起動する代替手段（例：`code --agents`）による制御の回避を許可しないようにしました。 _[#336968: エージェント ウィンドウにおけるアカウント ポリシーの適用を修正](https://github.com/microsoft/vscode/pull/336968)_
    
-   エンタープライズ管理下の [OpenTelemetry (OTel) 設定](https://code.visualstudio.com/docs/enterprise/ai-settings#configure-telemetry-export-with-opentelemetry) を使用しているユーザーに対し、ローカル（つまり、エージェント以外のホストハーネス）における OTel の設定時の競合状態を修正し、OTel が削除されないようにしました。 _[#336701: Copilot 拡張機能におけるエンタープライズ管理型 OTel の競合状態を修正](https://github.com/microsoft/vscode/pull/336701)_
 

* * *

## 謝辞

`vscode` への貢献:

-   [@AnupamKumar-1 (Anupam Kumar)](https://github.com/AnupamKumar-1): fix(chat): テキストの前の部分を編集する際、#file 参照を保持するように [PR #333965](https://github.com/microsoft/vscode/pull/333965)
-   [@baywet (Vincent Biret)](https://github.com/baywet): 新機能: JSON 拡張子に対する OpenAPI ファイルの一致ルールをデフォルトで追加 [PR #336273](https://github.com/microsoft/vscode/pull/336273)
-   [@brandonh-msft (Brandon H)](https://github.com/brandonh-msft): リモートチャットプラグインのパスを修正 [PR #326916](https://github.com/microsoft/vscode/pull/326916)
-   [@brignano (anthony)](https://github.com/brignano): github-authentication: EMUアカウントに対してeducation.github.comのチェックをスキップ [PR #336608](https://github.com/microsoft/vscode/pull/336608)
-   [@Chirag-Bhardwaj (Chirag Bhardwaj)](https://github.com/Chirag-Bhardwaj): カスタムターミナルタイトルのクリアに関する不具合を修正[PR #336599](https://github.com/microsoft/vscode/pull/336599)
-   [@dobbydobap (varshitha)](https://github.com/dobbydobap): 「スニペットの設定」でアクティブなエディタの言語を最優先で表示 [PR #324369](https://github.com/microsoft/vscode/pull/324369)
-   [@emxs1 (Emma)](https://github.com/emxs1): 作業中のメッセージをもっと楽しくする [PR #335600](https://github.com/microsoft/vscode/pull/335600)
-   [@jlelong (Jerome Lelong)](https://github.com/jlelong): LaTeX：言語設定の更新 [PR #332303](https://github.com/microsoft/vscode/pull/332303)
-   [@joltcoke (Florian Schirmer)](https://github.com/joltcoke): WebKit クリップボードの回避策における navigator.clipboard の保護 [PR #334878](https://github.com/microsoft/vscode/pull/334878)
-   [@joshspicer](https://github.com/joshspicer): mock-policy-server のファイルコマンドにおけるパーミッションビットを修正 [PR #334382](https://github.com/microsoft/vscode/pull/334382)
-   [@Muszic (Sangeet)](https://github.com/Muszic): ターミナルでの候補表示向けに、アップストリームの Cargo 補完仕様を追加 [PR #305309](https://github.com/microsoft/vscode/pull/305309)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   修正：ドキュメントのドラッグ＆ドロップ編集時のメモリリーク [PR #336025](https://github.com/microsoft/vscode/pull/336025)
    -   修正：ダイアログのメインサービスにおけるメモリリーク [PR #336019](https://github.com/microsoft/vscode/pull/336019)
    -   修正：ノートブックの添付ファイル診断におけるメモリリーク [PR #333383](https://github.com/microsoft/vscode/pull/333383)
    -   修正：署名ヘルプにおけるメモリリーク [PR #336020](https://github.com/microsoft/vscode/pull/336020)
    -   修正：拡張機能ホスト階層におけるメモリリーク [PR #336023](https://github.com/microsoft/vscode/pull/336023)
    -   修正: issueReporterOverlay におけるメモリリーク [PR #335102](https://github.com/microsoft/vscode/pull/335102)
    -   修正: ワークスペースのシンボルにおけるメモリリーク [PR #336029](https://github.com/microsoft/vscode/pull/336029)
    -   修正: 拡張機能ホストの音声処理におけるメモリリーク [PR #336021](https://github.com/microsoft/vscode/pull/336021)
    -   修正：通知アクションビューの項目におけるメモリリーク [PR #333340](https://github.com/microsoft/vscode/pull/333340)
-   [@yoavbls (Yoav Balasiano)](https://github.com/yoavbls): span 要素のスタイルで display:inline-block を許可 [PR #180498](https://github.com/microsoft/vscode/pull/180498)

### 課題追跡

課題追跡への貢献：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

* * *

新機能がリリースされ次第、すぐに試してくださる皆様に心より感謝いたします。ぜひ定期的にこのページをチェックして、新機能についてご確認ください。

> 過去の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [アップデート](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
