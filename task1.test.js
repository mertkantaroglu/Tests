const stringLength = require('./task1');

test('checking string length', () => {
  expect(stringLength('Mert')).toEqual(4);
})

test('checking long string length', () => {
  expect(stringLength('MertKantaroglu')).toEqual('String can\'t be greater than 10');
})

test('checking empty string length', () => {
  expect(stringLength('')).toEqual('String can\'t be less than 1');
})