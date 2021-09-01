'use strict';

/** 
 * 
 * 
 * Version 1.0.0
 *
 * ***************************************************************************** 
 * 
 * This API converts a number to a portuguese word-number
 * 
 * *****************************************************************************
 *
 *   
**/

const validateParameters = require('./validateParameters.js');
const wordNumber = require('./wordNumber.js');
const numberObject = require('./numberObject.js');

/**
 * 
 * Convert a number to a brasilian portuguese wordNumber.
 * 
 * @param {string | number} inputedNumber a integer greater than or equal to zero with up to 15 digits.
 * @param {string} inputedGender a letter 'F' or 'M' indicating the numeric gender.
 * @param {object} options an opcional object containing mode and appendWith.
 * @returns a wordNumber.
 */
function converter(inputedNumber, inputedGender, options,) {
  'use strict';

  const {
    appendWith,
    stringNumber,
    gender,
    mode,
  } = validateParameters(inputedNumber, inputedGender, options);

  const wholeNumber = wordNumber(numberObject(stringNumber, gender, mode, appendWith,));

  return `${wholeNumber}${appendWith && ' '}${appendWith}`;
};

module.exports = converter;
