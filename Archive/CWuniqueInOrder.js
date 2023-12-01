
let uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array

    const uniqueArray = []
        if (iterable.length === 0){
           return uniqueArray
        } else {
            uniqueArray.push(iterable[0])
            for (let i = 1; i < iterable.length; i++){
                if(iterable[i] != iterable[i-1]){
                    uniqueArray.push(iterable[i])
                }
            }
            return uniqueArray

        }
        

    
}

//const myArray = ["]

uniqueInOrder([1,1,1,1,2,3,4,5,5,5,6])
// uniqueInOrder([])