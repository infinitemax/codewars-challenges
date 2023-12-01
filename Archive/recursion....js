/*

Here's a recursive function to add up the numbers in an array

function sum(array){
    if (array.length === 0){
        return 0;
    } else {
        return array[0] + sum(array.slice(1));
    }
}

var myArray = [1,2,3,4,5]

sum(myArray);

*/

// A recursive function to find the maximum number in a list

/*

var currentMax = 0;

function maximum(array){
    if(array.length === 0){
        return 0;
    } else {
        if(array[0] > currentMax){
            currentMax = array[0];
            maximum(array.slice(1));
        } else {
            maximum(array.slice(1));
        }
        
    }
    return currentMax;
    
}

var myArray = [1,4,534,7,54,8654,5,34,53,5,65];

maximum(myArray);

*/

// A recursive function to count the number of items in a list


var list = ["sheep", "cat", "moon", "owl", "bit", "happiness"]

var counter = 0;

function listCount(array){
    if (array === []){
        return 0;
    } 
    return 1 + listCount(array.slice(1))
}

listCount(list);