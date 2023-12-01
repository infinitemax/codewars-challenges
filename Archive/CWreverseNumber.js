/*
Given a random non-negative number,
you have to return the digits of this 
number within an array in reverse order.

*/


function digitize(n) {
  //code here
    var reverse = []
  for (let index = String(n).length-1; index > -1; index--) {
    reverse.push(Number(String(n)[index]));
  }
  return reverse;
}

digitize(23456)