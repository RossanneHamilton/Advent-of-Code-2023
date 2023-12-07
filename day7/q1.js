const input = "32T3K 765 T55J5 684 KK677 28 KTJJT 220 QQQJA 483";

// parse data
function parseinput(inputString) {
    const regex = /(\w+\s\d+)/g; // Use regex to match the desired pattern (a string followed by a space and then a number)
    const matches = inputString.match(regex);
    const resultArray = matches.map(match => { // Process matches to create the array of arrays
    const [str, num] = match.split(' ');
    return [str, parseInt(num)];
    });

    console.log(resultArray);
    return resultArray;
}


// order by weakest to strongest hand
    // Check for type first. Higher types always win
        // Put each type in its own array. And then go through those arrays to determine weakest hands among them
    // Then arrange each type array based on strength - check if it’s the same type, based on the individual cards
    // Then combine these arrays back to a big array - weakest to strongest. Using (index + 1) as the rank number

// get answer
    // iterate through all hands
    // answer *= rank
    // answer += bid

parseinput(input);