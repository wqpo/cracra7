document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    const prevButton = document.querySelector('.hero-prev');
    const nextButton = document.querySelector('.hero-next');
    let currentIndex = 0;
    const totalSlides = slides.length;

    // 初期設定：最初のスライドとドットをアクティブにする
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

        // hero-sliderのtransformを使ってスライドを動かす
        const slideWidth = slides[0].offsetWidth; // 各スライドの幅を取得
        document.querySelector('.hero-slider').style.transition = 'transform 0.5s ease-in-out'; // スライドの動きにアニメーションを追加
        document.querySelector('.hero-slider').style.transform = `translateX(-${slideWidth * index}px)`;
    }

    // 次のスライドに移動する関数
    function nextSlide() {
        // 最後のスライドから最初のスライドに進む時も右方向に進む
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

    // ドットをクリックしてスライドを移動
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
            currentIndex = index;
        });
    });

    // 自動スライド：4秒ごとに次のスライドへ
    setInterval(nextSlide, 4000); // 4000ミリ秒 = 4秒
});
