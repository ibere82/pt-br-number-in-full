'use strict';

const wordNumberPeriod = require('./wordNumberPeriod.js');
const { createNumericArrayPeriods } = require('./helpers.js');

function wordNumberArrayPeriods(numberObject) {
  'use strict';
  const getPeriod = wordNumberPeriod(numberObject).get

  const { stringNumber } = numberObject;
  const arrayNumber = createNumericArrayPeriods(stringNumber);
  const wordArrayPeriod = arrayNumber
    .map((periodValue, index) =>
      getPeriod(periodValue, index));

  return wordArrayPeriod;
};

module.exports = wordNumberArrayPeriods;
