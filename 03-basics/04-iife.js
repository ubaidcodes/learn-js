//// Immediately Invoked Function Expressions (IIFE)
//jaise hee function likha usee turant hee excute karwaana hai
//and  it helps avoid global scope pollution by creating a separate scope for the function.


function chai(){
    // regular function
    console.log(`DB CONNECTED`);
}
chai();

// () () // first parenthesis is for jaha par hum function ki definition likh tai hai and second is for excution call which is  IIFE
(function chai(){
    // named IIFE( cause after the function there is chai thats why)
    console.log(`DB CONNECTED`);
})(); 
// You need one semicolon to separate two IIFEs.
 

// IIFE with  argument and parameter
(  (name) => { // simple iife  
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh'); // here we are passing paramete