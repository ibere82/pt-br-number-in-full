'use strict';

const { data } = require('./loadData.js');

function getModesList() {
  return data.map(({ mode }) => mode)
}

module.exports = getModesList;