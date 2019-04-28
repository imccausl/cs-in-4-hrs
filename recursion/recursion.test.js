const { factorial, fibonacci } = require('./recursion');

describe('factorial', () => {
  test('should do factorials', () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(10)).toBe(3628800);
  });
});

describe('fibonacci', () => {
  test('should do fibonacci', () => {
    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(20)).toBe(6765);
    expect(fibonacci(15)).toBe(610);
    expect(fibonacci(25)).toBe(75025);
    expect(fibonacci(28)).toBe(317811);
    expect(fibonacci(35)).toBe(9227465);
  });
});
