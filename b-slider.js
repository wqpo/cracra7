document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.blog-slide');  // 変更：'hero-slide' → 'blog-slide'
    const dotsContainer = document.querySelector('.blog-dots-container');  // ドットのコンテナ
    const prevButton = document.querySelector('.blog-prev');  // 変更：'hero-prev' → 'blog-prev'
    const nextButton = document.querySelector('.blog-next');  // 変更：'hero-next' → 'blog-next'
    let currentIndex = 0;
    const totalSlides = slides.length;

    // ドットの生成
    function createDots() {
        // 現在のドットをクリア
        dotsContainer.innerHTML = '';
        // 新しいドットを生成
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('blog-dot');
            dot.addEventListener('click', function() {
                showSlide(i);
                currentIndex = i;
            });
            dotsContainer.appendChild(dot);
        }
    }

    // 初期設定：最初のスライドとドットをアクティブにする
    createDots();  // ドットを動的に生成
    const dots = document.querySelectorAll('.blog-dot');  // ドットの再取得
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');

    // スライドを表示する関数
    function showSlide(index) {
        // すべてのスライドとドットを非アクティブにする
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // 新しいスライドとドットをアクティブにする
        slides[index].classList.add('active');
        dots[index].classList.add('active');

        // フェードイン・フェードアウトのアニメーション
        slides[index].style.transition = 'opacity 1s ease-in-out';
        slides[index].style.opacity = 1;  // 新しいスライドをフェードイン
        // 他のスライドをフェードアウト
        slides.forEach((slide, i) => {
            if (i !== index) {
                slide.style.opacity = 0;  // すべての他のスライドは透明に
            }
        });

        // スライドの動きにアニメーションを追加
        const slideWidth = slides[0].offsetWidth;  // 各スライドの幅を取得
        document.querySelector('.blog-slider').style.transition = 'transform 0.5s ease-in-out';  // スライダー全体にアニメーションを追加
        document.querySelector('.blog-slider').style.transform = `translateX(-${slideWidth * index}px)`;
    }

    // 次のスライドに移動する関数
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // 前のスライドに移動する関数
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    // "Next" ボタンのクリックイベント
    nextButton.addEventListener('click', function() {
        nextSlide();
    });

    // "Prev" ボタンのクリックイベント
    prevButton.addEventListener('click', function() {
        prevSlide();
    });

    // 自動スライド：4秒ごとに次のスライドへ
    setInterval(nextSlide, 4000);

});
