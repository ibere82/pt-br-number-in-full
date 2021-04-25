'use strict';

const fs = require('fs');
const dataBase = JSON.parse(fs.readFileSync('src/data/nameNumbersData.json', 'utf-8'));
module.exports = dataBase;
