const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');
ctx.lineCap = 'round';
ctx.lineJoin = 'miter';

let isDrawing = false;
let direction = true;
let [x, y] = [0, 0];
let color = 0;
function draw(e) {
  ctx.strokeStyle = `hsl(${color},100%,50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  [x, y] = [e.offsetX, e.offsetY];
  ctx.lineTo(x, y);
  ctx.stroke();
  color++;

  if (ctx.lineWidth >= 200 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

  if (color >= 360) {
    color = 0;
  }
}

window.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    draw(e);
  }
});
window.addEventListener('mousedown', (e) => {
  [x, y] = [e.offsetX, e.offsetY];
  isDrawing = true;
});

window.addEventListener('mouseup', () => {
  isDrawing = false;
});
