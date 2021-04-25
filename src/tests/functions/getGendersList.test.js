'use strict';

const { expect } = require('@jest/globals');
const getGenderList = require('../../getGenderList.js')

test('should get an array with modes list', () => {
  const genderList = getGenderList();
  expect(genderList.length).toBeGreaterThan(0)
  genderList.forEach(elem => {
    expect(typeof elem).toBe('string')
    expect(elem.length).toBe(1)
  })
});
