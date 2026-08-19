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

## 次回やること（優先順）

1. **公開作業** — 2026-08-19に完了（ホスティング先はVercelに決定）
   - ✅ GitHubリポジトリ作成・push: https://github.com/16maaasa-ops/yuuki-taniguchi-portfolio （Public）
   - ✅ Vercelプロジェクト作成・デプロイ: **本番URL https://yuuki-taniguchi-portfolio.vercel.app**
   - ⚠️ **GitHub連携（push時の自動デプロイ）は未接続**。`vercel git connect` が
     「Failed to connect」で失敗（Vercel側のGitHub App権限の問題と思われる）。
     現状は `vercel --prod` で手動デプロイする運用。自動化したい場合はVercelダッシュボードの
     Project Settings → Git から手動でGitHubリポジトリを接続する必要あり
   - ⬜ Vercel Analytics等のアクセス解析は未設定
2. **連絡先の確定** — 2026-08-19に完了
   - ✅ Googleフォームを新規作成し埋め込み済み（`contact.html`、お名前/ご連絡先/ご相談内容の3項目・全て必須）
   - ✅ ココナラ・クラウドワークスのプロフィールURLを反映済み（`index.html` / `contact.html` 計4箇所）
   - ✅ OGP URL（`index.html` の `REPLACE-WITH-YOUR-DOMAIN` 2箇所）も本番URL確定後に反映済み
3. **残りの実スクショ撮影**: p7・p5・p4・Task Bot・メルカリ（現状プレースホルダーのまま）
4. **iOS Safari実機での表示確認**。特に骨組みを追加した3ファイル
   （`works/blog-generator.html` `works/doc-search.html` `works/line-bot.html`）
5. `js/main.js` の `setupHashDeepLink()` に `try/catch` を追加（`#:~:text=`付きURLで例外が出る。優先度低）
6. Vercelの `cleanUrls` 設定を検討（`works/xxx.html`直リンクのちらつき対策）
7. メルカリのshowcaseページ作成を検討（二軍の中で唯一詳細ページが無い）
8. Task Bot事例ページ（外部Netlify）を `works/` 配下へ取り込むか検討

## 主要ファイルの場所（絶対パス）

- 営業サイト本体: `/Users/yukitaniguchi/claude/portfolio/index.html`
- 公開前チェックリスト: `/Users/yukitaniguchi/claude/portfolio/README.md`
- 案件詳細ページ（**正**。以後はここだけ編集）: `/Users/yukitaniguchi/claude/portfolio/works/*.html`
- 案件詳細ページの原本（改修前アーカイブ・編集しない）: `/Users/yukitaniguchi/Desktop/*-showcase/index.html`
- 各模擬案件のリポジトリ: `/Users/yukitaniguchi/claude/mock-project/project1〜8/`
- p8のバックエンド状況メモ: `/Users/yukitaniguchi/.claude/projects/-Users-yukitaniguchi-claude-mock-project-project8/memory/case8-project-status.md`
