document.addEventListener('DOMContentLoaded', () => {
    console.log('USJのウェブサイトにようこそ!');

    // Colorboxの設定（YouTube動画リンク用）
    if (typeof jQuery !== 'undefined' && $.colorbox) {
        $("#section03 a").colorbox({
            iframe: true,
            innerWidth: 800,
            innerHeight: 600,
            fixed: true
        });
    } else {
        console.warn("Colorboxが正しく読み込まれていません。");
    }

    // 現在のページのナビゲーションリンクをハイライト
    const navLinks = document.querySelectorAll("#nav li a");
    const currentPage = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // 現在のページに対応するリンクにクラスを追加
        }
    });

    // スムーズスクロールの設定（アトラクションリンク用）
    const attractionLinks = document.querySelectorAll("section#section03 a");

    attractionLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").split("#")[1];
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            } else {
                console.warn(`ターゲット要素 #${targetId} が見つかりませんでした。`);
            }
        });
    });

    // バナー画像のスライドショー
    const banner = document.querySelector("img");
    const bannerImages = [
        "img/u.jpg", // 初期バナー画像
        "img/g.jpg", // ハリーポッターエリア
        "img/d.jpg", // スパイダーマン
        "img/h.jpg"  // ジュラシックパーク
    ];
    let currentBannerIndex = 0;

    if (banner) {
        setInterval(() => {
            currentBannerIndex = (currentBannerIndex + 1) % bannerImages.length;
            banner.src = bannerImages[currentBannerIndex];
        }, 5000); // 5秒ごとに画像を切り替え
    } else {
        console.warn("バナー画像要素が見つかりませんでした。");
    }

    console.log("ページが正常に読み込まれました。");
});
