//DATES

// let myDate= new Date()
// console.log(myDate);

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toTimeString())

// console.log(typeof(myDate)) //Object

// const time = myDate.getDate()
// console.log(time)

// let myCreatedDate = new Date(2023,0,23)  // MONTH 0 SE START HOTE H
// let myCreatedDate = new Date(2023,0,23,5,3) 
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


// let myTimeStamp = Date.now();
// // console.log(myTimeStamp)
// // console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000)) //in sec

let newDate = new Date()
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday: "long",

})
        


