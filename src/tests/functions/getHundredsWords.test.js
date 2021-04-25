'use strict';

const { expect } = require('@jest/globals');
const getHundredsToWords = require('../../getHundredsWords.js');
const getNumberStructures = require('../../getNumberStructures.js');

test('should convert a stringNumber within a period to a wordNumber and returns an object', () => {



  const obj = getHundredsToWords('123', 0, getNumberStructures('cardinal'))
  expect(obj).toEqual({ hundredsToWords: 'cento e vinte e três', hasConnection: true });


});
