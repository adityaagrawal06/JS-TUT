// console.log(2 >= 1)
// console.log(2 < 1)

//when not same data type

// console.log("2" > 1) //true
// console.log("02" > 1) //true 
// try to have same datatype

console.log(null > 0) //false
console.log(null == 0) //false 
console.log(null >= 0) //true 
console.log(undefined >= 0) //false always
//not predicatble results 
// check ==  and comparison operator > < <= >= works differenty 
// in caparision null is converted to number ie is 0 and in check it is not
// we have to avoid these

// === strict check, also check the datatype

console.log("2"==2); //true
console.log("2"===2); //false




