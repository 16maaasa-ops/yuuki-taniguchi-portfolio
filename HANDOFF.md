# 引き継ぎ書 — ポートフォリオ（営業資料）整備

最終更新: 2026-08-13。新しい会話の最初にこれを読めば、続きから作業できます。
このファイルは「ポートフォリオ全体（営業資料）」の引き継ぎ書です。
個別案件のバックエンド詳細は各 `mock-project/projectN/` 配下の `HANDOFF.md`（あれば）を参照。

## ゴールと前提（確定した方針）

- **用途**: フリーランス個人として、**案件を受注するための営業資料**
- **到達経路**: URLを直接送る（クラウドソーシング／SNS等）
- **名義**: Yuuki Taniguchi（個人・フリーランス）。ポジションは「元・調剤薬局事務／現場のしんどさが分かるAI業務効率化屋」
- **誠実さの原則**: 模擬案件は必ず「模擬案件・自主制作」と明記する。実運用/自主制作/模擬案件をバッジで区別する既存の仕組みを踏襲。**トップページの一軍・二軍・案件詳細ページ(works/)の3か所すべてで**表記が漏れないようにする
- **模擬案件は8つ**（project1〜5, 7, 8。project6は欠番）。全8案件が2026-08-13時点でポートフォリオに反映済み

## 全体構成（2階建て・確定）

```
/Users/yukitaniguchi/claude/portfolio/index.html   ← 営業サイト本体（入口）
   Works セクション（一軍5枚。証拠が強い順に並べる運用）
   More Works セクション（二軍9枚・3×3グリッド）
   └ 各カード → 案件詳細ページ（works/）へリンク（「どう作ったか、くわしく見る →」で統一）
案件詳細ページ（portfolio/works/*.html・案件ごとに配色が違う「導入レポート」風）
```

- showcaseの見た目は「案件ごとの個性」として現状維持（統一しない、と決定済み）
- **`works/` の実体は `portfolio/works/` 側のみ**。`/Users/yukitaniguchi/Desktop/*-showcase/index.html` は
  改修前のアーカイブとして残しているだけで、以後は編集しないこと（Desktopを直しても本サイトには反映されない）
- `portfolio/` は 2026-08-13 に `git init` 済み。以後の作業はコミットを刻みながら進めること（Undo手段の確保）

## 一軍・二軍の割り付け（2026-08-13 時点）

**Works（一軍5枚・上から証拠が強い順）**

1. `work-taskbot` — Task Bot（実運用中）
2. `work-inquiry-hub` — 問い合わせ集約 + AI分類（p5・模擬案件＋公開デモあり）
3. `work-sales-dashboard` — LUMINA売上分析ダッシュボード（p8・模擬案件＋公開デモあり・**実スクショ使用**）
4. `work-knowledge-search` — 社内ナレッジ検索+Slackボット（p7・模擬案件＋公開デモあり）
5. `work-cs-chatbot` — CSチャットボット（p4・模擬案件・デモ非公開）

**More Works（二軍9枚・3×3、既存の「天気予報Webアプリ」は9枚に揃えるため除外）**

- `work-mercari`（メルカリ、自主制作） / `work-rag`（p3社内文書検索AI、模擬案件） /
  `work-linebot`（p1 LINE bot、模擬案件） / `work-blog-generator`（p2ブログ記事生成、模擬案件・新規）
- 既存5枚: 記念日リマインダー / 会議の議事録自動生成 / アンケート自由記述の分析 / レシピ提案ツール / EC価格の定点観測

p3「社内文書検索AI」とp7「社内ナレッジ検索+Slack」はテーマが重複していたため、**新しく充実しているp7を一軍に、p3は二軍に**という整理にした。
（**p4「CSチャットボット」はこれとは無関係**。p4は社外＝ECサイトのお客様向け一次対応、
p7は社内＝社員向けナレッジ検索と用途が異なるため、p4は一軍Worksに残す方針で確定
——2026-08-19、p3との混同を確認して再確定）

## このセッションで完了したこと（2026-08-13）

