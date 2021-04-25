'use strict';

const findException = require('./findException.js');
const connect = require('./connect.js');
const prototypeOrdinaryName = require('./prototypeOrdinaryName.js');
//const getOrdinaryWord = require('./getOrdinaryWord.js');


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
   * @example getTensToWords('42', 'F', 'pt-BR', 'cardinal') 
   * => { tensToWords: 'quarenta e duas', hasConnection: true }
   * 
   * @example getTensToWords('42', null, 'en-US', 'cardinal')
   *  => { tensToWords: 'forty-two', hasConnection: true }
   * 
   * @param {string} stringTens a stringNumber of two digits.
   * @param {string} genderIndex a letter 'F' or 'M' indicating the numeric gender.
   * @param {string} lang the language code.
   * @param {string} mode a string 'cardinal' or 'ordinal' by example.
   * 
   * @returns an object containing the converted string and a boolean information
   * indicating if this string is a connected sentence
   */
function getTensToWords(stringTens, genderIndex, numberObject) {
  'use strict';

  const { tensExceptions, insidePeriodConnector, tensDigits, onesDigits } = numberObject;
  const exception = findException(tensExceptions, stringTens, genderIndex);
  if (exception) return { partialNumberWord: exception, isConnected: false }

  function OrdinaryName(array) {
    this.numberNames = array //tensDigits
    this.getOrdinary = prototypeOrdinaryName
  }

  // const tensName = getOrdinaryWord(parseInt(stringTens[0]), tensDigits, genderIndex)
  // const onesName = getOrdinaryWord(parseInt(stringTens[1]), onesDigits, genderIndex)

  const tensName = new OrdinaryName(tensDigits).getOrdinary(stringTens[0], genderIndex)
  const onesName = new OrdinaryName(onesDigits).getOrdinary(stringTens[1], genderIndex)

  const tensWord = connect(tensName, onesName, insidePeriodConnector);

  return tensWord
};

module.exports = getTensToWords;
