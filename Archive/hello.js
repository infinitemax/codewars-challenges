function getMilk(money, costPerBottle) {
    console.log("leaveHouse");
    console.log("goToStore");

    console.log("buy " + buyBottles(money, costPerBottle) + " bottles of milk");
    
    console.log("goHome");
    console.log("enterHouse");

    return calcChange(money, costPerBottle);
}


console.log("Here is your £" + getMilk(8, 1.5) + " change");


function buyBottles(startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startingMoney/costPerBottle);
    return numberOfBottles
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}