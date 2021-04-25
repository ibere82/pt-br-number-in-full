'use strict';

const { expect } = require('@jest/globals');
const createNumericArrayPeriods = require('../../arrayHelpers.js');

test('should convert a stringNumber to an array of stringNumbers separeted by periods in reversed order', () => {
  expect(createNumericArrayPeriods('123456789')).toEqual(['789', '456', '123']);
  expect(createNumericArrayPeriods('12345678')).toEqual(['678', '345', '12']);
});
