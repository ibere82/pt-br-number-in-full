'use strict';

const { expect } = require('@jest/globals');
const getHundredsToWords = require('../../hundredsWords.js');
const getNumberStructures = require('../../getNumberStructures.js');

test('should convert a stringNumber within a period to a wordNumber and returns an object', () => {

  const obj = getNumberStructures('cardinal');
  expect(getHundredsToWords(obj, 0).get('123')).toEqual({ hundredsToWords: 'cento e vinte e três', hasConnection: true });

});
