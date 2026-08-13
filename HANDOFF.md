# 引き継ぎ書 — ポートフォリオ（営業資料）整備

作成日: 2026-07-22。新しい会話の最初にこれを読めば、続きから作業できます。
このファイルは「ポートフォリオ全体（営業資料）」の引き継ぎ書です。
個別案件 project5 のバックエンド詳細は `/Users/yukitaniguchi/claude/mock-project/project5/HANDOFF.md` を参照。

## ゴールと前提（このセッションで確定した方針）

- **用途**: フリーランス個人として、**案件を受注するための営業資料**
- **到達経路**: URLを直接送る（クラウドソーシング／SNS等）
- **名義**: Yuuki Taniguchi（個人・フリーランス）。ポジションは「元・調剤薬局事務／現場のしんどさが分かるAI業務効率化屋」
- **誠実さの原則**: 模擬案件は必ず「自主制作」と明記する。実運用/自主制作/模擬案件をバッジで区別する既存の仕組みを踏襲
- **模擬案件は最終的に8つになる予定**。器（トップページ）は既に完成しているので、案件が増えるたびカードを足すだけでよい

## 全体構成（2階建て・決定済み）

```
/Users/yukitaniguchi/claude/portfolio/index.html   ← 営業サイト本体（入口）。完成度高い
   Works セクション（一軍は最大4枠。相手に応じて入れ替える運用）
   └ 各カード → 案件詳細ページ（showcase）へリンク
案件詳細ページ（showcase・案件ごとに配色が違う「導入レポート」風）
   ├ /Users/yukitaniguchi/Desktop/ec-chatbot-showcase/index.html   （project4）
   └ /Users/yukitaniguchi/Desktop/inquiry-hub-showcase/index.html  （project5）
```

- showcaseの見た目は「案件ごとの個性」として現状維持でよい（統一しない、と決定済み）
- showcaseはまだWeb未公開。今はWorksカードから「実デモ」or「ご相談時にご案内」へ繋いでいる

## このセッションで完了したこと

1. **project5・project4 をWorksに追加**（`portfolio/index.html`）
   - 配置: Task Bot → メルカリ → **project5（#work-inquiry-hub）→ project4（#work-cs-chatbot）** → RAG → LINE bot
   - プレースホルダー画像を新規作成: `images/placeholder-inquiryhub.svg` / `images/placeholder-ecchatbot.svg`（手描きダミー。要・実スクショ差し替え）
   - project5カードは実デモ（https://project5-three-weld.vercel.app）へリンク。project4は「ご相談時にご案内」（公開デモURL未確認のため）
2. **showcaseのUIレビュー指摘を反映**（inquiry-hub / ec-chatbot 両方）
   - Hero・背景を「メール＋LINE」→「まずLINEを対象に」へ修正（末尾SCOPEと矛盾しないよう）
   - デモ画面モックのヘッダーをダークで白飛びしないよう固定色化
   - Hero見出しの強調を括弧をまたがない形に
   - 両ファイルに `<!doctype html><html lang="ja">…` の骨組みを追加
3. **project5のコード修正を本番反映**（別リポジトリ `mock-project/project5`）
   - Slackメンション化け脆弱性（本文に`<!channel>`で全員通知が飛ぶ）をエスケープで修正 → PR #1 マージ済み・本番デプロイ済み・稼働確認済み
4. **記事下書き作成**: `/Users/yukitaniguchi/claude/mock-project/project5-記事下書き.md`（project4の記事フォーマットに合わせた版。公開媒体への投稿用）

## 次回やること（優先順）

1. **プレースホルダー画像を実スクショに差し替え**（`portfolio/images/placeholder-*.svg`）
   - project4/5 の実際のSlackカード・LINE通知・管理画面などのスクショを用意すれば組み込める
   - README.md のチェックリストにも他案件（Task Bot等）の差し替え項目あり
2. **連絡先の確定**（`portfolio/contact.html` と `index.html`）
   - GoogleフォームのフォームID（`REPLACE-WITH-YOUR-FORM-ID` を2箇所）
   - ココナラ/クラウドワークスのプロフィールURL（`js-coconala-link` / `js-crowdworks-link` の `href="#"`）
   - OGP URL（`REPLACE-WITH-YOUR-DOMAIN` 2箇所）、`images/ogp.png`（1200x630）作成
3. **残り6案件のWorks統合**（同じカードの型に流し込む。一軍4枠を超えたら二軍へ）
   - 一軍が増えたら、テーマの近い LINE bot（模擬）は二軍に落とす候補
4. **公開**: GitHubリポジトリ作成 → Vercel等でデプロイ → URLを各所に反映
5. **後片付け**: project5の worktree `fix-slack-escape`（マージ済み・不要なら削除可）

## 主要ファイルの場所（絶対パス）

- 営業サイト本体: `/Users/yukitaniguchi/claude/portfolio/index.html`
- 営業サイトの公開前チェックリスト: `/Users/yukitaniguchi/claude/portfolio/README.md`
- 案件詳細ページ: `/Users/yukitaniguchi/Desktop/{ec-chatbot,inquiry-hub}-showcase/index.html`
- project5リポジトリ（本番稼働中）: `/Users/yukitaniguchi/claude/mock-project/project5/` （GitHub: 16maaasa-ops/inquiry-hub、デモ: project5-three-weld.vercel.app）
- project5のバックエンド引き継ぎ書: `/Users/yukitaniguchi/claude/mock-project/project5/HANDOFF.md`
- project4リポジトリ: `/Users/yukitaniguchi/claude/mock-project/project4/` （GitHub: 16maaasa-ops/mock-project-4）
- 記事下書き: `/Users/yukitaniguchi/claude/mock-project/project5-記事下書き.md`
