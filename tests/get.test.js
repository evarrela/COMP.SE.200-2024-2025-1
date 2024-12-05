import get from '../src/get';

describe('get function (Product Information Retrieval)', () => {
  const product = { 
    details: { name: 'Organic Honey', price: 12.99, stock: 50 },
    category: 'Snacks'
  };

  // Test: Retrieves product name (FR_05)
  test('retrieves product name from object', () => {
    expect(get(product, 'details.name')).toBe('Organic Honey');
  });

  // Test: Retrieves price and ensures two decimal precision (FR_05)
  test('retrieves product price with precision', () => {
    expect(get(product, 'details.price')).toBe(12.99);
  });

  // Test: Retrieves default value when path is invalid
  test('returns default value for invalid path', () => {
    expect(get(product, 'details.discount', 'Not Available')).toBe('Not Available');
  });

  // Test: Retrieves nested values using array path (FR_05)
  test('retrieves nested values using array path', () => {
    const nestedObject = { a: [{ b: { c: 'Found' } }] };
    expect(get(nestedObject, ['a', '0', 'b', 'c'])).toBe('Found');
  });

  // Test: Handles undefined object input gracefully
  test('returns undefined for undefined object input', () => {
    expect(get(undefined, 'details.name')).toBeUndefined();
  });

  // Test: Retrieves producer information from nested object (FR_05)
  test('retrieves producer name from nested object', () => {
    const producer = { producerInfo: { name: 'Local Farmer' } };
    expect(get(producer, 'producerInfo.name')).toBe('Local Farmer');
  });
});
