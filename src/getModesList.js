'use strict';

const { data } = require('./data/nameNumbersData.json');

function getModesList() {
  return data.map(({ mode }) => mode);
};

module.exports = getModesList;