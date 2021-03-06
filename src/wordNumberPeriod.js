'use strict';

const getStringFromArray = require('./getStringFromArray.js');
const getNumberStructures = require('./getNumberStructures.js');
const findException = require('./findException.js');
const connect = require('./connect.js');
const hundredsWords = require('./hundredsWords.js');

/**
 * 
 * Converts a stringNumber within a period to a wordNumber with its period name 
 * and returns an object containing this string,
 * a boolean indicating if this string is a connected sentence and
 * a boolean indicating if this string require connection with objects.
 * 
 * The hasConnection boolean value is important in some languages where 
 * there are specific rules to use connectors in the whole numeric sentence 
 * depending on existing connectors in the inside of periods.
 * 
 * The requireConnectionToObject boolean value is important in some languages where 
 * there are differences to concatenate objects with numbers depending on the number. 
 * By example, the portuguese expression 'Um milhão de coisas' uses the preposition 'de' 
 * but 'Mil coisas' don't use it. 
 * 
 * @example wordNumberPeriod('123', 2, 'M', 'pt-BR', 'cardinal') => 
 {
  periodToWords: 'cento e vinte e três milhões',
  hasConnection: true,
  requireConnectionToObject: true
 }
 * @example wordNumberPeriod('123', 2, null, 'en-US', 'cardinal') => 
 {
  periodToWords: 'one hundred twenty-three million',
  hasConnection: true,
  requireConnectionToObject: false
 }
 * @param {string} periodValue a stringNumber.
 * @param {number} index a position of array period.
 * @param {string} numberObject a numberObject
 * @returns an object containing the converted string,
 * a boolean indicating if this string is a connected sentence and 
 * a boolean indicating if this string require connection with objects.
 */
function wordNumberPeriod(numberObject) {
  'use strict';
  const { periods, gender, mode: originalMode } = numberObject

  function get(periodValue, index) {
    const { defaultName,
      singularName,
      pluralName,
      requireConnectionToObject,
      borrowMode,
      genderInflection } = periods[index];

    const periodGender = genderInflection ? gender : null;

    //const mode = borrowMode || originalMode
    const mode = originalMode;

    const periodNumberObject = getNumberStructures(mode);
    const { periodsExceptions, beforePeriodNameConnector } = periodNumberObject;

    const exceptions = periodsExceptions.filter(({ periodIndex }) => periodIndex === index);

    const exception = findException(exceptions, periodValue, periodGender);
    if (exception) return { periodToWords: exception, hasSyndeton: false };

    const { hundredsToWords, hasConnection } = hundredsWords(periodNumberObject, periodGender).get(periodValue);

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
