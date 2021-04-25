'use strict';

const { expect } = require('@jest/globals');
const wordNumberPeriod = require('../../wordNumberPeriod.js');
const numberObject = require('../../numberObject.js');

test(`should convert a stringNumber within a period to a wordNumber with its 
      period name and returns an object`, () => {

  expect(wordNumberPeriod('123', 2, numberObject('123456789', 'M', 'cardinal'))).toEqual(
    {
      periodToWords: 'cento e vinte e três milhões',
      hasConnection: true,
      requireConnectionToObject: true
    });


});
