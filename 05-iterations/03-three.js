//for of 

["","", ""] // array k andar strings
[{},{},{}] // array k andar objects

const  arr = [1, 2, 3, 4, 5, 6]

for (const element of arr) {
    console.log(element);
    
}

    

const ggreetings = "hello world";
for (const greet of ggreetings) {
    if (greet === ' ') {  // Check if the character is a space
        continue;  // Skip to the next iteration if it is a space
    }
    console.log(`each character is ${greet}`);  // Print the character if it's not a space
}
