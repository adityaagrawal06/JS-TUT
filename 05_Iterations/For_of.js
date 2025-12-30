// *************FOR OF************88

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings ="Hello World"
// for (const greet of greetings) {
//     console.log(greet);
    
// }


// *************MAPS*************

const map = new Map()   // => unique values
map.set('IN', 'india')    
map.set('USA','united states of america')
map.set('FR','France')
map.set('IN', 'india')    
// console.log(map);

// for (const key of map) { // all values
// for (const [key,value] of map) {   // alag laag print kr skte h
//     console.log(key,':-', value)
// }


const myObj = {
    'Game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key,value] of myObj) {    // not iterable coming   therefore this doesnot work for OBJECTS
    console.log(key, " ",value);
    
}