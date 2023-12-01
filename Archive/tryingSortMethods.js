// basic sort - good for arrays of words, not good for numbers

function standardSorting(array){
    
    return array.sort();
    
}

// sort with function - allows us to compare numbers

function numericalSorting(array){

    return array.sort((a, b) => {
        return a - b;
    })
    
}

// sort objects based on a value

class Thing {
    constructor(name, value){
        this.name = name;
        this.value = value;
    }
}

let annie = new Thing("Annie", 153);
let max = new Thing("Max", 183);
let hardasiron = new Thing("Hardasiron", 10);
let cover = new Thing("Cover", 0.5);

const objArray = [annie, max, hardasiron, cover];

function objectSortNumerical(array){
    
    array.sort((a, b) => a.value - b.value);
    console.log("height order:")
    array.forEach(e => console.log(e.name));
}

function objectSortAlphabetical(array){

    array.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB){
            return -1;
        }
        if (nameA > nameB){
            return 1;
        }
        return 0;
    })

    console.log("alaphabetical order:")
    array.forEach(e => console.log(e.name));
}


// TOSORTED

function standardToSorted(array){
    console.log("toSorted() standard")
    const newArray = array.toSorted();
    return newArray;
}

function numericalToSorted(array){
    console.log("toSorted() numerical")
    const newArray = array.toSorted((a, b) => {return a - b});
    return newArray;
}





// driver code

const array1 = [5,2,6,1,30,4];

const array2 = [5,2,1,8,23,67];

// using sort()

// console.log(standardSorting(array1));

// console.log(numericalSorting(array2));

// console.log(objectSortNumerical(objArray))

// console.log(objectSortAlphabetical(objArray))

// using toSorted()

console.log(standardToSorted(array1))

console.log(numericalToSorted(array1))