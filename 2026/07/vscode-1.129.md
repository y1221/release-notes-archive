---
product: VSCode
version: 1.129.0
release_title: Visual Studio Code 1.129
release_date: 2026-07-15
source_url: "https://code.visualstudio.com/updates/v1_129"
archived_at: 2026-07-16
---

# Visual Studio Code 1.129

# Visual Studio Code 1.129

[LinkedIn](https://www.linkedin.com/showcase/vs-code)や[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)でフォローしてください

* * *

_リリース日: 2026年7月15日_

ダウンロード：Windows：[x64](https://update.code.visualstudio.com/1.129.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.129.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.129.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.129.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.129.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.129.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.129.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.129.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.129.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.129 のリリースへようこそ。 このリリースでは、専用のエージェントホスト、[Agents](#_agents) ウィンドウ内の新しいエディタパネル、`!` によるコマンドの実行、およびモダン UI のプレビューが追加されました。

-   [エージェントホスト](#_the-agent-host): 専用のプロセスでエージェントセッションを実行し、複数のウィンドウからそれらに接続できます。
    
-   [「エージェント」ウィンドウの新しいエディタパネル（実験的機能）](#_new-editor-panel-in-the-agents-window-experimental): ドッキングされたエディタで、エージェントによって生成されたファイルや差分を確認できます。
    
-   [`!` プレフィックス付きコマンドの実行](#_run-commands-with--prefix): チャットプロンプトから直接ターミナルコマンドを実行できます。
 
-   [モダン UI のプレビュー (実験的機能)](#_modern-ui-preview-experimental): 更新された VS Code ワークベンチの外観をいち早く体験できます。
 

プログラミングをお楽しみください！

* * *

VS Code は全ユーザーに向けて段階的に展開されています。VS Code の **更新の確認** 機能を使用すると、すぐに最新バージョンを入手できます。

新機能をいち早く試したい場合は、[**ナイトリー版 Insiders ビルドをダウンロード**](https://code.visualstudio.com/insiders)してください。このビルドには、最新アップデートが利用可能になり次第、すぐに反映されます。

* * *

## エージェント

### エージェントホスト

現在、VS Code におけるエージェント セッションの動作を、エージェント ホストを中心に再設計しています。エージェント ホストとは、[エージェント ホスト プロトコル](https://microsoft.github.io/agent-host-protocol/) (AHP) に基づいて、Copilot、Claude、Codex などのエージェント・ハーネスを実行する専用プロセスです。 セッションは独自のプロセス内で実行されるため、同じセッションに複数の VS Code ウィンドウから同時に接続し、表示することができます。エージェントホストの Copilot エージェントは、[Copilot SDK](https://www.npmjs.com/package/@github/copilot-sdk)によって駆動されており、その動作や機能は Copilot CLI、スタンドアロンの GitHub Copilot アプリ、およびその他の Copilot 製品と整合しています。

現在、エージェントホストの開発を積極的に進めており、エディタウィンドウと[エージェントウィンドウ](https://code.visualstudio.com/docs/agents/agents-window)の両方でユーザーへの提供を開始しています。 この機能を利用するには、chat.agentHost.enabled を有効にしてください。VS Code で開く VS Code Insiders で開く この設定は組織レベルで管理されます。変更するには、管理者に連絡してください。ORG を選択し、ハーネスドロップダウンからエージェントホストハーネスを選択してください。 以下のスクリーンショットは、エディターウィンドウのエージェントホストで `Copilot` ハーネスを選択する方法を示しています：

![エディターウィンドウのハーネスドロップダウンを示すスクリーンショット。](/assets/updates/1_129/agent-host-harness-dropdown-editor.webp)

エージェントホストへの投資を継続しているため、このリリースノートに記載されている新機能の一部は、エージェントがエージェントホスト上で実行されている場合にのみ利用可能となる場合があります。 それらの機能にはこのセクションへのリンクが張られており、必要に応じて、機能を有効にするための追加設定（例：エージェントホスト上でClaudeエージェントを有効にするには `chat.agents.claude.preferAgentHost` を設定）が記載されています。

### 「エージェント」ウィンドウの新しいエディタパネル（実験的機能）

[「エージェント」ウィンドウ](https://code.visualstudio.com/docs/agents/agents）では、エージェントとの会話と、エージェントが生成したファイルや変更点の詳細領域が並んで表示されます。今回のリリースでは、エディタと詳細領域を共有のタブバーを備えた1つのドッキングされたペインに統合した、再設計された**エディタパネル**が導入されました。これにより、エージェントの作業内容を確認する際、別々のパネルを切り替えるのではなく、メインエディタで作業しているかのような感覚で利用できます。

新しいエディタパネルでは、以下の操作が可能です：

-   チャット画面の隣にあるドッキングされたエディタ内で直接ファイルや差分を開くことができ、チャットのタブストリップと連動した**[新しいタブ]**アクションでタブを追加できます。
-   **Changes** ビューで変更内容をレビューする際、改良された差分表示機能を利用できます。インライン表示と並列表示の切り替え、すべてのファイルの一括展開・折りたたみ、画面により多くの変更内容を表示できるコンパクトな差分表示形式での確認が可能です。 **プルリクエストの作成**などの次のアクションは、エディタタブのタイトルから直接実行でき、差分ビューの切り替えなどのエディタ用キーバインドは、VS Code のメインウィンドウと同じように機能します。
-   中断した箇所から再開できます。各セッションでは、サイドペインの幅、開いているエディタ、アクティブなエディタ、およびファイルごとの折りたたみ状態が、セッションの切り替えやウィンドウの再読み込み後も復元されます。

これは実験的な、オプトイン形式のレイアウトです。試すには、settings.layout.singlePaneDetailPanel を有効にし、ウィンドウを再読み込みしてください。この設定は起動時に一度読み込まれるためです。

### エージェントホストセッション用のセッション管理ツール

[エージェントホスト](#_the-agent-host) 上で実行されているエージェント（Copilot、Claude、Codex）は、一連のセッション管理ツールを利用できるようになりました。これにより、エージェントは、ユーザーが現在の会話から切り替えることなく、他のセッションやチャットを一覧表示、作成、監視、および操作できるようになります。

これらのツールを使用すると、エージェントは以下の操作が可能です：

-   ステータス、ワークスペース、変更履歴を含むセッション一覧を表示し、対応すべき適切なセッションを特定します。明示的に要求されない限り、アーカイブされたセッションは除外されます。
-   他のセッションの最近の会話を読み取り、そのセッションで何が行われているかを把握できます。
-   単一の会話に無関係な作業を詰め込みすぎないように、新しいセッションを作成するか、既存のセッション内に新しいチャットを作成して、サブタスクを引き継ぐことができます。
-   自身が作成したセッションやチャットにメッセージを送信し、その作業を開始または誘導できます。

ツールがセッションを作成または対象とするたびに、VS Code は **Open Session** ピルを表示し、そのセッションに直接移動できるようにします。 別のセッションにメッセージを送信する際は、常にまず確認を求められます。エージェントは自身のチャットにメッセージを送信できず、また一連の送信には上限が設けられているため、1つのリクエストが無限の数のセッションに拡散することはありません。

### 「エージェント」ウィンドウの改善

今回のリリースでは、[エージェントウィンドウ](https://code.visualstudio.com/docs/agents/agents-window)の新規セッション作成フローに、いくつかの小規模な改善が盛り込まれています：

-   **新規セッションのデフォルト設定の記憶**：新規セッションピッカーは、前回のエージェントモードと承認設定を記憶し、次回セッションを作成する際にそれらをデフォルトとして使用します。これにより、タスクごとに同じオプションを再選択する必要がなくなります。
-   **ワークツリーのチェックボックス**: ドロップダウンからフォルダ隔離とワークツリー隔離のいずれかを選択する代わりに、新規セッションの設定画面には単一の **新しいワークツリー** チェックボックスが表示されます。 このチェックボックスをオンにすると、Git ワークツリー分離でセッションが実行されます。これにより、エージェントによる変更は、レビューやマージの準備が整うまで別のフォルダに保存されます。オフのままにすると、フォルダ分離が使用されます。

## チャット

### `!` をプレフィックスとしてコマンドを実行

チャットメッセージの先頭に `!` を付けることで、その内容をターミナルコマンドとして実行できるようになりました。これは、エディタおよび「エージェント」ウィンドウ内の [エージェントホスト](#_the-agent-host) セッションで機能します。

![チャットで `!` をプレフィックスとしてターミナルコマンドを実行しているスクリーンショット。](/assets/updates/1_129/bang-commands.webp)

### Copilotエージェントハーネスを使用したBYOKモデル

[Bring Your Own Key (BYOK) モデル](https://code.visualstudio.com/docs/agent-customization/language-models#_bring-your-own-language-model-key) を使用できるようになりました。

### プロンプトファイルをスキルへ移行（実験的機能）

プロンプトファイル (`*.prompt.md`) は、カスタムスラッシュコマンドを記述するために使用されます。これらはローカルエージェントハーネスでのみサポートされており、他のハーネスではスラッシュコマンドはスキルで表現されます。ハーネス間の互換性を確保するため、すべてのプロンプトファイルをスキルへ移行することをお勧めします。

chat.customizations.promptMigration.が有効になっている場合（VS Codeで開く VS Codeで開く Insiders）、[エージェントホスト](#_the-agent-host)上で実行されているハーネスを選択し、移行可能なプロンプトファイルが存在する場合、AI カスタマイズ概要に「プロンプトの移行」という項目が表示されるようになります。

この移行インターフェースでは、以下の操作が可能です：

-   ワークスペース (`.github/prompts/`) およびユーザーデータの両方の場所にあるプロンプトファイルを表示する。
-   選択したファイルをスキルへ移行し、新しく作成されたスキルを開く。

![プロンプトファイルの移行](/assets/updates/1_129/migrate-prompt-files.webp)

## エディターの操作性

### エディターツールバーからエディターを再起動する

ファイルや差分が複数のエディターに対応している場合、エディターツールバーから直接エディターを切り替えることができます。**...** メニューを開き、**Reopen Editor With** サブメニューからエディターを選択してください。 これにより、コマンドパレットを使用せずに、他のエディタを簡単に見つけることができます。

### モダン UI プレビュー（実験的機能）

**設定**: workbench.experimental.modernUI VS Code で開く VS Code Insiders で開く

エディタワークベンチの外観と操作感を刷新した、モダン化された VS Code UI をプレビューできるようになりました。これは現在実験的な機能であり、workbench.experimental.modernUI 設定で有効にできます。Insiders ビルドではデフォルトで有効になっています。

## 認証

### エージェントホストにおける Copilot の GitHub Enterprise サポート

GitHub Enterprise (GHE) インスタンスを通じて GitHub Copilot へのアクセスが提供されている開発者は、VS Code にサインインして Copilot を使用できます。 以前は、エージェントホストの Copilot 認証は github.com のみをサポートしていたため、GHE ベースの Copilot サブスクリプションではサインインを完了できませんでした。OAuth フローと Copilot トークンのリクエストの両方が github.com を対象としていたためです。

今回のリリースにより、VS Code は GitHub Enterprise インスタンスに対して Copilot の認証を行うことができるようになりました。Copilot にサインインする際に GitHub Enterprise インスタンスを選択すると、VS Code はそのホスト（github.com ではなく）に対してサインインフローを実行し、Copilot アクセストークンをリクエストします。 これは、エディタウィンドウと[エージェントウィンドウ](https://code.visualstudio.com/docs/agents/agents-window)の両方で機能し、Copilot エージェントと Claude エージェントの両方で利用可能です。

この機能は [エージェントホスト](#_the-agent-host) の一部であるため、chat.agentHost.enabled 設定でエージェントホストが有効になっていることを確認してください。VS Code で開く VS Code Insiders で開く この設定は組織レベルで管理されます。変更するには、管理者に連絡してください。ORG。

## 提案中の API

### 差分およびマージエディタ用のカスタムエディタの設定

カスタムエディタは、デフォルトで差分およびマージエディタから除外されるようになりました。その結果、ファイルは引き続きカスタムエディタで開くことができますが、その差分やマージは組み込みのテキストエディタで開かれるようになります。以前、差分やマージエディタを開いた際にカスタムエディタが表示されていた場合は、この変更に気づくかもしれません。

差分を別のエディタで開くには、エディタツールバーの [**Reopen Editor With** サブメニュー](#_reopen-an-editor-from-the-editor-toolbar) を使用してください。 対応する差分に対して常に特定のエディタを使用するには、workbench.diffEditorAssociations Open in VS Code Open in VS Code Insiders 設定を構成してください。

提案されている `customEditorPriority` API では、ファイル、差分、マージエディタごとに個別の優先順位を設定できます。

```
"priority": {
  "textEditor": "default",
  "diffEditor": "option",
  "mergeEditor": "never"
}
```

新しい `never` 優先度を設定すると、そのエディタタイプが自動的に選択されることはなくなりますが、明示的に選択することは可能です。

テキスト差分エディタがバイナリコンテンツを表示できない場合でも、VS Code は互換性のあるカスタム差分エディタにフォールバックします。

## 謝辞

`vscode` への貢献者：

-   [@accnops (Arthur Cnops)](https://github.com/accnops): chat/voice: 質問カルーセルに音声回答を表示 (修正はスキップされました) [PR #323161](https://github.com/microsoft/vscode/pull/323161)
-   [@cipheraxat (Akshat Anand)](https://github.com/cipheraxat): フルラベル表示時の Modern UI エディタタブの装飾色の修正 [PR #325291](https://github.com/microsoft/vscode/pull/325291)
-   [@danielrobbins (Daniel Robbins)](https://github.com/danielrobbins): 適切なチャットモデルの設定に関連するバグを修正。 (Issue #323765 を修正) [PR #323767](https://github.com/microsoft/vscode/pull/323767)
-   [@dobbydobap (varshitha)](https://github.com/dobbydobap)
    -   reevaluateOnRerun タスクにおいて、2回目の「最後のタスクを再実行」が起動しない問題を修正 [PR #324571](https://github.com/microsoft/vscode/pull/324571)
    -   固定されたタブを、固定解除された行の先頭にドラッグした際に、固定状態を解除するように修正 [PR #324734](https://github.com/microsoft/vscode/pull/324734)
-   [@JeffreyCA](https://github.com/JeffreyCA): Azure Developer CLI (azd) の Fig 仕様を更新 [PR #321221](https://github.com/microsoft/vscode/pull/321221)
-   [@Kaidesuyoo (Kaidesuyo)](https://github.com/Kaidesuyoo): ワークベンチ UI の持続的なパフォーマンス低下の修正 [PR #324986](https://github.com/microsoft/vscode/pull/324986)
-   [@myselfsiddharth (Siddharth Mehta)](https://github.com/myselfsiddharth): デバッグ: 例外ウィジェット内のツールバーアクションを右揃えにする [PR #325077](https://github.com/microsoft/vscode/pull/325077)
-   [@theanarkh (theanarkh)](https://github.com/theanarkh)
    -   ワークベンチ: ObjectSettingCheckboxWidget のメモリリークを修正 [PR #323670](https://github.com/microsoft/vscode/pull/323670)
    -   修正: IPCエミッタがリスナーを追加する際に、必ずハンドラを登録するようにした [PR #323663](https://github.com/microsoft/vscode/pull/323663)
-   [@yavanosta (Dmitry Guketlev)](https://github.com/yavanosta): growUntilVariableBoundaries で startColumn を使用 [PR #324523](https://github.com/microsoft/vscode/pull/324523)

### 課題追跡

当プロジェクトの課題追跡への貢献：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)
-   [@dobbydobap (varshitha)](https://github.com/dobbydobap)
-   [@hogiSp (hogiSp)](https://github.com/hogiSp)

* * *

新機能が公開され次第、すぐに試してくださる皆様に心より感謝いたします。ぜひ定期的にこのページをチェックして、新機能についてご確認ください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [アップデート](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
