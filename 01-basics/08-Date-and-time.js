//Dates 

let mydate = new Date()

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleDateString());
// //console.log(mydate.toJSON());
// console.log(mydate.toISOString());
// //console.log(mydate.toTimeString());
// console.log(mydate.toLocaleTimeString())
console.log(typeof mydate);

//let myCreatedDate = new Date(2024, 8, 13)
// let myCreatedDate = new Date(2024, 8, 13, 4, 3)
// let myCreatedDate = new Date(" 01- 23- 2024")
let myCreatedDate = new Date("2024-09-13")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1); // +1 because month starts from 0(because of an array)
console.log(newDate.getDay());

// console.log(` The day is ${newDate.getDay() } and the month is ${newDate.getMonth()}`);




console.log(newDate.toLocaleString('default',
    {weekday:"long",

    }));

