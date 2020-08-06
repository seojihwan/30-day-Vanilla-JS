function debounce(func, wait = 20) {
  let timeout;
  return function () {
    let args = arguments;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(args);
    }, wait);
  };
}

function throttle(func, wait = 20) {
  let timeout;
  return function () {
    let args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func(args);
      }, wait);
    }
  };
}

const sliderImages = document.querySelectorAll('.slide-in');
function checkSlide(e) {
  sliderImages.forEach((sliderImage) => {
    const SlideInAt = window.scrollY + window.innerHeight - sliderImage.height / 2;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = SlideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
