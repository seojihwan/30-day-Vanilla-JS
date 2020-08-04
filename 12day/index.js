const pressed = [];
const secretCode = 'jihwan';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);

  pressed.splice(0, pressed.length - secretCode.length);
  console.log(pressed);
  if (pressed.join('').includes(secretCode)) {
    cornify_add();
  }
});
