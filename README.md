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
- [ ] **問い合わせフォーム**: Googleフォームを作成(項目: お名前(ニックネーム可)/ご連絡先/ご相談内容)し、`contact.html` 内の `REPLACE-WITH-YOUR-FORM-ID` を2箇所差し替え
  - IDの取得: フォーム編集画面の右上**「送信」→ `< >` タブ(HTMLを埋め込む)**に出てくる `src="https://docs.google.com/forms/d/e/1FAIpQL...(長い文字列).../viewform?embedded=true"` — この**長い文字列がフォームID**
  - ※メールアドレスではないので注意。個人のGmailアドレスはサイトに載せないこと
- [ ] **CTAリンク**: `index.html` と `contact.html` の `js-coconala-link` / `js-crowdworks-link` の `href="#"` を実際のプロフィールURLに差し替え(AI業務効率化向けにプロフィール文も更新すること)
  - ⚠️ **現状は押しても何も起きないボタン**。公開前に必ず実URLへ差し替えるか、ボタン自体を一時的に非表示にすること
- [ ] **OGP URL**: `REPLACE-WITH-YOUR-DOMAIN` をデプロイ後の実URLに置換(2箇所、`index.html` 内)
- [x] **og:image**: `images/ogp.png`(1200x630)作成・配置済み(2026-08-13。p8の実スクショを使用)
- [ ] **作品スクショ/動画の差し替え**(残っているもの)
  - Task Bot: 既存事例ページ(Netlify)から通知フォーマット+週次レポートのスクショを流用
  - メルカリ出品アシスタント: 操作動画(10〜20秒)推奨。**実アカウントの定型文(#古着屋36等)はダミーに差し替えてから撮影**
  - 問い合わせ集約(p5)・CSチャットボット(p4): ローカル起動して撮影(ダミーデータは「実在しそうな」内容で作り込む)
  - 社内ナレッジ検索(p7): `images/placeholder-knowledge.svg` を実スクショに差し替え
  - スマホ幅で文字が読めるかを確認。WebP化して `<img>` の `width`/`height` は実寸に更新
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

- `/works/sales-dashboard.html` — LUMINA 売上分析ダッシュボード(p8)
- `/works/knowledge-search.html` — 社内ナレッジ検索 + Slackボット(p7)
- `/works/inquiry-hub.html` — 問い合わせ集約 + AI自動分類(p5)
- `/works/ec-chatbot.html` — CSチャットボット(p4)
- `/works/doc-search.html` — 社内文書検索AI(p3)
- `/works/line-bot.html` — LINE bot AI自動応答(p1)
- `/works/blog-generator.html` — ブログ記事自動生成(p2)

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

各ページは完全に自己完結した1ファイル(外部リンク・画像・script無し、CSSも内部の `<style>` に埋め込み)。
`css/style.css` を読み込ませないこと(案件ごとの配色を保つため。読み込ませた瞬間にクラス名の衝突が始まる)。
