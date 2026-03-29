---
product: VSCode
version: 1.107.0
release_title: November 2025 (version 1.107)
release_date: 2025-12-10
source_url: "https://code.visualstudio.com/updates/v1_107"
archived_at: 2026-03-29
---

# November 2025 (version 1.107)

# 2025年11月（バージョン 1.107）

_リリース日：2025年12月10日_

**アップデート 1.107.1**: このアップデートでは、[エージェントセッションの操作性](#_integrating-agent-sessions-and-chat)が改善され、[エージェントワークフローのチュートリアル](https://code.visualstudio.com/docs/copilot/agents/agents-tutorial)が追加され、以下の[課題](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aclosed+milestone%3A%22November+2025+Recovery+1%22+）。主な変更点は以下の通りです：

-   エージェントセッションの表示はデフォルトで並列表示となり、切り替え状態が記憶されるようになりました。
-   入力が必要なエージェントセッションには、明確にマークが表示されるようになりました。
-   バックグラウンドセッション作成時にワークスペースの変更内容をコピーできるようになりました。
-   新しいセッションを作成しても、チャットプロンプトが消去されなくなりました。
-   クラウドセッション内のツール呼び出しは、デフォルトで折りたたまれるようになりました。

ダウンロード：Windows：[x64](https://update.code.visualstudio.com/1.107.1/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.107.1/win32-arm64-user/stable) | Mac：[Universal](https://update.code.visualstudio.com/1.107.1/darwin-universal/stable) [Intel](https://update.code.visualstudio.com/1.107.1/darwin/stable) [silicon](https://update.code.visualstudio.com/1.107.1/darwin-arm64/stable) | Linux: [deb](https://update.code.visualstudio.com/1.107.1/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.107.1/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.107.1/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.107.1/linux-snap-x64/stable)

* * *

VS Code 1.107 ではマルチエージェントオーケストレーションが導入されました。GitHub Copilot とカスタムエージェントを併用することで、開発を加速し並列化できます。

-   **Agent HQ** では、すべてのエージェントを一元管理でき、Copilot とカスタムエージェントがタスク間で連携できるようになります。
-   **バックグラウンドエージェント** は、アクティブな作業に干渉しないよう隔離されたワークスペースで実行され、複数のバックグラウンドタスクを同時に実行できます。
-   **Delegate** 機能により、ローカル、バックグラウンド、またはクラウドのエージェント間で作業を割り当て、ワークフローを中断することなく継続できます。

![VS Code 2025年11月リリースの画像。](/assets/updates/1_107/release-highlights-stable.webp)

 

[VS Code 1.107 リリースハイライト動画](https://aka.ms/VSCode/1-107rn)をご覧いただき、エンジニアによるこれらの機能の解説をお聞きください！

プログラミングを楽しんでください！

 

> リリースノートは、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) ページでオンラインでご覧いただけます。  
> **Insiders:** [ナイトリー Insiders ビルドをダウンロード](https://code.visualstudio.com/insiders)して、最新の更新プログラムが利用可能になり次第、すぐに試してみてください。  

* * *

## エージェント

-   チャットからエージェントを管理する ([詳細を表示](#_integrating-agent-sessions-and-chat))。
-   組織全体でエージェントを共有する ([詳細を表示](#_share-custom-agents-across-your-github-organization-experimental))。
-   チャットを閉じた後もエージェントをアクティブに保つ ([詳細を表示](#_local-agent-sessions-remain-active-when-closed))。
-   エージェントセッションをローカルからクラウドへ移行します ([詳細を表示](#_continue-tasks-in-background-or-cloud-agents))。
-   専用の Git ワークツリーでエージェントを実行する ([詳細を表示](#_isolate-background-agents-with-git-worktrees))。
-   バックグラウンドエージェントにコンテキストを添付する ([詳細を表示](#_adding-context-to-background-agents))。
-   バックグラウンドエージェントをカスタマイズする ([詳細を表示](#_use-custom-agents-with-background-agents-experimental))。
-   環境間でカスタムエージェントを再利用する ([詳細を表示](#_agent-tooling-reorganization))。
-   カスタムサブエージェントを実行する ([詳細を表示](#_run-agents-as-subagents-experimental))。
-   Claudeスキルを再利用する ([詳細を表示](#_reuse-your-claude-skills-experimental))。

### エージェントセッションとチャットの統合

**設定**: chat.viewSessions.enabled VS Codeで開く VS Code Insidersで開く

**アップデート 1.107.1**: このアップデートにより、並列セッションの操作性が大幅に向上しました。トグルでセッションを非表示にすると、その選択が記憶されるようになり、チャットビューのサイズを自由に変更できるようになりました。[エージェントワークフローチュートリアル](https://code)から始めましょう。visualstudio.com/docs/copilot/agents/agents-tutorial)。

エージェントは、ユーザーに代わってコーディングタスクを自律的に実行するための重要な要素です。チャットインターフェースは、エージェントがどこで実行されているか（VS Code ローカル環境、CLI を使用したバックグラウンド、クラウド、またはサードパーティ製拡張機能）に関わらず、エージェントとやり取りするための主な手段です。ドキュメントの [VS Code でのエージェントの使用方法](https://code.visualstudio.com/docs/copilot/agents/overview) をご覧ください。

今回のアップデートでは、エージェントとの作業体験を統一するために、エージェント セッションを [チャット] ビューに統合しました。一目で、 セッションのステータス、進行状況、ファイル変更の統計情報を一目で確認できます。セッションリストを管理しやすくするために、セッションをアーカイブしたり、アーカイブを解除したりすることも可能です。

ワークスペース内で作業している場合、セッションリストには現在のワークスペースに関連するセッションのみが表示されます。空のウィンドウにいる場合は、すべてのワークスペースにわたるすべてのセッションが表示されます。

リストからセッションを選択すると、サイドバーのチャットビューでセッションが開き、会話履歴全体を確認できます。必要に応じて、セッションをエディタタブや新しいウィンドウで開くことも可能です。セッションを右クリックすると、これらのオプションを含むコンテキストメニューが表示されます。

![セッションリスト内のセッションのコンテキストメニューを示すスクリーンショット。](/assets/updates/1_107/sessions-context.png)

chat.viewSessions.enabled を設定することで、チャットビューのセッション一覧を無効にできます。VS Code で開く VS Code Insiders で開く。

この変更に伴い、独立した **Agent Sessions** ビューはデフォルトで無効化されます。独立したビューを引き続き使用したい場合は、 chat.agentSessionsViewLocation 設定で再有効化できます。今後のリリースでは、この独立したビューを完全に削除する予定です。

#### コンパクトビュー

チャットビューの幅が狭い場合、新しいチャットセッションを開始すると、セッション一覧がチャットビュー内に表示されます。デフォルトでは、アーカイブされていない直近の3つのセッションが表示されます。

![チャットビューに最近のセッションが表示されているスクリーンショット。](/assets/updates/1_107/recent-sessions.png)

**すべてのセッションを表示**を選択すると、検索やフィルタリングのオプション付きのセッションの完全なリストが表示されます。

![チャットビューにすべてのセッションが表示されているスクリーンショット。](/assets/updates/1_107/recent-sessions-all.png)

このアクションを使用すると、エージェントセッションのサイドバーの表示/非表示を切り替え、すべてのセッションをより広範囲に確認できます。

#### 並列表示

チャットビューの幅が十分に広くなると（たとえば、最大化した場合など）、エージェントセッションのリストがチャットビューと並列して自動的に表示されます。この表示では、文脈を失うことなくセッション間をすばやく移動できます。 また、対応するコントロールを使用して、この並列表示を手動で切り替えることもできます。

![チャットビューとすべてのセッションが並列表示されているスクリーンショット。](/assets/updates/1_107/all-sessions.png)

セッションリストを絞り込むには、プロバイダーやステータスでセッションをフィルタリングできます。VS Codeはこのフィルタ設定を保持します。

#### 表示方向の設定

**設定**: chat.viewSessions.orientation VS Codeで開く VS Code Insidersで開く

デフォルトでは、画面の幅が十分にある場合、または手動でセッションリストを切り替えた場合に、セッションリストがチャットビューと並べて表示されます。この動作は、chat.viewSessions.orientation Open in VS Code Open in VS Code Insiders 設定で変更できます。

-   `auto` (デフォルト): 幅が許す場合はセッションを並べて表示し、そうでない場合は空のチャットの上部に表示します
-   `stacked`: 常に空のチャットの上部にセッションを表示します
-   `sideBySide`: 幅に余裕がある場合はセッションリストを並べて表示し、そうでない場合は非表示にします

### ローカルエージェントのセッションは閉じてもアクティブなまま

以前は、ローカルチャットセッションを閉じると、実行中のエージェントリクエストがキャンセルされていました。これにより、長時間実行されるタスクや複数のタスクを同時に実行する場合に、ローカルエージェントの有用性が制限されていました。

現在では、チャットエディタやチャットビューで開いていない場合でも、ローカルエージェントはバックグラウンドで実行され続けます。セッションリストで実行中のエージェントの状態を確認でき、いつでもそのセッションに戻って詳細な進捗状況を確認できます。

[チャットでのローカルエージェントの使用方法](https://code.visualstudio.com/docs/copilot/chat/copilot-chat#_switch-between-agents)について詳しくはこちらをご覧ください。

### バックグラウンドまたはクラウドエージェントでのタスクの継続

ローカルエージェントは、VS Code 内でエージェントとやり取りを行うインタラクティブなセッションに最適です。これは、ブレインストーミングや探索的なタスクの実行、実装計画の策定などに役立ちます。明確な計画が固まったら、そのタスクをバックグラウンドまたはクラウドエージェントに引き継ぎ、自律的に実行させることができます。

今回のアップデートでは、ローカルチャットをバックグラウンドまたはクラウドエージェントに引き継ぐ操作性を改善しました。 UI全体で、新しい**「Continue in」**オプションを使用して、タスクをシームレスに継続できるようになりました。

ローカルチャットをバックグラウンドまたはクラウドエージェントに継続する場合、現在のチャットコンテキストが引き継がれ、引き継ぎ後に元のセッションはアーカイブされます。

-   チャットビュー:
 
 ![チャットビュー内の「Continue in」ボタンを示すスクリーンショット。](/assets/updates/1_107/continue-in-chatwidget.png)
 
-   プランエージェント：
 
 ![プランエージェント使用時の「実装を開始」ボタンを示すスクリーンショット。](/assets/updates/1_107/continue-in-planmode.png)
    
-   未タイトルのプロンプトファイル:
 
 ![未タイトルのプロンプトファイル内の「Continue in」ボタンを示すスクリーンショット。](/assets/updates/1_107/continue-in-promptfile.png)
 

### Gitワークツリーによるバックグラウンドエージェントの分離

バックグラウンドエージェント（旧称：CLIエージェント）は、バックグラウンドで自律的に動作するように設計されており、他の作業に集中しながらタスクをオフロードできます。複数のバックグラウンドエージェントを同時に実行すると、ワークスペース内の同じファイルが変更されることで競合が発生する可能性があります。

今回のアップデートでは、 [Gitワークツリー](https://code.visualstudio.com/docs/sourcecontrol/branches-worktrees#_working-with-git-worktrees)のサポートを導入し、バックグラウンドエージェントの分離機能を強化しました。新しいバックグラウンドエージェントを作成する際、現在のワークスペースで実行するか、専用のGitワークツリーで実行するかを選択できます。

![バックグラウンドエージェント作成時のGitワークツリーのドロップダウンを示すスクリーンショット。](/assets/updates/1_107/background_worktree.png)

ワークツリー内でバックグラウンドエージェントを実行すると、エージェントはそのセッション用に新しいGitワークツリーを自動的に作成し、変更内容を別のフォルダに隔離します。 これにより、競合することなく複数のバックグラウンドエージェントを同時に実行できます。

エージェントがタスクを完了したら、ワークツリー内でバックグラウンドエージェントによって行われた変更を簡単に確認し、メインのワークスペースにマージできます。また、ワークツリーからの変更をワークスペースに直接適用する新しいアクションも追加しました。

![ワークツリー内で発生したファイルの変更を示す、バックグラウンドエージェントのスクリーンショット。](/assets/updates/1_107/filechanges.png)

[VS Codeでのバックグラウンドエージェント](https://code.visualstudio.com/docs/copilot/agents/copilot-cli)をご覧ください。

### バックグラウンドエージェントへのコンテキストの追加

バックグラウンドエージェントは、複数のコンテキスト添付タイプに対応するようになりました。選択範囲、問題、シンボル、検索結果、Gitコミットなどを、任意のプロンプトに添付できます。これにより、より豊かで正確なプロンプトを作成できるようになり、 より複雑で柔軟なワークフローを実現します。例えば、報告された問題を添付し、ファイルパスや行番号を手動で指定することなく、エージェントに修正を依頼できます。

![シンボルとエラーをコンテキストとして添付したバックグラウンドエージェントセッションのスクリーンショット。](/assets/updates/1_107/background_attachments.png)

### GitHub 組織全体でカスタムエージェントを共有する (実験的機能)

**設定**: github.copilot.chat.customAgents.showOrganizationAndEnterpriseAgents VS Codeで開く VS Code Insidersで開く

以前は、カスタムエージェントを定義できるのはワークスペースまたはユーザーレベルに限られていました。組織全体でカスタムエージェントを共有したい場合、エージェントファイルを各ユーザーに手動で配布する必要がありました。

今回のリリースでは、GitHub アカウントの組織レベルでカスタムエージェントを定義できるようになりました。この実験的機能により、チャット内で個人用エージェントと並行して組織固有のエージェントを使用できるようになります。

この機能を有効にするには、github.copilot.chat.customAgents.showOrganizationAndEnterpriseAgents VS Code で開く VS Code Insiders を `true` に設定します。有効にすると、組織で作成されたカスタムエージェントが VS Code の [エージェント] ドロップダウンに表示されます。

組織向けのカスタムエージェントの作成方法の詳細については、 GitHub ドキュメントの [カスタムエージェントの作成](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents) を参照してください。

### バックグラウンドエージェントでのカスタムエージェントの使用 (実験的)

**設定**: github.copilot.chat.cli.customAgents.enabled VS Codeで開く VS Codeで開く Insiders

バックグラウンドエージェントに独自のカスタムエージェントを組み込むことができるようになりました。有効にすると、`.github/agents` フォルダーで定義されたカスタムエージェントがエージェントリストに表示され、ワークフローや要件に合わせたエージェントを活用できるようになります。

この実験的な機能は、github.copilot.chat.cli.customAgents.enabled VS Code で開く VS Code で開く Insiders]設定で有効にできます。

![エージェントのドロップダウンリストにカスタム Planner エージェントが表示されたバックグラウンド エージェント セッションのスクリーンショット。](/assets/updates/1_107/background_agents.png)

ドキュメントで [カスタムエージェントの定義方法](https://code.visualstudio.com/docs/copilot/customization/custom-agents) について詳しくご確認ください。

### エージェントツールの再編成

GitHub カスタムエージェントとの互換性を高めるため、エージェントツールの構造を再編成しました。これにより、個別の設定を行うことなく、VS Code と GitHub の環境間でカスタムエージェントをより簡単に再利用できるようになります。

この変更の一環として、既存のツール参照およびそれらが属するツールセットの一部をリネームしました。エージェントファイル内の既存のツール参照は引き続き機能しますが、最新の推奨形式にリネームするためのコードアクションが表示されます。これにより、エージェントの設定が現在のベストプラクティスに準拠し、プラットフォーム間の互換性が維持されます。

### エージェントをサブエージェントとして実行する (実験的)

**設定**: chat.customAgentInSubagent.enabled VS Codeで開く VS Code Insidersで開く

エージェントが複雑な問題を解決する必要がある場合、タスクを[サブエージェント](https://code.visualstudio.com/docs/copilot/chat/chat-sessions#_contextisolated-subagents)にタスクを委譲できます。サブエージェントはメインのチャット セッションとは独立して動作し、独自のコンテキスト ウィンドウを持ちます。これにより、メインの会話は高レベルの目標に集中でき、コンテキスト ウィンドウの制限を管理しやすくなります。

このリリースでは、[カスタム エージェント](https://code.visualstudio.com/docs/copilot/customization/custom-agents)。カスタムエージェントを使用すると、AI 専用のペルソナを定義し、特定のタスクやドメインに合わせて挙動を調整できます。たとえば、コードレビュー用エージェントは、コードの変更を行うのではなく、コードのレビューに重点を置きます。

カスタムエージェントをサブエージェントとして使用するには、次の手順に従ってください:

1.  chat.customAgentInSubagent.enabled を有効にします。VS Code で開く VS Code Insiders で開く
 
2.  まだカスタムエージェントをお持ちでない場合は、**Chat: New Custom Agent** コマンドを使用して作成します。
 
3.  チャットでモデルに「what subagents can you use?」と尋ねると、利用可能なサブエージェントのリストが表示されます。作成したカスタムエージェントがリストに表示されるはずです。
    
4.  カスタムエージェントの要件を満たすプロンプトを入力します。言語モデルは、カスタムエージェントの説明と引数を使用して、そのリクエストにカスタムエージェントを使用すべきかどうかを判断します。
 
 ![カスタムエージェントをサブエージェントとして使用しているチャット会話のスクリーンショット。](/assets/updates/1_107/use-agents-as-subagents.png)
 

カスタムエージェントがサブエージェントとして使用されないようにするには、`*.agent.md` ファイル内のメタデータプロパティ `infer` を `false` に設定してください。

[チャットでのサブエージェントの使用方法](https://code.visualstudio.com/docs/copilot/chat/chat-sessions#_contextisolated-subagents)について詳しくはこちら。

### Claudeスキル再利用 (実験的機能)

**設定**: chat.useClaudeSkills VS Codeで開く VS Code Insidersで開く

スキルは[Claude Code](https://code.claude.com/docs/en/skills) で導入された機能であり、エージェントがオンデマンドで読み込める機能です。各スキルには、そのスキルを説明する短い説明文が付いています。必要に応じて、エージェントはスキルの完全な説明文を読み込むことができます。スキルの説明文には、スクリプトやテンプレートなどのサポートファイルが添付されている場合があります。読み込まれると、スキルの説明文とサポートファイルはメインの会話のコンテキストの一部となります。

VS Codeでは、既存のスキルを再利用できるようになりました。chat.useClaudeSkills VS Codeで開く VS Code Insiders設定を有効にして、エージェントがスキルを検出して使用できるようにします。

![VS CodeのチャットでClaudeスキルを再利用している様子を示すスクリーンショット。](/assets/updates/1_107/use-claude-skills.png)

VS Codeは、`~/.claude/skills/skill-name/SKILL.md`にある個人用スキルと、ワークスペースフォルダー内の`${workspaceFolder}.claude/skills/skill-name/SKILL.md` にあるプロジェクトスキルをサポートしています。

`SKILL.md` ファイルのヘッダーに、スキルを宣伝する `description` 属性が含まれていることを確認してください。なお、VS Code では `allowed-tools` 属性はサポートされていません。

エージェントモードで、ファイル読み取りツールが有効になっていることを確認し、「What skills do you have」と尋ねて、スキルが検出されるか確認してください。次に、スキルで回答可能なリクエストを送信します。エージェントがスキルを使用しない場合は、スキルの説明を改善するか、モデルにスキルを使用するよう促してください。

## チャット

-   インラインチャットはコード編集用に最適化されています ([詳細を表示](#_inline-chat-ux))。
-   チャットモデルを管理する ([詳細を表示](#_language-models-editor))。
-   外部の Web コンテンツを確認する ([詳細を表示](#_url-and-domain-auto-approval))。
-   動的なウェブコンテンツを取得します ([詳細を表示](#_more-robust-fetch-tool))。
-   無視されたファイルを検索します ([詳細を表示](#_text-search-tool-can-search-ignored-files))。
-   チャット内でターミナル出力にアクセスします ([詳細を表示](#_rich-terminal-output-in-chat))。
-   セッションのターミナルコマンドを自動的に承認する ([詳細を表示](#_allow-all-terminal-commands-in-this-session))。
-   その他のキーボードショートカットも利用可能です ([詳細を表示](#_keyboard-shortcuts-for-chat-terminal-actions)).
-   Azureホスト型モデルでEntra IDを使用する ([詳細を表示](#_azure-model-provider-entra-id-as-the-default-authentication))。
-   Anthropicモデルの拡張思考予算を設定する ([詳細を表示](#_anthropic-models-extended-thinking-support))。
-   チャットをより効率的に利用する ([詳細を表示](#_chat-view-appearance-improvements))。
-   機密ファイルの編集履歴を表示する ([詳細を表示](#_diffs-for-edits-to-sensitive-files))。
-   推論モデルのチャットツール呼び出しを非表示にする ([詳細を表示](#_collapsible-reasoning-and-tools-output-experimental))。

### インラインチャットのユーザー体験

**設定**: inlineChat.enableV2 VS Codeで開く VS Code Insidersで開く

VS Code内の他のチャット機能と整合させ、単一ファイルでの迅速なコード変更に最適化するため、インラインチャットの体験を継続的に改善しています。

以前は、一般的な質問やディスカッションにもインラインチャットを使用できました。現在は、インラインチャットは現在のファイル内でのコード変更に最適化されています。インラインチャットで処理できないタスクについては、 同じモデルとコンテキストを使用して、プロンプトが再生される「チャット」ビューに自動的に切り替わります。

「inlineChat.enableV2」設定（プレビュー）は、現在、拡張機能がプロンプトをどのように処理するかを制御するのみです。 これはまだ開発中ですが、安心して試すことができます。

### 言語モデルエディター

VS Code のチャットは、GitHub Copilot、サードパーティ製拡張機能、または BYOK (Bring Your Own Key) プロバイダーによって提供される複数の言語モデルをサポートしています。特に、異なるプロバイダーの多くのモデルにアクセスできる場合、これらすべてのモデルを管理するのは困難な場合があります。[VS Code での言語モデルの使用方法](https://code)について詳しくはこちらをご覧ください。visualstudio.com/docs/copilot/customization/language-models)。

**言語モデル**エディターは、VS Codeのチャットで使用可能なすべての言語モデルを一元的に表示・管理できる場所を提供します。チャット内のモデルピッカーから、またはコマンドパレットの**Chat: Manage Language Models**から開くことができます。

このエディターには利用可能なすべてのモデルが一覧表示され、モデルの機能、コンテキストサイズ、課金詳細、公開ステータスなどの主要な情報が表示されます。デフォルトではモデルはプロバイダーごとにグループ化されていますが、公開ステータスごとにグループ化することも可能です。

モデル名やコンテキストサイズにカーソルを合わせると、モデル ID、バージョン、ステータス、トークンの内訳などの詳細情報が表示されます。

以下の方法でモデルを検索およびフィルタリングできます：

-   ハイライト表示付きのテキスト検索
-   プロバイダーフィルター: `@provider:"OpenAI"`
-   機能フィルター: `@capability:tools`, `@capability:vision`, `@capability:agent`
-   可視性フィルター: `@visible:true/false`

#### モデルの可視性を管理する

利用可能なモデルが増えるにつれ、モデルピッカーが煩雑になり、操作しにくくなる可能性があります。 言語モデルエディタでは、各モデルの表示/非表示を切り替えることで、モデルピッカーに表示されるモデルを制御できます。モデルにカーソルを合わせ、目のアイコンを選択して表示/非表示を切り替えてください。

#### インストール済みのプロバイダーからモデルを追加する

言語モデルエディターから、**[モデルを追加...]** を使用してモデルを追加できます。これにより、インストール済みのすべてのモデルプロバイダーのドロップダウンリストが表示されます。プロバイダーを選択して設定を行い、そのモデルを VS Code のチャットに追加します。

これにより、言語モデルエディターから移動することなく、インストール済みの追加のプロバイダーを簡単に有効化できます。プロバイダー行の歯車アイコンを選択すると、プロバイダー管理画面にアクセスできます。

### URL およびドメインの自動承認

今回のアップデートでは、フェッチツールにおける URL の自動承認のセキュリティとユーザーエクスペリエンスを強化しました。モデルが、ユーザーが明示的に要求していない URL からコンテンツを取得しようと判断した場合、新しい 2 段階の承認プロセスが表示されます。

-   **URL を取得するための初期リクエストを承認する**
    
    このステップにより、通信先のドメインを信頼していることを確認でき、機密データが信頼できないサイトに送信されるのを防ぐことができます。
 
 ![最初のフェッチリクエストを承認する確認画面のスクリーンショット。](/assets/updates/1_107/approve-fetch.png)
 
 特定のURLまたはドメインに対するリクエストを、1回限り承認するか、今後のリクエストを自動的に承認するかを選択できます。
    
    事前承認では、["信頼済みドメイン"機能](https://code.visualstudio.com/docs/editing/editingevolved#_outgoing-link-protection)が適用されます。ドメインがそこにリストされている場合、そのドメインへのリクエストは自動的に承認され、応答の確認ステップに進みます。
 
-   **取得したコンテンツをチャットやフォローアップツールでの呼び出しで使用することを承認する**
 
 このステップでは、取得したコンテンツがチャットに追加されたり他のツールに渡されたりする前に確認を行うことで、プロンプトインジェクション攻撃の可能性を防ぎます。
 
 たとえば、GitHub.comのような有名なサイトからコンテンツを取得するリクエストを承認する場合があります。しかし、イシューの説明やコメントなどのコンテンツはユーザー生成であるため、モデルの動作を操作する可能性のある有害なコンテンツが含まれている可能性があります が含まれている可能性があります。
 

[URLおよびドメインの承認](https://code.visualstudio.com/docs/copilot/chat/chat-tools#（url-approval）について詳しくはこちらをご覧ください。

### より堅牢なフェッチツール

`#fetch` エージェントツールは、動的な Web コンテンツをより効果的に処理できるようになりました。静的な HTML に加え、動的なコンテンツも取得可能です。シングルページアプリケーション（SPA）、最新のドキュメントサイト、Jira のような課題追跡システムなど、JavaScript に依存してコンテンツを読み込むウェブサイトでも、不完全な結果や空の結果が返されることはなくなりました。

フェッチツールは、JavaScript の実行を待ち、 コンテンツが読み込まれるのを待ってからページを取得するため、動的にレンダリングされたコンテンツを確実に取得できます。この改善により、実際のシナリオにおいてツールの有用性が大幅に向上しました。

`#fetch` の後に URL を入力すると、モデルは初期の HTML スケルトンだけでなく、ブラウザ上で実際に表示されるコンテンツにアクセスします。 これにより、Webページに関する質問や、オンラインコンテンツの分析をモデルに依頼する際、より正確で完全な情報を得ることができます。

### テキスト検索ツールで無視されたファイルも検索可能

`#textSearch` ツールは、`files.exclude` や `search.exclude` 設定、あるいは `.gitignore` ファイルで指定された無視されたファイルやフォルダ（`node_modules` フォルダなど）内の検索に対応しました。また、結果がない場合でも、無視されたファイルやフォルダに関するヒントをエージェントに返すため、エージェントはすぐにそれらの無視されたファイルやフォルダでの検索を有効にできるようになります。

### チャット内でのリッチなターミナル出力

**「ターミナルで実行」**の応答で **「出力を切り替える」** を使用すると、チャット内で完全な読み取り専用 `xterm.js` ターミナルで出力表示されます。このアプローチの利点は、バックエンドのターミナルが終了した後も VS Code がキャプチャした出力を保持するため、いつでも以前の実行を再開して、コマンド実行時のターミナル出力をそのまま確認できる点です。

チャットターミナルは、ANSI カラーのコントラストを向上させるため、統合ターミナルのカラーテーマを採用するようになりました。スクリーンリーダーをご利用の方は、出力にフォーカスがある状態で ⌥F2（Windows: Alt+F2、Linux: Shift+Alt+F2）を押してアクセシブルビューを開くことができ、確認やナビゲーションが容易になります。

[チャットでのターミナルコマンドの使用方法](https://code.visualstudio.com/docs/copilot/chat/chat-tools#_terminal-commands)について詳しくはこちらをご覧ください。

### チャットターミナルでのコマンドステータスの詳細

チャットターミナルのメッセージでは、コマンドの装飾部分にカーソルを合わせると、コマンドの開始時刻、実行時間、終了コードが表示されるようになりました。

![エージェントによって「npm install candy」が実行されているターミナルのスクリーンショット。コマンドの装飾部分にカーソルを合わせると、コマンドの実行時間とステータスが表示されます。](/assets/updates/1_107/terminal-command-exit.png)

### 現在のセッションですべてのターミナルコマンドを許可する

セキュリティと管理を維持しつつチャット体験を最適化するため、ターミナルツールに、そのセッションでの今後のすべてのコマンドを許可する新しい「自動承認」オプションが追加されました。新しいセッションを開始すると、ターミナルコマンドは既存の承認設定に従います。

![チャットでターミナルコマンドを承認する際、「このセッションですべてのコマンドを許可」オプションが表示されているスクリーンショット。](/assets/updates/1_107/terminal-allow-all.png)

### チャットターミナル操作のキーボードショートカット

専用のキーボードショートカットを使用して、最新のチャットターミナルにフォーカスを合わせたり、展開状態を切り替えたりできるようになりました ⇧⌥⌘O (Windows、Linux: Ctrl+Shift+Alt+O)。

### カスタムエージェントのキーボードショートカット

各カスタムエージェントには、コマンドリスト内に個別のアクションが用意され、それぞれに個別にキーボードショートカットを割り当てることができます。たとえば、「Code Reviewer」というカスタムエージェントを定義した場合、コマンドパレットに**Chat: Open Chat (Code Reviewer Agent)**というコマンドがコマンドパレットに表示され、キーボードショートカットを割り当てることができます。

![コマンドパレット内のカスタムエージェントコマンドのスクリーンショット。](/assets/updates/1_107/custom-agent-commands.png)

### Azure モデル プロバイダー: デフォルトの認証として Entra ID を使用

**設定**: github.copilot.chat.azureAuthType VS Code で開く VS Code Insiders で開く

デフォルトでは、Azure モデル プロバイダーは Bring-Your-Own-Key (BYOK) モデルに接続する際、Entra ID 認証を使用するようになり、セキュリティが強化され、サインイン体験がよりスムーズになりました。

API キーを使用して認証したい場合は、github.copilot.chat.azureAuthType Open in VS Code Open in VS Code Insiders をデフォルトの `entraId` ではなく `apiKey` に設定してください。

### Anthropic モデル: 拡張思考のサポート

**設定**: github.copilot.chat.anthropic.thinking.budgetTokens VS Code で開く VS Code Insiders で開く

Anthropicモデルは拡張思考機能をサポートするようになりました。この機能は、すべてのAnthropic拡張思考モデルでデフォルトで有効になっています。拡張思考機能により、Claudeは応答を生成する前に段階的な思考プロセスに追加のトークンを費やすことができるため、複雑なタスクに対する推論能力が強化され、より熟考された正確な出力が得られます。

デフォルトの思考予算は4,000トークンに設定されています。この予算は、github.copilot.chat.anthropic.thinking.budgetTokens VS Codeで開く VS Code Insiders 設定を変更することで、モデルが拡張思考に使用できるトークンの数を調整できます。拡張思考を完全に無効にするには、予算を `0` に設定してください。

> ****注**: ツールの呼び出し間で推論を行う「インターリーブ思考」は、Bring-Your-Own-Key (BYOK) 経由で Anthropic モデルを使用する場合にのみ利用可能です。この機能は、上記で設定したのと同じ思考予算設定を使用します。

### チャット画面の外観の改善

読みやすさと使いやすさを向上させるため、チャット画面の外観にいくつかの改善を加えました:

-   **チャットタイトル**:
 
 チャットを開くと、上部に新しいタイトルコントロールが表示され、チャットのタイトルを確認できるほか、空のチャット画面にすばやく戻ることもできます。この動作は、chat.viewTitle.enabled Open in VS Code Open in VS Code Insiders 設定で構成できます。
 
-   **ウェルカムバナー**:
    
    新しいチャットを開く際によりシンプルな表示を好む場合は、新しい設定 `chat.viewWelcome.enabled`（VS Codeで開く VS Codeで開く Insiders）を使用することで、アイコンとウェルカムテキストを非表示にできます。
 
 ![アイコンとウェルカムテキストが非表示になった空のチャット画面のスクリーンショット](/assets/updates/1_107/chat-welcome.png)
 
-   **前回のチャットセッションの復元**:
 
 再起動後や別のワークスペースを開いた後にチャットを開くと、 以前のセッションがデフォルトで復元されるようになりました。この動作は、chat.viewRestorePreviousSession 設定（VS Code で開く / VS Code Insiders で開く）を変更し、常に空のチャットから開始するように選択することで変更できます。
 

### 機密ファイルの編集に関する変更点

チャットが `settings.json` や `package.json` などの機密ファイルを編集しようとすると、通知が表示され、変更が適用される前に承認を求められます。どのファイルを機密ファイルとして扱うかは、chat.tools.edits.autoApprove Open in VS Code Open in VS Code Insiders 設定で設定できます。

以前は、モデルが提案した生の編集内容が表示され、理解しにくい場合がありました。 現在では、提案された変更の差分（diff）が表示されるため、編集内容の確認や承認が容易になりました。

![チャットでの変更提案の差分を示すスクリーンショット](/assets/updates/1_107/sensitive-file-diff.png)

[チャットでの機密ファイルの編集](https://code.visualstudio.com/docs/copilot/chat/review-code-edits#_edit-sensitive-files)をご覧ください。

### 折りたたみ可能な推論およびツール出力（実験的機能）

**設定**: chat.agent.thinkingStyle VS Codeで開く VS Codeで開く Insiders , chat.agent.thinking.collapsedTools VS Codeで開く VS Codeで開く Insiders

言語モデルの推論やエージェントのツール出力により、チャットでの会話はすぐに長くなり、追いにくくなりがちです。前回のイテレーションでは、chat.agent.thinkingStyle VS Codeで開く VS Codeで開く Insiders 設定を用いて、チャット内の思考トークンの表示方法を改善しました。

今回のイテレーションでは、ツール呼び出しなどの非-推論を伴わないチャット出力（ツール呼び出しなど）に対して、折りたたみ可能なチャットセクションを導入することで、チャット体験をさらに最適化します。デフォルトでは、連続するツール呼び出しは視覚的なノイズを減らすために折りたたまれるようになりました。

折りたたみ可能な項目（ほとんどのツールおよび推論テキスト）は要約され、各折りたたみセクションにはAI生成のタイトルが付与されます。

![複数のツール呼び出しが折りたたみセクションにまとめられているスクリーンショット。](/assets/updates/1_107/collapsed-tools.png)

## MCP

-   最新の MCP 仕様への対応を追加しました ([詳細を表示](#_最新MCP仕様のサポート))に対応しました。
-   追加の設定なしでGitHubリモートMCPサーバーを利用可能になりました ([詳細を表示](#_github-mcp-server-provided-by-github-copilot-chat-preview))。

### 最新MCP仕様のサポート

VS Codeは、MCP仕様の最新リビジョンである`2025-11-25`に対応しています。 これには、とりわけ以下の機能が含まれます：

-   [URLモードの自動検出](https://modelcontextprotocol.io/specification/2025-11-25/client/elicitation#url-elicitation-requests)
-   長時間実行される耐障害性の高いツール呼び出しやクライアント作業のための [タスク](https://modelcontextprotocol.io/specification/2025-11-25/basic/utilities/tasks)。
-   [機能強化](https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1330)：要件抽出における列挙型選択肢の拡充

これらの改善点は、VS Codeが既にサポートしていた`2025-11-25`ドラフト機能に加えられたものです。 例えば、`WWW-Authenticate`スコープの同意、クライアントIDメタデータドキュメントによる認証フロー、ツール・リソース・サーバー用のアイコンなどです。2025-11-25ドラフトの変更履歴は、[MCPウェブサイト](https://modelcontextprotocol.io/specification/2025-11-25/changelog#major-changes) で確認できます。

[VS Code での MCP サーバーの使用方法](https://code.visualstudio.com/docs/copilot/customization/mcp-servers) について詳しくはこちらをご覧ください。

### GitHub Copilot Chat が提供する GitHub MCP サーバー (プレビュー)

**設定**: github.copilot.chat.githubMcpServer.enabled VS Codeで開く VS Code Insidersで開く

GitHub リモート MCP サーバーが、GitHub Copilot Chat 拡張機能に組み込みの MCP サーバーとして提供されるようになりました。これにより、GitHub リポジトリやサービスとのシームレスな統合が実現します。この統合には、次のような利点があります:

-   すでに GitHub MCP サーバーを使用している Copilot CLI や Copilot Cloud Agent などの他の Copilot エージェント・ハーネスとの整合性
-   既存の GitHub 認証状態を再利用し、追加の認証プロンプトを排除
-   GHE.com を含むさまざまな GitHub MCP エンドポイントに対する透過的なサポート

GitHub MCP サーバーを有効にするには、Insiders 設定の `github.copilot.chat.githubMcpServer.enabled` を `true` に設定してください。有効にすると、エージェントを使用する際にツールピッカーにサーバーが自動的に表示されます。これにより、追加の設定やセットアップを行うことなく、GitHub のイシュー、プルリクエスト、その他のリポジトリ情報について質問できるようになります。

GitHub MCP サーバーは、以下の設定を通じてカスタマイズが可能です：

-   github.copilot.chat.githubMcpServer.toolsets VS Code で開く VS Code Insiders で開く : 利用可能なツールセットを設定します。デフォルトでは `default` ツールセットが使用されますが、 が、[GitHub MCP Server ドキュメント](https://github.com/github/github-mcp-server/blob/main/docs/remote-server.md#remote-mcp-toolsets)に記載されているように、`workflows`やその他のツールセットを追加して拡張できます。**注：**特定のツールセットを追加するには追加の権限が必要になる場合があり、再認証はまだサポートされていません。進捗状況については、[この GitHub イシュー](https://github.com/microsoft/vscode/issues/280640) をご確認ください。
-   github.copilot.chat.githubMcpServer.readonly VS Code で開く VS Code で開く Insiders : サーバーに読み取り専用ツールのみを返すよう強制し、書き込み操作を防止します。
-   github.copilot.chat.githubMcpServer.lockdown VS Codeで開く VS Codeで開く Insiders : ツールの動作に対する追加のセキュリティ制御。

> **注**: この機能は現在プレビュー段階であり、上記の設定を通じて明示的に有効にする必要があります。 今後のリリースでは、必要な時に利用でき、不要な時には邪魔にならないよう、デフォルトで有効にする予定です。

## アクセシビリティ

### チャット確認のキーボード承認

エージェントが確認を求めた際、⌘Enter（Windows、LinuxではCtrl+Enter）を使用してキーボードから承認できるようになりました。

## エディターの操作性

-   開いているプロジェクトをより簡単に識別 ([詳細を表示](#_more-support-to-indicate-opened-windows-in-pickers))。
-   macOSでのスワイプによるナビゲーション ([詳細を表示](#_macos-mouse-swipe-to-navigate))。
-   ホバーポップアップの表示タイミングを選択 ([詳細を表示](#_on-demand-editor-hover-popups))。

### ピッカーでの開いているウィンドウの表示機能の強化

**最近開いたもの**ピッカーに、ワークスペースがすでに VS Code ウィンドウで開かれている場合のインジケーターを追加しました。

![最近開いたワークスペースのスクリーンショット。](/assets/updates/1_107/pickers.png)

現在アクティブなウィンドウは、他の開いているウィンドウとは表示がわずかに異なり、区別がより明確になっています。どのウィンドウでも開かれていないエントリにはアイコンが表示されません。

どのウィンドウがアクティブであるかを示すインジケーターは、ウィンドウピッカーにも適用されています。

### macOS: マウススワイプによる移動

**設定**: workbench.editor.swipeToNavigate VS Code で開く VS Code Insiders で開く

macOS では、トラックパッドの 3 本指スワイプジェスチャーを使用してエディタ間を移動できるようになりました。左または右にスワイプすると、任意のエディタグループ内の最近使用したエディタ間を移動できます。この機能を有効にするには、VS Code Insiders の設定で workbench.editor.swipeToNavigate を有効にしてください。 in VS Code Insiders 設定で有効にします。

> **注**: 現在は 3 本指のスワイプジェスチャーのみをサポートしています。この機能を使用するには、トラックパッドのスワイプ設定が以下のように構成されていることを確認してください:
> 
> -   ページ間のスワイプ: 3 本の指で左右にスクロールします。
> -   フルスクリーンアプリ間の切り替え: 4 本の指で左右にスワイプします。

### オンデマンドのエディタホバーポップアップ

**設定**: editor.hover.enabled VS Code で開く VS Code Insiders で開く

エディターでの自動ホバーポップアップを無効にしながら、キーボード修飾キーを使用してオンデマンドでホバー情報を表示する機能は維持できるようになりました。editor.hover.enabled VS Code で開く VS Code Insiders で開く設定では、現在 `on`、 `off`、および `onKeyboardModifier` の3つの値をサポートしています。

`onKeyboardModifier` に設定すると、コード上にカーソルを置いた状態で、`editor.multiCursorModifier` 設定とは反対の修飾キーを押している間のみ、ホバー情報が表示されます。これにより、テキスト選択中の視覚的な邪魔を減らしつつ、必要な時にコンテキスト情報へ素早くアクセスできるようになります。

例えば、`editor.multiCursorModifier` が `ctrlCmd` に設定されている場合、Altキーを押しながらカーソルをホバーさせるとホバー情報が表示されます。`alt` に設定されている場合は、Ctrlキー（macOSではCmdキー）を押しながらホバーさせると表示されます。 `ctrlCmd`に設定されている場合、コード上にカーソルを合わせながらAltキーを押すとホバー情報が表示されます。`alt`に設定されている場合は、Ctrlキー（macOSではCmdキー）を押すとホバー情報が表示されます。

## コード編集

-   TypeScriptでは、名前変更の候補が表示されます（[詳細を表示](#_rename-suggestions-for-typescript)）。
-   次の編集候補の新しいモデルを使用します ([詳細を表示](#_new-model-for-next-edit-suggestions))。
-   ビューポート外で次の編集候補をプレビューします ([詳細を表示](#_preview-next-edit-suggestions-outside-the-viewport))。

### TypeScript の名前変更候補

名前変更の候補は、通常のテキスト編集候補ではなく、シンボルの名前変更が行われるべきタイミングを予測します。予測されると、通常のテキスト編集候補と共に追加のインジケーターが表示されます。その後、Shift+Tab キーを使用してシンボルの名前変更を適用できます。

以下の動画では、プロパティ `a` が `width` にリネームされています。その後、リネーム候補として `b` を `height` にリネームすること、およびそれに伴い 2 つのパラメータ `a` と `b` もリネームすることが提案されます。次回のリネーム候補は、他のシンボルに関連するリネームを予測する場合に最も効果を発揮します。

> **注**：この機能は現在、実験としてユーザーベースに展開されており、現時点では TypeScript でのみ利用可能です。他のプログラミング言語への対応も計画されています。

### 次の編集候補のための新しいモデル

よりスマートで、最新の編集内容に即した新しい「次の編集候補」モデルをリリースしました。これにより、候補の受け入れ率と却下率が大幅に向上しています。このモデルとその開発について詳しくは、[こちら](https://github.blog/ai-and-ml/github-copilot/evolving-github-copilots-next-edit-suggestions-through-custom-model-training/#h-continuous-improvements-nbsp) をご覧ください。

### ビューポート外の次なる編集候補のプレビュー

現在のビューポート外にある次なる編集候補が表示された場合、現在の位置からスクロールせずにその内容を確認するのは困難な場合があります。そこで、カーソルの現在位置に次なる編集候補のプレビューを表示することで、この操作性を改善しました。これにより、候補を確認する際の作業フローへの影響を軽減できます。

> **注**: 現在の言語モデルはカーソル付近の次の編集候補に重点を置いているため、ビューポート外にある候補が表示されることはあまりないかもしれません。ただし、より遠くの候補も提案できるモデルの開発を積極的に進めています！

[VS Code のインライン候補](https://code.visualstudio.com/docs/copilot/ai-powered-suggestions)について詳しくはこちらをご覧ください。

## ソース管理

### ソースコントロールリポジトリビューの「Stashes」（実験的機能）

**設定**: scm.repositories.explorer VS Codeで開く VS Code Insidersで開く , scm.repositories.selectionMode VS Codeで開く VS Code Insidersで開く

今回のマイルストーンでは、「Stashes」ノードを追加し、ソースコントロールリポジトリビューに表示されるリポジトリアーティファクトのリストをさらに拡張しました。 このノードの下では、スタッシュの完全なリストを確認し、各スタッシュを表示、適用、 ポップすることができます。コンテキストメニューには、各スタッシュを削除するアクションも含まれています。

![「Stashes」ノードとそのコンテキストメニューが表示された「ソースコントロールリポジトリ」ビューのスクリーンショット。](/assets/updates/1_107/stashes-repo-explorer.png)

実験的なリポジトリエクスプローラーを有効にするには、scm.repositories.selectionMode VS Codeで開く VS Code Insidersで開くInsiders](https://code.visualstudio.com/docs/sourcecontrol/overview)の設定で有効にできます。ぜひお試しいただき、リポジトリエクスプローラーに表示してほしい他のリポジトリアーティファクトがあればお知らせください。

[VS Codeでのソースコントロールの使用方法](https://code.visualstudio.com/docs/sourcecontrol/overview)について詳しくはこちら。

## デバッグ

### 変数をチャットに添付

VS Code のチャットコンテキストに変数、スコープ、式を添付できるようになりました。これを行うには、**Variables** および **Watch** ビュー内のデータを右クリックするか、チャット内の **Add Context** ボタンを使用します。

## ターミナル

### ターミナルサジェストが安定版に提供開始

ターミナルサジェストが安定版ユーザー向けに有効化され、シェルコマンドの入力中にインライン補完やコンテキストに応じたヒントが提供されるようになりました。提案は関連する引数値がグループ化されるようになったため、オプションフラグとそのパラメーターがリスト内で整理された状態で表示されます。

## 認証

### Microsoft Authentication に対するクロスプラットフォームのネイティブブローカーサポート

**設定**: microsoft-authentication.implementation VS Code で開く VS Code Insiders で開く

今回のマイルストーンでは、最新の MSAL ライブラリを採用し、以下の環境でネイティブ体験を通じてサインインできるようになりました:

-   Intel Mac
-   Linux x64 (Debianベースの特定のディストリビューションのみ)

![VS Codeへのサインインを求めるネイティブブローカーのダイアログウィンドウのスクリーンショット。](/assets/updates/1_107/macos-auth-broker.png)

これは、以下の既存のサポートに追加されるものです：

-   Windows x64
-   macOS Mシリーズ (ARM)

macOS および Linux をサポートするには、お使いのマシンが Intune に登録されており、ネイティブブローカーの使用が有効になっている必要があります。

これにより、スムーズなシングルサインオンフローが実現され、Microsoft 認証セッションを取得するための推奨される方法となります。MSAL チームは、残りのプラットフォーム（Windows ARM、Linux ARM、およびその他のディストリビューション）についても順次この機能を有効にしていく予定ですので、ご期待ください！

> 注: ブローカー経由での認証に問題がある場合は、 microsoft-authentication.implementation Open in VS Code Open in VS Code Insiders を `msal-no-broker` に変更できます。これにより、代わりにブラウザを使用して認証が行われます。

### `classic` Microsoft 認証は利用できなくなりました

先月お伝えした通り、microsoft-authentication の `classic` オプションを削除しました。implementation Open in VS Code Open in VS Code Insiders での `classic` オプションを削除しました。これは利用率が低く、Entra ID チームからも推奨されていないためです。

注意: `microsoft-authentication.implementation` 設定は、Microsoft アカウントのネイティブ ブローカー認証で問題が発生した場合に、ユーザーがそれを無効にできるようにするために用意されていました。この設定の値は以下の通りです:

-   `msal` - 利用可能な場合はブローカー認証付きの MSAL を使用する (既定値)
-   `msal-no-broker` - ブローカー認証なしの MSAL を使用する

## 言語

### TypeScript 7.0 プレビュー

私たちは TypeScript チームと引き続き協力し、[近日リリース予定の TypeScript 7](https://devblogs.microsoft.com/typescript/progress-on-typescript-7-december-2025/)。TypeScript 7はネイティブコードで完全に書き直されており、パフォーマンスが劇的に向上しています。

TypeScript 7プレビュー版では型チェックのサポートがほぼ完了しており、TypeScriptチームもエディタ機能の追加に精力的に取り組んでいます。最近の主な機能には、インポートの自動補完、名前変更のサポート、および参照コードレンズが含まれます。

[`TypeScript (Native Preview)`拡張機能](https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.native-preview)をインストールすることで、今すぐTypeScript 7.0を試すことができます。 その後、JavaScript または TypeScript ファイル内で `TypeScript (Native Preview): Enable (Experimental)` コマンドを実行すると、すべての IntelliSense がネイティブプレビューを使用するようになります。TypeScript 7 の最新情報や TypeScript プロジェクトの全体的な方向性については、[最新の TypeScript 7 ブログ記事](https://devblogs.microsoft.com/typescript/progress-on-typescript-7-december-2025/) をご覧ください。

今後も TypeScript チームと緊密に連携し、TypeScript 7 の VS Code サポートの改善に取り組んでいく予定です。TypeScript 7 が準備でき次第、長期的な計画として、VS Code の JavaScript および TypeScript IntelliSense を駆動するデフォルトの環境として TypeScript 7 へ移行する予定です。古いバージョンの TS を使用する必要がある場合や、TypeScript 7 へ容易に移植できない TypeScript サービスプラグインなどのエディタ機能が必要な場合は、当面の間、TypeScript 7.0+と並行して既存のTypeScriptバージョンも引き続きサポートする予定です。

## リモート開発

[リモート開発拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)を使用すると、[Dev Container](https://code.visualstudio.com/docs/devcontainers/containers)、SSH または [リモート トンネル](https://code.visualstudio.com/docs/remote/tunnels) 経由のリモート マシン、あるいは [Windows Subsystem for Linux](https://learn.microsoft.com/windows/wsl) (WSL) を、フル機能の開発環境として利用できます。

主な機能は以下の通りです:

-   SSH再接続の猶予時間の制御

これらの機能の詳細については、[リモート開発のリリースノート](https://github.com/microsoft/vscode-docs/blob/main/remote-release-notes/v1_107.md)をご覧ください。

## エンタープライズ

ドキュメントで [VS Code のエンタープライズ機能](https://code.visualstudio.com/docs/setup/enterprise) について詳しくご確認ください。

### エージェント ツールの自動承認を制御する

**設定**: chat.tools.eligibleForAutoApproval VS Code で開く VS Code で開く Insiders この設定は組織レベルで管理されます。 変更するには、管理者に連絡してください。ORG

特定のエージェントツールは、ユーザーの明示的な承認なしに使用するとリスクを伴う場合があります。特に、破壊的な操作を実行したり、機密データにアクセスしたり、バックグラウンドで任意のコードを実行したりするツール（例: `runTask`）は注意が必要です。

新しい設定 `chat.tools.eligibleForAutoApproval` を使用して、自動承認の対象となるツールを定義できるようになりました。-承認の対象となるツールを定義できるようになりました。ツールが自動承認の対象外とされた場合、ユーザーはチャット内でこのツールを常に承認するオプションを利用できず、使用のたびに明示的に承認する必要があります。

組織は、エンタープライズ ポリシーを通じて全ユーザーにこの動作を適用し、エージェント使用時のセキュリティを強化できます。

### ポリシーによるエージェントの使用無効化

エンタープライズポリシーによってチャットでのエージェント使用が無効化された場合、エージェントピッカーは、利用できない理由をより明確に表示するようになりました。

![エンタープライズポリシーによりエージェントモードが利用できないことを示すエージェントピッカーのスクリーンショット。](/assets/updates/1_107/agent-mode-disabled-by-policy.png)

### Codespaces での GitHub Enterprise ポリシーのサポート

GitHub 上のエンタープライズまたは組織に対して、VS Code で適用されるポリシーを指定できます。たとえば、組織内の開発者が使用する [MCP レジストリ URL](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-registry) を設定できます。

今回のリリースでは、VS Code を GitHub Codespaces と併用する際、これらのポリシーに対応しました。開発者が Codespace を開くと、ローカルで VS Code を使用する場合と同様に、同じポリシーが自動的に適用されます。

## 拡張機能への貢献

### GitHub Pull Requests

プルリクエストやイシューの作成、管理、作業を可能にする [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) 拡張機能の開発が進みました。新機能は以下の通りです:

-   プルリクエストやイシューの Web ビューがアクティブな場合、それらを暗黙的にコンテキストとして設定します。
-   「コンテキストを追加」を通じて、プルリクエストやイシューをチャットセッションのコンテキストとして明示的に追加できます。
-   Copilotのプルリクエストを、1つのボタンで「レビュー準備完了」にマークしたり、承認したり、自動マージを設定したりできるようになりました。

この拡張機能の[0.124.0リリースの変更履歴](https://github.com/microsoft/vscode-pull-request-github/blob/main/CHANGELOG.md#01240)を確認して、今回のリリースに含まれるすべての内容をご確認ください。

## 提案中のAPI

### チャットコンテキストの提供

拡張機能がチャット用のコンテキストプロバイダーを提供できるようにする、新しいAPIの提案があります。 これにより、拡張機能は自身のドメインから豊富なコンテキストを提供し、チャットセッションで利用できるようになります。例えば、GitHub Pull Request拡張機能は以下のコンテキストを提供します：

-   ワークスペースコンテキスト：現在のリポジトリ、ブランチ、プルリクエストに関する情報。
-   プルリクエストやイシューのWebビューがアクティブな際の、暗黙的なプルリクエストおよびイシューコンテキスト。
-   ユーザーが「コンテキストを追加」から追加した際の、明示的なプルリクエストおよびイシューのコンテキスト。

このAPIはまだ初期段階にあるため、今後変更される可能性があります。提案のどの部分が拡張機能開発者のニーズを満たすかについて、フィードバックをいただければ幸いです。提案の詳細はこちらをご覧ください：[vscode.proposed.chatContextProvider.d.ts](https://github.com/microsoft/vscode/blob/615abcc4ae680ef1950fe607c3b3532d3ee0a576/src/vscode-dts/vscode.proposed.chatContextProvider.d.ts)

## エンジニアリング

### ビルドの展開

Insiders ビルドのリリースを、4 時間の時間枠内で段階的に展開し始めました。これにより、Insiders ユーザーの方は、通常より少し遅れて更新通知を受け取る場合があります。お急ぎの場合は、いつでも **更新を確認** を実行して、更新を直ちに適用することができます。

2025年11月 (1.107) リリースは、Stable ユーザー向けに24時間の時間枠で展開されます。Insiders と同様に、**更新の確認**を実行して、更新を直ちに適用させることも可能です。

### ウェブサイト検索機能の改善

[当社のウェブサイト](https://code.visualstudio.com) を改善し、ドキュメント内を簡単かつ迅速にナビゲートできる高速なクライアントサイド検索機能を導入しました。

この機能の基盤となるライブラリをオープンソース化しました。 [docfind](https://github.com/microsoft/docfind)をダウンロードして、今すぐご自身のプロジェクトでご利用いただけます！この技術の背景にある革新については、後日ブログ記事で詳しくご紹介します。

### ビルドスクリプトの更新：TypeScriptとして直接実行

今回のイテレーションでは、ビルドスクリプトを整理し、扱いやすく、メンテナンスしやすいようにしました。これらのビルドスクリプトは、コンパイルされたTypeScript、`ts-node`を使用して実行されるTypeScriptファイル、およびJavaScriptが混在していました。 これらのスクリプトの多くは型チェックが行われておらず、`import`や`export`を使った最新のモジュール形式ではなく、commonjs（`require`）を使用していました。さらに悪いことに、TypeScriptのビルドスクリプトの多くは、コンパイルされたJSの出力をソース管理にチェックインする必要がありました。 なんて散らかった状態でしょう！

幸いなことに、Node 22.18 以降では [スクリプトを TypeScript として直接実行する](https://nodejs.org/en/learn/typescript/run-natively) ことが可能になりました。これにより、ビルドスクリプトを段階的に最新の TypeScript へ変換できるようになります。新しい TypeScript コードを Node で直接実行できるようにするため、以下の tsconfig オプションを使用しました：

```
{
  "compilerOptions": {
    "target": "esnext",
    "module": "nodenext",
    "noEmit": true, // .js ファイルを生成しない
    "erasableSyntaxOnly": true, // Node.js が削除できる TypeScript 構文のみを許可する。例えば、列挙型や名前空間は許可されない
    "allowImportingTsExtensions": true, // .ts ファイルのインポートを許可する
    "verbatimModuleSyntax": true // スクリプトが Node.js で直接実行された際にインポートが有効であることを保証する
  }
}
```

GitHub Copilot を使用することで、古い CommonJS ファイルをモジュール形式に変換したり、型注釈を追加したりするなど、必要な変更の多くを自動化することができました。

留意すべき点として、Node.jsはTypeScriptコードを実行できますが、実際には型チェックを行いません。型チェックを行うには、依然として`tsc`を使用する必要があります。VSCodeでは、[`ts-go`](https://devblogs.microsoft.com/typescript/progress-on-typescript-7-december-2025/)を使用しており、これによりすべてのビルドスクリプトの型チェックを1秒未満で完了させることができます。

`node build/hygiene.ts`を直接実行できるのは本当に素晴らしいことです。TypeScriptへの完全移行により、ビルドスクリプトを最新化し、型安全性を確保できるようになりました。これにより、スクリプトの理解や変更が格段に容易になります。さらに、以前はチェックインし続けなければならなかった約15,000行のコンパイル済みJSコードを削除することも可能になりました！

### Copilot 拡張機能の統合

**設定**: chat.extensionUnification.enabled VS Code で開く VS Code Insiders で開く

GitHub Copilot Chat 拡張機能から提供されるインライン提案を全面的に展開しました。この変更に伴い、すべてのユーザーに対して GitHub Copilot 拡張機能がデフォルトで無効化されます。

インライン提案に関して問題が発生した場合は、ぜひご報告ください。chat.extensionUnification.enabled VS Codeで開く VS Codeで開く Insiders を `false` に設定することで、以前の動作に一時的に戻すことができます。これにより、GitHub Copilot 拡張機能が再有効化されます。

なお、2026年1月に GitHub Copilot 拡張機能を完全に廃止する予定であり、その時点で chat.extensionUnification.enabled VS Codeで開く VS Codeで開く Insiders 設定も削除されます。

## 主な修正点

-   [vscode#233635](https://github.com/microsoft/vscode/issues/233635) - 他のウィンドウを閉じるアクションを追加
-   [vscode#262817](https://github.com/microsoft/vscode/issues/262817) - 最左端のグループから「エディタを前のグループに移動」を実行すると、左側に新しいグループが作成されるように修正
-   [vscode#264569](https://github.com/microsoft/vscode/issues/264569) - window.activeBorder の色を設定または解除しても、ウィンドウの境界線の色がリセットされない
-   [vscode#140186](https://github.com/microsoft/vscode/issues/140186) - リモートコンテナをワークスペースとして開いた場合、ローカルターミナルを開くことができない
-   [vscode#228359](https://github.com/microsoft/vscode/issues/228359) - ターミナルを再起動すると、多くの場合ターミナルが単に閉じられてしまう
-   [vscode#232420](https://github.com/microsoft/vscode/issues/232420) - Python 3.13 を使用している場合、ターミナルのカーソル位置がずれる
-   [vscode#247568](https://github.com/microsoft/vscode/issues/247568) - ファイル名にコロンが含まれるファイルでターミナル内のCtrl+クリックを行うとファイルが開かず、先頭のゼロが削除される
-   [vscode#275011](https://github.com/microsoft/vscode/issues/275011) - 信頼済みワークスペース上の WSL で VS Code を開いた際に、奇妙なターミナルメッセージが表示される
-   [vscode#275417](https://github.com/microsoft/vscode/issues/275417) - WSL上で、reveal:never、close:true を指定したタスクが機能しなくなった
-   [vscode#277311](https://github.com/microsoft/vscode/issues/277311) - コマンドパレットの「最近使用した」リストからコマンドを削除するための「X」ボタンを追加
-   [vscode#282222](https://github.com/microsoft/vscode/issues/282222) - SCM - git blame/timeline/graphのホバー表示を改善。Stanislav Fort (Aisle Research) に感謝
-   [vscode-python-environments#1000](https://github.com/microsoft/vscode-python-environments/issues/1000) - 「コマンドプロンプト」環境の起動が不安定

## 感謝

### 課題追跡

イシュー追跡への貢献：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@tamuratak (Takashi Tamura)](https://github.com/tamuratak)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

`vscode`への貢献:

-   [@Abrifq (Arda Aydın)](https://github.com/Abrifq)
    -   バッククォートが含まれている場合にターミナルタブのプロンプト入力が機能しなくなる問題を修正 [PR #272425](https://github.com/microsoft/vscode/pull/272425)
    -   microsoft#272425 のクリーンアップ [PR #277406](https://github.com/microsoft/vscode/pull/277406)
-   [@bilogic](https://github.com/bilogic): `// #region ...` も有効なマーカーとして認識するように [PR #278943](https://github.com/microsoft/vscode/pull/278943)
-   [@busorgin (Artem Busorgin)](https://github.com/busorgin): VSBuffer で TextDecoder.ignoreBOM を true に設定 [PR #272389](https://github.com/microsoft/vscode/pull/272389)
-   [@cannona (Aaron Cannon)](https://github.com/cannona): 「エディタを前のグループに移動」で新しいグループを作成できるようにした [PR #275968](https://github.com/microsoft/vscode/pull/275968)
-   [@DrSergei (Sergei Druzhkov)](https://github.com/DrSergei): ブレークポイント範囲の計算を修正 [PR #280263](https://github.com/microsoft/vscode/pull/280263)
-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray): 一部の設定における「status bar」という用語の非標準的な大文字表記を修正（修正 #277376） [PR #277383](https://github.com/microsoft/vscode/pull/277383)
-   [@jakebailey (Jake Bailey)](https://github.com/jakebailey): `@types/vscode` の package.json も更新 [PR #277972](https://github.com/microsoft/vscode/pull/277972)
-   [@JeffreyCA](https://github.com/JeffreyCA): ターミナルの候補表示 - 候補に永続的なオプションを含め、候補のグループ化を改善 [PR #276409](https://github.com/microsoft/vscode/pull/276409)
-   [@joelverhagen (Joel Verhagen)](https://github.com/joelverhagen): NuGet MCP インストール時のランタイム構成を期待 [PR #271770](https://github.com/microsoft/vscode/pull/271770)
-   [@Josbleuet (Eric Fortin)](https://github.com/Josbleuet): Dynamic Auth Provider ロガーファイル名における不正文字の修正 [PR #280217](https://github.com/microsoft/vscode/pull/280217)
-   [@nikdmello (Nik D'Mello)](https://github.com/nikdmello): KaTeXマッチングにおけるjQuery式用のkatex正規表現を更新 [PR #269635](https://github.com/microsoft/vscode/pull/269635)
-   [@ramanverse (Raman)](https://github.com/ramanverse): 廃止予定の maybeMigrateCurrentSession メソッドを削除 [PR #280042](https://github.com/microsoft/vscode/pull/280042)
-   [@remcohaszing (Remco Haszing)](https://github.com/remcohaszing): Cursor mdc ファイルをマークダウンとしてマーク [PR #276518](https://github.com/microsoft/vscode/pull/276518)
-   [@SalerSimo](https://github.com/SalerSimo): 設定のブール値ウィジェットのオブジェクトオーバーフローを修正 [PR #278884](https://github.com/microsoft/vscode/pull/278884)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   修正: ブレッドクラムのメモリリーク [PR #276597](https://github.com/microsoft/vscode/pull/276597)
    -   修正：クイック差分モデルのメモリリーク [PR #276914](https://github.com/microsoft/vscode/pull/276914)
    -   修正：ブレッドクラムのメモリリーク [PR #276915](https://github.com/microsoft/vscode/pull/276915)
    -   修正：ターミナルプロセスのメモリリーク （一部） [PR #276962](https://github.com/microsoft/vscode/pull/276962)
    -   修正: スタートアップページでのメモリリーク [PR #277199](https://github.com/microsoft/vscode/pull/277199)
    -   修正: ターミナルタブ一覧でのメモリリーク [PR #277225](https://github.com/microsoft/vscode/pull/277225)
    -   修正: サブデコレーションが破棄されないことによるメモリリーク [PR #278328](https://github.com/microsoft/vscode/pull/278328)
    -   修正: デコレーション登録に伴うメモリリークの可能性 [PR #278331](https://github.com/microsoft/vscode/pull/278331)
    -   修正: タスク問題モニターにおけるメモリリーク [PR #279093](https://github.com/microsoft/vscode/pull/279093)
    -   修正: 履歴サービスにおけるメモリリーク [PR #279246](https://github.com/microsoft/vscode/pull/279246)
    -   修正: コンポジットバーのメモリリーク [PR #280659](https://github.com/microsoft/vscode/pull/280659)
-   [@tamuratak (Takashi Tamura)](https://github.com/tamuratak)
    -   コードブロックエディタのレンダリング完了後に onDidChangeHeight を発火。#265031 の修正 [PR #274691](https://github.com/microsoft/vscode/pull/274691)
    -   修正: Markdownレンダリング時のDOM.resetでchildrenの代わりにchildNodesを使用するように修正。#266103の修正 [PR #276890](https://github.com/microsoft/vscode/pull/276890)
    -   修正: $(a+b)^2$ を正しく処理できるようmathInlineRegExpを更新 [PR #280021](https://github.com/microsoft/vscode/pull/280021)
-   [@yavanosta (Dmitry Guketlev)](https://github.com/yavanosta): UriIdentityServiceのパフォーマンスを改善 (#\_273108) [PR #273111](https://github.com/microsoft/vscode/pull/273111)
-   [@yaxiaoliu](https://github.com/yaxiaoliu): fix(process-explorer): 名前検索の正規表現エラー [PR #280273](https://github.com/microsoft/vscode/pull/280273)

`vscode-copilot-chat`への貢献:

-   [@AbdelrahmanAbouelenin (ababouelenin)](https://github.com/AbdelrahmanAbouelenin)
    -   VSCの非表示ファミリーの追加 [PR #1996](https://github.com/microsoft/vscode-copilot-chat/pull/1996)
    -   ハッシュの統合 [PR #2181](https://github.com/microsoft/vscode-copilot-chat/pull/2181)
    -   VSCモデルC用の文字列置換ツールを有効化 [PR #2344](https://github.com/microsoft/vscode-copilot-chat/pull/2344)
-   [@cuining](https://github.com/cuining): 固定された制限付きインポートリストの代わりに、Nodeの組み込みモジュールを使用するようにESLintの設定を更新 [PR #2107](https://github.com/microsoft/vscode-copilot-chat/pull/2107)
-   [@IanMatthewHuff (Ian Huff)](https://github.com/IanMatthewHuff)
    -   nullWorkspaceFileIndex の型を修正 [PR #1964](https://github.com/microsoft/vscode-copilot-chat/pull/1964)
    -   GitDiffService の修正 [PR #2116](https://github.com/microsoft/vscode-copilot-chat/pull/2116)
-   [@jeffreyhunter77 (Jeff Hunter)](https://github.com/jeffreyhunter77)
    -   @vscode/chat-lib でのインライン補完 [PR #2131](https://github.com/microsoft/vscode-copilot-chat/pull/2131)
    -   @vscode/chat-lib のインストールスクリプトとパッケージの修正 [PR #2134](https://github.com/microsoft/vscode-copilot-chat/pull/2134)
    -   chat-libの補完機能におけるcapiクライアントをオプション化 [PR #2369](https://github.com/microsoft/vscode-copilot-chat/pull/2369)
    -   補完のフォールバックモデル ID を更新 [PR #2370](https://github.com/microsoft/vscode-copilot-chat/pull/2370)
-   [@joelverhagen (Joel Verhagen)](https://github.com/joelverhagen): server.json のフォーマット処理を VS Code コアから切り離す [PR #1373](https://github.com/microsoft/vscode-copilot-chat/pull/1373)

`vscode-js-debug` への貢献:

-   [@marat-gainullin](https://github.com/marat-gainullin): 複数の箇所で undefined の参照が発生 [PR #2297](https://github.com/microsoft/vscode-js-debug/pull/2297)

`vscode-pull-request-github` への貢献:

-   [@vicky1999 (Vignesh)](https://github.com/vicky1999)
    -   修正: 狭いエディタペインでのメッセージの折り返し [PR #8121](https://github.com/microsoft/vscode-pull-request-github/pull/8121)
    -   新機能: 各コミットのコミットステータスアイコンを表示 [PR #8142](https://github.com/microsoft/vscode-pull-request-github/pull/8142)
    -   新機能: PR 概要にコメントコピーリンクボタンを追加 [PR #8150](https://github.com/microsoft/vscode-pull-request-github/pull/8150)

`vscode-python` への貢献:

-   [@iBug](https://github.com/iBug): [microsoft/vscode#232420](https://github.com/microsoft/vscode/issues/232420) の修正: Python REPL のカーソルがずれる問題 [PR #25521](https://github.com/microsoft/vscode-python/pull/25521)

`vscode-python-debugger`への貢献:

-   [@rchiodo (Rich Chiodo)](https://github.com/rchiodo): debugpyを最新版に更新 [PR #877](https://github.com/microsoft/vscode-python-debugger/pull/877)

`vscode-python-environments`への貢献:

-   [@zsol (Zsolt Dollenstein)](https://github.com/zsol): UvWorkspace環境のサポート追加 [PR #1022](https://github.com/microsoft/vscode-python-environments/pull/1022)

`language-server-protocol`への貢献:

-   [@arshadrr (Arshad Riyaz)](https://github.com/arshadrr): slang-serverの追加 [PR #2200](https://github.com/microsoft/language-server-protocol/pull/2200)

`node-native-keymap`への貢献:

-   [@tmm1 (Aman Karmani)](https://github.com/tmm1): msctf.hヘッダーの大文字小文字の修正 [PR #64](https://github.com/microsoft/node-native-keymap/pull/64)
-   [@yonas (Yonas Yanfa)](https://github.com/yonas): README.md の更新 - FreeBSD での依存関係として libxkbfile を追加 [PR #61](https://github.com/microsoft/node-native-keymap/pull/61)

`node-pty`への貢献:

-   [@42lizard (Oliver Gassner)](https://github.com/42lizard): termiosおよびutil用のOpenBSDインクルードを追加 [PR #817](https://github.com/microsoft/node-pty/pull/817)
-   [@huangcs427 (huangcs)](https://github.com/huangcs427): 「Enjoy Git」の実用例を追加 [PR #818](https://github.com/microsoft/node-pty/pull/818)

`python-environment-tools`への貢献:

-   [@reflectronic (John Tur)](https://github.com/reflectronic): Windowsでコンソールウィンドウを作成せずにコマンドを実行 [PR #266](https://github.com/microsoft/python-environment-tools/pull/266)
-   [@zsol (Zsolt Dollenstein)](https://github.com/zsol): uvワークスペースの検出 [PR #263](https://github.com/microsoft/python-environment-tools/pull/263)

* * *

[](# "ページトップへ")
