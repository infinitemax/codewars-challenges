var array = [1,1,1,1]

function sum(num){
    var total = 0;
    
    for (let i = 0; i < num.length; i++){
        total = total + num[i];
    }
    return total

}


sum(array)