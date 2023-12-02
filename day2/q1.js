const inputString = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green";

let basicArr = arrayFromString(inputString)

function arrayFromString(str) {
    return str.split(/(?=Game \d+:)/);
}

console.log("basic arr is " + basicArr)

function SplitIt(str)
{
    let myArr=stringTo2dArray(str,/(?=Game \d+: )/,";");

    for(var i=0;i<myArr.length;i++)
    {
        for(var j=0;j<myArr[i].length;j++)
        {
         
            // console.log(myArr[i][j]);
        }
    }
}

function stringTo2dArray(string, d1, d2) {
    return string.split(d1).map(function(x){return x.split(d2)});
}

function splitArr(arr) {
    let newArr = []
    console.log("basic array:");
    for(var i=0;i<basicArr.length;i++)
    {
       
        console.log(basicArr[i].replace(/(?=Game \d+:)/,"")+ " "+i+"-------");
    }
    console.log("----end basic array");
    for (var i = 0; i < arr.length; i++) {
        line = basicArr[i].split(':');
        newArr.push(line);
        console.log(line);
    }

    // console.log("New Arr is " + newArr)
}
SplitIt(inputString);

console.log("basic: "+ basicArr);

splitArr(basicArr);

