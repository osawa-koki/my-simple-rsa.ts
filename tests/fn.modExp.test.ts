import modExp from '../util/fn.modExp';

describe('modExp', () => {
  const testCases = [
    { inputs: [2, 5, 13], expectedOutput: 6 },
    { inputs: [3, 7, 13], expectedOutput: 3 },
  ];

  testCases.forEach((obj) => {
    const [a, b, m] = obj.inputs;
    const expectedOutput = obj.expectedOutput;
    test(`modExp(${a}, ${b}, ${m}) returns ${expectedOutput}`, () => {
      expect(modExp(a, b, m)).toBe(expectedOutput);
    });
  });
});
