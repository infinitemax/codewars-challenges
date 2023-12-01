function positiveSum(arr) {

    const arrayLength = arr.length;
    let count = 0;
    
    for (let i = 0; i < arrayLength; i++){
        if (arr[i] > 0){
            count = count + arr[i];
        }
    }

    return count;
    
}

const myArray = [1,-4,7,12];


positiveSum(myArray)
