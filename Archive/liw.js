function lifeInWeeks(age) {
    var days = age*365

    var weeks = age*52

    var months = age*12

    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.")
}
// output "You have x days, y weeks, and z months left."

lifeInWeeks(35);