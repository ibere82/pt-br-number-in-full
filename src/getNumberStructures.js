'use strict';

const { data } = require('./data/nameNumbersData.json');

function getNumberStructures(mode) {
  'use strict';

  const { numberStructures } = data.find((modes) => modes.mode === mode);
  const { singleDigits, exceptions, connectors, periods, } = numberStructures;

  const {
    ones: onesDigits,
    tens: tensDigits,
    hundreds: hundredsDigits,
  } = singleDigits;

  const {
    periods: periodsExceptions,
    tens: tensExceptions,
    hundreds: hundredsExceptions,
    wholeNumber: wholeNumberExceptions,
  } = exceptions;

  const {
    betweenPeriods,
    toObject: toObjectConnector,
    insidePeriod: insidePeriodConnector,
    beforePeriodName: beforePeriodNameConnector,
  } = connectors;

  const {
    syndethic: syndethicConnector,
    asyndethic: asyndethicConnector,
  } = betweenPeriods;

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
    asyndethicConnector,
  }
};

module.exports = getNumberStructures;
