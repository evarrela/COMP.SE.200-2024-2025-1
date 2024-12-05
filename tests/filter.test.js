import filter from '../src/filter';

describe('filter function', () => {
    
  // Test: Empty Array
  test('returns an empty array when input array is empty', () => {
    const result = filter([], ({ active }) => active);
    expect(result).toEqual([]);
  });

  // Test: Filter by Category (FR_01)
  test('filters products by category', () => {
    const products = [
      { name: 'Milk', category: 'Dairy' },
      { name: 'Bread', category: 'Bakery' },
      { name: 'Cheese', category: 'Dairy' },
    ];

    const result = filter(products, (product) => product.category === 'Dairy');
    expect(result).toEqual([
      { name: 'Milk', category: 'Dairy' },
      { name: 'Cheese', category: 'Dairy' },
    ]);
  });

  // Test: Filter by Price Range (FR_02)
  test('filters products by price range', () => {
    const products = [
      { name: 'Snack1', price: 5 },
      { name: 'Snack2', price: 10 },
      { name: 'Snack3', price: 20 },
    ];

    const result = filter(products, (product) => product.price >= 5 && product.price <= 15);
    expect(result).toEqual([
      { name: 'Snack1', price: 5 },
      { name: 'Snack2', price: 10 },
    ]);
  });

  // Test: Filter by Ingredients (FR_03)
  test('filters products by ingredients', () => {
    const products = [
      { name: 'Snack1', ingredients: ['gluten', 'sugar'] },
      { name: 'Snack2', ingredients: ['sugar-free'] },
      { name: 'Snack3', ingredients: ['gluten-free'] },
    ];

    const result = filter(products, (product) => product.ingredients.includes('gluten-free'));
    expect(result).toEqual([
      { name: 'Snack3', ingredients: ['gluten-free'] },
    ]);
  });

  // Test: Filter by Producer (FR_04)
  test('filters products by producer', () => {
    const products = [
      { name: 'Snack1', producer: 'John' },
      { name: 'Snack2', producer: 'Jane' },
      { name: 'Snack3', producer: 'John' },
    ];

    const result = filter(products, (product) => product.producer === 'John');
    expect(result).toEqual([
      { name: 'Snack1', producer: 'John' },
      { name: 'Snack3', producer: 'John' },
    ]);
  });

  // Test: Handles non-array input gracefully
  test('returns an empty array if input is not an array', () => {
    const result = filter(null, (item) => item.active);
    expect(result).toEqual([]);
  });

});
