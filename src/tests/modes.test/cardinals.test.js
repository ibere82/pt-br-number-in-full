'use strict';

const { expect } = require('@jest/globals');
const converter = require('../../../index.js');

test('should return the correct potuguese numbers', () => {
  const convertedNumber = [];
  const expectedResponse = [];

  convertedNumber[0] = converter(1, 'F', { appendWith: { singular: 'casa', plural: 'casas' } });
  expectedResponse[0] = 'uma casa';

  convertedNumber[1] = converter('2', 'F', { appendWith: 'casas' });
  expectedResponse[1] = 'duas casas';
  convertedNumber[2] = converter('0', 'F', { appendWith: 'casas' });
  expectedResponse[2] = 'zero casas';
  convertedNumber[3] = converter('100', 'M', { appendWith: 'carros' });
  expectedResponse[3] = 'cem carros';
  convertedNumber[4] = converter('12', 'F', { appendWith: { singular: 'casa', plural: 'casas' } });
  expectedResponse[4] = 'doze casas';
  convertedNumber[5] = converter(112, 'M', { appendWith: 'lápis' });
  expectedResponse[5] = 'cento e doze lápis';
  convertedNumber[6] = converter('112000000', 'F');
  expectedResponse[6] = 'cento e doze milhões';
  convertedNumber[7] = converter('112000000000', 'M', { appendWith: 'grãos de areia' });
  expectedResponse[7] = 'cento e doze bilhões de grãos de areia';
  convertedNumber[8] = converter('112000000000000', 'M');
  expectedResponse[8] = 'cento e doze trilhões';
  convertedNumber[9] = converter('120', 'M', { appendWith: { singular: 'real', plural: 'reais' } });
  expectedResponse[9] = 'cento e vinte reais';
  convertedNumber[10] = converter('1001', 'F', { appendWith: 'histórias' });
  expectedResponse[10] = 'mil e uma histórias';
  convertedNumber[11] = converter('5982', 'F');
  expectedResponse[11] = 'cinco mil, novecentas e oitenta e duas';
  convertedNumber[12] = converter('1000', 'F', { appendWith: 'casas' });
  expectedResponse[12] = 'mil casas';
  convertedNumber[13] = converter('32578936', 'F');
  expectedResponse[13] = 'trinta e dois milhões, quinhentas e setenta e oito mil, novecentas e trinta e seis';



  convertedNumber.forEach((number, index) => {
    expect(number).toBe(expectedResponse[index]);
  });

});
