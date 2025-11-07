// +++++++++ Number +++++++++

const gameScore = 500
console.log(gameScore);

const balance = new Number(500)
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(4));


const otherNumber = 185.93

console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));




// ++++++++ Mathematics +++++++++


console.log(Math.abs(-9));
console.log(Math.round(6.9));
console.log(Math.round(6.4));
console.log(Math.ceil(9.94));
console.log(Math.floor(9.994));
console.log(Math.max(4, 6, 7, 3, 7));
console.log(Math.min(4, 6, 7, 3, 7));


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.ceil(Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 9
const max = 19

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

