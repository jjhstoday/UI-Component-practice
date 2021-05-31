const renderTime = (() => {
  // 한번만 실행된다.
  const $hourHand = document.querySelector('.hand.hour');
  const $minuteHand = document.querySelector('.hand.minute');
  const $secondHand = document.querySelector('.hand.second');

  return () => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // 초침: 1초당 6도
    $secondHand.style.setProperty('--deg', seconds * 6);
    // 분침: 1분당 6도, 1초당 0.1도(6/60)
    $minuteHand.style.setProperty('--deg', minutes * 6 + seconds * 0.1);
    // 시침: 1시간당 30도, 1분당 0.5도(30/60), 1초당 (0.5/60)
    $hourHand.style.setProperty(
      '--deg',
      hours * 30 + minutes * 0.5 + seconds * (0.5 / 60)
    );
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  setInterval(renderTime, 1000);
});
