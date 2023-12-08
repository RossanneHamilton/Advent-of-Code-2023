const input = "LLR AAA = (BBB, BBB) BBB = (AAA, ZZZ) ZZZ = (ZZZ, ZZZ)";

function parseLLRString(input) {
    const llr = input.split(' ')[0].split('');
    const parts = input.match(/\w+\s*=\s*\(\w+,\s*\w+\)/g);

    if (!parts) {
        return [];
    }

    const result = parts.map(part => {
        const [key, valuesStr] = part.split('=');
        const [value1, value2] = valuesStr.match(/\w+/g);
        return [[key.trim()], [[value1], [value2]]];
    });

    return [llr, result];
}

const [directionArr, mapArr] = parseLLRString(input);
console.log(directionArr);
console.log(mapArr);
