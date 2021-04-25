'use strict';

/**
 * 
 * Find and return a numeric exception in an exception array using the comparative therm.
 * 
 * @param {array} array a specific exception array.
 * @param {number} comparative a number to a find in the exception array.
 * @returns an exception stringNumber or '' if this exception was not finded.
 */
function findException(array, comparative, genderIndex) {
  'use strict';

  const foundedException = array ? array.find(({ number }) => number === parseInt(comparative)) : null;
  if (!foundedException) return '';
  const { wordNumber } = foundedException;
  return typeof wordNumber === 'string' ? wordNumber : wordNumber[genderIndex || 0];
};

module.exports = findException;
