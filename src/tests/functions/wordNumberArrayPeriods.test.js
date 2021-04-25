'use strict';

const { expect } = require('@jest/globals');
const numberObject = require('../../numberObject.js');
const wordNumberArrayPeriods = require('../../wordNumberArrayPeriods.js');

test('should convert a stringNumber to an array splited by periods', () => {
  expect(wordNumberArrayPeriods(numberObject('345687', 1, 'cardinal'))).toEqual([
    {
      periodToWords: 'seiscentas e oitenta e sete',
      hasConnection: true,
      requireConnectionToObject: false
    },
    {
      periodToWords: 'trezentas e quarenta e cinco mil',
      hasConnection: true,
      requireConnectionToObject: false
    }
  ]);


});
