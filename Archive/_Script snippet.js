const obj = {
    name: "Annie",
    sexy: true,
    goodInBedRating: 10
}

function compare(object){
    const keys = Object.keys(object)
    
    for (let i = 0; i < keys.length; i++){
        let element = keys[i];
        console.log(object.element);
    }

    // keys.forEach(e => {
    //     console.log("key is " + e)
    //     let key = e;
    //     console.log("value is " + object[0])
    // })
}



compare(obj)

