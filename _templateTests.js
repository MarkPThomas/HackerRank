const testCases = [
{ input: '',
  expected: ''},
];

testCases.forEach((testCase) => {
  // let result = FUT(testCase.input); // insert function name here
  let pass = result === testCase.expected;
  console.log(`Input: ${testCase.input}\nExpected: ${testCase.expected}\nResult: ${result}\nPass: ${pass}\n`);
  }
);

// Note: In HackerRank, replace function call in main with process.stdout.write(FUT(arr));