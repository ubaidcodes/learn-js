//for loop

for (let i = 0;   i <=10; i++) {
    const element = i;
    if (element == 0) {
        // console.log("5 is best");
        
        
    }
    // console.log(element);   
}

for (let i = 1; i <= 3; i++) {
// console.log(`outer loop value: ${i}`);

  for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop value: ${j} and outer loop: ${i}`);
    // console.log(`${i} * ${j} = ${i*j}`);
    // console.log(i + '*' + j + '=' + i*j );
  }
} 

let myArray =[1,2,3,4,5,6,7,8,9,10] 
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}


// break and continue 

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        // console.log("value 5 detected");
        break
        
    }

    // console.log(`value of index: ${index}`)
}
for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log("value 5 detected");
        continue
        
    }

    console.log(`value of index: ${index}`)
}