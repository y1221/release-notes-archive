---
product: VSCode
version: 1.132.0
release_title: Visual Studio Code 1.132
release_date: 2026-08-05
source_url: "https://code.visualstudio.com/updates/v1_132"
archived_at: 2026-08-06
---

# Visual Studio Code 1.132

# Visual Studio Code 1.132

[LinkedIn](https://www.linkedin.com/showcase/vs-code)、[X](https://go.microsoft.com/fwlink/?LinkID=533687)、 [Bluesky](https://bsky.app/profile/vscode.dev)

* * *

_リリース日: 2026年8月5日_

ダウンロード：Windows：[x64](https://update.code.visualstudio.com/1.132.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.132.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.132.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.132.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.132.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.132.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.132.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.132.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.132.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.132 のリリースへようこそ。このリリースでは、統合ブラウザでの要素単位のフィードバック、多言語音声入力、サイドチャット、 ハイブリッド Markdown エディターでの Markdown 差分表示といった新機能が追加されました。

-   [統合ブラウザでのコメント機能](#_commenting-in-the-integrated-browser): 特定の Web ページ要素にコメントを付けることで、エージェントに的確なフィードバックを提供できます。
    
-   [多言語音声入力](#_dictation-onboarding-and-customization): 言語設定に従う、または言語を自動的に検出するデバイス内モデルを使用して、複数の言語で音声入力を行えます。
    
-   [`/btw` を使ったサイドチャット](#_side-chats-with-btw): 現在のエージェントのターンを中断することなく、文脈に応じた質問を行うことができます。
    
-   [ハイブリッド Markdown エディタでの Markdown 差分表示（実験的機能）](#_markdown-diffs-in-the-hybrid-markdown-editor-experimental): 変更したドキュメントの編集を続けながら、レンダリングされた Markdown の変更点を確認できます。
 

プログラミングを楽しんでください！

* * *

VS Code は全ユーザーに向けて段階的に展開されています。VS Code の **更新の確認** 機能を使用すると、すぐに最新バージョンを入手できます。

新機能をいち早く試したい場合は、[**ナイトリー版 Insiders ビルドをダウンロード**](https://code.visualstudio.com/insiders)してください。このビルドには、最新アップデートが利用可能になり次第、すぐに反映されます。

* * *

## エージェント

### エージェントホスト

エージェントホストを使用すると、複数の VS Code ウィンドウから同じエージェントセッションに接続できます。これは、[エージェントホストプロトコル](https://microsoft.github.io/agent-host-protocol/) (AHP) に基づいて、Copilot、Claude、Codex などのエージェントハーネスを専用のプロセスで実行します。 エージェントホストの Copilot エージェントは、[Copilot SDK](https://www.npmjs.com/package/@github/copilot-sdk) によって動作しており、その動作や機能は Copilot CLI、スタンドアロンの GitHub Copilot アプリ、およびその他の Copilot 製品と整合しています。

現在、エージェントホストの開発を積極的に進めており、順次ユーザーへの提供を開始しています。 以下のスクリーンショットは、エディタウィンドウでエージェントホスト上の `Copilot` ハーネスを選択する方法を示しています：

![エディタウィンドウのハーネスドロップダウンを示すスクリーンショット。](/assets/updates/1_132/agent-host-harness-dropdown-editor.webp)

詳細については、[VS Code エージェントホストのドキュメント](https://code.visualstudio.com/docs/agents/concepts/agent-host)をご覧ください。フィードバックやご要望がございましたら、[イシューを登録](https://github.com/microsoft/vscode/issues)してご一報ください。

### 「エージェント」ウィンドウ

[「エージェント」ウィンドウ](https://code.visualstudio.com/docs/agents/agents-window) は、複数のエージェント セッションを開始および監視するための専用スペースです。

#### チャット入力欄からセッションのアクティビティを追跡

エージェントがファイル、サブエージェント、プレビュー、ブラウザをまたいで作業している場合、チャット入力欄の上にあるライブステータスピルを使用して、その進捗状況を追跡し、関連する作業にすばやく戻ることができます。ピルは、表示中のセッションのアクティビティに合わせて更新されます:

-   **変更**：変更の数を要約表示します。これを選択すると、現在のターンにおける変更内容が、リアルタイムで更新されるマルチファイル差分表示で確認できます。
-   **プレビュー**：エージェントが作成または編集したファイルの Markdown プレビューにアクセスできます。
-   **サブエージェント**：サブエージェントでのエージェントの作業内容を、別のチャットで開いて追跡できます。
-   **ブラウザ**：エージェントが統合ブラウザを操作している様子を追跡できます。

#### エディタの種類の切り替え

**設定**：breadcrumbs.showEditorType VS Codeで開く VS Code Insidersで開く

複数のエディタタイプが利用可能な場合、「エージェント」ウィンドウのエディタタイプドロップダウンには現在のエディタが表示され、**「エディタを再表示」**コマンドを使用せずに、利用可能な通常エディタと差分エディタを切り替えることができます。また、このドロップダウンからデフォルトのエディタを変更することもできます。 このドロップダウンは、エージェントウィンドウ内のファイルナビゲーション機能も提供するブレッドクラムバーの右側を使用します。

エディタウィンドウにエディタタイプのドロップダウンを表示するには、breadcrumbs.showEditorType を有効にしてください。VS Code で開く VS Code で開く Insiders 。

### /btw を使ったサイドチャット

現在のターンの中断をせずに質問をしたい場合は、チャット入力欄に `/btw` と入力してサイドチャットを開くことができます。サイドチャットはメインのチャットと同じコンテキストとプロンプトキャッシュを共有するため、現在のターンに関する質問をすることができます。同様に、チャットの応答からテキストを選択して、その応答に関する文脈に沿った質問をすることも可能です。

また、他のチャットを参照してコンテキストを共有することもできます。チャットタブを入力ボックスにドラッグするか、`#chat:` と入力して、含めたいチャットのタイトルを選択します。

## チャット

### ターミナル出力のリフロー

チャット内で展開されたターミナル出力は、ビューのサイズ変更に合わせて利用可能な幅に合わせてリフローされます。以前は出力が固定幅だったため、行が早すぎる段階で折り返され、幅の広いビューでは未使用のスペースが残っていました。

この改善は、[エージェントホスト](#_agent-host)上で実行されている「ローカルエージェントハーネス」および「Copilotハーネス」の両方からのターミナル出力に適用されます。

## エディターの操作性

### 音声入力（ディクテーション）のオンボーディングとカスタマイズ

**設定**: agents.voice.language VS Codeで開く VS Code Insidersで開く

組み込みのディクテーション機能は、チャット入力、エディター、およびターミナルでの音声をテキストに変換します。ディクテーションを初めて使用する際、オンボーディング画面が表示され、開始前に選択したマイクを確認できるようになります。この画面では、マイクの波形がリアルタイムで表示され、複数のマイクが利用可能な場合はデバイスピッカーが表示され、ディクテーションの設定やカスタマイズへのリンクも提供されます。 コマンドパレットの **Voice Mode: Show Introduction** を選択すると、このガイドを再度表示できます。

![マイク選択とリアルタイムの音声波形が表示されたディクテーションのガイド画面のスクリーンショット。](/assets/updates/1_132/dictation-onboarding.webp)

ディクテーションでは、デフォルトのデバイス内モデルとして多言語対応の Nemotron 3.5 が使用されるようになりました。このモデルはオーディオデータをデバイス内に保持し、agents.voice.language に従います。VS Code で開く VS Code で開く Insiders 。 自動言語選択機能により、ディクテーションはサポートされている場合はシステムまたはブラウザのロケールを使用し、サポートされていない場合はモデルが言語を検出します。

最終的な文字起こしをプロジェクトの用語や書式設定の好みに合わせるには、**Voice: Configure Dictation Instructions** を実行してください。 VS Code は、信頼済みワークスペースにおいて `~/.copilot/dictation.md` および `.github/dictation.md` の指示を統合します。これらの指示は、音声の意味を保持し、適切な場所では数字の使用を優先する組み込みのクリーンアップルールを補完するものです。

ネットワークの制限によりデバイス上のモデルのダウンロードができない場合、エラー通知に、ディスクから公式の Foundry Local モデルパッケージをインポートするための操作が表示されます。通常の初回使用時のダウンロード中は、マイクボタンに進行状況が表示され、入力欄にダウンロードテキストは表示されません。

### ハイブリッド Markdown エディタでの Markdown の差分表示 (実験的機能)

前回のリリースでは、レンダリングされた Markdown とインプレース編集、およびエージェントが処理可能なコメントを組み合わせた [ハイブリッド Markdown エディタ](https://code.visualstudio.com/updates/v1_131#_hybrid-markdown-editor-experimental) を導入しました。 今回のリリースでは、ハイブリッド Markdown エディタで Markdown の差分表示が可能になりました。変更されたドキュメントは引き続き編集可能な状態を維持しつつ、ガターインジケーターによって追加、変更、削除されたコンテンツがハイライト表示されます。エディタタイプのドロップダウンメニューを使用することで、テキスト差分表示と、差分注釈付きの Markdown エディタを切り替えることができます。

### 統合ブラウザでのコメント機能

Web ページに関するフィードバックを提供する際、特定の要素にコメントを付けることが役立つ場合がよくあります。今回のリリースでは、統合ブラウザに Web ページの要素を選択し、エージェントのフィードバックとして注釈を付ける機能が追加されました。このモードは、キーボードショートカットを使用して起動できます。

このモードでは、複数の要素を選択し、それぞれにコメントを追加してからチャットに送信することができます。

## ターミナル

### ターミナルコマンドの音声入力機能の向上

ターミナルの音声入力では、シェルを意識したクリーンアップが適用されるため、音声で入力したコマンドはシェルの構文を保持します。たとえば、「git commit dash m hello world」と発話すると、単語を文字通り挿入するのではなく、`git commit -m "Hello World"` として出力されます。

録音停止するには、アクティブなマイクボタンを選択してください。

## 提案中の API

### エディタモードごとにカスタムエディタの優先順位を設定

提案中の `customEditors.priority` 機能により、拡張機能はテキストエディタと差分エディタで異なる優先順位を設定できるようになります。 たとえば、拡張機能では、通常のファイルに対してはデフォルトで独自のエディターを使用し、差分表示に対しては組み込みのエディターをデフォルトのままにしたり、その逆の設定を行ったりすることができます。

既存の単一の優先度値は引き続き機能し、差分エディターはデフォルトで `explicit` を使用します。拡張機能の開発者は、[カスタムエディターの優先度設定](https://github.com/microsoft/vscode/issues/292379) で詳細を確認できます。この機能は、次回のリリースで安定版に昇格する予定です。

## 非推奨の機能と設定

### 今回のリリースで新たに非推奨となった項目

-   エージェントホストポリシー
 
 `ChatAgentHostEnabled` ポリシーが削除されたため、管理者はポリシーを通じてエージェントホストを一元的に無効化できなくなりました。開発者は引き続き `chat.agentHost.enabled` を使用し、エージェントを別個のエージェントホストプロセスで実行するかどうかを選択できます。
    

### 今後非推奨となる機能

今後非推奨となる機能はありません。

## 謝辞

`vscode` への貢献者：

-   [@accnops (Arthur Cnops)](https://github.com/accnops)
    -   音声: 音声で質問カルーセルに回答 [PR #327899](https://github.com/microsoft/vscode/pull/327899)
    -   音声機能：質問フォームを切り替えるのではなく、並行してキューに追加する [PR #328205](https://github.com/microsoft/vscode/pull/328205)
-   [@alexander-zw (Alexander Wu)](https://github.com/alexander-zw): \[trivial\] cursorEvents.ts のドキュメント文字列にサンプルソースを追加 [PR #241250](https://github.com/microsoft/vscode/pull/241250)
-   [@AndyBodnar (Andy )](https://github.com/AndyBodnar): customEditor: ファイル削除後のキャッシュの古さを修正 [PR #287966](https://github.com/microsoft/vscode/pull/287966)
-   [@AntonioLujanoLuna (Antonio Lujano Luna)](https://github.com/AntonioLujanoLuna): AnthropicからのPDFドキュメントの保持 [PR #325833](https://github.com/microsoft/vscode/pull/325833)
-   [@Bestra (Chris Westra)](https://github.com/Bestra): リソースキャッシュの作成失敗をログに記録する [PR #326958](https://github.com/microsoft/vscode/pull/326958)
-   [@bstee615 (Benjamin Steenhoek)](https://github.com/bstee615): NESのデフォルトの攻撃性を「中」に設定 [PR #327049](https://github.com/microsoft/vscode/pull/327049)
-   [@denizguney (Deniz Güney Yıldırım)](https://github.com/denizguney): 新機能: getAccessibilityStatus の追加 [PR #328018](https://github.com/microsoft/vscode/pull/328018)
-   [@dsavy4 (Dmitry Savy)](https://github.com/dsavy4)
    -   stableStringify が共有参照を循環参照として扱う問題を修正 [PR #327398](https://github.com/microsoft/vscode/pull/327398)
    -   キーの更新時に BidirectionalMap が古い逆方向のエントリを残してしまう問題を修正 [PR #327403](https://github.com/microsoft/vscode/pull/327403)
-   [@EmrecanKaracayir (Emrecan Karaçayır)](https://github.com/EmrecanKaracayir): ターミナルのシンボル候補アイコンの CSS マッピングが欠落していた問題を修正 [PR #293158](https://github.com/microsoft/vscode/pull/293158)
-   [@jdanbrown (Dan Brown)](https://github.com/jdanbrown): ターミナルタブのタイトル：「$HOME」の代わりに「~」を表示 [PR #275378](https://github.com/microsoft/vscode/pull/275378)
-   [@KevinWang-wpq](https://github.com/KevinWang-wpq): 復号化に失敗した古いシークレットを削除 [PR #324014](https://github.com/microsoft/vscode/pull/324014)
-   [@mirimadahmed (Mir)](https://github.com/mirimadahmed)
    -   音声：ハンズフリー再生前のウォームキャプチャ [PR #328225](https://github.com/microsoft/vscode/pull/328225)
    -   音声体験の向上のため、コーディングエージェントに音声認識機能を追加 [PR #328217](https://github.com/microsoft/vscode/pull/328217)
-   [@Moli13337 (Moli)](https://github.com/Moli13337): ドキュメント: CONTRIBUTING.md ファイル内の誤ったディレクトリパスを修正 [PR #325810](https://github.com/microsoft/vscode/pull/325810)
-   [@Mr-Nilarnab (MR NILARNAB GITHUB)](https://github.com/Mr-Nilarnab): ドキュメント: README内の軽微な誤字・文法ミスを修正 [PR #325006](https://github.com/microsoft/vscode/pull/325006)
-   [@Muszic (Sangeet)](https://github.com/Muszic): 修正：takeWhile および takeFromEndWhile における ArrayQueue の境界を修正 [PR #301119](https://github.com/microsoft/vscode/pull/301119)
-   [@ohah (ohah)](https://github.com/ohah): 修正: 「file-found」バッジの縦方向の配置 [PR #273098](https://github.com/microsoft/vscode/pull/273098)
-   [@peterdanwan (Peter Wan)](https://github.com/peterdanwan): 修正: シグネチャヘルプのアクティブなオーバーロードが更新されない問題 [PR #320980](https://github.com/microsoft/vscode/pull/320980)
-   [@praneethhere (Praneeth Kodumagulla)](https://github.com/praneethhere): Copilot CLIの状態に対してCOPILOT\_HOMEをサポート [PR #314917](https://github.com/microsoft/vscode/pull/314917)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD): 修正：Restrict continue コメントのバグ [PR #322668](https://github.com/microsoft/vscode/pull/322668)
-   [@rushil-b-patel (Rushil Patel (rusp))](https://github.com/rushil-b-patel): 新機能: Markdownプレビューのコードブロックに「コピー」ボタンを追加 [PR #323609](https://github.com/microsoft/vscode/pull/323609)
-   [@samir-nimbly](https://github.com/samir-nimbly): GitHub からサインアウトした際にチャットの画像添付が黙って削除されてしまう問題を修正 [PR #323856](https://github.com/microsoft/vscode/pull/323856)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   修正：titleBarPart におけるメモリリーク [PR #327552](https://github.com/microsoft/vscode/pull/327552)
    -   修正: ノートブックビューモデルにおけるメモリリーク [PR #328208](https://github.com/microsoft/vscode/pull/328208)
    -   修正: decorationAddon.\_decorations におけるメモリリーク [PR #326933](https://github.com/microsoft/vscode/pull/326933)
    -   修正: chatServiceImpl におけるメモリリーク [PR #327128](https://github.com/microsoft/vscode/pull/327128)
    -   修正: settings-tree におけるメモリリーク [PR #327909](https://github.com/microsoft/vscode/pull/327909)
    -   修正: historyService におけるメモリリーク [PR #327518](https://github.com/microsoft/vscode/pull/327518)
-   [@sricursion (Sriraj)](https://github.com/sricursion): カスタマイズインデックス内の動的値にエスケープ処理を追加 [PR #327475](https://github.com/microsoft/vscode/pull/327475)
-   [@thernstig (Tobias Hernstig)](https://github.com/thernstig): 転送ポートのステータスバー項目を修正し、ポートビューの表示/非表示を切り替えられるようにした [PR #320090](https://github.com/microsoft/vscode/pull/320090)
-   [@Vector341](https://github.com/Vector341): \[html\] JavaScript ブロックコメントの検証エラーを修正（#171153 対応） [PR #240932](https://github.com/microsoft/vscode/pull/240932)
-   [@yogeshwaran-c (Yogeshwaran C)](https://github.com/yogeshwaran-c)
    -   修正(javascript): JSDocの継続パターンをTypeScriptの言語設定と同期 [PR #308433](https://github.com/microsoft/vscode/pull/308433)
    -   \[json\] 言語設定に #region 折りたたみマーカーを追加 [PR #318515](https://github.com/microsoft/vscode/pull/318515)
    -   npmの補完およびホバー機能向けに、package.jsonカタログのサポートを追加 [PR #307989](https://github.com/microsoft/vscode/pull/307989)
    -   「検索詳細の切り替え」のツールチップにキーバインドを表示 [PR #311859](https://github.com/microsoft/vscode/pull/311859)
    -   修正（サーバー）：serve-web で --enable-proposed-api を反映 [PR #310207](https://github.com/microsoft/vscode/pull/310207)
    -   修正：選択範囲が空の場合、手動で設定されたすべての折りたたみ範囲を削除 [PR #304793](https://github.com/microsoft/vscode/pull/304793)
    -   修正：ターミナルの終了コード処理において、中断されたコマンドを検出するようにした [PR #307256](https://github.com/microsoft/vscode/pull/307256)
    -   修正: 誤った再宣言エラーを防ぐため、モジュールスクリプトの内容をブロックスコープで囲むようにした [PR #308027](https://github.com/microsoft/vscode/pull/308027)
-   [@zmr-233](https://github.com/zmr-233): ワークベンチ全体でのスタイル無効化を引き起こす :has() セレクタの使用を回避 [PR #327052](https://github.com/microsoft/vscode/pull/327052)

### 課題追跡

イシュー追跡への貢献：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@MominRaza (Momin Ahmad)](https://github.com/MominRaza)
-   [@palinkasnorbert (Norbert Palinkas)](https://github.com/palinkasnorbert)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@ganlvtech (Ganlv)](https://github.com/ganlvtech)

* * *

新機能が公開され次第、すぐに試してくださる皆様に心より感謝いたします。ぜひ定期的にこのページをチェックして、新機能についてご確認ください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [アップデート](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
