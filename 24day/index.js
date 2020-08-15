const nav = document.querySelector('#main');

// 부모 요소와의 거리
const topOfNav = nav.offsetTop;

function fixNav() {
  console.log(scrollY, topOfNav);
  if (scrollY > topOfNav) {
    // body에 class를 추가해서 style를 바꾸어준다.
    document.body.classList.add('fixed-nav');
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = '0px';
  }

  //transition을 위해 width를 변화시키는 것이아니라 max-width를 변화시킴
}

window.addEventListener('scroll', fixNav);
