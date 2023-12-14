const fs = require("fs");
const path = require("path");
const { open } = require ("node:fs/promises");

const filePath = path.join(process.cwd(), "input.txt")

console.log(filePath)


fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    const lines = data.split("\n")
    total = 0;

    lines.forEach(line => {
        const lineArray = line.split("")
        // console.log(lineArray);
        let num1 = getNum1(lineArray);
        let num2 = getNum2(lineArray);
        const nums = num1 + num2;
        total = total + Number(nums);
    })
    
    return console.log(total);
})


const getNum1 = (line) => {
    const length = line.length
    for (let i = 0; i < length; i++) {
        if (isNaN(line[i]) === false) {
            return line[i]
        }
    }
}

const getNum2 = (line) => {
    const length = line.length
    for (let i = length-1; i >= 0; i--) {
        if (isNaN(line[i]) === false) {
            return line[i]
        }
    }
}


// part 2
/*
check whether line contains one of the written numbers using indexOf()
if it does, the location of the first/last number
based on which is closer to the beginning or end, return the answer

gosh, this is hard!
*/