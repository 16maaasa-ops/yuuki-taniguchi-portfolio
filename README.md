# ポートフォリオサイト(ココナラ・クラウドワークス向け)

AI業務効率化ツール開発者としてのポートフォリオ。素の HTML/CSS/JS 製、ビルド不要。

## ローカルで確認する

```bash
cd portfolio
python3 -m http.server 8000
# → http://localhost:8000 をブラウザで開く
```

## 公開前の差し替えチェックリスト

### 必須(このままでは公開しない)

- [x] **名義**: 「Yuuki Taniguchi」で反映済み(2026-07-12)
- [x] **問い合わせフォーム**: Googleフォームを作成(項目: お名前(ニックネーム可)/ご連絡先/ご相談内容、全て必須)し、`contact.html` の埋め込みiframe・フォールバックリンクを実フォームURLに差し替え済み(2026-08-19)
- [x] **CTAリンク**: `index.html` と `contact.html` の `js-coconala-link` / `js-crowdworks-link` を実際のプロフィールURLに差し替え済み(2026-08-19)
- [x] **OGP URL**: `REPLACE-WITH-YOUR-DOMAIN` を本番URL(`https://yuuki-taniguchi-portfolio.vercel.app`)に置換済み(2026-08-19)
- [x] **og:image**: `images/ogp.png`(1200x630)作成・配置済み(2026-08-13。p8の実スクショを使用)
- [x] **作品スクショ/動画の差し替え**(5件中5件完了・2026-08-22)
  - ✅ **Task Bot**: 既存事例ページ(Netlify)の週次レポート画面(完了実績グラフ)を実スクショとして採用(2026-08-19)
  - ✅ **問い合わせ集約(p5)**: 公開デモ(`project5-three-weld.vercel.app`)で実際に分類を実行した結果画面(クレーム判定+Slackカード再現)を採用(2026-08-19)
  - ✅ **社内ナレッジ検索(p7)**: 公開デモ(`project7-khaki.vercel.app`)で実際に検索し、出典つき回答が出た画面を採用(2026-08-19)
  - ✅ **メルカリ出品アシスタント**: `works/mercari.html`(案件詳細ページ)を新規作成し、実際のアプリの
    ログイン/入力/生成結果の3画面(`images/mercari-login.jpg` / `mercari-input.jpg` / `mercari-result.jpg`)を
    掲載(2026-08-22)。実アカウントの定型文(`#古着屋36`)は黒塗り処理済み。旧`mercari-demo.jpg`は役割が
    重複するため削除済み
  - ✅ **CSチャットボット(p4)**: Vercelに一時デプロイして実スクショを撮影、`works/ec-chatbot.html`と
    `index.html`に反映済み(2026-08-22)。撮影後、API利用料保護のためデプロイ自体は削除済み
  - スマホ幅で文字が読めるかを確認
  - ✅ **売上分析ダッシュボード(p8)は完了**(2026-08-13)。`images/dashboard-*.jpg` を使用。トリミング済みで文字も判読できる
- [ ] **プロフィールイラスト**: `images/avatar-placeholder.svg` を差し替え
- [ ] **各案件詳細ページ(`works/*.html`)の通読**: 会社名・実名・実業務が特定できる記述がないか最終確認(2026-08-13 時点では機密・実名の混入は無いことを確認済み)
- [ ] **価格・納期・お約束の確認**: サービスメニューの「15,000円〜/5日〜」等、進め方の「修正2回まで無料」「納品後2週間サポート」「返信24時間以内」は**仮の値**。守れる内容に自分で決めて更新すること

### 公開時

- [ ] GitHubリポジトリ作成(公開/非公開を決める)→ Vercel連携でデプロイ
- [ ] Vercel Analytics を有効化
- [ ] Anthropicコンソールで月次 spend limit 設定(メルカリアプリのデモを案内する前に)
- [ ] Vercel の `cleanUrls` 設定を検討(`works/xxx.html` への直リンクが `works/xxx` に転送されちらつくのを防ぐ)

### 検証

