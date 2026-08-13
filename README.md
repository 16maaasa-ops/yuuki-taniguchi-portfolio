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
- [ ] **OGP URL**: `REPLACE-WITH-YOUR-DOMAIN` をデプロイ後の実URLに置換(2箇所)
- [ ] **og:image**: `images/ogp.png`(1200x630)を作成して配置
- [ ] **作品スクショ/動画**: `images/placeholder-*.svg` を実物に差し替え
  - Task Bot: 既存事例ページから通知フォーマット+週次レポートのスクショを流用
  - メルカリ出品アシスタント: 操作動画(10〜20秒)推奨。**実アカウントの定型文(#古着屋36等)はダミーに差し替えてから撮影**
  - RAG・LINE bot: ローカル起動して撮影(ダミーデータは「実在しそうな」内容で作り込む)
  - スマホ幅で文字が読めるかを確認。WebP化して `<img>` の `width`/`height` は実寸に更新
- [ ] **プロフィールイラスト**: `images/avatar-placeholder.svg` を差し替え
- [ ] **Task Bot 事例ページの通読**: 会社名・実名・実業務が特定できる記述がないか最終確認
- [ ] **価格・納期・お約束の確認**: サービスメニューの「15,000円〜/5日〜」等、進め方の「修正2回まで無料」「納品後2週間サポート」「返信24時間以内」は**仮の値**。守れる内容に自分で決めて更新すること

### 公開時

- [ ] GitHubリポジトリ作成(公開/非公開を決める)→ Vercel連携でデプロイ
- [ ] Vercel Analytics を有効化
- [ ] Anthropicコンソールで月次 spend limit 設定(メルカリアプリのデモを案内する前に)

### 検証

- [ ] **動きの確認**: デプロイ後のURLを**新しいタブで開く**(ヒーローの順出し+マーカー描画は読み込み直後の約1.6秒だけ再生。途中リロードだとスクロール位置が復元されて見逃す)。カードの時間差表示はマウスホイールで**ゆっくり**スクロールすると見える
- [ ] iOS Safari 実機で表示確認(発注者はiPhoneが多い)
- [ ] 全リンクの疎通+ハッシュ直リンク(`/#work-taskbot` 等)の動作確認
- [ ] Lighthouse(Performance / Accessibility)
- [ ] OGPカード表示確認(X Card Validator 等)
- [ ] 非エンジニアに見せる5秒テスト:「何を頼める人か」が5秒で言えるか
- [ ] 誤字脱字の通読

## 提案文で使える直リンク

各作品にはIDが付いているので、提案文から特定の事例を直接指せます。

- `/#work-taskbot` — Task Bot(実運用中)
- `/#work-mercari` — メルカリ出品アシスタント
- `/#work-rag` — 社内文書検索AI
- `/#work-linebot` — LINE bot AI自動応答

## 構成

```
portfolio/
├── index.html      # 1ページ構成(ヒーロー/事例/できること/プロフィール/進め方/FAQ/相談)
├── css/style.css   # 配色: 生成り#FAF7F2 + 深青緑#2A6B6B + 暖色#C9552E(点使い)
├── js/main.js      # フェードイン/スマホ固定CTA/ハッシュ直リンク
└── images/         # プレースホルダーSVG(要差し替え)
```
