'use strict';

const findException = require('./findException.js');
const connect = require('./connect.js');
const ordinaryName = require('./ordinaryName.js')

function tensWord(periodNumberObject, genderIndex,) {
  'use strict';
  const { tensExceptions, insidePeriodConnector, tensDigits, onesDigits, } = periodNumberObject;
  const getTensName = ordinaryName(tensDigits, genderIndex,).get;
  const getOnesName = ordinaryName(onesDigits, genderIndex,).get;

  function get(stringTens) {
    'use strict';

    const exception = findException(tensExceptions, stringTens, genderIndex,);
    if (exception) return { partialNumberWord: exception, isConnected: false, };

    const tensName = getTensName(stringTens[0],);
    const onesName = getOnesName(stringTens[1],);
    const tensWord = connect(tensName, onesName, insidePeriodConnector,);

    return tensWord;
  };

  return { get };
};

module.exports = tensWord;
