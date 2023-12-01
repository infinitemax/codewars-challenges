/*

Write a function that takes a string of parentheses, and determines 
if the order of the parentheses is valid. The function should return 
true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100

*/

function validParentheses(parens) {
    var open = 0;
    var close = 0;

    if (parens[0] === ")"){
        return false;
    } else if (parens === ""){
        return true
    }else {
        for (i = 0; i<parens.length; i++){
            if (parens[i] === "("){
                open++
            } else {
                close++
            }
            if (close > open){
                return false
            }       
        }
    }
    if(open === close){
        return true
    } else {
        return false
    }
}

validParentheses("")