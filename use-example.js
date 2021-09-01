const converter = require('./index.js');
const [number, gender, mode, appendDefault, appendSingular, appendPlural] = process.argv.splice(2)

const appendWith =
  appendSingular && appendPlural ?
    { singular: appendSingular, plural: appendPlural } :
    !!appendDefault ? appendDefault : null;

console.time('conv')
console.log(converter(number, gender, { appendWith, mode }));
console.timeEnd('conv')