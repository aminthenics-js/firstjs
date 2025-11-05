// Primitive
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, Bigint.

const score = 200
const scoreValue = 200.6

const isLoggedIn = false
const outsideTemp = null
let userEmail;    // Readability matter

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 23472094744730n       // Bigint


// Reference(Non-Primitive)
// Array, Objects, Functions.

const heros = ["superman", "Knull", "Venom"]   // Array
let myObj = {
    name: "Aminur",
    age: 19
} 
 // Object

 const myFunction = function(){
    console.log("Hello World!");  
 }
 console.log(typeof bigNumber);
 console.log(typeof outsideTemp);
console.log(typeof myFunction);   //ObjectFunction
