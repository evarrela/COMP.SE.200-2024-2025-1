import chunk from '../src/chunk';

describe('chunk function (Product Listing & Pagination)', () => {

  // Test: Splits product list into pages of size 2 (FR_01, usability)
  test('splits product list into chunks of size 2', () => {
    const products = ['Product1', 'Product2', 'Product3', 'Product4'];
    expect(chunk(products, 2)).toEqual([['Product1', 'Product2'], ['Product3', 'Product4']]);
  });

  // Test: Handles uneven division of products into chunks (FR_01, usability)
  test('handles uneven division of products into chunks', () => {
    const products = ['Product1', 'Product2', 'Product3'];
    expect(chunk(products, 2)).toEqual([['Product1', 'Product2'], ['Product3']]);
  });

  // Test: Returns single chunk if size exceeds product list length (FR_01, usability)
  test('returns single chunk if size exceeds product list length', () => {
    expect(chunk(['Product1', 'Product2'], 5)).toEqual([['Product1', 'Product2']]);
  });

  // Test: Returns an empty array if size is zero or negative
  test('returns empty array if size is zero or negative', () => {
    expect(chunk(['Product1', 'Product2'], 0)).toEqual([]);
    expect(chunk(['Product1', 'Product2'], -1)).toEqual([]);
  });

  // Test: Splits product categories for display (FR_01, usability)
  test('splits product categories into chunks for display', () => {
    const categories = ['Dairy', 'Bakery', 'Snacks', 'Beverages'];
    expect(chunk(categories, 2)).toEqual([['Dairy', 'Bakery'], ['Snacks', 'Beverages']]);
  });
});
