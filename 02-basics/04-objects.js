//const tinderUser = new Object () // creates singleton objects

const tinderUser ={} // does't create a singleton object
   
 tinderUser.id= "123abc"
 tinderUser.name = "ubaid"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    email: "zaid@outlook.com",

    fullname:{
        userfullname:{
            firstname:"meoow ",
            lastname:  "meoww"   }
    }
 }
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);


 const obj1 = {1: "a", 2: "b", 3:"c"}
 const obj2 = {4: "d", 5: "e", 6:"f"}

//  const obj3 = { obj1, obj2 }
// const obj3 = Object.assign ( obj1, obj2) // This copies the properties of obj2 into obj1, modifying obj1 directly. obj3 is the same object as obj1 after assignment.


// const obj3 = Object.assign ({}, obj1, obj2) // {} creates a new empty object. Properties from obj1 and obj2 are copied into this new object without modifying obj1 or obj2.

 
const obj3 = { ...obj1, ...obj2} // This uses the spread operator to copy properties from obj1 and obj2 into a new object.
//we will this most of the times

//  console.log(obj3);

// databases se jab values ati hai (kiss tarah se ati hai)

const user= [
        {
            id: "chotu",
            email: "chotu@gmail",
            name: "chotu",
        },
         {
            id: "chotu",
            email: "chotu@gmail",
            name: "chotu",
        },
         {
            id: "chotu",
            email: "chotu@gmail",
            name: "chotu"
        }

]
user[1].email



console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));// isnt used most of the times


 