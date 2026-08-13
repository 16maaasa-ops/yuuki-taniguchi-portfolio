/* Yuuki Taniguchi | AI業務効率化ツール開発 ポートフォリオ */

// JSが動く環境であることをCSSに伝える(これがないと .reveal は隠れない)
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  setupReveal();
  setupHeaderShadow();
  setupMobileCta();
  setupHashDeepLink();
});

/* スクロールで現れる要素。data-stagger の中では兄弟順に時間差をつける */
function setupReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || targets.length === 0) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  targets.forEach((el) => {
    const group = el.closest("[data-stagger]");
    if (group) {
      const siblings = Array.from(group.querySelectorAll(".reveal"));
      const index = siblings.indexOf(el);
      el.style.animationDelay = `${index * 0.12}s`;
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px" },
  );

  targets.forEach((el) => observer.observe(el));
}

/* スクロールするとヘッダーにうっすら影が付く */
function setupHeaderShadow() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const update = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 4);
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* スマホ固定CTA: お問い合わせセクションが見えている間は隠す */
function setupMobileCta() {
  const bar = document.getElementById("mobile-cta");
  const contact = document.getElementById("contact");
  if (!bar || !contact || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        bar.classList.toggle("is-hidden", entry.isIntersecting);
      });
    },
    { threshold: 0.15 },
  );

  observer.observe(contact);
}

/* ハッシュ直リンク(#work-taskbot 等)で開いたとき、
   フォント読み込み後に位置がずれないよう再スクロールする */
function setupHashDeepLink() {
  const hash = window.location.hash;
  if (!hash) return;

  const target = document.querySelector(hash);
  if (!target) return;

  // 提案文からの直リンクで届いた作品はすぐ表示状態にする
  if (target.classList.contains("reveal")) {
    target.style.animationDelay = "0s";
    target.classList.add("is-visible");
  }

  const scrollToTarget = () => {
    target.scrollIntoView({ block: "start" });
  };

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(scrollToTarget);
  } else {
    window.addEventListener("load", scrollToTarget, { once: true });
  }
}
