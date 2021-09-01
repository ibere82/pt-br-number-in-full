'use strict';

const { expect } = require('@jest/globals');
const { createNumericArrayPeriods, reverse } = require('../../helpers.js');
//const { reverse } = require('../../stringHelpers.js');

test('should convert a stringNumber to an array of stringNumbers separeted by periods in reversed order', () => {
  expect(createNumericArrayPeriods('123456789')).toEqual(['789', '456', '123']);
  expect(createNumericArrayPeriods('12345678')).toEqual(['678', '345', '12']);
});

test('should revert a string', () => {
  expect(reverse('abcdefg')).toBe('gfedcba');
  expect(reverse('')).toBe('');
});
