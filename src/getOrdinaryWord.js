'use strict';

const getStringFromArray = require('./getStringFromArray.js');

/**
   * 
   * Converts a one digit number to a wordNumber.
   * 
   * @example getOrdinaryWord(5, 'tens', 'F', 'pt-BR', 'cardinal') => 'cinquenta'
   * @example getOrdinaryWord(5, 'tens', null, 'en-US', 'cardinal') => 'fifty'
   * @param {number} number a one digit number from 0 to 9.
   * @param {string} numberNames a string 'ones','tens' or 'hundreds' indicating the place number.
   * @param {string} genderIndex a letter 'F' or 'M' indicating the numeric gender.
   * @returns {string} a string indicating the wordNumber.
   */
function getOrdinaryWord(number, numberNames, genderIndex) {
  'use strict';

  const numberItem = numberNames[number];
  const ordinaryWord = getStringFromArray(numberItem, genderIndex);
  //const ordinaryWord = getStringFromArray(this.numberItem, genderIndex);
  return ordinaryWord;
};

module.exports = getOrdinaryWord;
