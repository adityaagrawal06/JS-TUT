// PROMISE CREATION

const promiseOne = new Promise(function(resolve,reject){
    //Do any async task
    // DB calls,cryptography,network callls

    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})
//consumption

promiseOne.then(function(){    // direct connection with resolve
    console.log("Promise consumed");
    
}) 


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
    
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "CHai", email:"chai@example.com"});
    },1000)
}).then(function(user){
    console.log(user);  // upar ka data aa gya
    
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "hitesh", password: "123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

 promiseFour
.then((user)=>{
    console.log(user);
    return user.username
    
})
.then((username)=>{ //chaining krke value extract kr sktre h
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("The promise either resolved or rejected");
    
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascipt", password: "123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
//    const response =  await promiseFive 
//    console.log(response);  // ok when false  // directly error ko handle nhi kr skte 
   
    try {
        const response =  await promiseFive 
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}


consumePromiseFive();



// async function getAllUsers(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response); // ye aayega
        
//         // const data=response.json()  // ye nhi aayega kyun ki time lag rha so isko bhi await krana padega
//         // console.log(data);

//         const data = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log("E:",error);
        
//     }
    
// }
// getAllUsers()



fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(data)
{
    console.log(data);
    
})
.catch(function(error){
    console.log(error);
    
})