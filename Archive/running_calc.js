// a script to take someone's time in a race (marathon) and say how
// long it would take them to do a 5km at that average pace

// need: race distance in km (marathon) and time

// divide distance by time to get pace
// this tells us minutes per km

// times pace by 5km to get 5k time

function fiveKmTime(raceTime, raceDistance){
    var parkRunTime = originalRacePace(raceTime, raceDistance) * 5;
    return parkRunTime;
}

function originalRacePace(originalRaceTime, originalRaceDistance){
    var pace = originalRaceTime/originalRaceDistance
    return pace;
}


console.log(fiveKmTime(220, 40));