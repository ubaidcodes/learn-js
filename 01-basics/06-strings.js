const name = "ubaid"
const repoCount = 50

//console.log(name + repoCount + " Value "); // this is syntax is outdated


// use backticks (``) instead cause its newer and mordern way to write and concatinate strings
// benifit of using `` string interpolation 

/* String interpolation is like filling in the blanks in a sentence with the values
 you want. It makes creating sentences with variables or expressions easier and cleaner. */
console.log(` Hello my name is ${name} and my repo count is ${repoCount}`);

const  gameName = new String('ubaidd-9')

console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('d'));
 
const  newString = gameName.substring(0, 4)// cant use - operator
console.log(newString);

const anotherString = gameName.slice (-9, 3)
console.log(anotherString);


const myName = "    ubaid    "
console.log(myName);
console.log(myName.trim());

const url = "https://www.ubaidullah.com/ubaid%20ullah"

console.log(url.replace( '%20', '--'));

console.log (url.includes ('ubaid'))
console.log (url.includes ('zaid'))

console.log(gameName.split('-'));









