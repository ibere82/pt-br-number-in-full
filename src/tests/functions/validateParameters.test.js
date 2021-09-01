'use strict';

const { expect } = require('@jest/globals');
const validateParameters = require('../../validateParameters.js');

// 
// number parameter tests
// 
test('should return a number in string format', () => {
  expect(validateParameters(123, 'M', null).stringNumber).toBe('123');
  expect(validateParameters('123', 'M', null).stringNumber).toBe('123');
});

test('should accept 0 as inputed number', () => {
  expect(validateParameters(0, 'M', null).stringNumber).toBe('0');
  expect(validateParameters('0', 'M', null).stringNumber).toBe('0');
});

test('should accept a number with 15 digits', () => {
  expect(validateParameters(999999999999999, 'M', null).stringNumber).toBe('999999999999999');
  expect(validateParameters('999999999999999', 'M', null).stringNumber).toBe('999999999999999');
});

test('should throw an error if the inputed number is in incorrect format', () => {
  const callingFunctionWithWrongFormatNumber = (wrongFormatNumber) => {
    try {
      validateParameters(wrongFormatNumber, 'M', null);
    } catch (error) {
      return error.message;
    };
  };
  const expectedMessage = "Number must be an integer greater than or equal to zero with up to 15 digits"
  expect(callingFunctionWithWrongFormatNumber('12x3')).toBe(expectedMessage);
  expect(callingFunctionWithWrongFormatNumber('12.3')).toBe(expectedMessage);
  expect(callingFunctionWithWrongFormatNumber('12,3')).toBe(expectedMessage);
  expect(callingFunctionWithWrongFormatNumber(12.3)).toBe(expectedMessage);
  expect(callingFunctionWithWrongFormatNumber(null)).toBe(expectedMessage);
  expect(callingFunctionWithWrongFormatNumber([])).toBe(expectedMessage);
  expect(callingFunctionWithWrongFormatNumber({})).toBe(expectedMessage);
});

test('should throw an error if the inputed number is greater than 15 digits', () => {
  const callingFunctionWithWrongFormatNumber = (wrongFormatNumber) => {
    try {
      validateParameters(wrongFormatNumber, 'M', null);
    } catch (error) {
      return error.message;
    };
  };
  expect(callingFunctionWithWrongFormatNumber(1234567891234567)).toBe("Number cannot exceed 15 digits");
  expect(callingFunctionWithWrongFormatNumber('1234567891234567')).toBe("Number cannot exceed 15 digits");
});

test('should throw an error if the inputed number is negative', () => {
  const callingFunctionWithWrongFormatNumber = (wrongFormatNumber) => {
    try {
      validateParameters(wrongFormatNumber, 'M', null);
    } catch (error) {
      return error.message;
    };
  };
  expect(callingFunctionWithWrongFormatNumber(-1)).toBe("Number cannot be negative");
  expect(callingFunctionWithWrongFormatNumber('-1')).toBe("Number cannot be negative");
});

// 
// language parameter tests
// 
test('should accept a valid language', () => {
  expect(validateParameters(123, 'M', null).stringNumber).toBe('123');
  expect(validateParameters('123', 'M', null).stringNumber).toBe('123');
});



// 
// gender parameter tests
// 
test('should return a valid gender', () => {
  expect(validateParameters(123, 'M', null).gender).toBe(0);
  expect(validateParameters(123, 'F', null).gender).toBe(1);
});

test('should throw an error if the inputed gender is in incorrect format', () => {
  const callingFunctionWithWrongFormatGender = () => {
    try {
      validateParameters(123, 'incorrect gender option', null);
    } catch (error) {
      return error.message;
    };
  };
  expect(callingFunctionWithWrongFormatGender()).toBe("Gender must be 'M' or 'F'");
});

// 
// options parameter tests
// 
test('should throw an error if inputed options is invalid', () => {
  const callingFunctionWithWrongFormatMode = () => {
    try {
      validateParameters(123, 'M', 'invalid-options');
    } catch (error) {
      return error.message;
    };
  };
  expect(callingFunctionWithWrongFormatMode()).toBe("Options must be a object");
});


// 
// mode parameter tests
// 
test('should return a default mode if user dont input it', () => {
  expect(validateParameters(123, 'M', null).mode).toBe('cardinal');
  expect(validateParameters(123, 'M', { appendWith: 'house' }).mode).toBe('cardinal');
});

test('should return a valid mode if user input it', () => {
  expect(validateParameters(123, 'M', { mode: 'ordinal' }).mode).toBe('ordinal');
  expect(validateParameters(123, 'M', { mode: 'cardinal' }).mode).toBe('cardinal');
});

test('should throw an error if inputed mode doesnt exist', () => {
  const callingFunctionWithWrongFormatMode = () => {
    try {
      validateParameters(123, 'F', { mode: 'invalid mode' });
    } catch (error) {
      return error.message;
    };
  };
  expect(callingFunctionWithWrongFormatMode()).toBe("Mode 'invalid mode' is invalid");
});

// 
// appendWith parameter tests
// 
test('should return the singular appendWith as appendWith if the number be 1', () => {
  expect(
    validateParameters(1, 'M', { appendWith: { singular: 'brinquedo', plural: 'brinquedos' } })
      .appendWith).toBe('brinquedo');

});

test('should throw an error if appendWith wasnt a string and mode be ordinals', () => {
  const callingFunctionWithWrongFormatAppendWith = () => {
    try {
      validateParameters(123, 'M', { mode: 'ordinal', appendWith: { singular: 'brinquedo', plural: 'brinquedos' } });
    } catch (error) {
      return error.message;
    };
  };

  expect(callingFunctionWithWrongFormatAppendWith()).toBe('appendWith may be a string if mode was ordinal');
});


test('should return the plural appendWith as appendWith if the number be different than 1', () => {
  expect(
    validateParameters(2, 'M', { appendWith: { singular: 'brinquedo', plural: 'brinquedos' } })
      .appendWith).toBe('brinquedos');

});

test('should return the default appendWith as appendWith if this attribute be a string', () => {
  expect(
    validateParameters(2, 'M', { appendWith: 'lápis' })
      .appendWith).toBe('lápis');

});

test('should return an empty string appendWith if this attribute doesnt declared', () => {
  expect(validateParameters(2, 'M')
    .appendWith).toBe('');
});

test('should throw an error if there are error in appendWith option', () => {
  const callingFunctionWithWrongFormatAppendWith = (wrongFormatAppendWith) => {
    try {
      validateParameters(123, 'M', wrongFormatAppendWith);
    } catch (error) {
      return error.message;
    };
  };

  const expectedMessage = "appendWith option is invalid";

  expect(callingFunctionWithWrongFormatAppendWith({ appendWith: 123 })).toBe(expectedMessage);
  expect(callingFunctionWithWrongFormatAppendWith({ appendWith: [] })).toBe(expectedMessage);
  expect(callingFunctionWithWrongFormatAppendWith({ appendWith: { singular: 1, plural: 2 } })).toBe(expectedMessage);
  expect(callingFunctionWithWrongFormatAppendWith({ appendWith: {} })).toBe(expectedMessage);
});
