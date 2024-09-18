const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`); 
                // console.log(this); // current context ko refer karta hai

    }

}
                  
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);//  in node environment this will be undefined (empty) but in browser this will be global object which is  window object



// function chai(){
//     let username = "hitesh"
//     console.log(this.username);// function mai this keyword ko access nahi karta hai (it will show undefined)
// }
// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); //  this will also show undefined because of function
// }

// arrow function (=> )

const chai =  () => { 
    let username = "hitesh"
    // console.log(this);
}
// chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // curly braces use kiya toh return likh na padhe ga  // explicit return

// console.log(addTwo(3,4));


// const addTwo = (num1, num2) =>  num1 + num2 // implicit return

// const addTwo = (num1, num2) => ( num1 + num2 ) // parenthesis use kiya toh return nahi likh na hai

const addTwo = (num1, num2) => ({username: "hitesh"}) //agar object return karne k liye usee parenthensis ko use karna hai warna if we will use only {username } it will show undifined 

// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()