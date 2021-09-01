'use strict';

function findException(array, comparative, genderIndex,) {
  'use strict';

  const foundedException = array ? array.find(({ number }) => number === parseInt(comparative)) : null;
  if (!foundedException) return '';
  const { wordNumber } = foundedException;
  return typeof wordNumber === 'string' ? wordNumber : wordNumber[genderIndex || 0];
};

module.exports = findException;
