'use strict';

const findException = require('./findException.js');
const connect = require('./connect.js');
const ordinaryName = require('./ordinaryName.js')

/**
   * 
   * Converts a stringNumber of two digits to a wordNumber and returns an object
   * containing this string and a boolean information indicating if this string is
   * a connected sentence.
   * 
   * The hasConnection boolean value is important in some languages where 
   * there are specific rules to use connectors in the whole numeric sentence 
   * depending on existing connectors in the inside of periods.
   * 
   * @example getTensToWords('42', 'F') 
   * => { tensToWords: 'quarenta e duas', hasConnection: true }
   * 
   * @param {string} stringTens a stringNumber of two digits.
   * @param {string} genderIndex a letter 'F' or 'M' indicating the numeric gender.
   * 
   * @returns an object containing the converted string and a boolean information
   * indicating if this string is a connected sentence
   */

function tensWord(periodNumberObject, genderIndex) {
  'use strict';
  const { tensExceptions, insidePeriodConnector, tensDigits, onesDigits } = periodNumberObject;
  const getTensName = ordinaryName(tensDigits, genderIndex).get;
  const getOnesName = ordinaryName(onesDigits, genderIndex).get;

  function get(stringTens) {
    'use strict';

    const exception = findException(tensExceptions, stringTens, genderIndex);
    if (exception) return { partialNumberWord: exception, isConnected: false };

    const tensName = getTensName(stringTens[0]);
    const onesName = getOnesName(stringTens[1]);
    const tensWord = connect(tensName, onesName, insidePeriodConnector);

    return tensWord;
  };

  return { get };
};

module.exports = tensWord;
