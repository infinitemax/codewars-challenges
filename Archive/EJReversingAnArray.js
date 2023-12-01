// a new, reversed array

/*
function reverseArray(array){
    newArray = [];
    for (let i = array.length-1; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray;

    
    // const startLength = array.length
    // for (let i = 0; i < startLength; i ++){
    //     newArray.push(array.pop());
    // }
    // return newArray;
}

const myArray = [1,2,3,4,5,6];

reverseArray(myArray);
*/

// reversing the original array

function reverseArrayInPlace(array){
    const arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++){
        array.splice(i, 0, array.pop());
    }

    return array;
};

const myArray = [1,2,3,4,5,6];

reverseArrayInPlace(myArray)

