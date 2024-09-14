//Javascript is a Dynamic language because of flexibility

//Primitive Data Types
// 1. number
// 2. bigint
// 3. string
// 4. boolean
// 5. null
// 6. undefined
// 7. symbol

let id = Symbol('123')
let anotherId = Symbol('123')

// console.log(id === anotherId);


//Reference ( Non-Primitive)Data Types
// 1. array
const heros = ["batman", "superman", "spiderman"];

// 2. object
let myObj = {
    name: "ubaid",
    age: 22,
    isMarried: false  
}
// console.log(myObj)

// 3. function

const myFunction = function(){
    // console.log("hello world");
    
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive Data Types) , Heap(Non-Primitive Data Types)
 let myname = "ubaid"
 let anothername = myname

 anothername = "zaid"

console.log(myname);
 console.log(anothername);
 
 //heap
 let userOne = {
     email: "ubaid@gmail",
     upi :"user@ybl"

 }

 let userTwo = userOne

 userTwo.email = "zaid@gmail"

 console.log(userOne.email);
 
