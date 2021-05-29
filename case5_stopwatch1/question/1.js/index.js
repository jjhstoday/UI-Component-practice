document.querySelector('.stopwatch').onclick = (() => {
  let isRunning = false;
  let elapsedTime = { mm: 0, ss: 0, ms: 0 };
  let laps = [];

  const [$btnStartOrStop, $btnResetOrLap] = document.querySelectorAll(
    '.stopwatch > .control'
  );

  // 1) 스톱워치의 경과 시간을 '00:00:00' 형식의 문자열로 변환한다.
  const formatElapsedTime = (() => {
    // 1 => '01', 10 => '10'
    // Do Something Here!
    const format = n => (n < 10 ? '0' + n : n + '');
    return ({ mm, ss, ms }) => `${format(mm)}:${format(ss)}:${format(ms)}`;
  })();

  // 2) 스톱워치의 경과 시간을 렌더링한다.
  const renderElapsedTime = (() => {
    // Do Something Here!
    const $display = document.querySelector('.stopwatch > .display');
    return () => {
      $display.textContent = formatElapsedTime(elapsedTime);
    };
  })();

  // 3) 랩 타임을 렌더링한다.
  const renderLaps = (() => {
    // Do Something Here!
    const $laps = document.querySelector('.stopwatch > .laps');

    const createLapElement = (newLap, index) => {
      const $fragment = document.createDocumentFragment();

      const $index = document.createElement('div');
      $index.textContent = index;
      $fragment.appendChild($index);

      const $newLap = document.createElement('div');
      $newLap.textContent = formatElapsedTime(newLap);
      $fragment.appendChild($newLap);

      $laps.appendChild($fragment);

      $laps.style.display = 'grid';
    };

    const removeAllLapElement = () => {
      document
        .querySelectorAll('.laps > div:not(.lap-title')
        .forEach($lap => $lap.remove());
      $laps.style.display = 'none';
    };

    return () => {
      const { length } = laps;

      if (length) {
        const newLap = laps[length - 1];
        createLapElement(newLap, length);
      } else {
        removeAllLapElement();
      }
    };
  })();

  // 4) Start/Stop 버튼 클릭 이벤트 핸들러
  const handleBtnStartOrStop = (() => {
    // Do Something Here!
    let timerId = null;

    const start = () => {
      let { mm, ss, ms } = elapsedTime;

      timerId = setInterval(() => {
        ms += 1;
        if (ms >= 100) {
          ss += 1;
          ms = 0;
        }
        if (ss >= 60) {
          mm += 1;
          ss = 0;
        }

        $btnResetOrLap.disabled = !(mm + ss + ms);

        elapsedTime = { mm, ss, ms };
        renderElapsedTime();
      }, 10);
    };

    const stop = () => clearInterval(timerId);

    return () => {
      isRunning ? stop() : start();
      isRunning = !isRunning;

      $btnStartOrStop.textContent = isRunning ? 'Stop' : 'Start';
      $btnResetOrLap.textContent = isRunning ? 'Lap' : 'Reset';
    };
  })();

  // 5) Reset/Lap 버튼 클릭 이벤트 핸들러
  const handleBtnResetOrLap = (() => {
    // Do Something Here!
    const reset = () => {
      $btnResetOrLap.disabled = true;

      elapsedTime = { mm: 0, ss: 0, ms: 0 };
      renderElapsedTime();

      laps = [];
      renderLaps();
    };

    const addLap = () => {
      laps = [...laps, elapsedTime];
      renderLaps();
    };

    return () => {
      isRunning ? addLap() : reset();
    };
  })();

  return ({ target }) => {
    if (!target.classList.contains('control')) return;
    target === $btnStartOrStop ? handleBtnStartOrStop() : handleBtnResetOrLap();
  };
})();
