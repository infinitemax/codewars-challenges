/*
Complete the square sum function so that it squares each number 
passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers){

    return numbers.reduce((acc, cur) => (cur*cur) + acc, 0);

}

var myArray = [1, 2, 3, 4, 5, 6]

squareSum(myArray)