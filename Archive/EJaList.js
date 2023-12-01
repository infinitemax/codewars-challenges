
function arrayToList(array){
    let list = null;
    for (i = array.length-1; i >= 0; i--){
        list = {
            value: array[i],
            rest: list
        }
    }
    return list;
}


function listToArray(list) {
    const newArray = [];
    for (let node = list; node; node = node.rest){
        newArray.push(list.value);
    }
    return newArray
}

const myArray = [1,2,3]



console.log(listToArray(arrayToList(myArray)));