//count how many characters in a line = this is a var
//make array of location of all special characters - type / line no / location num
//loop through to look for digits. Check their locations against symbol locations

let charInLine = 10;
//line breaks and white spaces removed already
let input = "467..114....35..633.617*...........+.58...592...........755..664.598..";
let symbolPosition = [];

function findSymbolPosition(str) {
    let lineNo;
    let positionNo;

    //find line and save in var for array
    for (let i = 0; i < str.length; i++) {
        
        //unless 0-9 get first char of i and then plus 1. THIS WILL CHANGE WITH BIGGER DATASET
        if(i < 10) {
            lineNo = 1;
        } else {
            stringNo = (String(i).match(/\d/)[0])
            lineNo = Number(stringNo) + 1
        }
            
        //find position in line and save in var for array
        
    };
}

findSymbolPosition(input)