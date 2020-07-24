// array for keyCode
const keys = [65, 83, 68, 70, 71, 72, 74, 75, 76];
// array for soundFile
const keyNames = [
  'boom',
  'clap',
  'hihat',
  'kick',
  'openhat',
  'ride',
  'snare',
  'tink',
  'tom',
];
// wrapper Div
const keysWrapper = document.createElement('div');
keysWrapper.className = 'keysWrapper';
document.body.appendChild(keysWrapper);

// create keyboard and audio element.
keys.forEach((key, idx) => {
  const keyboard = document.createElement('div');
  const audio = document.createElement('audio');
  const keyIdx = document.createElement('div');
  const drumName = document.createElement('div');
  drumName.innerHTML = keyNames[idx];
  drumName.className = 'drumName';
  keyIdx.innerHTML = String.fromCharCode(key).toUpperCase();
  keyIdx.className = 'keyIdx';
  keyboard.className = 'key';
  keyboard.appendChild(keyIdx);
  keyboard.appendChild(drumName);
  keyboard.setAttribute('keyCode', key);
  audio.src = `./sound/${keyNames[idx]}.wav`;
  audio.setAttribute('keyCode', key);
  document.body.appendChild(audio);
  keysWrapper.appendChild(keyboard);
});

// if transition ended classList('playing') is removed.
const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
};

// each keyboards has an transitionend EventListner.
const keyboards = document.querySelectorAll('.key');
keyboards.forEach((keyboard) => {
  keyboard.addEventListener('transitionend', removeTransition);
});

// add classList to downKey and play audio using event.keyCode.
const playAudio = (e) => {
  const downKey = document.querySelector(`.key[keyCode="${e.keyCode}"]`);
  if (!downKey) return;
  downKey.classList.add('playing');
  const audio = document.querySelector(`audio[keyCode="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
};

// window has a keydown EventListner
window.addEventListener('keydown', playAudio);
