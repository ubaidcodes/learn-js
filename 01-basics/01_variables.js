const accountId = 12345678922
let accountEmail ="ubaid@gmail.com"
var accountPassword = "12345"
accountcity = "Kashmir"

let acountState;// undefined


// accountId = 2 // error // not allowed
accountcity ="srinagar"
accountEmail = "zaid@gmail.com"
accountPassword="98869"

// dont use acountId = "kashmir" it is a bad practice 
// it possible to find this of code but not recommended
console.log(accountId);
  
console.table([accountId, accountEmail, accountPassword, accountcity , acountState]);

/*
Prefer not to use  var
because of issue with block scope and functional scope
*/
