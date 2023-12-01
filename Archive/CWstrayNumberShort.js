var myArray1 = [1,1,1,1,1,9,1,1,1,1]
var myArray2 = [8,1,1,1,1,1,1,1,1,1]
var myArray3 = [1,1,1,1,1,1,1,1,1,3]

function stray(numbers) {

    numbers.sort();

    if(numbers[0] !== numbers[1]){
        return numbers[0];
    } else {
        return numbers[numbers.length-1];
    }

}

stray(myArray2);