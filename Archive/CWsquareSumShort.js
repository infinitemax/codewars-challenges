/*
Complete the square sum function so that it squares each number 
passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers){

    return numbers.length === 0 ? [] : numbers.map(e => e*e).reduce((acc, cur) => acc + cur)

}

var myArray = [1,2,3,4]

squareSum(myArray)