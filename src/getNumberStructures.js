'use strict';

const { data } = require('./data/nameNumbersData.json');

/**
 * 
 * Returns the JSON numeric structure filtered by mode.
 * 
 * @param {string} mode a string 'cardinal' or 'ordinal' by example.
 * @returns a JSON with the numeric structures filtered by language and mode.
 */
function getNumberStructures(mode) {
  'use strict';

  const { numberStructures } = data.find((modes) => modes.mode === mode);
  const { singleDigits, exceptions, connectors, periods } = numberStructures;

  const {
    ones: onesDigits,
    tens: tensDigits,
    hundreds: hundredsDigits } = singleDigits;

  const {
    periods: periodsExceptions,
    tens: tensExceptions,
    hundreds: hundredsExceptions,
    wholeNumber: wholeNumberExceptions } = exceptions;

  const {
    betweenPeriods,
    toObject: toObjectConnector,
    insidePeriod: insidePeriodConnector,
    beforePeriodName: beforePeriodNameConnector } = connectors;

  const {
    syndethic: syndethicConnector,
    asyndethic: asyndethicConnector } = betweenPeriods;

  return {
    onesDigits,
    tensDigits,
    hundredsDigits,
    periods,
    periodsExceptions,
    tensExceptions,
    hundredsExceptions,
    wholeNumberExceptions,
    insidePeriodConnector,
    beforePeriodNameConnector,
    toObjectConnector,
    syndethicConnector,
    asyndethicConnector
  }
};

module.exports = getNumberStructures;
