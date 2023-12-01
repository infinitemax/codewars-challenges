function times(num, mult){
    if(num === 0){
        return;
    } else {
        console.log(`${num} times ${mult} = ` + num * mult);
        times(num-1, mult);
    }
}

times(12,12)