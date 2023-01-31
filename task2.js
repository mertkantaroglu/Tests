const reverseString = (string) => {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i].toLocaleLowerCase();
  }
  return newString;
}

reverseString('Mert');
reverseString('');

module.exports = reverseString;