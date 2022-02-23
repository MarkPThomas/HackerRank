/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function formatted(precision = 6, positive = 0, negative = 0, zero = 0) {
    return `${positive.toFixed(precision)}\n${negative.toFixed(precision)}\n${zero.toFixed(precision)}`;
}

function formattedEmpty(precision = 6) {
    let emptyValue = 0;
    let empty = emptyValue.toFixed(precision);
    return `${empty}\n${empty}\n${empty}`;
}

function plusMinus(arr) {
    const precision = 6;

    if (!arr) {
        return formattedEmpty(precision);
    }

    const arrLength = arr.length;
    if (arrLength === 0 || 100 < arrLength) {
        return formattedEmpty(precision);
    }

    let numPositive = 0;
    let numZero = 0;
    let numNegative = 0;
    for (let i = 0; i < arrLength; i++) {
        let arrValue = arr[i];
        if (arrValue < -100 || 100 < arrValue) {
            return formattedEmpty(precision);
        }

        if (arrValue < 0) {
            numNegative++;
        } else if (0 < arrValue) {
            numPositive++;
        } else {
            numZero++;
        }
    }

    return formatted(precision, numPositive / arrLength, numNegative / arrLength, numZero / arrLength);
}

const testCases = [
    { input: undefined,
        expected: '0.000000\n0.000000\n0.000000'},
    { input: [],
        expected: '0.000000\n0.000000\n0.000000'},
    { input: [ -200 ],
        expected: '0.000000\n0.000000\n0.000000'},
    { input: [ 200 ],
        expected: '0.000000\n0.000000\n0.000000'},
    { input: [ 1, 1, 0, -1, -1 ],
        expected: '0.400000\n0.400000\n0.200000'},
    { input: [ -4, 3, -9, 0, 4, 1 ],
        expected: '0.500000\n0.333333\n0.166667'},
];

testCases.forEach((testCase) => {
    let result = plusMinus(testCase.input); // insert function name here
    let pass = result === testCase.expected;
    console.log(`Input: ${testCase.input}\nExpected: ${testCase.expected}\nResult: ${result}\nPass: ${pass}\n`);
    }
);

// Note: In HackerRank, replace function call in main with process.stdout.write(plusMinus(arr));