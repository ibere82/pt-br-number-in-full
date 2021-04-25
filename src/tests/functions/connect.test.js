'use strict';

const { expect } = require('@jest/globals');
const connect = require('../../connect.js');

test('should connect two strings with connector if indicates and return an object', () => {

  expect(connect('vinte', 'um', ' e '))
    .toEqual({ isConnected: true, partialNumberWord: 'vinte e um' });

  expect(connect('mil', 'duzentos', ', '))
    .toEqual({ isConnected: true, partialNumberWord: 'mil, duzentos' })

  expect(connect('mil', '', ''))
    .toEqual({ isConnected: false, partialNumberWord: 'mil' })
})