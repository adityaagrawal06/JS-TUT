 
 
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
// console.log(logInUserMessage())  //undefined just logged in for upar k upar wala case



// function CalculateCartPrice (...num1){   /// ... is rest or spread depending upon uise
//     return num1
// }
// console.log(CalculateCartPrice(200,300,500)); //gives array


function CalculateCartPrice (val1,val2,...num1){   
    return num1
}
console.log(CalculateCartPrice(200,300,500,2000));  //200 300 val1 val2 ho gya


const user ={
    username:"aditya",
    price:"199",
}

function handleObject (anyObject){
    console.log(`username is ${anyObject.username} and its price is ${anyObject.price}`)
} 

// handleObject(user)


handleObject({
    username :  "sam",
    price : "399",
})


const myNewArray = [200,400,600,800,900]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));   //direct pass bhi kr skte h as in object      

















