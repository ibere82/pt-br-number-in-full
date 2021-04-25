'use strict';

const { expect } = require('@jest/globals');
const getModesList = require('../../getModesList.js')

test('should get an array with modes list', () => {
  const modesList = getModesList();
  expect(modesList.length).toBeGreaterThan(0)
  modesList.forEach(elem => expect(typeof elem).toBe('string'))
});
