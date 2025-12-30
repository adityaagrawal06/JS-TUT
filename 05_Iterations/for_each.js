const coding = ["js","cpp","ruby","java","python"]

// coding.forEach( function(item){
//     console.log(item);
// })


// coding.forEach( (value)=> {
// console.log(value);

// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)


// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
    
// })

const myCoding =[
    {
        langName : "javascript",
        langFile : "js"
    },
    {
        langName : "java",
        langFile : "java"
    },
    {
        langName : "python",
        langFile : "py"
    },

] 

myCoding.forEach((item) => {
    console.log(item.langName);
    
})