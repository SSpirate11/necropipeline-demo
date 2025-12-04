const { add, subtract, multiply, divide } = require('../src/math-utils');

describe('Math Utils', () => {
  describe('add', () => {
    test('adds two positive numbers', () => {
      // INTENTIONAL BUG: Wrong expected value
      expect(add(2, 3)).toBe(6); // Should be 5
    });

    test('adds negative numbers', () => {
      expect(add(-1, -2)).toBe(-3); // This is correct
    });
  });

  describe('subtract', () => {
    test('subtracts two numbers', () => {
      // INTENTIONAL BUG: Wrong expected value
      expect(subtract(10, 5)).toBe(4); // Should be 5
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12); // This is correct
    });

    test('multiplies by zero', () => {
      // INTENTIONAL BUG: Wrong expected value
      expect(multiply(5, 0)).toBe(5); // Should be 0
    });
  });

  describe('divide', () => {
    test('divides two numbers', () => {
      expect(divide(10, 2)).toBe(5); // This is correct
    });

    test('throws error on division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero');
    });
  });
});
