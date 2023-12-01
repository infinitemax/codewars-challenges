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





function pigIt(str){
  //Code here

    const dealWithPunct = str.split("")

    //add a space before punctuation
    const myRegex = /[^A-Za-z ]/;

    dealWithPunct.forEach((char, ind) => {
        if (myRegex.test(char) && dealWithPunct[ind-1] != " "){
            dealWithPunct.splice(ind, 0, " ")
        }
    })
    console.log(dealWithPunct)
  
    let sentenceString = "";
    for (let k = 0; k < dealWithPunct.length; k++){
      sentenceString = sentenceString + dealWithPunct[k];
    }
    console.log(sentenceString)

    const sentenceArray = sentenceString.split(" ");
    let pigArray = [];

    // remove items on the array that are spaces
    // console.log(sentenceArray)
    // for (let l = 0; l < sentenceArray.length; l++){
    //   if (sentenceArray[l] === " "){
    //     console.log("hi");
    //   }
    // }

    for (let i = 0; i < sentenceArray.length; i++){
        let currentWord = sentenceArray[i].split("");
        let firstLetter = currentWord.splice(0,1);
        if (myRegex.test(sentenceArray[i]) === true){
          currentWord.push(firstLetter[0]);
        } else {
          currentWord.push(firstLetter[0] + "ay");
        }
        let newStringWord = "";
        for (let j = 0; j < currentWord.length; j++) {
            newStringWord += currentWord[j];
        }
        pigArray.push(newStringWord)
        // console.log(newStringWord)        
    }
    return pigArray.join(" ")
}

const myString = "Hello Max !"

pigIt(myString)