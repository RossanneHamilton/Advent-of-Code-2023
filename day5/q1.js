const input = "seeds: 79 14 55 13 seed-to-soil map: 50 98 2 52 50 48 soil-to-fertilizer map: 0 15 37 37 52 2 39 0 15 fertilizer-to-water map: 49 53 8 0 11 42 42 0 7 57 7 4 water-to-light map: 88 18 7 18 25 70 light-to-temperature map: 45 77 23 81 45 19 68 64 13 temperature-to-humidity map: 0 69 1 1 0 69 humidity-to-location map: 60 56 37 56 93 4";

const inputWithoutWords = input.replace(/[a-zA-Z-]+/g, '');
const arrayWithoutColons = inputWithoutWords.split(': ');

// Get the part of the array containing the mappings and remove first element
let stringsArray = arrayWithoutColons.slice(1);

// Mapping each string to an array of numbers
let seedMapArr = stringsArray.map(str => str.trim().split(/\s+/).map(Number));

// Process the arrays starting from the second one
for (let i = 1; i < seedMapArr.length; i++) {
    const nestedArray = seedMapArr[i];
    const groupedArrays = [];
    for (let j = 0; j < nestedArray.length; j += 3) {
        groupedArrays.push(nestedArray.slice(j, j + 3));
    }
    seedMapArr[i] = groupedArrays;
}

console.log(seedMapArr)

// Seeds = seedMapArr[0]
// seed-to-soil map: seedMapArr[1]
// soil-to-fertilizer map: seedMapArr[2]
// fertilizer-to-water map: seedMapArr[3]
// water-to-light map: seedMapArr[4]
// light-to-temperature map: seedMapArr[5]
// temperature-to-humidity map: seedMapArr[6]
// humidity-to-location map: seedMapArr[7]

function findLowestLocation() {

    // getting just seed numbers
    const seedNums = seedMapArr[0];

    // Looping through the numbers within [79,14,55,13]
    for (let i = 0; i < seedNums.length; i++) {
        let seed = seedNums[i];
        getSoil(seed);
    }
}

function getSoil(seed) {

    //loop through seed->soil map
    for (let i = 0; i < seedMapArr[1].length; i++) {

        let destinationRangeStart = seedMapArr[1][i][0]
        let sourceRangeStart = seedMapArr[1][i][1];
        let rangeLength = seedMapArr[1][i][2]

        let seedList = findSeeds(sourceRangeStart, rangeLength);

        // console.log(seedList);

        // // check if the seed is in the seedList
        // if (seedList.includes(seed)) {
        //     console.log(`Seed ${seed} found in the seedList.`);
        //     // grab its soil num or perform any other action
        // } else {
        //     console.log(`Seed ${seed} not found in the seedList.`);
        // }

        //if so, grab its soil num

    }
}

function findSeeds(sourceRangeStart, rangeLength) {
    let seedNumList = [sourceRangeStart];

    //make seed num list
    for (let i = 0; i < (rangeLength - 1); i++) {
        sourceRangeStart += 1; // Increment sourceRangeStart directly
        seedNumList.push(sourceRangeStart);
    }

    return seedNumList;
}

findLowestLocation();

