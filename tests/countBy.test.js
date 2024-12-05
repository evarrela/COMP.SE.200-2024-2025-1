import countBy from '../src/countBy';

describe('countBy function (Product Counting)', () => {

  // Test: Counts products by their active status (Helper methods to improve UX in product management)
  test('counts products by active status', () => {
    const users = [
      { user: 'Milk', active: true },
      { user: 'Butter', active: true },
      { user: 'Honey', active: false },
    ];
    const result = countBy(users, (user) => user.active);
    expect(result).toEqual({ true: 2, false: 1 });
  });

  // Test: Counts products by category (Helper methods to improve UX in product management)
  test('counts products by category', () => {
    const products = [
      { name: 'Milk', category: 'Dairy' },
      { name: 'Cheese', category: 'Dairy' },
      { name: 'Bread', category: 'Bakery' },
    ];
    const result = countBy(products, (product) => product.category);
    expect(result).toEqual({ Dairy: 2, Bakery: 1 });
  });
});
