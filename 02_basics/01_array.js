//   Array 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Hawkeye", "Batman", "Redhood"]
const myArr2 = new Array(1, 2, 3, 4, 5)

 console.log(myArr[0]);


//  Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr)


myArr.unshift(7)
myArr.shift()

console.log(myArr);


console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));



const newArr = myArr.join()

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


//   Slice, Splice


console.log("Amin ", myArr);

const myNewArr1 = myArr.slice(1, 3)
console.log(myNewArr1);

console.log("Rahmn ", myArr);


const myNewArr2 = myArr.splice(1, 3)
console.log("AR" , myArr);
console.log(myNewArr2);
