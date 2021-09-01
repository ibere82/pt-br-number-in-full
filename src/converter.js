'use strict';

/** 
 * 
 * 
 * Version 0.1.0 on development.
 *
 * ***************************************************************************** 
 * 
 * This API converts a number to a portuguese word-number
 * 
 * *****************************************************************************
 * 
 * Vocabulary:
 * 
 * @therm (stringNumber): a string data type number @example: '42';
 * 
 * @therm (wordNumber): a string data type expression representing a word number
 *  @example: 'quarenta e dois'
 * 
 * @therm (numberNames): an array with strings representing the names of 
 * numbers in a specific place value @example: ["",["um","uma"],["dois","duas"],
 * "três","quatro","cinco","seis","sete","oito","nove"];
 * 
 * @therm (period): a group of three digits in a number @example: The thousands 
 * period from '423.321' is '423';
 * 
 * @therm (periodName): the name of the period @example 'mil', 'milhão', ...;
 * 
 * @therm (ordinaryWord): a single word representing the 
 * name of a single digit @example 'cinco', 'sessenta';
 * 
 * @therm (numberObject)
 * 
 * *****************************************************************************
 *  
 * This script receives params, validates them and creates an numberObject.
 * Then it pipes this object to an other functions chain to finally get
 * a word Number.
 *  
 * Follow the functions pipe-line:
 * 
 * @example To convert the number 247.012 to a wordNumber and require append the 'flores' word.
 * 
 * @function converter(247012, 'F', {appendWith: {singular: 'flor', plural: 'flores'}})
 * @do validates and transform parameters;
 * @do create a numberObject and pipes them to:
 *  @function wordNumber(numberObject)
 *  @do pipe to 
 *    @function wordNumberArrayPeriods('247012','F','pt-BR','cardinal')
 *    @do makes an array splited by periods in reverse order and iterates 
 *    each period calling the wordNumberPeriod.
 *    The number from example is converted by ['012','247']
 *    Follow the pipe-line using the '247' example.     
 *      @function  wordNumberPeriod('247',2,'F','pt-BR','cardinal')
 *      @do pipe the '247' to getHundredsToWords
 *        @function getHundredsToWords('247','F'','pt-BR',cardinal)
 *        @do split the number in two parts: '2' and '47'
 *        @do pipe the '2' to getOrdinaryWord and get: 'duzentas'
 *        @do pipe the '47' to getTensToWords
 *          @function getTensToWords('47','F','pt-BR',cardinal)
 *          @do split the number in two parts
 *          @do pipe each part to getOrdinaryWord and receive: 'quarenta' and 'sete'
 *          @do search by tensToOnes connections informations and receive: ' e '
 *          @returns 'quarenta e sete'
 *        @do search by hundredsToTens connections informations and get: ' e '
 *        @do joins 'duzentas' with ' e ' and 'quarenta e sete'
 *        @returns 'duzentas e quarenta e sete'
 *      @do uses the index param(in this case: 2) to search by period name and get 'mil'
 *      @do joins the getted string 'duzentas e quarenta e sete' with 'mil'
 *      @returns 'duzentas e quarenta e sete mil'
 *    @returns ['doze','duzentas e quarenta e sete mil']
 *  @do search by between periods connections informations and get: ' e '
 *  @do reverse and join the strings from array and get 'duzentas e quarenta e sete mil e doze'
 * @do join with 'flores' and get 'duzentas e quarenta e sete mil e doze flores'
 * @returns 'duzentas e quarenta e sete mil e doze flores'    
 *   
**/

const validateParameters = require('./validateParameters.js');
const wordNumber = require('./wordNumber.js');
const numberObject = require('./numberObject.js');

/**
 * 
 * Convert a number to a brasilian portuguese wordNumber.
 * 
 * @param {string | number} inputedNumber a integer greater than or equal to zero with up to 15 digits.
 * @param {string} inputedGender a letter 'F' or 'M' indicating the numeric gender.
 * @param {object} options a specific object containing mode and appendWith.
 * @returns a wordNumber.
 */
function converter(inputedNumber, inputedGender, options) {
  'use strict';

  const {
    appendWith,
    stringNumber,
    gender,
    mode
  } = validateParameters(inputedNumber, inputedGender, options);

  const wholeNumber = wordNumber(numberObject(stringNumber, gender, mode, appendWith));

  return `${wholeNumber}${appendWith && ' '}${appendWith}`;
};

module.exports = converter;
