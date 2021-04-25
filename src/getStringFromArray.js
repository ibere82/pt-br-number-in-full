'use strict';

function getStringFromArray(numberItem, genderIndex) {
  return typeof numberItem === 'string' ? numberItem : numberItem[genderIndex || 0];
};
module.exports = getStringFromArray;
