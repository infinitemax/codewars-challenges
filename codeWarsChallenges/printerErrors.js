function printerError(s) {
    
    const denominator = s.length;
    let numerator = 0;

    const array = s.split("");

    const colours = /([a-m])+/

    for (let i = 0; i < denominator; i++) {
        if (!colours.test(array[i])) {
            console.log(array[i])
            numerator++
        }

        // console.log(!colours.test(array[i]));

    }

    console.log(numerator + "/" + denominator)
    return numerator + "/" + denominator

}

printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")