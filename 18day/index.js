const timeNodes = [...document.querySelectorAll('.videos > [data-time]')];

const sumOfSeconds = timeNodes
  .map((node) => node.dataset.time)
  .map((time) => {
    [min, sec] = time.split(':').map(parseFloat);
    return min * 60 + sec;
  })
  .reduce((total, secs) => total + secs);

const hours = Math.floor(sumOfSeconds / 3600);
const mins = Math.floor(sumOfSeconds / 60) % 60;
const seconds = sumOfSeconds % 60;

console.log(hours, mins, seconds);
