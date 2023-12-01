const greeting = function(){
    const time = new Date().toLocaleTimeString()
    if (time > "12:00:00"){
        return "Good afternoon";
    } else {
        return "Good morning";
    }
}

greeting();


let now = new Date(2023, 07, 23, 10)

console.log(now)