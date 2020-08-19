const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
const video = document.querySelector('video');

let isClick = false;

function handleDrag(e) {
  if (!isClick) return;

  // offsetParent는 자신이(element) 포함되는 위치가 정해진 element를 가리킴
  // offsetTop은 offsetParent에 대한 Top값
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;

  // e.pageY는 document에 대한 거리, e.offsetY는 targetNode에서의 거리이다.
  // const y = e.pageY - this.offsetTop === e.offsetY // True 라고 생각했지만
  // 테두리 때문인지 border가 아닌 곳에서는 1의 차이가 났다.
  const max = 3;
  const min = 0.3;
  const height = Math.round(percent * 100) + '%';
  const videoSpeed = percent * (max - min) + min;

  speedBar.style.height = height;
  speedBar.innerHTML = `${videoSpeed.toFixed(2)}x`;
  video.playbackRate = videoSpeed;
}
speed.addEventListener('mousedown', () => {
  isClick = true;
});
speed.addEventListener('mouseup', () => {
  isClick = false;
});
speed.addEventListener('mouseleave', () => {
  isClick = false;
});
speed.addEventListener('mousemove', handleDrag);
