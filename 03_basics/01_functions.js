 
 
//  function sayMyname (){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
//  }

// sayMyname()  //by () => execution  //without () => reference


// function AddTwoNos (number1, number2) {   //nuber1 and number2 are called parameters
//     console.log(number1+number2);
    
// }

// // // AddTwoNos(3,4) //7     // 3and 4 are called arguments
// // AddTwoNos(3,"4") //34
// // AddTwoNos(3,"a") // 3a
// // AddTwoNos(3,null) //3


// const result = AddTwoNos(3,5)  //8
// console.log(result); //undefined



function AddTwoNos (number1, number2) {   
    
    // let result = number1+number2;
    // return result                  //return k baad koi code nhi work krega
    return number1+number2
    
}

const ans = AddTwoNos(3,5)
// console.log(ans);

// function  logInUserMessage (username){
//     if(!username){
//         console.log("please enter the username")
//         return
//     }

//     return`${username} just logged in`
// }


function  logInUserMessage (username="sam"){     //default value
    if(!username){
        console.log("please enter the username")
        return
    }

    return`${username} just logged in`
}

// console.log(logInUserMessage("aditya"))
console.log(logInUserMessage())  //undefined just logged in










