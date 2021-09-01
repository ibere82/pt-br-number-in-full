'use strict';

const { expect } = require('@jest/globals');
const converter = require('../../../index.js');

test('should return the correct potuguese ordinal numbers', () => {
  const convertedNumber = [];
  const expectedResponse = [];

  convertedNumber[0] = converter(1, 'F', { appendWith: 'casa', mode: 'ordinal' });
  expectedResponse[0] = 'primeira casa';
  convertedNumber[1] = converter('2', 'F', { appendWith: 'casa', mode: 'ordinal' });
  expectedResponse[1] = 'segunda casa';
  convertedNumber[2] = converter('0', 'F', { appendWith: 'casa', mode: 'ordinal' });
  expectedResponse[2] = 'zerésima casa';
  convertedNumber[3] = converter('100', 'M', { appendWith: 'carro', mode: 'ordinal' });
  expectedResponse[3] = 'centésimo carro';
  convertedNumber[4] = converter('12', 'F', { appendWith: 'casa', mode: 'ordinal' });
  expectedResponse[4] = 'décima segunda casa';
  convertedNumber[5] = converter(112, 'M', { appendWith: 'lápis', mode: 'ordinal' });
  expectedResponse[5] = 'centésimo décimo segundo lápis';
  convertedNumber[6] = converter('112000000', 'F', { mode: 'ordinal' });
  expectedResponse[6] = 'centésima décima segunda milionésima';
  convertedNumber[7] = converter('112000000000', 'M', { appendWith: 'grão', mode: 'ordinal' });
  expectedResponse[7] = 'centésimo décimo segundo bilionésimo grão';
  convertedNumber[8] = converter('112000000000000', 'M', { mode: 'ordinal' });
  expectedResponse[8] = 'centésimo décimo segundo trilionésimo';
  convertedNumber[9] = converter('120', 'M', { appendWith: 'real', mode: 'ordinal' });
  expectedResponse[9] = 'centésimo vigésimo real';
  convertedNumber[10] = converter('1001', 'F', { appendWith: 'história', mode: 'ordinal' });
  expectedResponse[10] = 'milésima primeira história';
  convertedNumber[11] = converter('5982', 'F', { mode: 'ordinal' });
  expectedResponse[11] = 'quinta milésima, noningentésima octogésima segunda';
  convertedNumber[12] = converter('1000', 'F', { appendWith: 'casa', mode: 'ordinal' });
  expectedResponse[12] = 'milésima casa';
  convertedNumber[13] = converter('32578936', 'F', { mode: 'ordinal' });
  expectedResponse[13] = 'trigésima segunda milionésima, quingentésima septuagésima oitava milésima, noningentésima trigésima sexta';
  convertedNumber.forEach((number, index) => {
    if (number) expect(number).toBe(expectedResponse[index]);
  });

});
