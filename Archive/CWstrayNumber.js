/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

var myArray1 = [1,1,1,1,1,9,1,1,1,1]
var myArray2 = [8,1,1,1,1,1,1,1,1,1]
var myArray3 = [1,1,1,1,1,1,1,1,1,3]

function stray(numbers) {
    var itemOne = numbers[0]
    var itemTwo = 0

    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] !== itemOne){
            itemTwo = numbers[i]
        } 
    };

    var countOne = 0;
    var countTwo = 0;

    numbers.forEach(e => {
        if(e === itemOne){
            countOne++;
        } else {
            countTwo++;
        }
    }) 

    if(countOne>countTwo){
        return itemTwo;
    } else {
        return itemOne
    }
}

stray(myArray1)
