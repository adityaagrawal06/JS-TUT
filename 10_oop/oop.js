const user = {
    username: "Aditya",
    loginCount: 8,
    signedIn: true,

    gotUserDetails: function(){
        // console.log("got user details form Database");
        // console.log(`username: ${this.username}`);
        console.log(this);
        
        
        
    }

}

// console.log(user.gotUserDetails());
  
// const user2 = {
//     username: "Adi",
//     loginCount: 10,
//     signedIn: false,

//     gotUserDetails: function(){
//         // console.log("got user details form Database");
//         // console.log(`username: ${this.username}`);
//         console.log(this);
        
        
        
//     }

// }

// for making new user everytim e we have to write again and again 
// to avoid these CONSTRUCTOR function comes in picture

// const promiseOne = new Promise();
// const DAte = new Date();

// "new" keyword is a constructor function and allows u to make multiple instances from a single object literal




function User(username,loginCount, isLoggedIn){
    this.username = username;  
    this.loginCount=loginCount;
    this.isLoggedIn= isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }


    return this;  // no need of this // implicitilty define hota h 
}

//WITHOUT USE OF NEW

// const userOne = User("aditya",12,true);
// const userTwo = User("adi",11,false);
// console.log(userOne); // userTwo ki value aa jayegi aise


//WITH USE OF NEW



const userOne = new User("aditya",12,true);
const userTwo = new User("adi",11,false);
console.log(userOne); //no overwrite this time
console.log(userOne.constructor); // gives function:user


// by using new keyword 
// 1.an empty object is created which is called instace,
// 2.constructor function ic called dur to new keyword
// 3.this keyword is injected in it
// 4. we got it in function


