
function checkParity(array){

    const max = Math.max(...array);
    const min = Math.min(...array);

    if (min === max){
        return true;
    } else {
        return false;
    }

}



const array = [30, 30, 30, 30]

checkParity(array);