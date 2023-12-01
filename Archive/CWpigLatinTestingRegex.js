

const myArray = ["a", "f", "!", " "];

const myRegex = /[^A-Za-z ]/;

// for (let index = 0; index < myArray.length; index++) {
//     if(myRegex.test(myArray[index]) === true){
//         console.log(myArray[index])
//     }
// }


myArray.forEach((char) => {
    if(myRegex.test(char) === true){
        console.log(char)
    }
})