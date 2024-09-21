
// const myNums =[1,2,3]

// const myTotal = myNums.reduce ( function (accumulator, currentValue) {
        
//     console.log(`acc: ${accumulator} and curr: ${currentValue} `);
    
//         return accumulator + currentValue
// }, 0)
// console.log(myTotal);

// //arrow function
// const myNums =[1,2,3]

// const myTotal = myNums.reduce (  (accumulator, currentValue) =>  accumulator + currentValue, 0 ) // 0 is intial valueconsole.log(myTotal);
//  console.log(myTotal);

const shoppingCart = [
    {
        itemName : " js course ",
        price : 299
    },
    {
        itemName : " ml course ",
        price : 29999
    },
    {
        itemName : " web dev course ",
        price : 2999
    }
]

 const myTotal =shoppingCart.reduce ( (accumulator ,item ) => accumulator + item.price,0)
console.log(myTotal);

