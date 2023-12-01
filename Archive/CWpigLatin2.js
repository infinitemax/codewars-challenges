/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

pseudo code:

split the string into an array of words

split the word into an array of letters

identify letter 0

remove letter 0

append letter 0 to the end of the array

add "ay" to the array

recombine the new word

add it to a new array

*/


// new task - identify punctuation and insert space before each


function pigIt(str){
  //Code here

    const regex = /[^A-Za-z ]/
    const arr = str.split("")
    arr.forEach((char, ind) => {
        if (regex.test(char)){
            arr.splice(ind, 0, " ")
        }
    })
    console.log(arr)
}

const myString = "Hello my name is Max!"

pigIt(myString)