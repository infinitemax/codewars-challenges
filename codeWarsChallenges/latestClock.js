function latestClock(a, b, c, d) {

    // create array, add all items to it

    const array = []
    const timeArray = []

    array.push(a)
    array.push(b)
    array.push(c)
    array.push(d)

    // Order the digits, smallest-biggest (is this needed?)
    const newArray = array.sort()

    console.log("starting array is ", array)

    // identify digit 1
    let digitOne = 0;
    let digitIndex = null;

    // array of max values to iterate through
    const maxValues = [3, 10, 7, 10]

    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] > 0 && newArray[i] < 3) {
            digitOne = newArray[i]
            digitIndex = i
        }
    }
    // add digit 1 to time array
    timeArray.push(digitOne)
    newArray.splice(digitIndex, 1)
    console.log("the time array = ", timeArray)

    // identify digit 2
    let digitTwo = 0

    for (let i = 0; i < newArray.length; i++) {
        if (digitOne < 2) {
            if (newArray[i] >= digitTwo) {
                digitTwo = newArray[i]
                digitIndex = i
            }
        } else {
            if (newArray[i] >= digitTwo && newArray[i] < 4) {
                digitTwo = newArray[i]
                digitIndex = i
            }
        }

        
    }
    // add digit 2 to time array
    timeArray.push(digitTwo)
    newArray.splice(digitIndex, 1)
    console.log("the time array = ", timeArray)


    // identify digit 3
    let digitThree = 0

    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] > digitThree && newArray[i] < 7) {
            digitThree = newArray[i]
            digitIndex = i
        }
    }
    // add digit 3 to time array
    timeArray.push(digitThree)
    newArray.splice(digitIndex, 1)
    console.log("the time array = ", timeArray)
    
    // add final digit
    timeArray.push(newArray[0])
    console.log("the time array = ", timeArray)

    let result = timeArray[0].toString() + timeArray[1] + ":" + timeArray[2] + timeArray[3]

    console.log(result);
    return result
  }

//   latestClock(4,2,1,4)
//   latestClock(2,9,0,4)
//   latestClock(0,0,0,0)
  latestClock(1,2,8,9)



/*

Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.

The time should be in HH:MM format.

Examples:

digits: 1, 9, 8, 3 => result: "19:38"
digits: 9, 1, 2, 5 => result: "21:59"
Notes
Result should be a valid 24-hour time, between 00:00 and 23:59.
Every input has a valid answer.
*/