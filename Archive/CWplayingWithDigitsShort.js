function digPow(n, p){

    var sumPowers = n.toString().split('').reduce((acc, curV, curI) => acc + Math.pow(curV, p + curI), 0 )
    return (sumPowers/n)%1 === 0 ? sumPowers/n : -1
    
}

digPow(46288, 3)