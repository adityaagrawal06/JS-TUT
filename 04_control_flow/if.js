///  IF


// const isUserLoggedIn = true
// const temperature = 41
// if(temperature<50){
//     console.log("less than 50");
    
// }
// else{
//     console.log("temperature is grter than 50 ");
// }


// comparision operators =>  <,>,<= , >= , == , != , === , !==

// let score = 200

// if(score>100){
//     const power = "fly"
//     console.log(power)
// }
// console.log(power) // error


// const balance =1000

// // if(balance>500) console.log("test")   //short hand

// if(balance<500){
//     console.log("less than 500")
// } else if(balance<750){
//     console.log("less than 750")
// } else{
//     console.log("less than 1200")
// }


const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserLoggedIn && debitCard){
    console.log("Allow to buy course");
    
}
if(loggedInFromGoogle||loggedInFromEmail){
    console.log("allowd to login");
    
}

