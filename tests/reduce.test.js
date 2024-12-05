import reduce from '../src/reduce';

describe('reduce function (Cart Summary)', () => {
  
  // Test: Reduces an array to sum the prices of products (FR_08)
  test('sums product prices in the cart', () => {
    const prices = [5, 10, 15];
    const result = reduce(prices, (total, price) => total + price, 0);
    expect(result).toBe(30);
  });

  // Test: Reduces an object to group product quantities (FR_08)
  test('groups product quantities', () => {
    const products = [
      { name: 'Apple', quantity: 2 },
      { name: 'Banana', quantity: 3 },
    ];
    const result = reduce(products, (acc, item) => acc + item.quantity, 0);
    expect(result).toBe(5);
  });

  // Test: Reduces with no initial accumulator
  test('uses the first element as initial accumulator when not provided', () => {
    const numbers = [1, 2, 3];
    const result = reduce(numbers, (acc, n) => acc + n);
    expect(result).toBe(6);
  });

  // Test: Handles empty collections
  test('returns initial value if collection is empty', () => {
    expect(reduce([], (acc, n) => acc + n, 10)).toBe(10);
  });
});
