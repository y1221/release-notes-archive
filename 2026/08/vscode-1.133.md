---
product: VSCode
version: 1.133.0
release_title: Visual Studio Code 1.133
release_date: 2026-08-12
source_url: "https://code.visualstudio.com/updates/v1_133"
archived_at: 2026-08-13
---

# Visual Studio Code 1.133

# Visual Studio Code 1.133

[LinkedIn](https://www.linkedin.com/showcase/vs-code)や[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)でフォローしてください

* * *

_リリース日: 2026年8月12日_

ダウンロード：Windows：[x64](https://update.code.visualstudio.com/1.133.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.133.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.133.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.133.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.133.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.133.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.133.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.133.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.133.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.133 のリリースへようこそ。今回のリリースでは、Claude セッションの柔軟性が向上し、長文のチャットも追跡しやすくなり、作業中にローカルの HTML プレビューが自動的に更新されるようになりました。

-   [Claude セッションのモデルプロバイダーを変更する](#_claude-sessions-で-anthropic-と-copilot-モデルを-併用する): エージェントホストの設定を変更することなく、ターンごとにプロバイダーを切り替えることができます。
    
-   [GitHub サインイン不要の「エージェント」ウィンドウ](#_open-the-agents-window-without-github-sign-in-experimental): GitHub サインインが利用できない場合でも、既存の API キーを使用して Claude を利用できます。
    
-   [HTML ファイルの自動再読み込み](#_auto-reload-html-files-in-the-integrated-browser): 手動でリロードすることなく、HTML の変更を即座にプレビューできます。
 

プログラミングを楽しんでください！

* * *

VS Code は全ユーザーに向けて段階的に展開されています。 VS Code の **更新の確認** 機能を使用すると、すぐに最新バージョンを入手できます。

新機能をいち早く試したい場合は、[**ナイトリー版 Insiders ビルドをダウンロード**](https://code.visualstudio.com/insiders) してください。このビルドには、最新アップデートが利用可能になり次第、すぐに反映されます。

* * *

## エージェント

### エージェントホスト

エージェントホストを使用すると、複数の VS Code ウィンドウから同じエージェントセッションに接続できます。これは、[エージェントホストプロトコル](https://microsoft.github.io/agent-host-protocol/) （AHP）に基づいて、エージェントハーネスを専用プロセスで実行します。エージェントホストの Copilot エージェントは、[Copilot SDK](https://www.npmjs.com/package/@github/copilot-sdk) によって駆動されており、その動作や機能は Copilot CLI、スタンドアロンの GitHub Copilot アプリ、およびその他の Copilot 製品と整合しています。

現在、エージェントホストの開発を積極的に進めています。以下のスクリーンショットは、エディタウィンドウ内のエージェントホストで `Copilot` ハーネスを選択する方法を示しています：

![エディタウィンドウのハーネスドロップダウンを示すスクリーンショット。](/assets/updates/1_133/agent-host-harness-dropdown-editor.webp)

詳細については、[VS Code エージェントホストのドキュメント](https://code.visualstudio.com/docs/agents/concepts/agent-host)をご覧ください。フィードバックやご要望がございましたら、[イシューを登録](https://github.com/microsoft/vscode/issues)してご一報ください。

### Claude セッションで Anthropic と Copilot のモデルを併用する

以前は、Claude セッションは GitHub Copilot のサブスクリプション、または API キーなどの Claude の既存設定のいずれか一方を通じて完全に実行されていました。プロバイダーを切り替えるには、エージェントホストの設定を変更する必要がありました。

現在、モデルピッカーには両方のグループが表示されるようになったため、ターンごとにプロバイダーを切り替えることが可能です。選択したモデルは次のターンで使用されます。**Anthropic** グループのモデルは API キーを通じて課金され、**Copilot** グループのモデルは Copilot サブスクリプションを使用します。

![Claude セッション内のモデルピッカーを示すスクリーンショット。モデルは「Anthropic」と「Copilot」の各見出しの下にグループ分けされています。](/assets/updates/1_133/agent-host-claude-model-picker.webp)

### GitHubへのサインインなしで「Agents」ウィンドウを開く（実験的機能）

**設定**: chat.agentHost.allowSignedOutWhenUsable VS Codeで開く VS Code Insidersで開く

以前は、[Agentsウィンドウ](https://code.visualstudio.com/docs/agents/run/agents-window)を開くと、閉じることができないGitHubのサインインプロンプトが表示されていました。そのため、github.comにアクセスできない環境のユーザーや、GitHubを利用していないユーザーは利用できませんでした。 API キーで Claude をすでに設定済みで、GitHub へのサインインを必要としないユーザーは、この余分な手順を踏まなければなりませんでした。

この設定を有効にすると、GitHub にサインインせずに [Agents ウィンドウ](https://code.visualstudio.com/docs/agents/run/agents-window) を開くことができます。これにより、GitHub 認証は [Agents ウィンドウ] ではなく、個々のエージェントやモデルに関連付けられるようになります。今回のリリースでは、この動作は Claude のみに対応しています。独自のモデルキーを使用した Copilot および Codex への対応は、今後のリリースで予定されています。

![GitHub からサインアウトした状態で「Agents」ウィンドウが開き、「既存の Claude 設定が検出されました」という通知と「GitHub にサインイン」ボタンが表示されているスクリーンショット。](/assets/updates/1_133/agent-host-signed-out-claude.webp)

## チャット

### プロンプトのスティッキースクロール

**設定**: chat.stickyScroll.enabled VS Codeで開く VS Code Insidersで開く

長い会話の履歴をスクロールしていると、どのプロンプトに対する応答なのかがわからなくなってしまうことがあります。 スクロールして通り過ぎてしまったプロンプトは、エディタのスティッキー・スクロールと同様に、チャットの上部に固定されたままになります。

固定されたプロンプトには、会話内での位置が表示されます。それを選択するとそのプロンプトの位置に戻ることができます。また、その横にある「前へ」および「次へ」ボタンを使用して、プロンプト間を順に移動することもできます。

## エディターの操作性

### 統合ブラウザでの HTML ファイルの自動再読み込み

**設定**: workbench.browser.autoReloadOnFileChange VS Code で開く VS Code で開く Insiders

[統合ブラウザ](https://code.visualstudio.com/docs/debugtest/integrated-browser)でローカルのHTMLファイルを開いている場合、ディスク上のファイルが変更されると自動的に再読み込みされるようになりました。

これにより、エージェントによる編集や、自身が保存した変更を即座に確認できます。個々のブラウザタブごとに自動再読み込みのオン/オフを切り替えたり、`workbench.browser.autoReloadOnFileChange` 設定（VS Code で開く、VS Code で開く、Insiders）でデフォルト設定を構成したりできます。

## 非推奨の機能と設定

なし

## 謝辞

`vscode` への貢献者：

-   [@accnops (Arthur Cnops)](https://github.com/accnops)
    -   voice: 音声接続が失敗した理由を説明する [PR #329453](https://github.com/microsoft/vscode/pull/329453)
    -   「Voice Mode」のボイスを承認済みの名前に変更 [PR #329576](https://github.com/microsoft/vscode/pull/329576)
-   [@benelog (Sanghyuk Jung)](https://github.com/benelog): notebook.cellToolbarLocation設定の説明文にある重複した単語を修正 [PR #328957](https://github.com/microsoft/vscode/pull/328957)
-   [@Bosphoramus (Tony)](https://github.com/Bosphoramus): 修正: タイトルバーが非表示の際、Modern UIのフローティングパネルに上部の余白を追加 [PR #328688](https://github.com/microsoft/vscode/pull/328688)
-   [@bstee615 (Benjamin Steenhoek)](https://github.com/bstee615): diffpatchのプロンプトに、オプションとして「却下された編集履歴」を追加 [PR #327367](https://github.com/microsoft/vscode/pull/327367)
-   [@karthikkatu (Karthikeyan M)](https://github.com/karthikkatu): ローカルファイルの変更をプレビューした際に、統合ブラウザを自動再読み込みする [PR #324618](https://github.com/microsoft/vscode/pull/324618)
-   [@lfraleigh (Lori Fraleigh)](https://github.com/lfraleigh): GoModulesToLookFor に欠落していた Go モジュール用の Azure SDK を追加 [PR #322786](https://github.com/microsoft/vscode/pull/322786)
-   [@mateusabelli (Mateus Abelli)](https://github.com/mateusabelli): Copilot 拡張機能のリンクを更新 [PR #329229](https://github.com/microsoft/vscode/pull/329229)
-   [@rfeltis (Ralph Feltis)](https://github.com/rfeltis): 「エージェント」ウィンドウの起動時の A/A 実験トリガーを追加 [PR #328454](https://github.com/microsoft/vscode/pull/328454)
-   [@ShehabSherif0 (Shehab Sherif)](https://github.com/ShehabSherif0): タイムラインのページサイズ計算における演算子の優先順位の修正 [PR #303258](https://github.com/microsoft/vscode/pull/303258)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke): 修正：PerfModelContentProviderにおけるメモリリーク [PR #328581](https://github.com/microsoft/vscode/pull/328581)
-   [@SVOG23 (Suraj Vaghela)](https://github.com/SVOG23): ドキュメント：ClaudeチャットセッションのAGENTS.mdにおける古い相対パスを修正 [PR #327612](https://github.com/microsoft/vscode/pull/327612)
-   [@vscodebot-pr (VS Code PR Bot)](https://github.com/vscodebot-pr): 修正: テストデコレーションにおける古い行番号への対処 (#328988 を修正) [PR #328994](https://github.com/microsoft/vscode/pull/328994)
-   [@Xaena53 (Bedirhan ÇETİN)](https://github.com/Xaena53): リファクタリング: 入力検索のトグルナビゲーションを共有 [PR #329128](https://github.com/microsoft/vscode/pull/329128)

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
