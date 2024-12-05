import upperFirst from '../src/upperFirst';

describe('upperFirst function (Product Name Formatting FR_12)', () => {

  // Test: Capitalizes the first character of a product name
  test('capitalizes the first character of a string', () => {
    expect(upperFirst('apple')).toBe('Apple');
  });

  // Test: Returns the original string if already capitalized
  test('returns original string if already capitalized', () => {
    expect(upperFirst('Apple')).toBe('Apple');
  });

  // Test: Handles empty string input
  test('returns an empty string for empty input', () => {
    expect(upperFirst('')).toBe('');
  });
});
