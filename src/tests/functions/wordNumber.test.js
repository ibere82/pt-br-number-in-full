'use strict';

const { expect } = require('@jest/globals');
const wordNumber = require('../../wordNumber.js');
const numberObject = require('../../numberObject.js');

test('should convert a number to a string wordNumber with a preposition to connect to referent if necessary', () => {

  expect(wordNumber(numberObject('2000000', 1, 'cardinal', 'conectar')))
    .toBe('dois milhões de');
  expect(wordNumber(numberObject('2000000', 1, 'cardinal')))
    .toBe('dois milhões');
  expect(wordNumber(numberObject('2345987', 0, 'cardinal')))
    .toBe('dois milhões, trezentos e quarenta e cinco mil, novecentos e oitenta e sete');
});
