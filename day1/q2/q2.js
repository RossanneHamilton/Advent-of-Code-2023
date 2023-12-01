function getAnswer(str) {

    let arr = str.split(" ")

    //convert numbers in each string
    converted = makeNumbers(arr)

    console.log(converted)

    // let numsArr = getOnlyNumbers(converted)
    // let firstAndLast = getFirstAndLastNum(numsArr)
    // let answer = parseAndAdd(firstAndLast)
    // console.log(answer)
}

// return string array with only numbers
function getOnlyNumbers(array) {
    numArray = [];

    array.forEach((element) => {
        numArray.push(element.replace(/[^0-9]/g, ""));
    });

    return numArray;
}

//convert numbers in each string
function makeNumbers(array) {
    newArray = [];
    
    array.forEach((element) => {
        let string
        string = element.replace("one", "1");
        string = string.replace("two", "2");
        string = string.replace("three", "3");
        string = string.replace("four", "4");
        string = string.replace("five", "5");
        string = string.replace("six", "6");
        string = string.replace("seven", "7");
        string = string.replace("eight", "8");
        string = string.replace("nine", "9");
        newArray.push(string);
    });

    return newArray

}

//return first and last char of each element in an array
function getFirstAndLastNum(array) {
    newArr = []

    array.forEach((element) => {
        newArr.push(element[0].concat(element[element.length - 1]));
    });

    return newArr;
}

// turn into ints and add together
function parseAndAdd(array) {
    let sum = 0

    array.forEach((element) => {
        num = parseInt(element)
        sum = sum + num
    });

    return sum
}

getAnswer("two1nine eightwothree abcone2threexyz xtwone3four 4nineeightseven2 zoneight234 7pqrstsixteen")