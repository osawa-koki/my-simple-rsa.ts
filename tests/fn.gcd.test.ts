import gcd from '../util/fn.gcd';

describe('gcd', () => {
  const testCases = [
    { inputs: [2, 3], expectedOutput: 1 },
    { inputs: [10, 25], expectedOutput: 5 },
    { inputs: [14, 21], expectedOutput: 7 },
    { inputs: [15, 18], expectedOutput: 3 },
    { inputs: [35, 49], expectedOutput: 7 },
    { inputs: [100, 125], expectedOutput: 25 },
    { inputs: [72, 96], expectedOutput: 24 },
    { inputs: [168, 216], expectedOutput: 24 },
    { inputs: [111, 123], expectedOutput: 3 },
    { inputs: [222, 123], expectedOutput: 3 },
  ];

  testCases.forEach(({ inputs, expectedOutput }) => {
    test(`gcd(${inputs}) returns ${expectedOutput}`, () => {
      const [a, b] = inputs;
      expect(gcd(a, b)).toBe(expectedOutput);
      expect(gcd(b, a)).toBe(expectedOutput);
    });
  });
});
