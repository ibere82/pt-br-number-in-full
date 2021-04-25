const singleWordNumberSchema = {
  oneOf: [
    { type: 'array', items: { type: 'string' } },
    { type: 'string' }
  ]
};

const placeNumberSchema =
{
  type: 'array',
  items: singleWordNumberSchema,
  additionalProperties: false
};

const propertyExceptionSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      number: { type: 'number' },
      wordNumber: singleWordNumberSchema,
      periodIndex: { type: 'number' },
      number: { type: 'number' }
    },
    additionalProperties: false
  }
};

const periodsSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      defaultName: singleWordNumberSchema,
      singularName: singleWordNumberSchema,
      pluralName: singleWordNumberSchema,
      genderInflection: { type: 'boolean' },
      genderDefault: { type: 'string' },
      requireConnectionToObject: { type: 'boolean' },
      borrowMode: { type: 'string' }
    },
    additionalProperties: false
  }
};

const singleDigitsSchema = {
  type: 'object',
  properties: {
    ones: placeNumberSchema,
    tens: placeNumberSchema,
    hundreds: placeNumberSchema
  },
  additionalProperties: false
};

const exceptionsSchema = {
  type: 'object',
  properties: {
    wholeNumber: propertyExceptionSchema,
    hundreds: propertyExceptionSchema,
    tens: propertyExceptionSchema,
    periods: propertyExceptionSchema
  },
  additionalProperties: false
};

const connectorsSchema = {
  type: 'object',
  properties: {
    insidePeriod: { type: 'string' },
    beforePeriodName: { type: 'string' },
    betweenPeriods: {
      type: 'object',
      properties: {
        syndethic: { type: 'string' },
        asyndethic: { type: 'string' }
      },
      additionalProperties: false
    },
    toObject: { type: 'string' }
  },
  additionalProperties: false
};


const numberStructuresSchema = {
  type: 'object',
  properties: {
    periods: periodsSchema,
    singleDigits: singleDigitsSchema,
    exceptions: exceptionsSchema,
    connectors: connectorsSchema
  },
  additionalProperties: false
};

const mainSchema = {
  id: "schema",
  type: "object",
  properties: {
    schemaVersion: { type: 'string' },
    languageCode: { type: 'string' },
    languageDescription: { type: 'string' },
    genderCodes: {
      type: 'array',
      items: { type: 'string' }
    },
    genderDescriptions: {
      type: 'array',
      items: { type: 'string' }
    },
    data: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          mode: { type: 'string' },
          numberStructures: numberStructuresSchema
        },
        additionalProperties: false
      }
    }
  },
  additionalProperties: false
};

module.exports = mainSchema;
