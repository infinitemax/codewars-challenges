function minMax(arr){
    return [(arr.reduce((acc, cur) => {if (acc > cur){acc = cur} return acc})), (arr.reduce((acc, cur) => {if (acc < cur){acc = cur} return acc}))]

}

var myArr = [1,2,3,4,5,23,3,5]

minMax(myArr);