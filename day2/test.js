const inputString = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green";

//delete all instances of "Game x" in the string
const cleanedString = inputString.replace(/Game \d/g, '');

//turn string into array
//the first is empty, so array index corresponds with game number
function stringToArray(string, d1, d2, d3) {
    return string.split(d1).map(function (x) {
        return x.split(d2).map(function (y) {
            return y.split(d3);
        });
    });
}

// init cleaned array
let ballArray = stringToArray(cleanedString, ":", ";", ",");

// init new array
let ballTotalArray = [];

// look through array and create new one with ball totals in
function addBalls(arr) {


    for (let i = 0; i < arr.length; i++) {

        let blue = 0;
        let red = 0;
        let green = 0;

        for (let j = 0; j < arr[i].length; j++) {

            for (let k = 0; k < arr[i][j].length; k++) {

                // if contains colour, add that digit
                if (arr[i][j][k].includes("red")) {
                    red += Number(arr[i][j][k].match(/\d+/g))
                }

                if (arr[i][j][k].includes("blue")) {
                    blue += Number(arr[i][j][k].match(/\d+/g))
                }

                if (arr[i][j][k].includes("green")) {
                    green += Number(arr[i][j][k].match(/\d+/g))
                }
            }
        }

        console.log("red " + red)
        console.log("blue " + blue)
        console.log("green " + green)

    }
}

addBalls(ballArray)

// function stringThing(str) {
//     console.log(Number(str.match(/\d/)))
// }

// stringThing(" 3 blue");

// console.log(ballArray[1][0])



