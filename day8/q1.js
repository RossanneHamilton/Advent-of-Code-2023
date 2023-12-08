const input = "LLR AAA = (BBB, BBB) BBB = (AAA, ZZZ) ZZZ = (ZZZ, ZZZ)";
const transformed = transformString(input);

function transformString(input) {
    const regex = /(\w+)\s*=\s*\(([\w\s,]+)\)/g;
    const result = [];

    let match;
    while ((match = regex.exec(input)) !== null) {
        const [, key, valuesStr] = match;
        const values = valuesStr.split(',').map(val => val.trim());

        result.push([key, values]);
    }

    const nestedArray = ['LLR'];
    for (const [key, values] of result) {
        const innerArray = [key];
        const nestedInnerArray = [innerArray, [values.map(val => [val]), values]];

        nestedArray.push(nestedInnerArray);
    }

    return nestedArray;
}

console.log(transformed);
