function bmiCalculator(weight, height) {
    var bmiScore = Math.round(weight/Math.pow(height, 2));

    if (bmiScore < 18.5) {
    console.log("Your BMI is " + bmiScore + ", so you are underweight.")
    }

    if (bmiScore >= 18.5 && bmiScore <= 24.9) {
    console.log( "Your BMI is " + bmiScore + ", so you have a normal weight.")
    }

    if (bmiScore > 24.9) {
    console.log( "Your BMI is " + bmiScore + ", so you are overweight.")
    }
}

bmiCalculator(100, 1.9);
    
// var bmi = bmiCalculator(100, 1.9);