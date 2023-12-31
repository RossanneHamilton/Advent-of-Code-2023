const races = [[40709879,215105121471005]] //[time, distanceToBeat]
let answer = 1;

function beatRaces(races) {

    // Loop through each race
    for (let i = 0; i < races.length; i++) {
        let time = races[i][0];
        let distanceToBeat = races[i][1];
        let countOfWaysToBeat = 0;

        // loop through each millisecond available to hold the button for in the race
        for (let i = 1; i < (time + 1); i++) {
            let buttonHeldFor = i;
            let timeLeft = time - i;
            let distanceTravelled = buttonHeldFor * timeLeft;

            if (distanceTravelled > distanceToBeat) {
                countOfWaysToBeat += 1;
            }

        }

        answer *= countOfWaysToBeat;

        // console.log("Time is: " + time);
        // console.log("countOfWaysToBeat is: " + countOfWaysToBeat);
    }

    console.log("answer is: " + answer)
}

beatRaces(races)