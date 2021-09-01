'use strict';

const { genderCodes } = require('./data/nameNumbersData.json');

function getGenderList() {
  return genderCodes;
};

module.exports = getGenderList;
