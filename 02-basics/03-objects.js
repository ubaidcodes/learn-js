// //singleton => create only one instance of an object. 
// //object.create

// // object literals => easiest way to make objects without needing a constructor function or class.2

// const JsUser = {
//      name: "ubaid", // name: => keys , ubaid => values 
//     age: 22, 
//     "full name" : "ubaid ullah",
//     "locati on": "kashmir",
//     email : "ubaid@google.com",
//     isLoggedIn: true,
//     lastLoginIn: ["monday" , "saturday"]
//  }

// // console.log(JsUser.email);// not a good practice and it has some flaws but most of the times we will use dot notatio
// // console.log(JsUser["full name"]) // cant be done with dot notation ,use square bracket when there is space in keys
// // console.log(JsUser["locati on"]);

// // //symbol
// // const mySym = Symbol("key1")
// // const mySym2 = Symbol("key1")
// // //const JsUser = {
// //     mySym: "mykey1", // this will print mykey1 but type will be string and not symbol
// //     [mySym2]: "mykey1"//,to make this symbol use square brackets

// // }

// // console.log(JsUser[mySym2]);
// // console.log(JsUser.mySym);
// // console.log(typeof JsUser.mySym);
// // console.log(typeof JsUser[mySym2]);

// //change the values 

// // JsUser["email"] = "ubaid@ybl"
// // console.log(JsUser.email);


// //object freeze 
// // Object.freeze(JsUser)
// // JsUser.email = "ubaid@yahoo.com"

// JsUser.greeting =  function (){
//     console.log("hello js user");
    
// }
// JsUser.greeting2 =  function (){
//     console.log(`hello js user, ${this.name}`);
    
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());

// const mySym = Symbol("key1")
// const JsUser = {
//     name: "ubaid", // name: => keys , ubaid => values 
//    age: 22, 
//    [mySym] : ("key1"),
//    "full name" : "ubaid ullah",
//    "locati on": "kashmir",
//    email : "ubaid@google.com",
//    isLoggedIn: true,
//    lastLoginIn: ["monday" , "saturday"]
// }
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// console.log(JsUser);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// constructor function
function Car(name, type, speed) {
this.name = name,
this.type= type,
this.speed = speed

}

const honda =new Car('hondaCity','sedan', 180 )
const kia =new Car('seltos','suv', 220 )
const suzuki =new Car('brezza','suv', 200 )

console.log(honda);

//imp
// When we declare an object using a literal, a singleton is not made.
// But using a constructor, a singleton can be made (with additional logic).




