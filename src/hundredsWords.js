'use strict';

const findException = require('./findException.js');
const connect = require('./connect.js');
const ordinaryName = require('./ordinaryName.js');
const tensWords = require('./tensWords.js');

function hundredsToWords(periodNumberObject, genderIndex,) {
  'use strict';

  const { hundredsDigits, hundredsExceptions, insidePeriodConnector, } = periodNumberObject;

  const getHundredName = ordinaryName(hundredsDigits, genderIndex,).get;
  const getTens = tensWords(periodNumberObject, genderIndex,).get;

  return { get };

  function get(periodHundreds,) {
    'use strict';

    const stringHundreds = periodHundreds.padStart(3, '0');

    const exception = findException(hundredsExceptions, stringHundreds, genderIndex,);
    if (exception) return { hundredsToWords: exception, hasConnection: false, };

    const stringTens = stringHundreds.slice(1, 3);
    const digitHundreds = parseInt(stringHundreds[0]);

    const digitHundredsToWords = getHundredName(digitHundreds);

    const {
      partialNumberWord: tensToWords,
      isConnected: isTensConnectedToOnes,
    } = getTens(stringTens);

    const {
      partialNumberWord: hundredsToWords,
      isConnected: isHundredsConnectedToTens
    } = connect(digitHundredsToWords, tensToWords, insidePeriodConnector,);

    return { hundredsToWords, hasConnection: (isTensConnectedToOnes || isHundredsConnectedToTens), };
  };
};

module.exports = hundredsToWords;
