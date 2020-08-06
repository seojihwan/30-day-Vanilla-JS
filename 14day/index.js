// start with strings, numbers and booleans

let age = 100;
let age2 = age;
console.log(age, age2); // 100 100
age = 200;
console.log(age, age2); // 200 100

let name = 'ji';
let name2 = name;
console.log(name, name2); // ji ji
name = 'jihwan';
console.log(name, name2); // jihwan ji

// object와 array는 다른 결과가 나타난다.

// Let's say we have an array
const players = ['Jihwan', 'Sarah', 'Ryan', 'Poppy'];

const team = players;

team[3] = 'Julia';
// team은 players와 같은 Array를 참조하고 있으므로, 아래의 결과가 나타난다.

// ['Jihwan', 'Sarah', 'Ryan', 'Julia'] ['Jihwan', 'Sarah', 'Ryan', 'Julia']
console.log(players, team);

// deep copy
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);

// with Objects
const person = {
  name: 'Ji hwan',
  age: 80,
};

const captain = person;
captain.number = 99;

// captain은 person과 같은 Object를 참조하고 있으므로, 아래의 결과가 나타난다.
console.log(person); // {age: 80, name: 'Ji hwan', number: 99}

captain2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(captain2); // {age: 12, name: 'Ji hwan', number: 99}

captain3 = { ...person };
console.log(captain3); // {age: 80, name: 'Ji hwan', number: 99}

const ji = {
  name: 'Ji',
  age: 100,
  social: {
    twitter: '@jihwan',
    facebook: 'jihwan.dev',
  },
};

const ji2 = Object.assign({}, ji);
ji2.social.facebook = 'ji.dev';

// object.assign은 1 level deep copy만 이루어진다.

console.log(ji, ji2); // {age: 100, name: 'Ji', social: {facebook: 'ji.dev', twitter: '@jihwan'}}
//  {age: 100, name: 'Ji', social: {facebook: 'ji.dev', twitter: '@jihwan'}}

// deep copy 방법중 하나
const dev2 = JSON.parse(JSON.stringify(ji));

console.log(dev2); // {age: 100, name: 'Ji', social: {facebook: 'ji.dev', twitter: '@jihwan'}}
