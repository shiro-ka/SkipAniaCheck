// SkipAniaCheck - WIXOSS年齢確認自動スキップ

// ページ読み込み完了後に実行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', skipAgeCheck);
} else {
  skipAgeCheck();
}

function skipAgeCheck() {
  // ageComfirm関数を実行
  if (typeof window.ageComfirm === 'function') {
    try {
      window.ageComfirm();
    } catch (error) {
      console.error('[SkipAniaCheck] エラー:', error);
    }
  } else {
    // 関数が見つからない場合、少し待ってから再試行
    setTimeout(function () {
      if (typeof window.ageComfirm === 'function') {
        try {
          window.ageComfirm();
        } catch (error) {
          console.error('[SkipAniaCheck] エラー:', error);
        }
      } else {
        // 直接リンクをクリック
        var yesLink = document.querySelector('a[href^="javascript:ageComfirm"]');
        if (yesLink) {
          try {
            yesLink.click();
          } catch (error) {
            console.error('[SkipAniaCheck] クリックエラー:', error);
          }
        } else {
          console.warn('[SkipAniaCheck] 年齢確認要素が見つかりませんでした');
        }
      }
    }, 100);
  }
}