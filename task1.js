const stringLength = (string) => {
  if (string.length < 1) {
    return 'String can\'t be less than 1';
  } else if (string.length > 10) {
    return 'String can\'t be greater than 10';
  } else {
    return string.length;
  }
};

stringLength('Mert');
stringLength('MertKantaroglu');
stringLength('');

module.exports = stringLength;