---
product: VSCode
version: 1.131.0
release_title: Visual Studio Code 1.131
release_date: 2026-07-29
source_url: "https://code.visualstudio.com/updates/v1_131"
archived_at: 2026-07-30
---

# Visual Studio Code 1.131

# Visual Studio Code 1.131

[LinkedIn](https://www.linkedin.com/showcase/vs-code)や[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)でフォローしてください

* * *

_リリース日: 2026年7月29日_

ダウンロード：Windows：[x64](https://update.code.visualstudio.com/1.131.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.131.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.131.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.131.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.131.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.131.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.131.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.131.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.131.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.131 のリリースへようこそ。今回のリリースでは、サブエージェントの実行状況の可視性の向上、ワークベンチ全体での組み込みディクテーション機能、および新しいハイブリッド Markdown エディタが追加されました。

-   [サブエージェント](#_more-information-about-running-subagents-agents-window): 会話画面を開かなくても、実行中のサブエージェントのモデル、経過時間、およびアクティブなツール呼び出しを確認できます。
    
-   [組み込みの音声入力（実験的機能）](#_built-in-dictation-across-vs-code-experimental): 「Speech」拡張機能をインストールしなくても、チャット、エディタ、ターミナルで音声入力を行えます。
    
-   [ハイブリッド Markdown エディタ（実験的機能）](#_hybrid-markdown-editor-experimental): 「エージェント」ウィンドウ内で Markdown ファイルを表示、編集し、エージェントが処理可能なコメントを追加できます。
    

プログラミングを楽しんでください！

* * *

VS Codeは全ユーザーに向けて段階的に展開されています。VS Codeの**「更新を確認」**を使用して、すぐに最新バージョンを入手してください。

新機能をいち早く試したい場合は、[**ナイトリー版 Insiders ビルドをダウンロード**](https://code.visualstudio.com/insiders)してください。このビルドには、最新アップデートが利用可能になり次第、すぐに反映されます。

* * *

## エージェント

### エージェントホスト

過去数回のリリースでも触れた通り、VS Code におけるエージェント セッションの仕組みを、エージェント ホストを中心に再構築しています。エージェント ホストとは、[エージェント ホスト プロトコル](https://microsoft.github.io/agent-host-protocol/) （AHP）に基づいて、Copilot、Claude、Codex などのエージェント・ハーネスを実行する専用プロセスです。セッションは独自のプロセス内で実行されるため、同じセッションに複数の VS Code ウィンドウから同時に接続し、表示することができます。エージェント・ホストの Copilot エージェントは、[Copilot SDK](https://www.npmjs.com/package/@github/copilot-sdk) によって駆動されており、その動作や機能は Copilot CLI、スタンドアロンの GitHub Copilot アプリ、およびその他の Copilot 製品と整合しています。

現在、エージェントホストの開発を積極的に進めており、ユーザーへの提供を段階的に拡大しています。この機能を利用するには、chat.agentHost.enabled を有効にし、[VS Code で開く](VS Code で開く) [Insiders](Insiders) を選択してください。この設定は組織によって管理される場合があります。変更するには、管理者に連絡してください。ORG を選択し、ハーネスドロップダウンからエージェントホストハーネスを選択します。 以下のスクリーンショットは、エディタウィンドウ内のエージェントホストで `Copilot` ハーネスを選択する方法を示しています:

![エディタウィンドウ内のハーネス・ドロップダウンを示すスクリーンショット。](/assets/updates/1_131/agent-host-harness-dropdown-editor.webp)

詳細については、[VS Code エージェントホストのアーキテクチャに関するドキュメント](https://code.visualstudio.com/docs/agents/concepts/agent-host)をご覧ください。 フィードバックやご要望がございましたら、[イシューを登録](https://github.com/microsoft/vscode/issues)してご報告ください。

### サブエージェントの実行に関する詳細情報（[Agents]ウィンドウ）

複雑なタスクを処理する際、エージェントはタスクを[サブエージェント](https://code.visualstudio.com/docs/agents/concepts/agents#_subagents)に委譲し、独自のコンテキストウィンドウ内で並行して実行させることができます。 これにより、実行中のサブエージェントの会話画面を開かなくても、その動作状況をすばやく確認できるようになりました。「エージェント」ウィンドウのメイン会話画面では、実行中の各サブエージェントについて以下の情報が表示されます：

-   サブエージェントが使用しているモデル
-   サブエージェントの実行時間
-   サブエージェントが現在呼び出しているツール

実行中のサブエージェントを選択すると、別のチャットでその会話が開かれ、親の会話にアクセスしたまま、サブエージェントの進行状況を詳細に確認できます。

## チャット

### VS Code ペット (実験的機能)

VS Code 内で、新しい実験的なペットが発見されました！チャットに `/vscode-pet` と入力して、新しい相棒と出会ってみてください。

## エディタ体験

### VS Code 全体での組み込みディクテーション（実験的機能）

**設定**: dictation.enabled VS Code で開く VS Code Insiders で開く この設定は組織によって管理される場合があります。 変更するには、管理者に連絡してください。ORG、dictation.showTranscript VS Code で開く VS Code Insiders、dictation.experimental.llmCleanup VS Code で開く VS Code Insiders

VS Code で音声入力機能を使用するために、VS Code Speech 拡張機能をインストールする必要はなくなりました。組み込みの文字起こしサービスは、チャット入力、テキストエディタ、統合ターミナルで動作し、それぞれの画面に適したリアルタイムのテキスト表示と操作機能が提供されます。 1 つの音声セッションとマイクの選択設定は 3 つの画面すべてで共有されるため、録音の重複を防ぎ、ディクテーションで入力されたテキストを意図した場所に保持できます。

組み込みのディクテーション機能は、プライベートでオフラインのNemotronモデルを使用します。このモデルは初回使用時にダウンロードされ、音声データはデバイス内に保存されます。

dictation.showTranscript（VS Codeで開く、VS Code Insidersで開く）を使用すると、ディクテーション中にリアルタイムの文字起こしを表示するかどうかを制御できます。 dictation.experimental.llmCleanup を有効にすると（VS Code で開く | VS Code Insiders で開く）、Copilot は話している最中に書式を追加したり、つなぎ言葉を削除したりして、文字起こし内容を精緻化します。文字起こしテキストは、クリーンアップのために言語モデルに送信されます。クリーンアップが利用できない場合、VS Code は生の文字起こし内容を保持します。

#### 対応プラットフォーム

組み込みのディクテーションでは、以下のプラットフォームがサポートされています:

-   Windows x64 および Arm64
-   Apple Silicon 搭載の macOS
-   glibc 2.34 以降を搭載した Linux x64 および Arm64
-   リモートワークスペース（文字起こし処理はローカルの VS Code クライアント上で実行されるため）

現在、組み込みのディクテーションでは以下のプラットフォームはサポートされていません：

-   VS Code for the Web
-   Intel ベースの Mac、32 ビットシステム、および Arm32 システム

さらなるプラットフォームや言語への対応は現在進行中です。

### ハイブリッド Markdown エディタ（実験的機能）

**設定**: workbench.editor.markdownDefaultEditorInAgentsWindow VS Code で開く VS Code Insiders で開く

今回のリリースでは、エージェントウィンドウに新しいハイブリッド Markdown エディタを導入しました。これにより、Markdown ファイルを表示したり、その場で編集したり、エージェントが処理できるコメントを追加したりできます。

**「Reopen Editor With」**を使用することで、エージェントウィンドウおよびエディターウィンドウの両方で、テキストエディターとこの新しいMarkdownエディターを切り替えることができます。

## アクセシビリティ

### ターミナルでのスクリーンリーダーの更新をより細かく制御

**設定**: terminal.integrated.accessibleViewPreserveCursorPosition VS Code で開く VS Code で開く Insiders

スクリーンリーダーのユーザーは、コマンドによる出力が継続している間も、自分のペースでターミナルの出力を読み取ることができます。terminal.integrated.accessibleViewPreserveCursorPosition VS Code で開く VS Code Insiders で開く を `always` に設定すると、新しいコンテンツが到着した場合でも、ターミナルの [アクセシブルビュー](https://code.visualstudio.com/docs/configure/accessibility/accessibility#_accessible-view) 内でカーソル位置が維持されます。 既存の `true` および `false` の値も引き続き機能します。

ターミナルのライブ更新では、強引なアラートではなく、中断しない ARIA ステータス告知が使用されます。他の音声出力を繰り返し中断することなく、スクリーンリーダーで出力を引き続き利用できます。

## ターミナル

### ターミナルのサイズ変更時の寸法オーバーレイを制御する

**設定**: terminal.integrated.resizeDimensionsOverlay.enabled VS Code で開く VS Code で開く Insiders

ターミナルのサイズ変更時に、列×行のオーバーレイが邪魔に感じる場合は、`terminal.integrated.resizeDimensionsOverlay.enabled`（VS Code で開く VS Code で開く Insiders）設定でこれを無効にできます。オーバーレイはデフォルトで有効になっており、設定の変更は再起動なしで、開いているターミナルに即座に反映されます。

![ターミナルのサイズ変更時に、現在の列数と行数を示すオーバーレイがターミナルの中央に表示されるスクリーンショット。](/assets/updates/1_131/terminal-resize-overlay.webp)

## 言語

### Python

Python Environments は、VS Code Stable および Insiders において、ロールアウトが全ユーザーの 100% に到達した後、デフォルトの環境管理機能となりました。[Python Environments のロールアウトの詳細と追跡情報](https://github.com/microsoft/vscode-python-environments/issues/581)をご確認ください。

Python プロジェクトの起動が高速化され、環境の更新にかかる時間が短縮されます。Conda の検出は必要な時まで延期され、並行して行われる環境スキャンが統合され、完全な更新が進行中でも Pylance は最後に認識されたインタプリタを使用できるようになります。 _[#1600: Conda マネージャーの遅延登録](https://github.com/microsoft/vscode-python-environments/pull/1600)、[#1598: 同じキーを持つ並行ネイティブファインダーの更新を統合](https://github.com/microsoft/vscode-python-environments/pull/1598)、[#1607: getEnvironmentがタイムアウトした際に最後に認識された環境を返す](https://github.com/microsoft/vscode-python-environments/pull/1607)_

## 非推奨の機能と設定

なし

## 謝辞

`vscode`への貢献：

-   [@accnops (Arthur Cnops)](https://github.com/accnops): voice: パッシブな ptt_start を標準的なハンズフリーナレーションの修正とする [PR #326405](https://github.com/microsoft/vscode/pull/326405)
-   [@bwateratmsft (Brandon Waterloo \[MSFT\])](https://github.com/bwateratmsft): 拡張機能がインストール済みかつ有効化されているかどうかを検出するための when 節コンテキストキーを追加 [PR #326814](https://github.com/microsoft/vscode/pull/326814)
-   [@Kaidesuyoo (Kaidesuyo)](https://github.com/Kaidesuyoo): モダン UI スタイルに起因するパフォーマンスの退行を修正 [PR #325985](https://github.com/microsoft/vscode/pull/325985)
-   [@mirimadahmed (Mir)](https://github.com/mirimadahmed): 回帰現象における音声割り込みの修正 [PR #326611](https://github.com/microsoft/vscode/pull/326611)
-   [@piyushmadan (Piyush Madan)](https://github.com/piyushmadan): ファミリーフォールバックの前に、正確なCAPI IDによる実行サブエージェントモデルの解決 [PR #324859](https://github.com/microsoft/vscode/pull/324859)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   修正: abstractTaskService におけるメモリリーク [PR #326934](https://github.com/microsoft/vscode/pull/326934)
    -   修正: abstractRuntimeExtensionsEditor のメモリリーク [PR #326890](https://github.com/microsoft/vscode/pull/326890)
    -   修正: terminalProcessManager におけるメモリリーク [PR #326930](https://github.com/microsoft/vscode/pull/326930)
    -   修正: debugModel におけるメモリリーク [PR #327047](https://github.com/microsoft/vscode/pull/327047)
    -   修正: terminalService におけるメモリリーク [PR #327156](https://github.com/microsoft/vscode/pull/327156)
    -   修正: mainThreadTerminalService におけるメモリリーク [PR #327155](https://github.com/microsoft/vscode/pull/327155)
-   [@SixFive7 (Jori Huisman)](https://github.com/SixFive7): Windows タスクバーのジャンプリストで Explorer の `minItems` を反映 [PR #318117](https://github.com/microsoft/vscode/pull/318117)
-   [@soreavis](https://github.com/soreavis): Git - 「変更を開く」／「ファイルを開く」時のアクティブなノートブックを特定 [PR #326468](https://github.com/microsoft/vscode/pull/326468)

### 課題追跡

課題追跡への貢献：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

* * *

新機能が利用可能になり次第、すぐに試してくださる皆様に心より感謝いたします。ぜひ定期的にこのページをチェックして、新機能についてご確認ください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [更新情報](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
