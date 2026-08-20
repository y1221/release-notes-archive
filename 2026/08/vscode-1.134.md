---
product: VSCode
version: 1.134.0
release_title: Visual Studio Code 1.134
release_date: 2026-08-19
source_url: "https://code.visualstudio.com/updates/v1_134"
archived_at: 2026-08-20
---

# Visual Studio Code 1.134

# Visual Studio Code 1.134

[LinkedIn](https://www.linkedin.com/showcase/vs-code)や[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)でフォローしてください。

* * *

_リリース日: 2026年8月19日_

ダウンロード: Windows: [x64](https://update.code.visualstudio.com/1.134.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.134.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.134.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.134.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.134.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.134.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.134.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.134.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.134.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.134 のリリースへようこそ。このリリースでは、複数のウィンドウをまたいだ作業、関連するチャットを並べて整理すること、そして長い会話のナビゲーションを高速化できるようになります。

-   [並列チャット](#_grid-layout-for-chats-in-a-session): 関連するチャットやサブエージェントのチャットをグループごとに配置し、比較しやすくします。
    
-   [プロンプトのタイムライン](#_prompt-timeline): プロンプト間をすばやく移動し、ファイルの変更履歴を確認できます。
 
-   [チャット内検索](#_find-in-chat): 会話全体からテキストを簡単に検索できます。
    
-   [HTML ファイルのプレビュー](#_open-html-files-in-the-integrated-browser-by-default): 組み込みブラウザをデフォルトのエディタに設定することで、ローカルの HTML ファイルを VS Code 内で直接プレビューできます。
 

プログラミングを楽しんでください！

* * *

VS Code は全ユーザーに向けて順次展開されています。VS Code の **更新の確認** 機能を使用すると、最新バージョンをすぐに入手できます。

新機能をいち早く試したい場合は、[**Insiders ナイトリービルドをダウンロード**](https://code.visualstudio.com/insiders)してください。このビルドには、最新アップデートが利用可能になり次第、すぐに反映されます。

* * *

## エージェント

### エージェントホスト

エージェントホストを使用すると、複数の VS Code ウィンドウから同じエージェントセッションに接続できます。これは、[エージェントホストプロトコル](https://microsoft.github.io/agent-host-protocol/) (AHP) に基づいて、専用のプロセスでエージェントハーネスを実行します。 エージェントホストの Copilot エージェントは、[Copilot SDK](https://www.npmjs.com/package/@github/copilot-sdk) によって動作しており、エージェントの挙動や機能は Copilot CLI、スタンドアロンの GitHub Copilot アプリ、およびその他の Copilot 製品と整合しています。

現在、エージェントホストの開発を積極的に進めています。以下のスクリーンショットは、エディタウィンドウ内のエージェントホストで `Copilot` ハーネスが選択されている様子を示しています：

![エディタウィンドウ内のハネス・ドロップダウンを表示したスクリーンショット。](/assets/updates/1_134/agent-host-harness-dropdown-editor.webp)

詳細については、[VS Code エージェントホストのドキュメント](https://code.visualstudio.com/docs/agents/concepts/agent-host)をご覧ください。 フィードバックやご要望がございましたら、[イシューを登録](https://github.com/microsoft/vscode/issues)してご連絡ください。

### セッション内のチャット用グリッドレイアウト

チャットを水平または垂直のグループに整理することで、関連する会話を常に表示したままにできます。チャットやサブエージェントのチャットをグループにドラッグして、結果を比較したり、作業状況を並べて確認したりできます。セッションに戻ったりウィンドウを再読み込みしたりしても、VS Code はチャットグループのレイアウトとフォーカスを復元します。

サイドチャットを作成すると、現在のチャットの横に新しい会話を開くことができます。

サブエージェントのチャットをグループにドラッグ＆ドロップすると、現在のチャットと並べて表示できます。

また、**Chats** ピッカーで Alt キーを押しながらチャットを選択すると、そのチャットを横に開くこともできます。

### サイドペインのレイアウトの改善

**設定**: sessions.layout.singlePaneDetailPanel VS Code で開く VS Code Insiders で開く および workbench.editor.showTabs VS Code で開く VS Code Insiders で開く

シングルペインレイアウトでは、セッションの詳細とエディタが、チャットの隣にある共有タブバーに表示されます。 今回のリリースでは、このレイアウトの制御がより簡単になりました：

-   レイアウトは、workbench.editor.showTabs（VS Codeで開く VS Code Insiders）の設定に従います。複数のタブが表示されたままになりますが、`single` および `none` の値では、コンパクトなシングルタイトルヘッダーが使用されます。
 
 ![「エージェント」ウィンドウでコンパクトなシングルタイトルヘッダーが表示されているスクリーンショット。](/assets/updates/1_134/agents-window-single-tab.webp)
 
-   テキストファイルエディタは、「変更履歴」エディタと同じヘッダー構造を採用しており、ヘッダーにファイルのブレッドクラムが表示されます。
    
-   セッションを切り替えてもサイドペインのサイズと表示状態が維持されるため、予期しないレイアウトのずれを防ぎます。
 

`sessions.layout.singlePaneDetailPanel` を VS Code Insiders で有効にし、ウィンドウを再読み込みすると、このレイアウトを使用できます。

### プロンプトのタイムライン

**設定**: sessions.chatTimeline.display VS Code で開く VS Code Insiders で開く

エージェントセッションが長くなると、以前のプロンプトを見つけたり、どのプロンプトがファイルを変更したかを特定したりするのが困難になる場合があります。

「エージェント」ウィンドウには、トランスクリプトのガターにタイムラインが表示されます。 各ドットはプロンプトを1つ表しており、ハイライトされたドットが現在の位置を示します。タイムラインにカーソルを合わせるとプロンプトが表示され、その中から1つを選択するとその位置にジャンプします。ファイルを変更したプロンプトについては、リストに追加・削除された行数が表示され、変更内容を直接開いて確認することができます。

settings.chatTimeline.display 設定（VS Code で開く、VS Code Insiders）を使用して、タイムラインをスクロールバー（`ruler`）の横に表示（`on`）するか、非表示（`off`）にするかを選択できます。

## チャット

### チャット内の検索

長い会話の過去の情報を探すには、以前は会話履歴をスクロールして確認する必要がありました。⌘F（Windows、Linux では Ctrl+F）を使用すると、チャットビュー、チャットエディタ、および「エージェント」ウィンドウ内の会話を検索できます。

検索対象には、現在画面に表示されていないコンテンツも含め、会話全体が含まれます。 一致する項目間を移動すると、VS Code はその都度、各一致箇所を画面内にスクロール表示し、一致する内容が含まれている場合は折りたたまれている作業概要を展開します。大文字と小文字を区別する検索、単語単位での検索、または正規表現の使用も可能です。

## エディタの操作性

### タブから他のエディタを閉じる

タブのコンテキストメニューを使用せずに、1 つのエディタのみを開いたままにできます。 Alt キーを押したまま、各エディタタブの閉じ動作を **他のエディタを閉じる** に変更し、残したいタブでそのアクションを選択します。

### HTML ファイルをデフォルトで統合ブラウザで開く

**設定**: workbench.editorAssociations Open in VS Code Open in VS Code Insiders

ローカルの HTML ファイルを編集するのではなく、プレビューすることが多い場合は、組み込みブラウザをそれらのデフォルトのエディタとして設定してください。この動作は、workbench.editorAssociations 設定（「VS Code で開く」「VS Code Insiders で開く」）またはエディタのヘッダーから設定できます。

組み込みブラウザは、HTML ファイルとの関連付けを維持したまま、スタンドアロンのブラウザタブと同じ機能を提供します。この関連付けを維持するため、リンクやその他のナビゲーションは新しいタブで開かれます。

## 謝辞

`vscode` への貢献:

-   [@a1exmozz](https://github.com/a1exmozz): agentHost: CTS へのユーザーメッセージテレメトリ送信 [PR #329961](https://github.com/microsoft/vscode/pull/329961)
-   [@abmahdy (Ahmed Mahdy)](https://github.com/abmahdy): ターミナル補完通知の指示文を保持 [PR #330570](https://github.com/microsoft/vscode/pull/330570)
-   [@benelog (Sanghyuk Jung)](https://github.com/benelog): Copilotのプロンプトテキスト内の重複する単語を修正 [PR #328961](https://github.com/microsoft/vscode/pull/328961)
-   [@cipheraxat (Akshat Anand)](https://github.com/cipheraxat): Modern UI のタブ：ファイル名と重ならないよう、閉じるボタンの列を確保（修正 #329605） [PR #330754](https://github.com/microsoft/vscode/pull/330754)
-   [@jadefr (Jade Ferreira Vieira)](https://github.com/jadefr): 機能／Alt キーを押しながらクリックして他のタブを閉じる [PR #328975](https://github.com/microsoft/vscode/pull/328975)
-   [@martincheck (Martin Check)](https://github.com/martincheck): チャット: read_file でのサロゲートペアの分割を回避 [PR #331005](https://github.com/microsoft/vscode/pull/331005)
-   [@marvinroger (Marvin ROGER)](https://github.com/marvinroger): 未定義の `document.queryCommandSupported` によるクラッシュを修正 [PR #330298](https://github.com/microsoft/vscode/pull/330298)
-   [@mirimadahmed (Mir)](https://github.com/mirimadahmed): voice: send_to_chat での new_session フラグを反映 [PR #330859](https://github.com/microsoft/vscode/pull/330859)
-   [@Shaurav-Vora (Shaurav Vora)](https://github.com/Shaurav-Vora): 共著者: チャットペインおよびエディタでの Ctrl+F 検索ウィジェットのサポートを実装 [PR #330340](https://github.com/microsoft/vscode/pull/330340)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   修正：拡張機能ビューのメモリリーク [PR #330210](https://github.com/microsoft/vscode/pull/330210)
    -   修正: ソース管理ビューのメモリリーク [PR #330241](https://github.com/microsoft/vscode/pull/330241)
    -   修正：コードアクションにおけるメモリリーク [PR #330142](https://github.com/microsoft/vscode/pull/330142)
    -   修正: 検索ビューでのメモリリーク [PR #330240](https://github.com/microsoft/vscode/pull/330240)
    -   修正: チャットウィジェットでのメモリリーク [PR #326876](https://github.com/microsoft/vscode/pull/326876)
    -   修正: 参照ビューのメモリリーク [PR #330191](https://github.com/microsoft/vscode/pull/330191)
    -   修正：検索結果のフォルダ一致におけるメモリリーク [PR #331012](https://github.com/microsoft/vscode/pull/331012)
-   [@yzxcj797](https://github.com/yzxcj797): ドキュメント：Copilot拡張機能のREADMEにあるnes-video.gifへのリンク切れを修正 [PR #330992](https://github.com/microsoft/vscode/pull/330992)

### 課題管理

課題管理への貢献：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

* * *

新機能が利用可能になり次第、すぐに試してくださる皆様に感謝いたします。新機能については、こまめにチェックしてください。

> 過去の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [更新情報](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
