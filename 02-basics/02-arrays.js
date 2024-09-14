const marvelHeros = ['spiderman',  'ironman' , 'thor']

const dcHeros = ['batman', 'superman', 'flash']

//marvelHeros.push(dcHeros) // it adds array into array ( [array1 [array2] ] )
// console.log(marvelHeros);
// console.log(marvelHeros[2]);

// const mynewHeros = marvelHeros.concat(dcHeros) // it combines two arrays       
// console.log(mynewHeros);


const mynewHeros = [...marvelHeros, ...dcHeros] //spread operator

// console.log(mynewHeros);

const anotherArray = [1, 2, 3,[ 4, 5, 6], 7,[6, 8, [8,9, 10]]]



const realArray =  anotherArray.flat(2) // it combines every array inside array into one array and () is the depth which means how many arrays inside you want to combine
// console.log(realArray);


console.log(Array.isArray("ubaid"));
console.log(Array.from("ubaid")); // .from  it converts string into array


console.log(Array.from({name: 'ubaid', age: 22})); //intresting array cause it return empty array array


