function getAnswer() {
 
    let arr = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"]
    let numsArr = getOnlyNumbers(arr)
    let firstAndLast = getFirstAndLastNum(numsArr)
    let answer = parseAndAdd(firstAndLast)
    console.log(answer)
    
    // turn into ints and add together
  }
  
  // return string array with only numbers
  function getOnlyNumbers(array) {
    numArray = [];
    
    array.forEach((element) => {
      numArray.push(element.replace(/[^0-9]/g,""));
    });
    
    return numArray;
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
   
  getAnswer()