- [ ] **動きの確認**: デプロイ後のURLを**新しいタブで開く**(ヒーローの順出し+マーカー描画は読み込み直後の約1.6秒だけ再生。途中リロードだとスクロール位置が復元されて見逃す)。カードの時間差表示はマウスホイールで**ゆっくり**スクロールすると見える
- [ ] iOS Safari 実機で表示確認(発注者はiPhoneが多い)。特に `works/blog-generator.html` `works/doc-search.html` `works/line-bot.html` は 2026-08-13 に `viewport` メタタグを追加したばかりなので、実機でのレイアウト崩れが無いか要確認
- [ ] 全リンクの疎通+ハッシュ直リンク(`/#work-taskbot` 等)の動作確認
- [ ] Lighthouse(Performance / Accessibility)
- [ ] OGPカード表示確認(X Card Validator 等)
- [ ] 非エンジニアに見せる5秒テスト:「何を頼める人か」が5秒で言えるか
- [ ] 誤字脱字の通読

## 提案文で使える直リンク

各作品にはIDが付いているので、提案文から特定の事例を直接指せます。**今後は下記の「案件詳細ページ」を直接送るほうが情報量が多いため推奨**。
トップページの `#id` は、過去にこの直リンクを配布した相手のための互換維持として残しています。

### 一軍(Works) — トップページの `#id`

- `/#work-taskbot` — Task Bot(実運用中)
- `/#work-inquiry-hub` — 問い合わせ集約 + AI自動分類(p5)
- `/#work-sales-dashboard` — LUMINA 売上分析ダッシュボード(p8)
- `/#work-knowledge-search` — 社内ナレッジ検索 + Slackボット(p7)
- `/#work-cs-chatbot` — CSチャットボット(p4)

### 二軍(More Works) — トップページの `#id`

- `/#work-mercari` — メルカリ出品アシスタント
- `/#work-rag` — 社内文書検索AI(RAG、p3)
- `/#work-linebot` — LINE bot AI自動応答(p1)

### 案件詳細ページ(`works/*.html`) — 推奨

- `/works/task-bot.html` — チームタスク管理・自動通知システム(実運用中。2026-08-22に外部Netlifyから取り込み)
- `/works/sales-dashboard.html` — LUMINA 売上分析ダッシュボード(p8)
- `/works/knowledge-search.html` — 社内ナレッジ検索 + Slackボット(p7)
- `/works/inquiry-hub.html` — 問い合わせ集約 + AI自動分類(p5)
- `/works/ec-chatbot.html` — CSチャットボット(p4)
- `/works/doc-search.html` — 社内文書検索AI(p3)
- `/works/line-bot.html` — LINE bot AI自動応答(p1)
- `/works/blog-generator.html` — ブログ記事自動生成(p2)
- `/works/mercari.html` — メルカリ出品アシスタント(自主制作・実際に運用中)

## 構成

```
portfolio/
├── index.html      # 1ページ構成(ヒーロー/事例/できること/プロフィール/進め方/FAQ/相談)
├── css/style.css   # 配色: 生成り#FAF7F2 + 深青緑#2A6B6B + 暖色#C9552E(点使い)
├── js/main.js      # フェードイン/スマホ固定CTA/ハッシュ直リンク
├── images/         # 画像。プレースホルダーSVGと、p8の実スクショ(dashboard-*.jpg)が混在
└── works/          # 案件詳細ページ(「導入レポート」形式)。案件ごとに配色が違うのは意図的な個性
```

### `works/` の編集ルール(重要)

`works/*.html` は `/Users/yukitaniguchi/Desktop/*-showcase/index.html` からコピーしたものですが、
**以後の編集は `portfolio/works/` 側のみで行うこと**。Desktop側は改修前のアーカイブとして残しており、
編集しても本サイトには反映されません(2026-08-13、骨組みが無いファイルを2つだけ直して3つ取り残すという
事故が実際に起きたため、この注意書きを追加)。

各ページは完全に自己完結した1ファイル(CSSも内部の `<style>` に埋め込み)。実スクショなどの画像や
Vercel Analyticsの計測タグは使ってよいが、`css/style.css` は読み込ませないこと
(案件ごとの配色を保つため。読み込ませた瞬間にクラス名の衝突が始まる)。
