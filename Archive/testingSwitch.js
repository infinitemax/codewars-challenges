
const hello = (focus) => {
    switch(focus) {
        case "move":
               console.log("it was move")
                break;
        case "run":
                console.log("run was typed");
                break;
            default:
                console.log("do you even know how to code?")
    }
        
}


    hello("move")