1. **`git init`** で portfolio/ を管理下に置き、各手順の区切りでコミット
2. **p8の実スクショ4枚をトリミングして導入**
   - 元データ（`mock-project/project8-記事画像/*.jpg`）は文字が途中で切れていたり白余白が7割を占めるなど未加工のままでは使えず、Pillowで精密にトリミング
   - `images/dashboard-kpi.jpg`（ヒーロー用・805×355）/ `dashboard-charts.jpg` / `dashboard-upload.jpg` / `dashboard-error.jpg`
   - `images/ogp.png`（1200×630）も同じ素材から新規作成
   - ヒーロー画像を「メルカリの手描きダミー」→「p8ダッシュボードの実スクショ」に差し替え。**模擬案件である旨をキャプション・altに明記**（実運用ツールと誤読されないように）
3. **`portfolio/works/` を新設し、showcase 7ファイルを取り込み**
   - うち3ファイル（blog-generator/doc-search/line-bot）は `<!doctype>` `charset` `viewport` が丸ごと欠落しており、
     iPhoneで正しく表示されない状態だったため骨組みを追加
   - 7ファイル全部に「模擬案件」の但し書き（5ファイルには無かった）、冒頭の戻りリンク、末尾のCTA（相談導線）、
     `<title>` への「｜ Yuuki Taniguchi」追加
   - sales-dashboard.html には p8 の実スクショ3枚（charts/upload/error）を新セクションとして追加
4. **`index.html` を再編**
   - Works を5枚に絞り、証拠の強い順（実運用 → デモ+実測値あり → デモあり → デモあり → デモ非公開）に並べ替え
   - p8・p7の新規カードを追加。模擬案件3件（p5/p8/p7）には「模擬案件」に加え「公開デモあり」バッジも併記
     （模擬案件バッジが縦に並びすぎると「実績が無い人」に見えるための対策）
   - More Worksに4枚追加（メルカリ/p3/p1を降格、p2を新規）、天気予報を除外して9枚（3×3）に調整
   - 降格した3枚には**既存の直リンク`id`をそのまま引き継いだ**（`/#work-mercari`等が死なないように）
   - リンク文言を「どう作ったか、くわしく見る →」に統一（「導入レポート」は実在顧客を連想させ模擬案件と矛盾するため不採用）
5. **CSSを最小限だけ調整**（`.text-link`のタップ領域拡大、`.work-visual figcaption`、`.mini-card .badge`）。
   `js/main.js` は無改修
6. **README.md / HANDOFF.md（本ファイル）を更新**

## このセッションで完了したこと（2026-08-19）

1. **ホスティング先の比較検討**: Vercel（無料枠）とNetlify（無料枠）を比較。
   個人ポートフォリオ規模ならどちらも無料枠で十分だが、Netlify FormsならGoogleフォーム連携が
   丸ごと不要になる点、Vercelはproject8のバックエンドと管理画面を統一できる点をそれぞれメリットとして提示。
   **本セッションでは未確定**（ユーザーが先に連絡先確定を優先）
2. **Googleフォームを新規作成**（Chrome自動操作で代行）
   - `contact.html` のコメントに書かれていた設計どおり「お名前(ニックネーム可)/ご連絡先(メールアドレス)/ご相談内容」の
     3項目、全て必須。ご相談内容のみ「段落」形式、他は「記述式（短文）」
   - 公開設定は「リンクを知っている全員」が回答可能
   - `contact.html` の埋め込みiframe・フォールバックリンクの `REPLACE-WITH-YOUR-FORM-ID` を実URLに差し替え
3. **ココナラ・クラウドワークスのプロフィールURLを反映**
   - `index.html` / `contact.html` 計4箇所の `href="#"` を実URLに差し替え、外部リンクなので
     `target="_blank" rel="noopener"` を付与
   - コミット: `d4b497d`
4. **GitHub作成・Vercel本番デプロイ・自動連携・Web Analytics** — 詳細は上記「公開作業」項目
5. **Task Bot・p5・p7の実スクショ差し替え、メルカリの実スクショ用意** — 詳細は上記
   「実スクショ撮影」項目
