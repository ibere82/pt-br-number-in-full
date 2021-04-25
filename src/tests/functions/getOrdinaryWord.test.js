'use strict';

const { expect } = require('@jest/globals');
const getOrdinaryWord = require('../../getOrdinaryWord.js');
const getNumberStructures = require('../../getNumberStructures.js');

test('should convert a digit to a wordNumber', () => {
  expect(getOrdinaryWord(1, getNumberStructures('cardinal').onesDigits, 0)).toBe('um');
  expect(getOrdinaryWord(2, getNumberStructures('cardinal').onesDigits, 1)).toBe('duas');
  expect(getOrdinaryWord(3, getNumberStructures('cardinal').hundredsDigits, 1)).toBe('trezentas');
  expect(getOrdinaryWord(4, getNumberStructures('ordinal').onesDigits, 0)).toBe('quarto');
  expect(getOrdinaryWord(5, getNumberStructures('ordinal').tensDigits, 1)).toBe('quinquagésima');
});
