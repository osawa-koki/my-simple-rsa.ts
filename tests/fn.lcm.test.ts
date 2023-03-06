import lcm from '../util/fn.lcm';

describe('lcm', () => {
  const testCases = [
    { inputs: [0, 0], expectedOutput: 0 },
    { inputs: [2, 3], expectedOutput: 6 },
    { inputs: [10, 25], expectedOutput: 50 },
    { inputs: [14, 21], expectedOutput: 42 },
    { inputs: [25, 100], expectedOutput: 100 },
  ];

  test.each(testCases)(
    'lcm(%i, %i) returns %i',
    ({ inputs, expectedOutput }) => {
      const [a, b] = inputs;
      expect(lcm(a, b)).toBe(expectedOutput);
    }
  );
});
