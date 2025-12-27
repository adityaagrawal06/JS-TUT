// Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log(`DB connected`);
    
// }
// chai()


(function chai(){        //named IIFE
    console.log(`DB connected`);
    
})();          //For immediate function and to remove global scope pollution

( (name) => {        //unnamed IIFE
    console.log(`DB connected ${name}`)   // not working bcz the above one is not ended by ;
})('aditya')   //function 1st execution 2nd
