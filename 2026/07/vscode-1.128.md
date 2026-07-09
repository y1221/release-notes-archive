---
product: VSCode
version: 1.128.0
release_title: Visual Studio Code 1.128
release_date: 2026-07-08
source_url: "https://code.visualstudio.com/updates/v1_128"
archived_at: 2026-07-09
---

# Visual Studio Code 1.128

# Visual Studio Code 1.128

[LinkedIn](https://www.linkedin.com/showcase/vs-code)や[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)

* * *

_リリース日: 2026年7月8日_

ダウンロード：Windows：[x64](https://update.code.visualstudio.com/1.128.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.128.0/win32-arm64-user/stable) | Mac：[ユニバーサル](https://update.code.visualstudio.com/1.128.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.128.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.128.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.128.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.128.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.128.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.128.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.128 のリリースへようこそ。今回のリリースでは、より充実したマルチチャットエージェントセッション、Chat での画像サポートの一般提供、および OS レベルのキーボードショートカットが追加されました。

-   [マルチチャット・エージェント・セッション](#_multiple-chats-in-a-session-now-supports-claude-harness): 1つのClaudeセッション内で複数の関連するチャットを実行し、アプローチを比較したり、並行して作業したりできます。
    
-   [クイックチャット](#_chat-without-a-selected-workspace-in-the-agents-window): ワークスペースを事前に開かなくても、Agents ウィンドウから質問を投げかけることができます。
    
-   [Copilot Vision](#_copilot-vision-is-now-generally-available): 画像やPDFを貼り付け、ドラッグ、またはドロップしてチャットに添付する機能が、一般提供開始されました。
    
-   [ブラウザタブの配置](#_configurable-placement-of-integrated-browser-tabs): 統合されたブラウザタブを開く場所（アクティブなグループ、専用のサイドグループ、または別のウィンドウ）を選択できます。
    
-   [OSレベルのキーボードショートカット](#_os-level-keyboard-shortcuts): VS Codeにフォーカスが当たっていないときでも機能するキーバインドを使用して、VS Codeのコマンドを実行できます。
 

プログラミングを楽しんでください！

* * *

VS Codeは、すべてのユーザーに向けて段階的に展開されています。 VS Code の **更新を確認** 機能を使用すると、すぐに最新バージョンを入手できます。

新機能をいち早く試したい場合は、[**ナイトリー Insiders ビルドをダウンロード**](https://code.visualstudio.com/insiders) してください。このビルドには、最新アップデートが利用可能になり次第、すぐに反映されます。

* * *

## エージェント

### 1つのセッションでの複数チャットに、Claudeエージェントが対応しました

[エージェントウィンドウ](https://code.visualstudio.com/docs/agents/agents-window) での Claude エージェントホストセッションでは、Anthropic の Claude Agent SDK を搭載したエージェントコーディング機能を VS Code 内で直接利用できます。複数チャット機能により、関連する会話スレッドを個別のトップレベルセッションに分散させることなく、1 つのセッション内にまとめて管理できます。

単一チャットによるClaudeセッションは、エージェントと集中的に作業するための従来の方法として引き続き利用可能です。複数チャット機能では、1つのセッションに関連するチャットを含めることができるため、アプローチの比較、以前のターンからの分岐、作業の並行実行が可能になります。 チャットの追加、既存のターンからのチャットの分岐、ピアチャット間の切り替え、およびターンの同時送信が可能です。各チャットは独自の履歴、タイトル、モデル選択を保持し、再起動時には親セッションと共に復元されます。ピアチャットは Claude セッションの下にグループ化されたままとなり、個別のトップレベルセッションとして表示されることはありません。

以下の動画では、複数のチャットを含む単一の Claude セッションを紹介しています。メインのチャットでは Express アプリに `/health` エンドポイントを追加し、並行してピアチャットがそのテストを記述し、フォークされたチャットでは代替の実装を検討しています。各チャットは独立して実行され、同じセッションの下にグループ化されたままです。

### 「エージェント」ウィンドウでワークスペースを選択せずにチャットを行う

「エージェント」ウィンドウは、エージェントセッションの作成、再開、管理を行うための専用スペースです。プロジェクト作業の場合、これらのセッションでは、チャット、ファイル、変更内容がワークスペースと連動して管理されます。

フォルダに関連付けられていない質問については、ワークスペースを選択せずに「エージェント」ウィンドウでチャットを開始できるようになりました。これらのチャットは**「チャット」**セクションに表示され、フォーカスが当てられた状態で開かれ、すぐに入力できるようになっています。**「チャット」**セクションのヘッダーにあるプラスボタンまたは をクリックして、クイックチャットを開始してください。

クイックチャットはワークスペースに紐づいていないため、ワークスペース固有の**変更**や**ファイル**のサイドペインは表示されません。クイックチャットは再読み込み後に他のセッションと共に復元されますが、ワークスペースのセッションとは区別されたままになります。

ワークスペースのないチャットはエージェントホストセッションでのみサポートされているため、この機能は、chat.agentHost.enabled が有効になっている場合に利用可能です。VS Code で開く VS Code で開く Insiders この設定は組織レベルで管理されます。変更するには、管理者に連絡してください。ORG。

**「固定」**および**「チャット」**グループは、デフォルトでは空の状態でも表示されたままになります。セッションが含まれるようになるまでこれらのデフォルトグループを非表示にするには、sessions.list.showEmptyDefaultGroups を使用してください。VS Code で開く VS Code で開く Insiders。

### 「エージェント」ウィンドウでの読み取り専用サブエージェントチャット (プレビュー)

エージェントがサブエージェントに作業を委任した場合、メインの会話の流れを中断したり方向転換させたりすることなく、各ワーカーの進捗状況を追跡できます。「エージェント」ウィンドウは、チャットとセッションを主要なインターフェースとして、プロジェクトを横断するエージェント主導のワークフローのための専用スペースを提供します。

セッションで [サブエージェント](https://code.visualstudio.com/docs/agents/subagents) が生成されると、そのトランスクリプトは読み取り専用のピアチャットとして表示されます。 サブエージェントのチャットは、「会話」メニュー、実行中のサブエージェントチップ、または親のトランスクリプト内のインラインサブエージェントピルから開くまで、タブストリップには表示されません。 開かれたサブエージェントのチャットにはリアルタイムの進行状況が表示され、利用可能な場合はサブエージェントのタイトルが使用されます。また、作成者やチャット操作の変更は省略されるため、ワーカーのトランスクリプトは閲覧専用として保持されます。

### 「エージェント」ウィンドウ内のチャット用キーボードショートカット

「エージェント」ウィンドウはマルチチャットセッションに対応しており、1つのエージェントセッションに複数の関連チャットを含めることができます。 キーボード操作によるチャットナビゲーションを使用すると、キーボードから手を離すことなくチャット間を移動したり、チャットタブを管理したりできます。

-   でチャットを作成します。
-   で最後に閉じたチャットを再表示します。
-   と で、次のチャットまたは前のチャットに移動します。
-   と で、開いているチャット間をすばやく切り替えます。
-   でアクティブなチャットタブを閉じます。
-   でアクティブなメイン以外のチャットを削除します。
-   で、開いているチャットや閉じているチャットを検索できるピッカーを開きます。

これらのショートカットは「エージェント」ウィンドウ内に限定されており、チャット固有の操作がない場合は、既存のセッションレベルの動作にフォールバックします。

## チャット

### Copilot Vision が一般提供開始

この最新リリースを皮切りに、VS Code でマルチモーダル機能が一般提供開始されました。画像や PDF は、チャットに貼り付ける、ドラッグ＆ドロップする、またはコンテキストメニューを使用することで添付できます。また、ツール呼び出しを通じて、エージェントが画像を読み取ることも可能です。

サポートされている形式や利用状況の詳細については、こちらの [GitHub 変更履歴](https://github.blog/changelog/2026-07-01-copilot-vision-is-generally-available/) をご確認ください。

### エージェントホストの Copilot セッションにおける BYOK モデル（実験的機能）

**設定**: chat.agentHost.byokModels.enabled VS Code で開く VS Code Insiders で開く

エージェントホストでセッションを実行する際は、[BYOK (Bring Your Own Key) モデル](https://code.visualstudio.com/docs/agent-customization/language-models#_bring-your-own-language-model-key) を使用してください。chat.agentHost.byokModels を有効にし、enabled VS Codeで開く VS Codeで開く Insiders を有効にし、変更を反映させるためにエージェントホストプロセスを再起動してください。

この機能は実験的であり、現在も活発に開発が進められています。

### カスタムエンドポイントモデルのサンプリングパラメータの設定

各 [カスタムエンドポイントモデル](https://code.visualstudio.com/docs/agent-customization/language-models#_add-a-custom-endpoint-model) に対して `temperature` および `top_p` を設定できるため、厳格なパラメーター要件を持つプロバイダーでもリクエストを処理できます。

モデルの JSON 設定に `modelOptions` オブジェクトを追加します：

```
{
   ...
   "models": [
   {
 "id": "<model-id>",
 "modelOptions": {
 "temperature": 1,
 "top_p": null
 },
 ...
   }
}
```

プロパティに数値を設定すると、VS Code が送信するデフォルト値を上書きできます。`null` に設定すると、リクエストからそのパラメータが省略され、モデルサーバーのデフォルト値が使用されます。これらのオプションは、チャット補完、応答、およびメッセージ互換のエンドポイントに適用されます。

### BYOK 用のデフォルトユーティリティモデルの設定

**設定**: chat.byokUtilityModelDefault VS Code で開く VS Code Insiders で開く

BYOK（Bring Your Own Key）モデルをメインのエージェントモデルとして使用する場合、チャットのタイトルやコミットメッセージの生成など、組み込みのユーティリティフローで使用されるデフォルトの動作を変更できます。 chat.byokUtilityModelDefault を設定し、VS Code で開く VS Code で開く Insiders を使用して、メインのエージェントモデルを使用するか、GitHub Copilot が提供するモデルを使用するか、またはデフォルトのユーティリティモデルを使用しないかを選択できます。

> **注:** デフォルトの動作では、メインエージェントとして BYOK モデルが使用されている場合、ユーティリティモデルは使用されません。このオプションを設定しない限り、チャットタイトルの生成やコミットメッセージの生成などのバックグラウンドタスクは機能しません。

メインエージェントモデルが GitHub Copilot によって提供されている場合、この設定は効果を持ちません。chat.utilityModel [VS Code で開く] [VS Code Insiders で開く] または chat.utilitySmallModel [VS Code で開く] [VS Code Insiders で開く] で構成されたモデルは、このデフォルト設定よりも優先されます。

### 特定のチャットへのディープリンク

[Agents] ウィンドウを使用すると、エージェント セッションの管理や、関連するワークスペースやチャットへの復帰が容易になります。ディープリンクを使用すると、関連するチャットに直接戻ることができるため、まずワークスペースを開いてから、Chat で手動でセッションを探す必要がなくなります。

アプリがセッションの `vscode://` ディープリンクを開くと、VS Code はそのワークスペースを開き、リンクの `session` クエリパラメータで指定された特定のチャットにフォーカスを合わせます。 「エージェント」ウィンドウの **「VS Code で開く」** アクションも同様の動作をし、セッションのワークスペースフォルダとアクティブなチャットの両方を新しい VS Code ウィンドウで開きます。

## エディタの操作性

### 統合されたブラウザタブの配置設定

**設定**: workbench.browser.newTabPlacement Open in VS Code Open in VS Code Insiders

タブを整理しておくのは難しい場合があります。今回のリリースでは、`workbench.browser.newTabPlacement` 設定（**VS Code で開く**、**VS Code で開く（Insiders）**）を通じて、ブラウザタブを開く場所を設定できるようになりました。この設定には、以下の値を指定できます：

-   **`activeGroup`** (既定値): ブラウザタブは常にアクティブなエディターグループ内に開きます。
-   **`sideGroup`**: ブラウザタブは、側面に配置された専用のグループ内に開きます。このグループはロックされているため、そこに開くのはブラウザタブのみです。
-   **`window`**: ブラウザタブは専用の補助ウィンドウで開きます。このウィンドウグループもロックされており、ブラウザタブのみが開きます。

タブの配置は引き続き自由に変更可能です。また、既存のタブから開いたページ（例: `Ctrl` キーを押しながらリンクを選択した場合）は、親タブと同じグループで開きます。

### OSレベルのキーボードショートカット

VS Codeでは、OSレベルのキーボードショートカットを設定できるようになりました。これらのショートカットは、VS Codeがアクティブでない場合でも有効です。`keybindings.json`内のキーバインディング定義に `systemWide` を追加することで、OSレベルの設定にできます。 たとえば、MacOS で「Agents」ウィンドウにフォーカスを合わせるための `keybindings.json` 内のキーバインディングは次のようになります:

```
{
  "key": "cmd+shift+a",
  "command": "workbench.action.openAgentsWindow",
  "systemWide": true
}
```

## エンタープライズ

### OpenTelemetry を使用した Copilot テレメトリのエクスポート管理

組織は、GitHub Copilot が [OpenTelemetry](https://opentelemetry.io/) (OTel) データを送信する先を指定できます。これにより、各開発者が `OTEL_*` 環境変数を設定しなくても、テレメトリデータが承認されたコレクターに送信されます。 この管理設定は、Copilot Chat 拡張機能とエージェントのホストプロセスの両方に適用されます。

管理者は、サポートされている配信チャネルのいずれかを使用して、[Copilot 管理設定](https://code.visualstudio.com/docs/enterprise/ai-settings#_deploy-copilot-managed-settings) の `telemetry` ブロックを通じてこれらの設定を配信します。このブロックでは以下を制御します:

-   OTLP エクスポートエンドポイントとプロトコル。
-   OTel サービス名とリソース属性。
-   コレクターへの認証トークンなどのエクスポーターヘッダー。
-   プロンプトおよびレスポンスの内容をキャプチャするかどうか、および開発者がそれを変更できるかどうか。

管理対象の値は常に優先され、環境変数やユーザー設定よりも優先されます。

詳細については、[OpenTelemetry を使用したテレメトリエクスポートの設定](https://code.visualstudio.com/docs/enterprise/ai-settings#_configure-telemetry-export-with-opentelemetry) および [OpenTelemetry を使用したエージェント使用状況の監視](https://code.visualstudio.com/docs/agents/guides/monitoring-agents) を参照してください。

## 謝辞

`vscode` への貢献：

-   [@accnops (Arthur Cnops)](https://github.com/accnops): チャット/音声：質問カルーセルに音声回答を表示 （スキップされた問題を修正） [PR #323161](https://github.com/microsoft/vscode/pull/323161)
-   [@dobbydobap (varshitha)](https://github.com/dobbydobap): reevaluateOnRerun タスクにおいて、2回目の「最後のタスクを再実行」が起動しない問題を修正 [PR #324571](https://github.com/microsoft/vscode/pull/324571)
-   [@JeffreyCA](https://github.com/JeffreyCA): Azure Developer CLI (azd) の Fig 仕様を更新 [PR #321221](https://github.com/microsoft/vscode/pull/321221)
-   [@yavanosta (Dmitry Guketlev)](https://github.com/yavanosta): growUntilVariableBoundaries で startColumn を使用 [PR #324523](https://github.com/microsoft/vscode/pull/324523)

### 課題追跡

課題追跡への貢献：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@jasonperry1231hou-lang (jasonperry1231hou-lang)](https://github.com/jasonperry1231hou-lang)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@luo2430 (luo2430)](https://github.com/luo2430)

* * *

新機能が利用可能になり次第、すぐに試してくださる皆様に心より感謝いたします。ぜひ定期的にこのページをチェックして、新機能についてご確認ください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [アップデート](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
