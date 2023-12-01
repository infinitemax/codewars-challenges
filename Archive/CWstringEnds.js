/*
String ends with...

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending){
  // TODO: complete
    for (let i = ending.length-1; i > -1; i--){
        var count = 1;
        if(ending[i] !== str[str.length-count]){
            console.log(str[str.length-(count+2)])
            return false;
        } else {
            count++;
        }
    }
    return true
}

solution('abc', 'bc')
