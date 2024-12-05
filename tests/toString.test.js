import toString from '../src/toString';

describe('toString function (Input Validation and displaying details)', () => {

  // Test: Converts product description to string (valid input)
  test('converts a valid product description to string', () => {
    const productDescription = 'This is a healthy snack.';
    expect(toString(productDescription)).toBe('This is a healthy snack.');
  });

  // Test: Converts null description to an empty string (FR_12)
  test('returns an empty string for null input', () => {
    expect(toString(null)).toBe('');
  });

  // Test: Converts array of ingredients to a string for display (FR_05)
  test('converts array of ingredients to comma-separated string', () => {
    const ingredients = ['gluten-free', 'sugar-free'];
    expect(toString(ingredients)).toBe('gluten-free,sugar-free');
  });

  // Test: Preserves sign of -0 in numeric fields (e.g., price = -0)
  test('preserves the sign of -0 in numeric fields', () => {
    expect(toString(-0)).toBe('-0');
  });

  // Test: Converts product name that contains symbols (Edge case)
  test('handles product name containing symbols', () => {
    expect(toString(Symbol('Organic'))).toBe('Symbol(Organic)');
  });

  // Test: Converts invalid product input (malformed data)
  test('handles invalid or undefined product input', () => {
    expect(toString(undefined)).toBe('');
  });
});
