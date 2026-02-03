const user = {
    username: "Aditya",
    loginCount: 8,
    signedIn: true,

    gotUserDetails: function(){
        console.log("got user details form Database");
        
    }
}

console.log(user.gotUserDetails());


