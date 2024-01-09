function twoSum(numbers, target) {

    // select first number in array

    // iterate through array, adding that number to all the others

    // check each time whether the result is the target - if so return those numbers

    // if no matches, move to next number in the array

    for (let i = 0, n = numbers.length; i < n; i ++) {
        let base = numbers[i]

        for (let j = 0; j < n; j++) {
            if (base + numbers[j] === target) {
                console.log(base, numbers[j])
            }
        }
    }


    return;
}


