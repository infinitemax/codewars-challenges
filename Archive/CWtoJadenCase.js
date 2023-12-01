String.prototype.toJadenCase = function () {
  //...
  
    let array = this.split('');

    for (let i = 0, n = array.length; i < n; i++){
        if (i === 0){
            array[i] = array[i].toUpperCase();
        }
        else if (array[i - 1] === ' '){
            array[i] = array[i].toUpperCase();
        }
    }

    return array.join('');
    

    console.log(array);
  
};

const str = "how can mirrors be real";

str.toJadenCase();