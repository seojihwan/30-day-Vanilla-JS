const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollRight;

function throttle(func, wait = 1) {
  let timeout;
  return function () {
    let args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.call(this, args[0]);
      }, wait);
    }
  };
}

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.classList.add('active');
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener(
  'mousemove',
  throttle((e) => {
    if (!isDown || !slider.classList.contains('active')) return;
    console.count('isDown');
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    console.log(walk);
    slider.scrollLeft = scrollLeft - walk;
  })
);
