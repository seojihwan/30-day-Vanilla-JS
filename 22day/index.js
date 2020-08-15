const triggers = document.querySelectorAll('a');
const highLight = document.createElement('span');
highLight.classList.add('highlight');
document.body.appendChild(highLight);

// Element.getBoundingCLientRect()를 이용해서 width, height, Viewport에서의 top, left, right, bottom 값을 얻을 수 있다.
function highLightLink() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords, this.offsetTop);
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highLight.style.width = `${linkCoords.width}px`;
  highLight.style.height = `${linkCoords.height}px`;
  highLight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

// mouseover vs mouseenter
// mouseover event is triggered when the mouse pointer enters the element and it's child elements
// mouseenter event is only triggered when the mouse pointer enters the element
triggers.forEach((a) => a.addEventListener('mouseenter', highLightLink));
