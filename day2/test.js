const inputString = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green";

//delete all instances of "Game x" in the string
const cleanedString = inputString.replace(/Game \d/g, '');

//turn string into array
//the first game is empty, so array index corresponds with game number
function stringToArray(string, d1, d2, d3) {
    return string.split(d1).map(function(x) {
        return x.split(d2).map(function(y) {
            return y.split(d3);
        });
    });
}

let ballArray = stringToArray(cleanedString, ":", ";", ",");

console.log(ballArray)