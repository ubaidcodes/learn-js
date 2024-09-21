const coding= ["html", "css", "javascript", "react", "node", "python"]

// coding.forEach( function (item) {  //ye function callback hai toh iss ka naamm ahi hai
//   console.log(item)

// } )

coding.forEach  ( (val) => {
    // console.log(val);
    
}) // arrow function 

// function printMe( item){
//     //  console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr) =>{
    // console.log(item,index,arr);
    
} )


const myCoding= [
    {
        languageName:"javascript",
    languageFileName:"js"
    },
    {
        languageName:"java",
    languageFileName:"java"
    },
    {
        languageName:"python",
    languageFileName:"py"
    }

]

myCoding.forEach ( (item) => {
    console.log(item.languageName);
    
}  )
