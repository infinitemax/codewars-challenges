/*

Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

function solution(string) {
    var brokenString = string.split('');
    var noCamelString = '';
    const regex = /A-Z/;
    for (let i = 0; i<brokenString.length; i++){
        if (/[A-Z]/.test(brokenString[i])===true){
            console.log(brokenString[i])
            brokenString.splice(i, 0, " ");
            i++;
        }
    }
    for (let i = 0; i<brokenString.length; i++){
        noCamelString = noCamelString + brokenString[i];
    }

return noCamelString
}

solution("poo");