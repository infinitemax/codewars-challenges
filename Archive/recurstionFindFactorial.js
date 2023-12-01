// recursively find the factorials of a number
function factorial(num){
    //base case
    if (num === 1){
        return 1;
    } else {
        return num * factorial(num-1)
    }
}

// recursively find the factorials of a list of numbers and log them
function allFactorials(n){
    if (n === 0) {
        return 1;
    } else {
        console.log(`${n} factorial is ${factorial(n)}`);
        allFactorials(n-1);
    }
}

allFactorials(6)