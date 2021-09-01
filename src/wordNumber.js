'use strict';

const wordNumberArrayPeriods = require('./wordNumberArrayPeriods.js');
const findException = require('./findException.js');

function wordNumber(numberObject) {
  'use strict';

  const {
    wholeNumberExceptions,
    toObjectConnector,
    syndethicConnector,
    asyndethicConnector,
    gender,
    stringNumber,
    requireConnection,
  } = numberObject

  const exception = findException(wholeNumberExceptions, stringNumber, gender,);
  if (exception) return exception;

  const arrayPeriod = wordNumberArrayPeriods(numberObject);
  const arrayWithoutEmptyElems = arrayPeriod.filter(({ periodToWords }) => periodToWords);

  let wholeNumberToWords = '';
  arrayWithoutEmptyElems
    .reverse()
    .forEach(
      ({ periodToWords,
        hasConnection,
        requireConnectionToObject,
      }, index,) => {

        const midleConnection =
          index === 0
            ? ''
            : hasConnection
              ? asyndethicConnector
              : syndethicConnector;

        const endConnection =
          requireConnection &&
            index === arrayWithoutEmptyElems.length - 1 &&
            requireConnectionToObject
            ? ` ${toObjectConnector}`
            : '';

        wholeNumberToWords += midleConnection + periodToWords + endConnection;
      });
  return wholeNumberToWords;
};

module.exports = wordNumber;
