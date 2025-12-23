const name = "Aditya"
const repCount = 2

// console.log(name + repCount +"Value"); // not prefered

console.log(`Hello my name is  ${name} and my repo count is ${repCount}`)

const gameName = new String('Aditya-Ag-com')   // diferent method to declare string

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4); //no negative values 
console.log(newString);

const anotherString = gameName.slice(-7,4) ;//-- matlb reverse se dekhega //-ve in slice only
console.log(anotherString);

const newStringOne = "    Aditya     ";
console.log(newStringOne.trim());
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());

const url="https://hitesh.com/hitesh%20choudary";

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'))