// produce an array of a range

function range(start, end, step){
    const arr = [];
    if (!step){
        if (start < end){
            for (let i = start; i<= end; i++){
                arr.push(i);
            };
        } else {
            for (let i = start; i >= end; i--){
                arr.push(i);
            };
        };
        
    } else {
        if (start < end) {
            for (let i = start; i <= end; i = i + step){
                arr.push(i);
            }
        } else {
            for (let i = start; i >= end; i = i + step){
                arr.push(i);
            }
        };
    };   
    return arr
}

range(11,1, -2)

// sum the elements of an array

function sum(array){
    let total = 0;
    for(e of array){
        total += e
    };
    return total;
}

// console.log(sum(range(1,10)));

// const testArray = [1,2,3,4,5,6,7,8,9,10]
// sum(testArray);

// sum of a range

function range2(start, end){
    let total = 0;
    for (let i = start; i <= end; i++){
        total += i
    };
    return total
};

// console.log(range2(1,10));