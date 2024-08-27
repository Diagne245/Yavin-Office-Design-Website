// Stat Counter Effect ---------------------------
const stats = [328, 128, 285, 159];
const duration = 1500;
let isCounting = false;

const statsCounter = () => {
  const statControls = document.querySelectorAll('.stat-control');
  isCounting = true;

  let index = 0;
  statControls.forEach((statEl) => {
    for (let i = 0; i <= stats[index]; i++) {
      setTimeout(() => {
        statEl.querySelector('.stat').innerText = i;
      }, (i * duration) / stats[index]);
      i++;
    }
    index++;
  });
};

const resetCounter = () => {
  const statControls = document.querySelectorAll('.stat-control');
  statControls.forEach((statEl) => {
    statEl.querySelector('.stat').innerText = '0';
  });

  isCounting = false;
};

// Set the limit where the counters reset or restart
const getCounterBottomStart = () => {
  // Case stats are stacked -------
  let counterBottomStart;
  window.matchMedia('( max-width: 664px)').matches &&
    (counterBottomStart = 1800);
  window.matchMedia('( min-width: 665px) and (max-width: 920px').matches &&
    (counterBottomStart = 1280);

  // Large Screens
  window.matchMedia('( min-width: 921px)').matches &&
    (counterBottomStart = 960);

  // Landscape mode
  window.matchMedia('(orientation:landscape) and (max-height: 600px)')
    .matches && (counterBottomStart = 1600);

  return counterBottomStart;
};

const handleCounter = () => {
  // Stats Counters running when in the viewport
  isCounting === false &&
    window.scrollY > 440 &&
    window.scrollY < getCounterBottomStart() &&
    statsCounter();

  (window.scrollY < 440 || window.scrollY > getCounterBottomStart()) &&
    resetCounter();
};

export default handleCounter;
