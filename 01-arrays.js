// arrays
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["batman", "superman", "spiderman"]

const myArr2 = new Array(0, 1, 2, 3, 4, 5, 6)

// console.log(myArr[0]);
// console.log(myHeros[2]);

//Array Methods
// 1. length
// 2. push
// 3. pop
// 4. shift
// 5. unshift
// 6. splice
// 7. slice
// 8. indexOf
// 9. includes
// 10. concat
// 11. sort
// 12. reverse

// myArr.push(11, 5 ,4) // adds element at the end
// console.log(myArr);

// myArr2.pop() // removes last element
// console.log(myArr2);

// myArr.unshift(6) // adds element at the beginning
// myArr.shift() // removes first element


// console.log(myArr.includes(5));
// console.log(myArr.indexOf(3));
  
// const newArr =myArr.join()

// console.log(myArr);
// console.log( typeof newArr);

//slcice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log(" B", myArr);


const myn2 = myArr.splice(1,3) // it manipulates the main array  or directly modifies an array by adding, removing, or replacing its elements.

console.log(myn2);
console.log(" C", myArr);



