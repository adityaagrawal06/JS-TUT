// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //starting me add
// myArr.shift() //starting wala hata dega

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() //changes into string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //3 include nhi hota h

console.log(myn1);
console.log("B ", myArr); // this arrray will not chage


const myn2 = myArr.splice(1, 3) // include 3 as well
console.log("C ", myArr); // array will change and myn2 value will be removed
console.log(myn2);