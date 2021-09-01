'use strict';

const { expect } = require('@jest/globals');
const wordNumberPeriod = require('../../wordNumberPeriod.js');
const numberObject = require('../../numberObject.js');

test(`should convert a stringNumber within a period to a wordNumber with its 
      period name and returns an object`, () => {

  const getPeriod = wordNumberPeriod(numberObject('123456789', 'M', 'cardinal')).get;
  expect(getPeriod('123', 2)).toEqual(
    {
      periodToWords: 'cento e vinte e três milhões',
      hasConnection: true,
      requireConnectionToObject: true
    });


});
