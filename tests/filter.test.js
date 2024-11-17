import filter from '../src/filter';

describe('filter function', () => {
    test('filters array of objects based on predicate', () => {

      const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false },
      ];
  
      const result = filter(users, ({ active }) => active);
  
      expect(result).toEqual([
        { 'user': 'barney', 'active': true }
      ]);
    });
  });