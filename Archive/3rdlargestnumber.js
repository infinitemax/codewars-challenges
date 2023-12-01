// find the index of the 3rd largest number in an array

const array = [4,8,9,2,34,84,56,23,97,0,4,2,4,4];
var sortedArray = Array.from(array);

function findThird(numbers){
// find the third largest integer
    console.log(array);
    sortedArray.sort(function(a, b) {
                  return a - b;
                    });
    var thirdLargest = sortedArray[sortedArray.length-3];
    console.log(array);

// find it's index in original array
    for (let index = 0; index < array.length; index++) {
        if (array[index] === thirdLargest){
            console.log(index);
            console.log(array[index]);
        }
        
    }

}

findThird(array);