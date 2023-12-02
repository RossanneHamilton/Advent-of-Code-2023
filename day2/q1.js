const inputString = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green";

// Delete all instances of "Game x" in the string
const cleanedString = inputString.replace(/Game \d/g, '');

// Turn string into array
function stringToArray(string, d1, d2, d3) {
    return string.split(d1).map(function (x) {
        return x.split(d2).map(function (y) {
            return y.split(d3);
        });
    });
}

// Initialize cleaned array
let ballArray = stringToArray(cleanedString, ":", ";", ",");

// Initialize new array
let ballTotalArray = [];

// Look through array and create a new one with ball totals
function addBalls(arr) {
    let ballTotalArray = [];
    for (let i = 0; i < arr.length; i++) {
        let blue = 0;
        let red = 0;
        let green = 0;
        for (let j = 0; j < arr[i].length; j++) {
            for (let k = 0; k < arr[i][j].length; k++) {
                if (arr[i][j][k].includes("red")) {
                    red += Number(arr[i][j][k].match(/\d+/g)[0]);
                }
                if (arr[i][j][k].includes("blue")) {
                    blue += Number(arr[i][j][k].match(/\d+/g)[0]);
                }
                if (arr[i][j][k].includes("green")) {
                    green += Number(arr[i][j][k].match(/\d+/g)[0]);
                }
            }
        }
        ballTotalArray.push([red, green, blue]); // Push the sums of colors to ballTotalArray
    }
    return ballTotalArray;
}

// Compare amounts in arrays
function isHigherOrEqual(dataArr, questionArr) {
    let answerArray = [];
    for (let i = 0; i < dataArr.length; i++) {
        let isPossible = true; // Initialize isPossible as true
        for (let j = 0; j < dataArr[i].length; j++) {
            if (dataArr[i][j] > questionArr[j]) {
                isPossible = false;
                break; // Break the loop if any element is less than the corresponding element in questionArr
            }
        }
        answerArray.push([i, isPossible]);
    }
    console.log(answerArray);
}

let dataArr = addBalls(ballArray);
isHigherOrEqual(dataArr, [12, 13, 14]);
