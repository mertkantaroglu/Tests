const capitalize = require('./task4');

test('Is first letter capitalized', () => {
  expect(capitalize('mert')).toEqual('Mert');
});

test('Is first letter capitalized', () => {
  expect(capitalize('Elif')).toEqual('Elif');
});


