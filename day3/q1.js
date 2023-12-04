// Define the input string containing characters and symbols
let input = "467..114.. ...*...... ..35..633. ......#... 617*...... .....+.58. ..592..... ......755. ...$.*.... .664.598..";

// Array to store positions of characters: [character, line number, position number]
let symbolPosition = [];

// Split the input string into an array of characters and symbols separated by spaces
let inputArr = input.split(" ");

// Array to store adjacent numbers found based on specific criteria
let adjacentNumbers = [];

// Function to find positions of characters in the input array
function findSymbolPosition(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            // Get line number and position number of each character
            let lineNo = i + 1;
            let positionNo = j + 1;
            let currentChar = arr[i][j];

            // Store character position information in the symbolPosition array
            symbolPosition.push([currentChar, lineNo, positionNo]);
        }
    }
}

// Function to check for adjacent numbers based on specific conditions
function checkSymbolPosition(arr) {
    // Regular expression to identify special characters/symbols
    let specialCharsRegex = /[*@#$+%/&=-]/;

    for (let i = 0; i < arr.length; i++) {
        // Check if the current character is a digit
        if (!isNaN(arr[i][0])) {
            // Check if the next character is a special character/symbol
            if (((i + 1) < arr.length) && specialCharsRegex.test(arr[i + 1][0])) {
                // Initialise variables for current adjacent number
                let currentNumber = arr[i][0];
                let toMinus = 1;
                let adjacentNo = currentNumber;

                // Function to recursively check for previous digits in the sequence
                toMinus = checkIfPreviousNoIsDigit(i, toMinus, arr, adjacentNo);

                // Push the found adjacent number into the adjacentNumbers array
                adjacentNumbers.push(adjacentNo);
            }
        }
    }
}

// Recursive function to check for previous digits in the sequence
function checkIfPreviousNoIsDigit(i, toMinus, arr, adjacentNo) {
    if (i - toMinus >= 0 && !isNaN(arr[i - toMinus][0])) {
        // Concatenate previous digit to the current adjacent number
        adjacentNo = arr[i - toMinus][0] + adjacentNo;
        toMinus++;
        return checkIfPreviousNoIsDigit(i, toMinus, arr, adjacentNo);
    } else {
        // Log the full adjacent number found
        console.log("This is the full adjacentNo number: " + adjacentNo);

        let toPush = [adjacentNo, arr[i][1], (arr[i][2] - (toMinus - 1))];

        // Check before pushing if adjacentNumbers contains toPush


        adjacentNumbers.push(toPush); // [whole number, line number, position number of first digit]
        console.log("adjacentNumbers array is: " + adjacentNumbers);

    }
}

// Call function to find positions of characters in the input array
findSymbolPosition(inputArr);

// Call function to check for adjacent numbers based on specific criteria
checkSymbolPosition(symbolPosition);