6. **見出し・統計カードの改行修正**（コミット `40bae2f`）
   - `css/style.css`に前回追加した`word-break: keep-all`は、`works/*.html`が
     `css/style.css`を読み込んでいないため効いておらず、かつ日本語だけの単語の
     途中改行にはそもそも効かないことが判明
   - UI/UXレビューアー・シニアエンジニアの2体にプランをレビューさせ、指摘（固定`<br>`だと
     `text-wrap: balance`を潰しPC幅でも不要に改行される・見落とし2ファイルがある等）を反映
   - `works/*.html`全7ファイルのbodyに`word-break: keep-all; overflow-wrap: break-word;`を追加
   - 「きっかけは、〜」等の見出し6箇所で、割れると読みにくい単語だけ
     `<span style="white-space: nowrap">`で保護（固定`<br>`は使わず、行の折返し自体は
     `text-wrap: balance`に任せる設計）
   - `.stats`（統計カード3列グリッド）を7ファイル共通でモバイル基準1列に変更し、
     既存の`@media (min-width: 620px)`で3列に戻す
   - `blog-generator.html`固有のスプレッドシート風モックアップ表に
     `table-layout: fixed`・列幅指定・th nowrapを追加
   - **ユーザーへの再確認待ち**：修正後の見た目をiPhoneでもう一度見てもらう必要あり
7. **横スクロール回帰の修正**（コミット `5839882`）
   - 上記6で追加した`word-break: keep-all`が原因で、句読点の間が長い日本語の
     地の文がある箇所で横スクロールが発生（`keep-all`はCJK文字同士の暗黙の改行機会を
     止めてしまうため、句読点が少ない区間があると改行できず横にはみ出す）
   - 見出しの単語保護は`<span style="white-space: nowrap">`方式でkeep-allに依存していない
     ため、`css/style.css`と`works/*.html`全7ファイルのbodyから`word-break: keep-all`/
     `overflow-wrap: break-word`を削除するだけで解決。見出しの改行修正はそのまま維持
   - iframeで375/390/430px幅をシミュレートし（`resize_window`ツールがこの環境の
     スクリーンショットに反映されない制約があったため）、overflowが解消したことを
     JavaScriptで確認済み
   - **ユーザーへの再々確認待ち**：本番URLをiPhoneでもう一度見てもらう必要あり

## 次回やること（優先順）

1. **公開作業** — 2026-08-19に完了（ホスティング先はVercelに決定）
   - ✅ GitHubリポジトリ作成・push: https://github.com/16maaasa-ops/yuuki-taniguchi-portfolio （Public）
   - ✅ Vercelプロジェクト作成・デプロイ: **本番URL https://yuuki-taniguchi-portfolio.vercel.app**
   - ✅ **GitHub自動連携も接続済み**（push→自動デプロイが動作確認済み）。
     `vercel git connect` は「Failed to connect」で失敗したが、原因はVercelのGitHub Appが
     「Only select repositories」設定で新規リポジトリを許可していなかったこと。
     GitHub Settings → Applications → Vercel → Configure で対象リポジトリを追加し、
     Vercel側で改めて Connect したら解消した
   - ✅ **Vercel Web Analyticsを有効化**（Hobbyプラン、月5万イベントまで無料）。
     素のHTMLサイトのためフレームワーク自動注入が効かず、`index.html`/`contact.html`/`works/*.html`
     の計9ファイル全てに手動でスクリプトタグ（`/_vercel/insights/script.js`）を追加。
     本番で計測リクエスト（200 OK）を確認済み
2. **連絡先の確定** — 2026-08-19に完了
   - ✅ Googleフォームを新規作成し埋め込み済み（`contact.html`、お名前/ご連絡先/ご相談内容の3項目・全て必須）
   - ✅ ココナラ・クラウドワークスのプロフィールURLを反映済み（`index.html` / `contact.html` 計4箇所）
   - ✅ OGP URL（`index.html` の `REPLACE-WITH-YOUR-DOMAIN` 2箇所）も本番URL確定後に反映済み
