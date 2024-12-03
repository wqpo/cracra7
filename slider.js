let currentSlide = 0;
// 画像とドットの要素を取得
const slides = document.querySelectorAll('.slide'); // すべての画像
const dots = document.querySelectorAll('.dot'); // ドット
const slider = document.querySelector('.slider'); // スライダー全体

// 前後のボタンを取得
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// 次のスライドを表示
function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // 次のスライド（循環）
    console.log('Next slide:', currentSlide);  // 現在のスライドをログで確認
    updateSlider();
}

// 前のスライドを表示
function showPrevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // 前のスライド（循環）
    console.log('Previous slide:', currentSlide);  // 現在のスライドをログで確認
    updateSlider();
}

// スライダーとドットを更新
function updateSlider() {
    // スライダーの位置を変更
    slider.style.transition = 'transform 1.5s ease-out'; // アニメーションの遅延と動き
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    // すべての画像からactiveクラスを削除
    slides.forEach(slide => slide.classList.remove('active'));
    // すべてのドットからactiveクラスを削除
    dots.forEach(dot => dot.classList.remove('active'));

    // 現在のスライドにフェードインアニメーションを適用
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    // デバッグ用: 現在のスライドをログで確認
    console.log('currentSlide:', currentSlide);
}

// 初期化（最初に1枚目の画像と最初のドットを表示）
updateSlider();

// 「次へ」ボタンのクリックイベント
nextButton.addEventListener('click', showNextSlide);

// 「前へ」ボタンのクリックイベント
prevButton.addEventListener('click', showPrevSlide);

// ドットをクリックした時の動作
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;  // クリックされたドットに対応する画像に変更
        updateSlider();
    });
});

// 自動スライド：4秒ごとに次のスライドへ
setInterval(showNextSlide, 4000); // 4000ミリ秒 = 4秒
