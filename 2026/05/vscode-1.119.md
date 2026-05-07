---
product: VSCode
version: 1.119.0
release_title: Visual Studio Code 1.119
release_date: 2026-05-06
source_url: "https://code.visualstudio.com/updates/v1_119"
archived_at: 2026-05-07
---

# Visual Studio Code 1.119

# Visual Studio Code 1.119

[LinkedIn](https://www.linkedin.com/showcase/vs-code)、[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)でフォローしてください |

* * *

_リリース日: 2026年5月6日_

ダウンロード：Windows：[x64](https://update.code.visualstudio.com/1.119.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.119.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.119.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.119.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.119.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.119.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.119.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.119.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.119.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.119 のリリースへようこそ。今回のリリースでは、エージェントとのよりスムーズな連携、可観測性の強化、および信頼性とセキュリティ制御の効率化に重点を置いています。

-   [エージェントとブラウザの連携](#_sharing-browser-tabs-with-agents): エージェントが統合されたブラウザへのアクセス権を検出し、要求できるようにします。
    
-   [トークン使用の最適化](#_optimized-token-usage-for-managing-todo-lists-experimental): 軽量なモデルを使用して、エージェントの ToDo リストを管理します。
 
-   [OpenTelemetry トレーシング](#_opentelemetry-tracing-for-agent-sessions): OpenTelemetry を使用してエージェント セッションを監視します。
    
-   [信頼性と開発者の効率性](#_trust-and-security): ネットワークアクセスや一時フォルダへの書き込み要求による中断を減らします。
 
-   [Markdownプレビュー](#_swap-current-editor-to-markdown-preview): Markdownソースとプレビューをすばやく切り替えます。
 

プログラミングを楽しんでください！

* * *

## エージェントの体験

### エージェントとのブラウザタブの共有

エージェントがライブブラウザにアクセスできる場合、変更をリアルタイムで検証し、より迅速に反復開発を行うことができます。Web開発の場合、エージェントはコードの編集、ページの再読み込み、修正の確認を1回のターンで行うことができます。デザインワークフローの場合、エージェントはレンダリングされた出力を意図と比較し、レイアウトやスタイルをその場で調整することができます。[VS Codeのエージェントで統合ブラウザを使用する](https://code.visualstudio.com/docs/copilot/guides/browser-agent-testing-guide)から始めてみましょう。

エージェントは、[統合ブラウザ](https://code.visualstudio.com/docs/debugtest/integrated-browser)に自動的にアクセスできるわけではありません。エージェントがブラウザページを操作できるようにするには、明示的にページを共有する必要があります。これにより、機密データのプライバシーを保護できます。

今回のリリースでは、エージェントとブラウザを共有する新しい方法を追加しました：

#### ブラウザタブをコンテキストとして添付

ブラウザタブは、推奨コンテキスト、コンテキストピッカー、ドラッグ＆ドロップ操作などの一般的なエントリポイントを通じて、チャットに明示的に添付できるようになりました。

![開いているブラウザをチャットコンテキストに追加するための、チャット内の暗黙的コンテキスト項目を示すスクリーンショット。](/assets/updates/1_119/browser-implicit-context.webp)

ブラウザタブが添付されると、共有状態になり、エージェントはページを読み取り、操作できるようになります。作業が完了したら、ブラウザの共有ボタンを使用して共有を停止してください。

![ブラウザ内の「エージェントと共有」ボタンを示すスクリーンショット。](/assets/updates/1_119/browser-share-button.webp)

#### エージェントからのページ共有リクエスト

エージェントは、現在開いている未共有のブラウザタブの数を把握できるようになりました。エージェントはページを操作する必要がある場合、開いているタブの共有をリクエストでき、ユーザーはプロンプトでそのリクエストを承認または拒否できます。

エージェントが、既存の未共有タブと同じドメインで新しいタブを開こうとした場合、既存のタブを再利用するかどうかを尋ねるプロンプトが表示されます。これは、タブの再利用を促進し、画面の散らかりを防ぐことを目的としています。

![ユーザーがブラウザでアプリをテストするよう促し、既存のタブを共有するよう求められるプロンプトが表示されたチャットセッションのスクリーンショット。](/assets/updates/1_119/browser-sharing-prompt.webp)

### Visual Studio Code Agents (Insiders)

> **注**: Visual Studio Code Agents は現在プレビュー段階であり、VS Code Insiders でのみ利用可能です。

[Visual Studio Code Agents](https://aka.ms/VSCode/Agents/docs) は、VS Code Insiders に同梱されるコンパニオン機能です。リポジトリをまたいで並列セッションを実行し、多段階のコーディングタスクを反復処理できる、エージェント固有の集中環境を提供します。 VS Code Agentsは[1.115](https://code.visualstudio.com/updates/v1_115#_visual-studio-code-agents-preview)で初めて導入され、ユーザーのフィードバックに基づいて改良を続けています。

今回のリリースでの更新点は以下の通りです：

-   **新セッション用リポジトリピッカーの再設計**：新しいセッションを開始する際、ローカルフォルダ、リポジトリ、またはリモートオプション間を簡単に切り替えられるようになりました。
    
    ![VS Code Agentsの再設計されたリポジトリピッカーのスクリーンショット。](/assets/updates/1_119/Agents-new-dropdown-2.webp)
 
-   **サブセッションの改善**: サブセッションの作成と管理がさらに改善され、サブセッションタブやライフサイクル処理などの修正が行われました。
    
-   **Webおよびモバイルの機能強化**: [1.118](https://code.visualstudio.com/updates/v1_118#_web-client)で導入された[Agents Webクライアント](https://insiders.vscode.dev/agents)の改良を継続し、ブラウザでの操作感をデスクトップ版と統一しています。 これにはモバイル体験の改善も含まれており、モバイルデバイスのブラウザからセッションやその変更を作成・管理できるようになります。
 
-   **環境管理と継続性**: VS CodeとAgentsの連携に引き続き注力し、環境管理の方法を進化させています。これは今後のリリースで具体化されていきます。
    
-   **進捗のUX**: エージェントがタスクに取り組んでいる際、回転する進捗メッセージやチャット入力ボックスの境界線アニメーションにより、進捗状況がより視覚的に把握できるようになりました。
 
-   **開発者の喜び**: 新しいセッションページに隠された楽しいイースターエッグを含め、開発者に喜びを感じてもらえるようなUXの改善に取り組んでいます。 セッションの `developerJoy.enabled` を有効にして、VS Code Insiders で開いて、その仕掛けを見つけられるか試してみてください！
 

皆様からのフィードバックは Agents の体験を形作る上で大変役立ちますので、引き続き [vscode GitHub リポジトリにイシューを登録](https://github.com/microsoft/vscode/issues)。また、[既存の問題](https://github.com/microsoft/vscode/issues?q=state%3Aopen%20label%3A%22agents-app%22)を確認して、他のユーザーが報告した内容を確認し、特定のトピックについてフィードバックを送信することもできます。

### エージェントセッション向けの OpenTelemetry トレーシング

**設定**: github.copilot.chat.otel.enabled VS Code で開く VS Code Insiders で開く , github.copilot.chat.otel.otlpEndpoint VS Code で開く VS Code Insiders で開く

エージェントセッションが長くなり、自律性が高まるにつれ、エージェントが何を実行したか、各ステップにどれだけの時間がかかったか、トークンがどこで消費されたかを把握することは、コストの最適化や予期せぬ動作のデバッグに不可欠となります。[OpenTelemetry](https://opentelemetry.io/)は、業界標準の可観測性フレームワークです。

ローカルエージェント、Copilot CLI バックグラウンドエージェント、Claude エージェントを含む Copilot Chat エージェントセッションは、[GenAI セマンティック規約](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/gen-ai/) に準拠した OpenTelemetry トレース、メトリクス、イベントを送信するようになりました。これにより、OTLP 互換のバックエンド（例：[Aspire Dashboard](https://aspire.dev/dashboard/standalone/)）で、エージェントの動作、レイテンシ、トークン使用量を監視できます。

各ユーザーリクエストは、ネストされた `chat`、`execute_tool`、 `execute_hook`の子スパンを含みます。サブエージェントの呼び出しは、呼び出し元エージェントの `execute_tool` スパンに自動的に親付けされるため、単一の接続されたトレース内でエージェントの動作を完全に可視化できます。スパンは、キャッシュの読み取りや作成の内訳を含め、モデルおよびトークンの使用状況を報告します。

試してみるには、github.copilot.chat.otel.enabled を有効にし（VS Codeで開く VS Code Insiders）、github.copilot.chat.otel.otlpEndpoint をコレクターに設定してください。

![OTelダッシュボード上で、ネストされたchatおよびtoolスパンを含むトレースのウォーターフォールビューを示すスクリーンショット。](/assets/updates/1_119/vscode-claude-otel.webp)

VS Code ドキュメントで、[OpenTelemetry を使用したエージェントの使用状況の監視方法](https://code.visualstudio.com/docs/copilot/guides/monitoring-agents) についてご確認ください。

## チャット体験

### Copilot CLI および Claude エージェントの応答に対するモデルの詳細を表示

**設定**: github.copilot.chat.agent.modelDetails.enabled VS Code で開く VS Code Insiders で開く

どのモデルが応答を処理したか、またそれが使用量にどのようにカウントされるかを把握することで、コストと品質を適切に管理できます。

[Copilot CLI](https://code.visualstudio.com/docs/copilot/agents/copilot-cli) および [Claude エージェント](https://code.visualstudio.com/docs/copilot/agents/third-party-agents) からの応答について、チャットビューに各応答ごとのモデル名とその乗数が表示されるようになりました。このバッジは、ウィンドウを再読み込みすることなく、各応答が完了するたびにリアルタイムで表示され、セッション中にモデルを切り替えた際にも更新されます。

Copilot CLIで**Auto**モデル選択を使用する場合、バッジには`auto`ではなく、実際に使用されたモデル（例：`Claude Sonnet 4.6`）が表示されます。また、履歴からセッションを再構築した場合でも、解決されたモデルは保持されます。

この機能はデフォルトで有効になっています。バッジを無効にするには、github.copilot.chat.agent.modelDetails.enabled 設定を無効にし、ウィンドウを再読み込みしてください。

### ToDoリスト管理のためのトークン使用量の最適化 (実験的)

**設定**: github.copilot.chat.agent.backgroundTodoAgent.enabled VS Codeで開く VS Code Insiders

ToDoリストは、完了した作業と次のステップを明確に記録することで、エージェントが複雑で多段階のタスクを遂行する際に軌道から外れないように支援します。しかし、ToDoリストを更新するためにメインモデルが行うツール呼び出しのたびにトークンが消費され、長いセッションではそのコストが累積します。

ToDoリストの管理を軽量なバックグラウンドエージェントに委ねることで、メインモデルは実際のタスクに集中でき、より小規模なモデルが進捗の追跡を同期させることができます。これにより、エージェントの集中力を維持するためのガイダンスを損なうことなく、全体的なトークン使用量を削減できます。

この設定を有効にすると、バックグラウンドエージェントがメインエージェントの活動を監視し、完了した作業や進行中の作業を反映してToDoリストを更新します。メインエージェントにはToDoツールが利用できなくなるため、会話におけるトークンコストを節約できます。

> **注**: チャットリクエストに ToDo ツールが手動で追加された場合（例: `#todo`）、またはカスタムエージェントがツールリストでそれを指定した場合、バックグラウンドエージェントは上書きされ、実行されません。

この機能はデフォルトで無効になっています。試すには、github.copilot.chat.agent.backgroundTodoAgent.enabled 設定を有効にしてください。

### 従量課金制に関する更新

GitHub Copilotは、6月1日より[従量課金制](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-individuals)に移行します。 これに備え、今回のリリースでは、課金およびクレジット情報の表示をサポートするため、チャットステータスダッシュボード、チャット入力通知、モデルピッカーに内部的な変更が含まれています。これらの UI の更新は、現時点ではユーザーには表示されませんが、従量課金が導入された時点で有効になります。

## 信頼性とセキュリティ

### エージェントサンドボックスでのネットワークアクセスを許可する

**設定**: chat.agent.sandbox.enabled VS Codeで開く VS Codeで開く Insiders この設定は組織レベルで管理されます。変更するには管理者にお問い合わせください。ORG

エージェントサンドボックスは、エージェントツールがアクセスできる範囲を制限することでシステムを保護しますが、エージェントがパッケージのインストール、APIの呼び出し、または開発サーバーの実行を行う必要がある場合、厳格なネットワークブロックが障害となることがあります。

`chat.agent.sandbox.enabled` (VS Codeで開く | VS Codeで開く | Insiders) 設定には、ファイルシステムの制限を維持しつつネットワークドメインのブロックを解除する `allowNetwork` モードが追加されました。これにより、ネットワークアクセスによる頻繁な中断を招くことなく、サンドボックスによる保護を維持できます。

```
"chat.agent.sandbox.enabled": "allowNetwork"
```

サンドボックスでのネットワークアクセスが許可されている場合、chat.agent.allowedNetworkDomains Open in VS Code Open in VS Code Insiders この設定は組織レベルで管理されます。変更するには管理者にお問い合わせください。ORG および chat.agent.deniedNetworkDomains Open in VS Code Open in VS Code Insiders この設定は組織レベルで管理されます。変更するには管理者にお問い合わせください。ORG 設定は無視されます。

VS Code ドキュメントの [エージェントのサンドボックス化](https://code.visualstudio.com/docs/copilot/concepts/trust-and-safety#_agent-sandboxing) について詳しくはこちらをご覧ください。

### セッションで許可されたコマンドによる一時フォルダへの書き込みを自動承認する

**設定**: chat.tools.terminal.blockDetectedFileWrites VS Codeで開く VS Code Insiders

日常的なファイル書き込みに対する頻繁な承認プロンプトは、エージェントのワークフローを遅くする可能性があります。chat.tools.terminal.blockDetectedFileWrites Open in VS Code Open in VS Code Insiders がデフォルト値の `outsideWorkspace` に設定されている場合、**セッション内のすべてのコマンドを許可**を選択していても、ワークスペース外に書き込むターミナルコマンドには承認が必要となります。

オペレーティングシステムの一時フォルダ （macOSおよびLinuxでは`/tmp`、Windowsでは`%TEMP%`）への書き込みは、**セッション内のすべてのコマンドを許可**が有効な場合、このチェックの対象外となりました。

これにより、一時フォルダにスクラッチファイルを配置する一般的なエージェントのワークフローではセッションが中断されなくなりましたが、ワークスペース外の他の場所への書き込みについては、引き続き確認が必要となります。

## 言語

### 現在のエディタとMarkdownプレビューを切り替える

現在のエディタと Markdown プレビューの切り替えがより簡単になりました。VS Code には [以前から](https://code.visualstudio.com/updates/v1_63#_markdown-preview-custom-editor) この機能がありましたが、見落とされがちでした。これらの新しいボタンとコマンドにより、機能がより見つけやすくなりました。

Markdown ファイル内で、ツールバーのこのボタンを選択するか、**Markdown: Switch to Preview View** コマンドを実行してください。

![エディターツールバーにある「プレビュービューに切り替える」ボタンを示すスクリーンショット。](/assets/updates/1_119/md-switch-preview-view.webp)

プレビューを開いた状態で、**[エディタビューに切り替える]** ボタンまたはコマンドを選択すると、ソースコードビューに戻すことができます。

![プレビューツールバーにある「エディタビューに切り替える」ボタンを示すスクリーンショット。](/assets/updates/1_119/md-switch-editor-view.webp)

### Markdown 設定の再編成

[VS Code の組み込み Markdown サポート](https://code.visualstudio.com/docs/languages/markdown) の設定を見つけやすく、管理しやすくするために、設定エディタの **Extensions** > **Markdown Language Features** 内に、いくつかの基本的なグループを作成しました。

![設定エディタ内のMarkdown設定グループを示すスクリーンショット。](/assets/updates/1_119/md-settings.webp)

設定 ID はすべて変更されていませんが、[組み込みの Markdown プレビュー](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview) に関連する設定はすべて、**プレビュー** サブセクションに一覧表示されるようになりました。

## エンジニアリング

### WebViewのCSSアンカー配置への移行を完了

VS CodeのWebViewは、ワークベンチ内での視覚的な配置に[アンカー配置](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning)を使用するようになりました。 これにより、特にアクティブな WebView が多い場合において、パフォーマンスが向上し、再レイアウトの応答性が向上します。また、ワークベンチを移動した際に WebView の位置がずれてしまうといった、長年にわたる厄介なバグの修正も可能になりました。

以下は、アンカーベースの配置に切り替える前の、単一の WebView に対する典型的な再レイアウト呼び出しです：

![アンカーベースの配置導入前の再レイアウト呼び出しのパフォーマンストレースを示すスクリーンショット。](/assets/updates/1_119/anchor-perf-before.webp)

ここでの WebView の配置は、`getBoundingClientRect` を呼び出す JavaScript を使用して行われていました。 この呼び出しは、ブラウザによるスタイルの再計算やリレイアウトを引き起こすため、比較的遅くなっていました。

アンカーベースの配置に移行したことで、WebViewの配置はCSSに基づいてブラウザが自動的に処理するようになりました。

![アンカーベースの配置後のリレイアウトのパフォーマンスを示すスクリーンショット。](/assets/updates/1_119/anchor-perf-after.webp)

### 型チェックに TypeScript 7 を採用し、開発の反復サイクルを高速化

前回のイテレーションでは、[VS Code のメインウォッチタスクを TypeScript 7 に対応させました](https://code.visualstudio.com/updates/v1_118#_faster-development-builds-with-typescript-7)。 今回のイテレーションでは、すべての組み込み拡張機能およびコアコードにおいて TypeScript 7 を使用する移行を完了しました。

Copilot 拡張機能を TypeScript 7 に対応させることで、型チェック時間を 22 秒から 4 秒に短縮しました。この劇的な高速化により、開発者とエージェントの両方が VS Code のコードベースにおいて、より迅速にイテレーションを行うことが可能になります。

## 非推奨の機能と設定

### 今回のリリースでの新たな非推奨項目

なし

### 今後の非推奨予定

-   **編集モード**は、VS Code バージョン 1.110 をもって正式に非推奨となります。ユーザーは、VS Code の設定 chat.editMode.hidden を通じて、一時的に編集モードを再有効化できます。VS Code で開く VS Code Insiders で開く この設定は組織レベルで管理されます。 変更するには、管理者にお問い合わせください。ORG。この設定はバージョン 1.125 までサポートされます。バージョン 1.125 以降、編集モードは完全に削除され、設定から有効にすることはできなくなります。

## 感謝

課題追跡への貢献：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

`vscode`への貢献:

-   [@64johnlee (john lee)](https://github.com/64johnlee): 修正: マークダウンコンテンツの抽出ダイアログでテキスト選択を有効化 [PR #313730](https://github.com/microsoft/vscode/pull/313730)
-   [@aanil677](https://github.com/aanil677): READMEの軽微な文法上の問題を修正 [PR #312480](https://github.com/microsoft/vscode/pull/312480)
-   [@AshtonYoon (Ashton Yoon)](https://github.com/AshtonYoon): markdown: #287050 で導入されたスクロール同期の不具合を修正 [PR #307763](https://github.com/microsoft/vscode/pull/307763)
-   [@iideprived (Herbert Smith)](https://github.com/iideprived): デバッグ: デフォルトでブレークポイントピッカーが最初のブレークポイントに設定されるように修正 [PR #313453](https://github.com/microsoft/vscode/pull/313453)
-   [@Jah-yee (RoomWithOutRoof)](https://github.com/Jah-yee): 修正: NoChangeError ツール名の補間とタイプミスを解決 [PR #309709](https://github.com/microsoft/vscode/pull/309709)
-   [@maruthang (Maruthan G)](https://github.com/maruthang): webview: カスタムエディタでデフォルトの localResourceRoots を尊重する [PR #312492](https://github.com/microsoft/vscode/pull/312492)
-   [@OrenMe (Oren Me)](https://github.com/OrenMe): Markdownのカスタマイズ機能に構造化プレビューを追加 [PR #312545](https://github.com/microsoft/vscode/pull/312545)
-   [@shaypet](https://github.com/shaypet): PRのコンテキストを強化するため、TitleAndDescriptionProviderにcompareBranchを追加 [PR #312326](https://github.com/microsoft/vscode/pull/312326)
-   [@xAndreiLi (Andrei Li)](https://github.com/xAndreiLi): feat(plugins): リポジトリ境界内でのコンポーネントパスの使用を許可 [PR #308776](https://github.com/microsoft/vscode/pull/308776)
-   [@yemohyleyemohyle](https://github.com/yemohyleyemohyle)
    -   Yemohyle/テレメトリへの追加 [PR #311837](https://github.com/microsoft/vscode/pull/311837)
    -   Yemohyle/extテレメトリへの追加 [PR #313159](https://github.com/microsoft/vscode/pull/313159)
-   [@yogeshwaran-c (Yogeshwaran C)](https://github.com/yogeshwaran-c)
    -   editor.hover.enabled に「hint」および「info」の検索キーワードを追加 [PR #313491](https://github.com/microsoft/vscode/pull/313491)
    -   editorグループ設定に「pane」検索キーワードを追加 [PR #313490](https://github.com/microsoft/vscode/pull/313490)

`vscode-pull-request-github`への貢献:

-   [@mohamedamara1 (Mohamed Amara)](https://github.com/mohamedamara1): PR 概要から関連するイシューを表示 #5824 [PR #6835](https://github.com/microsoft/vscode-pull-request-github/pull/6835)

* * *

新機能が利用可能になり次第、すぐに試してくださる皆様に心より感謝いたします。ぜひ定期的にこちらをチェックして、新機能をご確認ください。

> 過去の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
