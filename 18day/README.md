### 18 day 

##### 결과 


```js

// spread를 이용하여 NodeList가 아닌 Array로 만들기
const timeNodes = [...document.querySelectorAll('.videos > [data-time]')];

// map을 이용하여 각 element의 분과 시간을 분리하여 합하고 
// reduce를 이용하여 모든 element의 값을 합한다.
const sumOfSeconds = timeNodes
  .map((node) => node.dataset.time)
  .map((time) => {
    [min, sec] = time.split(':').map(parseFloat);
    return min * 60 + sec;
  })
  .reduce((total, secs) => total + secs);


// 더해진 시간을 이용하여 총 소요 시간, 분, 초를 계산한다.
const hours = Math.floor(sumOfSeconds / 3600);
const mins = Math.floor(sumOfSeconds / 60) % 60;
const seconds = sumOfSeconds % 60;

console.log(hours, mins, seconds);
//4 58 58
```
