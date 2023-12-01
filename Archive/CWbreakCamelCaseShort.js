function solution(string) {
    string = string.split('').map((el)=>{
        if (el === el.toUpperCase()) {
            el = ' ' + el;
        }
        return el
    })
return string.join('')
    
}

solution("helloWorldYouAreCool");