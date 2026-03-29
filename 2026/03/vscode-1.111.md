---
product: VSCode
version: 1.111.0
release_title: Visual Studio Code 1.111
release_date: 2026-03-09
source_url: "https://code.visualstudio.com/updates/v1_111"
archived_at: 2026-03-29
---

# Visual Studio Code 1.111

# Visual Studio Code 1.111

_リリース日: 2026年3月9日_

ダウンロード: Windows: [x64](https://update.code.visualstudio.com/1.111.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.111.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.111.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.111.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.111.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.111.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.111.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.111.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.111.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.111 のリリースへようこそ。**これは、毎週行われる安定版リリースの第一弾**です！今回のリリースでは、以下の機能によりエージェントの操作性がさらに向上しています：

-   [**エージェントの権限**](#_autopilot-and-agent-permissions)：セッションごとにエージェントの自律レベルを調整できます。
    
-   [**Autopilot (プレビュー)**](#_autopilot-preview): エージェントがタスクを完了するまで自律的に反復処理を行えるようにします。
    
-   [**エージェントスコープのフック (プレビュー)**](#_agent-scoped-hooks-preview): 他のチャット操作に影響を与えることなく、エージェントに前処理および後処理ロジックを適用できます。
 
-   [**エージェントのトラブルシューティング**](#_debug-events-snapshot): デバッグイベントのスナップショットを使用して、エージェントの動作やカスタマイズに関するトラブルシューティングを行います。
    

プログラミングを楽しんでください！

 

> このリリースノートをオンラインで読みたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。  

> **Insiders: 新機能をいち早く試してみたいですか？**  
> ナイトリー Insiders ビルドをダウンロードすれば、最新の更新プログラムが利用可能になり次第、すぐに試すことができます。  
> [Insiders をダウンロード](https://code.visualstudio.com/insiders)  

* * *

## オートパイロットとエージェントの権限

**設定**: chat.autopilot.enabled VS Codeで開く VS Codeで開く Insiders

チャットビューの新しい権限ピッカーを使用すると、エージェントの自律性を制御できます。権限レベルは現在のセッションにのみ適用されます。セッション中はいつでも、権限ピッカーから別のレベルを選択して変更できます。

以下の権限レベルから選択できます：

権限レベル

説明

**デフォルトの承認**

設定された承認設定を使用します。承認が必要なツールは、実行前に確認ダイアログを表示します。

**承認をバイパス**

確認ダイアログを表示せずにすべてのツール呼び出しを自動的に承認し、エラー時には自動的に再試行します。

**オートパイロット** (プレビュー)

すべてのツール呼び出しを自動的に承認し、エラー時には自動的に再試行し、質問には自動応答します。エージェントはタスクが完了するまで自律的に動作を続けます。

![チャットビューの権限ピッカーに「デフォルトの承認」、「承認をバイパス」、「オートパイロット」のオプションが表示されているスクリーンショット。](/assets/updates/1_111/new-input.png)

### オートパイロット (プレビュー)

オートパイロットは、Insiders ではデフォルトで有効になっています。Stable では、chat.autopilot.enabled を有効にすることで有効化できます。VS Code で開く VS Code で開く Insiders 。

内部的には、エージェントが制御を維持し、`task_complete` ツールを呼び出して完了を通知するまで処理を繰り返します。

> **注**: **承認のバイパス**および**オートパイロット**は、手動での承認プロンプトをバイパスし、ファイル編集、ターミナルコマンド、外部ツールへの呼び出しなど、破壊的な可能性のあるアクションを含め、設定された承認設定を無視します。いずれかのレベルを初めて有効にする際、確認を求める警告ダイアログが表示されます。セキュリティ上の影響を理解している場合にのみ、これらのレベルを使用してください。

ドキュメントで [オートパイロットとエージェントの権限](https://code.visualstudio.com/docs/copilot/agents/agent-tools#permission-levels) について詳しくご確認ください。

## エージェントスコープのフック (プレビュー)

**設定**: chat.useCustomAgentHooks VS Code で開く VS Code で開く Insiders

カスタムエージェントのフロントマターでは、特定のエージェントを選択したとき、または `runSubagent` 経由で呼び出されたときにのみ実行される、エージェントスコープのフックがサポートされるようになりました。これにより、他のチャット操作に影響を与えることなく、特定のエージェントに前処理および後処理ロジックを紐付けることができます。

エージェントスコープのフックを作成するには、`.agent.md` ファイルの YAML フロントマター内の `hooks` セクションで定義します。

この機能を試すには、chat.useCustomAgentHooks 設定を有効にしてください。詳細については、ドキュメントの [エージェントスコープのフック](https://code.visualstudio.com/docs/copilot/customization/hooks#_agentscoped-hooks) を参照してください。

## デバッグイベントのスナップショット

エージェントの動作を理解し、トラブルシューティングを行うために、`#debugEventsSnapshot` を使用して、エージェントのデバッグイベントのスナップショットをチャットのコンテキストとして添付できるようになりました。これを使用して、エージェントに読み込まれたカスタマイズやトークンの消費状況について問い合わせたり、エージェントの動作のトラブルシューティングを行ったりできます。

また、エージェントデバッグパネルの右上隅にあるスパークルチャットアイコンを選択して、デバッグイベントのスナップショットをチャット作成画面に添付することもできます。 添付ファイルを選択すると、スナップショットが取得されたタイムスタンプでフィルタリングされたエージェントデバッグパネルのログが開きます。

![エージェントデバッグパネルからチャットにデバッグイベントのスナップショットを添付するオプションのスクリーンショット。](/assets/updates/1_111/agent-logs.png)

ドキュメントで[チャット操作のデバッグ](https://code.visualstudio.com/docs/copilot/chat/chat-debug-view)について詳しくご確認ください。

## チャットヒントの改善

チャット環境は急速に進化しており、新機能や改善点について皆様に確実にお知らせしたいと考えています。チャットの流れの中で適切なタイミングで関連性の高いヒントが表示されるよう、チャットヒントの表示方法を再設計しました。

チャットヒントは、体系化されたオンボーディングプロセスをガイドするようになりました。最初に、「Planエージェントの使用」や「カスタムエージェントの作成」といった基礎的なヒントが表示されます。基礎的なヒントを完了または閉じた後、実験的な設定やMermaid図の生成といった利便性を高めるヒントがランダムな順序で表示されます。

![再設計されたチャットヒント画面のスクリーンショット。initコマンドの使用に関するヒントが表示されています。](/assets/updates/1_111/chat-tip-init-command.png)

その他のチャットヒントの改善点は以下の通りです：

-   ヒントは、ウェルカムビューやチャットビューなど、単一のチャットセッションが表示されている場合にのみ表示されます。複数のチャットエディタが開かれている場合、画面が煩雑にならないようヒントは非表示になります。
-   ヒントにはキーボードショートカットが含まれており、関連するキーバインドを見つけるのに役立ちます。
-   現在のセッションでヒントを操作したり閉じたりすると、ヒントは非表示になります。
-   `/init` および `/fork` スラッシュコマンドのヒントを追加しました。`/init` のヒントはプロジェクト設定を初期化するコマンドを見つけるのに役立ち、`/fork` のヒントは手動での会話の分岐を紹介するもので、これにより会話を分岐させて異なるアプローチを模索することができます。

## ターミナルのドロップダウンメニューにおける AI CLI プロファイルグループ (実験的)

**設定**: terminal.integrated.experimental.aiProfileGrouping VS Codeで開く VS Code Insidersで開く

GitHub Copilot CLIなどのAI CLIターミナルプロファイルが、見つけやすさを向上させるため、ターミナルプロファイルのドロップダウン上部に専用のグループとして表示されるようになりました。この機能を有効にするには、terminal.integrated.experimental.aiProfileGrouping VS Codeで開く VS Code Insidersで開く設定をオンにしてください。

![新しい AI CLI プロファイル グループが表示されたターミナル プロファイル ドロップダウンのスクリーンショット。](/assets/updates/1_111/ai-cli-profile-group.png)

## 拡張機能の開発

### 拡張機能の `package.json` ファイル内のローカライズされた文字列に対する基本的な IntelliSense

VS Code は、[拡張機能の `package.json` 内の文字列のローカライズ](https://github.com/microsoft/vscode-l10n?tab=readme-ov-file#packagenlsjson) をサポートしています。今回のリリースでは、これらのローカライズされた文字列の扱いを容易にする、いくつかの基本的な IntelliSense 機能を追加しました。

-   `定義へ移動`: `package.nls.json` ファイル内のローカライズされた文字列の定義へジャンプしたり、その定義をプレビューしたりできます。
 
 ![ローカライズされた文字列の定義のプレビュー](/assets/updates/1_111/nls-string-def.png)
    
-   `すべての参照を検索`: `package.json` または `package.nls.json` ファイル内で、ローカライズされた文字列が参照されているすべての箇所を確認します。
 
 ![ローカライズされた文字列への参照を検索](/assets/updates/1_111/nls-string-refs.png)
    

## エンジニアリング

**毎週の安定版リリース**への移行に伴い、高品質な機能をより迅速に提供できるよう、エンジニアリングプロセスの改善を続けています。

### テスト計画項目の作成

機能リクエストのイシューから、ワンクリックでテスト計画項目を作成できる機能を追加しました。これにより、新機能の構造化されたテスト計画を設定するために必要な手作業が削減されます。

### 検証手順の生成

テスト計画項目はエンジニアにランダムに割り当てられるため、効率的かつ効果的なテストを行うには明確な検証手順が不可欠です。関連するイシュー上で検証手順を生成するボタンを追加しました。これにより、イシューがクローズされる前に、修正内容や機能を検証するための明確で構造化された手順が確実に用意されるようになります。

### リンクされた課題へのPRメディアの自動添付

説明文に画像やGIFが含まれているプルリクエストをマージすると、そのメディアコンテンツがリンクされた課題のコメントとして自動的に投稿されるようになりました。これにより、修正内容や機能の視覚的なデモを課題上で直接確認しやすくなり、検証プロセスが効率化されます。

### チャットショーケースパイプライン

`chat-showcase` ラベルが付いたイシューを処理する新しい自動パイプラインが追加されました。ショーケースイシューが特定されると、対応するチャットヒントイシューが自動的に作成されるため、機能に関するヒントを追加しやすくなります。

## 非推奨機能および設定

### 今回のリリースでの新しい非推奨機能

なし

### 今後の非推奨機能

-   **編集モード**は、VS Code バージョン 1.110 をもって正式に非推奨となりました。ユーザーは、VS Code の設定 `chat.editMode.hidden` を通じて、一時的に編集モードを再有効化できます。VS Code で開く VS Code Insiders で開く。この設定はバージョン 1.125 までサポートされます。バージョン 1.125 以降、編集モードは完全に削除され、設定を通じて有効にすることはできなくなります。

## 主な修正点

## 感謝

`vscode`への貢献:

-   [@cathaysia (cathaysia)](https://github.com/cathaysia): fix(json.schemaDownload.trustedDomains): json.schema…の常時更新を回避 [PR #298423](https://github.com/microsoft/vscode/pull/298423)
-   [@eliericha (Elie Richa)](https://github.com/eliericha)
    -   シェル環境変数にデバッグ拡張機能のホスト環境変数を追加 (#\_241078) [PR #298276](https://github.com/microsoft/vscode/pull/298276)
    -   リモートデバッグ拡張機能のホスト環境変数をリモートターミナルのシェル環境変数に含める [PR #299007](https://github.com/microsoft/vscode/pull/299007)
-   [@jaidhyani (Jai Dhyani)](https://github.com/jaidhyani): エディタ: cursorMove コマンドに 'foldedLine' 単位を追加 [PR #296106](https://github.com/microsoft/vscode/pull/296106)
-   [@neruthes (Neruthes 0x5200DF38)](https://github.com/neruthes): エディタの句読点の幅を修正 [PR #297741](https://github.com/microsoft/vscode/pull/297741)
-   [@RajeshKumar11](https://github.com/RajeshKumar11): MCP Gateway: 起動時のリスト呼び出しのブロックを回避 [PR #298040](https://github.com/microsoft/vscode/pull/298040)
-   [@Rohan5commit (Rohan Santhosh)](https://github.com/Rohan5commit): ドキュメント: 提案中のAPIコメント内の重複表現を修正 [PR #298522](https://github.com/microsoft/vscode/pull/298522)
-   [@sanchirico (John Sanchirico)](https://github.com/sanchirico): ストリーミング中のチャットターミナルのちらつきを修正 [PR #298598](https://github.com/microsoft/vscode/pull/298598)

`vscode-copilot-chat`への貢献:

-   [@24anisha (Anisha Agarwal)](https://github.com/24anisha): 検索サブエージェントのツール結果をディスクへの書き込み対象から除外 [PR #4219](https://github.com/microsoft/vscode-copilot-chat/pull/4219)
-   [@arieluchka (Ariel Agranovich)](https://github.com/arieluchka): ドキュメント: Jaegerポートの記載が不正確。<------ 簡単な修正 [PR #4251](https://github.com/microsoft/vscode-copilot-chat/pull/4251)
-   [@bharatvansh (Ayush Singh)](https://github.com/bharatvansh): サブエージェントのトークン使用状況をコンテキストウィンドウウィジェットに報告しないように [PR #3515](https://github.com/microsoft/vscode-copilot-chat/pull/3515)

`language-server-protocol`への貢献:

-   [@dietrichm (Dietrich Moerman)](https://github.com/dietrichm): NeovimのLSPドキュメントへのリンクを修正 [PR #2236](https://github.com/microsoft/language-server-protocol/pull/2236)
-   [@MariaSolOs (Maria Solano)](https://github.com/MariaSolOs): メタモデルの更新 [PR #2234](https://github.com/microsoft/language-server-protocol/pull/2234)

* * *

新機能が利用可能になり次第、ぜひお試しいただければ幸いです。最新情報を確認するため、定期的にこちらをチェックしてください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
