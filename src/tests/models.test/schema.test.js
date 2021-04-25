'use strict';

const { expect } = require('@jest/globals');
const dataBase = require('../../loadData.js');
const schema = require('../../model/schema.js')
const ValidatorClass = require('jsonschema').Validator;

const validator = new ValidatorClass();

test('should validate dataBase JSON', () => {
  expect(validator.validate(dataBase, schema).errors.length).toBe(0);
});
