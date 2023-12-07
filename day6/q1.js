const races = [[7,9],[15,40],[30,200]] //[time, distance]

function beatRaces(races) {

    // Loop through each race
    for (let i = 0; i < races.length; i++) {
        let time = races[i][0];
        let distanceToBeat = races[i][1];

        // loop through each millisecond available to hold the button for in the race
        for (let i = 1; i < (time + 1); i++) {
            let buttonHeldFor = i;
            let timeLeft = time - i;
            let distanceTravelled = buttonHeldFor * timeLeft;

            console.log("Time is: " + time);
            console.log("buttonHeldFor is: " + buttonHeldFor);
            console.log("Time left is: " + timeLeft);
            console.log("distanceTravelled is: " + distanceTravelled);
        }
    }
}

beatRaces(races)