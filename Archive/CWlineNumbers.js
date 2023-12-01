/* 
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

// my first go: --------------
var number = function(array){
  //your awesome code here
    var space = ": ";

    if (array === []){
        return array
    } else {
        for (let i = 0; i < array.length; i++){
            var currentLine = array[i];
            array.splice(i, 1, (i+1) + space + currentLine);
        }
    }
    return array;
    
}

var myArray = ["a", "b", "c", "d", "e"];

number(myArray);
//------------------------

//gave up on the second go!