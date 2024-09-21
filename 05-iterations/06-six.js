// const coding= ["html", "css", "javascript", "react", "node", "python"]

// const  values = coding.forEach( (item)  => {

//     // console.log(item);
//     return item // for each doesnt return any values 
// })

// console.log(values);


// const myNums = [ 1,2 ,3, 4, 5,6, 7, 8, 9, 10 ]

// const newNums = myNums.filter( (num) => num >= 5 )
// const newNums = myNums.filter( (num) => {
    // return num < 4 // when using {}(scopes) use return
// } ) 
// console.log(newNums);

const myNums = [ 1,2 ,3, 4, 5,6, 7, 8, 9, 10 ]

const newNums =[]

myNums.forEach( ( num) => {
    if (num >= 4) {
        newNums.push(num)
        
    }
} )
console.log(newNums);







 
