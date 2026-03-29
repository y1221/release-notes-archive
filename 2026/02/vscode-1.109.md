---
product: VSCode
version: 1.109.0
release_title: January 2026 (version 1.109)
release_date: 2026-02-04
source_url: "https://code.visualstudio.com/updates/v1_109"
archived_at: 2026-03-29
---

# January 2026 (version 1.109)

# 2026年1月（バージョン 1.109）

_リリース日：2026年2月4日_

**アップデート 1.109.1**：このアップデートでは、以下の[セキュリティ問題](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aclosed+milestone%3A%22January+2026+Recovery+1%22+)が修正されています。

**アップデート 1.109.2**: このアップデートでは、[チャットに関する問題](https://github.com/microsoft/vscode/issues/294530#issuecomment-3891109505)が修正されています。

**アップデート 1.109.3**: このアップデートでは、以下の[課題](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aclosed+milestone%3A%22January+2026+Recovery+3%22+)が修正され、いくつかの注目すべき機能が導入されています:

-   [メッセージのステアリングとキューイング](#_message-steering-and-queueing-experimental): リクエストの実行中にフォローアップメッセージを送信
-   [エージェントフック](#_agent-hooks-preview): エージェントのライフサイクルの重要なポイントでカスタムシェルコマンドを実行
-   [Claude互換性](#_claude-compatibility): Claudeの設定ファイルをVS Codeで直接再利用
-   [スキルをスラッシュコマンドとして使用](#_use-skills-as-slash-commands): チャットからオンデマンドでエージェントのスキルを呼び出す

**アップデート 1.109.4**: このアップデートでは、以下の [課題](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aclosed+milestone%3A%22January+2026+Recovery+4%22+)が修正されています。

**アップデート 1.109.5**: このアップデートでは、これらの[問題](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aclosed+milestone%3A%22January+2026+Recovery+5%22+)に対処し、[バックグラウンドエージェント](#_background-agents)を改善する以下の機能を追加します：

-   プロンプトファイル、フック、スキルを含むスラッシュコマンドのサポート
-   バックグラウンドエージェントセッションの名前変更機能
-   Kittyキーボードサポートがすべてのユーザーに利用可能になりました

ダウンロード：Windows：[x64](https://update.code.visualstudio.com/1.109.5/win32-x64-user/stable) [Arm64](https://update.code.visualstudio.com/1.109.5/win32-arm64-user/stable) | Mac: [ユニバーサル](https://update.code.visualstudio.com/1.109.5/darwin-universal-dmg/stable) [Intel](https://update.code.visualstudio.com/1.109.5/darwin-x64-dmg/stable) [silicon](https://update.code.visualstudio.com/1.109.5/darwin-arm64-dmg/stable) | Linux: [deb](https://update.code.visualstudio.com/1.109.5/linux-deb-x64/stable) [rpm](https://update.code.visualstudio.com/1.109.5/linux-rpm-x64/stable) [tarball](https://update.code.visualstudio.com/1.109.5/linux-x64/stable) [Arm](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions) [snap](https://update.code.visualstudio.com/1.109.5/linux-snap-x64/stable)

* * *

Visual Studio Code 2026年1月版へようこそ。今回のリリースでは、VS Codeを**マルチエージェント開発の拠点**とするべく、さらなる進化を遂げています。

-   [チャット UX](#_chat-ux) - ストリーミングの高速化、推論結果の改善、そして刷新されたエディタ内インラインチャットにより、チャットの操作感が向上し、よりスムーズになりました
 
-   [エージェント セッション管理](#_agent-session-management) - ローカル、バックグラウンド、クラウドのエージェントにタスクを委任したり、必要な時に介入したりすることが、より簡単になりました
 
-   [エージェントのカスタマイズ](#_agent-customization) - エージェントオーケストレーションを使用して独自のワークフローを構築し、エージェントスキルや組織全体のカスタマイズにより一貫した結果を得られます
    
-   [エージェントの拡張性](#_agent-extensibility) - ClaudeエージェントのサポートやAnthropicモデルの新機能を活用してナレッジを再利用し、MCPアプリによる充実したチャット対話をお楽しみください
 
-   [エージェントの最適化](#_agent-optimizations) - Copilot Memoryによりエージェントの動作がよりスマートになり、外部インデックス機能でコード検索が高速化されました
    
-   [エージェントのセキュリティと信頼性](#_agent-security-and-trust) - サンドボックス機能と効果的な自動承認ルールにより、安心してターミナルコマンドを実行できます
 
-   [ワークベンチと生産性](#_workbench-and-productivity) - 新しく統合されたブラウザにより、エディタを離れることなくアプリをテストできます
 
-   [ターミナルの機能強化](#_terminal-enhancements) - ターミナル操作をよりスムーズかつ信頼性の高いものにする、使い勝手を向上させる改良
 
-   [コーディング & エディター](#_coding-and-editor) - 日常のコーディングをよりスムーズにする、いくつかの画期的な改善
 
-   [拡張機能 & API](#_extensions-and-api) - 拡張機能開発者がより豊かな体験を構築するための新機能
 

プログラミングを楽しんでください！

これらの機能について詳しく知りたい方は、 [VS Code 1.109 リリースハイライト動画](https://youtu.be/LGx8YieBjIA) を視聴して、これらの機能について詳しくご覧ください！

* * *

 

> これらのリリースノートをオンラインで読みたい場合は、[code.visualstudio.com](https://code.visualstudio.com/updates) の [code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。  

> **Insiders メンバーの方へ：新機能をいち早く試してみたいですか？**  
> ナイトリー版の Insiders ビルドをダウンロードすれば、最新の更新プログラムが利用可能になり次第、すぐに試すことができます。  
> [Insiders をダウンロード](https://code.visualstudio.com/insiders)  

* * *

## 今後のイベント

### Agent Sessions Day

2月19日に開催される [Agent Sessions Day](https://youtube.com/live/tAezuMSJuFs) に参加して、これらの最新アップデートの実演をご覧ください！ VS Code が、オープン性、拡張性、開発者の選択肢という中核的価値を堅持しつつ、どのように統一されたエージェント UX へと進化してきたかを発見してください。

![Agent Sessions Day イベントのビジュアル。](/assets/updates/1_109/agent-sessions-day-2026.webp)

## チャット UX

より迅速な応答、より明確な推論、そして操作の摩擦を軽減。今回のリリースでは、進行状況をリアルタイムで表示するストリーミング機能の改善、作業の邪魔にならないように刷新されたインラインチャット、そしてモデルが何を考えているかをより明確に把握できる機能により、AIが動作している間も作業の流れを維持できるようになりました。

### メッセージの誘導とキューイング（実験的機能）

**設定**: chat.requestQueuing.enabled VS Codeで開く VS Codeで開く Insiders , chat.requestQueuing.defaultAction VS Codeで開く VS Codeで開く Insiders

**アップデート 1.109.3**: 長時間のタスクに取り組んでいる際、現在のタスクよりも次のタスクのことを考えたり、エージェントが間違った方向に進んでいることに気づいたりすることがよくあります。以前は、応答が完了するまで待つか、リクエストを完全にキャンセルする必要がありました。現在では、 リクエストが実行中の間にフォローアップメッセージを送信できるようになりました。

![「送信」ボタンのドロップダウンメニューに表示される「キューに追加」、「メッセージで制御」、「停止して送信」のオプションを示すスクリーンショット。](/assets/updates/1_109/send-dropdown.png)

リクエストが進行中の間、**送信**ボタンは3つのオプションを持つドロップダウンメニューに変わります：

-   **キューに追加**：メッセージは待機状態となり、現在の応答が完了した後に自動的に送信されます。
-   **メッセージで制御**：現在のリクエストに対し、アクティブなツールの実行終了後に処理を中断するよう指示し、新しいメッセージを直ちに処理します。エージェントが誤った方向に進んでいる場合に、これをリダイレクトするために使用します。
-   **停止して送信**：現在のリクエストを完全にキャンセルし、新しいメッセージを直ちに送信します。

保留中のメッセージが複数ある場合は、ドラッグ＆ドロップして処理順序を変更できます。

chat.requestQueuing.defaultAction を使用して、Sendボタンのデフォルトアクションを `steer`（デフォルト）または `queue` に設定します。

[メッセージのステアリングとキューイング](https://code.visualstudio)について詳しくは、こちらをご覧ください。com/docs/copilot/chat/chat-sessions#_send-messages-while-a-request-is-running) をご覧ください。

### Anthropicモデルで思考トークンが表示されるようになりました

**設定**: chat.thinking.style VS Codeで開く VS Code Insiders , chat.agent.thinking.collapsedTools VS Codeで開く VS Code Insiders , chat.agent.thinking.terminalTools VS Codeで開く VS Code Insiders , chat.tools.autoExpandFailures VS Codeで開く VS Code Insidersiders

多くのユーザーが VS Code で Anthropic の Claude モデルを利用しています。これらのモデルは、モデルの推論プロセスをより可視化するために、思考トークンをサポートするようになりました。

今回のリリースでは、思考トークンをより効果的に表示できるよう、チャット UX を強化しました。情報は増え、ノイズは減りました！

-   好みに合わせて、詳細な思考スタイルとコンパクトな思考スタイルのどちらかを選択できます ( chat.thinking.style VS Codeで開く VS Codeで開く Insiders）。
 
-   モデルの思考プロセスが、ツール呼び出しや応答と交互に表示されます（ chat.agent.thinking.terminalTools VS Codeで開く VS Codeで開く Insiders）。
 
-   失敗したツール呼び出しは自動的に展開され、より多くのコンテキストが表示されます（ chat.tools.autoExpandFailures VS Codeで開く VS Codeで開く Insiders）。
    
-   スクロール可能な思考コンテンツやきらめきアニメーションなど、モデルの活動をより直感的に追跡できるようにするための様々な視覚的改善が施されています。
 

### チャット応答内の Mermaid ダイアグラム

チャット応答では、`renderMermaidDiagram` ツールを使用して、インタラクティブな [Mermaid ダイアグラム](https://mermaid.js.org) を表示できるようになりました。これにより、モデルはフローチャートやシーケンス図などの視覚化手法を用いて、複雑な概念を視覚的に分解することができます。ダイアグラムはインタラクティブであるため、 パンやズーム操作で詳細を確認したり、フルサイズのエディタで開いて見やすくしたりできます。

以下の操作で Mermaid ダイアグラムを操作できます：

-   **パンとズーム** - Alt/Option キーを押しながらマウスホイールを回すか、トラックパッドでピンチ操作してズームします。Alt/Option キーを押しながらドラッグすると、ダイアグラム内をパンできます。
-   **クリックでズーム** - Alt/Option キーを押しながらクリックすると拡大します。 Shiftキーを押しながら操作すると、ズームアウトします。
-   **エディタで開く** - このボタンを使用すると、図をフルサイズのエディタで開くことができ、大きな図をより見やすく表示できます。
-   **ソースをコピー** - 図を右クリックし、`図のソースをコピー`を選択すると、そのMermaidソースコードをコピーできます。

![チャット応答内のMermaid図を示すスクリーンショット。](/assets/updates/1_109/chat-mermaid.png)

### 質問ツール (実験的機能)

**設定**: chat.askQuestions.enabled VS Codeで開く VS Code Insidersで開く

不明な点がある際に推測する代わりに、 エージェントはチャット会話中に `askQuestions` ツールを使用して、確認のための質問を投げかけることができるようになりました。このツールは、単一選択または複数選択のオプション、自由入力欄、迅速な判断のためにハイライト表示された推奨回答を備え、チャット画面に直接1つ以上の質問を表示します。

![テーマタイプオプション付きの「質問ツール」の質問カルーセルを示すスクリーンショット。](/assets/updates/1_109/ask-questions-ui.png)

キーボードの「上」キーと「下」キーで回答間を移動するか、対応する回答の番号を入力してください（残りの質問をスキップするにはEscキーを使用します）。

実装計画が期待通り、さらにはそれ以上の成果につながるよう、`askQuestions`ツールを活用できるよう「Plan agent」を刷新しました！

### Planエージェント

組み込みの[Planエージェント](https://code.visualstudio.com/docs/copilot/chat/chat-planning)を使用すると、コーディングを開始する前に構造化された実装計画を作成できます。これにより、AIがタスクの要件を確実に理解し、期待に応える高品質なコードを生成できるようになります。

-   Planエージェントは、より高品質な実装プランを生成するために、構造化された4段階の反復ワークフローに従うようになりました：
 
 1.  **発見（Discovery）** - コードベースを自律的に探索し、関連ファイルを検索してプロジェクト構造を理解します。
    2.  **整合（Alignment）** - プランを確定する前に一時停止して確認のための質問を行い、曖昧さを早期に捕捉します。
    3.  **設計** - 明確な手順、ファイルの場所、コードスニペットを含む包括的な実装計画を草案します。
    4.  **精緻化** - 検証基準を追加し、計画中に下された決定事項を文書化します。
-   チャットで `/plan` と入力し、その後にタスクの説明を追加することで、Planエージェントを呼び出せるようになりました。これにより、実装に移行する前に複雑なタスクの計画を立てるための迅速な入り口が提供されます。
 

### コンテキストウィンドウの詳細

モデルがコンテキストウィンドウをどのように使用しているかを把握するために、チャット入力エリアにコンテキストウィンドウインジケーターが表示されるようになりました。 インジケーターにカーソルを合わせると、カテゴリ別のトークン使用状況の内訳が表示されます。

![コンテキストウィンドウのコントロールと、カテゴリ別の内訳を示すホバーメッセージを表示したスクリーンショット。](/assets/updates/1_109/context-window-widget.png)

### インラインチャットのUX刷新（プレビュー）

**設定**: inlineChat.affordance VS Codeで開く VS Codeで開く Insiders , inlineChat.renderMode VS Codeで開く VS Codeで開く Insiders

インラインチャットのユーザーエクスペリエンスの刷新を継続しており、2つのプレビュー機能をご用意しました：

-   テキストを選択した際にインラインチャットを簡単に起動できるアフォーダンス ( inlineChat.affordance VS Codeで開く VS Codeで開く Insiders )
-   軽量で使いやすいコンテキストレンダリング ( inlineChat.renderMode VS Codeで開く VS Code Insidersで開く )

### モデルピッカーでのモデル説明

モデルピッカーでモデルにカーソルを合わせたり、キーボードフォーカスを合わせたりすると、その詳細を一目で確認できるようになりました。

![現在選択されているモデル「Claude Opus」の説明がホバーフライアウトで表示された言語モデルピッカーのスクリーンショット](/assets/updates/1_109/model-picker.png)

### ターミナルコマンドの出力

#### コマンドの詳細情報の充実

実行中のコマンドがより明確になるよう、ターミナルツールでは以下の詳細情報が表示されるようになりました：

-   **Node、Python、Rubyのインラインコードに対する構文強調表示**
 
 ![レビューしやすくするため、Pythonコードのみを表示したインラインPython呼び出しを示すスクリーンショット。](/assets/updates/1_109/terminal-python-presenter.png)
 
-   **作業ディレクトリ**
 
 ![コマンドが実行されるディレクトリを示すスクリーンショット。「within」の後にタイトルで強調表示されています。](/assets/updates/1_109/terminal-tool-cd-presentation.png)
 
-   **コマンドの意図の説明**
 
 ![カーソルを合わせるとコマンドの目的が表示されるスクリーンショット。単に「何をするか」だけでなく、「なぜそれをするのか」を説明しています。](/assets/updates/1_109/terminal-tool-goal.png)
    

#### 出力のストリーミング

コマンドの実行に時間がかかる場合、ターミナルの出力が自動的に展開されるようになり、何が起きているかを即座に確認できるようになりました。クイックコマンドは折りたたまれたままになり、画面のノイズを軽減します。

#### 対話型入力

埋め込みターミナルは完全にインタラクティブになりました。ターミナルにフォーカスを合わせて直接入力できるため、コマンドが確認を求めたり、ユーザー入力が必要になったりする際に便利です。カーソルが表示されるようになったため、ターミナルが入力待機状態であることが一目でわかります。

#### 非表示のターミナルをすべて削除

ターミナルパネルの**「非表示のターミナル」**項目に削除アイコンが追加され、ワンアクションですべての非表示ターミナルをクリアできるようになりました。

![タブ一覧の「非表示のターミナル」項目に表示される削除アイコンのスクリーンショット。](/assets/updates/1_109/delete-hidden-terminals.png)

### 新しいテーマについてのご意見をお聞かせください（実験的機能）

集中力を高め、影や透明感を活用することでUIに洗練された軽快さをもたらす、新しい実験的な `VS Code Light` および `VS Code Dark` テーマを開発中です。これらのテーマは現在開発中のものです。

[vscode リポジトリ](https://github.com/microsoft/vscode/issues) にてフィードバックをお寄せいただき、良い点や改善すべき点をお知らせください。

**VS Code Dark（実験的）**:

![新しい実験的な VS Code Dark テーマを示すスクリーンショット。](/assets/updates/1_109/vscode-dark-experimental-theme.webp)

**VS Code Light（実験的）**:

![新しい実験的な VS Code Light テーマを示すスクリーンショット。](/assets/updates/1_109/vscode-light-experimental-theme.webp)

## 編集モードが非表示になりました（実験的機能）

**設定**: chat.editMode.hidden VS Codeで開く VS Code Insidersで開く

編集モードは、チャットのエージェントドロップダウンからデフォルトで非表示になりました。エージェントを使用することで、編集モードの機能のスーパーセットが利用可能になり、コード編集タスクにおいてより良い結果が得られます。

組織でエージェントモードが無効になっている場合、編集モードはエージェントのドロップダウンに表示されたままになります。また、chat.editMode.hidden Open in VS Code Open in VS Code Insiders 設定を無効にすることで、編集モードを手動で復元することも可能です。

## エージェント セッションの管理

フォーカスを失うことなく、タスクの委任、監視、切り替えが可能です。ローカル、バックグラウンド、クラウド環境を横断して複数のエージェント セッションを並行して実行できるようになり、すべてを単一の統合ビューから管理できます。セッション間を移動し、進捗状況を一目で確認しながら、エージェントに自律的に作業させ、自身の生産性を維持できます。

### エージェント タイプ間の切り替えと委任

VS Code を使用すれば、[さまざまな環境](https://code.visualstudio.com/docs/copilot/agents/overview#_types-of-agents) において、エージェントセッションを簡単に開始できるようになりました。これには、ローカルの VS Code 内、バックグラウンド、クラウド、または他のエージェントプロバイダーが含まれます。チャット入力エリアに新しいセッションタイプピッカーを導入することで、これらの異なるエージェントタイプ間の切り替えがさらに簡単になりました。

このピッカーには主に2つの目的があります：

-   開始したいエージェント セッションのタイプを選択する
-   進行中のセッションを別のエージェント タイプに引き継ぐ（例：ローカルでタスクを計画し、クラウドで実装する）

![セッションタイプピッカーを使用して、異なる環境でセッションを継続する様子を示すスクリーンショット。](/assets/updates/1_109/session-type-picker-continue.png)

> **ヒント:** 新しいローカルチャットセッションを作成するための `workbench.action.chat.newLocalChat` コマンドを追加しました。このコマンドをキーボードショートカットに割り当てると、さらに素早くアクセスできます。

### エージェントセッションの追跡

複数のエージェントを使用する場合、特に異なる環境間で複数のセッションを並行して実行している場合は、アクティブなエージェントセッションを追跡することが不可欠です。

#### エージェントセッションビュー

この作業をより簡単にするため、VS Code の「エージェント セッション」ビューをさらに改善しました：

-   並べて表示する際のセッション リストのサイズ変更
-   セッションを複数選択して一括操作を実行
-   セッションのナビゲーションとフィルターの適用を改善した、より見やすいスタック表示

#### エージェント ステータス インジケーター

**設定**: chat.agentsControl.enabled VS Code で開く VS Code で開く Insiders , chat.agentsControl.clickBehavior VS Codeで開く VS Codeで開く Insiders

複数のアクティブなセッションがある状況では、どのセッションに注意が必要かを素早く把握することが重要です。エージェント セッションの更新状況を可視化するため、VS Code コマンドセンターにエージェント ステータス インジケーター ( chat.agentsControl.enabled VS Codeで開く VS Codeで開く Insiders ) を追加しました。

このインジケーターは、進行中、未読、および注意が必要なセッションなど、さまざまな種類のステータス情報を表示します。インジケーターを選択すると、セッション一覧をすばやく開いてフィルタリングできます。

![対応が必要な件数を表示したエージェントステータスインジケーターのスクリーンショット。](/assets/updates/1_109/agent-status-indicator/input-needed.png)

また、コマンドセンターのチャットボタンを更新し、クリック時の動作を設定できるようにしました ( chat.agentsControl.clickBehavior VS Codeで開く VS Codeで開く Insiders )。デフォルトでは、サイドバー、最大化、非表示といった、チャットビューの異なる状態を切り替えるようになりました。

### サブエージェント

**設定**: chat.customAgentInSubagent.enabled VS Codeで開く VS Codeで開く Insiders

エージェントは、[サブエージェント](https://code.visualstudio.com/docs/copilot/agents/subagents) を使用してサブタスクを実行し、複雑なタスクを小さなパーツに分割できます。サブエージェントの利点は、専用のコンテキストウィンドウで動作し、メインのエージェントのコンテキストウィンドウに追加されないことです。

サブエージェントは並行して実行できるようになり、 これにより、独立したタスクに分割可能な作業の処理速度を大幅に向上させることができます。

![チャット内で2つのサブエージェントがアクティブに動作しており、その横にスピナーが表示されているスクリーンショット。](/assets/updates/1_109/subagents.png)

各サブエージェントの動作状況をより明確に把握できるよう、チャット画面には現在実行中のタスク、サブエージェントに使用されているカスタムエージェント、および現在使用中のツールなどの詳細が表示されるようになりました。 サブエージェント情報を展開すると、提供された初期プロンプト全文や返された結果など、そのサブエージェントが何を行っているかの詳細をすべて確認できます。

#### 検索サブエージェント (実験的機能)

**設定**: github.copilot.chat.searchSubagent.enabled VS Codeで開く VS Code Insidersで開く

コードベースの検索は通常、複数の反復処理を伴うタスクであり、コンテキストウィンドウの制限をすぐに超えてしまう可能性があります。そこで、隔離されたエージェントループ内で実行される検索サブエージェントのサポートを追加しました。これにより、検索を反復的に絞り込み、複数のクエリを試行し、ワークスペースのさまざまな部分を探索できるようになります。

これにより、単一の検索では不十分な複雑なクエリに対する検索結果の品質が向上します。また、メインエージェントのコンテキストウィンドウが保持されるため、 検索サブエージェントが処理を行っている間も、メインエージェントが作業を継続できるようになります。

### クラウドエージェント

新しい [クラウドエージェント](https://code.visualstudio.com/docs/copilot/agents/cloud-agents) セッションを開始する際、セッションの設定オプションがさらに増えました。さまざまなモデルから選択したり、カスタムエージェントを使用したり、利用可能なパートナーエージェント（利用可能な場合）から選択したりできます。

-   **クラウドエージェントのモデル選択**
 
 ![チャット入力画面に表示されるクラウドエージェントのモデル選択ピッカーのスクリーンショット。](/assets/updates/1_109/cloud-agent/model-picker.png)
 
-   **サードパーティ製コーディングエージェント** (プレビュー)
    
    GitHub Copilot サブスクリプションの一環として、Claude や Codex などのサードパーティ製コーディングエージェントを設定している場合、クラウドエージェントの種類を選択すると、VS Code にこれらのオプションが表示されます。
 
 ![チャット入力画面に表示されるクラウドコーディングエージェント選択ピッカーのスクリーンショット。](/assets/updates/1_109/cloud-agent/partner-agents.png)
    
    GitHubの変更履歴で、[サードパーティ製コーディングエージェントの対応状況と有効化方法](https://github.blog/changelog/2026-02-04-claude-and-codex-are-now-available-in-public-preview-on-github/)について詳しくご確認ください。
 
-   **クラウドエージェント用のカスタムエージェント**
 
 対象の GitHub リポジトリのデフォルトブランチで利用可能な [カスタムエージェント](https://code.visualstudio.com/docs/copilot/customization/custom-agents) から選択してください。
    
    ![チャット入力画面のカスタムエージェント選択ピッカーを示すスクリーンショット。](/assets/updates/1_109/cloud-agent/custom-agent.png)
 
-   **マルチルートワークスペースおよび空のワークスペースの改善**
 
 マルチルートワークスペースウィンドウまたは空のワークスペースウィンドウ内で、クラウドエージェントに使用するフォルダを選択できるようになりました。
 
 ![チャット入力画面でのマルチルート対応を示すスクリーンショット。](/assets/updates/1_109/cloud-agent/cloud-repository-picker.png)
 
-   ****「チェックアウト」が常に表示されるようになりました**
 
 エージェントセッションの**「チェックアウト」**オプションは、GitHub Pull Requests拡張機能がインストールされていない場合でも表示されるようになりました。このアクションを選択すると、必要に応じてGitHub Pull Requestsがインストールされ、 その後、チェックアウトの実行をその拡張機能に引き継ぎます。
 

### バックグラウンドエージェント

ローカルおよびクラウドエージェントとの整合性を図るため、[バックグラウンドエージェント](https://code.visualstudio.com/docs/copilot/agents/copilot-cli)にいくつかの改善を加えました：

-   **バックグラウンドエージェント用のカスタムエージェント**
 
 ![バックグラウンドチャット入力画面のカスタムエージェント選択ピッカーを示すスクリーンショット。](/assets/updates/1_109/background-agent-custom-agent.png)
 
-   **画像をコンテキストとして添付**
    
    ![バックグラウンドチャット入力画面での画像サポートを示すスクリーンショット。](/assets/updates/1_109/background-agent-image-support.png)
 
-   **マルチルートワークスペースの改善**
 
 マルチルートワークスペースでは、バックグラウンドエージェントで使用するフォルダを選択できるようになりました。
 
 ![バックグラウンドチャット入力画面でのマルチルートサポートを示すスクリーンショット。](/assets/updates/1_109/background-agent-multi-root.png)
 
-   **各ターン終了時の自動コミット**
 
 バックグラウンドエージェントのループを更新し、各ターン終了時に変更内容をGitワークツリーにコミットするようにしました。これにより、バックグラウンドセッションの「保持」および「元に戻す」アクションを削除し、変更されたファイルがワーキングセットに表示される方法を簡素化することができました。
    
-   **バックグラウンドエージェント用のスラッシュコマンド**
 
 **アップデート 1.109.5**: [プロンプトファイル](https://code.visualstudio.com/docs/copilot/customization/reusable-prompts)、[フック](#_agent-hooks-preview)、および[スキル](#_use-skills-as-slash-commands)が、チャット内のスラッシュコマンドとしてバックグラウンドエージェントで利用可能になりました。
 
-   **バックグラウンドエージェントセッションの名前変更**
    
    **アップデート 1.109.5**: バックグラウンドエージェントのセッション名を変更できるようになり、管理がより容易になりました。
 
 ![バックグラウンドエージェントのセッション名変更機能を示すスクリーンショット](/assets/updates/1_109/background-agent-rename-session.png)
 

#### エージェントセッションのウェルカムページ (実験的機能)

**設定**: workbench.startupEditor VS Codeで開く VS Codeで開く Insiders

最後に、新しいウェルカムページの実験を行っており、これを素晴らしいものにするために皆様のご協力が必要です。 複数のエージェントを並行して稼働させている場合、最近のセッションを把握しておくことは重要です。新しいウェルカムページでは、エージェントのセッションが画面の中心に表示されます。

![最近のセッション、クイックアクション、埋め込みチャットウィジェットが表示されたエージェントセッションのウェルカムページのスクリーンショット](/assets/updates/1_109/agent-sessions-welcome-page.png)

`workbench.startupEditor` を `agentSessionsWelcomePage` に設定することで、このウェルカムページを起動時のエディターとして有効にできます。ご意見やフィードバックを [vscode リポジトリ](https://github.com/microsoft/vscode/issues) までお寄せください！

## エージェントのカスタマイズ

AIがコードベースと連携する方法を定義し、チーム全体で共有しましょう。エージェントスキルにより、ドメインの専門知識を再利用可能なワークフローとしてパッケージ化できるようになりました。組織全体の指示により一貫性が確保され、新しい制御機能により、エージェントがいつ、どのように呼び出されるかを細かく制御できます。

### エージェントフック (プレビュー)

**設定**: chat.hooks.enabled VS Codeで開く VS Code Insidersで開く

**バージョン 1.109.3**: フックを使用すると、エージェント セッション中の重要なライフサイクル ポイントでカスタム シェル コマンドを実行できます。 エージェントの動作を誘導するインストラクションやカスタムプロンプトとは異なり、フックは結果を保証した上でコードを確定的に実行します。セキュリティポリシーの適用、コード品質チェックの自動化、監査証跡の作成、またはプロジェクト固有のコンテキストの注入などに活用できます。

VS Codeは、セッション中の特定のタイミングで発火する8つのフックイベントをサポートしています。これには、ツール呼び出しをインターセプトするための`PreToolUse`および`PostToolUse`、セッションライフサイクル用の`SessionStart`および`Stop`、そしてネストされたエージェントの使用状況を追跡するための`SubagentStart`や`SubagentStop`などがあります。

![フック設定のクイックピックを示すスクリーンショット。](/assets/updates/1_109/hooks-configuration.png)

VS CodeはClaude CodeやCopilot CLIと同じフック形式を使用しているため、既存のフック設定をツール間で再利用できます。

使い始めるには、チャットで `/hooks` スラッシュコマンドを使用して新しいフックを設定するか、手動でフックファイルを作成してください。例えば、ファイル編集のたびにリンターを実行する `PreToolUse` フックを作成したり、危険なターミナルコマンドが実行される前にブロックしたりすることができます。

詳細については、 [エージェントフック](https://code.visualstudio.com/docs/copilot/customization/hooks)については、ドキュメントをご覧ください。

### スキルをスラッシュコマンドとして使用する

エージェントスキルは、[プロンプトファイル](https://code.visualstudio.com/docs/copilot/customization/reusable-prompts)。チャット入力欄に `/` と入力すると、利用可能なすべてのスキルとプロンプトが表示され、スキルを選択すると即座に実行されます。コマンドの後に追加のコンテキストを指定することも可能です。例：`/webapp-testing for the login page` や `/github-actions-debugging PR #42`。

デフォルトでは、すべてのスキルが `/` メニューに表示されます。スキルファイル内の `user-invocable` および `disable-model-invocation` フロントマタープロパティを使用して、各スキルへのアクセス方法を制御できます：

-   `user-invocable: false` を設定すると、メニューからスキルを非表示にしながら、モデルが自動的に読み込むことは可能です。
-   `disable-model-invocation: true` を設定すると、 メニューにスキルを表示しつつ、モデルが自動的に読み込むのを防ぎます。

ドキュメントの [スラッシュコマンドとしてのスキルの使用方法](https://code.visualstudio.com/docs/copilot/customization/agent-skills#_use-skills-as-slash-commands) について詳しくはこちらをご覧ください。

### `/init` を使用して AI 向けのワークスペースを設定する

[常に-onカスタム指示書](https://code.visualstudio.com/docs/copilot/customization/overview#_custom-instructions)（`copilot-instructions.md`や`AGENTS.md`など）を使用することで、AIがコード生成時にプロジェクトの規約に従うようにできます。

コードベースに基づいた初期の指示セットでプロジェクトを準備するには、チャットで`/init`スラッシュコマンドを使用して ワークスペースの指示を生成または更新できます。

`/init` を実行すると、エージェントはワークスペース内の既存の AI 規約（`copilot-instructions.md` や `AGENTS.md` など）を検出し、プロジェクトの構造やコーディングパターンを分析して、プロジェクトに合わせた包括的なワークスペース指示を生成します。`/init` コマンドはコントリビュートされたプロンプトファイルとして実装されているため、基盤となるプロンプトを修正することでその動作をカスタマイズできます。

### エージェントスキルが一般提供開始

**設定**: chat.useAgentSkills VS Codeで開く VS Code Insiders で開く , chat.agentSkillsLocations VS Codeで開く VS Code Insiders で開く

[エージェントスキル](https://code.visualstudio.com/docs/copilot/customization/agent-skills) が一般提供され、デフォルトで有効になりました。スキルは、AIが高品質な出力を生成できるよう支援するための、専門的な機能、ドメイン知識、および洗練されたワークフローを提供します。各スキルフォルダーには、テスト戦略、API設計、パフォーマンス最適化など、特定のドメイン向けにテスト済みの指示が含まれています。

VS Code では、プロンプトファイル、指示、またはカスタムエージェントを管理するのと同じ方法で、スキルを管理できるようになりました。 **Chat: Configure Skills** コマンドを使用して利用可能なすべてのスキルを表示したり、**Chat: New Skill File** コマンドを使用してワークスペースまたはユーザーホームに新しいスキルを作成したりできます。

![Chat ビューのスキル設定オプションを示すスクリーンショット。](/assets/updates/1_109/configure-skills.png)

デフォルトでは、VS Codeはワークスペースの `.github/skills` および `.claude/skills` フォルダ、またはユーザーホームの `~/.copilot/skills` および `~/.claude/skills` フォルダ内でスキル定義を検索します。`chat.agentSkillsLocations` 設定を使用することで、VS Codeがスキルを検索するカスタムパスを指定できます。

拡張機能の開発者であれば、スキル拡張機能をパッケージに含め、`package.json`内の`chatSkills`コントリビューションポイントを使用して登録することで、拡張機能と共にスキルをパッケージ化して配布することもできます：

```
{
  "contributes": {
    "chatSkills": [
 {
 "path": "./skills/my-skill"
 }
    ]
  }
}
```

`path` は `SKILL.md` ファイルを含むディレクトリを指す必要があり、`SKILL.md` のフロントマターにある `name` フィールドは親ディレクトリ名と一致している必要があります。たとえば、パスが `./skills/my-skill` の場合、そのディレクトリにはフロントマターに `name: my-skill`と記述された`SKILL.md`ファイルが含まれている必要があります。必要なフォルダ構造の詳細については、[Agent Skills ドキュメント](https://code.visualstudio.com/docs/copilot/customization/agent-skills#_contribute-skills-from-extensions)を参照してください。

### 組織全体の指示

**設定**: github.copilot.chat.organizationInstructions.有効化 VS Codeで開く VS Codeで開く Insiders

以前、VS Codeでは組織レベルのカスタムエージェントのサポートが追加されていました。今回のリリースでは、VS Codeが組織レベルのカスタム指示もサポートするようになりました。GitHub組織でCopilot用のカスタム指示が設定されている場合、それらはチャットセッションに自動的に適用され、チーム全体で一貫したガイダンスが提供されます。

この機能はデフォルトで有効になっています。github.copilot.chat.organizationInstructions.enabled を `false` に設定することで、組織の指示を無効にできます。enabled](https://code.visualstudio.com/docs/copilot/customization/custom-instructions) を `false` に設定することで無効にできます。

ドキュメントの [カスタム指示](https://code.visualstudio.com/docs/copilot/customization/custom-instructions) について詳しくはこちらをご覧ください。

### カスタムエージェントファイルの保存場所

**設定**: chat.agentFilesLocations VS Codeで開く VS Code Insidersで開く

プロンプトファイル、指示、スキルなどの他のカスタマイズファイルと同様に、VS Codeが[カスタムエージェント定義](https://code.visualstudio.com/docs/copilot/customization/custom-agents)（`.agent.md`）を検索する場所を設定できるようになりました。

デフォルトでは、 VS Codeは、ワークスペースの `.github/agents` フォルダー内でエージェントファイルを検索します。新しい `chat.agentFilesLocations` 設定（VS Codeで開く VS Codeで開く Insiders）を使用すると、検索対象のディレクトリを追加できます。これにより、プロジェクト間でエージェントを整理・共有したり、ワークスペース外の中央の場所にエージェントを保管したりすることが容易になります。

```
{
  "chat.agentFilesLocations": {
    "~/.vscode/agents": true,
    "shared/team-agents": true
  }
}
```

### カスタムエージェントの呼び出し方法を制御する

**設定**: chat.customAgentInSubagent.enabled VS Codeで開く VS Code Insiders

[カスタムエージェント](https://code.visualstudio.com/docs/copilot/customization/custom-agents) では、フロントマターヘッダーに追加の属性を指定できるようになり、エージェントの呼び出し方法をより細かく制御できるようになりました。これは、複雑なタスクを確実に処理するための [エージェントオーケストレーション](#_agent-orchestration) を設定する際に特に役立ちます。

-   `user-invocable`: チャット内のエージェントドロップダウンからそのエージェントを選択できるかどうかを制御します。`false` に設定すると、プログラム経由または [サブエージェント](https://code.visualstudio.com/docs/copilot/agents/subagents) としてのみアクセス可能なエージェントを作成できます。
    
-   `disable-model-invocation`: 有効にすると、他のエージェントからサブエージェントとして呼び出されるのを防ぎます。これは、ユーザーによる明示的なトリガーでのみ起動されるべきエージェントに有用です。
    
-   `agents`: 現在のエージェントが呼び出せるサブエージェントを制限します。指定した場合、エージェントはリストされたエージェントにのみ作業を引き継ぐことができます。サブエージェントの呼び出しを有効にするには、`agent` ツールを使用してください。
 

カスタムエージェントをサブエージェントとして使用するには、現在まだ設定が必要です。chat.customAgentInSubagent.enabled を有効にして、カスタムエージェントをサブエージェントとして使用できるようにしてください。

```
---
name: my-internal-agent
user-invocable: false
---

このエージェントはサブエージェントとしてのみ呼び出せます
```

次の例は、`Modify` および `Search` サブエージェントのみを呼び出せるエージェントを示しています：

```
---
name: Foo
tools: ['agent']
agents: ['Modify', 'Search']
---

このエージェントは、Modify および Search サブエージェントのみを使用できます。
```

### カスタムエージェントの複数モデル対応

[カスタムエージェント](https://code.visualstudio.com/docs/copilot/customization/custom-agents) では、フロントマターヘッダーに複数のモデルを指定できるようになりました。リスト内の最初に指定されたモデルが使用され、優先するモデルが利用できない場合の代替オプションとして機能します。

```
---
name: my-agent
model: ['Claude Sonnet 4.5 (copilot)', 'GPT-5 (copilot)']
---

このエージェントは Claude Sonnet 4.5 を優先しますが、利用できない場合は GPT-5 にフォールバックします。
```

### チャットカスタマイズの診断

チャットカスタマイズファイルは、ユーザープロファイル、ワークスペース、拡張機能、 GitHub 組織など、さまざまな場所から読み込まれる可能性があります。カスタムエージェント、プロンプト、指示、またはスキルに関する問題をトラブルシューティングする際、現在どのファイルが読み込まれているか、また読み込み中にエラーが発生したかどうかを特定するのは困難な場合があります。

新しい診断ビューでは、現在読み込まれているすべてのカスタムエージェント、プロンプトファイル、指示ファイル、およびスキルを表示することで、チャットカスタマイズのトラブルシューティングを支援します。これを利用するには、チャットビュー内で右クリックし、****[診断]** を選択します。これにより、アクティブなすべてのカスタマイズファイル、その読み込みステータス、および読み込み中に発生したエラーを一覧表示した Markdown ドキュメントが開きます。

![読み込まれたエージェント、プロンプト、指示、スキルが表示されたチャットカスタマイズ診断ビューのスクリーンショット。](/assets/updates/1_109/chat-customization-diagnostics.png)

### 言語モデルエディタ

VS Code の言語モデルエディタは、チャットで使用される言語モデルを管理および設定するための一元化されたインターフェースを提供します。今回のアップデートでは、この機能をさらに強化しました：

-   **プロバイダごとの複数設定**：同じモデルプロバイダに対して、それぞれ異なる API キーを持つ複数の設定を作成できます。 これは、個人用アカウントと業務用アカウントを分離したり、プロジェクトごとに異なる API キーを使用したりするのに便利です。たとえば、個人の API キーを使用した Gemini 設定と、チームの API キーを使用した別の設定を用意することができます。
 
 ![異なる設定を持つ複数の Gemini グループを示すスクリーンショット。](/assets/updates/1_109/chat-lm-editor-groups.png)
 
-   ****Azureプロバイダーからのモデル設定**：Azureモデルを設定する際、VS Codeは`chatLanguageModels.json`設定ファイルを開き、スニペットテンプレートを挿入します。このスニペットには、モデルID、名前、エンドポイントURL、トークン制限などの必須プロパティが含まれています。その後、追加したい各モデルの値を入力できます。
 
-   **プロバイダーグループの管理**：設定アクションを選択して既存のプロバイダーグループを設定します。例えば、 API キーを更新する場合などです。また、「削除」アクションを使用して、プロバイダーグループを完全に削除することもできます。
 
-   **その他の UI の改善**: モデルの表示/非表示を切り替えるキーボード操作、コンテキストメニューのアクション、一括操作のための複数選択など、いくつかのユーザビリティが向上しました。
 
-   **言語モデル設定ファイル**: モデルの設定は、専用の `chatLanguageModels.json` ファイルに保存されるようになりました。Language Models エディターの 。これにより、モデル設定の確認、編集、共有が容易になります。
 
 ![Language Models エディタのファイルアイコンをクリックして設定ファイルを開く様子を示すスクリーンショット。](/assets/updates/1_109/language-models-editor-config-file.png)
    
-   **モデルプロバイダー設定 UI**: モデルプロバイダーは設定スキーマを宣言でき、VS Code はユーザーが設定を入力するための UI を提供します。この新しい提案 API の詳細については、[チャットモデルプロバイダーの設定](#_chat-model-provider-configuration) を参照してください。GitHub Copilot Chat 拡張機能の既存のモデル設定は自動的に移行されます。
 

### 言語モデル設定

**設定**: github.copilot.chat.implementAgent.model VS Codeで開く VS Code Insidersで開く , inlineChat.defaultModel VS Codeで開く VS Code Insidersで開く

-   **プラン実装用のデフォルトモデル（実験的機能）**
 
 プラン エージェントの実装ステップ（ github.copilot.chat.implementAgent.model VS Codeで開く VS Code Insidersで開く ）のデフォルト言語モデルを設定できるようになりました。デフォルトモデルを使用する場合は、設定を空のままにします。モデル値は `Model Name (vendor)` の形式で指定された完全修飾モデル名である必要があります。 例えば `GPT-5 (copilot)` や `Claude Sonnet 4.5 (copilot)` などです。
 
 ![github.copilot.chat.implementAgent.model 設定が表示された設定エディタのスクリーンショット](/assets/updates/1_109/implement-agent-model-setting.png)
 
-   **インラインチャット用のデフォルトモデル**
    
    デフォルトでは、エディタのインラインチャットは選択されたベンダーのデフォルトモデルを使用します。これにより、拡張機能はインラインチャットのシナリオに特化したモデルを提供できるようになります。
    
    別のモデルを使用したい場合は、`inlineChat.defaultModel` 設定で構成できます。この設定により、インラインチャット用の統一されたデフォルト言語モデルを選択できます。これにより、インラインチャットセッションを開始するたびに、毎回手動で選択することなく、指定したモデルが自動的に使用されます。
    
    ![「inlineChat.defaultModel」設定と利用可能な言語モデルのドロップダウンリストが表示された設定エディタのスクリーンショット。](/assets/updates/1_109/inline-chat-default-model.png)
 
-   **エージェントのハンドオフで使用する言語モデルを指定**
 
 エージェントのハンドオフでは、ハンドオフの実行時に使用する言語モデルを指定できるオプションの `model` パラメータがサポートされるようになりました。これにより、`.agent.md` ファイルから直接、特定のエージェントワークフローで使用されるモデルを制御できるようになります。
 
 モデルの値は、`Model Name (vendor)` という形式の完全修飾モデル名である必要があります。 例えば `GPT-5 (copilot)` や `Claude Sonnet 4.5 (copilot)` などです。
 
 ![モデルパラメータが指定されたエージェントファイル内のエージェントハンドオフ設定を示すスクリーンショット。](/assets/updates/1_109/handoff-model-parameter.png)
 

### エージェントカスタマイズスキル（実験的機能）

**設定**: chat.agentCustomizationSkill.enabled VS Codeで開く VS Code Insidersで開く

新しい**agent-customization**スキルは、AIコーディング体験のカスタマイズを支援する方法をエージェントに教えます。カスタムエージェント、手順、プロンプト、またはスキルの作成について質問すると、エージェントはこのスキルを自動的に読み込み、正確なガイダンスを提供します。

このスキルがカバーする内容：

-   **[カスタムエージェント](https://code.visualstudio.com/docs/copilot/customization/custom-agents)** - ツール、モデル、動作に関するフロントマター設定を含む `.agent.md` ファイルの作成
-   **[カスタムインストラクション](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)** - コンテキストに応じたガイダンスのための `applyTo` パターンを含む `.instructions.md` ファイルの作成
-   **[プロンプトファイル](https://code.visualstudio.com/docs/copilot/customization/reusable-prompts)** - 一般的なタスク向けに再利用可能な `.prompt.md` テンプレートの作成
-   **[スキル](https://code.visualstudio.com/docs/copilot/customization/agent-skills)** - ドメインの専門知識を `SKILL.md` ファイルにパッケージ化
-   **ワークスペースの指示** - `copilot-instructions.md`および`AGENTS.md`にプロジェクト全体の規約を設定する

## エージェントの拡張性

今回のリリースでは、Claudeエージェントのサポートが追加され、AnthropicのエージェントSDKを直接活用できるようになりました。また、チャット内でインタラクティブな可視化を表示するMCPアプリや、新しいプロバイダー機能により、エージェントの機能を拡張する手段がさらに広がります。

### Claudeとの互換性

VS CodeとClaudeの両方を使用している場合、別々の設定ファイルを維持する必要がなくなりました。VS Codeは現在、Claudeの設定ファイルを直接読み込むため、 エージェント、スキル、指示、フックは重複することなく両方のツールで動作します。

VS Codeは以下のClaudeファイルの場所を検出します：

-   **指示**: ワークスペースのルートにある `CLAUDE.md` ファイル、`.claude/CLAUDE.md`、および `~/.claude/CLAUDE.md`。VS Code は `.claude/rules` フォルダー内の指示ファイルも読み込みます。詳細については、[カスタム指示](https://code.visualstudio.com/docs/copilot/customization/custom-instructions#_use-a-claudemd-file) を参照してください。
-   **エージェント**: `.claude/agents` フォルダー内の、Claude サブエージェント形式に準拠した `.md` ファイル。詳細については、[カスタムエージェントファイルの場所](#_custom-agent-file-locations) を参照してください。
-   **スキル**: `.claude/skills` および `~/.claude/skills` フォルダー内のスキル定義。詳細については、[エージェントスキル](#_agent-skills-are-generally-available)を参照してください。
-   **フック**: `.claude/settings.json` および `~/.claude/settings.json` 内のフック設定。 詳細は [エージェントフック](#_agent-hooks-preview) を参照してください。

この互換性は、指示、エージェント、スキル、フックにまたがって適用されるため、複数の AI ツールを使用しているチームでも、単一の設定ファイルセットを共有できます。

### エージェントのオーケストレーション

エージェントのオーケストレーションは、複数の専門化されたエージェントが協力して共通の目標を達成する、複雑な AI ワークフローを構築するための強力なパターンです。単一のエージェントにすべてを任せるのではなく、オーケストレーションでは、計画、実装、コードレビュー、研究といった特定の役割に最適化された専用エージェント間で作業を分散させます。

このアプローチには、いくつかの重要な利点があります：

-   **コンテキスト効率**：各サブエージェントは専用のコンテキストウィンドウ内で動作するため、コンテキストのオーバーフローを防ぎます
-   **専門化**：異なるエージェントが、それぞれのタスクに最適化された異なるモデルを使用できます
-   **並列実行**：独立したタスクを複数のサブエージェント間で並列に実行できます

![タスクを完了するために複数の専門化されたエージェントが連携するオーケストレーションシステムを示す図。](/assets/updates/1_109/agent-orchestration-diagram.png) _画像出典 [https://github.com/ShepAlderson/copilot-orchestra](https://github.com/ShepAlderson/copilot-orchestra) by [@ShepAlderson](https://github.com/ShepAlderson)_

VS Codeには、[カスタムエージェント](https://code)visualstudio.com/docs/copilot/customization/custom-agents)、[サブエージェント](https://code.visualstudio.com/docs/copilot/agents/subagents)、および[エージェントの起動方法](#_control-how-custom-agents-are-invoked)に対する詳細な制御。

コミュニティでは、そのまま利用したり、ニーズに合わせてカスタマイズしたりできる、優れたエージェントオーケストレーションシステムの例が作成されています：

-   [Copilot Orchestra](https://github.com/ShepAlderson/copilot-orchestra) - 完全な開発サイクルを通じて、計画、実装、コードレビューのサブエージェントをオーケストレーションする「Conductor」を備えたマルチエージェントシステム
    
-   [GitHub Copilot Atlas](https://github.com/bigguy345/Github-Copilot-Atlas) - 計画担当の「Prometheus」、調査担当の「Oracle」、実装担当の「Sisyphus」、コードベースの迅速な発見担当の「Explorer」といった専門エージェントを備えた拡張オーケストレーションシステム
    

### Claude Agent (プレビュー)

今回のリリースでは、プレビュー版として Claude Agent のサポートを導入しました。これにより、GitHub Copilot サブスクリプションに含まれる Claude モデルを使用して、タスクを Claude Agent SDK に委任できるようになります。

![セッションターゲットピッカーで、[Local]、[Background]、[Cloud] の横に Claude Agent が表示されているスクリーンショット。](/assets/updates/1_109/claude-agent.png)

この統合機能は、Anthropic による公式の Claude Agent ハーネスを使用しています。つまり、他の Claude Agent 実装と同じプロンプト、ツール、および全体的なアーキテクチャを共有しています。Claude Agent SDK の詳細については、[Anthropic のドキュメント](https://platform.claude.com/docs/en/agent-sdk/overview) をご覧ください。

この統合機能は現在も開発中であり、今後数ヶ月の間にさらなる機能や改善を追加する予定です。それまでの間、VS CodeでのClaude Agentの活用方法や、今後実装してほしい機能について、ぜひフィードバックをお寄せください。[GitHub](https://github.com/microsoft/vscode)で遠慮なくフィードバックをお寄せください！

### Anthropicモデル

**設定**: github.copilot.chat.anthropic.thinking.budgetTokens VS Codeで開く VS Codeで開く Insiders , github.copilot.chat.anthropic.toolSearchTool.enabled VS Codeで開く VS Code Insidersで開く , github.copilot.chat.anthropic.contextEditing.enabled VS Codeで開く VS Code Insidersで開く

VS CodeにおけるAnthropicモデルのサポートについて、いくつかの改善を行いました：

-   **思考プロセスを織り交ぜたMessages API**：Anthropicモデルは現在、[Messages API](https://docs.anthropic.com/en/api/messages) を使用するようになりました。これには思考のインターリーブ機能が含まれており、これにより Claude はツール呼び出しの合間に推論を行うことが可能になり、複雑な多段階タスクにおいて、より思慮深く文脈に沿った応答を提供できるようになります。思考の予算は、github.copilot.chat.anthropic.thinking.budgetTokens (VS Code で開く | VS Code で開く | Insiders) 設定で調整できます。また、`0` に設定することで、拡張思考機能を完全に無効にすることも可能です。
 
-   **ツール検索ツール**: [ツール検索ツール](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool)を有効化し、利用可能なツールの幅広いプールから、タスクに最も関連性の高いツールをClaudeが発見・選択できるようになりました。この機能は、github.copilot.chat.anthropic.toolSearchTool.有効化 VS Codeで開く VS Codeで開く Insiders設定。
 
-   **コンテキスト編集（実験的機能）**: 長い会話をより効率的に管理できるよう、[コンテキスト編集](https://platform.claude.com/docs/en/build-with-claude/context-editing)のサポートを追加しました。この機能は、前のターンからのツール検索結果や思考トークンをクリアし、要約を先送りしてチャットセッション内のコンテキストをより多く維持するのに役立ちます。 github.copilot.chat.anthropic.contextEditing.enabled を有効にして、ぜひお試しください。
    

### MCP Apps のサポート

今回のリリースで、VS Code は [MCP Apps](https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/) のサポートを追加しました。MCP Apps を使用すると、サーバーはクライアント上でリッチでインタラクティブな UI を表示できるようになります。

アプリは、サーバーがアプリを返すと自動的に表示されます。もしあなたがMCPサーバーの開発者の方は、以下のリソースを参照してMCPアプリについて詳しく学ぶことができます：

-   [MCPアプリ デモリポジトリ](https://github.com/digitarald/mcp-apps-playground)
-   [MCPアプリ SDK とサンプル](https://github.com/modelcontextprotocol/ext-apps/)
-   [VS Code MCP ドキュメント](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)
-   [MCP サーバー開発ガイド](https://code.visualstudio.com/docs/copilot/guides/mcp-developer-guide)

![MCPアプリによってレンダリングされたインタラクティブなフレームグラフのスクリーンショット。](/assets/updates/1_109/mcp-apps-flame-graph.png)

### MCP パッケージのカスタム レジストリ ベース URL のサポート

VS Code は、MCP サーバーのマニフェスト ファイルにおける `registryBaseUrl` プロパティをサポートするようになりました。これにより、組織は、内部の Azure DevOps フィードやカスタム PyPI リポジトリなどのプライベートまたは代替パッケージ レジストリから MCP サーバーをデプロイできるようになります。

## エージェントの最適化

よりスマートなコンテキスト、より高速な検索、より優れた検索結果。Copilot Memory により、エージェントはセッションを超えて重要な情報を記憶します。外部インデックス機能により、 GitHub以外のワークスペースでも高速なセマンティック検索を実現します。また、エージェントはユーザーの許可を得て、必要に応じてワークスペース外のファイルを読み込むことができるようになりました。

### Copilot Memory (プレビュー)

**設定**: github.copilot.chat.copilotMemory.enabled VS Codeで開く VS Code Insidersで開く

AIに対して同じコンテキストを繰り返し提供している場合は、[Copilot Memory](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory) を使用して、セッションをまたいで重要な情報を保存・呼び出すことができます。

新しいメモリツールにより、チャットから直接 Copilot Memory にアクセスして更新できるようになりました。これにより、エージェントは保存されたメモリから関連するコンテキストを取得し、作業中に得た新しい知見を保存できるようになります。memory ツールを有効にするには、github.copilot.chat.copilotMemory.enabled を `true` に設定してください。

memory ツールは、特定の情報をメモリとして保存すべきタイミング（「「不明な場合は常に確認の質問をする」など）や、回答の参考にするためにどの記憶を呼び出すべきかを判断します。

![チャット内のメモリツールを示すスクリーンショット。保存された記憶のリストと、「不明な場合は常に確認の質問をする」というリクエストが表示されています。](/assets/updates/1_109/copilot-memory-tool.png)

すべての記憶は、[GitHubのCopilot設定](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory)から確認および管理できます。

### GitHub 以外のワークスペースに対する外部インデックス作成 (プレビュー)

**設定**: github.copilot.chat.advanced.workspace.codeSearchExternalIngest.enabled VS Code で開く VS Code Insiders で開く

GitHubでホストされていないワークスペースでも、エージェントを使用する際のコード検索を高速化するために、リモートでインデックスを作成できるようになりました。GitHub以外のワークスペースで `#codebase` を使用すると、VS Codeはコードベースのインデックスを構築し、GitHubでホストされているリポジトリと同様の強力なコード検索機能を提供する、高速なセマンティック検索を可能にします。

インデックスは最初のリクエスト時に構築され、リポジトリのサイズやネットワーク接続状況によっては数分かかる場合があります。以降のリクエストではキャッシュされたインデックスが使用されるため、処理は大幅に高速化されます。ファイルを修正して保存すると、インデックスは自動的に更新されます。

今後数週間かけて、外部インデックス機能を段階的に展開していきます。なお、GitHub上でホストされているワークスペースはすでにリモートインデックスに対応しており、初回リクエスト時にインデックスを構築するための負荷の高い呼び出しは不要です。

### ワークスペース外のファイルの読み取り

エージェントは、ユーザーの許可を得て、現在のワークスペース外のファイルを読み取ったり、ディレクトリ一覧を表示したりできるようになりました。以前は、 アクセス試行は自動的に拒否されていました。現在、エージェントが外部のファイルやフォルダにアクセスする必要がある場合、VS Codeはリクエストを許可するか拒否するかを尋ねるプロンプトを表示します。

また、同じフォルダ内での今後の読み取り時にプロンプトが繰り返し表示されるのを避けるため、セッション全体に対してアクセスを許可することも可能です。

![ワークスペース外のファイルへの読み取りアクセスを許可または拒否するようユーザーに尋ねるプロンプトを示すスクリーンショット。](/assets/updates/1_109/agent-external-file-access.png)

### パフォーマンスの改善

今回のリリースでは、数多くのパフォーマンス改善を行いました:

-   **大規模なチャット**: 長いチャット履歴の表示やスクロールが、よりスムーズになりました。また、履歴の保存方法を最適化し、全体的な信頼性を向上させました。
    
-   **依存関係のあるタスクの並列処理**: エージェント経由でタスクを実行する際、依存関係のあるタスクが順次処理されるのではなく、並列で処理されるようになりました。これにより、複数の独立したビルドステップを持つプロジェクトのビルド時間が大幅に短縮されます。違いを確認するには、[`microsoft/vscode` リポジトリ](https://github.com/microsoft/vscode)をご覧ください！
    

## エージェントのセキュリティと信頼性

安心してエージェントコマンドを実行できます。新しいターミナルサンドボックス機能により、エージェントが実行するコマンドのファイルおよびネットワークアクセスが制限されます。また、自動承認ルールにより安全な操作の確認が省略され、改善された表示機能によって何が実行されているか、その理由が正確にわかるため、常に制御を保持できます。

### ターミナルサンドボックス (実験的機能)

**設定**: chat.tools.terminal.sandbox.enabled VS Codeで開く VS Code Insidersで開く , chat.tools.terminal.sandbox.linuxFileSystem VS Codeで開く VS Code Insidersで開く , chat.tools.terminal.sandbox.macFileSystem VS Codeで開く VS Code Insidersで開く , chat.tools.terminal.sandbox.network VS Codeで開く Code で開く VS Code Insiders で開く

エージェントは、ユーザーのアカウントと同じ権限を持っています。エージェントによって実行されるターミナルコマンドに関連するリスクを軽減するため、実験的なターミナルサンドボックス機能を導入しました。ターミナルサンドボックスは、ファイルシステムへのアクセスをワークスペースフォルダーのみに制限し、ネットワークアクセスを信頼できるドメインのみに制限することも可能です。

> **注**: ターミナルサンドボックス機能は現在、macOS および Linux でのみサポートされています。Windows では、サンドボックス設定は有効になりません。

ターミナルサンドボックス機能を有効にするには、chat.tools.terminal.sandbox.enabled VS Code で開く VS Code Insiders で開く 設定を `true` に設定してください。

サンドボックスが有効な場合：

-   コマンドはデフォルトで現在の作業ディレクトリへの読み取りおよび書き込みアクセス権を持ちます
-   コマンドは制御された環境で動作するため、標準の確認ダイアログが表示されずに実行されます
-   デフォルトでは、すべてのドメインに対するネットワークアクセスがブロックされます

ドキュメントで [ターミナルサンドボックス](https://code.visualstudio.com/docs/copilot/chat/chat-tools#_sandbox-terminal-commands-experimental) の設定について詳しくご確認ください。

### ターミナルツールのライフサイクルに関する改善

今回のリリースでは、バックグラウンドでのターミナルの動作に関する問題を解決するために、いくつかの変更が行われました:

-   ターミナルツールの呼び出しを手動でバックグラウンドに送ることが可能になり、エージェントが他の作業を継続できるようになりました。
 
 ![エージェントがそのコマンドをバックグラウンドで実行したまま作業を継続できるようにする、再生アイコン付きのボタンを示すスクリーンショット。](/assets/updates/1_109/terminal-tool-continue-in-background.png)
    
-   ターミナルツールを呼び出す際、エージェントは新しい `timeout` プロパティを指定する必要があります（0 はタイムアウトなしを意味します）。これにより、予期せぬ事態が発生した際に、エージェントに制御を戻すための追加の手段が提供されます。
 
-   新しい `awaitTerminal` ツールを使用すると、エージェントはバックグラウンドのターミナルが完了するのを待機できるようになります。これにも `timeout` プロパティが必要です。モデルがこのツールを活用している場合、以前はバックグラウンドコマンドの完了を待つために使用されていた `echo "successful"` や `sleep n` の呼び出しが不要になることが期待されます。
 
-   新しい `killTerminal` ツールにより、エージェントはバックグラウンドターミナルを強制終了して、自身の後始末を行うことができます。 これは、エージェントが古い実行中のサーバーコマンドを停止させたい場合など、同じ目的を達成するために遠回りの方法でプロセスを強制終了させてしまうことを防ぐことを目的としています。
 
-   アクティブな非バックグラウンドターミナルは常に現在の作業ディレクトリを維持するのに対し、バックグラウンドターミナルは常にワークスペースディレクトリから開始されるため、現在の作業ディレクトリの動作に関するいくつかの指示が変更されました。
    

### ターミナルの自動承認

**設定**: chat.tools.terminal.enableAutoApprove VS Codeで開く VS Codeで開く Insiders この設定は組織レベルで管理されます。変更するには管理者にお問い合わせください。ORG

ターミナルの自動承認が有効になっている場合（ chat.tools.terminal.enableAutoApprove VS Codeで開く VS Codeで開く Insiders この設定は組織レベルで管理されます。変更するには管理者にお問い合わせください。ORG）、以下のコマンドはデフォルトで自動的に承認されるようになりました：

-   `Set-Location`
-   `dir`
-   `od`
-   `xxd` - フラグと単一の入力ファイル
-   `docker` - すべての安全なサブコマンド
-   `npm`, `yarn`, `pnpm` - すべての安全なサブコマンド

## ターミナルの機能強化

よりスムーズで高性能なターミナル。チャット内のターミナルコマンドには、構文の強調表示や作業ディレクトリなど、より詳細な情報が表示されるようになりました。Kitty キーボードプロトコルのサポートにより、ターミナルアプリでのキー操作が改善され、新しいオプションにより、スティッキースクロールのカスタマイズや、制限付きワークスペースでのターミナル使用が可能になりました。

### スティッキースクロールの選択的無視

**設定**: terminal.integrated.stickyScroll.ignoredCommands VS Codeで開く VS Code Insidersで開く

以前は、`clear`のようなコマンドなど、スティッキースクロールが望ましくない場合でも、一部のコマンドがスティッキースクロールに表示されることがありました。今回のリリースからは、無視するコマンドをカスタマイズできるようになり、`copilot`、`claude`、 `codex`、`gemini` などの一般的なエージェント型 CLI（通常のバッファで実行されるもの）が既に含まれています。

### winpty サポートの廃止

winpty のサポートが [node-pty](https://github.com/microsoft/node-pty）から削除されました。これにより、Windows 10 バージョン 1809（2018年秋）以前の Windows バージョンでは、ターミナルが動作しなくなります。[ConPTY](https://devblogs.microsoft.com/commandline/windows-command-line-introducing-the-windows-pseudo-console-conpty/) がターミナル用の最新のメカニズムであるため、Windows 10 の新しいバージョンへのアップグレード、または Windows 11 への移行をお勧めします。 `"terminal.integrated.windowsUseConptyDll": true` を設定することでターミナルを動作させられる可能性がありますが、これは現在実験的な機能である点にご注意ください。

### 制限付きワークスペースでのターミナル起動を許可する

**設定**: terminal.integrated.allowInUntrustedWorkspace VS Codeで開く VS Code Insidersで開く

ワークスペースの信頼が許可されていない場合、`.env`ファイル経由での変数設定などによりシェルがコードを実行する可能性のある攻撃からユーザーを保護するため、ターミナルの起動はブロックされます。セキュリティ意識の高いユーザーは、このような事態を防ぐためにシェルを設定することが多いため、制限されたワークスペースでもターミナルを開けるようにする新しいオプトイン設定が追加されました。

### 新しい VT 機能

**設定**: terminal.integrated.enableKittyKeyboardProtocol VS Codeで開く VS Codeで開く Insiders

[Kittyキーボードプロトコル](https://sw.kovidgoyal.net/kitty/keyboard-protocol/) が実装され、今回のリリースで安定版へ展開されます。この機能は、従来のキーストロークのエンコード方法に関する多くの制限を解消することを目的としており、具体的には以下の通りです:

-   Alt や Ctrl だけでなく、より多くの修飾キーや複数の修飾キーをターミナルでエンコードできるようにします
-   キーの押下および離しイベントに加え、長押し（キーを押し続ける）イベントも処理します
-   通常は `ESC` （`\x1b`）シーケンスを送信しますが、これはすべてのエスケープシーケンスの開始文字でもあるため、曖昧さを解消します。

これを利用するには、ターミナルで実行されるプログラムがこのプロトコルをサポートし、実行時に有効化をリクエストする必要があります。すぐに実感できる大きな利点として、`/terminalSetup`のようなコマンドを実行しなくても、一部のエージェンティックなCLIでShift+Enterが機能するようになる点が挙げられます。

**設定**: terminal.integrated.enableWin32InputMode VS Codeで開く VS Code Insiders (実験的)

上記と同様に、[Win32入力モード](https://github.com/microsoft/vscode/issues/286896)の実験版も存在します。これは同様の機能を実現しますが、Windowsおよびその疑似ターミナルバックエンドであるConPTY向けに特別に調整されています。このリリースでは無効のままとなります。問題が発生した場合はお知らせください。

その他:

-   [太字および淡字の SGR プロパティの独立制御](https://sw.kovidgoyal.net/kitty/misc-protocol/#independent-control-of-bold-and-faint-sgr-properties) (`SGR 222`, `SGR 221`)。このシーケンスはめったに使われませんが、曖昧さがなく、使用すると出力が破損する可能性があるため、サポートすることにしました。

## コーディングとエディタ

積み重ねれば大きな効果となる細かな改良。ダブルクリックで括弧や文字列の内容を選択可能に。括弧のマッチング色をカスタマイズ。スニペットを特定のファイルに限定。TypeScriptのshebangを正しく検出。こうした重点的な改善により、日々の編集作業がほんの少しだけスムーズになります。

### 対応する括弧のフォアグラウンド色

新しいカラーテーマトークン `editorBracketMatch.foreground` を使用して、対応する括弧のテキスト色をカスタマイズできるようになりました。以前は、背景色（`editorBracketMatch.background`）と枠線色（`editorBracketMatch.border`）のみをカスタマイズできました。この新しいカラートークンを使えば、括弧文字自体の色を変更することで、対応する括弧をより明確に目立たせることができます。

この設定のデフォルトは `null` であり、括弧は通常のテキスト色を継承します。`settings.json` の `workbench.colorCustomizations` セクションで設定してください：

```
{
  "workbench.colorCustomizations": {
    "editorBracketMatch.foreground": "#ff0000"
  }
}
```

### ダブルクリックで括弧と文字列の内容を選択

開括弧の直後、または閉じ括弧の直前でダブルクリックすると、その中のすべてのコンテンツを選択できるようになりました。これは文字列でも機能します。開引用符の直後、または閉じ引用符の直前でダブルクリックすると、文字列の内容を選択できます。これにより、カーソルを手動で移動させることなく、括弧や文字列内のコンテンツをすばやく選択、コピー、または置換できます。

### TypeScript のリネーム候補

TypeScript の名前変更候補は、既存宣言の上書き入力時にも機能するようになりました。以下の動画では、ユーザーは名前変更リファクタリングを使用せずに新しい識別子名を入力することで、宣言 `let index = 0;` を `let chunkIndex = 0;` に変更しています。次の編集候補では、Shift+Tab を使用して `index` を `chunkIndex` に変更する提案が引き続き表示されます。

> **注**: この機能は現時点では TypeScript でのみ利用可能です。

### ゴーストテキストの視認性の向上

インライン候補（ゴーストテキスト） では、3文字未満の連続した非空白文字からなる短い候補を表示する際、点線の下線を表示するようになりました。この視覚的なインジケーターにより、エディタ上でゴーストテキストと実際のコードを区別しやすくなります。これは、`)` のような既存のコードと混同されやすい単一の文字が候補として表示される場合に特に役立ちます。

![短い候補に対して点線の下線が表示されたゴーストテキストを示すスクリーンショット。](/assets/updates/1_109/ghost-text-underline.png)

### スニペットのファイルパターン

`include` および `exclude` [グロブパターン](https://code.visualstudio.com/docs/editor/glob-patterns) を使用して、スニペットが表示されるファイルを制御できるようになりました。これを使用すると、スニペットを特定のファイルやプロジェクトのコンテキストに限定し、関係のないファイルに表示されるのを防ぐことができます。

たとえば、Travis CIの設定ファイルにのみ表示されるスニペットを作成するには：

```
{
  "Travis CI node_js": {
    "include": ".travis.yml",
    "prefix": "node",
    "body": ["language: node_js", "node_js:", "  - $1"],
    "description": "Travis CI 用の Node.js 設定"
  }
}
```

パターンにパス区切り文字が含まれている場合は絶対ファイルパスと照合され、 そうでない場合はファイル名のみと一致します。`include` と `exclude` は、単一のパターンまたはパターンの配列を指定できます。`exclude` を使用すると、スニペットの言語スコープに一致する場合でも、特定のファイルにスニペットが表示されないようにできます。

### シェバン言語検出の改善

VS Code では、特に追加のフラグ付きで `/usr/bin/env` を使用するファイルに対して、シェバン言語検出のサポートが改善されました。シェバンが`#!/usr/bin/env -S deno -A` のようなシェバングを持つファイルは、正しく TypeScript として検出されるようになりました。これにより、`.ts` ファイル拡張子がない場合でも、Deno や Bun などのランタイムを使用して TypeScript で記述されたスクリプトに対して、より優れた言語サポートが可能になります。

## ワークベンチと生産性

ウィンドウを切り替えることなく、テスト、デバッグ、デプロイが可能です。新しい統合ブラウザにより、DevTools や認証機能も完備された状態で、ローカルホスト上のサイトを VS Code 内で直接プレビューおよび検査できるようになりました。

### 統合ブラウザ (プレビュー)

**設定**: workbench.browser.openLocalhostLinks VS Code で開く VS Code で開く Insiders , simpleBrowser.useIntegratedBrowser VS Code で開く VS Code で開く Insiders , livePreview.useIntegratedBrowser VS Code で開く VS Code で開く Insiders

VS Code には以前から、開発中の localhost サイトなどの基本的な Web ページを開くための Simple Browser が搭載されていました。しかし、iframeに依存していたため、いくつかの制限がありました。具体的には、Webサイトの認証が不可能であり、Google、GitHub、Stack Overflowなどの一般的なサイトを開くことができませんでした。

今回のリリースでは、これらの制限を克服する新しい統合ブラウザがVS Codeデスクトップ版に導入されました。通常のブラウザと同様に、Webサイトへのサインインや任意のページの閲覧が可能になりました。

主な機能は以下の通りです：

-   **永続的なデータ保存**（保存範囲はグローバル、ワークスペース、またはメモリ内/一時的から選択可能）
-   **要素をチャットに追加**：要素を選択してエージェントに送信し、サポートを依頼できます
-   **フル機能の DevTools**
-   **キーボードショートカット**
-   **ページ内検索**

その他にも...

試してみるには、**Browser: Open Integrated Browser** コマンドを実行してください。統合ブラウザをより幅広く利用したい場合は、workbench.browser.openLocalhostLinks Open in VS Code Open in VS Code Insiders を有効にすると、localhost リンクを新しいブラウザで直接開くことができます （上記参照）。

また、**simpleBrowser.useIntegratedBrowser** 設定を使用して Simple Browser を統合ブラウザに置き換えるように設定したり、**livePreview.useIntegratedBrowser** 設定を使用して Live Preview 拡張機能で統合ブラウザを利用するように設定することもできます。

### ワークスペースの開く際にエディタを復元する

**設定**: workbench.editor.restoreEditors VS Codeで開く VS Code Insidersで開く

以前は、VS Codeはワークスペースを再開する際に、常に開いていたすべてのエディタを復元していました。新しい workbench.editor.restoreEditors VS Codeで開く VS Code Insidersで開く 設定を使用すると、ワークスペースを開く際にエディタを復元するかどうかを制御できます。この設定が無効になっている場合、 VS Codeは前回のセッションのタブを再開するのではなく、空のエディタ領域から起動します。

> **注**: データ損失を防ぐため、変更済み（未保存）のエディタは、この設定にかかわらず常に復元されます。

### 詳細設定

**設定**: workbench.settings.alwaysShowAdvancedSettings VS Codeで開く VS Code Insiders

毎回 `@tag:advanced` フィルターを適用しなくても、設定エディタに詳細設定を常に表示するように VS Code を設定できるようになりました。workbench.settings.alwaysShowAdvancedSettings VS Codeで開く VS Code Insiders 設定を有効にすると、詳細設定がデフォルトで表示されるようになります。

### ドラッグ＆ドロップによるプロファイルのインポート

`.code-profile` ファイルを VS Code ウィンドウにドラッグ＆ドロップすることで、設定プロファイルをインポートできるようになりました。これは `.code-workspace` ファイルをドラッグ＆ドロップする場合と同様の操作感を提供し、プロファイルの共有や適用がより簡単になります。

### 出力チャネルフィルターの機能強化

出力パネルのフィルターで、否定パターンおよび複数のフィルターがサポートされるようになりました。`!` を使用して出力から特定の行を除外できます。例えば、`!debug` とすると、「debug」を含むすべての行が非表示になります。また、カンマで複数のパターンを組み合わせることで、より詳細なフィルタリングが可能です。

### ソースによる問題のフィルタリング

「問題」パネルで、診断情報のソースまたは所有者によるフィルタリングが可能になりました。これは、スペルチェッカーやリンターなど他のソースからの診断情報を一時的に非表示にし、ビルドエラーなどの特定の種類の問題に集中したい場合に便利です。例えば、フィルタボックスに `source:ts` と入力すると TypeScript の診断情報のみを表示し、`!source:cSpell` を使用するとスペルチェッカーの警告をすべて非表示にできます。

### 拡張機能エディターに設定のデフォルト値を表示

拡張機能エディターの [機能の貢献] タブに、拡張機能によって提供される設定のデフォルト値が表示されるようになりました。これにより、言語固有のエディター設定など、拡張機能が提供するデフォルト設定を簡単に確認できるようになります。

### Git ワークツリーに追加のファイルを含める (実験的)

**設定**: git.worktreeIncludeFiles VS Code で開く VS Code Insiders で開く

バックグラウンドエージェントを使用する場合、変更を分離するために Git ワークツリーが作成されます。新しい設定 `git.worktreeIncludeFiles` を使用すると、ワークツリー作成後にワークツリーフォルダーにコピーされる追加のファイルやグロブパターンを指定できます。これは、プロジェクトが Git で無視され、Git リポジトリに含まれていないファイル（例：ローカルの設定ファイルやビルドアーティファクト）に依存している場合に役立ちます。

### SCM ビューの「すべて折りたたむ」アクション

ソースコントロール ビューの「変更」セクションでファイルをツリー表示している際、ルートノードのコンテキストメニューにある **「すべて折りたたむ」** アクションを使用することで、展開されているすべてのディレクトリ構造を一度に折りたたむことができるようになりました。これにより、大量の変更内容をより簡単にナビゲートできるようになります。

### Git: 削除コマンド

新しい **Git: 削除** コマンドを使用すると、コマンド パレットから直接、現在開いているファイルに対して `git rm` を実行できます。これにより、ファイルが作業ディレクトリと Git インデックスの両方から削除され、エディタが閉じられます。`git rm` は、未コミットの変更がないコミット済みのファイルに対してのみ成功するため、通常のファイル削除よりも安全な代替手段となります。

### ブレンエディタの装飾ホバーを無効化

**設定**: git.blame.editorDecoration.hoverEnabled VS Codeで開く VS Code Insidersで開く

エディタ内のインラインGitブレン装飾にマウスを合わせると表示されるホバーポップアップを無効にできるようになりました。 `git.blame.editorDecoration.hoverEnabled` を `false` に設定すると、インラインの blame アノテーションは表示されたまま、ホバーポップアップの表示を防止できます。これは、ポップアップが邪魔に感じるものの、blame 情報を一目で確認したい場合に便利です。

### 自動タスクはデフォルトで無効化

**設定**: task.allowAutomaticTasks Open in VS Code Open in VS Code Insiders

セキュリティを強化し、ワークスペースを開いた際に `tasks.json` で定義されたタスクが意図せず実行されるのを防ぐため、 `task.allowAutomaticTasks`（VS Code で開く / VS Code Insiders で開く）設定のデフォルト値が、`on` から `off` に変更されました。

以前の動作に戻すには、ユーザー設定で `task.allowAutomaticTasks`（VS Code で開く / VS Code Insiders で開く）を `on` に設定してください。

### アクセシビリティの改善

#### アクセシブルビューでのチャット応答および思考内容の動的ストリーミング

アクセシブルビューでは、AI モデルが生成するチャット応答の内容が動的にストリーミングされるようになりました。スクリーンリーダーをご利用の方は、手動でアクセシブルビューを更新したり再表示したりすることなく、応答内容をリアルタイムで追うことができます。これには思考内容も含まれるようになり、スクリーンリーダーでの体験が視覚的な表示と一致するようになりました。

### アクセシブルビューでのカーソル位置の安定化

アクセシブルビューでコンテンツが更新される際 （チャット応答のストリーミング中やターミナル使用時など）、カーソル位置が安定して保持されるようになりました。これにより、スクリーンリーダーのナビゲーションを妨げる可能性のあるフォーカスの移動を防ぎ、新しいコンテンツが追加されても自分のペースで読み進めることができます。

### 新しいチャットセッションに対する ARIA アラート

新しいチャットセッションが作成されると、スクリーンリーダーユーザーは ARIA アラート通知を受け取り、新しいチャットのコンテキストを知ることができます。

### アクセシブルビューにおけるツール呼び出し情報の改善

アクセシブルビューのツールコールには、より詳細な情報が含まれるようになりました。これにより、スクリーンリーダーのユーザーは、AIエージェントによってどのようなアクションが実行されているかをより容易に把握できるようになります。

#### カーソル位置の読み上げコマンド

スクリーンリーダーのユーザーは、新しい `Announce Cursor Position` コマンド（Ctrl/Cmd+Alt+Shift+G）を使用して、現在の行と列の位置にすばやくアクセスし、読み上げることができます。

### エンタープライズ機能の改善

ドキュメントで [VS Codeのエンタープライズ機能](https://code.visualstudio.com/docs/setup/enterprise) について詳しくご確認ください。

#### GitHub 組織ポリシーの適用改善

このリリースでは、GitHub 組織ポリシーの適用信頼性が向上しました。 複数のアカウントにサインインしている場合、優先される GitHub Copilot アカウントに基づいてポリシーが正しく適用されるようになりました。さらに、起動時のネットワーク一時的な利用不可時でも組織ポリシーが一貫して適用されるようになり、接続状態にかかわらず管理された制限が有効に保たれるようになりました。

## 拡張機能と API

拡張機能開発者向けの新しい構成要素が追加されました。完成した Quick Input ボタン API により、入力の配置やトグル状態をより細かく制御できるようになりました。提案された API により、チャットモデルプロバイダーは構成スキーマを宣言できるようになり、新しいチャット リソースプロバイダーにより、拡張機能から動的なプロンプト、エージェント、スキルを提供できるようになりました。

### GitHub Pull Requests

プルリクエストやイシューの作成、管理、編集を可能にする [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) 拡張機能の開発が進みました。

この拡張機能の [0.128.0 リリース変更履歴](https://github.com/microsoft/vscode-pull-request-github/blob/main/CHANGELOG.md#01280) を確認して、リリース内容の詳細をご確認ください。

### クイック入力ボタンの位置指定 API の完成

`QuickPick` または `InputBox` で `buttons` プロパティを設定する際、新しい `location` プロパティを使用して各ボタンの位置を指定できるようになりました。これにより、ボタンを以下のいずれかの場所に配置できます：

-   `Title`: クイック入力の最上部のタイトル領域（指定がない場合のデフォルト）
-   `Inline`: 入力ボックスの右側に表示
-   `Input`: 入力ボックスの右側内部に表示

### クイック入力ボタンのトグル API の完成

`QuickInputButton` の `toggle` プロパティを `{ checked: boolean }` に設定することで、クイック入力内にトグルボタンを作成できるようになりました。トグルボタンはオン/オフの状態を維持し、新しい `checked` プロパティを使用してその状態を読み取りや更新が可能です。これは、機能の有効化や無効化、フィルターの適用、モードの切り替えなど、2つの状態を持つアクションに役立ちます。

### 提案中の API

### チャットモデルプロバイダーの設定

チャットモデルプロバイダー拡張機能が、`languageModelChatProviders` コントリビューションポイントを通じて設定要件を宣言できるようにする、新しい提案中の API を導入しました。この API を使用すると、VS Code はユーザーが設定（API キーやモデル設定など）を入力するための組み込み UI を提供し、この設定を API 経由で拡張機能に渡します。

このアプローチは、将来のリリースにおいて既存の `managementCommand` プロパティに取って代わる予定です。これにより、拡張機能はコマンドを通じて独自の設定 UI を実装する代わりに、設定スキーマを宣言するだけで、ユーザーエクスペリエンスの処理を VS Code に任せることができるようになります。

VS Code は、`string`、`number`、`boolean` などのプリミティブ型に対してネイティブな UI コントロールを提供します。`array` や `object` のような複合型の場合、VS Code は対応する設定ファイルを開き、完全なスキーマ検証と IntelliSense サポートを備えた JSON エディタでユーザーが直接設定を入力できるようにします。設定操作の詳細については、[Language Models エディタ](#_language-models-editor) を参照してください。

#### 簡単な設定

APIキーのみが必要なプロバイダーの場合、設定は簡単です：

```
{
  "contributes": {
    "languageModelChatProviders": [
 {
 "vendor": "my-provider",
 "displayName": "My Provider",
 "configuration": {
 "properties": {
 "apiKey": {
 "type": "string",
 "secret": true,
 "description": "My Provider の API キー",
 "title": "API キー"
 }
 },
 "required": ["apiKey"]
 }
 }
    ]
  }
}
```

#### カスタムモデルを使用した高度な設定

カスタムエンドポイントを持つユーザー定義モデルをサポートするプロバイダーの場合、より複雑なスキーマを定義できます:

```
{
  "contributes": {
    "languageModelChatProviders": [
 {
 "vendor": "my-provider",
 "displayName": "My Provider",
 "configuration": {
 "properties": {
 "apiKey": {
 "type": "string",
 "secret": true,
 "description": "認証用のAPIキー",
 "title": "APIキー"
            },
 "models": {
 "type": "array",
 "items": {
 "type": "object",
 "properties": {
 "id": {
 "type": "string",
 "description": "モデルの一意の識別子"
 },
 "name": {
 "type": "string",
 "description": "モデルの表示名"
 },
                  "url": {
 "type": "string",
 "description": "モデルのエンドポイントURL"
 },
 "maxInputTokens": {
 "type": "number",
 "description": "モデルがサポートする最大入力トークン数"
 },
 "maxOutputTokens": {
 "type": "number",
 "description": "モデルがサポートする最大出力トークン数"
},
"toolCalling": {
"type": "boolean",
"description": "モデルがツール呼び出しをサポートしているか"
 },
 "vision": {
 "type": "boolean",
 "description": "モデルがビジョン機能をサポートしているか"
 }
 },
 "required": ["id", "name", "url", "maxInputTokens", "maxOutputTokens"]
              }
 }
 },
 "required": ["apiKey"]
 }
 }
    ]
  }
}
```

言語モデルチャットプロバイダーを登録する際、拡張機能はユーザーから提供された設定を受け取ります:

```
vscode.lm.registerLanguageModelChatProvider('my-provider', {
  provideLanguageModelResponse: (
    messages,
    options,
    extensionToken,
    configuration,
    token
  ) => {
    // configuration には、ユーザーが VS Code の UI に入力した値が含まれています
    const apiKey = configuration.apiKey;
    const models = configuration.models;
    // configuration を使用して API 呼び出しを行う...
  }
});
```

構成スキーマの `secret` プロパティは、フィールドを安全に保存し、UI 上でマスクする必要があることを示しています。VS Code は、これらのフィールドの安全な保存を自動的に処理します。

この API はまだ提案段階です。提案内容は以下で確認できます: [vscode.proposed.lmConfiguration.d.ts](https://github.com/microsoft/vscode/blob/main/src/vscode-dts/vscode.proposed.lmConfiguration.d.ts)。

### チャットプロンプトファイル API

拡張機能が動的なチャットリソースを提供できるようにする、新しい提案中の API を導入しました。この API を使用すると、拡張機能はプロンプトファイル、カスタムエージェント、指示、およびスキルをプログラムで提供でき、これらはユーザー定義のファイルと並んで表示されます。これにより、プロジェクトのコンテキストに基づいてプロンプトを生成したり、外部ソースからリソースを取得したりといったシナリオが可能になります。

この API では、`ChatResource` インターフェースと、各リソースタイプ用のプロバイダー登録メソッドが導入されています：

```
// スキル用のプロバイダーを登録
vscode.chat.registerSkillProvider({
  onDidChangeSkills: onDidChangeEvent,
  provideSkills(context, token): ChatResource[] {
    return [{ uri: vscode.Uri.parse('my-extension:/skills/debugging/SKILL.md') }];
  }
});

// 他のリソースタイプについても同様のメソッドが存在します：
// - .agent.md ファイル用の registerCustomAgentProvider()
// - .instructions.md ファイル用の registerInstructionsProvider()
// - .prompt.md ファイル用の registerPromptFileProvider()（.prompt.md ファイル用）
```

この API はまだ提案段階です。提案内容は以下から確認できます：[vscode.proposed.chatPromptFiles.d.ts](https://github.com/microsoft/vscode/blob/main/src/vscode-dts/vscode.proposed.chatPromptFiles.d.ts)。

### チャットアイテムコントローラー API

[チャットセッションアイテム API](https://github.com/microsoft/vscode/blob/cffc62ce7dccbe06956514a88e7a52973c631b12/src/vscode-dts/vscode.proposed.chatSessionsProvider.d.ts#L6) の改良を続けています。この API により、拡張機能は VS Code の組み込みチャットセッションビューにアイテムを追加できるようになります。

今回のアップデートでは、従来のプロバイダーベースのモデルに代わる、新しいコントローラーベースのAPIを導入しました。このコントローラーAPIにより、拡張機能が変更内容をVS Codeにプッシュできるようになり、VS Codeが拡張機能から変更内容をプルする必要がなくなります。また、`ChatSessionItems`が管理対象オブジェクトとなるため、プロパティを更新するだけで変更内容を反映させることができます。

この API の使用方法を示す簡単な例を以下に示します：

```
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  // 一意の ID を持つ新しいコントローラーを作成
  const controller = vscode.chat.createChatSessionItemController(
    'myExtension.chatSessions',

    // リフレッシュ関数。これは、コントローラーが登録されたときや、
    // ユーザーがリフレッシュボタンを押したときに呼び出されます。
    async (token: vscode.CancellationToken) => {
 // バックエンドまたはストレージからセッションを取得します
 const sessions = await fetchSessionsFromBackend();

 // 管理対象のチャットセッションアイテムを作成します
 const items = sessions.map(session =>
        controller.createChatSessionItem(
 vscode.Uri.parse(`my-scheme://session/${session.id}`),
 session.title
 )
 );

 // `controller.items` を更新して、これらのアイテムを VS Code に通知します。これで
 // チャットセッション UI に表示されるようになります
 controller.items.replace(items);

 // チャットセッションアイテムはライブ状態です。つまり、プロパティを更新するだけで内容を変更できます
 setTimeout(() => {
 const currentTime = new Date().toLocaleTimeString();
        for (const item of controller.items) {
 item.label = `${item.label} - ${currentTime}`;
 }
 }, 10000);
    }
  );

  // チャットセッション項目のアーカイブ状態の変更を監視することもできます
  controller.onDidChangeChatSessionItemState(item => {
    console.log(`セッション ${item.label} がアーカイブされました: ${item.archived}`);
  });
}
```

### チャット出力レンダラー API の更新

チャット出力レンダラー API の開発を継続しています。この API を使用すると、拡張機能は WebView を利用して、チャット応答内にカスタムなインタラクティブコンテンツをレンダリングできます。

多数のバグ修正に加え、レンダラーを `Webview` を直接渡すだけでなく、`ChatOutputWebview` として渡すようになりました。これにより、拡張機能は WebView が破棄されたタイミングを監視できるようになり、関連するリソースをクリーンアップできるようになります 関連リソースをクリーンアップできるようになります。WebViewは、再び表示可能になった際にVS Codeによって再作成されます。

このAPIの使用方法の詳細については、[チャット出力レンダラーのサンプル拡張機能](https://githubcom/microsoft/vscode-extension-samples/tree/main/chat-output-renderer-sample) を参照してください。

### ポータブルモードの検出

新しい `env.isAppPortable` プロパティを使用することで、拡張機能は VS Code が [ポータブルモード](https://code.visualstudio.com/docs/editor/portable)。ポータブルモードは、`data` ディレクトリを含むフォルダーからアプリケーションが実行されている場合に有効になり、ホストシステムに痕跡を残さない自己完結型のインストールを可能にします。

```
if (vscode.env.isAppPortable) {
  // ポータブルモードで実行中 - それに応じて動作を調整する
}
```

この API はまだ提案段階です。提案の詳細はこちらをご覧ください：[vscode.proposed.envIsAppPortable.d.ts](https://github.com/microsoft/vscode/blob/main/src/vscode-dts/vscode.proposed.envIsAppPortable.d.ts)。

* * *

## エンジニアリング

### macOS用DMGイメージ

VS Codeでは、ネイティブなドラッグ＆ドロップによるインストール体験を提供するため、macOS用のDMGイメージを提供するようになりました。これらのイメージは、[VS Codeのウェブサイト](https://code.visualstudio.com/download)から、サポートされているすべてのアーキテクチャ向けに利用可能です。

![macOS DMGイメージがマウントされた状態を示すスクリーンショット。](/assets/updates/1_109/macos-dmg-installer.png)

### Windows 11 のコンテキストメニューへの統合

コンテキストメニュー対応版 VS Code をインストールすると、Windows 11 のエクスプローラーでファイルやフォルダーを右クリックした際に、最上位のコンテキストメニューに項目が追加されるようになりました。これにより、VS Code にアクセスするために `その他のオプションを表示` を選択する必要がなくなりました。ユーザー向けインストーラーとシステム向けインストーラーの両方で、この新しい項目がサポートされています。

![Windows 11 のコンテキストメニューに表示される VS Code を示すスクリーンショット。](/assets/updates/1_109/win11-context-menu.png)

### Windows 向けインストールレイアウトの再設計

アプリ内アップデートに関連する長年の信頼性問題を解決するため、Windows でのインストールレイアウトを再設計しました。特に、以前のバージョンではアトミックなファイル置換操作が行われていましたが、システムのシャットダウン、 ユーザーの操作、またはその他の予期せぬイベントによって中断されると失敗する可能性があり、VS Codeが正常に動作しなくなる状態になることがありました。新しい実装は[Chromiumのアップデートクライアント](https://github.com/microsoft/vscode/issues/249239)を参考にしており、バージョン管理されたパッケージパスを使用しています。

### macOSでの連続した更新の回避

以前の更新の適用がまだ保留中の状態で新しい更新が利用可能になった場合、VS Codeは以前の更新を無効化し、新しい更新の適用を続行します。 ユーザーにアプリケーションを2回再起動させることはなくなりました。

### Copilot 拡張機能の非推奨化

GitHub Copilot 拡張機能は非推奨となりました。すべての AI 機能は、GitHub Copilot Chat 拡張機能によって完全に提供されるようになりました。VS Code を更新すると、非推奨の Copilot 拡張機能は自動的にアンインストールされますが、Copilot Chat 拡張機能はインストールされたままとなり、Copilot の全機能を利用できます。

![非推奨となった 非推奨の Copilot 拡張機能と、有効な Copilot Chat 拡張機能を示したスクリーンショット。](/assets/updates/1_109/copilot-extension-deprecated.png)

### npm パッケージからの Codicons の利用

Codiconsは、VS Codeリポジトリに直接バンドルされるのではなく、`@vscode/codicons` npmパッケージを通じて利用されるようになり、ビルドプロセスの一部として組み込まれています。

## 主な修正点

-   [vscode#276558](https://github.com/microsoft/vscode/issues/276558) - `editor.hover.enabled` が `onModifierKeyPressed` に設定されている場合、修飾キーを押してもホバーが即座にトリガーされない問題を修正
-   [vscode#58814](https://github.com/microsoft/vscode/issues/58814) - ターミナルプロセスへのファイルディスクリプタのリーク

## 感謝

### 課題追跡

課題追跡への貢献者：

-   [@gjsjohnmurray (John Murray)](https://github.com/gjsjohnmurray)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD)
-   [@IllusionMH (Andrii Dieiev)](https://github.com/IllusionMH)
-   [@albertosantini (Alberto Santini)](https://github.com/albertosantini)

### プルリクエスト

`vscode`への貢献:

-   [@ChaseKnowlden](https://github.com/ChaseKnowlden): キーボード修飾キーにカーソルを合わせると即座に反応するように [PR #276582](https://github.com/microsoft/vscode/pull/276582)
-   [@dalisoft (Davlatjon Sh)](https://github.com/dalisoft): fix(typescript): `tsserver.useSyntaxServer.always` の説明 [PR #286476](https://github.com/microsoft/vscode/pull/286476)
-   [@hkleungai (Jimmy Leung)](https://github.com/hkleungai): vscode-dts: WebviewPanel.dispose() の typedoc を修正 [PR #289071](https://github.com/microsoft/vscode/pull/289071)
-   [@Infro (John Heilman)](https://github.com/Infro): ユーザーが言語を選択した場合、 実際に選択した言語が適用されるようにする。（Yaml vs yaml） [PR #288153](https://github.com/microsoft/vscode/pull/288153)
-   [@Ishiezz (Isha Singh)](https://github.com/Ishiezz): 修正：エンジンがサポートしていない場合、暗黙的なアクティベーションメッセージを提案しないようにする [PR #281302](https://github.com/microsoft/vscode/pull/281302)
-   [@KanishkRanjan (Kanishk Ranjan)](https://github.com/KanishkRanjan): 修正: 設定ツリーを安定化させ、起動時の処理も修正し、初期の拡張機能登録によるゴーストスクロールを防止。[PR #278931](https://github.com/microsoft/vscode/pull/278931)
-   [@kiofaw (kiofaw)](https://github.com/kiofaw): 修正: AsyncIterableObject を AsyncIterableProducer に置き換え [PR #288079](https://github.com/microsoft/vscode/pull/288079)
-   [@lucas-gomes-santana (Lucas Gomes Santana)](https://github.com/lucas-gomes-santana): 非ラテン文字スクリプトに対するスニペットの大文字小文字変換のサポートを改善 (修正: #286165) [PR #287150](https://github.com/microsoft/vscode/pull/287150)
-   [@newminkyung (minkyung)](https://github.com/newminkyung): 修正: スクリーンキャストモード - キーボードオーバーレイのタイムアウト [PR #238860](https://github.com/microsoft/vscode/pull/238860)
-   [@RedCMD (RedCMD)](https://github.com/RedCMD): 修正: VB `increaseIndentPattern` [PR #291176](https://github.com/microsoft/vscode/pull/291176)
-   [@SimonSiefke (Simon Siefke)](https://github.com/SimonSiefke)
    -   修正: フォルダ設定におけるメモリリーク [PR #279230](https://github.com/microsoft/vscode/pull/279230)
    -   修正: 抽象タスクサービスにおけるメモリリーク [PR #289863](https://github.com/microsoft/vscode/pull/289863)
-   [@tamuratak (Takashi Tamura)](https://github.com/tamuratak)
    -   NativeEditContext および TextAreaEditContext において、DOM の更新を次のアニメーションフレームにスケジューリングすることでレンダリングパフォーマンスを最適化 [PR #285906](https://github.com/microsoft/vscode/pull/285906)
    -   修正：チャットリストの最終回答において、一部がレンダリングされるのを防止 [PR #288178](https://github.com/microsoft/vscode/pull/288178)
-   [@vedbhadani (Ved BHadani)](https://github.com/vedbhadani): チャットコンテキストプロバイダーの自動アクティベーションイベント [PR #280677](https://github.com/microsoft/vscode/pull/280677)
-   [@daviddossett (David Dossett)](https://github.com/daviddossett): ボタンと入力の調整 [PR #280457](https://github.com/microsoft/vscode/pull/280457)

`vscode-copilot-chat`への貢献:

-   [@24anisha (Anisha Agarwal)](https://github.com/24anisha): サブエージェントの検索 - 設定可能な exp 変数の設定 [PR #3205](https://github.com/microsoft/vscode-copilot-chat/pull/3205)
-   [@alexandear (Oleksandr Redko)](https://github.com/alexandear): tools: 検証失敗時の問題報告に関するメッセージを更新 [PR #3113](https://github.com/microsoft/vscode-copilot-chat/pull/3113)
-   [@bstee615 (Benjamin Steenhoek)](https://github.com/bstee615): テレメトリにアグレッシブネスレベルとユーザー満足度スコアをログ出力 [PR #2897](https://github.com/microsoft/vscode-copilot-chat/pull/2897)
-   [@DanielFabian (Daniel Fabian)](https://github.com/DanielFabian): ドキュメント用の短期間キャッシュを追加し、Linkifierで言語によるフィルタリングを可能にした。[PR #2211](https://github.com/microsoft/vscode-copilot-chat/pull/2211)
-   [@kevin-m-kent](https://github.com/kevin-m-kent): prompttypes の計測を修正 [PR #2799](https://github.com/microsoft/vscode-copilot-chat/pull/2799)

`vscode-explorer-command`への貢献:

-   [@ArcticLampyrid (ArcticLampyrid)](https://github.com/ArcticLampyrid): 修正: CreateProcessWの代わりにShellExecuteWを使用し、UACダイアログを表示可能に [PR #17](https://github.com/microsoft/vscode-explorer-command/pull/17)

`vscode-js-debug`への貢献:

-   [@nayeemrmn (Nayeem Rahman)](https://github.com/nayeemrmn): 修正: Denoデバッグ設定で --allow-all を重複させないように [PR #2308](https://github.com/microsoft/vscode-js-debug/pull/2308)

`vscode-python-environments`への貢献:

-   [@renan-r-santos (Renan Santos)](https://github.com/renan-r-santos): `shellStartup` 使用時のアクティベーションアイコンの状態を修正 [PR #837](https://github.com/microsoft/vscode-python-environments/pull/837)
-   [@StellaHuang95 (Stella Huang)](https://github.com/StellaHuang95)
    -   新しいワークスペースに `python.defaultInterpreterPath` 設定が適用されない問題を修正 [PR #1110](https://github.com/microsoft/vscode-python-environments/pull/1110)
    -   一部の設定に非推奨の注記を追加 [PR #1100](https://github.com/microsoft/vscode-python-environments/pull/1100)

`vscode-windows-registry` への貢献:

-   [@thegecko (Rob Moran)](https://github.com/thegecko): コード例の軽微な修正 [PR #33](https://github.com/microsoft/vscode-windows-registry/pull/33)

`language-server-protocol`への貢献:

-   [@asukaminato0721 (Asuka Minato)](https://github.com/asukaminato0721): harper の追加 [PR #2222](https://github.com/microsoft/language-server-protocol/pull/2222)

`python-environment-tools`への貢献:

-   [@elprans (Elvis Pranskevichus)](https://github.com/elprans): merged-usrシステムでの環境変数の重複を修正 [PR #200](https://github.com/microsoft/python-environment-tools/pull/200)

* * *

新機能が利用可能になり次第、ぜひお試しいただければ幸いです。定期的にこちらをチェックして、最新情報をご確認ください。

> 過去の VS Code バージョンのリリースノートをご覧になりたい場合は、[code.visualstudio.com](https://code.visualstudio.com) の [Updates](https://code.visualstudio.com/updates) をご覧ください。

[](# "ページトップへ")
