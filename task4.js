const capitalize = (string) => {
  newString = string.charAt(0).toUpperCase() + string.slice(1);
  return newString;
}

module.exports = capitalize;