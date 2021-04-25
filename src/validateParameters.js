'use strict';

const optionsDefault = require('./optionsDefault.js');
const getModesList = require('./getModesList.js');
const getGenderList = require('./getGenderList.js');

/**
 * 
 * Check if parameters are valid, return them or throw an error.
 * 
 * @param {string | number} inputedNumber a integer greater than or equal to zero with up to 15 digits.
 * @param {string} inputedGender a letter 'F' or 'M' indicating the numeric gender.
 * @param {string} inputedLanguage the language code.
 * @param {objct} inputedOptions a specific object containing mode and appendWith.
 * @returns a object containing a valid appendWith, stringNumber, gender and mode.
 */
function validateParameters(inputedNumber, inputedGender, inputedOptions) {
  'use strict';

  const stringNumber = validateNumber(inputedNumber);
  const {
    mode: inputedMode = optionsDefault.mode,
    appendWith: inputedAppendWith } = validateOptions(inputedOptions);
  const mode = validateMode(inputedMode);
  const gender = validateGender(inputedGender);
  const appendWith = validateAppendWith(inputedAppendWith, stringNumber, mode);
  return { appendWith, stringNumber, gender, mode };
};

function validateNumber(inputedNumber) {
  'use strict';

  if (isNaN(inputedNumber)) throw new RangeError("Number must be an integer greater than or equal to zero with up to 15 digits");
  if (parseFloat(inputedNumber) % 1 !== 0) throw new RangeError("Number must be an integer greater than or equal to zero with up to 15 digits");

  const stringNumber = typeof inputedNumber === 'string' ? inputedNumber : inputedNumber.toString();
  const numericNumber = typeof inputedNumber === 'number' ? inputedNumber : parseInt(inputedNumber);

  if (numericNumber > 999999999999999) throw new RangeError("Number cannot exceed 15 digits");
  if (numericNumber < 0) throw new RangeError("Number cannot be negative");
  return stringNumber;
};

function validateGender(inputedGender) {
  'use strict';

  const genders = getGenderList()
  if (!genders.includes(inputedGender)) throw new Error("Gender must be 'M' or 'F'");

  return genders.findIndex(g => g === inputedGender);
};

function validateOptions(inputedOptions) {
  'use strict';

  if (inputedOptions && typeof inputedOptions !== 'object') throw new TypeError("Options must be a object");

  const options = typeof inputedOptions === 'object' && inputedOptions || optionsDefault;
  return options;
};

function validateMode(inputedMode) {
  'use strict';

  const modes = getModesList();
  if (!modes.includes(inputedMode)) throw new TypeError(`Mode '${inputedMode}' is invalid`);
  return inputedMode;
};

function validateAppendWith(inputedAppendWith, stringNumber, mode) {
  'use strict';

  if (typeof inputedAppendWith === 'string') return inputedAppendWith;
  if (!inputedAppendWith) return '';
  if (typeof inputedAppendWith === 'object') {

    if (mode === 'ordinal') throw new Error('appendWith may be a string if mode was ordinal');

    const { singular, plural } = inputedAppendWith;

    if (typeof singular !== 'string' || typeof plural !== 'string')
      throw new Error("appendWith option is invalid");

    return stringNumber === '1'
      ? singular
      : plural;
  };
  if (typeof inputedAppendWith !== 'object')
    throw new Error("appendWith option is invalid");
};

module.exports = validateParameters;
