const accountId = 144553
let accountEmail = "adityaagra06@gmail.com"
var accountPassword = "12345" 
accountCity="Delhi"
let accountState;
// accountId = 2 //not allowed
accountEmail = "gopalbl@gmail.com"
accountPassword = "212121"
accountCity = "Jaipur"
// console.log(accountEmail)

/* Dont use var bcz of issue in block scope and functional scope */
console.table([accountEmail , accountId , accountPassword , accountCity , accountState])