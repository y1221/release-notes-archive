---
product: VSCode
version: 1.120.0
release_title: Visual Studio Code 1.120
release_date: 2026-05-13
source_url: "https://code.visualstudio.com/updates/v1_120"
archived_at: 2026-05-14
---

# Visual Studio Code 1.120

# Visual Studio Code 1.120

[LinkedIn](https://www.linkedin.com/showcase/vs-code)、[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)でフォローしてください

* * *

_リリース日: 2026年5月13日_

ダウンロード: Windows: [x64](https://update.code.visualstudio.com/1.120.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.120.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.120.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.120.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.120.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.120.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.120.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.120.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.120.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.120 のリリースへようこそ。このリリースでは、Agents ウィンドウが Stable に追加され、BYOK モデルの可視性と制御が改善され、Markdown の利便性向上とエージェントの安全機能も追加されています。このリリースの主なハイライトは以下の通りです:

-   [Stable 版への「Agents」ウィンドウの追加](#_orchestrate-tasks-across-projects-with-the-agents-window-preview): 新しい「Agents」ウィンドウを使用して、すべてのプロジェクトでエージェントを最優先にした作業が可能になります。
 
-   [BYOK の改善](#_language-models): トークンの使用状況を追跡・最適化し、BYOK モデルの思考負荷を設定できます。
    
-   [Markdown の改善](#_languages): 差分表示用の Markdown プレビュー機能により、構文ではなく Markdown コンテンツそのものを確認できます。
 
-   [コマンドのリスク評価](#_risk-assessment-for-terminal-commands-experimental): ターミナルコマンドの実行前に、そのリスクを評価できます。
    
-   [トークンの最適化](#_terminal-tool-output-compression-preview): 大量のターミナル出力を圧縮することで、コンテキストウィンドウの使用量を削減します。
 

プログラミングを楽しんでください！

* * *

## エージェント

### 「エージェント」ウィンドウでプロジェクト横断的なタスクを調整（プレビュー）

VS Codeはすでに数百万人の開発者にエージェント型コーディングで利用されていますが、そのエディタレイアウトは主に、単一タスク・単一ワークスペースのワークフロー向けに最適化されています。ユーザー（そして私たち自身！）が複数のプロジェクトにまたがる複数のエージェントを扱えるようにするため、私たちは新しいタイプのウィンドウ「**Agents**」を作成しました。

この新しい「エージェント」ウィンドウは、皆さんがすでに使い慣れているエディターの相棒となるものです。エージェント主導の開発のために特別に設計されており、複数のプロジェクトにまたがるタスクを探索、反復、レビューするための専用スペースを備え、それらをシームレスに切り替えることができます。また、VS Codeは開発者の選択肢と柔軟性を重視して構築されているため、「エージェント」ウィンドウでは、エージェント・ハーネスを選択したり、リモートマシン上でエージェントを実行したり、カラーテーマ、 キーバインド、拡張機能の選択など、環境を自由に設定できます。

「Agents」ウィンドウは、過去数回のリリースにおいて VS Code Insiders の一部として提供されてきましたが、今回のリリースにより、VS Code Stable でもプレビュー版として利用可能になりました。

「Agents」ウィンドウは、VS Codeのタイトルバーにある「Open in Agents」ボタンなど、いくつかの方法で開くことができます。その仕組みや機能の詳細については、[「Agents」ウィンドウのドキュメント](https://aka.ms/VSCode/Agents/docs)をご覧ください。

#### 新機能

すでにInsidersで「Agents」ウィンドウをご利用いただいている皆様、ありがとうございます！ 皆様からのフィードバックを反映し続け、今週は以下の改善が実装されました：

-   **設定が新しいセッション間で保持されるようになりました**：エージェント・ハーネスや分離モードなどのドロップダウンで最後に選択した設定が、新しいセッションを作成する際にも保持されます。
-   **変更の破棄がより簡単になりました**：変更パネルから直接編集内容を破棄できるようになりました。
-   **新しいセッションでアップストリームの変更を同期できるようになりました**： 「ファイル」パネルの同期ボタンを使用すると、ベースブランチからのアップストリームの変更を確認し、エージェントが作業を開始する前にそれらを取り込むことができます。
-   **変更操作の挙動がより確定的に**: 「変更」パネルでの操作は、挙動が確定的になったため、より迅速に完了するようになりました。
-   **完了したセッションではデフォルトですべての変更を表示**: 「完了」とマークされたセッションを開くと、エージェントによる編集内容の全セットが一目で確認できるようになります。
-   **最近のセッション間の移動**: タイトルバーの左上にある矢印ボタンを使用すると、ウィンドウを閉じることなく、最近のセッション間を移動できます。
-   **ウィンドウごとの設定の上書き**: 「Agents」ウィンドウは、すべての VS Code 設定を共有するようになりました。また、このウィンドウでの動作を変更したい場合は、特定の設定を「Agents」ウィンドウ限定で上書きできます。

皆様からのフィードバックは、Agentsの改良に引き続き大いに役立っています。GitHubで[イシューを報告](https://github.com/microsoft/vscode/issues)するか、[既存のイシュー](https://github.com/microsoft/vscode/issues?q=state%3Aopen%20label%3A%22agents-window%22)をご覧ください。

#### 拡張性

テーマ、文法、言語、キーバインディングなど、静的なコンテンツのみを提供する拡張機能は、Agents ウィンドウで自動的に有効になります。また、Marketplace の人気トップ 100 の拡張機能についてもテストを行いましたが、そのうちのいくつかは、デフォルトの VS Code プロファイルにインストールすると同様に有効になります。

その他の拡張機能については、extensions.supportAgentsWindow 設定（VS Code Insiders 版）で ID を指定して有効化できます。この方法で有効化する拡張機能は、デフォルトの VS Code プロファイルにインストールされている必要があります。

```
"extensions.supportAgentsWindow": {
    "myextension.id": true
}
```

拡張機能に関するより広範な機能については現在も開発中ですが、Agents ウィンドウでの拡張機能の有効化によってどのような可能性が開かれるか、またこの環境において各拡張機能がどのように動作すべきかについて、拡張機能の作者の方々と協力していきたいと考えています。プロジェクトをまたいでエージェントを実行する新しいシナリオについてアイデアを出し合いたい場合でも、既存の拡張機能が Agents ウィンドウでどのように動作するかについてフィードバックを共有したい場合でも、[GitHub イシュー](https://github.com/microsoft/vscode/issues?q=state%3Aopen%20label%3A%22agents-window%22)を通じて、ぜひご協力いただければ幸いです。

### Copilot CLIプラグインを自動的に検出

GitHub Copilot CLI とともにインストールされた [エージェントプラグイン](https://code.visualstudio.com/docs/copilot/customization/agent-plugins) は VS Code によって自動的に認識されるため、`copilot plugin install` を実行するだけで両方の環境に対応できます。以前は、同じプラグインを VS Code に個別にインストールするか、chat.plugins.paths にそのパスを追加する必要がありました。VS Code で開く VS Code Insiders で開く。

## 言語モデル

Bring Your Own Key (BYOK) を使用すると、Anthropic や OpenAI などのプロバイダーから取得した独自の API キーを利用し、独自の課金やモデルホスティングオプションを活用できます。詳細については、[BYOK ドキュメント](https://code.visualstudio.com/docs/copilot/customization/language-models#_bring-your-own-language-model-key) をご覧ください。

### BYOKモデルのトークン使用状況の確認

モデルのコンテキストウィンドウを管理することは、良好な結果を得てコストを抑制するための鍵となります。モデルは会話の重要な詳細を見失う可能性があり、トークンの使用量が増えるとコストが増加する恐れがあります。今回のリリースでは、BYOKモデルのトークン使用状況の可視性が向上したため、コンテキストウィンドウを常に把握できるようになりました。

以前は、独自の API キー（Anthropic、OpenAI など）を介して持ち込んだモデルとチャットする場合、トークン計数は組み込みモデルでのみ機能していたため、コントロールには常に 0% とトークン数 0 が表示されていました。

チャットビューのコンテキストウィンドウコントロールでは、BYOKモデルについても正確なトークン使用量と使用率が表示されるようになりました。

![BYOKモデルの正確なトークン使用量と使用率を表示する、チャットビューのコンテキストウィンドウコントロールのスクリーンショット。](/assets/updates/1_120/context-window-byok-token-usage.webp)

### BYOK推論モデルの「思考負荷」の設定

推論機能を備えた言語モデルでは、「思考負荷」を設定できます。これは、応答の品質と速度／コストのバランスを調整する方法です。詳細については、[思考負荷](https://code.visualstudio.com/docs/copilot/concepts/language-models#_thinking-effort)のドキュメントをご覧ください。

今回のリリースでは、チャットビューのモデルピッカーから直接、BYOK推論モデルの思考負荷を設定できるようになりました。選択された負荷はリクエストごとにモデルに伝達され、応答の品質と遅延・コストのバランスを調整できます。

![BYOKモデルの「Thinking Effort」設定オプションが表示された言語モデルエディターのスクリーンショット。](/assets/updates/1_120/byok-configure-thinking-effort.webp)

> 対象: OpenAI互換エンドポイント（OpenAI、xAI（Grok）、OpenRouter、およびカスタムOpenAI / Azure OpenAIデプロイメント）経由で提供されるBYOK（Bring-Your-Own-Key）推論モデル。Anthropicモデルでは既にこの機能がサポートされていましたが、今回、プロバイダー間で設定が統一されました。

### プロバイダー別に整理されたモデルピッカー

チャットビューのモデルピッカーでは、モデルがプロバイダーごとにグループ化されるようになりました。これにより、複数のソースからモデルにアクセスできる場合でも、目的のモデルを簡単に見つけられるようになります。また、名前でモデルを検索することも可能です。

最近使用したモデルには、モデル名の横にプロバイダー名がグレーのテキストで表示されるようになりました。これにより、異なるプロバイダーの類似した名前のモデルを素早く区別できます。

ヒント

チャット入力欄に `/models` と入力すると、モデルに素早くアクセスできます。

## チャット

### ターミナルツールの出力圧縮（プレビュー）

**設定**: chat.tools.compressOutput.enabled VS Codeで開く VS Code Insidersで開く

`git diff`、`ls -l`、`npm install` などのコマンドによる長いターミナル出力は、モデルのコンテキストウィンドウの大部分を占有してしまう可能性があります。その結果、コードやエージェントの推論を表示するスペースが狭くなってしまいます。

chat.tools.compressOutput.enabled 設定を有効にすると、 VS Code は、これらのコマンドの出力をモデルに送信する前に後処理を行います。diff 内の変更のない大きなブロックは折りたたまれ、lockfile およびスナップショットの diff は除外され、`ls -l` はエントリ名に短縮され、`npm install` の進行状況バー、非推奨警告、および監査サマリーは削除されます。

圧縮された出力には短いバナーが先頭に付加されるため、モデルはどのフィルタが適用されたかを確認でき、生のテキストが必要な場合は圧縮を無効にする方法も把握できます。

### ターミナルコマンドのリスク評価 (実験的機能)

**設定**: chat.tools.riskAssessment.enabled VS Code で開く VS Code Insiders で開く

コマンドを詳しく確認する価値があるかどうかを素早く判断できるよう、ターミナルコマンドの確認画面に、AI が生成したコマンドの動作説明を含むリスクバッジが表示されるようになりました。

各バッジには、3つのレベルのうちの1つと、そのコマンドに特化した1文の要約が表示されます：

-   **安全** (緑): 変更を加えることなく、ファイルを読み込んだり出力を表示したりします。
-   **注意** (オレンジ): ワークスペースを変更したり、パッケージをインストールしたり、ネットワーク経由でデータを送信したりします。
-   **慎重に確認** (赤): リモートへの強制プッシュやワークスペース外のファイル削除など、元に戻すのが困難または不可能な操作を実行します。

![チャット内のターミナルコマンド確認画面のスクリーンショット。コマンドの下にAI生成のリスクバッジと説明が表示されています。](/assets/updates/1_120/terminal-risk-assessment.webp)

### Claude および Copilot CLI 向けのプランモード制御

**設定**: chat.planWidget.inlineEditor.enabled VS Code で開く VS Code Insiders で開く

ClaudeエージェントまたはCopilot CLIでプランモードを使用すると、VS Codeにはインラインのプランコントロールが表示され、エージェントが実行を開始する前にプランを確認・調整できます。今回のリリースでは、このフローにいくつかの改善が加えられました：

-   **プランのインライン編集**：プランの編集は、別のエディタータブを開くのではなく、コントロール内のインラインエディターで行われるようになりました。これにより、コンテキストを失うことなくプランの反復作業を行うことができます。
-   **より明確なフィードバックモード**: プランに対してフィードバックを提供する際、コントロールにはフィードバックモードにあることがより明確に示され、これまでに追加したフィードバックが表示されます。
-   **インラインエディタの無効化**: `chat.planWidget.inlineEditor.enabled` 設定をオフにすることで、インライン編集機能を無効化し、通常のエディタタブでの編集に戻すことができます。

## 言語

### 差分の Markdown プレビュー (プレビュー)

**ソース管理**ビューからMarkdownファイルを開いた際、生のソースコードではなく、VS CodeでレンダリングされたMarkdownプレビューを使用して差分を表示できます。

![ソースコントロールの差分を並列表示の Markdown プレビューでレンダリングしたスクリーンショット。](/assets/updates/1_120/md-diff-overview.webp)

これにより、Markdown 構文を 1 行ずつ頭の中で解析することなく、見出しの更新、新しいセクション、画像の変更、リストの再構成など、重要な変更点をはるかに簡単に見つけることができます。

このMarkdownプレビュー形式の差分表示は、並列表示とインライン表示の両方をサポートしています。

![ソースコントロールの差分がインラインMarkdownプレビューで表示されたスクリーンショット。](/assets/updates/1_120/md-diff-inline.webp)

試してみるには、ソースコントロール（またはその他の差分エディタ）からMarkdownの差分を開き、**Reopen Editor With...** を使用してMarkdownプレビューの差分表示に切り替えてください。また、workbench.diffEditorAssociations Open in VS Code Open in VS Code Insiders 設定を使用すると、デフォルトでMarkdownプレビューで差分を開くようにすることもできます：

```
"workbench.diffEditorAssociations": {
  "*.md": "vscode.markdown.preview.editor"
}
```

この機能はまだプレビュー段階であるため、問題が発生する可能性があります。エージェントやプルリクエストからのドキュメント変更を確認する際に、特に役立つと考えています。

### Markdown プレビューのデフォルト設定の変更

VS Code に組み込まれた Markdown プレビューは以前から存在しており、当初の機能の中には、以前ほど必要とされなくなったものがいくつかあります。今回のアップデートでは、以下の 2 つの機能をデフォルトで無効化することにしました：

-   markdown.preview.doubleClickToSwitchToEditor VS Codeで開く VS Code Insidersで開く : プレビュー内でダブルクリックするとソースエディタに戻ります。ユーザーはダブルクリックで範囲選択を行いたい場合が多いため、この動作に戸惑うことがありました。現在では `Reopen With` などの機能により、この機能の大部分が置き換えられています
    
-   markdown.preview.markEditorSelection Open in VS Code Open in VS Code Insiders : エディターで現在選択されている行にマークを付けます。現代のワークフローにおいては、あまり有用ではないと考えています。
 

以前の動作を好む場合は、これらの設定を再度有効にすることができます。

### Markdown パス補完および検証における HTML ID のサポート

組み込みの [Markdown パス補完](https://code.visualstudio.com/docs/languages/markdown#_path-completions) および [リンク検証](https://code.visualstudio.com/docs/languages/markdown#_link-validation) が、Markdown ファイル内の HTML 要素の `id` 属性を認識するようになりました。

```
...</div>

詳細については、[インストール手順](#_install-guide)をご覧ください。
```

これらのIDを持つリンクが、補完候補として表示されるようになりました：

![MarkdownリンクにおけるID属性の補完表示を示すスクリーンショット。](/assets/updates/1_120/md-id-completion.webp)

また、これらは[リンクの検証](https://code.visualstudio.com/docs/languages/markdown#_link-validation)にも使用されます：

![不明なHTML IDを含むMarkdownリンクの検証エラーを示すスクリーンショット。](/assets/updates/1_120/md-id-validation.webp)

### Markdown テーブルのスマート選択

Markdown テーブルで、基本的な [スマート選択](https://code.visualstudio.com/docs/editing/codebasics#_shrinkexpand-selection) が利用可能になりました。**選択範囲の拡大** (⌃⇧⌘→ (Windows、Linux: Shift+Alt+右矢印)) を使用して、選択範囲をセルから行、さらにテーブル全体へと拡大し、**選択範囲を縮小** (⌃⇧⌘← (Windows、Linux: Shift+Alt+左矢印)) を使用して段階的に縮小できます。

## 提案中のAPI

### カスタムエディタの差分表示

新たに提案された `customEditorDiffs` API を使用すると、カスタムエディタは専用の差分UIで差分をレンダリングできるようになります。これは、新しい [差分ビューでのMarkdownプレビュー](#_markdown-preview-for-diffs-preview) これにより、元のソースのテキストベースの差分表示が役に立たない場合でも、はるかに優れた比較体験が可能になります。

カスタムエディタプロバイダは、`CustomReadonlyEditorProvider` または `CustomTextEditorProvider` に対して、以下のいずれか、または両方を実装することでこの機能を利用できます：

-   `resolveCustomEditorInlineDiff(documents, webviewPanel, token)`: 差分を単一の WebView でレンダリングします。拡張機能は、元のドキュメントと変更後のドキュメントの両方にアクセスできます。
    
-   `resolveCustomEditorInlineDiff(documents, webviewPanel, token)`: 2つのWebView（各側1つずつ）を使用して差分をレンダリングします。レイアウトとスクロールの同期はVS Codeが調整します。
 

[`diffEditorPriority`](#_separate-custom-editor-priorities-diffs-and-merges)と組み合わせることで、拡張機能はカスタムエディタが差分処理を行うかどうか、およびその表示方法を完全に制御できるようになりました。詳細やフィードバックについては、[issue #138525](https://github.com/microsoft/vscode/issues/138525)をご参照ください。

### カスタムエディタの優先順位を差分とマージで分離

カスタムエディタ拡張機能では、ファイルタイプの編集、差分表示、マージに対して、それぞれ異なるデフォルトの優先順位を設定できるようになりました。`customEditors` コントリビューションでは、既存の `priority` に加え、`diffEditorPriority` と `mergeEditorPriority` という 2 つの新しいオプションフィールドを受け付けます。

```
"contributes": {
  "customEditors": [
    {
 "viewType": "myExtension.editor",
 "displayName": "My Custom Editor",
 "selector": [
 { "filenamePattern": "*.custom" }
      ],
 "priority": "default",
 "diffEditorPriority": "option",
 "mergeEditorPriority": "option"
    }
  ]
}
```

上記のコントリビューションにより、`*.custom` ファイルを開く際にはカスタムエディタが使用されますが、ソース管理からの差分を開く際には通常のテキスト差分ビューが使用されるようになります。

このAPIは現在も提案段階です。ぜひ試してみて、[issue #292379](https://github.com/microsoft/vscode/issues/292379) でフィードバックを共有してください。

### ドキュメント差分

新たに提案された `documentDiff` API は、`workspace.getTextDiff(original, modified, options?)` を通じて、VS Code の組み込み差分アルゴリズムを拡張機能に公開します。これは、行単位の変更を格納したストリーミング非同期反復可能オブジェクトと、要約情報（同一、不完全、およびオプションの移動検出）を含む `complete` プロミスを返します。各変更には、内部の文字レベル範囲が含まれます。-不完全、およびオプションの移動検出）を含む `complete` プロミスも返します。各変更には、内部の文字レベルの範囲が含まれます。

これは、カスタム差分エディタ（[カスタムエディタの差分](#_custom-editor-diffs) を参照）にとって特に有用であり、独自のアルゴリズムを実装する代わりに、組み込みエディタとまったく同じ差分をレンダリングできるようになります。

```
const diff = vscode.workspace.getTextDiff(originalDoc, modifiedDoc, {
  ignoreTrimWhitespace: true,
  computeMoves: false
});

for await (const change of diff.changes) {
  // change.originalRange, change.modifiedRange, change.innerChanges
}

const { identical, mayBeIncomplete, moves } = await diff.complete;
```

進捗状況の追跡とフィードバックは、[issue #315174](https://github.com/microsoft/vscode/issues/315174) で行ってください。

## 拡張機能への貢献

### GitHub Pull Requests

プルリクエストやイシューの作成、管理、作業を可能にする [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) 拡張機能において、さらなる進展がありました。新機能は以下の通りです：

-   コピー＆ペーストやアップロードボタンを通じて、プルリクエストのコメントに画像をアップロードできるようになりました。
-   ワークツリーでプルリクエストをチェックアウトする際、より説明的なフォルダ名が表示されるようになりました。
-   `"githubIssues.issueBranchTitle"` が `${issueType}` テンプレート変数をサポートするようになりました。

この拡張機能の [0.144.0 リリースの変更履歴](https://github.com/microsoft/vscode-pull-request-github/blob/main/CHANGELOG.md#01440) を確認して、このリリースに含まれるすべての内容についてご確認ください。

## 非推奨の機能と設定

### 今回のリリースで新たに非推奨となった機能

### 今後非推奨となる機能

## 主な修正

-   [microsoft/vscode #314545](https://github.com/microsoft/vscode/issues/314545) 統合ブラウザの localhost ターゲットに「すべてのインターフェース」リンクを含める

## 感謝

課題追跡への貢献:

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

`vscode`への貢献:

-   [@damonxue (DamonXue)](https://github.com/damonxue): 非アクティブなエディタタブを右クリックした際、「ファイルをチャットに追加」が機能しない問題を修正 [PR #315197](https://github.com/microsoft/vscode/pull/315197)
-   [@davidwengier (David Wengier)](https://github.com/davidwengier): Razor リポジトリのリポジトリとパスを更新 [PR #313011](https://github.com/microsoft/vscode/pull/313011)
-   [@Dmitriusan](https://github.com/Dmitriusan): 子ファイルの gitignore 否定ルールが親/グローバルルールを上書きしない問題を修正 [PR #300613](https://github.com/microsoft/vscode/pull/300613)
-   [@EhabY (Ehab Younes)](https://github.com/EhabY): キープアライブのタイムアウトによる接続切断の検出 [PR #310131](https://github.com/microsoft/vscode/pull/310131)
-   [@JeffreyCA](https://github.com/JeffreyCA)
    -   Azure Developer CLI (azd) の Fig 仕様を更新 [PR #308613](https://github.com/microsoft/vscode/pull/308613)
    -   統合ターミナル - 古い OSC 8 リンクのホバーツールチップの問題を修正 [PR #309539](https://github.com/microsoft/vscode/pull/309539)
-   [@kevin-m-kent](https://github.com/kevin-m-kent)
    -   レスポンスの *events およびサブエージェントのループから parentRequestId を送信 [PR #314309](https://github.com/microsoft/vscode/pull/314309)
    -   チャットリクエスト向けに X-Interaction-Type ヘッダーおよび requestKind テレメトリプロパティを追加 [PR #312262](https://github.com/microsoft/vscode/pull/312262)
    -   安定版のシンボルツールの説明をリリース [PR #315686](https://github.com/microsoft/vscode/pull/315686)
-   [@Larsjep (Lars Jeppesen)](https://github.com/Larsjep): https://github.com/microsoft/vscode/issues/291188 の修正 [PR #314713](https://github.com/microsoft/vscode/pull/314713)
-   [@n-gist (n-gist)](https://github.com/n-gist): TreeDataProvider.getChildren() の戻り値が VSCode によって変更されないことを保証 [PR #306955](https://github.com/microsoft/vscode/pull/306955)
-   [@Pengkun-ZHU (pzhu)](https://github.com/Pengkun-ZHU): Pzhu/feature カスタムスヌーズ時間 [PR #298934](https://github.com/microsoft/vscode/pull/298934)
-   [@pranavvaid-ac](https://github.com/pranavvaid-ac)
    -   アンカー解決の遅延後のチャット内リンクの更新 [PR #314281](https://github.com/microsoft/vscode/pull/314281)
    -   Tree-Sitterのフォールバックによるリンクされたシンボルアンカーの改善 [PR #314864](https://github.com/microsoft/vscode/pull/314864)
-   [@ruryu (ruryu)](https://github.com/ruryu): fix(agentHost): dbCloseを待機して不安定なセッションデータベーステストを解決 [PR #313810](https://github.com/microsoft/vscode/pull/313810)
-   [@ShehabSherif0 (Shehab Sherif)](https://github.com/ShehabSherif0): スコープ検出における inspect プロパティの誤った使用を修正 [PR #301472](https://github.com/microsoft/vscode/pull/301472)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke): 修正: utilityProcessWorkerMainService におけるメモリリーク [PR #294005](https://github.com/microsoft/vscode/pull/294005)
-   [@Tyriar (Daniel Imms)](https://github.com/Tyriar)
    -   曖昧なオプションをインターフェースに移行 [PR #313953](https://github.com/microsoft/vscode/pull/313953)
    -   使用されていない export const を削除 [PR #315244](https://github.com/microsoft/vscode/pull/315244)
-   [@yemohyleyemohyle](https://github.com/yemohyleyemohyle): Yemohyle/レスポンス成功時のGDPRブロック [PR #315128](https://github.com/microsoft/vscode/pull/315128)
-   [@yogeshwaran-c (Yogeshwaran C)](https://github.com/yogeshwaran-c): ターミナルのクイックピックフィルタの一致結果から Codicons を削除 [PR #313197](https://github.com/microsoft/vscode/pull/313197)

`vscode-pull-request-github`への貢献:

-   [@MaxDNG (Maxime Guitet)](https://github.com/MaxDNG): 修正: チェックボックスの適切な更新を確保するため、プルアップされたディレクトリの子要素の親を再設定 [PR #8679](https://github.com/microsoft/vscode-pull-request-github/pull/8679)

* * *

新機能が利用可能になり次第、ぜひお試しいただければ幸いです。定期的にこのページをチェックして、最新情報をご確認ください。

> 過去の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
