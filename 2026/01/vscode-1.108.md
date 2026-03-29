---
product: VSCode
version: 1.108.0
release_title: December 2025 (version 1.108)
release_date: 2026-01-08
source_url: "https://code.visualstudio.com/updates/v1_108"
archived_at: 2026-03-29
---

# December 2025 (version 1.108)

# 2025年12月（バージョン 1.108）

_リリース日：2026年1月8日_

**アップデート 1.108.1**: このアップデートでは、以下の[問題](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aclosed+milestone%3A%22December+2025+Recovery+1%22+)が修正されています

**アップデート 1.108.2**: このアップデートでは、以下の[問題](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aclosed+milestone%3A%22December+2025+Recovery+2%22+)が修正されています

ダウンロード: Windows: [x64](https://update.code.visualstudio.com/1.108.2/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.108.2/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.108.2/darwin-universal/stable) [Intel](https://update.code.visualstudio.com/1.108.2/darwin/stable) [silicon](https://update.code.visualstudio.com/1.108.2/darwin-arm64/stable) | Linux: [deb](https://update.code.visualstudio.com/1.108.2/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.108.2/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.108.2/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.108.2/linux-snap-x64/stable)

* * *

Visual Studio Code 2025年12月版へようこそ。

![リリース画像のプレースホルダー](/assets/updates/1_108/release-highlights.webp)

例年通り、 12月は、チームが各リポジトリのGitHubイシューやプルリクエストの整理に注力する時期です。今年は、未解決のイシューを6,000件近く削減し、さらに1,000件以上をトリアージすることができました。

こうした整理作業に加え、VS Codeのさまざまな領域でいくつかの改善や機能アップデートも行いました。

プログラミングを楽しんでください！

 

> このリリースノートをオンラインで読みたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。  

> **Insiders: 新機能をいち早く試してみたいですか？**  
> ナイトリー版のInsidersビルドをダウンロードすれば、最新の更新プログラムが利用可能になり次第、すぐに試すことができます。  
> [Insidersのダウンロード](https://code.visualstudio.com/insiders)  

## エージェント

### エージェントスキル (実験的機能)

**設定**: chat.useAgentSkills VS Codeで開く VS Codeで開く Insiders

VS Codeは現在、**エージェントスキル**をサポートしており、コーディングエージェントに新しい機能を教えたり、ドメイン固有の知識を提供したりできるようになりました。エージェントスキルとは、GitHub Copilotが関連する際に読み込んで特殊なタスクを実行できる、指示、スクリプト、リソースのフォルダーです。

スキルは、スキルの動作を定義する `SKILL.md` ファイルを含むディレクトリに保存されます。VS Code は、ワークスペース内の `.github/skills` フォルダー（下位互換性のため `.claude/skills/` も対象）からスキルを自動的に検出します。その後、リクエストに関連する場合に、チャットコンテキストにオンデマンドで読み込まれます。

Agent Skills のサポートを有効にするには、chat.useAgentSkills [VS Code で開く] [VS Code Insiders] 設定を有効にしてください。

スキルの作成と使用方法の詳細については、[Agent Skills ドキュメント](https://code.visualstudio.com/docs/copilot/customization/agent-skills) をご覧ください。

### エージェント セッション ビューの改善

今回のイテレーションでは、エージェント セッション ビューをさらに改善し、以下の機能強化を行いました：

-   アーカイブ、状態の確認、セッションの開くなどの操作に対するキーボード操作のサポート
-   並べて表示する際、状態と経過時間に基づくセッションのグループ化
-   セッションに関連する変更されたファイルおよび関連するプルリクエスト（PR）情報の提供
-   新しいグループセクションから複数のセッションを一度にアーカイブする機能のサポート
-   アクセシビリティ全般の改善

![セッションの変更されたファイルおよび関連するプルリクエストを表示したエージェント セッション ビューのスクリーンショット。](/assets/updates/1_108/agentsessions-trimmed.png)

> **注**: chat.viewSessions.orientation VS Codeで開く VS Codeで開く Insidersでは、`auto`オプションが提供されなくなりました。代わりに`sideBySide`を使用してください。

## チャット

### チャットピッカーはエージェントセッションに基づいています

チャットセッションのクイックピックは、エージェントセッションビューと同じ情報に基づいて表示されるようになりました。そこから過去のチャットセッションにアクセスし、アーカイブ、名前の変更、削除などの操作を行うことができます。

![エージェント セッションのリストを表示するチャット クイック ピッカーのスクリーンショット。](/assets/updates/1_108/agent-picker.png)

> **注**: エージェント セッションには、クイック オープン コントロール (⌘P (Windows、Linux: Ctrl+P)) に `agent` と入力してアクセスすることもできます。

### チャット タイトルの改善

アクティビティバーの設定に関わらず、チャットビューのタイトルコントロールが表示されるようになりました。以前は、デフォルトのアクティビティバー設定でのみ表示されていました。

あるセッションから別のセッションへ素早く移動するには、チャットタイトルを選択してセッションのクイックピックを開き、別のセッションを選択してください。

![チャットタイトルコントロールのスクリーンショット。](/assets/updates/1_108/agent-title.png)

### 再起動時に空のチャットを開く

**設定**: chat.restoreLastPanelSession VS Codeで開く VS Codeで開く Insiders

今後、VS Codeを再起動しても、以前のチャットセッションは自動的に復元されなくなります。代わりに、空のチャットビューが表示され、そこから「エージェントセッション」コントロールを使用して以前のセッションにアクセスできるようになります。

この動作は、chat.restoreLastPanelSession 設定で変更できます。VS Code で開く VS Code Insiders で開く

### ターミナルツールのデフォルトルールの自動承認

**設定**: chat.tools.terminal.enableAutoApprove VS Code で開く VS Code Insiders で開く この設定は組織レベルで管理されます。変更するには、管理者にお問い合わせください。ORG, chat.tools.terminal.autoApproveWorkspaceNpmScripts VS Codeで開く VS Codeで開く Insiders

ターミナルの自動承認が有効になっている場合（ chat.tools.terminal.enableAutoApprove VS Codeで開く VS Codeで開く Insiders この設定は組織レベルで管理されます。変更するには管理者に連絡してください。ORG）、以下のコマンドはデフォルトで自動的に承認されるようになりました：

-   `git ls-files`
-   `git --no-pager <safe_subcommand>`
-   `git -C <dir> <safe_subcommand>`
-   `rg` (`--pre` および `--hostname-bin` を除く)
-   `sed` (一部の引数および使用パターンを除く)
-   `Out-String`

さらに、`package.json`内に含まれている場合、`npm`、`pnpm`、または`yarn`を通じて実行されるnpmスクリプトは、デフォルトで自動的に承認されるようになりました。これは、エージェントの使用にはすでにWorkspace Trustが必要であるためであり、エージェントが`package.json`のような機密ファイルを編集できないように保護するためです。これはchat.tools.terminal.autoApproveWorkspaceNpmScripts VS Codeで開く VS Code Insidersで開く .

自動承認の透明性を高めるため、デフォルトまたはカスタムルールによって明示的に拒否された場合に、情報メッセージが表示されるようになりました：

![ルールによる自動承認の拒否後、表示されるメッセージ](/assets/updates/1_108/terminal-tool-deny.png)

### 将来のターミナルツールコマンドに向けたセッションおよびワークスペースルールの追加

[許可] ドロップダウン内の許可されたコマンドまたはコマンドライン入力には、現在のセッションまたはワークスペースに対してそれらを許可する対応するアクションのオプションが追加されました。

![ターミナルツールの [許可] ドロップダウンのスクリーンショット。現在のセッションまたはワークスペースに対してコマンドを許可するオプションが表示されています。](/assets/updates/1_108/terminal-tool-allow-dropdown.png)

### ターミナルツールによるシェル履歴への追加防止

**設定**: chat.tools.terminal.preventShellHistory VS Codeで開く VS Code Insidersで開く

シェル統合が有効かつ正常に動作している場合、ターミナルツールで実行されたコマンドは、bash、zsh、pwsh、fishのシェル履歴に含まれなくなります。この処理方法はシェルごとに異なります。例えばbashの場合、`HISTCONTROL=ignorespace`が設定され、実行されるコマンドの先頭にスペースが追加されます。

ターミナルツールのコマンドをシェル履歴に残したい場合は、chat.tools.terminal.preventShellHistory VS Codeで開く VS Code Insidersで開く 設定で構成してください。

## アクセシビリティ

### アクセシブルビューでのチャット応答のストリーミング

アクセシブルビューでは、チャット応答が生成されるたびに動的にストリーミングされるようになりました。以前は、更新されたコンテンツを確認するためにアクセシブルビューを閉じて再表示する必要がありました。現在は、アクセシブルビューを開いたまま出力をリアルタイムで監視できるため、AIの応答をリアルタイムで追うことが格段に容易になりました。

### アクセシブルビューからMCPサーバー出力を除外

不要な情報を減らすため、MCP（Model Context Protocol）サーバーの出力は、デフォルトでアクセシブルビューから除外されるようになりました。標準のチャット出力は、スクリーンリーダーと互換性のあるテキストエリアに表示されるため、引き続き完全にアクセス可能です。

### ウィンドウタイトル内の言語ID変数

`${activeEditorLanguageId}`という新しい変数が、`window.title`設定で使用可能になりました。この変数は、現在アクティブなエディタの言語識別子を表示します。これは、適切な音声コマンドを有効にするために現在のプログラミング言語を特定する必要があるTalonなどのアクセシビリティツールにとって有用です。

```
"window.title": "${activeEditorLanguageId} - ${activeEditorShort}"
```

## エディタ体験

### ドラッグ＆ドロップによるプロファイルのインポート

`.code-profile` ファイルを VS Code にドラッグ＆ドロップすることで、設定プロファイルをインポートできるようになりました。これにより、チームメイトとのプロファイル共有や、新しい環境の迅速なセットアップが容易になります。

ファイルをドロップすると、プロファイルエディタが開き、プロファイルのプレビューとインポートが可能になります。これは、`.code-workspace` ファイルをドラッグ＆ドロップしてワークスペースを開く操作と同様の体験を提供します。

### ブレッドクラムパスのコピー

**設定**: breadcrumbs.symbolPathSeparator VS Codeで開く VS Code Insidersで開く

**ブレッドクラムパスのコピー**コマンドを使用して、ブレッドクラムパスをクリップボードにコピーできるようになりました。 これは、シンボルの正確な場所をチームと共有したり、ドキュメント作成の目的で使用したりする際に便利です。

![「ブレッドクラムパスをコピー」コマンドのスクリーンショット。](/assets/updates/1_108/breadcrumbs_copy_path.png)

breadcrumbs.symbolPathSeparator 設定（VS Code で開く VS Code Insiders で開く）を使用すると、ブレッドクラムの各セグメントを結合する区切り文字をカスタマイズできます。

### ワークスペース内のシンボルへ移動：クエリでの特殊文字のサポート

**ワークスペース内のシンボルへ移動** (⌘T (Windows、Linux: Ctrl+T)) 機能では、検索クエリに `#` 文字が含まれている場合に、すべての結果が誤って除外されることがなくなりました。

この修正により、rust-analyzer などの言語拡張機能で、シンボル検索の修飾子として `#` を使用できるようになりました。たとえば、rust-analyzer では、`main#` のようなクエリに `#` を追加することで、現在のワークスペース内のみの関数を検索できます。

## コード編集

### 新しいスニペット変換

`snakecase` と `kebabcase` の 2 つの新しいスニペット変換が利用可能になりました。使用方法は以下の通りです。

snake\_case 変換の場合：

```
${TM_FILENAME/(.*)/${1:/snakecase}/}
```

これにより、ファイル名がスネークケース形式に変換されます。例えば、`MyFileName.txt` から `my_file_name.txt` になります。ケバブケース変換の場合は `my-file-name.txt` となります。

## ソース管理

### Git blame 情報の設定

**設定**: git.blame.ignoreWhitespace VS Codeで開く VS Code Insidersで開く , git.blame.editorDecoration.disableHover VS Codeで開く VS Code Insidersで開く

新しい設定 `git.blame.ignoreWhitespace` VS Codeで開く VS Code Insidersで開く を使用すると、Git blameにおいて、行が最後に変更されたコミットを特定する際に空白の変更を無視するように設定できます。 これは、コードの書式が再調整された場合などに特に有用であり、単なる空白の調整ではなく、実際に機能的な変更を加えたコミットを特定するのに役立ちます。

さらに、git.blame.editorDecoration.disableHover VS Codeで開く VS Code Insidersで開く 設定を使用すると、Git blameのエディタ装飾にカーソルを合わせたときに表示されるホバーツールチップを無効にできます。これは、よりすっきりとした編集環境を好み、追加のホバー情報なしでインラインのblame注釈のみを表示したい場合に役立ちます。

### エディタを使用したコミットメッセージの作成

以前、フルエディタを使用して [コミットメッセージを作成する](https://code.visualstudio.com/docs/sourcecontrol/staging-commits#_use-the-editor-for-commit-messages) 機能を追加しましたが、エディタのタイトルツールバーでは、コミットやキャンセルを行うアクションが見つけにくい状態でした。 そこで、エディタの右下隅にあるエディタオーバーレイコントロールを改良し、これらの操作をそこに移動することで、使いやすさを向上させました。

### 「ソースコントロールリポジトリ」ビューのワークツリー（実験的機能）

**設定**: scm.repositories.explorer VS Codeで開く VS Code Insidersで開く , scm.repositories.selectionMode VS Codeで開く VS Code Insidersで開く

今回のマイルストーンでは、**ソースコントロールリポジトリ**ビューに**ワークツリー**ノードを追加しました。このノードの下には、リポジトリのワークツリー一覧が表示され、ワークツリーを新しいウィンドウで開くためのインラインアクションが用意されています。コンテキストメニューには、ワークツリーを現在のウィンドウで開くアクションや、ワークツリーを削除するアクションも含まれています。

![「ソースコントロールリポジトリ」ビューの「ワークツリー」ノードとワークツリーのリストを示すスクリーンショット](/assets/updates/1_108/repository-explorer-worktrees.png)

実験的なリポジトリエクスプローラーを有効にするには、scm.repositories.selectionMode（VS Code Insiders）および scm.repositories.explorer（VS Code Insiders）の設定を有効にしてください。ぜひお試しいただき、リポジトリエクスプローラーに表示してほしいその他のリポジトリアーティファクトについてご意見をお聞かせください。

[VS Code でのソース管理の使用方法](https://code.visualstudio.com/docs/sourcecontrol/overview)について詳しくはこちらをご覧ください。

## ターミナル

### ターミナル IntelliSense のデフォルト UX の見直し

過去 2 回のリリースにおいて、すべての VS Code Stable ユーザー向けにターミナル IntelliSense を導入しました。フィードバックの多くは肯定的なものでしたが、一部のユーザー（主にターミナルのパワーユーザー）からは、この機能によってこれまでの操作習慣が崩れることを好まないという声が寄せられました。多くの議論を経て、デフォルト設定の一部を変更し、機能の発見性を向上させ、インラインでの設定をより簡単に行えるようにすることにしました。

機能自体は依然としてデフォルトで有効ですが、入力時に自動的にコントロールが表示される（クイック提案やトリガー文字による提案）のではなく、Ctrl+Space キーを押して明示的に起動する必要があるようになりました。

また、下部の「ステータスバー」も改善しました。以前は、左側に「挿入」、右側に「詳細/設定」と関連するキーバインドが表示されていました。これらが操作可能であることが分かりにくいというフィードバックを受けたため、現在は右側にアイコンを表示し、キーバインドは表示しないようにしました。左側のアクションでは、 これにより、ステータスバーが表示された際の Tab キーや Enter キーの動作が決まります。右側には新しい目のアイコンが追加され、これをクリックするとクイック提案や入力時の提案機能が再び有効になります。

![選択モードの設定や入力時の提案表示のオン/オフを切り替えるボタンが表示された、提案ステータスバーのスクリーンショット。](/assets/updates/1_108/terminal-suggest.png)

最後に、この強力な機能を押し付けがましくなく、かつ比較的見つけやすくするために、ターミナルを開いた際にヒントが表示され、サジェストの表示方法を説明します。ヒントのライフサイクルは簡素化されており、エディタと同様の機能と同様に、「表示しない」をクリックするだけで簡単に完全に非表示にできます。

![ターミナルを開いた際に表示されるヒントのスクリーンショット。ここでは「候補を表示」の起動方法が説明されています。](/assets/updates/1_108/terminal-initial-hint.png)

このUXの再設計に加え、ターミナルのIntelliSenseにも以下の改善が施されました：

-   macOS/Linuxで実行権限のあるファイルを表示するようになりました
-   `npm` および `git` の補完機能を改善しました
-   ファイルおよびフォルダの候補の検証機能を改善しました
-   レイアウトのオーバーフローを防ぐため、候補の詳細表示の高さを制限しました
-   ターミナルビューを移動または再配置しても、候補が正しく機能し続けるようにしました

### パフォーマンスと安定性の改善

今回のリリースでは、ターミナルにおいていくつかの重要なパフォーマンスおよび安定性の改善が行われました：

-   [node-pty#831](https://github.com/microsoft/node-pty/pull/831)：macOSおよびLinuxにおいて、50文字以上を一度に貼り付けたり、Copilotで大規模なコマンドを実行したりしても、処理が制限されることはなくなり、基本的に瞬時に適用されるようになりました。これは、KB/MB単位のデータを扱う他のターミナルと同様のスケーリングを実現しています。 これにより、macOSで同様の操作を行った際に発生していたクラッシュも修正されました。
-   [vscode#285031](https://github.com/microsoft/vscode/issues/285031), [vscode#285032](https://github.com/microsoft/vscode/issues/285032), [xterm.js#5548](https://github.com/xtermjs/xterm.js/issues/5548): エディタの動作が重くなる原因となっていた、いくつかのレイアウトのスラスティング問題を修正しました。
-   [vscode#239541](https://github.com/microsoft/vscode/issues/239541): ターミナルで CommitMono などのフォントが設定されている場合に発生する可能性のあるクラッシュを修正しました。

### より包括的なカスタムグリフ

ターミナルの GPU アクセラレーション対応レンダラー（デフォルトで有効）は、以前からボックス描画、ブロック要素、および Powerline シンボルのサブセットに対してカスタムグリフをサポートしていました。これにより、フォントを設定しなくてもこれらの文字を表示でき、行高や文字間隔に合わせてスケーリングされ、互いに完全に整列するようになります。

今回のリリースでは、 他のターミナルでサポートされているカスタムグリフの大部分を追加することで、サポートされる文字数を約800文字に拡大しました。これには、ターミナルで一般的に有用な範囲、具体的には以下の範囲が含まれます：

-   ボックス描画 (`U+2500`\-`U+257F`)
-   ブロック要素 (`U+2580`\-`U+259F`)
-   点字パターン (`U+2800`\-`U+28FF`)
-   Powerline シンボル (`U+E0A0`\-`U+E0D4`、プライベートユース領域)
-   進行状況インジケーター (`U+EE00`\-`U+EE0B`、プライベートユース領域)
-   Git ブランチシンボル (`U+F5D0`\-`U+F60D`、プライベートユース領域)
-   レガシーコンピューティング用シンボル (`U+1FB00`\-`U+1FBFF`)

以下は、全グリフセットのビジュアルです：

![フォントを必要とせずにレンダリングされる、約800個のカスタムグリフ全セットのスクリーンショット。](/assets/updates/1_108/terminal-custom-glyphs.png)

### カーリーアンダーラインの表示改善

VS Codeでは以前から[色やスタイルが適用されたアンダーライン](https://sw.kovidgoyal.net/kitty/underlines/)の解析と表示が可能でしたが、カーリーアンダーラインの表示には常に改善の余地がありました。これで、カーリーアンダーラインはエディタでの表示に非常に近い見た目になるはずです。

![ターミナル上のカーリーアンダーラインのスクリーンショット。以前より鮮明になり、エディタと同様にジグザグ状の見た目になっています。](/assets/updates/1_108/terminal-curly-underline.png)

bashで次のコマンドを実行して、実際に試してみてください：`echo -e '\x1b[4:3mCurly\x1b[0m \x1b[4:3m\x1b[58;5;1mRed\x1b[0m'`

### サイズ変更時の画面サイズオーバーレイ

[ghostty](https://github.com/ghostty-org/ghostty)の機能に着想を得て、ターミナルのサイズ変更時に現在の画面サイズ （列×行）を表示する短いオーバーレイを追加しました。これは、テストやその他の目的でターミナルを特定のサイズに変更したい場合に便利です。

![ターミナルのサイズ変更時に、現在の列数と行数が中央に表示されるオーバーレイのスクリーンショット。](/assets/updates/1_108/terminal-resize-overlay.png)

### 新しい VT 機能

ターミナルは、以下の VT 機能/シーケンスに対応するようになりました：

-   [同期出力](https://github.com/microsoft/vscode/issues/284592)：アプリケーションがターミナルでのレンダリングを一時停止し、更新をバッチ処理するために使用できます。これは、バッファの書き換え時にティアリングを防ぐのに特に役立ちます。
    
    -   DECRQM (`CSI ? 2026 $ p`)
    -   BSU (`CSI ? 2026 h`)
    -   ESU (`CSI ? 2026 l`)
-   [XTVERSION](https://github.com/microsoft/vscode/issues/285138) (`CSI > 0 q`): アプリケーションがターミナルに関する詳細情報を照会できるようにします。現在 VS Code が返す応答は「xterm.js」とそのバージョンです
    

## デバッグ

### ファイルごとにブレークポイントを整理

**設定**: debug.breakpointsView.presentation VS Codeで開く VS Code Insidersで開く

ブレークポイントを、ファイルごとにグループ化されたツリー形式で表示できるようになりました。これを有効にするには、debug.breakpointsView.presentation VS Codeで開く VS Code Insidersで開く を `tree` に設定してください。

![ファイルごとにツリー形式で整理されたブレークポイントが表示されたデバッグビューのスクリーンショット。](/assets/updates/1_108/debug-bp-tree.png)

## テスト

### 未カバレッジ領域への移動

テストカバレッジツールバーにナビゲーションボタンを追加し、未カバレッジのコード領域間を簡単に移動できるようになりました。コマンドパレットの **Test: Show Coverage Toolbar** コマンドを使用して、テストカバレッジツールバーの表示/非表示を切り替えることができます。

![カバレッジが不足している領域間を移動するためのナビゲーションボタンが表示されたテストカバレッジツールバーのスクリーンショット。](/assets/updates/1_108/coverage-navigation.png)

## 拡張機能への貢献

### GitHub Pull Requests

プルリクエストやイシューの作成、管理、作業を可能にする [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) 拡張機能の開発が進みました。新機能は以下の通りです：

-   プルリクエストの説明ウェブビューから、プルリクエストのベースブランチを変更できるようになりました。
-   プルリクエストの説明ウェブビューから、公開中のプルリクエストを下書きに変換できるようになりました。
-   新規のプルリクエストだけでなく、既存のプルリクエストに対しても説明文を生成できるようになりました。

このリリースの全内容については、[0.126.0の変更履歴](https://github.com/microsoft/vscode-pull-request-github/blob/main/CHANGELOG.md#01260) を確認し、このリリースの全内容をご確認ください。

## 拡張機能の開発

### プロンプトとリソース URI 用の新しい Quick Pick プロパティ

Quick Pick API には、対話型の選択インターフェースを作成するための 2 つの新しいプロパティが追加されました。

`QuickPick` の `prompt` プロパティを使用すると、入力ボックスの下に常時表示される説明テキストを表示できます。このテキストはユーザーが入力している間も表示されたままになるため、ガイダンスやコンテキストの提供に役立ちます。

```
const quickPick = vscode.window.createQuickPick();
quickPick.prompt = '開くファイルを選択してください';
quickPick.items = items;
quickPick.show();
```

`QuickPickItem`の`resourceUri`プロパティを使用すると、リソースURIからアイテムのプロパティを自動的に導出できます。指定された場合、VS Codeは以下を導出します：

-   ファイル名から `label`（空の文字列に設定されている場合）
-   ファイルパスから `description`（`undefined` または空の文字列に設定されている場合）
-   現在のファイルアイコンテーマから `icon`（`iconPath` が `ThemeIcon.File` または `ThemeIcon.Folder` に設定されている場合）

これは、ファイルやフォルダの選択インターフェースを構築する際に役立ちます。

```
const items: vscode.QuickPickItem[] = [
  {
    label: '',
    resourceUri: vscode.Uri.file('/path/to/app.ts'),
    iconPath: vscode.ThemeIcon.File
  },
  {
    label: '',
    resourceUri: vscode.Uri.file('/path/to/src'),
    iconPath: vscode.ThemeIcon.Folder
  }
];
```

## エンジニアリング

### 年末の整理

毎年恒例の12月の整理の一環として、私たちは管理しているすべてのリポジトリのGitHubイシューとプルリクエストの整理に多くの時間を費やしました。今年、 **未解決のイシューを5,951件削減し、さらに1,203件のイシューをトリアージ**することができました。

![VS Codeが管理するすべてのリポジトリのイシュー総数を示すグラフ。](/assets/updates/1_108/combined-graph.png)

![メンテナンス期間中にクローズされた未解決イシューの総数を示すグラフ。](/assets/updates/1_108/issue-reduction.png)

![メンテナンス作業中にトリアージされた未分類のイシューの総数を示すグラフ（クローズされたイシューを除く）。](/assets/updates/1_108/unknown-reduction.png)

改良されたトリアージツールと重複排除プロセスを活用することで、長期未処理や解決済みの課題を大幅にクローズすることができました。これにより、プロジェクトの管理が容易になり、ユーザーにとって最も影響力の大きい機能の開発に注力できるようになりました。VS Codeのメインリポジトリだけでも、2,872件の課題をクローズし、さらに1,697件をトリアージしました！

![microsoft/vscode のイシューグラフ。](/assets/updates/1_108/vscode-graph.png)

2025年6月には、Copilotがオープンソース化されたことも発表しました！これにより、関連するすべての課題もmicrosoft/vscodeリポジトリに提出されることになり、microsoft/vscode-copilot-releaseには処理すべき課題のバックログが残されていました。今月、私たちはこのリポジトリ内のすべての課題をトリアージし、1,659件の 件をクローズし、移行待ちの未解決イシューは175件のみとなりました。

![microsoft/vscode-copilot-releaseのイシューグラフ。](/assets/updates/1_108/vscode-copilot-release-graph.png)

以下は、当社のコア vscode リポジトリが長年にわたってどのように成長してきたか、そして素晴らしいコミュニティの皆様がこれまでにどれだけのイシューを寄せてくださったかを示すグラフです。長年にわたりリポジトリにイシューを投稿し、継続的にご協力いただいている皆様に心より感謝申し上げます。皆様からのフィードバックこそが、今日の VS Code を形作っています！ 🚀

![2018年から現在までの microsoft/vscode のイシュー履歴を示すグラフ。](/assets/updates/1_108/historical-vscode-graph.png)

### TypeScript での拡張機能開発 (実験的)

ビルド工程を必要とせずに、TypeScript で直接 VS Code 拡張機能を作成できるようになりました。これは機能しますが... ですが、まだ少し冒険的な要素が残っています！テストの記述や実行方法、拡張機能の公開方法、その他のワークフローに関する考慮事項など、多くの側面がまだ検証されていません。

この実験的なアプローチの詳細については、[こちらの GitHub コメント](https://github.com/microsoft/vscode/issues/263558#issuecomment-3656380346)をご覧ください。

## 主な修正点

-   [vscode#283356](https://github.com/microsoft/vscode/issues/283356) - チャット出力をスクロール中に位置が飛び跳ねる原因となっていた回帰バグを修正

## 感謝

`vscode`への貢献者：

-   [@abhijit-chikane (Abhijit Chikane)](https://github.com/abhijit-chikane): 修正: ホバーフォーカスの境界線が角で切れる問題 [PR #259548](https://github.com/microsoft/vscode/pull/259548)
-   [@alievilshat (Ilshat Aliyev)](https://github.com/alievilshat): \_shouldRenderHint ロジックにおける誤った否定処理を修正 [PR #242479](https://github.com/microsoft/vscode/pull/242479)
-   [@Andarist (Mateusz Burzyński)](https://github.com/Andarist): `TestInstantiationService#stub`のオーバーロードを簡素化 [PR #282223](https://github.com/microsoft/vscode/pull/282223)
-   [@anki-code (Andy Kipp)](https://github.com/anki-code): Xonshシェル型を追加 [PR #284044](https://github.com/microsoft/vscode/pull/284044)
-   [@aryla (Arttu Ylä-Outinen)](https://github.com/aryla): スティッキースクロールのホバーリスナーが積み重なる問題を修正 [PR #260020](https://github.com/microsoft/vscode/pull/260020)
-   [@AviVahl (Avi Vahl)](https://github.com/AviVahl): 修正：デフォルトのシステム等幅フォントへのフォールバックを確実にする [PR #282747](https://github.com/microsoft/vscode/pull/282747)
-   [@BartolHrg](https://github.com/BartolHrg): 複数のカーソルと空の選択範囲がある場合のコピーを修正 [PR #256083](https://github.com/microsoft/vscode/pull/256083)
-   [@Beace (Beace)](https://github.com/Beace): 修正: ターミナルの WebGL コンテキストにおけるメモリリークを修正 [PR #279579](https://github.com/microsoft/vscode/pull/279579)
-   [@bibaswan-bhawal (Bibaswan Bhawal)](https://github.com/bibaswan-bhawal): 修正(拡張機能): extensionButton.prominentBackground が有効になるように [PR #276788](https://github.com/microsoft/vscode/pull/276788)
-   [@chaitanyamedidar (Chaitanya Medidar)](https://github.com/chaitanyamedidar): 「スワイプで移動」設定の説明文が欠落していた問題を修正 #281997 [PR #282220](https://github.com/microsoft/vscode/pull/282220)
-   [@CyMad7001 (Cyril Madigan)](https://github.com/CyMad7001): #196344 - インストーラーのフリーズ問題を修正 [PR #228233](https://github.com/microsoft/vscode/pull/228233)
-   [@daiyam (Baptiste Augrain)](https://github.com/daiyam): 修正: バージョンが指定されている場合に拡張機能のIDを正しく渡すように修正 [PR #279630](https://github.com/microsoft/vscode/pull/279630)
-   [@eidriahn (Adrian Luca)](https://github.com/eidriahn): 修正: クイックピックチェックボックスにカーソルを合わせてもアイコンが表示されない問題を修正 [PR #285250](https://github.com/microsoft/vscode/pull/285250)
-   [@erezak (Erez Korn)](https://github.com/erezak): チャット: コマンドパレットから「エディタに適用」を非表示 [PR #283486](https://github.com/microsoft/vscode/pull/283486)
-   [@flying-sheep (Philipp A.)](https://github.com/flying-sheep): 修正: Git の LANGUAGE を設定 [PR #285410](https://github.com/microsoft/vscode/pull/285410)
-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray): ブレッドクラムのトグルオプションのラベルを標準化 (修正 #257550) [PR #284486](https://github.com/microsoft/vscode/pull/284486)
-   [@hickford (M Hickford)](https://github.com/hickford): 行の反転：選択範囲が1行の場合、ドキュメント全体に適用 [PR #257031](https://github.com/microsoft/vscode/pull/257031)
-   [@irengrig (Irina Chernushina)](https://github.com/irengrig): カーソル位置変更リスナーのインストールに伴うメモリリークの修正 [PR #267799](https://github.com/microsoft/vscode/pull/267799)
-   [@isksss (isksss)](https://github.com/isksss): 更新: VueファイルなどでMARKが使用できるよう修正 [PR #283583](https://github.com/microsoft/vscode/pull/283583)
-   [@izolotarev (Igor)](https://github.com/izolotarev): HSLの彩度における色検出を修正 [PR #266720](https://github.com/microsoft/vscode/pull/266720)
-   [@jakebailey (Jake Bailey)](https://github.com/jakebailey): 旧式のTSモジュールを名前空間に置き換え [PR #282862](https://github.com/microsoft/vscode/pull/282862)
-   [@jcpetruzza (Daniel Gorin)](https://github.com/jcpetruzza): debug: スレッド数が多い場合の「continue」操作による UI のフリーズを修正 [PR #283635](https://github.com/microsoft/vscode/pull/283635)
-   [@JeffreyCA](https://github.com/JeffreyCA): Azure Developer CLI (azd) の Fig 仕様を更新 [PR #281127](https://github.com/microsoft/vscode/pull/281127)
-   [@joeriddles (Joe Riddle)](https://github.com/joeriddles): スニペットの構文にスネークケースを追加 [PR #237110](https://github.com/microsoft/vscode/pull/237110)
-   [@josephxiao8 (Joseph Xiao)](https://github.com/josephxiao8): 「重複行の削除」実行後の最終選択範囲の表示 [PR #234799](https://github.com/microsoft/vscode/pull/234799)
-   [@junhaoliao (Junhao Liao)](https://github.com/junhaoliao): WordHighlighterのrunDelayerトリガーにおける未処理のエラーを抑制する。[PR #285887](https://github.com/microsoft/vscode/pull/285887)
-   [@kheif (Mehmet Ege Aydın)](https://github.com/kheif): workbench: エディタを先頭と末尾に移動するコマンドを追加 [PR #284999](https://github.com/microsoft/vscode/pull/284999)
-   [@kortin99 (Kortin Zhou)](https://github.com/kortin99): 機能(スニペット): スニペットの tmLanguage 構文でケバブケースのサポートを追加 [PR #222319](https://github.com/microsoft/vscode/pull/222319)
-   [@maynkxx (mayank choudhary)](https://github.com/maynkxx): ドキュメント: README内のTwitterのブランド表記をXに更新 [PR #280235](https://github.com/microsoft/vscode/pull/280235)
-   [@milanchahar (MILAN CHAHAR)](https://github.com/milanchahar): ターミナルアイコンピッカーの配置を修正 [PR #281275](https://github.com/microsoft/vscode/pull/281275)
-   [@mizdra (mizdra)](https://github.com/mizdra): `XDG_DATA_HOME`が設定されている環境で失敗していたテストを修正 [PR #285402](https://github.com/microsoft/vscode/pull/285402)
-   [@MohamedEmirHajji (Mohamed Emir HAJJI)](https://github.com/MohamedEmirHajji)
    -   補完機能にgit logオプションを追加 [PR #282311](https://github.com/microsoft/vscode/pull/282311)
    -   Markdownプレビュー：スクロール同期から非表示要素を除外（#281247の修正） [PR #282506](https://github.com/microsoft/vscode/pull/282506)
-   [@murataslan1 (Murat Aslan)](https://github.com/murataslan1)
    -   修正: 次/前の問題への移動時のスクロールのカクつきを回避 [PR #285634](https://github.com/microsoft/vscode/pull/285634)
    -   修正: ターミナルのタブ表示のライフサイクルハックを Event.once への置換 [PR #285657](https://github.com/microsoft/vscode/pull/285657)
    -   修正: ターミナルビューのライフサイクルハックを Event.once に置き換え [PR #285661](https://github.com/microsoft/vscode/pull/285661)
-   [@NriotHrreion (Norcleeh)](https://github.com/NriotHrreion): 修正: 新しいチャットにメッセージを送信した際、最新の入力が履歴に保存されない問題 [PR #282633](https://github.com/microsoft/vscode/pull/282633)
-   [@odinGitGmail (odinsam)](https://github.com/odinGitGmail): 修正(デバッグ): デバッグコンソールのリンクで C# スタックトレース形式をサポート [PR #281536](https://github.com/microsoft/vscode/pull/281536)
-   [@przpl](https://github.com/przpl): fix(runSubagent): 計算された添付データを収集 [PR #283750](https://github.com/microsoft/vscode/pull/283750)
-   [@rducom (Raphael DUCOM)](https://github.com/rducom): PowerShell プロンプト検出における ReDoS を修正 [PR #279853](https://github.com/microsoft/vscode/pull/279853)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
    -   TS/JSテンプレートの囲みブラケットを追加 [PR #255972](https://github.com/microsoft/vscode/pull/255972)
    -   PHPのインデントを修正 #248229 [PR #258016](https://github.com/microsoft/vscode/pull/258016)
    -   `modificationsIfAvailable` 時の FormatOnSave を修正 [PR #283726](https://github.com/microsoft/vscode/pull/283726)
    -   C言語における `# pragma` 折りたたみマーカーのサポート [PR #284927](https://github.com/microsoft/vscode/pull/284927)
-   [@remcohaszing (Remco Haszing)](https://github.com/remcohaszing): エディタの端をクリックした際の動作を修正 [PR #262964](https://github.com/microsoft/vscode/pull/262964)
-   [@Riya-chandra (RIYA\_CHANDRA)](https://github.com/Riya-chandra): コマンドパレットでコマンドの説明をツールチップとして表示 [PR #284609](https://github.com/microsoft/vscode/pull/284609)
-   [@SalerSimo (Simone Salerno)](https://github.com/SalerSimo)
    -   最近閉じたエディタの履歴からターミナルエディタを除外 [PR #282009](https://github.com/microsoft/vscode/pull/282009)
    -   MoveLinesCommand 内の仮想モデル作成ロジックのリファクタリング [PR #284785](https://github.com/microsoft/vscode/pull/284785)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   修正: ターミナルエディタのメモリリーク [PR #279088](https://github.com/microsoft/vscode/pull/279088)
    -   修正: ターミナルプロセスにおけるメモリリーク [PR #279167](https://github.com/microsoft/vscode/pull/279167)
    -   修正: ターミナルプロセスにおけるメモリリーク [PR #279172](https://github.com/microsoft/vscode/pull/279172)
    -   修正: アクセシビリティシグナルにおけるメモリリーク [PR #279242](https://github.com/microsoft/vscode/pull/279242)
    -   修正: ローカルプロセス拡張機能ホストのメモリリーク [PR #279351](https://github.com/microsoft/vscode/pull/279351)
    -   修正: 拡張機能アイコンウィジェットのメモリリーク [PR #280566](https://github.com/microsoft/vscode/pull/280566)
    -   修正: Markdown ホバー時のメモリリーク [PR #280745](https://github.com/microsoft/vscode/pull/280745)
    -   修正: デバッグセッション時のメモリリーク [PR #281767](https://github.com/microsoft/vscode/pull/281767)
    -   修正: ステータスバーのメモリリーク [PR #282246](https://github.com/microsoft/vscode/pull/282246)
    -   修正: IPCにおけるメモリリーク [PR #282253](https://github.com/microsoft/vscode/pull/282253)
    -   修正: チャットリストレンダラーのメモリリーク [PR #282560](https://github.com/microsoft/vscode/pull/282560)
    -   修正: ノートブックのコードスクロールにおけるメモリリーク [PR #283452](https://github.com/microsoft/vscode/pull/283452)
    -   修正: ターミナル検索ウィジェットにおけるメモリリーク [PR #283466](https://github.com/microsoft/vscode/pull/283466)
    -   修正: mainThreadLanguages におけるメモリリーク [PR #283498](https://github.com/microsoft/vscode/pull/283498)
    -   修正: チャットウィジェットにおけるメモリリーク [PR #284288](https://github.com/microsoft/vscode/pull/284288)
    -   修正: ターミナルチャットウィジェットのメモリリーク [PR #284325](https://github.com/microsoft/vscode/pull/284325)
    -   修正: コールスタックウィジェットのメモリリーク [PR #286246](https://github.com/microsoft/vscode/pull/286246)
-   [@sudip-kumar-prasad (Sudip Kumar Prasad)](https://github.com/sudip-kumar-prasad): 修正: コマンドプロンプトのデフォルトプロファイルアイコンに Codicon ID を使用 [PR #280967](https://github.com/microsoft/vscode/pull/280967)
-   [@tamuratak (Takashi Tamura)](https://github.com/tamuratak)
    -   修正: ChatWidget で finishedEditing が確実に呼び出されるように [PR #281763](https://github.com/microsoft/vscode/pull/281763)
    -   sedのin-placeオプション検出に大文字の `-I` を追加 [PR #284645](https://github.com/microsoft/vscode/pull/284645)
    -   ChatWidgetでの再編集時のコンテキスト処理を修正 [PR #285099](https://github.com/microsoft/vscode/pull/285099)
-   [@ThanhNguyxn (Thanh Nguyen)](https://github.com/ThanhNguyxn): 修正: 最大化かつ中央揃え時にパネルが閉じない問題を修正（#281772 を修正） [PR #281773](https://github.com/microsoft/vscode/pull/281773)
-   [@tharani-2006](https://github.com/tharani-2006): ターミナル: サイズ変更中に寸法オーバーレイを表示 [PR #284244](https://github.com/microsoft/vscode/pull/284244)
-   [@tt0mmy (Tommy)](https://github.com/tt0mmy): ターミナル候補設定における説明文の重複を修正 [PR #279730](https://github.com/microsoft/vscode/pull/279730)
-   [@yavanosta (Dmitry Guketlev)](https://github.com/yavanosta)
    -   EditContextがオフの際の逆方向選択を修正 [PR #273150](https://github.com/microsoft/vscode/pull/273150)
    -   InlineEditsView: textModelの再宣言を削除 [PR #281501](https://github.com/microsoft/vscode/pull/281501)
    -   SingleUpdatedNextEdit: 挿入変更を正しく適用 [PR #281519](https://github.com/microsoft/vscode/pull/281519)

`vscode-copilot-chat`への貢献:

-   [@AbdelrahmanAbouelenin (ababouelenin)](https://github.com/AbdelrahmanAbouelenin): VSCModelBのシステムプロンプトを更新。 [PR #2727](https://github.com/microsoft/vscode-copilot-chat/pull/2727)
-   [@bharatvansh (Ayush Singh)](https://github.com/bharatvansh): fix(byok): Geminiプロバイダーのエラー処理を改善し、テストを追加 [PR #2686](https://github.com/microsoft/vscode-copilot-chat/pull/2686)

`vscode-js-profile-visualizer`への貢献:

-   [@xiaoxiangmoe (ZHAO Jin-Xiang)](https://github.com/xiaoxiangmoe): メンテナンス: 不要な package-lock.json ファイルを削除 [PR #216](https://github.com/microsoft/vscode-js-profile-visualizer/pull/216)

### 課題管理

課題管理への貢献:

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@tamuratak (Takashi Tamura)](https://github.com/tamuratak)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

* * *

新機能がリリースされ次第、ぜひお試しいただければ幸いです。定期的にこのページをチェックして、最新情報をご確認ください。

> 過去の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
