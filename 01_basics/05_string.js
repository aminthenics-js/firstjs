const name = "Aminur"
const repoCount = 2

// console.log(name + repoCount + " Value");  // OutDated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const discordName = new String('Aminur-zxr-qdr')

console.log(discordName[3]);
console.log(discordName.__proto__);


console.log(discordName.length);
console.log(discordName.toUpperCase());
console.log(discordName.charAt(4));
console.log(discordName.indexOf('r'));


const newString = discordName.substring(1, 5)
console.log(newString);


const anotherString = discordName.slice(-4, 6)
console.log(anotherString);


const newStringOne = "   Aminur   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://github.com/aminthenics js"
console.log(url.replace(' ', '-'))

console.log(url.includes('amin'));
console.log(url.includes('Aminur'));


console.log(discordName.split('-'));