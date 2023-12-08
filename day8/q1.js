const input = "LLR AAA = (BBB, BBB) BBB = (AAA, ZZZ) ZZZ = (ZZZ, ZZZ)";
const inputArr = transformString(input);

function transformString(input) {
    const regex = /(\w+)\s*=\s*\(([\w\s,]+)\)/g;
    const result = [];

    let match;
    while ((match = regex.exec(input)) !== null) {
        const [, key, valuesStr] = match;
        const values = valuesStr.split(',').map(val => val.trim());

        result.push([key, values]);
    }

    const nestedArray = ['LLR'];
    for (const [key, values] of result) {
        const innerArray = [key];
        const nestedInnerArray = [innerArray, [values.map(val => [val]), values]];

        nestedArray.push(nestedInnerArray);
    }

    return nestedArray;
}

function howManySteps(array) {
    const leftOrRight = array[0];
    let currentPosition = "AAA";
    
    // loop through the chars in leftOrRight
    for (let i = 0; i < array[0].length; i++) {
        console.log("currentPosition is: " + currentPosition)
        console.log("Direction is: " + array[0][i])

        // find currentPosition in array - first instance of currentPosition in array
        console.log("AAA is here: " + array[1][0][0])
        let indexOfCurrentPosition = array.indexOf(currentPosition)
        console.log("index of currentPosition is here: " + indexOfCurrentPosition)

        // let left = 
        // console.log("left is: " + left)
        // let newPosition;




        //if still haven't found zzz, loop through chars in leftOrRight again
    }
}

console.log(inputArr);
howManySteps(inputArr)
