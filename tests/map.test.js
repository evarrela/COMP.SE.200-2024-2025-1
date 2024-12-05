import map from '../src/map';

describe('map function (Array Transformation)', () => {

  // Test: Formats product prices as strings with two decimal precision (FR_05: Product Information Display)
  test('formats product prices as strings with two decimal precision', () => {
    const products = [
      { name: 'Milk', price: 2.5 },
      { name: 'Bread', price: 1.8 },
    ];
    const result = map(products, (product) => ({
      ...product,
      price: product.price.toFixed(2),
    }));

    expect(result).toEqual([
      { name: 'Milk', price: '2.50' },
      { name: 'Bread', price: '1.80' },
    ]);
  });

  // Test: Extracts product names for display (FR_05: Product Information Display)
  test('extracts product names from product objects', () => {
    const products = [
      { name: 'Milk', category: 'Dairy' },
      { name: 'Cheese', category: 'Dairy' },
      { name: 'Bread', category: 'Bakery' },
    ];
    const result = map(products, (product) => product.name);

    expect(result).toEqual(['Milk', 'Cheese', 'Bread']);
  });

  // Test: Formats and displays producer information (FR_05: Product Information Display)
  test('formats and displays producer information', () => {
    const products = [
      { name: 'Honey', producer: { name: 'Local Farm', location: 'USA' } },
      { name: 'Cheese', producer: { name: 'Dairy Co.', location: 'France' } },
    ];
  
    const result = map(products, (product) => ({
      productName: product.name,
      producerInfo: `${product.producer.name} (${product.producer.location})`,
    }));
  
    expect(result).toEqual([
      { productName: 'Honey', producerInfo: 'Local Farm (USA)' },
      { productName: 'Cheese', producerInfo: 'Dairy Co. (France)' },
    ]);
  });
  

  // Test: Adds pagination prefix to product names (UX)
  test('adds pagination prefix to product names', () => {
    const products = ['Milk', 'Cheese', 'Bread'];
    const page = 1;
    const result = map(products, (name, index) => `${page}-${index + 1}: ${name}`);

    expect(result).toEqual(['1-1: Milk', '1-2: Cheese', '1-3: Bread']);
  });

  // Test: Sanitizes user input fields (FR_12: Input Validation)
  test('sanitizes user inputs', () => {
    const userInputs = [
      '  Apple  ',       
      ' BREAD!!! ',      
      'Milk@123',        
      '  CaKe ',         
      '',                
      '###!!@@!!',       
    ];

    const result = map(userInputs, (input) => {
      return input.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    });

    expect(result).toEqual([
      'apple',     
      'bread',     
      'milk123',   
      'cake',      
      '',       
      '',         
    ]);
  });

  // Test: Applies a dynamic CSS class based on stock availability (UX)
  test('assigns low-stock class for products with stock less than 5', () => {
    const products = [
      { name: 'Milk', stock: 10 },
      { name: 'Bread', stock: 2 },
    ];
    const result = map(products, (product) => ({
      name: product.name,
      class: product.stock < 5 ? 'low-stock' : 'in-stock',
    }));

    expect(result).toEqual([
      { name: 'Milk', class: 'in-stock' },
      { name: 'Bread', class: 'low-stock' },
    ]);
  });

  // Test: Handles empty array input (Edge Case)
  test('returns an empty array when input array is empty', () => {
    const result = map([], (value) => value);
    expect(result).toEqual([]);
  });

  // Test: Handles null or undefined array input (Edge Case)
  test('returns an empty array when input is null or undefined', () => {
    expect(map(null, (value) => value)).toEqual([]);
    expect(map(undefined, (value) => value)).toEqual([]);
  });

  // Test: Maps over array of numbers and returns squares
  test('returns an array of squared numbers', () => {
    const numbers = [1, 2, 3, 4];
    const result = map(numbers, (n) => n * n);

    expect(result).toEqual([1, 4, 9, 16]);
  });

  // Test: Verifies iteratee function is called with correct arguments
  test('calls iteratee with value, index, and array', () => {
    const array = [10, 20, 30];
    const mockIteratee = jest.fn((value) => value);

    map(array, mockIteratee);

    expect(mockIteratee).toHaveBeenCalledWith(10, 0, array);
    expect(mockIteratee).toHaveBeenCalledWith(20, 1, array);
    expect(mockIteratee).toHaveBeenCalledWith(30, 2, array);
  });
});
