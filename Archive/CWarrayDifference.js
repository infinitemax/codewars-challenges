/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] 
*/


function arrayDiff(a, b) {

    for(let ind = 0; ind < b.length; ind++){
        for(let i = 0; i < a.length; i++){
            if(a[i] === b[ind]){
                a.splice(i, 1)
                i--;
            }
        }
    }
        return a
    
}

arrayDiff([], [2,3])