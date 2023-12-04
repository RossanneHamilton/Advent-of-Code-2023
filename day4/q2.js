const stringData = "Card 1: 41 48 83 86 17 | 83 86 6 31 17 9 48 53 Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19 Card 3: 1 21 53 59 44 | 69 82 63 72 16 21 14 1 Card 4: 41 92 73 84 69 | 59 84 76 51 58 5 54 83 Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36 Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11";
let totalScore = 0;

const dataArray = stringData.split(/Card \d+: /).slice(1).map(card => {
    return card.trim().split(' | ').map(numbers => numbers.split(' ').map(Number));
});

function findMatchingNumbers(cards) {
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const leftSide = card[0];
        const rightSide = card[1];
        
        const matches = rightSide.filter(num => leftSide.includes(num));
        
        if (matches.length > 0) {

            //find numbers of all winning cards, and how many matching numbers they had
            console.log("Card no: " + (i + 1) + " had " + matches.length);


            
            //find the numbers of cards you win because of this card
            let copiesWon = [];
            let currentCardNo = (i + 1);
            let nextCardNo = (i + 1)

            for (let i = 0; i < (matches.length); i++) {
                
                copiesWon.push(nextCardNo + 1);
                nextCardNo += 1;
                
            } 

            console.log("Card no: " + currentCardNo + " wins you these " + copiesWon);

        } 
    }

    console.log(totalScore);
}

function calculateScore(count) {
    return Math.pow(2, count - 1);
}

findMatchingNumbers(dataArray);