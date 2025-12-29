// const userEmail = "a@aditya.ai"  //got email
// const userEmail = ""   // dont have user email
// const userEmail = []  // got user email
// if(userEmail){
//     console.log("Got User Email");
// }
// else{
//     console.log("Dont have user email");
// }



//FALSY VALUES

// false, 0 , -0 , BigInt 0n , "" , null , undfined , NaN

// Truthy valuess

// "0", 'false' , " ", [] , {}, function(){}

// if(userEmail.length===0){
//     console.log("array is empty");
    
// }


// const emptyObj = {}
// if(Object.keys(emptyObj).length===0){
//     console.log("object is empty");
// }


// Nullish Coalescing Operstor (??) : null undeined

let val1;
// val1= 5 ?? 10  //5
// val1 = null?? 10 //10
// val1 = undefined ?? 15 //15
val1 = null ?? 10?? 20 //10



console.log(val1) 


//  Terniary Operator

// condition? true : false

const iceTeaPrice =200

iceTeaPrice>=80 ? console.log("morethan 80"): console.log("less tyhan 80");

