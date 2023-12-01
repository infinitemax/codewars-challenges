function print(num){
// base case
    if (num === 1){
        console.log(num);
    } else {
// recursion
        console.log(num);
        print(num-1)
    }
}

print(5)
