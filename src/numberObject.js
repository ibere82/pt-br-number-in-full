'use strict';

const getNumberStructures = require('./getNumberStructures.js');

function numberObject(stringNumber, gender, mode, appendWith) {

  const {
    wholeNumberExceptions,
    periods,
    toObjectConnector,
    syndethicConnector,
    asyndethicConnector
  } = getNumberStructures(mode)

  const requireConnection = !!appendWith;


  return {
    stringNumber,
    gender,
    mode,
    periods,
    wholeNumberExceptions,
    requireConnection,
    toObjectConnector,
    syndethicConnector,
    asyndethicConnector
  }
};

module.exports = numberObject;
