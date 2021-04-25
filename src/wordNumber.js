'use strict';

const wordNumberArrayPeriods = require('./wordNumberArrayPeriods.js');
const findException = require('./findException.js');

/**
 * 
 * Converts a number to a string wordNumber with a preposition to connect to referent if necessary.
 * 
 * @example wordNumber('2000000', true, 'F', 'pt-BR', 'cardinal') => 'dois milhões de'
 * @example wordNumber('2000000', false, null, 'en-US', 'cardinal') => 'two million'
 * 
 * @param {string} stringNumber the number in string format.
 * @param {boolean} requireConnection a boolean value indicating if the user inputs a word to append.
 * @param {string} gender a letter 'F' or 'M' indicating the numeric gender.
 * @param {string} lang the language code.
 * @param {string} mode a string 'cardinal' or 'ordinal' by example.
 * @returns a string wordNumber with a preposition to connect to referent if necessary.
 */
function wordNumber(numberObject) {
  'use strict';

  const {
    wholeNumberExceptions,
    toObjectConnector,
    syndethicConnector,
    asyndethicConnector,
    gender,
    stringNumber,
    requireConnection } = numberObject

  const exception = findException(wholeNumberExceptions, stringNumber, gender);
  if (exception) return exception;

  const arrayPeriod = wordNumberArrayPeriods(numberObject);
  const arrayWithoutEmptyElems = arrayPeriod.filter(({ periodToWords }) => periodToWords);

  let wholeNumberToWords = '';
  arrayWithoutEmptyElems
    .reverse()
    .forEach(
      ({ periodToWords,
        hasConnection,
        requireConnectionToObject }, index) => {

        const midleConnection =
          index === 0
            ? ''
            : hasConnection
              ? asyndethicConnector
              : syndethicConnector;

        const endConnection =
          requireConnection && index === arrayWithoutEmptyElems.length - 1 && requireConnectionToObject
            ? ` ${toObjectConnector}`
            : '';

        wholeNumberToWords += midleConnection + periodToWords + endConnection;
      });
  return wholeNumberToWords;
};

module.exports = wordNumber;
