---
product: VSCode
version: 1.114.0
release_title: Visual Studio Code 1.114
release_date: 2026-04-01
source_url: "https://code.visualstudio.com/updates/v1_114"
archived_at: 2026-04-02
---

# Visual Studio Code 1.114

# Visual Studio Code 1.114

[LinkedIn](https://www.linkedin.com/showcase/vs-code)、[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)でフォローしてください |

* * *

_リリース日: 2026年4月1日_

ダウンロード: Windows: [x64](https://update.code.visualstudio.com/1.114.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.114.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.114.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.114.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.114.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.114.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.114.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.114.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.114.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.114 へようこそ。今回のリリースは、**チャット体験の効率化**に重点を置いています。

-   [**動画のプレビュー**](#_preview-videos-in-the-image-carousel): チャットの添付ファイルやエクスプローラーのコンテキストメニューにある画像カルーセルで、動画をプレビューできます。
 
-   [**チャットの応答をコピー**](#_copy-final-response-in-chat): 最終的な Markdown 形式のチャット応答をコピーして、簡単に共有できます。
    
-   [**チャットのトラブルシューティング**](#_troubleshoot-previous-chat-sessions-preview): `/troubleshoot` を使用して、過去のセッションにおけるチャットのカスタマイズに関する問題を診断できます。
 
-   [**ワークスペース検索の簡素化**](#_workspace-search-simplification): より高速で一貫性のあるセマンティック検索結果が得られます。
    

プログラミングを楽しんでください！

* * *

## チャット体験

### 画像カルーセルでの動画プレビュー

**設定**: imageCarousel.chat.enabled VS Codeで開く VS Code Insidersで開く , imageCarousel.explorerContextMenu.enabled VS Codeで開く VS Code Insidersで開く

[バージョン 1.113 で導入された](https://code.visualstudio.com/updates/v1_113#_images-preview-for-chat-attachments) 画像カルーセルが、動画にも対応するようになりました。チャットの添付ファイルやエクスプローラーのコンテキストメニューから、動画を再生したり、操作したりできます。

ビューアーには以下の機能が含まれます：

-   コントロール付きの**動画再生**
-   矢印やサムネイルを使用した、すべての画像および動画の**ナビゲーション**

### チャットでの最終応答のコピー

チャットビューには、会話全体や特定の応答をコピーするコマンドがすでに用意されています。ただし、これにはエージェントの思考プロセスやツール呼び出しも含まれてしまいます。

最終的な応答のみをコピーしたい場合のために、チャットのコンテキストメニューに **最終応答をコピー** コマンドが追加されました。このコマンドは、すべてのツール呼び出しが実行された後の、エージェントの応答の最後の Markdown セクションをコピーします。

![「最終応答をコピー」コンテキストメニューコマンドのスクリーンショット。](/assets/updates/1_114/chat-copy-final-response.webp)

### ワークスペース検索の簡素化

`#codebase` ツールを使用すると、Copilot がコードベースのセマンティック検索を実行できます。これは、数万から数十万のファイルを含むコードベース内で関連するコードスニペットを探す際に特に役立ちます。

`#codebase` ツールが最初に導入された際、それは Copilot の「質問フロー」向けに設計されていました。つまり、ユーザーが質問をしたり編集を依頼したりすると、Copilot がその応答内に直接結果を生成する仕組みでした。現在では、Copilot とのやり取りのほぼすべてがエージェント主導型となり、エージェントが複数のツールを実行して反復処理を行った上で編集や応答を生成できるようになったため、当初の `#codebase` の設計の多くはもはや適切ではありません。

最初の重要な変更点は、`#codebase`が現在、純粋にセマンティック検索専用に使用されるようになったことです。以前は、精度が低く（かつ非効率な）ファジーテキスト検索にフォールバックすることがありました。エージェントは必要に応じてテキスト検索やファジー検索を行うことはできますが、`#codebase`はセマンティック検索に専念させることを目指しています。

また、コードベースインデックスの管理方法も簡素化しました。 このインデックスこそが、`#codebase`ツールがセマンティック検索結果を迅速に提供することを可能にするものです。以前は、「ローカルインデックス」と「リモートインデックス」という2つの概念がありました。ローカルインデックスは数千ファイルに制限されており、必ずしもセマンティック検索に対応しているわけではありませんでした。一方、リモートインデックスは特定のリポジトリ用にリモートに保存され、チーム全体で共有可能で、数百万のファイルに対応することができました。

現在は、コードベースがセマンティックにインデックスされているか否かという単一の状態のみが存在します。ローカル対リモートの区別はなくなりました。内部的には、インデックスの一部が依然としてローカルマシンに保存され、一部がリモートソースから取得される場合もありますが、ユーザー自身がこれらのインデックスを管理する必要はなくなりました。

これらの変更が Copilot の利用に与える影響は以下の通りです：

-   `#codebase` ツールは常にセマンティックになり、一貫した結果を提供します。
 
-   Copilotは、適切な場合に自動的に`#codebase`を使用してセマンティック検索を行います。インデックスはオンデマンドで生成され、自動的に使用されます。ユーザー自身がインデックスを管理する必要はありません。
 
-   以前インデックスが作成されていると表示されていたワークスペースは、再インデックスが必要になります。 これは通常、ローカルの非セマンティックなインデックスを使用していたことが原因です。
 
-   特にGitHubリポジトリを持たない大規模なコードベースは、現時点ではインデックス化できない可能性があります。これらに対するインデックス作成のサポートも順次展開しています。
 

ワークスペースがセマンティックにインデックス化されていなくても、Copilotの他の検索方法（テキスト、grep、シンボル）を通じて良好な結果が得られることが確認されています。

これらの変更により、エージェントとの連携がより迅速になり、モデルへのコンテキストの質も向上するはずです。また、Copilotの使用が簡素化され、利用可能なツールの理解も容易になると考えています。

詳細については、[ワークスペースガイド](https://code.visualstudio.com/docs/copilot/reference/workspace-context)をご覧ください。

### 過去のチャットセッションのトラブルシューティング（プレビュー）

**設定**: github.copilot.chat.agentDebugLog.enabled VS Codeで開く VS Codeで開く Insiders , github.copilot.chat.agentDebugLog.fileLogging.enabled VS Codeで開く VS Codeで開く Insiders

トラブルシューティング機能（`/troubleshoot` で呼び出します）は、エージェントのデバッグログを分析し、エージェントの動作に関する洞察を表示することで、チャットの問題の診断を支援します。たとえば、カスタム指示が無視された理由や、応答が遅い原因を調査する場合などに役立ちます。

今回のリリースにより、トラブルシューティング時に過去のチャットセッションを参照できるようになりました。これにより、問題を再現することなく、事後的に調査しやすくなりました。

過去のセッションをトラブルシューティングするには、`/troubleshoot` コマンドを使用し、プロンプトに `#session` を追加してください。これによりセッションピッカーが起動し、過去のチャットセッションのリストから選択できるようになります。

![過去のセッション一覧が表示されたセッションピッカーを含むトラブルシューティングプロンプトを示すチャット入力のスクリーンショット。](/assets/updates/1_114/troubleshoot-previous-session.webp)

> **ヒント**: `+` (**コンテキストを追加**) > **セッション** を選択して、セッションを添付することもできます。

## 言語

### TypeScript 6.0

JavaScript および TypeScript のサポートにおいて、TypeScript 6.0 を使用するようになりました。このメジャーアップデートには、重要な修正や改善が含まれています。特に重要な点として、この TypeScript リリースでは、[TypeScript 7.0 のリライト](https://devblogs.microsoft.com/typescript/typescript-native-port/) に向けた準備として、いくつかの古いオプションが非推奨となっています。

TypeScript 6.0 リリースの詳細については、[TypeScript ブログ](https://devblogs.microsoft.com/typescript/announcing-typescript-6.0/)をご覧ください。

### Python

-   Python Environments 拡張機能における env ファイルの通知および環境マネージャーの選択優先順位に関する各種バグ修正：
 
 -   ワークスペースに保存されたインタプリタの選択が、再起動後もターミナルから起動された仮想環境や conda 環境よりも優先されるようになりました。
    -   env ファイルの変更通知に、通知を永久に非表示にする「Don't Show Again」オプションが追加されました。
    
    _[vscode-python#25867](https://github.com/microsoft/vscode-python/issues/25867), [vscode-python-environments#1347](https://github.com/microsoft/vscode-python-environments/issues/1347), [vscode-python-environments#1393](https://github.com/microsoft/vscode-python-environments/pull/1393)_
    
-   Python Environments拡張機能は、Pixi環境が検出された場合にコミュニティのPixi拡張機能を推奨するようになり、環境マネージャーの優先順位にPixiを含めるようになりました。 _[vscode-python-environments#1291](https://github.com/microsoft/vscode-python-environments/pull/1291)_
 

## Enterprise

### Claudeエージェントを無効にするグループポリシー

管理者は、グループポリシーを使用してチャットでの Claude エージェントの統合を無効にできるようになりました。このポリシーが適用されると、`github.copilot.chat.claudeAgent.enabled` 設定は組織によって管理され、ユーザーは Claude エージェントを有効にできなくなります。

このポリシーは、キー `Claude3PIntegration` を持つブール値として設定されます。エンタープライズ ドキュメントの [デバイス管理ポリシー](https://code.visualstudio.com/docs/setup/enterprise#_device-management) について詳しくはこちらをご覧ください。

## 拡張機能への貢献

### GitHub Pull Requests

プルリクエストやイシューの作成、管理、編集を可能にする [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) 拡張機能の開発が進みました。新機能は以下の通りです：

-   PR作成画面のブランチ名がキャッシュされるようになり、ターゲットブランチの読み込みが高速化されました。
-   PRおよびイシューの概要ウェブビューにあるGitHubのパーマリンクは、ワークスペース内に該当するファイルが存在する場合、そのローカルファイルを開くようになりました。

この拡張機能の[0.134.0リリースの変更履歴](https://github.com/microsoft/vscode-pull-request-github/blob/main/CHANGELOG.md#01340)を確認して、リリース内容の詳細をご確認ください。

## 提案中のAPI

### 詳細なツール承認

承認フローを備えた言語モデルツールは、特定の引数の組み合わせに対して承認を限定できるようになりました。

例えば、組み込みの「Run VS Code Command」ツールは、あらゆる VS Code コマンドを実行できます。ユーザーは `editor.action.formatDocument` については常に承認しても問題ないと感じるかもしれませんが、他のコマンドについてはそうではないかもしれません。 このAPIを使用すると、ツール実装側で承認の対象を特定のコマンドに限定できるため、ユーザーは各コマンドを個別に承認できるようになります。

```
export interface LanguageModelToolConfirmationMessages {
  /**
   * 設定すると、この特定の
   * ツールと引数の組み合わせを承認するためのボタンが表示されます。この値は、
   * 承認オプションのラベルとして表示されます。
   *
   * 例えば、ファイルを読み込むツールの場合、これを `"Allow reading 'foo.txt'"` に設定することで、
   * ユーザーはツールのすべての呼び出しを承認することなく、その特定のファイルのみを承認できるようになります。
   *
   */
  approveCombination?: string | MarkdownString;
}
```

詳細については、API提案の全文を参照してください：[Fine grain tool approval](https://github.com/microsoft/vscode/blob/af50a47c13e23e0b3c46719dbd92fe00144362a5/src/vscode-dts/vscode.proposed.toolInvocationApproveCombination.d.ts)。

APIの使用例については、[Copilot Chat拡張機能](https://github.com/microsoft/vscode-copilot-chat/blob/a71b716b1ea82855b90bdab8cd307396b601475e/src/extension/tools/node/vscodeCmdTool.tsx#L101-L105)をご覧ください。

## 非推奨の機能と設定

### 今回のリリースでの新たな非推奨機能

なし

### 今後の非推奨予定

-   **編集モード**は、VS Code バージョン 1.110 をもって正式に非推奨となりました。ユーザーは、VS Code の設定 chat.editMode.hidden を通じて、一時的に編集モードを再有効化できます。VS Code で開く VS Code Insiders で開く。 この設定はバージョン 1.125 までサポートされます。バージョン 1.125 以降、編集モードは完全に削除され、設定から有効にすることはできなくなります。

## 主な修正点

-   [microsoft/vscode #303908](https://github.com/microsoft/vscode/issues/303908) 統合ブラウザで、VS Codeのショートカットがページのショートカットより優先される問題を修正
-   [microsoft/vscode #299777](https://github.com/microsoft/vscode/issues/299777) 統合ブラウザでデバッグが一時停止している間、「チャットに要素を追加」が機能しない問題を修正

## 感謝

課題追跡への貢献:

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

`vscode`への貢献：

-   [@a77ming](https://github.com/a77ming): エージェントセッションのウェルカムページにおける改行されたタイトルのスペースを修正 [PR #304686](https://github.com/microsoft/vscode/pull/304686)
-   [@AshtonYoon (Ashton Yoon)](https://github.com/AshtonYoon): コードブロックを含むマークダウンプレビューでのスクロールのカクつきを修正 [PR #287050](https://github.com/microsoft/vscode/pull/287050)
-   [@buley (Tay)](https://github.com/buley): 修正: ファイル記述子のリークを防ぐため、読み取りストリームを破棄 [PR #303395](https://github.com/microsoft/vscode/pull/303395)
-   [@ConsoleTVs (Erik C. Forés)](https://github.com/ConsoleTVs): 修正(mcp): エージェントプラグインのMCPサーバー定義における環境変数の解決 [PR #303156](https://github.com/microsoft/vscode/pull/303156)
-   [@jonathanrao99 (Jonathan Thota)](https://github.com/jonathanrao99): ブラウザ: クイックピックで新しいタブが点滅するのを防止 [PR #304297](https://github.com/microsoft/vscode/pull/304297)
-   [@ShehabSherif0 (Shehab Sherif)](https://github.com/ShehabSherif0)
    -   fuzzyScore2 テストのアサーションにおける演算子の優先順位を修正 [PR #304449](https://github.com/microsoft/vscode/pull/304449)
    -   パフォーマンスビューの起動ブロックカウントにおけるコピー＆ペーストのバグを修正 [PR #304452](https://github.com/microsoft/vscode/pull/304452)
-   [@Tyriar (Daniel Imms)](https://github.com/Tyriar): notify、classifier、events などから self を削除 [PR #304498](https://github.com/microsoft/vscode/pull/304498)
-   [@xingsy97 (xingsy97)](https://github.com/xingsy97)
    -   キーボードレイアウト - macOS レイアウトラベル内のすべてのダッシュ/ドットを置換 [PR #303971](https://github.com/microsoft/vscode/pull/303971)
    -   エディタ - すべてのプロバイダに一致してしまう貼り付け設定のフィルタを修正 [PR #304044](https://github.com/microsoft/vscode/pull/304044)
    -   設定エディタ - 拡張機能リストの再読み込みが繰り返されるのを回避 [PR #303957](https://github.com/microsoft/vscode/pull/303957)
    -   設定: 並行検索間のタイミングの不整合を回避するためにローカルのStopWatchを使用 [PR #304361](https://github.com/microsoft/vscode/pull/304361)
    -   mergeEditor: removeDiffsをO(K*N)からシングルパスO(N)に最適化 [PR #304404](https://github.com/microsoft/vscode/pull/304404)
    -   タイムライン: ペインの表示/非表示を切り替える際のメモリリークを修正 [PR #304668](https://github.com/microsoft/vscode/pull/304668)
    -   notebook: 未使用セルの検索および選択範囲の重複排除の不具合を修正 [PR #305105](https://github.com/microsoft/vscode/pull/305105)
    -   チャット - 非推奨となったプロンプト属性のスペルを削除 [PR #301976](https://github.com/microsoft/vscode/pull/301976)
-   [@yogeshwaran-c (Yogeshwaran C)](https://github.com/yogeshwaran-c)
    -   修正: ターミナルパネルが terminalEditorActive コンテキストキーを上書きしないように [PR #304802](https://github.com/microsoft/vscode/pull/304802)
    -   修正: HTMLサンプルスニペットを最新化 [PR #304818](https://github.com/microsoft/vscode/pull/304818)
    -   修正: テストアイコンの色をリストのエラー/警告のフォアグラウンド色から継承するようにした [PR #304959](https://github.com/microsoft/vscode/pull/304959)
    -   修正: 明示的な幅/高さの寸法がないSVGでもズームを有効にした [PR #304973](https://github.com/microsoft/vscode/pull/304973)
    -   修正: セッションをまたいでテストカバレッジのソート順を維持するようにした [PR #304979](https://github.com/microsoft/vscode/pull/304979)
    -   修正: エディタが表示されていない場合でも、ユーザー設定を TS サーバーに送信するようにしました [PR #304987](https://github.com/microsoft/vscode/pull/304987)

`vscode-pull-request-github` への貢献:

-   [@Daniel-Aaron-Bloom](https://github.com/Daniel-Aaron-Bloom): WebView内のパーマリンクにローカルファイルへのリンクを追加 [PR #8583](https://github.com/microsoft/vscode-pull-request-github/pull/8583)

`monaco-editor`への貢献:

-   [@pgoslatara (Pádraic Slattery)](https://github.com/pgoslatara): メンテナンス作業: 古いGitHub Actionsのバージョンを更新 [PR #5214](https://github.com/microsoft/monaco-editor/pull/5214)

* * *

新機能が利用可能になり次第、ぜひお試しいただければ幸いです。定期的にこのページをチェックして、最新情報をご確認ください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
