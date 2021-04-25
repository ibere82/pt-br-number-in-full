'use strict';

function reverse(text) {
  'use strict';

  return text.split('').reverse().join('');
};

function leftPad(textNumber, digits, char) {
  'use strict';

  return char.repeat(digits - textNumber.length) + textNumber;
};

module.exports = { reverse, leftPad };
