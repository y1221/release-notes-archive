---
product: VSCode
version: 1.124.0
release_title: Visual Studio Code 1.124
release_date: 2026-06-10
source_url: "https://code.visualstudio.com/updates/v1_124"
archived_at: 2026-06-11
---

# Visual Studio Code 1.124

# Visual Studio Code 1.124

[LinkedIn](https://www.linkedin.com/showcase/vs-code)や[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)

* * *

_リリース日: 2026年6月10日_

ダウンロード: Windows: [x64](https://update.code.visualstudio.com/1.124.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.124.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.124.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.124.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.124.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.124.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.124.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.124.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.124.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.124 のリリースへようこそ。このリリースでは、エージェントセッション間の作業が高速化され、エージェントがタスクを完了するための自律性が向上しました。

-   [オートパイロット](#_autopilot-is-enabled-by-default): デフォルトで有効になっているオートパイロットは、タスクが本当に完了したかどうかを判断する精度が向上しました。
    
-   [バックグラウンドセッション](#_background-send-for-new-sessions): バックグラウンドでリクエストを素早く送信し、次のセッションの作成を継続できます。
 
-   [セッションの移動](#_navigate-between-sessions): キーボード操作でエージェントセッションの検索、移動、順次移動が可能です。
    
-   [ブラウザ履歴](#_history): 統合ブラウザで以前に開いたページを再表示したり、検索したりできます。
 

プログラミングを楽しんでください！

* * *

## エージェントウィンドウ (プレビュー)

[エージェントウィンドウ](https://aka.ms/VSCode/Agents/docs) は、プロジェクトやマシンをまたいでエージェントセッションを探索、反復、確認するために最適化された専用のコンパニオンウィンドウです。今回のリリースでは、セッション間の移動を高速化し、再読み込み後もコンテキストを維持することに重点を置いています。

### 新規セッションのバックグラウンド送信

以前は、新しいセッションを開始すると、次のセッションを作成できるようになるまで読み込みを待つ必要がありました。現在は、代わりにバックグラウンドでリクエストを送信できるようになりました。新しいセッションビューで Alt+Enter を押すか（または Alt キーを押したまま **送信** を選択する）、リクエストを送信できます。

ビューは即座にリセットされますが、選択されたモデルやコンテキストなどの状態は保持され、クエリテキストのみがクリアされるため、リクエストを次々とキューに追加し続けることができます。開始された各セッションは、コミットされるとセッションリストに表示されます。

Enterキーでプロンプトを送信すると、従来通り新しいセッションに移動します。

### セッション間の移動

多数のエージェントセッションをまたいで作業する場合、それらを素早く見つけ、切り替えることができることは重要です。今回のリリースでは、検索可能なピッカーから、前後の移動、位置による直接ジャンプまで、キーボード操作でセッション間を移動するためのいくつかの方法が追加されました。

-   **セッションピッカー**: Ctrl+R（macOSでは Cmd+R）を押すと、**最近開いたセッション**と**その他のセッション**の2つのグループに分類されたセッション一覧を表示するクイックピッカーが開き、アクティブなセッションが事前に選択されます。 セッションのタイトルとフォルダーの両方を検索し、以下の操作を行えます：
 
 -   Enterキーを押すと、選択したセッションが開きます。
    -   Cmd/Ctrl+Enterキーを押すと、横に並べて開きます。
    -   右矢印キーを押すと、ピッカーを開いたままバックグラウンドで開きます。
    
    ![セッションが「最近開いたセッション」と「その他のセッション」に分類されたセッションピッカーのクイックピック画面のスクリーンショット。](/assets/updates/1_124/agents-recent-sessions.webp)
    
-   **前後のセッションへ移動**：Ctrl+Tab キーを押すと直近のセッション順に前のセッションへ、Ctrl+Shift+Tab キーを押すと次のセッションへ移動します。
 
-   **前のセッションと次のセッション**： **前のセッションへ**および**次のセッションへ**コマンドは、グループ化、フィルタリング、折りたたまれたセクションを考慮しつつ、表示順に従って表示されているセッションリストを順に移動し、リストの端で停止します。Alt+上矢印 / Alt+下矢印（またはCtrl+PageUp / Ctrl+PageDown； macOSではCmd+Alt+Left / Cmd+Alt+Right）を使用します。
 
-   **位置によるセッションのフォーカス**:Ctrl+1 から Ctrl+9（macOSではCmd+1 から Cmd+9）を押すと、グリッド内の左から右へ順に、N番目の表示中のセッションにフォーカスが移動します。
    

### リロード時のセッション復元

「エージェント」ウィンドウをリロードまたは再表示しても、レイアウトが失われることはなくなりました。以前に表示されていたセッションとその状態が自動的に復元されるため、中断した場所から再開できます。これには以下が含まれます：

-   表示中のセッショングリッド：開いていたセッション、左から右への順序、アクティブなセッション、および固定またはピン留めされたセッション。
-   セッションごとのレイアウト：補助バーの表示状態、アクティブなビューコンテナ、各セッションで開かれているエディタなど。
-   セッションリストの状態：各セッションの固定状態や既読状態など。

### すべてのセッションを閉じる

エディタの**すべて閉じる...**コマンドと同様に、新しい**すべてのセッションを閉じる**コマンドを使用することで、すべてのセッションを一度に閉じることができるようになりました。 これは、多数のセッションが開いており、各セッションを個別に閉じる必要なく、新しいセッションに素早く切り替えたい場合に特に便利です。

セッションにフォーカスが当たっている状態でキーボードショートカット Ctrl+K Ctrl+W (macOS では Cmd+K Cmd+W) を使用するか、コマンドパレットからこのコマンドを実行してください。

### 「変更」ビューでの単一ファイルの差分表示（プレビュー）

**設定**: sessions.changes.openSingleFileDiff VS Codeで開く VS Code Insidersで開く

デフォルトでは、**変更**ビューでファイルを選択すると、複数ファイルの差分エディタが開きます。そのファイルの変更内容のみを表示するには、Alt キーを押しながらファイルを選択する必要がありました（**変更を開く**）。

**Changes** ビューでファイルを選択した際に、常にフォーカスされている単一ファイルの差分エディタを開くには、sessions.changes.openSingleFileDiff を有効にしてください（VS Code で開く / VS Code Insiders）。これにより、マルチファイル差分内の他のファイルに気を取られることなく、一度に 1 つの変更点に集中できます。 この設定を有効にすると、冗長なインラインアクションである**変更を開く**は非表示になります。

### サイドバーの山形アイコンでエディタを拡張

「エージェント」ウィンドウ内でファイルを開くと、エディターのタイトルバーのタブの右側に、山形アイコンのトグルが表示されます。これを選択すると、セカンダリサイドバー（補助バー）が折りたたまれてエディターが広くなり、もう一度選択するとサイドバーが元に戻ります。山形アイコンの方向は、現在のサイドバーの表示状態を示しています。

## オートパイロット (プレビュー)

オートパイロットは、チャット [権限レベル](https://code.visualstudio.com/docs/agents/approvals#_permission-levels) の 1 つであり、エージェントが各アクションごとにユーザーの明示的な承認を必要とせずに、主体的に行動し、自律的に対応できるようにするものです。

### オートパイロットはデフォルトで有効になっています

**設定**: chat.permissions.default VS Codeで開く VS Codeで開く Insiders , chat.tools.global.autoApprove VS Codeで開く VS Codeで開く Insiders この設定は組織レベルで管理されます。変更するには管理者にお問い合わせください。ORG

Autopilotは現在、VS Codeでデフォルトで有効になっています。組織は引き続き、chat.tools.global.autoApprove（VS Codeで開く、VS Code Insiders）設定を通じて、Autopilotの表示と使用を制御できます。この設定は組織レベルで管理されます。変更するには、管理者にお問い合わせください。ORG

新しいチャットに対するデフォルトの権限レベルは、chat.permissions.default（VS Codeで開く、Insiders）で設定できます。現在の権限レベルは、チャット入力ボックスでいつでも変更できます。

### 高度なオートパイロット

**設定**: chat.autopilot.advanced.enabled VS Codeで開く VS Codeで開く Insiders

エージェントがタスクを本当に完了したかどうかを判断するのは困難です。終了が早すぎると作業が不完全になり、ループが長すぎると時間とトークンを浪費してしまいます。高度なオートパイロットは、オートパイロット（プレビュー）がいつ反復を続け、いつ終了するかを決定する方法を変更するため、手動でループを監視することなく、より完全な結果を得ることができます。

固定されたルールに依存する代わりに、小さなユーティリティモデルがチャットのトランスクリプトを読み取り、タスクが完了したかどうかを判断します。Autopilotが目指す目標はチャット上部のツールチップに表示されるため、常に何を目指しているのかを確認できます。処理の範囲を限定するため、Autopilotは最大3回ループした後、停止します。

これを試すには、chat.autopilot.advanced.enabled を `true` に設定してください。

## エディターの操作性

### 簡易ファイルダイアログからフォルダーを開く際にフォルダーを作成

簡易ファイルダイアログ ( files.simpleDialog.enable VS Code で開く VS Code Insiders で開く ) からフォルダを開く際、作成したいフォルダ名を入力して Enter キーを押すか、**OK** を選択することで、ダイアログから直接新しいフォルダを作成できるようになりました。

### 統合ブラウザ

#### 履歴

**設定**: workbench.browser.maxHistoryEntries Open in VS Code Open in VS Code Insiders

統合ブラウザでは、アクセスしたページの履歴が保存されるようになりました。履歴項目は URL バーに入力した際に候補として表示され、ブラウザタブ内で ⌘H (Windows、Linux では Ctrl+H) を使用して管理できます。 保存する履歴項目の最大数は、workbench.browser.maxHistoryEntries を通じて調整できます。VS Code で開く VS Code Insiders で開く。

![統合ブラウザのURLバーのスクリーンショット。「Wiki」と入力すると、履歴からいくつかのWikipediaページが表示されています。](/assets/updates/1_124/browser-history.webp)

#### ツールバーのカスタマイズ機能の改善

以前は、**「チャットに要素を追加」**と**「開発者ツールの表示/非表示」**のみが、ブラウザツールバーの右側に常時表示されるアクションとして設定可能でした。

現在では、オーバーフローメニュー内に表示されるすべてのアクションも、URL 入力欄の右側にあるツールバー領域を右クリックすることで、常に表示されるように設定できます：

![コンテキストメニューから表示するメニュー項目を切り替えられる様子を示すスクリーンショット。](/assets/updates/1_124/browser-toolbar.webp)

#### エージェントによるテキスト入力の高速化

以前は、テキストを入力して Enter キーを押すには、2 回に分けてツール呼び出しを行う必要がありました。現在では、`typeInPage` ツールが `submit` パラメータをサポートしており、エージェントは 1 回のツール呼び出しでテキストを入力して Enter キーを押すことができます。

これにより、一般的なテキスト入力シナリオにおけるラウンドトリップが削減されます。

![エージェントがページにテキストを入力してEnterキーを押したツール呼び出しを示すスクリーンショット。](/assets/updates/1_124/browser-type-tool.webp)

## エンタープライズ

### エンタープライズ管理の Copilot プラグインポリシー（実験的機能）

VS Code は、[Copilot CLI のエンタープライズプラグイン標準](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-plugin-standards)で既に使用されている構成ファイルからポリシーを読み込むようになりました。これにより、単一のポリシー定義が両方のクライアントに適用されます。将来的には、VS CodeとCLIは、この共有ソースからのポリシー管理においてさらに連携を深めていく予定です。

エンタープライズ管理者は、各開発者にローカルでの設定を依頼する代わりに、開発者が利用できるチャットプラグインやプラグインマーケットプレイスを一元的に制御できるようになりました。

バージョン 1.123 で導入された、ポリシーに基づく 3 つの新しい設定は、Copilot エンタープライズ設定ファイルまたは既存の MDM ソリューションを通じて構成できます:

-   chat.plugins.enabledPlugins VS Codeで開く VS Code Insidersで開く この設定は組織レベルで管理されます。変更するには管理者に連絡してください。ORG: 組織が明示的に有効または無効にするプラグインIDの許可リスト。
-   chat.plugins.extraMarketplaces VS Codeで開く VS Codeで開く Insiders：組織が利用可能にしたい追加のプラグインマーケットプレイス。
-   chat.plugins.strictMarketplaces VS Codeで開く VS Codeで開く Insiders この設定は組織レベルで管理されます。変更するには管理者にお問い合わせください。ORG: 有効にすると、ポリシーで指定されたマーケットプレイスのみが信頼されます。

ポリシーによってブロックされたプラグインは表示されますが、無効化された状態になります。ポリシーによって管理されているマーケットプレイスは、マーケットプレイスピッカー内でその旨がタグ付けされます。

## 非推奨の機能と設定

なし

## 謝辞

課題追跡への貢献:

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

`vscode`への貢献:

-   [@1Burhanuddin (Burhanuddin Mundrawala)](https://github.com/1Burhanuddin): 修正: parcelWatcher.ts のコメント内の「typo occured」を「occurred」に修正 [PR #319721](https://github.com/microsoft/vscode/pull/319721)
-   [@ajasad25 (Asad Meeran)](https://github.com/ajasad25): 課題報告機能の「GitHubでプレビュー」が、新規課題フォームではなくリポジトリのルートを開く問題を修正 [PR #319577](https://github.com/microsoft/vscode/pull/319577)
-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
    -   拡張機能の更新後の再起動/再読み込みに関するメッセージを改善（#297278 の修正） [PR #307353](https://github.com/microsoft/vscode/pull/307353)
    -   クイックピックでのシンボルアイコンの色を復元（#299650 の修正） [PR #299753](https://github.com/microsoft/vscode/pull/299753)
-   [@guomaggie](https://github.com/guomaggie): Copilot Proxy から CAPI への切り替え [PR #318443](https://github.com/microsoft/vscode/pull/318443)
-   [@ishaq2321 (Muhammad Ishaq Khan)](https://github.com/ishaq2321)
    -   デバッグ: 保存されたブレークポイント/ウォッチ式を読み込む際のエラーをログに出力 (#\_319805) [PR #319806](https://github.com/microsoft/vscode/pull/319806)
    -   エディタ: shadowCaretRangeFromPoint での getComputedStyle の結果をキャッシュ (#\_319803) [PR #319804](https://github.com/microsoft/vscode/pull/319804)
-   [@KirtiRamchandani (Kirtikumar Anandrao Ramchandani)](https://github.com/KirtiRamchandani): 修正: Git LFS の Git エラーが Surface に表示されない問題 [PR #319973](https://github.com/microsoft/vscode/pull/319973)
-   [@maruthang (Maruthan G)](https://github.com/maruthang): 修正(エクスプローラー): 一時的なツリーマップの同期不整合に対するファイルエクスプローラーのスクロールハンドラーの保護 (#\_188365) [PR #310833](https://github.com/microsoft/vscode/pull/310833)
-   [@mohanrajvenkatesan23-04 (Mohanraj Venkatesan)](https://github.com/mohanrajvenkatesan23-04): html-language-features: JSDocのサマリーとタグを

[![Microsoftホームページ](/assets/icons/microsoft.svg)](https://www.microsoft.com)

-   [サポート](https://support.serviceshub.microsoft.com/supportforbusiness/create?sapId=d66407ed-3967-b000-4cfb-2c318cad363d "VS Code のサポートを受ける")
-   [プライバシー](https://go.microsoft.com/fwlink/?LinkId=521839 "Microsoftのプライバシーに関する声明を表示")
-   クッキーの管理
-   [利用規約](https://www.microsoft.com/legal/terms-of-use "Microsoftの利用規約を表示")
-   [ライセンス](/License "Visual Studio Codeのライセンスを表示")

-   プライバシー設定のオプトアウトアイコン [プライバシー設定](https://aka.ms/YourCaliforniaPrivacyChoices "プライバシー設定を表示")
-   [コンシューマー ヘルス プライバシー](https://go.microsoft.com/fwlink/?linkid=2259814 「Microsoft コンシューマー ヘルス プライバシー ポリシーを表示する」)
