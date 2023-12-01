const persistence = (num) => {
    let count = 0;
    let stringified = num.toString().split("")
    let length = stringified.length

    const multiply = (numbers) => {
        if (stringified.length < 2) {
            return count
        } else {
            let total = 1;
            for (let i = 0; i < length; i++) {
                total = total * stringified[i]
            }
            count ++
            multiply(total)
        }
    }
    
    multiply(num)
    
}

module.exports = persistence