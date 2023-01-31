const reverseString = require('./task2');

test('reverse the string', () => {
  expect(reverseString('Mert')).toEqual('trem');
});

test('reverse the empty string', () => {
  expect(reverseString('')).toEqual('');
});

test('reverse the string with symbols', () => {
  expect(reverseString('aBc*%#!?zXy')).toEqual('yxz?!#%*cba');
});
