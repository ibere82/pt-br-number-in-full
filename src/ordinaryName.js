'use strict';

const getStringFromArray = require('./getStringFromArray.js');

function ordinaryName(numberNames, genderIndex,) {

  function get(number) {
    'use strict';

    const numberItem = numberNames[number];
    const ordinaryWord = getStringFromArray(numberItem, genderIndex,);

    return ordinaryWord;
  };

  return { get };
};

module.exports = ordinaryName;
