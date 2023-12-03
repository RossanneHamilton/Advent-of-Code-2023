//count how many characters in a line = this is a var
//make array of location of all special characters - type / line no / location num
//loop through to look for digits. Check their locations against symbol locations

let charInLine = 10;
//line breaks and white spaces removed already
let input = "467..114.. ..35..633. 617*...... .....+.58. ..592..... ......755. .664.598..";
let symbolPosition = [];
let inputArr = input.split(" ")

console.log(inputArr)

function findSymbolPosition(arr) {
    let lineNo;
    let positionNo;

    for (let i = 0; i < arr.length; i++) {
        lineNo = i+1;
        console.log("line number: " + lineNo)

        for (let i = 0; i < arr.length; i++) {
            positionNo = i+1;
            console.log("positionNo: " + positionNo)
        };
    };
}

findSymbolPosition(inputArr)