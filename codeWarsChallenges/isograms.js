/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

// 1. to lower case
// 2. split
// 3. sort
// 4. compare

function isIsogram(str){
    if (!str) return true
    const array = str.toLowerCase().split("")
    array.sort()

    for (let i = 0, length = array.length; i < length - 1; i++) {
        if (array[i] === array[i + 1]) {
            return false
        }
    }
    
    return true
  }




module.exports = isIsogram