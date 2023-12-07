// Define the input string and parse it into a structured array
const input = "32T3K 765 T55J5 684 KK677 28 KTJJT 220 QQQJA 483";
const parsedInput = parseInput(input);

// Object to store hands of different types
let hands = {
  fiveOfKind: [],
  fourOfKind: [],
  fullHouse: [],
  threeOfKind: [],
  twoPair: [],
  onePair: [],
  highCard: [],
};

// Parse data function: Splits input into card strings and their corresponding values
function parseInput(inputString) {
  const regex = /(\w+\s\d+)/g; // Regular expression to match card strings and values
  const matches = inputString.match(regex); // Find all matches in the input
  const resultArray = matches.map(match => {
    const [str, num] = match.split(' '); // Split each match into card string and value
    return [str, parseInt(num)]; // Return array containing card string and parsed value
  });

  return resultArray; // Return structured array of cards and values
}

// Function to evaluate hands based on card occurrences
function evaluateHands(array) {
  array.forEach(hand => {
    const [cards, value] = hand;
    const cardValues = cards.split('').map(card => card.charCodeAt(0)); // Get ASCII values of cards

    const frequencies = {};
    cardValues.forEach(value => {
      frequencies[value] = (frequencies[value] || 0) + 1; // Count occurrences of each card value
    });

    const occurrences = Object.values(frequencies); // Get occurrences of each card value

    // Determine the type of hand based on occurrences and push it to respective category
    if (occurrences.includes(5)) {
      hands.fiveOfKind.push(hand);
    } else if (occurrences.includes(4)) {
      hands.fourOfKind.push(hand);
    } else if (occurrences.includes(3) && occurrences.includes(2)) {
      hands.fullHouse.push(hand);
    } else if (occurrences.includes(3)) {
      hands.threeOfKind.push(hand);
    } else if (occurrences.filter(val => val === 2).length === 2) {
      hands.twoPair.push(hand);
    } else if (occurrences.includes(2)) {
      hands.onePair.push(hand);
    } else {
      hands.highCard.push(hand);
    }
  });
}

// Evaluate the parsed input and categorize hands
evaluateHands(parsedInput);

// Function to sort hands by type and strength in reverse order
function sortByTypeAndStrength(handsObj) {
  const handTypes = [
    'fiveOfKind',
    'fourOfKind',
    'fullHouse',
    'threeOfKind',
    'twoPair',
    'onePair',
    'highCard',
  ];

  const orderedHands = handTypes.flatMap(type => handsObj[type].reverse());
  return orderedHands; // Return ordered hands (weakest to strongest)
}

// Sort hands by type and strength, then display the result
const orderedHands = sortByTypeAndStrength(hands);
console.log(orderedHands.reverse()); // Reverse the final ordered hands to weakest first

