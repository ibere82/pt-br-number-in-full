'use strict';

const { expect } = require('@jest/globals');
const getTensToWords = require('../../getTensWords.js');
const getNumberStructures = require('../../getNumberStructures.js')

test('should convert a stringNumber of two digits to a wordNumber and return an object', () => {

  expect(getTensToWords('42', 1, getNumberStructures('cardinal'))).toEqual(
    { partialNumberWord: 'quarenta e duas', isConnected: true });
});
