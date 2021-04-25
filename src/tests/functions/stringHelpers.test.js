'use strict';

const { expect } = require('@jest/globals');
const { reverse, leftPad } = require('../../stringHelpers.js');

test('should revert a string', () => {
  expect(reverse('abcdefg')).toBe('gfedcba');
  expect(reverse('')).toBe('');
});

test('should fill a string with characteres at a left', () => {
  expect(leftPad('12', 3, '0')).toBe('012');
  expect(leftPad('1', 3, '0')).toBe('001');
  expect(leftPad('122', 3, '0')).toBe('122');
  expect(leftPad('12', 5, '0')).toBe('00012');
  expect(leftPad('12', 4, 'z')).toBe('zz12');
  expect(leftPad('12', 3, 'x')).toBe('x12');
});
