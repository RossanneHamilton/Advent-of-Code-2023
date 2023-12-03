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
                console.log(arr[i][0])
                console.log(arr[i])

                //TODO
                // if it's a digit, check if next to a symbol
                // loop through symbolPosition array again

                 for (let i2 = 0; i2 < arr.length; i2++) {

                     for (let j2 = 0; j2 < arr[i2].length; j2++) {

                        if (specialCharsRegex.test(arr[i2][j2])) {
                            console.log(arr[i2][j2] + " is a symbol at line: " + arr[i2][1] + " and position: " + arr[i2][2])

                            //use [i][j] of original loop to check positions against arr[i2][1] (line) & arr[i2][2] (position)
                            //need to find line and position of arr[i][j]
                            
                        }
                     }
                 }
            }
        
    };
        
}

findSymbolPosition(inputArr)
checkSymbolPosition(symbolPosition)