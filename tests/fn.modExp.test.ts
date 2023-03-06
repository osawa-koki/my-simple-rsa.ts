import modExp from '../util/fn.modExp';

describe('modExp', () => {
  const testCases = [
    { inputs: [2, 5, 13], expectedOutput: 6 },
    { inputs: [3, 7, 13], expectedOutput: 3 },
  ];

  testCases.forEach(({ inputs, expectedOutput }) => {
    const [a, b, m] = inputs;
    test(`modExp(${a}, ${b}, ${m}) returns ${expectedOutput}`, () => {
      expect(modExp(a, b, m)).toBe(expectedOutput);
    });
  });
});
