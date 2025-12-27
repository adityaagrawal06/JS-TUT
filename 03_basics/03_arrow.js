const user = {
    username : "aditya",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`);  //this for current context
        // console.log(this)
    }
}

// user.welcomeMessage() //aditya
// user.username ="sam"
// user.welcomeMessage() //sam bcz of this

// console.log(this)  // {} no global conrext thats why , it happens in node


// function chai(){
//     let username = "aditya"
//     console.log(this.username); //undeined  //only working in object
//     console.log(this); //long something something
// }

// chai()  


// const chai = function(){
//     let username = "aditya"
//     console.log(this.username);
// }
// chai()

// const chai = () => {  //arrow function
//     let username = "aditya"
//     console.log(this.username); //undefined  //so no use of this
//     console.log(this); // {} 
// }
// chai()



 
// const addTwo=(num1,num2) => {       //explicit return
//     return num1+num2
// }

// const addTwo=(num1,num2) =>   num1+num2        //implicit return
    // const addTwo=(num1,num2) =>   (num1+num2)     // curly me krenge to return likhna padega


const addTwo=(num1,num2) =>   ({username : "hitesh"}  )     //object ko return krne k liye () daalna hi padega 

console.log(addTwo(3,4))


// const myArray = [2,5,3,4,7]
// myArray.forEach(() =>())

