

var myArray = [4,4,4,8,9,56,2,34,84,56,23,97,0,4,2,4,4];
let largest = 0;
let second = 0;
let third = 0;

for (let i = 0; i < myArray.length; i++) {
    if(largest < myArray[i]){
        largest = myArray[i];
    }
}

for (let i = 0; i < myArray.length; i++) {
    if(second < myArray[i] && myArray[i] < largest){
        second = myArray[i];
    }
}
for (let i = 0; i < myArray.length; i++) {
    if (third < myArray[i] && myArray[i] < second) {
        third = myArray[i];
    }
}

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === third) {
        console.log("The third largest number is " + third + " and it is at index " + i)
    } 
}