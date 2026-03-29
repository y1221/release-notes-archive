---
product: VSCode
version: 1.106.0
release_title: October 2025 (version 1.106)
release_date: 2025-11-12
source_url: "https://code.visualstudio.com/updates/v1_106"
archived_at: 2026-03-29
---

# October 2025 (version 1.106)

# 2025年10月（バージョン 1.106）

_リリース日：2025年11月12日_

**アップデート 1.106.1**：このアップデートでは、以下の[問題](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aclosed+milestone%3A%22October+2025+Recovery+1%22+)

**アップデート 1.106.2**: このアップデートでは、以下の[問題](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aclosed+milestone%3A%22October+2025+Recovery+2%22+)が修正されています

**アップデート 1.106.3**: このアップデートでは、以下の [問題](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aclosed+milestone%3A%22October+2025+Recovery+3%22+)が修正されています

ダウンロード: Windows: [x64](https://update.code.visualstudio.com/1.106.3/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.106.3/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.106.3/darwin-universal/stable) [Intel](https://update.code.visualstudio.com/1.106.3/darwin/stable) [silicon](https://update.code.visualstudio.com/1.106.3/darwin-arm64/stable) | Linux: [deb](https://update.code.visualstudio.com/1.106.3/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.106.3/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.106.3/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.106.3/linux-snap-x64/stable)

* * *

Visual Studio Code 2025年10月リリースのご利用ありがとうございます。

![2025年10月リリースの主なハイライト（Agent HQ、セキュリティと信頼、優れたエディター体験）を示す画像。](/assets/updates/1_106/release-highlights.png)

このリリースでは、以下の3つの主要な分野で大幅な更新が行われています:

-   **Agent HQ** は、Copilot や OpenAI Codex からのローカルまたはリモートのエージェント セッションを、開始、監視、確認するための単一のビューです
-   **セキュリティと信頼性** により、制御を維持しつつ、より多くのタスクを AI に安心して委任できます
-   **優れたエディター体験**により、日々のコーディングがよりスムーズで楽しいものになります

[VS Code 1.106 リリースハイライト動画](https://www.youtube.com/live/IdPtTBbYOtw?si=hvIO0MP-H9nR_8F1&t=93)をご覧いただき、エンジニアによるこれらの機能の解説をお聞きください！

プログラミングを楽しんでください！

  

> オンラインでこのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。  

> **Insiders メンバーの方：新機能をいち早く試してみたいですか？**  
> ナイトリー Insiders ビルドをダウンロードすれば、最新の更新プログラムが利用可能になり次第、すぐに試すことができます。  
> [Insiders をダウンロード](https://code.visualstudio.com/insiders)  

## エージェント

### エージェント セッション ビュー

**設定**: chat.agentSessionsViewLocation VS Codeで開く VS Codeで開く Insiders

さまざまなコーディングエージェントにタスクを割り当てる際、アクティブなすべてのセッションを明確に把握しておくことが重要です。 「エージェント セッション」ビューは、アクティブなチャット セッションを一元管理できる場所を提供します。これには、VS Code 内のローカル セッションに加え、[Copilot コーディング エージェント](https://code.visualstudio.com/docs/copilot/copilot-coding-agent)、[GitHub Copilot CLI](https://github.com/features/copilot/cli/)、または [OpenAIのCodex](https://marketplace.visualstudio.com/items?itemName=OpenAI.chatgpt)などです。「エージェント セッション」ビューはデフォルトで有効化されており、chat.agentSessionsViewLocation 設定（VS Code Insiders）から管理できます。

デフォルトでは、「エージェント セッション」ビューには、ソースごとに分類されたすべてのアクティブなチャット セッションが一覧表示されます。このビューは、VS Code 内のローカル チャット セッションと、バックグラウンド エージェント セッションのセクションに分かれています：

![ ローカルチャットセッションや、Copilotコーディングエージェント、 Copilot CLI、Codexなどのコーディングエージェント](/assets/updates/1_106/agent-sessions-view.png)

すべてのプロバイダーのセッションを1つの統合ビューで表示したい場合は、chat.agentSessionsViewLocation Open in VS Code Open in VS Code Insiders 設定で `single-view` オプションを有効にできます。このオプションを有効にすると、Agent Sessions ビューが Secondary Side バーの「チャット」ビューの隣に移動し、チャットとセッション管理の切り替えが容易になります。

なお、統合ビューではまだすべての機能が利用可能なわけではありません。近い将来、このビューをデフォルトにするよう積極的に取り組んでいます。

また、Agent Sessions ビューでは検索機能（⌥⌘F（Windows、Linux では Ctrl+Alt+F））がサポートされるようになり、リスト内のセッションを簡単に見つけられるようになりました。

VS Code ドキュメントの [エージェント セッション ビュー](https://code.visualstudio.com/docs/copilot/chat/chat-sessions/#_agent-sessions-view) について詳しくはこちらをご覧ください。

### プラン エージェント

新しいプラン エージェントは、コードを記述する前に、開発者が複雑なタスクを段階的に分解するのに役立ちます。チャット ビューのエージェント ドロップダウンから **プラン** を選択して開始してください。多段階の実装に取り組む際、VS Code は確認のための質問を表示し、詳細な実装プランを生成します。このプランを最初に承認することで、すべての要件とコンテキストが事前に確実に把握されます。

実装前に、時間をかけて計画を練り直すことをお勧めします。要件の精緻化、スコープの調整、未解決の疑問への対応を繰り返し行うことで、強固な基盤を築くことができます。計画を承認すると、Copilot は VS Code 内でローカルに、または [クラウドエージェント](https://code.visualstudio.com/docs/copilot/copilot-coding-agent)、これにより開発プロセスに対する制御性と可視性が向上します。これにより、ギャップや決定漏れを早期に発見でき、手戻りを減らし、コード品質を向上させることができます。

また、チームの特定のワークフローやツールに合わせて、独自のカスタムプランエージェントを作成することも可能です。**「カスタムエージェントの設定」**メニューを使用して、組み込みのプランエージェントを起点としてコピーし、開発プロセスに合わせて計画スタイル、ツール、プロンプトをカスタマイズしてください。 [VS Code チャットでのプランニング](https://code.visualstudio.com/docs/copilot/chat/chat-planning) および [カスタムエージェントの作成](https://code.visualstudio.com/docs/copilot/customization/custom-agents) について詳しくは、こちらをご覧ください。

### クラウドエージェント

今回のリリースでは、エディター内のクラウドエージェントセッションに数多くの更新を行いました。

VS Code でのクラウドエージェント体験をよりネイティブなものにするため、Copilot コーディングエージェントの統合を GitHub Pull Request 拡張機能から Copilot Chat 拡張機能に移行しました。この統合により、ブラウザの「エージェントセッション」ビューから直接クラウドエージェントセッションを開くなど、VS Code と [GitHub Mission Control](https://github.com/copilot/agents) 間の移行や連携がよりスムーズになります。

### CLIエージェント

今回のリリースでは、[Copilot CLI](https://github.com/features/copilot/cli/) との初期統合も提供しています。チャットエディタや統合ターミナル内で、新しい CLI エージェントセッションを作成したり、既存のセッションを再開したりできます。

![新しいCLIエージェントセッションの作成や既存のセッションの再開オプションが表示されたCLIドロップダウンメニューのスクリーンショット。](/assets/updates/1_106/cli-dropdown.png)

CLIエージェントエディターでは、ターミナルと同様にCopilot CLIへメッセージを送信したり、モデルを切り替えたり、コンテキストを添付したりできます。

![CLIエージェントエディターと、Copilot CLIセッションが表示された統合ターミナルを示すスクリーンショット。](/assets/updates/1_106/cli-editor-and-terminal.png)

### エージェントへの委任

クラウドエージェントへの委任体験の向上に引き続き取り組んでいます。

チャットパネルからクラウドボタンを使用してエージェントに委任する場合、委任可能なエージェントの一覧が表示されます。また、CLIエディターやターミナルインスタンスで`/delegate`コマンドを使用することで、CLIからCopilotコーディングエージェントに委任することも可能です。

![CLIエージェントエディタからの委任を示すスクリーンショット。](/assets/updates/1_106/cli-delegate-editor.png)

### CLIエージェントの編集追跡

チャット編集セッションでは、Copilot CLIなどのバックグラウンドエージェントによる編集を追跡できるようになりました。「エージェントセッション」ビューからセッションを作成すると、インライン編集ピルとワーキングセットビューの両方で編集履歴を確認できるため、エージェントがワークスペースにどのような変更を加えているかを把握しやすくなります。

### チャットモードの名称が「カスタムエージェント」に変更

他の環境で使用されている用語との整合性を高めるため、VS Code 全体で「チャットモード」の名称が「カスタムエージェント」に変更されました。

![エージェントピッカーコントロールのスクリーンショット。](/assets/updates/1_106/agent-picker.png)

カスタムエージェントを作成すると、定義ファイルはワークスペース内の `.github/agents` に配置されるようになりました。これらのファイルは `.agents.md` という拡張子を使用でき、GitHub Copilot Cloud Agents や CLI Agents としても利用可能です。

**Chat: New Custom Agent...** を使用して新しいエージェントを作成し、**Chat: Configure Custom Agents...** を使用して管理します。

既存のカスタムチャットモード（`.github/chatmodes` 内の `.chatmode.md` ファイル）がある場合、それらは引き続き機能し、自動的にカスタムエージェントとして扱われます。 エディタでチャットエージェントファイルを開くと、1行目に情報マーカーが表示され、カスタムエージェントファイルへ移行するためのクイックフィックスが提示されます。

### カスタムエージェントのメタデータ

カスタムエージェントの `.agent.md` ファイルでは、エージェントが各環境でどのように動作すべきかを記述するための追加の `target` フロントマタープロパティが使用可能になりました：

-   `target: vscode`: ローカルチャット用にエージェントを最適化し、`name`、`description`、`argument-hint`、`model`、`tools`、`handoffs` プロパティを有効にします。VS Codeにインストールされているツールはすべて使用可能です。
-   `target: github-copilot`: Copilot クラウドエージェントまたは GitHub CLI 向けにエージェントを準備し、`name`、`description`、`tools`、`mcp-servers`、および `target` をサポートします。ツールとして `edit`、`search`、`shell`、`custom-agent`、および MCP サーバーのツールを使用できます。

すべてのエージェントは、すべての環境で実行可能です。各環境は、未知の属性やツールを無視します。

-   `name`: ファイル名を変更せずにエージェントのラベルを上書きできます。
-   `argument-hint`: チャット入力欄にガイダンスを表示し、チームメンバーがエージェントにどのようにプロンプトを送ればよいかを把握できるようにします。
-   `handoffs`: 他のエージェントへのガイド付き遷移を連携させ、多段階のワークフローを連鎖させることができます。

エージェントファイルエディタは、バリデーション、コード補完、ホバー、コードアクションを提供します。

![カスタムエージェントファイル編集時の検証機能を示すGIF。](/assets/updates/1_106/agent-file-editing.gif)

ドキュメントで[カスタムエージェントとエージェントのハンドオフ](https://code.visualstudio.com/docs/copilot/customization/custom-agents)について詳しくご覧ください。

## コード編集

### 差分エディタで削除されたコードが選択可能になりました

以前は、コードを削除して差分エディタで変更を確認しても、削除された行をコピーすることはできませんでした。今回のリリースでは、インライン差分ビューを使用する際、差分エディタ内の削除された行からテキストを選択してコピーできるようになりました。

### インライン提案機能のオープンソース化

今回のリリースは、VS CodeをオープンソースのAIエディタにするという私たちの取り組みを継続するものです。GitHub Copilot Chatのオープンソース化という最初のマイルストーンに続き、行単位の提案機能を vscode-copilot-chat リポジトリにマージし、オープンソース化しました。

このマイルストーンの一環として、GitHub Copilot 拡張機能と GitHub Copilot Chat 拡張機能を単一の拡張機能体験に統合しています。Chat 拡張機能は現在、すべてのインライン提案を提供しており、チャットやエージェントの機能を維持しつつ、これまでと同じインテリジェントなコード提案を提供します。 この変更はユーザーにとってシームレスに行われ、入力中にこれまでと同じコード提案を受け取ることができます。問題が発生した場合は、chat.extensionUnification.enabled [VS Codeで開く] [VS Codeで開く] [Insiders] 設定を使用して、一時的に以前の状態に戻すことができます。

GitHub Copilot 拡張機能は 2026 年初頭までに非推奨となります。このマイルストーンの詳細やオープンソースコードについては、[ブログ記事](https://code.visualstudio.com/blogs/2025/11/04/openSourceAIEditorSecondMilestone)をご覧ください。

### ガターからのインライン提案を一時停止

ガターアイコンから直接、インライン提案を一時停止できるようになりました。ガターアイコンにカーソルを合わせると、**Snooze** オプションを含むコントロールが表示されます。これを選択し、提案を一時停止する期間を選択してください。

![インライン提案のガターコンテキストメニューにある Snooze ボタンを示すスクリーンショット。](/assets/updates/1_106/nes-snooze.png)

### 「行へ移動」機能の改善

今回のアップデートでは、**「行へ移動」**コマンド（⌃G（Windows）、LinuxではCtrl+G）にいくつかの改良を加え、ファイル内のナビゲーションを改善しました。

**「行へ移動」**コマンドは、`::` 構文を使用してファイル内の特定の文字位置へ移動できるようになりました。これは、ツールが特定の文字オフセットでエラーを報告する場合に便利です。例えば、 「位置 599 でエラー」といった場合です。

特定の文字位置に移動するには、**行へ移動*** 入力ボックスに `::` の後に文字番号を入力します。例：

-   `::599` - ファイル内の 599 文字目に移動
-   `::-100` - ファイルの末尾から 100 文字分移動

入力ボックス内のトグルを使用して、1 ベース（デフォルト）と 0 ベースのオフセット計算を切り替えることができます。

さらに、**行へ移動**コマンドは範囲外の 値を適切に処理し、ファイルや行の先頭・末尾への移動を容易にします：

-   **行番号**：ファイルの行数より大きい行番号を入力すると、最後の行に移動します。
-   **列番号**：負の列番号を使用すると、行の末尾から移動します。 たとえば、`:12:-1` と入力すると、12行目の最後の文字に移動します。行の長さよりも大きい列番号を入力すると、その行の末尾に移動します。

## エディタの操作性

### 刷新されたアイコンデザイン

今回のリリースでは、codicon アイコンセットが刷新されました。 新しいアイコンは、曲線や新しい修飾子のデザイン、より的確なメタファーを取り入れて洗練され、モダンで親しみやすく、読みやすくなりました。

![よりモダンな外観と読みやすさが向上した、更新された製品アイコンのスクリーンショット。](/assets/updates/1_106/refreshed-iconography.png)

### Linux ポリシーサポート

JSON ファイルを使用して Linux システム上で VS Code ポリシーを管理する機能を導入しました。 これにより、管理者は Linux マシン上の全ユーザーに対して特定の設定や構成を適用できるようになります。

詳細については、[Linux での JSON ポリシー](https://code.visualstudio.com/docs/setup/enterprise#_json-policies-on-linux) をご覧ください。

### 複数ファイル差分エディタでの変更点の移動

単一ファイルの差分エディタで次または前の変更点に移動できるのと同様に、複数ファイル差分エディタでもファイル間で移動できるようになりました。キーバインドまたは上下の矢印キーを使用して、ファイル間の変更点を確認できます。

### 診断ホバーテキストのコピー

エラーメッセージを簡単にコピーできるよう、診断ホバー（エラー、警告、情報、ヒント）にコピーボタンが表示されるようになりました。診断マーカーにカーソルを合わせ、ホバーメッセージの上をマウスで移動すると、右上にコピーボタンが表示されます。

![診断用ホバーにカーソルを合わせると、右上にコピーボタンが表示されるスクリーンショット。](/assets/updates/1_106/hover-copy-button.png)

### アクセント記号を無視したコマンドフィルタリング

コマンドパレットでは、コマンド検索時に文字のアクセント記号を無視するようになりました。これにより、キーボードレイアウトや言語設定に関係なく、必要なコマンドを簡単に見つけられるようになります。例えば、`Générer`（フランス語で「Generate」の意味）という単語を含むコマンドを検索する場合、アクセント記号なしで `generer` と入力すると、一致するコマンドが検索結果に表示されます。

これは、異なるキーボードレイアウトを使用している場合や、コマンドを検索中にタイプミスをした場合に役立ちます。このフィルタリングは [Unicode 正規化形式 D](https://www.unicode.org/reports/tr15/#Norm_Forms) に基づいており、すべての Unicode 言語に対応しています。

### VS Code の詳細設定

VS Code は、詳細設定の概念をサポートするようになりました。これらの設定は、特殊なシナリオを構成するためのものであり、環境を細かく制御する必要がある上級ユーザーを対象としています。デフォルトでは、詳細設定は設定エディタ内で非表示になっており、インターフェースをシンプルに保ちつつ、必要なときにこれらの強力なオプションを利用できるようにしています。

詳細設定を表示および構成するには、設定エディタのフィルタードロップダウンメニューから **詳細** を選択するか、検索ボックスに `@tag:advanced` と入力します:

![「詳細」フィルターが適用され、詳細設定タグのバッジが付いた設定エディタを表示するスクリーンショット](/assets/updates/1_106/advanced-settings.png)

設定の正確な名前で検索したり、`@id:` フィルターを使用したりすると、**詳細**フィルターを適用しなくても検索結果に詳細設定が表示されます。これにより、探している設定を常に確実に見つけることができます。

詳細設定は、`@modified` や `@feature:` などの他のフィルターと組み合わせて使用することで、必要な設定を正確に見つけるのに役立ちます。たとえば、`@tag:advanced @feature:terminal` とすると、ターミナルに関連する高度な設定のみが表示されます。

> **注:** 拡張機能の作成者は、設定構成に `advanced` タグを追加することで、設定を「高度な設定」としてマークできます。

## チャット

### エンベディングに基づくツール選択

今回のリリースでは、チャットで多数の（100以上）ツールを有効にしているユーザー向けに、ツールのフィルタリングとグループ化の方法を大幅に改善しました。「ツール選択を最適化しています...」という読み込み状態が表示される頻度が減り、表示時間も短縮されるはずです。また、適切なツールが確実に選択されるよう、エージェントが混乱する可能性を低減するツール選択機能も改善しました。

### ツールの承認と信頼

#### 外部データの事後承認

外部データを取得するエージェントツールで、事後承認機能がサポートされるようになりました。これにより、チャットセッションでデータが使用される前に確認できるため、プロンプトインジェクション攻撃のリスクを軽減できます。

事後承認は、`#fetch` ツールおよび `openWorldHint` を宣言する Model Context Protocol (MCP) ツールで有効です。

#### サーバーまたは拡張機能のすべてのツールを信頼する

**Allow**ボタンのドロップダウンから、ソースレベルでMCPサーバーおよび拡張機能ツールを信頼できるようになりました。これにより、個々のツールを1つずつ承認する代わりに、特定のMCPサーバーまたは拡張機能のすべてのツールを一括で承認できます。

また、**Chat: Manage Tool Approval**コマンドの操作画面を更新し、ツールの事前承認と事後承認の両方を管理できるようにしました。

![「ツールの承認管理」コマンド画面のスクリーンショット。ツールの承認をスキップし、コンテンツの審査を省略できるようにする機能。](/assets/updates/1_106/manage-tool-approvals.png)

#### ツールの自動承認ステータスの移動

自動承認ステータスは、チャットビュー内のインライン表示から、ツールの呼び出しステータス／チェックマークアイコンに移動しました：

![ツールのチェックマークアイコンにカーソルを合わせると、自動承認された理由が表示されるスクリーンショット](/assets/updates/1_106/tool-auto-approve-hover.png)

### ターミナルツール

#### 自動承認パーサーの改善

以前、ターミナルツールにおけるサブコマンドの検出は、`|` や `&&` といった特定の文字列で単純に分割するという単純な手法を採用していました。これにはいくつかの問題がありましたが、主な問題点は、`echo "a|b|c"` のように文字列内でパイプが使用された場合、`echo`、`b`、`c` といったサブコマンドが検出されてしまうことでした`として検出してしまっていました。もう一つの重要な問題は、サブコマンドを確実に抽出できなかったため、安全を期して誤った実行を防ぐために、括弧のペア、中括弧のペア、およびバッククォートを完全に禁止していたことです。

今回のリリースでは、[パーサー](https://tree-sitter.github.io/tree-sitter/)をこの機能に統合し、それ以外のすべてに対しては[PowerShell文法](https://github.com/airbus-cert/tree-sitter-powershell)または[bash文法](https://github.com/tree-sitter/tree-sitter-bash) を使用しています\*。そのため、非常に複雑なケースでも正しく抽出されるはずです：

![echo 呼び出し内の "$()" を検出するスクリーンショット。](/assets/updates/1_106/tool-terminal-parser.png)

\* _ただし、zsh_の`;`のようにシェル構文がbashと異なる場合、サブコマンドの検出に失敗する可能性がある点に注意してください。

#### ファイル書き込み/リダイレクトの検出 (実験的)

新しいパーサーのおかげで、リダイレクト経由で書き込みが行われているファイルをかなり確実に抽出できるようになりました。 新しい実験的設定 `chat.tools.terminal.blockDetectedFileWrites` (VS Codeで開く (Insiders)) を使用すると、条件に応じて自動承認を阻止できます。

![デフォルトでワークスペース外への書き込みが自動承認をブロックすることを示すスクリーンショット](/assets/updates/1_106/tool-terminal-redirection.png)

#### デフォルトの自動承認ルールを無効にする（実験的機能）

新しい実験的設定 `chat.tools.terminal.ignoreDefaultAutoApproveRules`（VS Code で開く / VS Code Insiders で開く）を使用すると、デフォルトのルール（許可ルールと拒否ルールの両方）を無効にできます。これは、デフォルト設定を確認することなく、より細かく制御したい場合に便利です。

#### シェル固有のプロンプトとコマンドの書き換え

ターミナルツールには、PowerShell、bash、zsh、fish 向けのシェル固有の説明が追加されました。これにより、エージェントが提案するコマンドの信頼性が向上し、特に PowerShell において失敗する可能性が低くなります。

さらに、Windows PowerShell (v5) では `&&` 連鎖演算子がサポートされていないため、PowerShell では `&&` を `;` に書き換えています。なお、[vscode#274548](https://github.com/microsoft/vscode/issues/274548) が対応されるまでは、PowerShell 7 でも一時的に同様の処理が行われます。

#### チャットへのターミナルコマンドの添付

コマンド装飾のコンテキストメニューから、ターミナルコマンドをコンテキストとしてチャットに添付できるようになりました。添付データにはコマンドライン、キャプチャされた出力、終了コードが含まれるため、エージェントは何が起こったかを正確に把握できます。これはシェル統合によって追跡されるすべてのコマンドに適用されるため、テキストをコピー＆ペーストすることなく、トラブルシューティングを容易にエスカレーションできます。

#### チャット内でターミナル出力を表示 (実験的機能)

新しい chat.tools.terminal.outputLocation 設定（VS Code Insiders 向け）により、出力の表示場所を制御できるようになりました。デフォルトの `none` 値に設定すると、ターミナルによってパネルが乱雑になるのを防ぎます。

チャットでのターミナル起動時、進行状況要素に以下の 2 つのアクションが表示されるようになりました：

-   **ターミナルを表示**：非表示のセッションを表示してフォーカスを合わせ、リッチなシェル統合が有効な場合は関連するコマンドの位置まで直接スクロールします。基本的なシェル統合またはシェル統合がない場合でも、このアクションは正しいターミナルタブにフォーカスを合わせます。
-   **出力を表示**：チャットビュー内でターミナルの最終出力をインラインで開きます。 コマンドが非ゼロの終了コードで終了すると、出力ビューが自動的に展開されます。

`npm i` が失敗した場合、出力は自動的に展開されます。ターミナルは、インラインアクションの **ターミナルを表示** によって表示されます。

#### 非表示のチャットターミナルを検出 (実験的機能)

`setting(chat.tools.terminal.outputLocation):none` の場合、少なくとも1つの非表示のチャットターミナルが存在すると、ターミナルタブビューに新しい **X 個の非表示ターミナル** ボタンがターミナルタブビューに表示されます。これにより、各チャットターミナルとそのチャットセッションが一覧表示されたクイックピッカーが開き、適切なプロセスを即座に選択できます。同じピッカーは、ターミナルのオーバーフローメニューにある **非表示のチャットターミナルを表示** からも利用でき、すべてのチャットターミナルが再び表示されると非表示になります。

エージェントが `ls -la` を実行し、成功したため、出力は折りたたまれています。タブビューから**非表示のターミナル**アクションが実行され、ターミナルが選択・表示され、コマンドがハイライトされるようにスクロールされます。

### 会話をプロンプトとして保存

`/savePrompt` コマンドを使用して、チャット会話を再利用可能なプロンプトとして保存できるようになりました。アクティブなチャットセッションで `/savePrompt` を実行すると、 VS Codeは、その会話に基づいて一般化されたプロンプトを含むプロンプトファイルを生成します。エディタには青いボタンが表示され、このプロンプトをユーザーレベルまたはワークスペースレベルの有効な場所に保存できます。

![エディタ内の「プロンプトを保存」ボタンのスクリーンショット。](/assets/updates/1_106/save-prompt-prompt.png)

この機能は従来の `/save` コマンドに代わるもので、有用な会話パターンをキャプチャして共有するための、より効率的なワークフローを提供します。生成されたプロンプトは、今後のチャットセッションで簡単に再利用したり、チームと共有したりできます。[カスタムプロンプトファイル](https://code.visualstudio.com/docs/copilot/customization/prompt-files)。

### ウェルカムプロンプトの編集

チャットのウェルカムビューで、提案されたプロンプトを右クリックして追加のアクションにアクセスできるようになりました。プロンプトを右クリック（または Shift+F10 キーを押す）すると、コンテキストメニューが表示され、**プロンプトファイルを編集*** オプションが表示され、対応するプロンプトファイルをエディターで直接開くことができます。

プロンプトファイルの編集は、関連ファイルを持つプロンプト（ユーザー定義のプロンプトや、chat.promptFilesRecommendations Open in VS Code Open in VS Code Insiders 設定を通じて構成されたプロジェクト固有のプロンプトなど）で利用可能です。

![提案されたプロンプトのコンテキストメニューのスクリーンショット。](/assets/updates/1_106/welcome-prompt-context.png)

[カスタムプロンプトファイル](https://code.visualstudio.com/docs/copilot/customization/prompt-files)の詳細については、こちらをご覧ください。

### 編集したファイルを自動的に開く

**設定**: chat.openEditedFilesAutomatically VS Codeで開く VS Codeで開く Insiders

エージェントのデフォルト動作を変更し、編集したファイルをエディタで自動的に開かなくなりました。以前の動作を好む場合は、accessibility.openChatEditedFiles VS Codeで開く VS Codeで開く Insiders 設定を有効にできます。

### 理由 (実験的)

**設定**: chat.agent.thinkingStyle VS Codeで開く VS Code Insidersで開く , chat.agent.thinking.collapsedTools VS Codeで開く VS Code Insidersで開く

前回のイテレーションで、チャット内に思考トークンを表示できるようにする chat.agent.thinkingStyle VS Codeで開く VS Code Insidersで開く 設定を追加しました。これがより多くのモデルで利用可能になりました！このリリース時点で、 GPT-5-Codex、GPT-5、GPT-5 mini、および Gemini 2.5 Pro がこれをサポートしています。

chat.agent.thinkingStyle Open in VS Code Open in VS Code Insiders は、より一般的な 3 つのスタイルに調整され、最新の思考の連鎖を表示する `fixedScrolling` がデフォルトとなりました。

追加設定である `chat.agent.thinking.collapsedTools`（VS Codeで開く | VS Code Insidersで開く）により、折りたたみ可能な思考UI内にツール呼び出しが追加されます。

![チャット内に表示された推論トークンと、ツール呼び出しおよび推論出力が交互に表示されているスクリーンショット。これは、それぞれの思考設定で `fixedScrolling` と `collapsedTools` が有効になっているUIです。](/assets/updates/1_106/reasoning.png)

### インラインチャット v2 (プレビュー)

**設定**: inlineChat.enableV2 VS Codeで開く VS Codeで開く Insiders

インラインチャットの刷新に向けた取り組みを強化しました。この機能は、

-   単一のプロンプト、
-   単一のファイル、
-   コードの変更のみを対象とする

これにより、全体的な体験が大幅に軽量化され、UIもシンプルになります。対応できないタスクについては、自動的にチャットビューに切り替わります。

### チャットビューのUX改善

チャットビューの一部を調整し、より快適に使えるようにしました：

-   新しいチャットを作成するアクションがドロップダウンメニューになり、エディタ内または新しいウィンドウでチャットセッションを作成するオプションが追加されました
-   ツールとMCPサーバーのアクションが、モデルピッカーのすぐ隣に移動しました
-   設定ドロップダウンメニューが整理されました

![新しいチャットを作成するアクションのドロップダウンメニューのスクリーンショット。](/assets/updates/1_106/chat-view.png)

また、チャットビューで数式を右クリックすることで、数式のソースをコピーできるようになりました。

## MCP

### 組織向けの MCP サーバーへのアクセス

**設定**: chat.mcp.gallery.serviceUrl VS Code で開く VS Code で開く Insiders この設定は組織レベルで管理されます。変更するには管理者にお問い合わせください。ORG, chat.mcp.access VS Codeで開く VS Codeで開く Insiders この設定は組織レベルで管理されます。変更するには管理者にお問い合わせください。ORG

VS Codeは、GitHub組織ポリシーを通じて構成されたMCPレジストリをサポートするようになりました。 これにより、組織はカスタム MCP レジストリを設定し、インストールおよび起動可能な MCP サーバーを制御できるようになります。

組織のポリシーで MCP レジストリのエンドポイントが設定されている場合、VS Code は以下の動作を行います:

-   設定されたレジストリからの MCP サーバーの閲覧およびインストールを提供します
-   アクセス制限が有効になっている場合、起動できる MCP サーバーをレジストリ内で利用可能なものに限定します

組織でこれらのポリシーが設定されている場合、 chat.mcp.gallery.serviceUrl VS Codeで開く VS Codeで開く Insiders この設定は組織レベルで管理されます。変更するには管理者に連絡してください。ORG設定はMCPレジストリのエンドポイントURLを指定し、chat.mcp.access VS Codeで開く VS Codeで開く Insiders この設定は組織レベルで管理されます。変更するには管理者に連絡してください。ORG設定は、アクセスをそのレジストリ内のサーバーのみに制限するかどうかを制御します。これらの設定は、設定エディターで「(組織によって管理)」と表示されます：

![組織ポリシーによって管理されるMCP設定（Gallery Service URLおよびアクセス制御設定を含む）を示すスクリーンショット](/assets/updates/1_106/mcp-registry-policies.png)

組織またはエンタープライズ向けの MCP サーバーへのアクセス設定の詳細については、[MCP サーバーへのアクセスの設定](https://docs.github.com/en/copilot/how-tos/administer-copilot/configure-mcp-server-access)を参照してください。

### ワークスペース構成へのMCPサーバーのインストール

MCPサーバーをインストールする際、グローバルにインストールするか、ワークスペース構成にインストールするかを選択できるようになりました。拡張機能ビューでMCPサーバーを右クリックし、コンテキストメニューから**[インストール (ワークスペース)]**を選択するか、MCPサーバーエディター内で直接**[インストール (Workspace)** アクションを直接使用してください。これにより、MCPサーバーが現在のワークスペース内の `.vscode/mcp.json` ファイルに追加され、チーム内でMCPサーバーを共有しやすくなります。

![「インストール (ワークスペース)」オプションが強調表示された MCP サーバーのコンテキストメニューを示すスクリーンショット](/assets/updates/1_106/mcp-install-workspace.png)

### 認証：クライアント ID メタデータ ドキュメント認証フロー

リモート MCP に対する認証サポートでは、MCP における OAuth の将来の標準となる [クライアント ID メタデータ ドキュメント (CIMD)](https://www.ietf.org/archive/id/draft-parecki-oauth-client-id-metadata-document-00.html) 認証フローをサポートするようになりました。これは、MCPにおけるOAuthの将来の標準となるものです。このフローにより、[動的クライアント登録 (DCR)](https://datatracker.ietf.org/doc/html/rfc7591) による認証よりも、より安全でスケーラブルなソリューションを実現します。これは、認証サーバーがクライアントごとにクライアント ID を発行する必要がなくなったためです。

CIMD をサポートする認証サーバーを使用している MCP サーバーに接続する場合、 VS CodeはDCRではなく、自動的にこのフローを使用します。

_CIMDの詳細については、[oauth.netのリソース](https://oauth.net/2/client-id-metadata-document/)をご覧ください。_

### 認証: `WWW-Authenticate` によるスコープの段階的拡大

リモート MCP に対する認証サポートでは、リモート MCP サーバー向けの `WWW-Authenticate` ヘッダーを通じた動的なスコープの段階的拡大がサポートされるようになりました。これは [OAuth 2.0 仕様](https://datatracker.ietf.org/doc/html/rfc6750#section-3)で言及されています。これにより、MCPサーバーはすべてのスコープを事前に要求するのではなく、必要な場合にのみ追加の権限を要求できるようになります。 たとえば、サーバーへの接続には最小限のスコープセットしか必要としない場合でも、特定のツール呼び出しでは必要な場合にのみ、より広範な権限を要求できるようになります。これにより、最小権限の原則に従うことで、セキュリティが向上します。

_これは現在、まもなく最終化される予定の [MCP仕様の最新ドラフト](https://modelcontextprotocol.io/specification/draft/basic/authorization#scope-selection-strategy）で言及されており、まもなく最終版が公開される予定です。_

## アクセシビリティ

### 音声タイムアウトはデフォルトで無効化されています

設定 `accessibility.voice.speechTimeout`（VS Codeで開く VS Code Insidersで開く）のデフォルト値が `0` に変更されました。これにより、音声セッションは一定時間経過後に自動的に終了しなくなりました（例：例：一時停止しても、チャットリクエストが自動的にトリガーされることはありません）。これはデフォルトとしてより良い体験だと考えていますが、いつでも以前のデフォルト値（`2500`）に戻すことができます。

### チャット入力の改善

チャット入力では、アクティブなエージェントとモデルがより明確な順序で読み上げられるようになり、スクリーンリーダーのユーザーが最も関連性の高いコンテキストを最初に聞き取れるようになりました。また、チャットのアクセシビリティヘルプでは、**Delete**キーを押すことで添付されたコンテキスト項目を削除できることが明記され、添付ファイルの管理が完全にキーボード操作で可能になりました。

## ノートブック

### ノートブックの検索

ノートブックでセルを横断した検索が可能になりました。エディタと同様に、キーバインド（⌘G（Windows、LinuxではF3）および⇧⌘G（Windows、LinuxではShift+F3））を使用して、一致する項目を前後に移動できます。

## ソース管理

### git コミットメッセージでの折りたたみ機能のサポート

**設定**: git.verboseCommit VS Codeで開く VS Code Insidersで開く , git.useEditorAsCommitInput VS Codeで開く VS Code Insidersで開く

エディターでGitコミットメッセージを作成する際、コミットメッセージの一部を折りたたんで整理できるようになりました。この機能を使用するには、git.verboseCommit VS Codeで開く VS Code Insidersで開く および git.useEditorAsCommitInput VS Codeで開く VS Code Insidersで開く Insiders 設定を有効にしてください。

![ガター内の折りたたみノードと、エディター内で部分的に折りたたまれたコミットメッセージを示すスクリーンショット。](/assets/updates/1_106/commit-folding.png)

### 変更の流入/流出をグラフ表示

**設定**: scm.graph.showIncomingChanges VS Codeで開く VS Code Insiders , scm.graph.showOutgoingChanges VS Codeで開く VS Code Insiders

今回のマイルストーンでは、ソースコントロールグラフビューで変更の流入と流出を簡単に確認できる機能を追加しました。変更の流入または流出があるアクティブなブランチの場合、グラフには「Incoming Changes」および「Outgoing Changes」ノードが表示されます。各ノードを選択すると、受信または送信されたファイルのリストが表示されます。

![ソースコントロールグラフビュー内の受信および送信変更ノードを示すスクリーンショット。](/assets/updates/1_106/graph-incoming-outgoing.png)

scm.graph.showIncomingChanges VS Codeで開く VS Code Insidersで開く および scm.graph.showOutgoingChanges VS Codeで開く VS Code Insidersで開く 設定を使用することで、グラフビューからこの情報を非表示にできます。

### グラフの参照比較

ソースコントロールグラフのコンテキストメニューに、**[Compare with...]**という新しいコマンドを追加しました。これにより、グラフ内の履歴項目を任意のブランチやタグと比較することができます。この機能を使用すると、履歴項目には含まれているが ブランチやタグには存在しない変更を確認できます。

コンテキストメニューには、履歴項目をリモートブランチおよびマージベースとそれぞれ比較するためのショートカットコマンド、**リモートと比較**と**マージベースと比較**があります。

### リポジトリの選択モード

**設定**: scm.repositories.selectionMode VS Code で開く VS Code Insiders で開く

「ソースコントロール」の「リポジトリ」ビューには、ワークスペース内で開かれているリポジトリのリストが表示され、「ソースコントロール」の「変更」ビューに表示されるリポジトリを制御するために使用されます。

「リポジトリ」ビューの機能を拡張する予定であり、その準備として、設定項目 scm.repositories.selectionMode を導入します。 VS Code で開く VS Code Insiders を使用して、「リポジトリ」ビューの選択モードを単一リポジトリまたは複数リポジトリのいずれかに制御できるようにします。

「リポジトリ」ビューの新機能に加え、これにより「グラフ」ビューのタイトルにあるリポジトリピッカーを削除し、すべてのソースコントロールビューに共通するグローバルなリポジトリピッカーを提供できるようになります。選択モードは、この設定を使用するか、「リポジトリ」ビューの 「...」メニューから切り替えることができます。

![単一選択モードが有効なリポジトリビューと、選択モードを切り替えるコンテキストメニューを示すスクリーンショット。](/assets/updates/1_106/repositories-selection-mode.png)

### 新しいリポジトリメニュー

ユーザーは、`scm/repository` メニュー ID を使用して、新しい「ソースコントロールリポジトリ」ビューのインラインソースコントロールプロバイダー行にコマンドを追加できます。「inline」グループに追加されたコマンドはインラインで表示され、その他のコマンドは `...` メニューに表示されます。

### リポジトリエクスプローラー (実験的)

**設定**: scm.repositories.explorer VS Codeで開く VS Codeで開く Insiders , scm.repositories.selectionMode VS Codeで開く VS Codeで開く Insiders

リポジトリ ビューの機能強化と、各リポジトリに関する追加情報の表示を検討しています。この実験的機能を試すには、scm.repositories.selectionMode VS Codeで開く VS Code Insiders および scm.repositories.explorer VS Codeで開く VS Code Insiders を設定してください。

この最初のバージョンでは、ブランチとタグに焦点を当てています。新しいブランチやタグの作成、ブランチやタグのリストの表示、各ブランチ/タグに対するさまざまな操作（例：チェックアウトなど）を行うことができます。今後のマイルストーンでは、さらに多くの情報 （例：スタッシュ、リモートなど）を追加する予定です。この実験的な機能をぜひお試しいただき、ご意見をお聞かせください。

![選択した単一のリポジトリのブランチとタグが表示されたリポジトリエクスプローラーのスクリーンショット。](/assets/updates/1_106/repositories-explorer.png)

## テスト

### テストカバレッジ内の未カバレッジ行への移動

テストカバレッジを確認する際、新しいナビゲーションコマンドを使用して、未カバレッジ行間を簡単に移動できるようになりました。カバレッジ情報を表示している際、エディタツールバーには以下の2つのコマンドが表示されます：

-   **次の未カバレッジ行へ移動** - テストでカバレッジされていない次の行へジャンプします
-   **前の未カバレッジ行へ移動** - テストでカバレッジされていない前の行へジャンプします

これらのコマンドを使用すると、カバレッジのギャップを迅速に特定し、追加のテストカバレッジが必要な領域に集中できるため、コードベース全体のテスト品質を向上させることが容易になります。

## ターミナル

### ターミナル IntelliSense

ターミナル IntelliSense は、実験的/プレビュー機能として [約 1.5 年間](https://code.visualstudio.com/updates/v1_89#_vs-codenative-intellisense-for-powershell) 製品に搭載されていました！ 今回のリリースでは、プレビュータグを削除し、安定版をご利用のすべてのユーザーに対して段階的にデフォルト機能として展開していきます。

有効にすると、PowerShell、bash、zsh、fishのターミナルで入力した際に、エディタと同様のIntelliSenseが表示されます：

![PowerShellで「write」と入力すると、「write」で始まる補完候補が表示されるスクリーンショット。](/assets/updates/1_106/terminal-suggest-write.png)

補完のソースは多岐にわたり、例えばパス関連はすべてコア機能によって処理されます：

gitのように、ブランチ名を読み込む機能など、高度な仕様を備えたコマンドもあります：

この機能の開発を通じて学んだことは、「万能な解決策など存在しない」ということです。そのため、目的の動作を実現するために調整できるオプションが多数用意されています：

-   terminal.integrated.suggest.quickSuggestions VS Codeで開く VS Codeで開く Insiders \- Ctrl+Spaceによる手動操作ではなく、コマンドラインの内容に応じて自動的に表示します。
-   terminal.integrated.suggest.suggestOnTriggerCharacters VS Codeで開く VS Codeで開く Insiders \- `-` や `/` などの「トリガー文字」の後に自動的に表示します。
-   terminal.integrated.suggest.runOnEnter VS Code で開く VS Code で開く Insiders \- オプションで、Tab キーではなく Enter キーが押された際にコマンドを実行します。
-   terminal.integrated.suggest.windowsExecutableExtensions VS Code で開く VS Code で開く Insiders \- Windows 上で実行可能ファイルとして扱われる拡張子のリストです。
-   terminal.integrated.suggest.providers VS Codeで開く VS Codeで開く Insiders \- 特定のプロバイダーを無効にする機能を提供します。例えば、不要な補完を提案する拡張機能がある場合などです。
-   terminal.integrated.suggest.showStatusBar VS Codeで開く VS Codeで開く Insiders \- IntelliSense ポップアップの下部にステータスバーを表示するかどうか。
-   terminal.integrated.suggest.cdPath VS Codeで開く VS Codeで開く Insiders \- `$CDPATH` 統合を有効にするかどうか。
-   terminal.integrated.suggest.inlineSuggestion VS Codeで開く VS Codeで開く Insiders \- シェルの「ゴーストテキスト」と統合するかどうか、およびその表示方法。
-   terminal.integrated.suggest.upArrowNavigatesHistory VS Code で開く VS Code Insiders \- 補完候補の閲覧ではなく、シェルに上矢印キーを送信するかどうか。これは、フィルタリング後に上矢印キーを押すとそのプレフィックスで履歴検索ができる zsh で特に便利です。
-   terminal.integrated.suggest.selectionMode VS Codeで開く VS Code Insidersで開く \- IntelliSenseポップアップのフォーカス設定。これにより、EnterキーとTabキーの動作が決まります。
-   (新機能！) terminal.integrated.suggest.insertTrailingSpace VS Codeで開く VS Code Insidersで開く \- 入力を受け入れた後に末尾にスペースを挿入し、補完を再トリガーします。

まだこの機能が表示されない場合は、[shell integration](https://code.visualstudio.com/docs/terminal/shell-integration)が有効になっていることを確認し、設定で terminal.integrated.suggest.enabled を通じて IntelliSense を明示的に有効にしてください。

全体的な洗練に加え、今回のリリースでこの機能に追加される内容は以下の通りです：

-   `copilot` および `azd` CLI に補完機能が追加されました
-   拡張機能 API はほぼ完成に近づいています
-   Git コミットの補完にコミットメッセージが表示されるようになりました

![ターミナルの提案詳細ビューで、ブランチ名と関連するコミットメッセージが表示されるGitコミット補完のスクリーンショット。](/assets/updates/1_106/terminal-suggest-commit.png)

### シェル統合のタイムアウト設定の統合

ターミナルでコマンドを実行する前に、VS Code がシェル統合の準備完了を待機する時間を制御する設定が、`terminal.integrated.shellIntegration.timeout`（VS Code で開く | VS Code Insiders）という単一の統合設定にまとめられました。これには、`executeCommand` API や Copilot ターミナルツールを通じてトリガーされるコマンドも含まれます。

`chat.tools.terminal.shellIntegrationTimeout`（VS Code で開く | VS Code Insiders）は、この統合化に伴い非推奨となりました この統合に伴い、廃止されました。

## 認証

### 拡張機能アカウント設定の管理の視認性向上

**「拡張機能アカウント設定の管理」**コマンドの視認性が向上しました。コマンドパレットや拡張機能のコンテキストメニューから利用可能なほか、**「言語モデルへのアクセスを管理」**と並んでアカウントメニューにも表示されるようになりました。 これにより、拡張機能がアクセスできるアカウントを簡単に見つけ、設定できるようになりました。

![アカウントメニュー内の「拡張機能のアカウント設定を管理」のスクリーンショット](/assets/updates/1_106/manageExtensionAccountPref.png)

### `classic` Microsoft 認証の最終バージョン - 問題が発生した場合は `msal-no-broker` を使用してください

microsoft-authentication.implementation の `classic` オプションを VS Code Insiders から削除する予定です。つまり、VS Code リリース 1.106 が `classic` オプションを含む最後のバージョンとなります。

microsoft-authentication.implementation Open in VS Code Open in VS Code Insiders 設定は、Microsoft アカウントのネイティブ ブローカー認証で問題が発生した場合に、ユーザーがそれを無効にできるようにするために用意されていました。この設定の値は以下の通りです：

-   `msal` - 利用可能な場合はブローカー認証付きの MSAL を使用します（デフォルト）
-   `msal` - 利用可能な場合はブローカー認証付きの MSAL を使用（既定値）
-   `msal-no-broker` - ブローカー認証なしの MSAL を使用（最近導入）
-   `classic` - MSAL を使用しない従来の Microsoft 認証フローを使用

`classic` オプションの利用率は非常に低く、`msal` オプションに関する問題のほとんどはブローカー認証に起因するものであり、これらは `msal-no-broker` によって解決されるため、`classic` オプションを削除します。

### Microsoft 認証のデバイスコードフロー

Microsoft 認証は、ブローカーを使用しないシナリオでのデバイスコードフローに対応するようになりました。これは、リモート開発環境で特に役立ちます。他の認証方法が失敗した場合、VS Code は自動的にデバイスコードフローにフォールバックします。 これにより、別のデバイスに入力して認証を完了できるコードが表示されます。

### 「アカウントの管理」コマンド

**Accounts: Manage Accounts** コマンドを使用して、コマンド パレットから直接認証アカウントを管理できます。このコマンドは、[アカウント] メニューが非表示になっている場合や簡単にアクセスできない場合に、アカウント管理機能を利用できるようにします。

![「アカウントの管理」メニューのスクリーンショット。](/assets/updates/1_106/manage-accounts-menu.png)

**アカウントの管理**コマンドを実行すると、アクティブなすべてのアカウントが一覧表示されたクイックピックメニューが表示されます。アカウントを選択すると、以下の操作が利用可能です：

-   **信頼済み拡張機能の管理** - 選択したアカウントにアクセスできる拡張機能を制御します
-   **信頼済み MCP サーバーの管理** - この機能をサポートするアカウントの MCPサーバーへのアクセス権限を管理します
-   **サインアウト** - アカウントからサインアウトします

## 言語

### Python

#### Python環境拡張機能: python.poetryPath設定のサポート

Python Environments Extensionは、既存の`python.poetryPath`ユーザー設定を反映するようになりました。これにより、使用するPoetry実行ファイルを指定できます。Poetry環境を管理する際、指定されたパスが検索され、選択されます。

#### Python Environments Extension: venv作成の改善: dev-requirements.txtの検出

新しい仮想環境を作成する際、 拡張機能は `requirements.txt` および `dev-requirements.txt` ファイルの両方を検出し、依存関係を自動的にインストールするようになりました。

#### Copilot ホバーサマリーを docstring として追加

新しい ****Add as docstring**** コマンドを使用することで、AIが生成したドキュメントを直接コード内のdocstringとして追加できるようになりました。関数やクラスの要約を生成した後、シンボルの定義に移動してカーソルを合わせると、**Add as docstring** コマンドが表示されます。このコマンドを実行すると、カーソルの下に適切なdocstring形式で要約が挿入されます。

これにより、コードのドキュメント作成プロセスが効率化され、再入力することなく、コードの可読性と保守性を迅速に向上させることができます。

#### ローカライズされた Copilot ホバーサマリー

Pylance 内の GitHub Copilot ホバーサマリーは、VS Code で設定された表示言語に対応するようになりました。AI 生成のサマリーを呼び出すと、 エディタで設定した言語で文字列が表示されるため、生成されたドキュメントをより理解しやすくなります。

![ポルトガル語で生成された Copilot ホバーサマリーのスクリーンショット。](/assets/updates/1_106/hover-summaries-in-portuguese.png)

#### ワイルドカードインポートの変換コードアクション

Pythonでは、ワイルドカードインポート（from module import *）は、名前空間を乱雑にし、名前の由来が不明確になるため、コードの可読性や保守性を低下させる恐れがあるとして、一般的に推奨されていません。Pylanceでは、新しいコードアクションを通じて、依然として `from module import *` に依存しているモジュールを整理できるようになりました。このアクションは、エイリアスを保持し、インポートを単一のステートメントにまとめる形で、ワイルドカードを明示的なシンボルに置き換えます。 エイリアスを維持しつつ、インポートを単一のステートメントにまとめます。試すには、ワイルドカードインポートが含まれる行をクリックし、Ctrl+.（macOSの場合はCmd+.）を押して、**「明示的なインポートに変換」**コードアクションを選択してください。

![「ワイルドカードインポートを変換」コードアクションのスクリーンショット。](/assets/updates/1_106/wildcard-import.png)

### dotenv

アプリケーションの環境変数を定義するために一般的に使用される dotenv ファイル（`.env`）に対する基本的なサポートが組み込まれています。

## 拡張機能への貢献

### GitHub Pull Requests

[GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) 拡張機能においてさらなる進展がありました。この拡張機能を使用すると、プルリクエストやイシューの作成、管理、作業を行うことができます。新機能は以下の通りです：

-   AI生成のPR説明文（githubPullRequests.pullRequestDescription Open in VS Code Open in VS Code Insiders 経由）は、リポジトリにPRテンプレートが存在する場合、それを尊重します。
-   プルリクエストビュー内の下書きは、`[DRAFT]`というプレフィックスが付く代わりに、イタリック体で表示されるようになりました。
-   プルリクエストは URL から開くことができます。例：`vscode-insiders://github.vscode-pull-request-github/checkout-pull-request?uri=https://github.com/microsoft/vscode-css-languageservice/pull/460`

この拡張機能の [0.122.0 バージョンの変更履歴](https://github.com/microsoft/vscode-pull-request-github/blob/main/CHANGELOG.md#01220) を確認して、リリース内容の詳細をご確認ください。

## 新機能のプレビュー

### 言語モデルエディタ

新しい **言語モデル** エディタは、GitHub Copilot Chat で利用可能なすべての言語モデルを一元的に表示・管理できる場所を提供します。チャットモデルピッカーから、または **Chat: Manage Language Models** コマンドを使用して開くことができます。

> **注:** この機能は [VS Code Insiders](https://code.visualstudio.com/insiders/) でのみ利用可能です。

![プロバイダー別に整理されたモデル一覧が表示された言語モデルエディターのスクリーンショット。](/assets/updates/1_106/language-models-editor.png)

エディターには以下が表示されます：

-   プロバイダー別に整理された利用可能なすべてのモデル
-   モデルの機能（ツール、ビジョン、エージェント）
-   コンテキストサイズと乗数に関する情報
-   モデルの可視性ステータス

以下の方法でモデルの検索やフィルタリングが可能です：

-   ハイライト表示付きのテキスト検索
-   プロバイダーフィルター：`@provider:"OpenAI"`
-   機能フィルター：`@capability:tools`、`@capability:vision`、`@capability:agent`
-   可視性フィルター： `@visible:true/false`

モデル名やコンテキストサイズにカーソルを合わせると、モデルID、バージョン、ステータス、トークン内訳などの詳細情報が表示されます。

#### モデルの可視性を管理する

各モデルの横にある目のアイコンをクリックして可視性を切り替えることで、チャットモデルピッカーに表示されるモデルを制御できます。モデルが可視状態の場合、GitHub Copilot Chatを使用中にモデルピッカーのドロップダウンに表示され、選択可能になります。 非表示のモデルは言語モデルエディタには残りますが、モデルピッカーには表示されません。これにより、最も頻繁に使用するモデルに選択を絞り込むことができます。

![モデルの表示/非表示を切り替える目のアイコンと、「チャットモデルピッカーに表示」というツールチップが表示されたスクリーンショット](/assets/updates/1_106/toggle-language-model-visibility.png)

これは特に次のような場合に便利です。 多くのモデルにアクセスできる環境で、ピッカーに好みのモデルのみを表示させてワークフローを効率化したい場合などに特に便利です。

#### インストール済みのプロバイダーからモデルを追加する

**「モデルを追加...」** ボタンを使用して、すでにインストール済みの言語モデルプロバイダーからモデルを設定・追加できます。このボタンを選択すると、Copilot、Anthropic、Azure、Google、Groq、Ollama、OpenAIなど、インストール済みのすべてのモデルプロバイダーのドロップダウンリストが表示されます。リストからプロバイダーを選択して設定を行い、GitHub Copilot Chatでそのモデルを使い始めましょう。

![Copilot、Anthropic、Azure、Googleなどを含む、インストール済みの言語モデルプロバイダーのリストが表示された「モデルの追加」ドロップダウンのスクリーンショット](/assets/updates/1_106/add-language-models-dropdown.png)

これにより、言語モデルエディターから移動することなく、インストール済みの追加のプロバイダーを簡単に有効化できます。プロバイダー行の歯車アイコンを選択すると、プロバイダーの管理画面にアクセスできます。

## 拡張機能の作成

### 認証セッションにおける ID トークン

`AuthenticationSession` インターフェースに、オプションの `idToken` プロパティが追加されました。これにより、認証プロバイダーはアクセストークンに加えて ID トークンを返すことができるようになり、ユーザーの身元情報が必要なシナリオで特に役立ちます。Microsoft 認証プロバイダーはこのフィールドを返しますが、GitHub などの他のプロバイダーは返さない場合があります。

ID トークンには、認証されたユーザーに関するクレームが含まれており、ID プロバイダーによって署名されているため、ユーザーの身元確認に役立ちます。 IDトークンとアクセストークンの違いに関する詳細については、[https://oauth.net/id-tokens-vs-access-tokens/](https://oauth.net/id-tokens-vs-access-tokens/)を参照してください。

```
export interface AuthenticationSession {
  /**
   * IDトークン。
   */
  readonly idToken?: string;
}
```

### Git 拡張機能の `getRepositoryWorkspace` API

組み込みの Git 拡張機能は、Git リポジトリのリモートに関連付けられていることがわかっているフォルダを取得するための新しい API を提供します。これは、ユーザーが Git リモートを含むフォルダを開いた際に、リポジトリのリモートとフォルダのマッピングをキャッシュすることで機能します。

### セカンダリサイドバーでのビューコンテナ

拡張機能の作成者は、新しい `secondarySidebar` コントリビューションポイントを使用して、セカンダリサイドバーにビューコンテナを登録できるようになりました。これにより、拡張機能はセカンダリサイドバー内の「チャット」などの組み込みビューの横にカスタムビューを配置し、VS Code のデュアルサイドバーレイアウトとの統合性を高めることができます。

```
{
  "contributes": {
    "viewsContainers": {
 "secondarySidebar": [
 {
 "id": "myExtensionViews",
 "title": "My Extension",
          "icon": "$(extensions)"
 }
 ]
    },
    "views": {
 "myExtensionViews": [
 {
 "id": "myCustomView",
 "name": "Custom View",
 "when": "true"
 }
 ]
    }
  }
}
```

## 提案中のAPI

### Quick PickおよびQuick Inputの改善

Quick PickおよびQuick Input APIには、拡張機能開発者がインタラクティブなユーザーインターフェースを作成する際により柔軟性を発揮できる、いくつかの新機能が含まれています。

#### 提案中のAPI: トグルボタンのサポート

拡張機能は、`QuickInput` の `toggles` プロパティを通じて、クイックピックおよびクイックインプットインターフェースにトグルボタンを追加できます。これにより、入力ボックス領域でのパスワード表示の切り替えなど、ユーザーがクイックピックインターフェースを離れることなくコントロールと対話できるようなシナリオが可能になります。

このAPI提案に関するご意見やフィードバックをお待ちしております（[GitHubのイシュー](https://github.com/microsoft/vscode/issues/144956)をご参照ください）。

```
export enum QuickInputButtonLocation {
  ...

  /**
   * ボタンは入力ボックスの奥側にレンダリングされます。
   */
  Input = 3
}

export interface QuickInputButton {
  ...

  /**
   * 設定されている場合、ボタンがチェックまたはチェック解除可能なトグルボタンであることを示します。
   *
   * **注:** このプロパティは現在、{@link QuickInputButtonLocation.Input} の位置を持つボタンにのみ適用されます。
   * 該当するボタンでは必ず設定する必要があり、ボタンがトグルされた際に状態が更新されます。
   * 他の位置値を持つボタンでは設定できません。
   */
  readonly toggle?: { checked: boolean };
}
```

#### 提案中の API: Quick Pick へのプロンプトサポート

Quick Pickは、Input Boxで利用可能なものと同様の`prompt`プロパティをサポートしています。このプロンプトは、入力ボックスの下に常時表示されるテキストであり、ユーザーが入力を開始しても消えることなく、役立つガイダンスや指示を提供します。

このAPI提案に関するご意見やフィードバックをお待ちしています（[GitHubのイシュー](https://github.com/microsoft/vscode/issues/78335)をご参照ください）。

```
export interface QuickPick<T extends QuickPickItem> extends QuickInput {
  /**
   * ユーザーに指示や背景情報を提供するオプションのテキスト。
   *
   * プロンプトは入力ボックスの下、アイテムリストの上部に表示されます。
   */
  prompt: string | undefined;
}

export interface QuickPickOptions {
  /**
   * ユーザーに指示やコンテキストを提供するオプションのテキスト。
   *
   * プロンプトは入力ボックスの下、アイテムリストの上部に表示されます。
   */
  prompt?: string;
}
```

#### 提案された API: Quick Pick アイテムのファイルアイコン

Quick Pick アイテムは、`QuickPickItem` の `resourceUri` プロパティを通じて、ファイルタイプ固有のアイコンを表示できます。リソース URI を指定すると、VS Code はリソースタイプに基づいて適切なラベル、説明、およびアイコンを自動的に生成し、現在のテーマのファイルアイコンセットに合わせます。これは、ファイルやフォルダの選択インターフェースを構築する際に特に有用です。ユーザーは、見慣れたファイルタイプアイコンによってアイテムを素早く識別できるためです。

このAPI提案に関するご意見やフィードバックをお待ちしております（[GitHubのイシュー](https://github.com/microsoft/vscode/issues/59826)をご参照ください）。

```
export interface QuickPickItem {
  /**
   * このアイテムに関連付けられたリソースを表す {@link Uri}。
   *
   * 設定されている場合、このプロパティは、明示的に指定されていないいくつかのアイテムプロパティを自動的に導出するために使用されます：
   * - **Label**: {@link QuickPickItem.label label} が指定されていないか空の場合、リソースのファイル名から導出されます。
   * - **Description**: {@link QuickPickItem.description description} が指定されていないか空の場合、リソースのパスから導出されます。
   * - **Icon**: {@link QuickPickItem.iconPath iconPath} が
   *   {@link ThemeIcon.File} または {@link ThemeIcon.Folder} に設定されている場合、リソースのファイルアイコンテーマから取得されます。
   */
  resourceUri?: Uri;
}
```

### MarkdownStrings における GitHub スタイルのアラート ([#209652](https://github.com/microsoft/vscode/issues/209652))

新しいプロパティ `supportAlertSyntax` を設定することで、`MarkdownString` 内で [GitHub スタイルのアラート構文](https://github.com/orgs/community/discussions/16925) をレンダリングするサポートを追加しました。

```
const markdown = new vscode.MarkdownString();
markdown.supportAlertSyntax = true;
markdown.value = `
> [!NOTE]
> コンテンツをざっと目を通す際にも、ユーザーが知っておくべき有用な情報。

> [!TIP]
> 作業をより良く、あるいはより簡単に行うための役立つアドバイス。

> [!IMPORTANT]
> ユーザーが目標を達成するために知っておくべき重要な情報。

> [!WARNING]
> 問題を回避するために、ユーザーが直ちに対応すべき緊急情報。

> [!CAUTION]
> 特定のアクションに伴うリスクや悪影響に関する注意喚起。
`;
```

これにより、拡張機能はコメントなど、UI内のさまざまな場所でアラートを表示できるようになります：

![コメントスレッドに表示されたGitHubスタイルのアラートを示すスクリーンショット。各アラートタイプがそれぞれのアイコンとスタイルで表示されています。](/assets/updates/1_106/markdown-alerts.png)

### TreeItemラベルでのMarkdownStringのサポート ([#115365](https://github.com/microsoft/vscode/issues/115365))

拡張機能の開発者は、ツリービューのアイテムラベルで `MarkdownString` を使用できるようになり、コディコンやテキスト書式設定を含む Markdown 構文の一部を利用できます。これにより、拡張機能はより視覚的に豊かなツリービューを作成できるようになります。

```
// コディコン
const itemWithIcon = new vscode.TreeItem({
  label: new vscode.MarkdownString('$(star) スター付きアイテム', true)
});

// テキストの書式設定（文字列全体を囲む必要があります）
const italicItem = new vscode.TreeItem({
  label: new vscode.MarkdownString('_Italic item_')
});

// 書式設定とアイコン記号を組み合わせることができます
const combined = new vscode.TreeItem({
  label: new vscode.MarkdownString('_~~**$(check) 完了 $(star)**~~_', true)
});
```

上記のアイテムは次のように表示されます： ![3つのアイテム（アイコン付きのスター付きアイテム、イタリックアイテム、チェックマークとスターのアイコンに加え、太字、イタリック、取り消し線の書式設定が適用された複合アイテム）が表示されたツリービューのスクリーンショット。](/assets/updates/1_106/markdown-labels.png)

## エンジニアリング

### 自動化されたUX PRテストの検討

プルリクエスト内のUI変更を、コードを手動でチェックアウトして実行することなく、レビュアーが理解できるようにする新しい自動化ワークフローを導入しました。UI変更を含むプルリクエストに `~copilot-video-please` ラベルを追加すると、以下の処理を行う自動化プロセスが開始されます:

-   PRのブランチからVS Codeをビルドします
-   GitHub Copilot CLIを使用して変更内容と対話しながら、その過程を動画として記録します（[playwright-mcp](https://github.com/microsoft/playwright-mcp)
-   詳細な検証のためにPlaywrightトレースを生成
-   結果をプルリクエストへのコメントとして投稿

まだ導入初期段階ではありますが、このワークフローは、特に小規模なUI変更において、コードレビューに必要な手作業の負担を軽減できます。動画とトレースにより、レビュー担当者は変更が期待通りに動作することを迅速に確認できます。現在、動画はチームメンバーのみが閲覧可能です。

この自動化機能の詳細については、[https://github.com/microsoft/vscode/issues/272529](https://github.com/microsoft/vscode/issues/272529) をご覧ください。

### macOS 11.0 のサポートが終了しました

VS Code `1.106` は、macOS 11.0 (macOS Big Sur) をサポートする最後のリリースです。詳細については、[FAQ](https://code.visualstudio.com/docs/supporting/faq#_can-i-run-vs-code-on-old-macos-versions)を参照してください。

## 主な修正点

-   [vscode#258236](https://github.com/microsoft/vscode/issues/258236) - 拡張機能のインストール時に使用されるリクエストタイムアウトの設定を追加
-   [vscode#272945](https://github.com/microsoft/vscode/issues/272945) - タスクが `onDidStartTerminalShellExecution` をトリガーしない
-   [vscode#273372](https://github.com/microsoft/vscode/issues/273372) - .gitignore ファイル内で `/**` が自動的に `*/` で閉じられる
-   [vscode#243584](https://github.com/microsoft/vscode/issues/243584) - pwsh/conpty での最初の入力が無視される
-   [vscode#271952](https://github.com/microsoft/vscode/pull/271952) - Copilotの「設定手順」クイックピックに、ワークスペースレベルのエージェント設定ファイル（copilot-instructions.md、AGENTS.md）が表示されない
-   [vscode#274631](https://github.com/microsoft/vscode/pull/274631) - ネットワーク: Windows での中間認証局の読み込み

## 感謝

### 課題追跡

課題追跡への貢献:

-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)
-   [@Accurio (Accurio)](https://github.com/Accurio)

### プルリクエスト

`vscode`への貢献:

-   [@avarayr (avarayr)](https://github.com/avarayr): 修正: macOS Tahoe でのワークベンチ境界線の半径を拡大 [PR #270236](https://github.com/microsoft/vscode/pull/270236)
-   [@baptiste0928 (Baptiste Girardeau)](https://github.com/baptiste0928): 修正: マージエディタでのパス名変更問題を解決 [PR #254677](https://github.com/microsoft/vscode/pull/254677)
-   [@barroit (barroit)](https://github.com/barroit): tokenizeLineToHTML() 内のタブストップ計算を修正 [PR #263387](https://github.com/microsoft/vscode/pull/263387)
-   [@Benimautner](https://github.com/Benimautner): 修正: 入力デバイスがマウスの場合、慣性スクロールを適用しないようにした。 [PR #268284](https://github.com/microsoft/vscode/pull/268284)
-   [@danielbayley (Daniel Bayley)](https://github.com/danielbayley): `TM_DIRECTORY_BASE` スニペット変数を追加 [PR #270262](https://github.com/microsoft/vscode/pull/270262)
-   [@dibarbet (David Barbet)](https://github.com/dibarbet): セマンティックトークンの範囲更新通知をビューポートの寄与に紐付ける [PR #271419](https://github.com/microsoft/vscode/pull/271419)
-   [@dnicolson (Dave Nicolson)](https://github.com/dnicolson): アクティベーションイベントのリンターメッセージを更新 [PR #269156](https://github.com/microsoft/vscode/pull/269156)
-   [@DrSergei (Sergei Druzhkov)](https://github.com/DrSergei): 逆アセンブリビューの修正 [PR #270361](https://github.com/microsoft/vscode/pull/270361)
-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray): より多くの状況で「AI 機能の非表示方法」を表示する (修正 #268450) [PR #268462](https://github.com/microsoft/vscode/pull/268462)
-   [@imbant (imbant)](https://github.com/imbant): 修正(チャット): ファイルとフォルダピッカーでのファイルアイコンの表示を修正 [PR #255384](https://github.com/microsoft/vscode/pull/255384)
-   [@JeffreyCA](https://github.com/JeffreyCA): Azure Developer CLI (azd) の Fig 仕様を追加 [PR #272348](https://github.com/microsoft/vscode/pull/272348)
-   [@jlelong (Jerome Lelong)](https://github.com/jlelong)
    -   pair colorizerが@ifnextcharを無視するように [PR #272329](https://github.com/microsoft/vscode/pull/272329)
    -   LaTeXの括弧ペアから末尾のアンダースコアを除外 [PR #272758](https://github.com/microsoft/vscode/pull/272758)
-   [@jmg-duarte (José Duarte)](https://github.com/jmg-duarte): terminal.hoverHighlightBackgroundのローカライズを修正 [PR #264228](https://github.com/microsoft/vscode/pull/264228)
-   [@Mingpan](https://github.com/Mingpan): インライン差分表示において、削除されたチャンクの選択範囲をコピーする [PR #267991](https://github.com/microsoft/vscode/pull/267991)
-   [@obrobrio2000 (Giovanni Magliocchetti)](https://github.com/obrobrio2000)
    -   テストカバレッジに「次の/前の未カバレッジ行へ移動」ナビゲーションを追加 [PR #269505](https://github.com/microsoft/vscode/pull/269505)
    -   html: 終了タグの候補表示を無効にする設定を追加 [PR #269605](https://github.com/microsoft/vscode/pull/269605)
-   [@ohah (ohah)](https://github.com/ohah): 修正: ファイル検出バッジの縦方向の表示 (#\_235159) [PR #238757](https://github.com/microsoft/vscode/pull/238757)
-   [@rajniszp (Piotr Rajnisz)](https://github.com/rajniszp): i18n: monaco-editor の不足していたローカライズを追加 [PR #268038](https://github.com/microsoft/vscode/pull/268038)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD): \\n でのソフトラップを修正 [PR #258407](https://github.com/microsoft/vscode/pull/258407)
-   [@remcohaszing (Remco Haszing)](https://github.com/remcohaszing): dotenvのサポートを追加 [PR #273074](https://github.com/microsoft/vscode/pull/273074)
-   [@ritesh006 (Ritesh Kudkelwar)](https://github.com/ritesh006): feat(ts-codeLens): オーバーライドされたメソッドに対して「実装」CodeLensを表示 #263749 [PR #264546](https://github.com/microsoft/vscode/pull/264546)
-   [@Selva-Ganesh-M (Selva Ganesh M)](https://github.com/Selva-Ganesh-M): fix(editor)(#\_261780): UPPER\_CASEをPascalCaseに変換 [PR #262959](https://github.com/microsoft/vscode/pull/262959)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   修正: gettingStarted でのメモリリーク [PR #216876](https://github.com/microsoft/vscode/pull/216876)
    -   修正: 出力ビューでのメモリリーク [PR #221605](https://github.com/microsoft/vscode/pull/221605)
    -   修正: ノートブックのテキストモデルにおけるメモリリーク [PR #265013](https://github.com/microsoft/vscode/pull/265013)
    -   修正: InlayHintsにおけるメモリリーク [PR #265185](https://github.com/microsoft/vscode/pull/265185)
    -   修正: チャットセッショントラッカーのメモリリーク [PR #269027](https://github.com/microsoft/vscode/pull/269027)
    -   修正: getTerminalActionBarArgs のメモリリーク [PR #269516](https://github.com/microsoft/vscode/pull/269516)
    -   修正: スティッキースクロールのメモリリーク [PR #271102](https://github.com/microsoft/vscode/pull/271102)
    -   修正: チャットウェルカムのメモリリーク [PR #271121](https://github.com/microsoft/vscode/pull/271121)
-   [@sinsincp](https://github.com/sinsincp): コードとワークスペースの関連付けにおける AppUserModelID の修正 [PR #272753](https://github.com/microsoft/vscode/pull/272753)
-   [@Skn0tt (Simon Knott)](https://github.com/Skn0tt): テスト - 未完了の結果はスキップ済みとしてマークされるべき [PR #273742](https://github.com/microsoft/vscode/pull/273742)
-   [@subin-chella (subin)](https://github.com/subin-chella): バグ #209943 を修正 [PR #216662](https://github.com/microsoft/vscode/pull/216662)
-   [@tamuratak (Takashi Tamura)](https://github.com/tamuratak)
    -   チャット: 常にプロンプトファイルを適用し、指示を自動添付するように修正。#271624 を修正 [PR #272020](https://github.com/microsoft/vscode/pull/272020)
    -   修正(チャット): 未定義の customModes に対するチェックを追加。custom #272223 および #272236 を修正 [PR #272263](https://github.com/microsoft/vscode/pull/272263)
-   [@yavanosta (Dmitry Guketlev)](https://github.com/yavanosta): InlineEditsGutterIndicator のメモリリークを修正 (#\_273549) [PR #273550](https://github.com/microsoft/vscode/pull/273550)

`vscode-copilot-chat`への貢献:

-   [@24anisha](https://github.com/24anisha): デフォルトツール用の組み込みツールセット [PR #1139](https://github.com/microsoft/vscode-copilot-chat/pull/1139)
-   [@AbdelrahmanAbouelenin (ababouelenin)](https://github.com/AbdelrahmanAbouelenin): カスタム VSC モデルプロンプト [PR #1504](https://github.com/microsoft/vscode-copilot-chat/pull/1504)
-   [@devm33 (Devraj Mehta)](https://github.com/devm33): @vscode/chat-lib パッケージのリポジトリ URL を更新 [PR #1255](https://github.com/microsoft/vscode-copilot-chat/pull/1255)
-   [@DGideas (Wanlin Wang 王万霖)](https://github.com/DGideas): 404エラー時のCopilot Chatのエラー処理を改善 [PR #1073](https://github.com/microsoft/vscode-copilot-chat/pull/1073)
-   [@IanMatthewHuff (Ian Huff)](https://github.com/IanMatthewHuff): 内部 Git リポジトリのテレメトリ収集に関する問題を修正 [PR #1408](https://github.com/microsoft/vscode-copilot-chat/pull/1408)
-   [@joelverhagen (Joel Verhagen)](https://github.com/joelverhagen): NuGet MCPの自動インストールフローで最新のserver.jsonスキーマを使用可能に [PR #1268](https://github.com/microsoft/vscode-copilot-chat/pull/1268)
-   [@phawrylak (Paweł Hawrylak)](https://github.com/phawrylak): ワークスペースのインデックス除外リストにセキュリティ上重要なファイル拡張子を追加 [PR #1157](https://github.com/microsoft/vscode-copilot-chat/pull/1157)

`vscode-html-languageservice`への貢献:

-   [@obrobrio2000 (Giovanni Magliocchetti)](https://github.com/obrobrio2000): 終了タグの候補表示を無効にする設定を追加 [PR #219](https://github.com/microsoft/vscode-html-languageservice/pull/219)

`vscode-json-languageservice` への貢献:

-   [@Legend-Master (Tony)](https://github.com/Legend-Master): プレーンテキストの説明テキストのホバー表示を正しくエスケープ [PR #283](https://github.com/microsoft/vscode-json-languageservice/pull/283)

`vscode-languageserver-node`への貢献:

-   [@dibarbet (David Barbet)](https://github.com/dibarbet): ドキュメントの閉じ時にワークスペースのプル状態をクリアし、古い診断結果の表示を防ぐ [PR #1674](https://github.com/microsoft/vscode-languageserver-node/pull/1674)

`vscode-pull-request-github`への貢献:

-   [@bendrucker (Ben Drucker)](https://github.com/bendrucker): プロンプト（エージェントモード）ですべてのLLMツールを有効化 [PR #6956](https://github.com/microsoft/vscode-pull-request-github/pull/6956)
-   [@gerardbalaoro (Gerard Balaoro)](https://github.com/gerardbalaoro): ブランチ一覧のタイムアウト設定を可能にする (#\_2840) [PR #7927](https://github.com/microsoft/vscode-pull-request-github/pull/7927)
-   [@wankun-tcj](https://github.com/wankun-tcj): プルリクエストのツリービューにおけるアバター表示の問題を修正 [PR #7851](https://github.com/microsoft/vscode-pull-request-github/pull/7851)

`vscode-test-cli`への貢献:

-   [@bwateratmsft (Brandon Waterloo \[MSFT\])](https://github.com/bwateratmsft): リリースに先立ちバージョンを更新 [PR #86](https://github.com/microsoft/vscode-test-cli/pull/86)

`debug-adapter-protocol`への貢献:

-   [@rsubtil (Ricardo Subtil)](https://github.com/rsubtil): DAPアダプターのリストにGodotを追加 [PR #568](https://github.com/microsoft/debug-adapter-protocol/pull/568)

`language-server-protocol`への貢献:

-   [@kristoff-it (Loris Cro)](https://github.com/kristoff-it): servers.mdを更新 [PR #2192](https://github.com/microsoft/language-server-protocol/pull/2192)

`monaco-editor`への貢献:

-   [@flofriday (Florian Freitag)](https://github.com/flofriday): Kotlinの数値リテラルを修正 [PR #4973](https://github.com/microsoft/monaco-editor/pull/4973)

`node-pty`への貢献:

-   [@devm33 (Devraj Mehta)](https://github.com/devm33): prebuildsディレクトリからネイティブアドオンを直接読み込む [PR #809](https://github.com/microsoft/node-pty/pull/809)

`python-environment-tools`への貢献:

-   [@VictorColomb (Victor Colomb)](https://github.com/VictorColomb): fix(poetry): パッケージ名をpep503に準拠して正規化 [PR #242](https://github.com/microsoft/python-environment-tools/pull/242)

新機能が利用可能になり次第、ぜひお試しいただければ幸いです。最新情報を確認するため、定期的にこちらをチェックしてください。

> 過去の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
