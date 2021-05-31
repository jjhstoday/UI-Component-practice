import { useEffect, useRef } from 'react';

const useAnalogClock = () => {
  const $hourHand = useRef(null);
  const $minuteHand = useRef(null);
  const $secondHand = useRef(null);

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date();

      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      // 초침: 1초당 6도
      $secondHand.current.style.setProperty('--deg', seconds * 6);
      // 분침: 1분당 6도, 1초당 0.1도(6/60)
      $minuteHand.current.style.setProperty(
        '--deg',
        minutes * 6 + seconds * 0.1
      );
      // 시침: 1시간당 30도, 1분당 0.5도(30/60), 1초당 (0.5/60)
      $hourHand.current.style.setProperty(
        '--deg',
        hours * 30 + minutes * 0.5 + seconds * (0.5 / 60)
      );
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return [$hourHand, $minuteHand, $secondHand];
};

export default useAnalogClock;
