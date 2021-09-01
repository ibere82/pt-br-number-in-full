'use strict';

const { expect } = require('@jest/globals');
const getOrdinaryName = require('../../ordinaryName.js');
const getNumberStructures = require('../../getNumberStructures.js');

test('should convert a digit to a wordNumber', () => {
  expect(getOrdinaryName(getNumberStructures('cardinal').onesDigits, 0).get(1)).toBe('um');
  expect(getOrdinaryName(getNumberStructures('cardinal').onesDigits, 1).get(2)).toBe('duas');
  expect(getOrdinaryName(getNumberStructures('cardinal').hundredsDigits, 1).get(3)).toBe('trezentas');
  expect(getOrdinaryName(getNumberStructures('ordinal').onesDigits, 0).get(4)).toBe('quarto');
  expect(getOrdinaryName(getNumberStructures('ordinal').tensDigits, 1).get(5)).toBe('quinquagésima');
});
