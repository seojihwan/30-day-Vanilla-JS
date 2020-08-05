const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  let inBetween = false; //콜백함수 내에서 각 checkbox의 상태를 확인
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this.checked ? this : undefined;
}

checkboxes.forEach((checkbox) => checkbox.addEventListener('click', handleCheck));
console.log(checkboxes);
