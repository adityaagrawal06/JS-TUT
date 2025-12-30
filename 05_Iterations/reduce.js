const myNums =[1,2,3]

const sum = myNums.reduce((accumulator,currentValue)=> accumulator+currentValue, 0)   // accumulator me start me 0 jaa rha fir jo sum me aa rha vo jaa rha

console.log(sum);



const shoppingCart = [
    {
        itemname: "js course",
        price : 2999,
    },
    {
        itemname: "py course",
        price : 999,
    },
    {
        itemname: "mob dev course",
        price : 5999,
    },
    {
        itemname: "data science course",
        price : 12999,
    },
]


const totalValue = shoppingCart.reduce ((acc,item)=>acc+item.price,0)
console.log(totalValue);
