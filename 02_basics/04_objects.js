

// const tinderUser = new Object() //singleton
const tinderUser = {} //same as above //non singleton


tinderUser.Id = "123abc"
tinderUser.name = "samy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Aditya",
            lastname: "Agrawal",
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname); //  ? for in case if full name didnt exist


const obj1 =  {
     1: "a",
     2 : "b",
}

const obj2 ={
    3: "c",
    4: "d",
}

const obj3 = {obj1,obj2} // object k andar object aise

const obj4 = Object.assign({},obj1,obj2) // {} dena chaiye isse obj 1 me koi fark nhi padega
// agar {} ye nhi denge to fir obj1 me changes honge
// console.log(obj4);
// console.log(obj1);

const obj5 = {...obj1,...obj2}  // MOSTLY USED
// console.log(obj5); 

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // all keys in aray //IMPORTANT
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)) ;

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//*************DESTRUCTURINGGGG*********//


const course = {
    courseName : "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh",
}

// course.courseInstructor

const {courseInstructor :instructor} =course
console.log(instructor) ; //better method when we need to use it many times //destructuring

//******************API's*********************** *//

//in form of jason
// {
//     "name": "aditya",
//     "courseName" : "js in hindi",
//     "price": "free"

// }


//in form of arayys

// [ 
//     {},
//     {},
//     {},
// ]
















