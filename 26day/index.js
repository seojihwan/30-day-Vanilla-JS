const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  console.log('enter');
  this.classList.add('trigger-enter');
  setTimeout(() => {
    this.classList.contains('trigger-enter') &&
      this.classList.add('trigger-enter-active');
  }, 100);
  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  dropdown.getBindinga;
  const dropdownCoords = dropdown.getBoundingClientRect();
  console.log(dropdownCoords);
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  console.log(coords);
  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty(
    'transform',
    `translate(${coords.left}px,${coords.top}px)`
  );
}
function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  console.log('leave');
  background.classList.remove('open');
}
triggers.forEach((trigger) =>
  trigger.addEventListener('mouseenter', handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener('mouseleave', handleLeave)
);
