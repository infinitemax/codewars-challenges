// var n = Math.random();

// n = Math.floor(n * 6);

// n = n + 1;

// console.log(n);


// Love calculator

prompt("What is your name?");
prompt("What is their name?");

var loveCalc = Math.random();

loveCalc = Math.floor(loveCalc * 100);

loveCalc = loveCalc + 1;

if (loveCalc > 70) {
    alert("Your love match score is: " + loveCalc + "% That is super love!");
}

if (loveCalc > 30 && loveCalc <= 70) {
    alert("Your love match score is: " + loveCalc + "% Not bad!");
}

if (loveCalc <= 30) {
    alert("Your love match score is: " + loveCalc + "% Ball bag!");
}
