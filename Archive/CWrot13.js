/*
Rot13

ROT13 is a simple letter substitution cipher that replaces a letter 
with the letter 13 letters after it in the alphabet. ROT13 is an 
example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered 
with Rot13. If there are numbers or special characters included in the 
string, they should be returned as they are. Only letters from the 
latin/english alphabet should be shifted, like in the original Rot13 
"implementation".

Attempts:
- I tried an approach of adding 13 to the ASCII code for each char but 
this failed as it ofc means that some are substituted to non-alphabet
characters! 
- next, use an alphabet array... how to deal with upper and lower case?

*/

function rot13(message){
    
    const alphabet = ['a', 'b', 'c', 'd', 'e', 
                      'f', 'g', 'h', 'i', 'j', 
                      'k', 'l', 'm', 'n', 'o', 
                      'p', 'q', 'r', 's', 't', 
                      'u', 'v', 'w', 'x', 'y', 
                      'z', 'a', 'b', 'c', 'd', 
                      'e', 'f', 'g', 'h', 'i', 
                      'j', 'k', 'l', 'm', 'n', 
                      'o', 'p', 'q', 'r', 's', 
                      't', 'u', 'v', 'w', 'x', 
                      'y', 'z']

    const letters = message.split("");

    const regexp = /([A-Za-z])/;
    const upperReg = /([A-Z])/;

    const testArray = letters.map(e => {
        if (regexp.test(e)) {
            //check if it's uppercase - make a note
            // if necessary, make it lower
            let upper = false;
            if (upperReg.test(e)){
                upper = true;
            }
            // find number of char by using char code
            // add 13 to that
            // use that number to get item from the array
            let alphIndex = e.toLowerCase().charCodeAt(0)-84;
            let cipherLetter = alphabet[alphIndex];
            // if it was uppercase, make it lower.
            if (upper) {
                cipherLetter = cipherLetter.toUpperCase();
            }            
            return cipherLetter;
        } else {
            return e;
        }
    })
    
    return testArray.join("");

}

rot13("Hello!")
rot13("Test")