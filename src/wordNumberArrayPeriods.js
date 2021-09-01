'use strict';

const wordNumberPeriod = require('./wordNumberPeriod.js');
const { createNumericArrayPeriods } = require('./helpers.js');

/**
 * 
 * Convert a stringNumber to an array splited by periods with: a period stringNumber, 
 * a boolean indicating if this string is a connected sentence and
 * a boolean indicating if this string require connection with objects.
 * 
 * The hasConnection boolean value is important in some languages where 
 * there are specific rules to use connectors in the whole numeric sentence 
 * depending on existing connectors in the inside of periods.
 * 
 * The requireConnectionToObject boolean value is important in some languages where 
 * there are differences to concatenate objects with numbers depending on the number. 
 * By example, the portuguese expression 'Um milhão de coisas' uses the preposition 'de' 
 * but 'Mil coisas' don't use it. 
 * 
 * @example wordNumberArrayPeriods('345687', 'F', 'pt-BR', 'cardinal') =>
 [
  {
    periodToWords: 'seiscentas e oitenta e sete',
    hasConnection: true,
    requireConnectionToObject: false
  },
  {
    periodToWords: 'trezentas e quarenta e cinco mil',
    hasConnection: true,
    requireConnectionToObject: false
  }
 ]
 *
 * @example wordNumberArrayPeriods('345687', null, 'en-US', 'cardinal') =>
 [
  {
    periodToWords: 'six hundred eighty-seven',
    hasConnection: true,
    requireConnectionToObject: false
  },
  {
    periodToWords: 'three hundred forty-five thousand',
    hasConnection: true,
    requireConnectionToObject: false
  }
 ]
 * @param {string} stringNumber a stringNumber.
 * @param {string} gender a letter 'F' or 'M' indicating the numeric gender.
 * @param {string} lang the language code.
 * @param {string} mode a string 'cardinal' or 'ordinal' by example.
 * @returns an array splited by periods with: a period stringNumber, 
 * a boolean indicating if this string is a connected sentence and
 * a boolean indicating if this string require connection with objects.
 */
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
