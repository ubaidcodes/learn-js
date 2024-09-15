function sayMyName(){
console.log("u");
console.log("b");
console.log("a");
console.log("i");
console.log("d");

}

// sayMyName(); // sayMyName is reference and () is execution

// function addTwoNumbers (num1, num2){


//    console.log(  num1 + num2);
   
// }
// // addTwoNumbers("10"  , 3)

// const result = addTwoNumbers(10, 3)
// console.log( "Result:", result);  //  The console only displays output; it doesn’t mean the function has returned that value. Return is a separate concept that specifies the actual result of a function.



function addTwoNumbers (num1, num2){


    // let result = num1 + num2

    // return result  // jab mera function execute ho jayega toh mere result ko return kardo
    
    // return num1 + num2
 }

 
 const result = addTwoNumbers(10, 3)
//  console.log( "Result:", result);


    function loginUserMesaage(username){
        if (!username){
            console.log("Please enter username");
            return
            
        }
        // if (username === undefined){
        //     console.log("Please enter username");
        //     return
            
        // }

        return`${username} just logged in`
    }
    // console.log(loginUserMesaage("zaid"));
    //  console.log(loginUserMesaage( ));// agar koi value nahi pass ki toh undifined ata hai
 // to check it out we use if esle statementa
    





// The role of return: "return is used to send back a value from a function to where it was called. It ends the function immediately."
// No execution after return: "Once the return statement runs, nothing after it in the function will be executed. The function stops right there."
// Returning only one value: "A function can only return one value. Even if you want to return multiple things, you need to package them, like in an array or an object."
// Returning undefined: "If a function doesn’t have a return statement, or if the function doesn’t hit a return, JavaScript automatically returns undefined."
// Not every function needs a return: "Some functions just perform tasks without sending anything back. In those cases, there’s no need to use return."


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  



function calculatedCartPrice (num1){ 
        return num1
}
// console.log(calculatedCartPrice (200, 400, 500) ); // only one value returns


function calculatedCartPrice2 (...num2){ //rest operator (...) collects multiple values into a single array,
    return num2
}

// console.log(calculatedCartPrice2 (200, 400, 500, 2000) );


function calculatedCartPrice3 (val1, va2, val3, ...num3 ){   
      return num3
}

// console.log(calculatedCartPrice3 (200, 149, 400, 500, 2000) ); // val1, va2, val3 take the first 3 values and rest goes into ...num3 and remember  rest operator should be at last




const user = {
    username: "ghostRider",  
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${
        anyobject.price}.`);

}
handleObject(user)


handleObject({
    username:"sam",
    price:299
})



const myNewArray = [200, 500, 599, 100 ,900]

function returnSecondValue(getArray){
    return  getArray[4]

}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 599, 700 ,900]));

