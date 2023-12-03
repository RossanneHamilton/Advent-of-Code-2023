//count how many characters in a line = this is a var
//make array of location of all special characters - type / line no / location num
//loop through to look for digits. Check their locations against symbol locations

let charInLine = 10;
//line breaks and white spaces removed already
let input = "467..114.. ...*...... ..35..633. ......#... 617*...... .....+.58. ..592..... ......755. ...$.*.... .664.598..";
let symbolPosition = [];
let inputArr = input.split(" ")

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
            
            //Check if there's a var to the right & it's a symbol
            if (((i+1) < arr.length) & specialCharsRegex.test(arr[i+1][0])) {
                // rightVar = arr[i+1][0]
                
                // find full number it belongs to
                
                // save that number if it isn't a duplicate
                                
                
            }

        }
        
    };
        
}

findSymbolPosition(inputArr)
checkSymbolPosition(symbolPosition)