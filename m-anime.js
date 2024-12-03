// ページがスクロールされたときにアニメーションを制御
window.addEventListener('scroll', function() {
  // ランチセクションの要素を取得
  var lunchSection = document.getElementById('lunch-services');
  var lunchImage = lunchSection.querySelector('.background-image');
  var lunchText = lunchSection.querySelector('.container');
  var lunchPosition = lunchSection.getBoundingClientRect().top;

  // ランチセクションが画面の50%に到達したら
  if (lunchPosition < window.innerHeight / 0.2) {
    resetAnimation(lunchImage, lunchText, 'lunch');
  }

  // ディナーメニューセクションの要素を取得
  var dinnerSection = document.getElementById('dinner-services');
  var dinnerImage = dinnerSection.querySelector('.background-image');
  var dinnerText = dinnerSection.querySelector('.container');
  var dinnerPosition = dinnerSection.getBoundingClientRect().top;

  // ディナーメニューセクションが画面の50%に到達したら
  if (dinnerPosition < window.innerHeight / 2) {
    resetAnimation(dinnerImage, dinnerText, 'dinner');
  }
});

// アニメーションのリセットを行う関数
function resetAnimation(image, text, section) {
  // 既存のアニメーションを削除
  image.style.animation = 'none';
  text.style.animation = 'none';
  
  // 再度アニメーションを適用（1秒後にアニメーションを再実行）
  setTimeout(function() {
    if (section === 'lunch') {
      image.style.animation = 'slideInBackgroundLunch 1.5s ease-out forwards';
      text.style.animation = 'slideInTextLunch 1.5s ease-out 0.5s forwards';
    } else if (section === 'dinner') {
      image.style.animation = 'slideInBackgroundDinner 1.5s ease-out forwards';
      text.style.animation = 'slideInTextDinner 1.5s ease-out 0.5s forwards';
    }
  }, 50); // 少し遅延を加えて再アニメーションを発火
}
