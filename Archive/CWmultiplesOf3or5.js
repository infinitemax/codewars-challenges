/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function threeOrFive(num){
    const myArray = [];
    let total = 0;
    for (let index = num-1; index > 0; index--) {
        if (index % 3 === 0 || index % 5 === 0) {
            myArray.push(index)
        }
    }
    myArray.forEach((e) => total = total + e);
    console.log(myArray)
    return total;
}

threeOrFive(10)