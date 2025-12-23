// primitive tyoe(call by value)

// 7 types : string, number , boolean , null , undefined , symbol , BigInt

// js is a dynamically type language as no need to declare type of a variable or const
// no decimal special categorisation in js like float , all numbers

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid) // False



// Reference type or non premitive (call by reference)

// Array, Objects , Functions

const heroes =["shaktiman","naagraj", "doga"]

// let myobj = {
//     name: Aditya,
//     age: 20,

// }

// curly bracket k andar object h

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof(myFunction)) // function, said as object function

console.log(typeof(heroes)) //object