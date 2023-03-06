import gcd from '../util/fn.gcd';

describe('gcd', () => {
  const testCases = [
    { inputs: [0, 0], expectedOutput: 0 },
    { inputs: [2, 3], expectedOutput: 1 },
    { inputs: [10, 25], expectedOutput: 5 },
    { inputs: [14, 21], expectedOutput: 7 },
    { inputs: [25, 100], expectedOutput: 25 },
  ];

  test.each(testCases)(
    'gcd(%i, %i) returns %i',
    ({ inputs, expectedOutput }) => {
      const [a, b] = inputs;
      expect(gcd(a, b)).toBe(expectedOutput);
    }
  );
});
