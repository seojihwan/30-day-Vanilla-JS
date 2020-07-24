const secondHand = document.querySelector('.sec');
const minuteHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');
const setTransition = (hand, degree) => {
  if (degree === 90) {
    hand.style.transition = '';
  } else {
    hand.style.transition = 'transform 0.5s cubic-bezier(0.27, 1.57, 0.58, 1)';
  }
};

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegree = (seconds / 60) * 360 + 90;
  const minutesDegree = (minutes / 60) * 360 + 90;
  const hoursDegree = (hours / 60) * 360 + 90;

  setTransition(secondHand, secondsDegree);
  setTransition(minuteHand, minutesDegree);
  setTransition(hourHand, hoursDegree);

  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
};

setInterval(setDate, 1000);
