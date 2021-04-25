'use strict';

const { expect } = require('@jest/globals');
const getNumberStructures = require('../../getNumberStructures.js');
const getModesList = require('../../getModesList.js');

test(`should get a numberStructure object with periods, 
singleDigits, exceptions and connectors`, () => {
  const modes = getModesList();

  modes.forEach(mode => {
    expect(getNumberStructures(mode)).toHaveProperty('onesDigits');
  });

});
