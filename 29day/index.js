let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;

  clearInterval(countdown);
  displayTimeLeft(seconds);
  displayEndTime(then);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) return;

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const remainMinutes = Math.floor(seconds / 60);
  const remainSeconds = Math.floor(seconds % 60);
  const display = `${remainMinutes}: ${
    remainSeconds < 10 ? '0' : ''
  }${remainSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(time) {
  const end = new Date(time);
  const hour = end.getHours();
  const adjustHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  const meridiem = hour < 12 ? 'AM' : 'PM';
  endTime.textContent = `End Time:${adjustHour}:${
    minutes < 10 ? '0' : ''
  }${minutes} ${meridiem}`;
}

function handleClick() {
  timer(this.dataset.time);
}
buttons.forEach((button) => button.addEventListener('click', handleClick));
document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