3. **残りの実スクショ撮影** — 2026-08-19、5件中3件完了
   - ✅ Task Bot / p5（問い合わせ集約）/ p7（社内ナレッジ検索）: 公開デモ・案件詳細ページで
     実際に操作した結果画面をスクショし、`index.html`のプレースホルダーSVGと差し替え済み
   - ⚠️ メルカリ出品アシスタント: `images/mercari-demo.jpg`として実スクショ（開発時にdocsフォルダへ
     残っていたもの。実アカウントの定型文`#古着屋36`が写っていたため黒塗り処理済み）を用意したが、
     `works/mercari.html`が無いため**まだどこにも埋め込んでいない**。二軍の中で唯一詳細ページが無い
     案件なので、ページを新規作成するタイミングでヒーロー画像として使うこと（本Handoffの末尾「次回やること」7番と合わせて対応）
   - ✅ p4（CSチャットボット）: 2026-08-22に完了。手順は以下の通り
     1. `npm run seed:faqs`でFAQ18件をSupabase（project1と共有・`project4`スキーマ）に投入（upsertなので再実行安全）
     2. `vercel link`で新規プロジェクト作成 → 環境変数6個を本番に設定 → `vercel --prod`でデプロイ
     3. `npm run seed:operator`でスクショ撮影用オペレーターアカウントを1つ作成（Supabaseに残存。実害なし）
     4. Chrome自動操作で顧客向け`/widget`（FAQ根拠つきAI自動応答）とオペレーター`/dashboard`
        （ログイン→エスカレーション済み会話の一覧）を実際に操作してスクショ撮影
     5. `images/ec-chatbot-widget.jpg`・`ec-chatbot-dashboard.jpg`としてトリミング・保存
     6. `works/ec-chatbot.html`にSCREENSHOTSセクションを新設（他案件と同じ構成）、
        `index.html`のWorksカードもプレースホルダーSVGから差し替え、`work-note`の文言も実態に合わせて更新
     7. **撮影後、Vercelプロジェクトは削除済み**（`vercel remove botanica-cs-chatbot --yes`）。
        理由: `/widget`はAPIルートに認証が一切無く、公開したままだと誰でもClaude APIを叩けてしまい
        利用料が意図せず増えるリスクがあったため（`/dashboard`はSupabase認証で保護されているが`/widget`は無防備）。
        ユーザーに確認の上、削除を選択
     - 再度デモを見せたい場合は、上記1〜2の手順でいつでも再デプロイ可能（FAQ・オペレーターアカウントは
       Supabase側に残っているので3は不要）
4. **iOS Safari実機での表示確認** — 2026-08-19に実施。ユーザーが本番URLをiPhoneで確認し、
   画面録画3本（骨組みを追加した3ファイル: `works/blog-generator.html` `works/doc-search.html`
   `works/line-bot.html`）を共有してくれた。「見出しが日本語の単語の途中で割れる」問題を
   発見・修正 → その修正（word-break: keep-all）が原因で今度は横スクロールが発生 → 原因特定し
   keep-allを削除して解消。**ただし見出しの変な改行自体はnowrapスパンでの個別対応だけでは
   完全には直りきらず、2026-08-19時点でユーザーの判断により一旦保留**（優先度低、後日再挑戦）。
   横スクロールは解消済みでそちらは問題なし
5. `js/main.js` の `setupHashDeepLink()` に `try/catch` を追加（`#:~:text=`付きURLで例外が出る。優先度低）
6. Vercelの `cleanUrls` 設定を検討（`works/xxx.html`直リンクのちらつき対策）
7. メルカリのshowcaseページ作成を検討（二軍の中で唯一詳細ページが無い）
8. Task Bot事例ページ（外部Netlify）を `works/` 配下へ取り込むか検討
9. **見出しの変な改行、再挑戦する場合のメモ**（2026-08-19に保留）
   - `nowrap`スパンで個別の単語を守る方式は、守った単語自体は割れなくなったが、
     見出し全体としてはまだ「変」と感じられる改行が残っている状態
   - 次回試すなら：気になっている具体的な見出し・ページのスクリーンショットを先にもらってから、
     その1箇所だけピンポイントで直す方が、今回のような手戻り（`word-break: keep-all`の
     副作用で横スクロールを誘発）を避けやすい
   - `resize_window`ツールがこの環境のスクリーンショットに反映されない制約があるため、
     ローカル検証は「iframeで指定幅を再現しJavaScriptで`scrollWidth`をチェックする」方法が有効
     （このセッションの手順19で実施した方法）

## 主要ファイルの場所（絶対パス）

- 営業サイト本体: `/Users/yukitaniguchi/claude/portfolio/index.html`
- 公開前チェックリスト: `/Users/yukitaniguchi/claude/portfolio/README.md`
- 案件詳細ページ（**正**。以後はここだけ編集）: `/Users/yukitaniguchi/claude/portfolio/works/*.html`
- 案件詳細ページの原本（改修前アーカイブ・編集しない）: `/Users/yukitaniguchi/Desktop/*-showcase/index.html`
- 各模擬案件のリポジトリ: `/Users/yukitaniguchi/claude/mock-project/project1〜8/`
- p8のバックエンド状況メモ: `/Users/yukitaniguchi/.claude/projects/-Users-yukitaniguchi-claude-mock-project-project8/memory/case8-project-status.md`
