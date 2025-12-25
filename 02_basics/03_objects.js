//  singleton  when we make by constructor
// singleton nhi banta when we make by literals

//OBJECT LITERALS
// Object.create - constructor method

const mySym = Symbol("key1")

 
const JsUser = {
    name: "Aditya", //name ye sab string k jaise jata h
    "full name": "Aditya Agrawal",
    // mySym :"mykey1", //stmbol aise use aise nhi hita h
    [mySym] : "mykey1",
    age : 20,
    location : "Hazaribagh",
    email : "aditya@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"]) //cant be excess by dot method //isme mySym ko string le liya jata h although value same hi aata h
console.log(JsUser[mySym]) //correct syntax


JsUser.email = "adityagra@chatgpt.com" //to change things
// Object.freeze(JsUser) //ab lock ho gya h no changes now
JsUser.email ="adiagra@microsoft.com" // ye implement nhi hoga
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User")
}
// console.log(JsUser.greeting);//Function(anonymous) aayega,that means only reference ,execute nhi hua h
console.log(JsUser.greeting()); 

JsUser.greetingTwo = function(){
  console.log(`Hello JS User,${this.name}`) //this agar same object me krna h to //String interpulation
}
console.log(JsUser.greetingTwo())   
