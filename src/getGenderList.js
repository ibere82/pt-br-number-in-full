'use strict';

const dataBase = require('./loadData.js');

function getGenderList() {
  const { genderCodes } = dataBase;
  return genderCodes;
};

module.exports = getGenderList;
