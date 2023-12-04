//count how many characters in a line = this is a var
//make array of location of all special characters - type / line no / location num
//loop through to look for digits. Check their locations against symbol locations

let charInLine = 10;
//line breaks and white spaces removed already
let input = "467..114.. ...*...... ..35..633. ......#... 617*...... .....+.58. ..592..... ......755. ...$.*.... .664.598..";
let symbolPosition = [];
let inputArr = input.split(" ")
let adjacentNo;

function findSymbolPosition(arr) {
    let lineNo;

    for (let i = 0; i < arr.length; i++) {
        lineNo = i+1;

        for (let j = 0; j < arr[i].length; j++) {
            let positionNo = j+1;
            let currentChar = arr[i][j];
            symbolPosition.push([currentChar, lineNo, positionNo]);
        };
    };
}

function checkSymbolPosition(arr) {
    let specialCharsRegex = /[*@#$+%/&=-]/;

    // loop through the symbolPosition array
    for (let i = 0; i < arr.length; i++) {

        // for each one, check if it's a digit
        if (!isNaN(arr[i][0])) {
            // console.log("Looping through: " + arr[i][0] + ", line: " + arr[i][1] + " position: " + arr[i][2])
            
            //If there's a var to the right & it's a symbol
            //Add left / above / below here too?
            if (((i+1) < arr.length) & specialCharsRegex.test(arr[i+1][0])) {
                currentNumber = arr[i][0];
                previousNumber = (arr[i - 1] && arr[i - 1][0] !== undefined) ? arr[i - 1][0] : NaN;
                previousPreviousNumber = (arr[i - 2] && arr[i - 2][0] !== undefined) ? arr[i - 2][0] : NaN;
                currentArr = arr[i];

                // find full number it belongs to
                // this is testing for right, so it will be the end number of a longer one

                /////////// Write another loop here to account for numbers bigger than 3
                adjacentNo = currentNumber; //push to this but add to the front

                checkIfPreviousNoIsDigit(); //if digit, add to beginning of adjacentNo 
                let toMinus = 1;

                function checkIfPreviousNoIsDigit(toMinus) {
                    if (!isNaN(arr[(i - toMinus)][0])) { //if it's a digit
                        
                        adjacentNo = arr[(i - toMinus)][0] + currentNumber;
                        toMinus += 1; //add to toMinus for next round of checks
                        checkIfPreviousNoIsDigit()

                    } else {
                        console.log("This is the full adjacentNo number: " + adjacentNo)
                    }
                }

                
                // save that number if it isn't a duplicate                              
                
            }
        }
    };      
}

// function findFullNumberGoingLeft(currentNumber, previousNumber, previousPreviousNumber, currentArr) {
//     console.log("current number is: " + currentNumber)
//     console.log("previous number is: " + previousNumber)
//     console.log("previous previous number is: " + previousPreviousNumber)
//     console.log(currentArr)

//     let adjacentNo = "";

//     // check if num is digit
//     if (/^[0-9]*$/.test(previousPreviousNumber)) {
//         adjacentNo += previousPreviousNumber;
//     }

//     if (/^[0-9]*$/.test(previousNumber)) {
//         adjacentNo += previousNumber;
//     }

//     adjacentNo += currentNumber;

//     console.log("adjecentNo is: " + adjacentNo);

//     //check if digit is actually a number
// }

findSymbolPosition(inputArr)
checkSymbolPosition(symbolPosition)