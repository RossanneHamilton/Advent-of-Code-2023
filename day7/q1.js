const input = "32T3K 765 T55J5 684 KK677 28 KTJJT 220 QQQJA 483";
const parsedInput = parseInput(input);
let fiveOfKind = [];
let fourOfkind = [];
let fullHouseArr = [];
let threeOfKind = [];
let pairsTwo = [];
let pairsOne = [];
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
        let fullHouse = findFullHouse(hand, 3, 2);
        let hasThreeOfSame = hasXOfSame(hand, 3);
        let twoPair = hasTwoPairs(hand);
        let onePair = hasXOfSame(hand, 2);

        // Check for type first. Higher types always win
        switch (true) { // Use switch with true to check conditions
            case isFiveOfKind:
                // console.log("five of kind: " + hand);
                fiveOfKind.push(hand);
                break;
            case hasFourOfSame:
                // console.log("four of kind: " + hand);
                fourOfkind.push(hand);
                break;
            case fullHouse:
                // console.log("full house: " + hand);
                fullHouseArr.push(hand);
                break;
            case hasThreeOfSame:
                // console.log("three of kind: " + hand);
                threeOfKind.push(hand);
                break;
            case twoPair:
                // console.log("two pair: " + hand);
                pairsTwo.push(hand);
                break;
            case onePair:
                // console.log("one pair: " + hand);
                pairsOne.push(hand);
                break;
            default:
                // console.log("high card: " + hand);
                highCard.push(hand);
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
            // console.log(charCount);
            return true; // Return true if a character occurs four or more times
        }
    }

    // console.log(charCount);
    return false; // Return false if no character occurs x times
}

function findFullHouse(str, x, y) {
    const charCount = {}; // Object to store character counts

    // Count occurrences of each character in the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1; // Increment character count
    }

    let countX = 0; // Count of characters appearing x times
    let countY = 0; // Count of characters appearing y times

    // Count characters appearing x and y times
    for (const char in charCount) {
        if (charCount[char] === x) {
            countX++;
        } else if (charCount[char] === y) {
            countY++;
        }
    }

    // Return true if there is exactly one character appearing three times and one character appearing twice (full house)
    return (countX === 1 && countY === 1);
}


function hasTwoPairs(str) {
    const charCount = {}; // Object to store character counts

    // Count occurrences of each character in the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1; // Increment character count
    }

    let pairs = 0;

    // Count characters appearing twice
    for (const char in charCount) {
        if (charCount[char] === 2) {
            pairs++;
        }
    }

    // Return true if there are exactly two characters appearing twice each (two pairs)
    return pairs === 2;
}

sortByType(parsedInput);
console.log("fiveOfKind: " + fiveOfKind)
console.log("fourOfkind: " + fourOfkind)
console.log("fullHouse: " + fullHouseArr)
console.log("threeOfKind: " + threeOfKind)
console.log("twoPair: " + pairsTwo)
console.log("onePair: " + pairsOne)
console.log("highCard: " + highCard)


// get answer
// iterate through all hands
// answer *= rank
// answer += bid
