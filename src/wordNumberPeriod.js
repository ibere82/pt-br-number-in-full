'use strict';

const getStringFromArray = require('./getStringFromArray.js');
const getNumberStructures = require('./getNumberStructures.js');
const findException = require('./findException.js');
const connect = require('./connect.js');
const hundredsWords = require('./hundredsWords.js');

function wordNumberPeriod(numberObject) {
  'use strict';
  const { periods, gender, mode: originalMode, } = numberObject

  function get(periodValue, index) {
    const { defaultName,
      singularName,
      pluralName,
      requireConnectionToObject,
      borrowMode,
      genderInflection,
    } = periods[index];

    const periodGender = genderInflection ? gender : null;

    const periodNumberObjectOrginalMode = getNumberStructures(originalMode);
    const exceptions = periodNumberObjectOrginalMode.periodsExceptions.filter(({ periodIndex }) => periodIndex === index);
    const exception = findException(exceptions, periodValue, periodGender);
    if (exception) return { periodToWords: exception, hasConnection: false };

    const periodNumberObject = borrowMode ? getNumberStructures(borrowMode) : periodNumberObjectOrginalMode;
    const { beforePeriodNameConnector, } = periodNumberObject;

    const { hundredsToWords, hasConnection, } = hundredsWords(periodNumberObject, periodGender).get(periodValue);

    const periodNameField = hundredsToWords
      ? defaultName !== undefined
        ? defaultName :
        parseInt(periodValue) === 1
          ? singularName
          : pluralName
      : '';

    const periodLabel = getStringFromArray(periodNameField, gender);

    const { partialNumberWord: periodToWords } =
      connect(hundredsToWords, periodLabel, beforePeriodNameConnector);

    return { periodToWords, hasConnection, requireConnectionToObject };
  };

  return { get }
};

module.exports = wordNumberPeriod;
