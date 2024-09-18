// var c = 300

let a = 300

if (true){
    let a = 10
    const b = 20
    var c = 30   
// console.log("INNER: ", a);                     
}


// console.log(a);
// console.log(b);
// console.log(c); 

function one(){ 
    const username = "zaid"

    function two(){
        const website = "github"
        // console.log(username);

    }  
    // console.log(website); //wont run
    two()
}

one()


if (true){

const username = "rider"
if (username === "rider"){
    const website = " github"
    //  console.log(username + website); // child scope can access the parent scope but parent cant access the child scope
    }
//   console.log(website);//wont run (error)

}

//++++++++++++++++++++++++++  hoisting +++++++++++++++++++++++++++++

//JavaScript moves function and variable declarations to the top of their scope so you can use them before they appear in the code.


//Function Declaration:
//A function defined using the function keyword. It is hoisted, meaning you can call the function before it appears in the code.

// addone (5)
function addone (num) {
    return num + 1
}

// addone (5)

//==============================================

//Function Expression:
//A function assigned to a variable. Only the variable is hoisted, not the function itself, so you can't call the function before its definition.

// addtwo(5)
const addtwo  = function (num){
    return num + 2}

    addtwo(5)
    