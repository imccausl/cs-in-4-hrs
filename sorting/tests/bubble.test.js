const bubbleSort = require('../bubble');

describe('bubble sort', () => {
  test('should sort correctly', () => {
    const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

    bubbleSort(nums);
    expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('should be able to sort even with two of the same numbers', () => {
    const nums = [14, 10, 13, 5, 5, 3, 12, 8, 11, 11, 2, 15, 6, 4, 16, 7, 9, 12, 1, 1];

    bubbleSort(nums);
    expect(nums).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 11, 11, 12, 12, 13, 14, 15, 16]);
  });
});
