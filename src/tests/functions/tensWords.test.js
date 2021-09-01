'use strict';

const { expect } = require('@jest/globals');
const getTensToWords = require('../../tensWords.js');
const getNumberStructures = require('../../getNumberStructures.js')

test('should convert a stringNumber of two digits to a wordNumber and return an object', () => {

  expect(getTensToWords(getNumberStructures('cardinal'), 1).get('42')).toEqual(
    { partialNumberWord: 'quarenta e duas', isConnected: true });
});
