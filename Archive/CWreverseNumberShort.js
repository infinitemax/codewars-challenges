function digitize(n) {
  // return String(n).split('').map(Number).reverse()
return n.reverse();
    
}

/* Taken apart:
String(n) turns the number into a String
.split('') splits up the string into an array of single letter strings
.map(Number) turns each element of the array into an number
.reverse() reverses the array!

*/

// digitize(23456)
// digitize("23456")
digitize([2,3,4,5,6])