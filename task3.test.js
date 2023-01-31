const Calculator = require('./task3');

const math = new Calculator(20, 5);

describe('Calculator class for adding, subtracting, dividing and multiplying', () => {
  test('add numbers correctly', () => {
    expect(math.add()).toBe(25);
  });
  test('subtract numbers correctly', () => {
    expect(math.subtract()).toBe(15);
  });
  test('divide numbers correctly', () => {
    expect(math.divide()).toBe(4);
  });
  test('multiply numbers correctly', () => {
    expect(math.multiply()).toBe(100);
  });
});