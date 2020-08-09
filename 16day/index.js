const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function handleMousemove(event) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = event;

  if (this !== event.target) {
    x += event.target.offsetLeft;
    y += event.target.offsetTop;
  }
  x = Math.round((x / width) * 100) - 50;
  y = Math.round((y / height) * 100) - 50;

  text.style.textShadow = `${x}px ${y}px 0 rgba(111,111,111)`;
}

function throttle(func, wait = 30) {
  let timeout;
  return function () {
    let args = arguments;
    if (!timeout) {
      timeout = setTimeout(
        function () {
          timeout = null;
          func.call(this, args[0]);
        }.bind(this),
        wait
      );
    }
  };
}

hero.addEventListener('mousemove', throttle(handleMousemove));
