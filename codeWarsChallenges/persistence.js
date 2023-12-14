/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

*/


const persistence = (num) => {

    // set count to 0
    let count = 0

    // if num = 1 digit, return count at 0
    if (num < 10) {
        return count
    }

    const splitAndTimes = (input) => {
        // break clause
        if (input < 10) {
            return
        }
        // split number into its digits
        input = input.toString().split("").map(Number)
        count++
    
        // times them together and add 1 to count
        console.log("trying reduce")
        
        let result = input.reduce((a, b) => a * b)
        
        if (result) {
            console.log(result)
        }
        // get answer and pass that into the splitAndTimes function
        splitAndTimes(result)
    
    }

    // if num = 2 or more digits apply a splitting and timesing function recursively
    splitAndTimes(num)
    console.log(`count = ${count}`)
    return count
}



console.log(persistence(39))


module.exports = persistence








// const persistence = (num) => {
//     let count = 0;
//     let stringified = num.toString().split("")
//     let length = stringified.length

//     const multiply = (numbers) => {
//         if (stringified.length < 2) {
//             return count
//         } else {
//             let total = 1;
//             for (let i = 0; i < length; i++) {
//                 total = total * stringified[i]
//             }
//             count ++
//             multiply(total)
//         }
//     }
    
//     multiply(num)
    
// }