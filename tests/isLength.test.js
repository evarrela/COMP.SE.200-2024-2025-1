import isLength from '../src/isLength';

describe('isLength function (Input Validation)', () => {

  // Test: Validates positive integer length
  test('returns true for valid length', () => {
    expect(isLength(5)).toBe(true);
  });

  // Test: Returns false for non-integer values
  test('returns false for non-integer values', () => {
    expect(isLength(5.5)).toBe(false);
    expect(isLength('5')).toBe(false);
  });

  // Test: Returns false for negative values
  test('returns false for negative values', () => {
    expect(isLength(-1)).toBe(false);
  });

  // Test: Handles edge cases (MAX_SAFE_INTEGER)
  test('returns true for MAX_SAFE_INTEGER', () => {
    expect(isLength(9007199254740991)).toBe(true);
  });
});
