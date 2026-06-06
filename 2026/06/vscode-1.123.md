---
product: VSCode
version: 1.123.0
release_title: Visual Studio Code 1.123
release_date: 2026-06-05
source_url: "https://code.visualstudio.com/updates/v1_123"
archived_at: 2026-06-06
---

# Visual Studio Code 1.123

# Visual Studio Code 1.123

[LinkedIn](https://www.linkedin.com/showcase/vs-code)や[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)

* * *

_リリース日: 2026年6月3日_

ダウンロード: Windows: [x64](https://update.code.visualstudio.com/1.123.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.123.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.123.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.123.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.123.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.123.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.123.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.123.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.123.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.123 のリリースへようこそ。このリリースでは、エージェントおよび統合ブラウザの操作性が向上しています。

-   [より大きなコンテキストウィンドウ](#_1m-context-window-for-anthropic-and-openai-models): Anthropic および OpenAI モデル向けに、100万文字のコンテキストウィンドウに対応しました。
-   [セッション同期](#_session-sync-and-chronicle): チャットセッションをマシン間で自動的に同期し、コーディング履歴を検索できます。
-   [エージェントウィンドウ](#_agents-window-preview): 複数のエージェントセッションを並べて開き、作業内容を比較したり並行して確認したりできます。
-   [リサーチエージェント](#_research-agent-preview): トピックに関する詳細な調査を実行し、出典が明記された詳細なMarkdownレポートを取得できます。
-   [統合ブラウザの更新](#_integrated-browser): お気に入りのページを登録して素早くアクセスしたり、ブラウザのスクリーンショットを撮影するためのオプションがさらに充実しました。

> [VS Code Live at Build 2026](https://aka.ms/VSCode/Livestage)をぜひもう一度ご覧ください！

プログラミングを楽しんでください！

* * *

## エージェント

### セッションの同期と履歴

**設定**: chat.sessionSync.enabled VS Codeで開く VS Code Insidersで開く この設定は組織レベルで管理されます。変更するには管理者にお問い合わせください。ORG

チャットセッションが GitHub アカウントに自動的に同期されるようになりました。これにより、マシンやワークスペースをまたいで、自分の作業履歴を検索可能に管理できます。

各セッションには、会話内容、操作したファイル、リポジトリのコンテキスト（リポジトリ、ブランチ、タイムスタンプ）、およびセッション中に参照されたプルリクエスト、イシュー、コミットが記録されます。

チャット内の新しいクロニクルコマンド (`/chronicle`) を使用すると、その履歴を活用できます:

-   過去のセッションについて自然言語で質問する
-   スタンドアップレポートを生成する
-   パーソナライズされた生産性向上ヒントを取得する
-   トピック、ファイル、または PR に基づいてコーディング履歴を検索する

セッション同期を有効にするには、chat.sessionSync.enabled をオンにします。VS Code で開く VS Code Insiders で開く この設定は組織レベルで管理されます。変更するには、管理者にお問い合わせください。ORG。セッション同期のステータスは、VS Code ステータスバーの Copilot ステータスダッシュボードで確認できます。

![Copilot ステータスダッシュボードのセッション同期ステータスメッセージのスクリーンショット。](/assets/updates/1_123/session-sync-status.webp)

詳細については、[セッション同期](https://code.visualstudio.com/docs/agents/sessions/session-sync) および [Chronicle](https://code.visualstudio.com/docs/agents/sessions/session-insights) のドキュメントを参照してください。

### サンドボックス内でのネットワーク依存コマンドの再試行

**設定**: chat.agent.sandbox.retryWithAllowNetworkRequests VS Codeで開く VS Code Insidersで開く

_ローカル_エージェントによって実行されるターミナルコマンドが、許可されたドメインとして設定されていないドメインへのアクセスを必要とする場合、そのコマンドはネットワークアクセス制限のないサンドボックス内で自動的に再試行されます。 その後も失敗する場合は、サンドボックス外での実行に切り替わります。これにより、ファイルシステムの保護を維持しつつ、`git fetch` などのネットワーク依存の操作を完了させることができます。

### エージェント ウィンドウ (プレビュー)

[エージェントウィンドウ](https://aka.ms/VSCode/Agents/docs) は、プロジェクトやマシンをまたいでエージェントセッションを探索、反復、確認するために最適化された専用のコンパニオンウィンドウです。今回のリリースでは、複数のセッションを並べて操作できるようにすることに重点を置きました。

#### 複数のセッションの同時表示

エージェントウィンドウで、複数のセッションを同時に開くことができるようになりました。アクティブなセッションに加え、以下の方法でその隣に別のセッションを開くことができます：

-   セッションリスト内のセッションのコンテキストメニューから **横に開く** を選択する。
-   セッションリストからセッションをセッション表示領域にドラッグ＆ドロップする。
-   Alt キーを押しながらセッションリストからセッションを選択する。

複数のセッションを同時に表示できますが、アクティブなセッションは常に1つだけです。**ターミナル**、**ファイル**、**変更**の各ビューはすべて、現在アクティブなセッションに基づいて動作するため、アクティブなセッションを切り替えると、これらのビューもその状態に合わせて更新されます。

デフォルトでは、セッション一覧でセッションを選択すると、アクティブなセッションビューが選択したセッションに置き換えられます。セッションビューが置き換えられないようにするには、ビューの右上にあるピン留めアクションを使用して固定してください。固定されたセッションビューは決して置き換えられず、別のセッションを選択しても、代わりに固定されていないビューとして開かれます。 すべてのセッションビューが固定されている場合、選択したセッションは横に表示されます。

セッションビューの右上にある最大化アクションを使用すると、開いているすべてのセッションビューに表示領域が拡大され、他のセッションを閉じることなく、1つのセッションに集中して表示できます。

詳細については、[エージェント ウィンドウのドキュメント](https://aka.ms/VSCode/Agents/docs)を参照してください。

### リサーチ エージェント (プレビュー)

> **注**: リサーチエージェントは現在プレビュー版であり、Insiders プログラム内の Copilot CLI (ローカル) セッションでのみ利用可能です。

不慣れなコードを理解したり、アプローチを比較したり、ライブラリや API の仕組みを学んだりする場合、チャットでの簡単な回答だけでは不十分なことがあります。リサーチエージェントは、トピックについて詳細な調査を行い、コードベース、関連する GitHub リポジトリ、および Web から情報を収集・統合することで、出典が明記された詳細な Markdown レポートを生成します。

リサーチエージェントは速度よりも深さを重視して最適化されており、読み取り専用アクセス権限を持つため、コードを変更することなく調査とレポート作成を行います。実行するには、Copilot CLI（ローカル）セッションのチャット入力欄に `/research` と入力し、その後にトピックを入力してください。

詳細については、[リサーチエージェントによる詳細な調査の実行](https://code.visualstudio.com/docs/agents/agent-types/copilot-cli#run-deep-research-with-the-research-agent)を参照してください。

## 言語モデル

### AnthropicおよびOpenAIモデル向け100万トークンのコンテキストウィンドウ

VS Codeは、互換性のあるAnthropicおよびOpenAIモデルに対し、100万トークンのコンテキストウィンドウをサポートするようになりました。この拡張されたコンテキストウィンドウにより、重要な文脈を失うことなく、大幅に大規模なコードベースや長い会話に対応できるようになります。拡張されたコンテキストウィンドウは、Claude Opus 4.7やGPT-5.5などのサポート対象モデルを使用する際に利用可能です。

![拡張されたコンテキストサイズオプションを示すスクリーンショット。](/assets/updates/1_122/extended-context-2.webp)

> **注**: コンテキストウィンドウが大きくなると、1回の対話あたりのトークン消費量が増加し、従量課金制の場合、AIクレジットの使用量が増加する可能性があります。

## 統合ブラウザ

### お気に入りページ

統合ブラウザのアドレスバーを刷新し、URLの入力だけでなく、お気に入りページを登録したり、お気に入りや開いているタブに簡単にアクセスできるなど、より多機能な体験を実現しました。

ページをお気に入りに追加するには、ブラウザのURLバーにある星のアイコンを選択してください。

![統合ブラウザのスクリーンショット。ブラウザのURLバーにある「お気に入りに追加」と表示された星のボタンが強調表示されています。](/assets/updates/1_123/browser-favorite-button.webp)

URLバーを選択すると、お気に入りのページや開いているタブのリストが表示されます。

![ブラウザのURLバーの周囲に表示される、お気に入りや開いているタブを示すポップアップのスクリーンショット。](/assets/updates/1_123/browser-url-bar.webp)

### スクリーンショットを撮影するその他の方法

**設定**: workbench.browser.experimentalUserTools.enabled VS Codeで開く VS Code Insidersで開く

前回のリリースでは、現在のブラウザビューポートのスクリーンショットをコンテキストとしてチャットに添付できる **Add Screenshot to Chat** が導入されました。これは、レイアウトの問題のデバッグなど、UI 関連のタスクで特に役立ちます。

今回のリリースでは、関連する2つの機能を追加しました：

-   **チャットに領域スクリーンショットを追加**：選択した矩形領域のスクリーンショットを撮影し、そのスクリーンショットをチャットのコンテキストとして追加します。
-   **チャットに全ページスクリーンショットを追加（実験的）**： 現在のビューポートに表示されている範囲を超えて、Webページ全体のスクリーンショットを撮影し、そのスクリーンショットをチャットのコンテキストとして追加します。この実験的機能を利用するには、workbench.browser.experimentalUserTools.enabled 設定を有効にする必要があります。

![統合ブラウザの「チャットに追加」メニューのスクリーンショット。「チャットに領域スクリーンショットを追加」および「チャットに全ページスクリーンショットを追加（実験的）」オプションが表示され、キャプチャされたスクリーンショットがチャットビューにコンテキストとして添付されている様子。](/assets/updates/1_123/browser-screenshot-area-fullpage.webp)

## エディターの操作性

### 拡張機能の自動更新の遅延

VS Code では、拡張機能を新しく公開されたバージョンに自動更新する前に、2時間の遅延が適用されるようになりました。自動更新が有効になっている場合、新しいバージョンは公開から2時間後に自動更新され、問題のあるリリースやセキュリティ上のリスクがある可能性のあるリリースに対する保護が強化されます。

**更新**ボタンを使用すれば、いつでもすぐに拡張機能を更新できるため、この機能によって作業が妨げられることはありません。更新が待機中の場合、拡張機能の詳細ビューに、まだ更新されていない理由と自動更新が行われる予定時刻が表示されます。

> **注**: この遅延は、Microsoft、GitHub、OpenAI などの信頼できる発行元による拡張機能には適用されません。これらの拡張機能は引き続き即時更新されます。

![遅延情報と更新スケジュールが表示された拡張機能のスクリーンショット。](/assets/updates/1_123/extension-delayed-autoupdate.webp)

## 感謝

課題追跡への貢献：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

`vscode`への貢献:

-   [@aaronpowell (Aaron Powell)](https://github.com/aaronpowell): プラグインマーケットプレイス向けのマーケットプレイス参照機能を追加 [PR #317901](https://github.com/microsoft/vscode/pull/317901)
-   [@goingforstudying-ctrl](https://github.com/goingforstudying-ctrl): 修正: browser-emulation-toolbar-label に white-space: nowrap を追加 [PR #318935](https://github.com/microsoft/vscode/pull/318935)
-   [@guomaggie](https://github.com/guomaggie): \[Search Subagent\] コンテキストウィンドウの制限超過エラーへの対応 [PR #316529](https://github.com/microsoft/vscode/pull/316529)
-   [@maruthang (Maruthan G)](https://github.com/maruthang): 修正: Windows での Electron 引数フィルタリングを防ぐため、URI フラグを結合 [PR #308150](https://github.com/microsoft/vscode/pull/308150)
-   [@oded-ist (Oded S)](https://github.com/oded-ist): read_cell_outputがすべての出力を「大きすぎる」と誤って報告する問題を修正 [PR #318148](https://github.com/microsoft/vscode/pull/318148)
-   [@PenguinDOOM (Penguin)](https://github.com/PenguinDOOM): BYOKの無効なステートフルマーカーの再試行を修正 [PR #317292](https://github.com/microsoft/vscode/pull/317292)
-   [@rebornix (Peng Lyu)](https://github.com/rebornix): モバイル版マルチディフビューを追加 [PR #318081](https://github.com/microsoft/vscode/pull/318081)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   修正: 拡張機能アクションのメモリリーク [PR #315054](https://github.com/microsoft/vscode/pull/315054)
    -   修正: ipc.electron.ts におけるメモリリーク [PR #317846](https://github.com/microsoft/vscode/pull/317846)
    -   修正: 検索結果のメモリリーク [PR #282309](https://github.com/microsoft/vscode/pull/282309)
-   [@SLdragon (rentu)](https://github.com/SLdragon): 機能追加: nes/inline 補完プロバイダ向けに languageDiagnosticsService オプションを追加 [PR #317678](https://github.com/microsoft/vscode/pull/317678)
-   [@Tyriar (Daniel Imms)](https://github.com/Tyriar): 修正: シェル統合テスト内の Promise.race 内の await を削除 [PR #319068](https://github.com/microsoft/vscode/pull/319068)

* * *

新機能がリリースされ次第、すぐに試してくださる皆様に心より感謝いたします。ぜひ定期的にこちらをチェックして、新機能をご確認ください。

> 過去の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
