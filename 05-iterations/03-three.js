//for of 

// ["","", ""] // array k andar strings
// [{},{},{}] // array k andar objects

// const  arr = [1, 2, 3, 4, 5, 6]

// for (const element of arr) {
//     console.log(element);
    
// }

    

// const ggreetings = "hello world";
// for (const greet of ggreetings) {
//     if (greet === ' ') {  // Check if the character is a space
//         continue;  // Skip to the next iteration if it is a space
//     }
//     console.log(`each character is ${greet}`);  // Print the character if it's not a space
// }

//MAPS 
//uniques  hoti hai // doesnt print duplicate values

const map = new Map()
map.set ('IN ', "India")
map.set ('USA', "United States of America")
map.set ('FR ', "FRANCE")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key,":--" ,value);
    
}
// const myObj ={
//     'game1' :"NFS",
//     'game2' :"cyberpunk",
//     'game3' :"RDR II"
// }
// for (const [key , value] of myObj) {
//     console.log(key , ':__' , value);
    
    
// } // objects  iterable nahi hai

