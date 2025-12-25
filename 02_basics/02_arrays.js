const marvelHeroes = ["thor","Ironman","spiderman"]
const dcHeroes = ["Batman","Supermanman","flash"]

// marvelHeroes.push(dcHeroes)  //array k andar array // direct elemeents join nhi hoga
// console.log(marvelHeroes);
// console.log(marvelHeroes[3]);

// const newHeroes=marvelHeroes.concat(dcHeroes)  // join to arrays
// console.log(newHeroes);


const allNewHeroes= [...marvelHeroes,...dcHeroes] //same work as concat but used more often
console.log(allNewHeroes);

const anotherArray =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = anotherArray.flat(Infinity) //inside we have to give the depth //convert inside array into elemnets
console.log(real_another_array);




console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh")) //convert to array
console.log(Array.from({name: "hitesh"})) //empty array as not able to convert this //INTERESTING CASE
//SHOULD TEEL KEYS OR VALUES KISKA ARRAY BANANA G


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //made an array




