### 9 day 

Regular

```js
console.log('hello');
```

Interpolated

```js
console.log('Hello I am a %s string!', '💩');
```

Styled

```js
console.log(
  '%c I am some great text',
  'font-size:50px; background:red; text-shadow: 10px 10px 0 blue'
);


```

warning!

```js
console.warn('OH NOOO');
```
경고메시지

Error :|
```js
console.error('Shit!');
```
에러메시지

Info
```js
console.info('Crocodiles eat 3-4 people per year');
```
Info 메시지

Testing

```js
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');
```

조건을 만족하지 못하면 assertion error 메시지를 출력한다.

clearing

```js
console.clear();
```
이전의 모든 console메시지를 제거한다.

Viewing DOM Elements

```js
console.log(p);
console.dir(p); 모든 프로퍼티를 출력한다.
```



Grouping together

```js
console.groupCollapsed(`${dog.name}`);
console.log(`This is ${dog.name}`);
console.log(`${dog.name} is ${dog.age} years old`);
console.log(`${dog.name} is ${dog.age * 7} dog years old`);
console.groupEnd(`${dog.name}`);
```
콘솔 메시지를 묶고 collapsed 처리하여 보여준다.

counting

```js
console.count('Wes');
```

timing

```js
console.time('fetching data');
fetch('https://api.github.com/users/seojihwan')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.log(data);
  });
```
 
time에서 timeEnd까지의 처리시간을 보여준다.