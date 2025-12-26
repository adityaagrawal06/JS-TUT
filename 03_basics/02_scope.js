
// {} // when comes with function or if else it is called scope

const { useReducer } = require("react")

// // var c=300
// let a= 400   //global scope
// if(true) {
//     let a =20    //local scope      
//     const b =20
//     // var c = 30
//     console.log(a); //20
    
// }
// // console.log(a); // here it will show not available bcz declared in scope
// // console.log(b); // here it will show not available bcz declared in scope
// // console.log(c); //30 this i swhy we dont use var

// console.log(a); //400

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];                  // i is a local scope
    
// }



//*****nested scope*******//

function one(){
    const username = "aditya"   //act as global scope for two

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)  //local scope for one

    two()

}
one()





if(true){
    const username = "aditya"
    if(username === "aditya"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username);


