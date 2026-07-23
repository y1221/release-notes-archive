---
product: VSCode
version: 1.130.0
release_title: Visual Studio Code 1.130
release_date: 2026-07-22
source_url: "https://code.visualstudio.com/updates/v1_130"
archived_at: 2026-07-23
---

# Visual Studio Code 1.130

# Visual Studio Code 1.130

[LinkedIn](https://www.linkedin.com/showcase/vs-code)や[X](https://go.microsoft.com/fwlink/?LinkID=533687)、[Bluesky](https://bsky.app/profile/vscode.dev)

* * *

_リリース日: 2026年7月22日_

ダウンロード：Windows：[x64](https://update.code.visualstudio.com/1.130.0/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.130.0/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.130.0/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.130.0/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.130.0/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.130.0/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.130.0/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.130.0/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.130.0/linux-snap-x64/stable)

* * *

Visual Studio Code バージョン 1.130 のリリースへようこそ。今回のリリースでは、エージェントホストの改善、[エージェント](Agents) ウィンドウでのレビューワークフローの高速化、チャットの視認性の向上、およびターミナルリンクのよりスマートな処理が実現されています。

-   [エージェントホスト](#_the-agent-host): 複数の VS Code ウィンドウから接続可能な専用プロセスでセッションを実行します。
 
-   [エージェント ウィンドウの改善 (プレビュー)](#_agents-window-improvements-preview): コンパクトな差分表示、ファイル単位の統計情報、およびハーネス間のワークツリー対応により、複数のファイルに対する変更を迅速にレビューできます。
    
-   [ツール承認の支援](#_assisted-tool-approvals): エージェントタスク実行中にモデルがツール呼び出しのリスクを評価できるようにすることで、承認による中断を削減します。
    
-   [ニーモニック接頭辞付きGit差分表示でのクリック可能なファイルリンク](#_clickable-file-links-in-git-diffs-with-mnemonic-prefixes): ニーモニック接頭辞が有効になっている場合、差分出力から直接ファイルを開くことができます。
 

プログラミングを楽しんでください！

* * *

VS Code は全ユーザー向けに段階的に展開されています。VS Code の **更新の確認** を使用して、すぐに最新バージョンを入手してください。

新機能をいち早く試したい場合は、[**Insiders ナイトリービルドをダウンロード**](https://code.visualstudio.com/insiders)してください。このビルドには、最新アップデートが利用可能になり次第、すぐに反映されます。

* * *

## エージェント

### エージェントホスト

前回のリリースで触れた通り、VS Code におけるエージェントセッションの仕組みを、エージェントホストを中心に再設計しています。エージェントホストとは、[Agent Host Protocol](https://microsoft.github.io/agent-host-protocol/) (AHP) に基づいて、Copilot、Claude、 Codex といったエージェント・ハーネスを実行する専用プロセスです。 セッションは独自のプロセス内で実行されるため、同じセッションに複数の VS Code ウィンドウから同時に接続し、結果を表示することができます。エージェントホストの Copilot エージェントは [Copilot SDK](https://www.npmjs.com/package/@github/copilot-sdk) によって駆動されており、その動作や機能は Copilot CLI、スタンドアロンの GitHub Copilot アプリ、およびその他の Copilot 製品と整合しています。

[VS Code エージェントホストのアーキテクチャ](https://code.visualstudio.com/docs/agents/concepts/agent-host) について詳しくはこちらをご覧ください。

現在、エージェントホストの開発を積極的に進めており、エディタウィンドウおよび [エージェントウィンドウ](https://code.visualstudio.com/docs/agents/agents-window) を通じて段階的にユーザーへ展開しています。この機能を利用するには、`chat.agentHost.enabled` を有効にし、[VS Code で開く](VS Code Insiders)、[VS Code で開く](VS Code Insiders) を選択してください。この設定は組織レベルで管理されています。変更するには、管理者にお問い合わせください。ORG を選択し、ハーネス ドロップダウンからエージェント ホスト ハーネスを選択してください。 以下のスクリーンショットは、エディタウィンドウのエージェントホストで `Copilot` ハーネスを選択する方法を示しています：

![エディタウィンドウのハーネスドロップダウンを示すスクリーンショット。](/assets/updates/1_130/agent-host-harness-dropdown-editor.webp)

エージェントホストへの投資を継続するにつれ、一部の機能はエージェントがエージェントホスト上で実行されている場合にのみ利用可能になる可能性があります。 それらの機能にはこのセクションへのリンクが張られており、必要に応じて、機能を有効にするための追加設定（例：エージェントホスト上でClaudeエージェントを有効にするには `chat.agents.claude.preferAgentHost` を設定）が記載されています。

エージェントホストのご利用中にフィードバックやご要望がございましたら、[イシューを登録](https://github.com/microsoft/vscode/issues) してご報告ください。

#### アシスト付きツールの承認

**設定**: chat.assistedPermissions.enabled VS Codeで開く VS Code Insidersで開く

ツール承認のプロンプトが繰り返し表示されると、長時間実行されるエージェントタスクが中断される可能性があります。アシストされた権限を使用すると、言語モデルが各ツール呼び出しのリスクを評価し、ツールを実行するか、またはユーザーの承認を必要とするかを判断します。

この設定を有効にすると、エージェントホスト上で実行されるエージェントの権限ピッカーに**アシスト付き権限**が追加されます。以下の動画では、デフォルトの承認とアシスト付き権限を比較しています：

### 「エージェント」ウィンドウの改善 (プレビュー)

[エージェントウィンドウ](https://code.visualstudio.com/docs/agents/agents-window) には、変更内容の確認やチャットの管理を容易にするいくつかの更新が含まれています。[エージェントホスト](#_the-agent-host) 上で実行中のセッションを必要とする更新については、以下で説明します。

#### ファイル単位の差分統計

**Changes** エディタの各ファイルヘッダーには、ファイルパスの横にリアルタイムの挿入数と削除数が表示されます。これにより、複数のファイルの差分をスキャンしながら、各ファイルの変更規模を素早く把握できます。

#### コンパクトなマルチファイル差分表示

マルチファイル差分表示では、コードの前の余白を削除した、よりコンパクトなガターが採用されています。ファイルヘッダー、行番号、および変更されていない領域のコントロールは、一貫した配置で表示されるため、幅の狭いエディタでも変更内容の確認に十分なスペースを確保できます。

![マルチファイル差分ビューにおけるファイルレベルの差分統計と、コンパクトで整列されたガターを示すスクリーンショット。](/assets/updates/1_130/agents-compact-diff.webp)

#### コンパクトなクイックチャット

[エージェントホスト](#_the-agent-host)上で実行されるクイックチャットは、セッションリスト内でコンパクトな1行表示を採用しています。通常のセッションでは、変更統計、ステータス、タイムスタンプを含む2行目の表示が維持されるため、クイックチャットを区別しやすくなり、プロジェクトセッションのためのスペースも確保されます。

![セッション一覧におけるコンパクトなクイックチャット行を示すスクリーンショット。](/assets/updates/1_130/agents-compact-quick-chat.webp)

#### すべてのエージェント・ハーネスにおけるワークツリーのサポート

[エージェントホスト](#_the-agent-host)上で実行されるエージェント・ハーネスは、ワークツリーの分離をサポートしています。 「エージェント」ウィンドウの **[新しいワークツリー]** チェックボックスは、以前は Copilot ハーネスでのみサポートされていました。Claude および Codex セッションも Git ワークツリー内で実行されるため、ハーネスに関係なく、同じワークスペース内で異なる機能向けの並列セッションを簡単に立ち上げることができます。

![Claudeエージェントセッションの「新しいワークツリー」オプションを示すスクリーンショット。](/assets/updates/1_130/agents-worktree.webp)

## チャット

### チャットのタイムスタンプ

**設定**: chat.verbose VS Codeで開く VS Codeで開く Insiders

チャットのリクエストと応答にタイムスタンプが表示されます。メッセージツールバーにカーソルを合わせると、チャットやり取りのタイムスタンプと経過時間を確認できます。この機能は、chat.verbose（VS Codeで開く、VS Code Insiders）で無効にできます。

### Copilot BusinessおよびEnterpriseのAIクレジット使用量の集計

Copilot Business および Copilot Enterprise のユーザーは、現在の請求サイクルにおける AI クレジットの合計使用量を、Copilot のステータスメニューから直接確認できるようになりました。以前は、ユーザーレベルの予算が設定されている場合にのみクレジットの使用状況が表示されていたため、組織管理下の多くのユーザーは、自分がどれだけのクレジットを消費したかを確認できませんでした。

現在では、ユーザーレベルの予算が設定されていない場合でも、ステータスメニューに当該請求サイクルでこれまでに使用されたクレジットの合計数が表示されます。これにより、消費状況を一目で把握できるため、エディタを離れることなく使用パターンをより深く理解できるようになります。

![Copilot Enterprise ユーザーのクレジット使用量の集計値を表示する Copilot ステータスメニューのスクリーンショット。](/assets/updates/1_130/aggregate-credit-usage.webp)

## ターミナル

### ニーモニック接頭辞付き Git diff 内のクリック可能なファイルリンク

Gitの[`diff.mnemonicPrefix`](https://git-scm.com/docs/diff-config#Documentation/diff-config.txt-diffmnemonicPrefix)オプションを有効にすると、ターミナル上のGit diff出力からファイルリンクを直接開くことができます。 VS Code は、インデックス用の `i/` やワーキングツリー用の `w/` といったプレフィックスを認識し、リンク先からプレフィックスを削除して、正しいファイルが開くようにします。

ニーモニック接頭辞が有効になっている場合、VS Code は `git diff --no-index` によって生成される数値の接頭辞 `1/` や `2/` も認識します。

## エンジニアリング

VS Code リポジトリは、TypeScript 7 のリリース版を使用してコンパイルされています。また、TypeScript 7 拡張機能についても、リリース版に切り替えました。 TypeScript チームによる [TypeScript 7.0 リリース発表](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/) をご覧ください。

## 謝辞

`vscode` への貢献者：

-   [@accnops (Arthur Cnops)](https://github.com/accnops)
    -   音声機能：バックエンドによる自動ナレーションを無効化 (auto\_narrate: false) [PR #325799](https://github.com/microsoft/vscode/pull/325799)
    -   音声: セッションコンテキストが送信された後にのみ `request\_narration` を送信 [PR #325928](https://github.com/microsoft/vscode/pull/325928)
    -   voice: ナレーションの送信が失敗した場合、NACK を送信し、クライアントの再検証を行う [PR #325966](https://github.com/microsoft/vscode/pull/325966)
-   [@ahmadawais (Ahmad Awais)](https://github.com/ahmadawais): ターミナルタブのタイトル用エージェントCLIとしてコマンドコードを検出 [PR #324417](https://github.com/microsoft/vscode/pull/324417)
-   [@AntonioLujanoLuna (Antonio Lujano Luna)](https://github.com/AntonioLujanoLuna): BYOK AnthropicエンドポイントがPDFを画像ブロックとして送信する問題を修正 [PR #324960](https://github.com/microsoft/vscode/pull/324960)
-   [@arham766 (Shahrier Islam Arham)](https://github.com/arham766): 雑務: Process ExplorerにおけるUTF-8コマンドラインの不具合を修正するため、windows-process-treeを0.8.0に更新 [PR #324283](https://github.com/microsoft/vscode/pull/324283)
-   [@clintharrison (Clint Harrison)](https://github.com/clintharrison): ターミナルリンクの git diff 解析でニーモニック接頭辞をサポート [PR #298490](https://github.com/microsoft/vscode/pull/298490)
-   [@justjavac (迷渡)](https://github.com/justjavac): デコレーション: 優先度の低い色へのフォールバック [PR #325422](https://github.com/microsoft/vscode/pull/325422)
-   [@kobihikri (Kobi Hikri)](https://github.com/kobihikri): 削除された no-package-lock / no-yarn-lock ワークフローに対する無効な CODEOWNERS ルールを削除 [PR #325932](https://github.com/microsoft/vscode/pull/325932)
-   [@mirimadahmed (Mir)](https://github.com/mirimadahmed)
    -   音声割り込みの再生処理 [PR #325808](https://github.com/microsoft/vscode/pull/325808)
    -   音声割り込みプロトコルの修正 [PR #326159](https://github.com/microsoft/vscode/pull/326159)
    -   ボイスエージェントがクライアントから音声言語のロケールを送信する [PR #325931](https://github.com/microsoft/vscode/pull/325931)
    -   音声エージェントが割り込みに対応するため、常にストリーミングモードにする [PR #326165](https://github.com/microsoft/vscode/pull/326165)
    -   スコープ指定可能なライブ音声トランスクリプトを追加 [PR #326134](https://github.com/microsoft/vscode/pull/326134)
-   [@pony-maggie (Lucas Ma)](https://github.com/pony-maggie)
    -   古いシンプルダイアログフォルダの更新を回避 [PR #321357](https://github.com/microsoft/vscode/pull/321357)
    -   簡易ファイルダイアログでネストされたフォルダを作成できるように [PR #321355](https://github.com/microsoft/vscode/pull/321355)
-   [@rfeltis (Ralph Feltis)](https://github.com/rfeltis): クォータの推移に関する課金期間の計算を修正 [PR #325895](https://github.com/microsoft/vscode/pull/325895)
-   [@smorimoto (Sora Morimoto)](https://github.com/smorimoto): 設定ラベルで OCaml を認識するように修正 [PR #325457](https://github.com/microsoft/vscode/pull/325457)
-   [@spokodev](https://github.com/spokodev): 修正: fuzzyContains での大文字のクエリ文字のマッチング [PR #324047](https://github.com/microsoft/vscode/pull/324047)
-   [@UditDewan (udit)](https://github.com/UditDewan): tunnelProtocol コンテキストキーがフォーカス時に常に https に解決される問題を修正 [PR #325445](https://github.com/microsoft/vscode/pull/325445)

### 課題管理

課題管理への貢献：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

* * *

新機能が利用可能になり次第、すぐに試してくださる皆様に心より感謝いたします。ぜひ定期的にこのページをチェックして、新機能についてご確認ください。

> 以前の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [更新情報](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
