'use strict';

function createNumericArrayPeriods(stringNumber,) {
  'use strict';

  const digits = stringNumber.length;
  const periods = Math.round((digits + 1) / 3);
  const arrayNumber = new Array(periods);
  const reverseNumber = reverse(stringNumber);

  for (let i = 1; i <= periods; i++) {
    const index = i - 1;
    const position = (i - 1) * 3;
    arrayNumber[index] = reverse(reverseNumber.slice(position, position + 3));
  };

  return arrayNumber;
};


function reverse(text,) {
  'use strict';

  return text.split('').reverse().join('');
};


module.exports = { createNumericArrayPeriods, reverse, }
