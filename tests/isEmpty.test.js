import isEmpty from '../src/isEmpty';

describe('isEmpty function (Input Validation, UX)', () => {

  // Test: Returns true for null and undefined values
  test('returns true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  // Test: Returns true for empty objects
  test('returns true for empty objects', () => {
    expect(isEmpty({})).toBe(true);
  });

  // Test: Returns true for empty arrays
  test('returns true for empty arrays', () => {
    expect(isEmpty([])).toBe(true);
  });

  // Test: Returns false for non-empty arrays
  test('returns false for non-empty arrays', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  // Test: Returns false for objects with properties
  test('returns false for objects with properties', () => {
    expect(isEmpty({ key: 'value' })).toBe(false);
  });

  // Test: Returns false for non-empty strings
  test('returns false for non-empty strings', () => {
    expect(isEmpty('abc')).toBe(false);
  });
});
