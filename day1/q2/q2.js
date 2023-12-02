function sumOfCalibrationValues(testData) {

    let arr = testData.split(" ")
    console.log(arr)

    sum(arr.map(calibrationValue))
}



sumOfCalibrationValues("two1nine eightwothree abcone2threexyz xtwone3four 4nineeightseven2 zoneight234 7pqrstsixteen")