const input = "32T3K 765 T55J5 684 KK677 28 KTJJT 220 QQQJA 483";
const parsedInput = parseInput(input);
let fiveOfKind = [];
let fourOfkind = [];
let fullHouse = [];
let threeOfKind = [];
let twoPair = [];
let onePair = [];
let highCard = [];

// parse data
function parseInput(inputString) {
    const regex = /(\w+\s\d+)/g; // Use regex to match the desired pattern (a string followed by a space and then a number)
    const matches = inputString.match(regex);
    const resultArray = matches.map(match => { // Process matches to create the array of arrays
        const [str, num] = match.split(' ');
        return [str, parseInt(num)];
    });

    return resultArray;
}

// Put each type in its own array. And then go through those arrays to determine weakest hands among them
// Then arrange each type array based on strength - check if it’s the same type, based on the individual cards
// Then combine these arrays back to a big array - weakest to strongest. Using (index + 1) as the rank number

// order by weakest to strongest hand
function sortByType(array) {
    for (let i = 0; i < array.length; i++) {
        let hand = array[i][0];
        let isFiveOfKind = hasXOfSame(hand, 5);
        let hasFourOfSame = hasXOfSame(hand, 4);

        // Check for type first. Higher types always win
        switch (true) { // Use switch with true to check conditions
            case isFiveOfKind:
                console.log("five of kind: " + hand);
                break;
            case hasFourOfSame:
                console.log("four of kind: " + hand);
                break;
            default:
                console.log("other: " + hand);
                break;
        }
    }
}

function hasXOfSame(str, int) {
    const charCount = {}; // Object to store character counts
  
    // Count occurrences of each character in the string
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      charCount[char] = (charCount[char] || 0) + 1; // Increment character count
    }
  
    // Check if any character occurs four times
    for (const char in charCount) {
      if (charCount[char] >= int) {
        return true; // Return true if a character occurs four or more times
      }
    }
  
    return false; // Return false if no character occurs four times
  }

sortByType(parsedInput);

// get answer
// iterate through all hands
// answer *= rank
// answer += bid
