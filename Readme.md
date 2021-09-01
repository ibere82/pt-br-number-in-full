# Converter v1.0.1

Converts a number to a brasilian portuguese word number

## Installation

Using npm:
$ npm i --save converter

var converter = require('converter');

## Sintaxe
converter(number, gender[, options])

### number

Required.

Type: string or number

The number to be converted.

This number must be an integer greater than or equal to zero with up to 15 digits.


### gender

Required.

Type: string

A letter 'M' or 'F' representing the number gender.

### options

Optional.

Type: object

The options can be:

  * mode : string
  * appendWith: string or object


### mode

Defines the number mode:

  * 'cardinal' (default)
  * 'ordinal'


### appendWith

A string to append with de number or a object

  * singular: string
  * plural: string


### singular
A string to append if the number is 1

### plural
A string to append if the number is different than 1

## Samples

```
converter(42,'M')
// 'quarenta e dois'

converter(42,'F')
// 'quarenta e duas'

converter(42,'F', { appendWith: 'casas' })
// 'quarenta e duas casas'

converter(1, 'F', { appendWith: { singular: 'casa', plural: 'casas' } })
// 'uma casa'

converter(42, 'F', { appendWith: { singular: 'casa', plural: 'casas' } });
// 'quarenta e duas casas'

converter(42, 'M', { appendWith: { singular: 'Real', plural: 'Reais' } });
// 'quarenta e dois Reais'

converter(42, 'M', {mode: 'ordinal'})
// 'quadragésimo segundo'
```
