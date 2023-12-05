const input = "seeds: 79 14 55 13 seed-to-soil map: 50 98 2 52 50 48 soil-to-fertilizer map: 0 15 37 37 52 2 39 0 15 fertilizer-to-water map: 49 53 8 0 11 42 42 0 7 57 7 4 water-to-light map: 88 18 7 18 25 70 light-to-temperature map: 45 77 23 81 45 19 68 64 13 temperature-to-humidity map: 0 69 1 1 0 69 humidity-to-location map: 60 56 37 56 93 4";

const inputWithoutWords = input.replace(/[a-zA-Z-]+/g, '');
const arrayWithoutColons = inputWithoutWords.split(': ');

// Get the part of the array containing the mappings and remove first element
let stringsArray = arrayWithoutColons.slice(1);

// Mapping each string to an array of numbers
let result = stringsArray.map(str => str.trim().split(/\s+/).map(Number));

// Process the arrays starting from the second one
for (let i = 1; i < result.length; i++) {
    const nestedArray = result[i];
    const groupedArrays = [];
    for (let j = 0; j < nestedArray.length; j += 3) {
        groupedArrays.push(nestedArray.slice(j, j + 3));
    }
    result[i] = groupedArrays;
}

// Seeds = result[0]
// seed-to-soil map: result[1]
// soil-to-fertilizer map: result[2]
// fertilizer-to-water map: result[3]
// water-to-light map: result[4]
// light-to-temperature map: result[5]
// temperature-to-humidity map: result[6]
// humidity-to-location map: result[7]


console.log(result);

