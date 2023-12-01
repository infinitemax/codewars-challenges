/*
DESCRIPTION:
A palindrome is a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction. Famous examples include "Amore, Roma", "A man, a plan, a canal: Panama" and "No 'x' in 'Nixon'". - wikipedia

Our goal is to determine whether or not a given string is a valid palindrome or not.

Like the above examples, here are a few test cases which are also populated:

"Amore, Roma" => valid
"A man, a plan, a canal: Panama" => valid
"No 'x' in 'Nixon'" => valid
"Abba Zabba, you're my only friend" => invalid
You can see that they are case insensitive and disregards non alphanumeric characters. In addition to a few predefined tests, your function will also be tested against a random string generator 50 times which are guaranteed to produce valid palindromes.

Notes:

The empty string "" can be read forward or backward the same, it's a palindrome in our case.
*/

function palindrome(string) {

    // remove the non-alphanumeric characters, by creating a "regular expression" and using it to replace non-alphanumeric
    // characters with "". Not the syntax of regExp: /[^A-Za-z0-9]/g - regExp characters sit within slashes (/ .... /), the
    // caret (^) means "not these", and the "g" means global, which I think causes the replace to keep going.

    var regExp = /[^A-Za-z0-9]/g
    // I then use the regExp with replace() to remove all non-alphanumeric characters
    // then use toLowerCase() to make it all lower case
    // I also split the string into an array of it's letters
    var alphaString = string.replace(regExp, "").toLowerCase().split(""); 
    // create a new array reversed.
    var reverseAlphaString = [...alphaString].reverse();
    // which I can compare...
    for (let i = 0; i < alphaString.length; i++){
        if (alphaString[i] != reverseAlphaString[i]){
            return false
        }
    }

    return true;
}

palindrome("No 'x' in 'Nixon'")

// CURRENT PROB - NEED TO REPLACE CAPS WITH LOWERCASE!