// Input string containing hands
const input = "32T3K 765 T55J5 684 KK677 28 KTJJT 220 QQQJA 483";

// Parse the input string to create an array of arrays [hand, value]
const parsedInput = parseInput(input);

// Arrays to store different types of hands
let fiveOfKind = [];
let fourOfkind = [];
let fullHouseArr = [];
let threeOfKind = [];
let pairsTwo = [];
let pairsOne = [];
let highCard = [];

// Parse the input data into an array of arrays [[hand, value], ...]
function parseInput(inputString) {
    // Use regex to match the desired pattern (a string followed by a space and then a number)
    const regex = /(\w+\s\d+)/g;
    const matches = inputString.match(regex);
    const resultArray = matches.map(match => {
        const [str, num] = match.split(' ');
        return [str, parseInt(num)];
    });

    return resultArray;
}

// Categorise hands into different arrays based on their type
function sortByType(array) {
    for (let i = 0; i < array.length; i++) {
        let hand = array[i][0];
        let isFiveOfKind = hasXOfSame(hand, 5);
        let hasFourOfSame = hasXOfSame(hand, 4);
        let fullHouse = findFullHouse(hand, 3, 2);
        let hasThreeOfSame = hasXOfSame(hand, 3);
        let twoPair = hasTwoPairs(hand);
        let onePair = hasXOfSame(hand, 2);

        // Check for hand type
        switch (true) {
            case isFiveOfKind:
                fiveOfKind.push([hand, array[i][1]]);
                break;
            case hasFourOfSame:
                fourOfkind.push([hand, array[i][1]]);
                break;
            case fullHouse:
                fullHouseArr.push([hand, array[i][1]]);
                break;
            case hasThreeOfSame:
                threeOfKind.push([hand, array[i][1]]);
                break;
            case twoPair:
                pairsTwo.push([hand, array[i][1]]);
                break;
            case onePair:
                pairsOne.push([hand, array[i][1]]);
                break;
            default:
                highCard.push([hand, array[i][1]]);
                break;
        }
    }
}

// Check if a hand has x of the same character
function hasXOfSame(str, int) {
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char in charCount) {
        if (charCount[char] >= int) {
            return true;
        }
    }

    return false;
}

// Check if a hand has a full house
function findFullHouse(str, x, y) {
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let countX = 0;
    let countY = 0;

    for (const char in charCount) {
        if (charCount[char] === x) {
            countX++;
        } else if (charCount[char] === y) {
            countY++;
        }
    }

    return countX === 1 && countY === 1;
}

// Check if a hand has two pairs
function hasTwoPairs(str) {
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let pairs = 0;
    for (const char in charCount) {
        if (charCount[char] === 2) {
            pairs++;
        }
    }

    return pairs === 2;
}

// Sort the hands within each category based on the winning order
function sortByWinningHands(array) {
    let sortedHands = [...array];

    for (let i = 0; i < sortedHands.length - 1; i++) {
        let currentHand = sortedHands[i][0];
        let nextHand = sortedHands[i + 1][0];

        for (let j = 0; j < currentHand.length; j++) {
            let currentChar = currentHand[j];
            let nextChar = nextHand[j];

            let isHigher = compareChars(currentChar, nextChar);

            if (isHigher) {
                let temp = sortedHands[i];
                sortedHands[i] = sortedHands[i + 1];
                sortedHands[i + 1] = temp;
                break;
            } else if (!isHigher && j === currentHand.length - 1) {
                break;
            }
        }
    }

    return sortedHands;
}

// Compare characters based on their rank order
function compareChars(char1, char2) {
    const rankOrder = "23456789TJQKA";
    const rank1 = rankOrder.indexOf(char1);
    const rank2 = rankOrder.indexOf(char2);

    return rank1 > rank2;
}

// Categorise the hands
sortByType(parsedInput);

// Sort each category based on winning order
fiveOfKind = sortByWinningHands(fiveOfKind);
fourOfkind = sortByWinningHands(fourOfkind);
fullHouseArr = sortByWinningHands(fullHouseArr);
threeOfKind = sortByWinningHands(threeOfKind);
pairsTwo = sortByWinningHands(pairsTwo);
pairsOne = sortByWinningHands(pairsOne);
highCard = sortByWinningHands(highCard);

// Print sorted hands based on winning order for each category
console.log("Sorted hands based on winning order:");
console.log("Five of a Kind:", fiveOfKind);
console.log("Four of a Kind:", fourOfkind);
console.log("Full House:", fullHouseArr);
console.log("Three of a Kind:", threeOfKind);
console.log("Two Pairs:", pairsTwo);
console.log("One Pair:", pairsOne);
console.log("High Card:", highCard);
