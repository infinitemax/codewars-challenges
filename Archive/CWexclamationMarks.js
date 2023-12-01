/*

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/


function removeExclamationMarks(s) {
    const array = s.split('');

    for (let i = 0; i < array.length; i++){
        if (array[i] === "!"){
            array.splice(i, 1)
            i--;
        }
    }
    
    return array.join('');
}



removeExclamationMarks("Hello, world!!!")