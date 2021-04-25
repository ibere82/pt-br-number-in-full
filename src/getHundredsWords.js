'use strict';

const findException = require('./findException.js');
const connect = require('./connect.js');
const getOrdinaryWord = require('./getOrdinaryWord.js');
const getTensToWords = require('./getTensWords.js');
const { leftPad } = require('./stringHelpers.js');

/**
   * 
   * Converts a stringNumber within a period to a wordNumber and returns an object
   * containing this string and a boolean information indicating if this string is 
   * a connected sentence.
   * 
   * The hasConnection boolean value is important in some languages where 
   * there are specific rules to use connectors in the whole numeric sentence 
   * depending on existing connectors in the inside of periods.
   * 
   * @example getHundredsToWords('123', 'M', 'pt-BR', 'cardinal') 
   * => { hundredsToWords: 'cento e vinte e três', hasConnection: true }
   * 
   * @param {string} periodHundreds a stringNumber.
   * @param {string} genderIndex a letter 'F' or 'M' indicating the numeric gender.
   * @param {string} lang the language code.
   * @param {string} mode a string 'cardinal' or 'ordinal' by example.
   * @returns an object containing the converted string and a boolean information
   * indicating if this string is a connected sentence.
   */
function getHundredsToWords(periodHundreds, genderIndex, numberObject) {
  'use strict';
  const { hundredsDigits, hundredsExceptions, insidePeriodConnector } = numberObject

  const stringHundreds = leftPad(periodHundreds, 3, '0');

  const exception = findException(hundredsExceptions, stringHundreds, genderIndex);
  if (exception) return { hundredsToWords: exception, hasConnection: false };

  const stringTens = stringHundreds.slice(1, 3);
  const digitHundreds = parseInt(stringHundreds[0]);

  const digitHundredsToWords =
    getOrdinaryWord(digitHundreds, hundredsDigits, genderIndex);

  const { partialNumberWord: tensToWords, isConnected: isTensConnectedToOnes } =
    getTensToWords(stringTens, genderIndex, numberObject);

  const { partialNumberWord: hundredsToWords, isConnected: isHundredsConnectedToTens } =
    connect(digitHundredsToWords, tensToWords, insidePeriodConnector)

  return { hundredsToWords, hasConnection: (isTensConnectedToOnes || isHundredsConnectedToTens) };
};

module.exports = getHundredsToWords;
