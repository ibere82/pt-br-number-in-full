'use strict';

const { expect } = require('@jest/globals');
const converter = require('../../converter.js');


test('return a word Number', () => {
  expect(converter('1', 'F')).toBe('uma')
});

