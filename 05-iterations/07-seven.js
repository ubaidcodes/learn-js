// const myNums =[1, 2,3,4,5,6,7,8,9,10 ]

// const newNums = myNums.map ( (num) => {return num +10} )
// const newNums = myNums.map ( (num) =>  num * 10 )
//  console.log(newNums);

 //chaining
 const myNums =[1, 2,3,4,5,6,7,8,9,10 ]
 const newNums = myNums
                .map((num) =>num *12)
                .map((num) => num+2)
                .filter( (num) => num <67)

 console.log(newNums);
                

