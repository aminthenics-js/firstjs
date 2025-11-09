// Date 

let myDate = new Date()

console.log(myDate.toString());  /// Sun Nov 09 2025 18:04:42 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());
console.log(myDate.toJSON());       // 2025-11-09T18:04:42.241Z
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


let myCreatedDate = new Date(2025, 10, 10)
let newCreatedDate = new Date(2025, 10, 10, 0, 13)

console.log(myCreatedDate.toDateString());
console.log(newCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(newCreatedDate.getTime());
console.log(Math.round(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());
console.log(newDate.getDate());

// console.log(`The date is ${newDate.getFullYear()}`);


console.log(newDate.toLocaleString('default', {
        weekday: "long",
            month: "numeric"
            }))