import * as JHF from '../../helpers/core/core-helper';

test('isEmptyObject', () => {
  expect(JHF.isEmptyObject({})).toBe(true);
  expect(JHF.isEmptyObject({name:'mario'})).toBe(false);
  expect(JHF.isEmptyObject([])).toBe(false);
  expect(JHF.isEmptyObject([{name:'mario'},{name:'luigi'}])).toBe(false);
  expect(JHF.isEmptyObject('')).toBe(false);
  expect(JHF.isEmptyObject('mario')).toBe(false);
  expect(JHF.isEmptyObject(-1)).toBe(false);
  expect(JHF.isEmptyObject(0)).toBe(false);
  expect(JHF.isEmptyObject(1)).toBe(false);
  expect(JHF.isEmptyObject(null)).toBe(false);
  expect(JHF.isEmptyObject(undefined)).toBe(false);
});

test('isNotEmptyObject', () => {
  expect(JHF.isNotEmptyObject({})).toBe(false);
  expect(JHF.isNotEmptyObject({name:'mario'})).toBe(true);
  expect(JHF.isNotEmptyObject([])).toBe(false);
  expect(JHF.isNotEmptyObject([{name:'mario'},{name:'luigi'}])).toBe(false);
  expect(JHF.isNotEmptyObject('')).toBe(false);
  expect(JHF.isNotEmptyObject('mario')).toBe(false);
  expect(JHF.isNotEmptyObject(-1)).toBe(false);
  expect(JHF.isNotEmptyObject(0)).toBe(false);
  expect(JHF.isNotEmptyObject(1)).toBe(false);
  expect(JHF.isNotEmptyObject(null)).toBe(false);
  expect(JHF.isNotEmptyObject(undefined)).toBe(false);
});

test('isObject', () => {
  expect(JHF.isObject({})).toBe(true);
  expect(JHF.isObject({name:'mario'})).toBe(true);
  expect(JHF.isObject([])).toBe(false);
  expect(JHF.isObject([{name:'mario'},{name:'luigi'}])).toBe(false);
  expect(JHF.isObject('')).toBe(false);
  expect(JHF.isObject('mario')).toBe(false);
  expect(JHF.isObject(-1)).toBe(false);
  expect(JHF.isObject(0)).toBe(false);
  expect(JHF.isObject(1)).toBe(false);
  expect(JHF.isObject(null)).toBe(false);
  expect(JHF.isObject(undefined)).toBe(false);
});

test('isEmptyArray', () => {
  expect(JHF.isEmptyArray({})).toBe(false);
  expect(JHF.isEmptyArray({name:'mario'})).toBe(false);
  expect(JHF.isEmptyArray([])).toBe(true);
  expect(JHF.isEmptyArray([{name:'mario'},{name:'luigi'}])).toBe(false);
  expect(JHF.isEmptyArray('')).toBe(false);
  expect(JHF.isEmptyArray('mario')).toBe(false);
  expect(JHF.isEmptyArray(-1)).toBe(false);
  expect(JHF.isEmptyArray(0)).toBe(false);
  expect(JHF.isEmptyArray(1)).toBe(false);
  expect(JHF.isEmptyArray(null)).toBe(false);
  expect(JHF.isEmptyArray(undefined)).toBe(false);
});

test('isNotEmptyArray', () => {
  expect(JHF.isNotEmptyArray({})).toBe(false);
  expect(JHF.isNotEmptyArray({name:'mario'})).toBe(false);
  expect(JHF.isNotEmptyArray([])).toBe(false);
  expect(JHF.isNotEmptyArray([{name:'mario'},{name:'luigi'}])).toBe(true);
  expect(JHF.isNotEmptyArray('')).toBe(false);
  expect(JHF.isNotEmptyArray('mario')).toBe(false);
  expect(JHF.isNotEmptyArray(-1)).toBe(false);
  expect(JHF.isNotEmptyArray(0)).toBe(false);
  expect(JHF.isNotEmptyArray(1)).toBe(false);
  expect(JHF.isNotEmptyArray(null)).toBe(false);
  expect(JHF.isNotEmptyArray(undefined)).toBe(false);
});

test('isArray', () => {
  expect(JHF.isArray({})).toBe(false);
  expect(JHF.isArray({name:'mario'})).toBe(false);
  expect(JHF.isArray([])).toBe(true);
  expect(JHF.isArray([{name:'mario'},{name:'luigi'}])).toBe(true);
  expect(JHF.isArray('')).toBe(false);
  expect(JHF.isArray('mario')).toBe(false);
  expect(JHF.isArray(-1)).toBe(false);
  expect(JHF.isArray(0)).toBe(false);
  expect(JHF.isArray(1)).toBe(false);
  expect(JHF.isArray(null)).toBe(false);
  expect(JHF.isArray(undefined)).toBe(false);
});

test('isEmptyString', () => {
  expect(JHF.isEmptyString({})).toBe(false);
  expect(JHF.isEmptyString({name:'mario'})).toBe(false);
  expect(JHF.isEmptyString([])).toBe(false);
  expect(JHF.isEmptyString([{name:'mario'},{name:'luigi'}])).toBe(false);
  expect(JHF.isEmptyString('')).toBe(true);
  expect(JHF.isEmptyString('mario')).toBe(false);
  expect(JHF.isEmptyString(-1)).toBe(false);
  expect(JHF.isEmptyString(0)).toBe(false);
  expect(JHF.isEmptyString(1)).toBe(false);
  expect(JHF.isEmptyString(null)).toBe(false);
  expect(JHF.isEmptyString(undefined)).toBe(false);
});

test('isNotEmptyString', () => {
  expect(JHF.isNotEmptyString({})).toBe(false);
  expect(JHF.isNotEmptyString({name:'mario'})).toBe(false);
  expect(JHF.isNotEmptyString([])).toBe(false);
  expect(JHF.isNotEmptyString([{name:'mario'},{name:'luigi'}])).toBe(false);
  expect(JHF.isNotEmptyString('')).toBe(false);
  expect(JHF.isNotEmptyString('mario')).toBe(true);
  expect(JHF.isNotEmptyString(-1)).toBe(false);
  expect(JHF.isNotEmptyString(0)).toBe(false);
  expect(JHF.isNotEmptyString(1)).toBe(false);
  expect(JHF.isNotEmptyString(null)).toBe(false);
  expect(JHF.isNotEmptyString(undefined)).toBe(false);
});

test('isString', () => {
  expect(JHF.isString({})).toBe(false);
  expect(JHF.isString({name:'mario'})).toBe(false);
  expect(JHF.isString([])).toBe(false);
  expect(JHF.isString([{name:'mario'},{name:'luigi'}])).toBe(false);
  expect(JHF.isString('')).toBe(true);
  expect(JHF.isString('mario')).toBe(true);
  expect(JHF.isString(-1)).toBe(false);
  expect(JHF.isString(0)).toBe(false);
  expect(JHF.isString(1)).toBe(false);
  expect(JHF.isString(null)).toBe(false);
  expect(JHF.isString(undefined)).toBe(false);
});

test('ucfirst', () => {
  expect(JHF.ucfirst('yoshi')).toBe('Yoshi');
});

test('lcfirst', () => {
  expect(JHF.lcfirst('Yoshi')).toBe('yoshi');
});

test('randomDate', () => {
  let date = JHF.randomDate(9,6) ? true : false;
  expect(date).toBe(true);
});

test('passwordStrengthMeter', () => {
  expect(JHF.passwordStrengthMeter('KingKoopa')).toBeGreaterThanOrEqual(23);
  expect(JHF.passwordStrengthMeter('KingKoopa32')).toBeGreaterThanOrEqual(32);
  expect(JHF.passwordStrengthMeter('KingKoopa32Male')).toBeGreaterThanOrEqual(40);
  expect(JHF.passwordStrengthMeter('KingKoopa32Male1985MushroomKingdom')).toBeGreaterThanOrEqual(85);
  expect(JHF.passwordStrengthMeter('KingKoopa32Male1985MushroomKingdomMushroomnian')).toBeGreaterThanOrEqual(109);
});

test('isLetter', () => {
  expect(JHF.isLetter({})).toBe(false);
  expect(JHF.isLetter({name:'mario'})).toBe(false);
  expect(JHF.isLetter([])).toBe(false);
  expect(JHF.isLetter([{name:'mario'},{name:'luigi'}])).toBe(false);
  expect(JHF.isLetter('')).toBe(false);
  expect(JHF.isLetter('mario')).toBe(true);
  expect(JHF.isLetter(-1)).toBe(false);
  expect(JHF.isLetter(0)).toBe(false);
  expect(JHF.isLetter(1)).toBe(false);
  expect(JHF.isLetter(null)).toBe(false);
  expect(JHF.isLetter(undefined)).toBe(false);
});

test('isUpperCase', () => {
  expect(JHF.isUpperCase({})).toBe(false);
  expect(JHF.isUpperCase({name:'mario'})).toBe(false);
  expect(JHF.isUpperCase([])).toBe(false);
  expect(JHF.isUpperCase([{name:'mario'},{name:'luigi'}])).toBe(false);
  expect(JHF.isUpperCase('')).toBe(false);
  expect(JHF.isUpperCase('mario')).toBe(false);
  expect(JHF.isUpperCase('MARIO')).toBe(true);
  expect(JHF.isUpperCase(-1)).toBe(false);
  expect(JHF.isUpperCase(0)).toBe(false);
  expect(JHF.isUpperCase(1)).toBe(false);
  expect(JHF.isUpperCase(null)).toBe(false);
  expect(JHF.isUpperCase(undefined)).toBe(false);
});

test('isLowerCase', () => {
  expect(JHF.isLowerCase({})).toBe(false);
  expect(JHF.isLowerCase({name:'mario'})).toBe(false);
  expect(JHF.isLowerCase([])).toBe(false);
  expect(JHF.isLowerCase([{name:'mario'},{name:'luigi'}])).toBe(false);
  expect(JHF.isLowerCase('')).toBe(false);
  expect(JHF.isLowerCase('mario')).toBe(true);
  expect(JHF.isLowerCase('MARIO')).toBe(false);
  expect(JHF.isLowerCase(-1)).toBe(false);
  expect(JHF.isLowerCase(0)).toBe(false);
  expect(JHF.isLowerCase(1)).toBe(false);
  expect(JHF.isLowerCase(null)).toBe(false);
  expect(JHF.isLowerCase(undefined)).toBe(false);
});

test('hasRepeatedLetters', () => {
  expect(JHF.hasRepeatedLetters({})).toBe(false);
  expect(JHF.hasRepeatedLetters({name:'princess'})).toBe(false);
  expect(JHF.hasRepeatedLetters([])).toBe(false);
  expect(JHF.hasRepeatedLetters([{name:'yoshi'},{name:'princess'}])).toBe(false);
  expect(JHF.hasRepeatedLetters('')).toBe(false);
  expect(JHF.hasRepeatedLetters('princess')).toBe(true);
  expect(JHF.hasRepeatedLetters(-1)).toBe(false);
  expect(JHF.hasRepeatedLetters(0)).toBe(false);
  expect(JHF.hasRepeatedLetters(1)).toBe(false);
  expect(JHF.hasRepeatedLetters(null)).toBe(false);
  expect(JHF.hasRepeatedLetters(undefined)).toBe(false);
});

test('isDefined', () => {
  expect(JHF.isDefined({})).toBe(true);
  expect(JHF.isDefined({name:'princess'})).toBe(true);
  expect(JHF.isDefined([])).toBe(true);
  expect(JHF.isDefined([{name:'yoshi'},{name:'princess'}])).toBe(true);
  expect(JHF.isDefined('')).toBe(true);
  expect(JHF.isDefined('princess')).toBe(true);
  expect(JHF.isDefined(-1)).toBe(true);
  expect(JHF.isDefined(0)).toBe(true);
  expect(JHF.isDefined(1)).toBe(true);
  expect(JHF.isDefined(null)).toBe(true);
  expect(JHF.isDefined(undefined)).toBe(false);
});

test('isEmpty', () => {
  expect(JHF.isEmpty({})).toBe(true);
  expect(JHF.isEmpty({name:'princess'})).toBe(false);
  expect(JHF.isEmpty([])).toBe(true);
  expect(JHF.isEmpty([{name:'yoshi'},{name:'princess'}])).toBe(false);
  expect(JHF.isEmpty('')).toBe(true);
  expect(JHF.isEmpty('princess')).toBe(false);
  expect(JHF.isEmpty(-1)).toBe(false);
  expect(JHF.isEmpty(0)).toBe(false);
  expect(JHF.isEmpty(1)).toBe(false);
  expect(JHF.isEmpty(null)).toBe(false);
  expect(JHF.isEmpty(undefined)).toBe(true);
});

test('autoEllipses', () => {
  expect(JHF.autoEllipses('Professor Elvin Gadd',300,60)).toEqual(expect.stringContaining('Professor Elvin Ga...'));
});

test('isNumeric', () => {
  expect(JHF.isNumeric({})).toBe(false);
  expect(JHF.isNumeric({name:'princess'})).toBe(false);
  expect(JHF.isNumeric([])).toBe(false);
  expect(JHF.isNumeric([{name:'yoshi'},{name:'princess'}])).toBe(false);
  expect(JHF.isNumeric('')).toBe(false);
  expect(JHF.isNumeric('princess')).toBe(false);
  expect(JHF.isNumeric('-1')).toBe(true);
  expect(JHF.isNumeric('0')).toBe(true);
  expect(JHF.isNumeric('1')).toBe(true);
  expect(JHF.isNumeric(-1)).toBe(true);
  expect(JHF.isNumeric(0)).toBe(true);
  expect(JHF.isNumeric(1)).toBe(true);
  expect(JHF.isNumeric(null)).toBe(false);
  expect(JHF.isNumeric(undefined)).toBe(false);
});

test('isNumber', () => {
  expect(JHF.isNumber({})).toBe(false);
  expect(JHF.isNumber({name:'princess'})).toBe(false);
  expect(JHF.isNumber([])).toBe(false);
  expect(JHF.isNumber([{name:'yoshi'},{name:'princess'}])).toBe(false);
  expect(JHF.isNumber('')).toBe(false);
  expect(JHF.isNumber('princess')).toBe(false);
  expect(JHF.isNumber('-1')).toBe(false);
  expect(JHF.isNumber('0')).toBe(false);
  expect(JHF.isNumber('1')).toBe(false);
  expect(JHF.isNumber(-1)).toBe(true);
  expect(JHF.isNumber(0)).toBe(true);
  expect(JHF.isNumber(1)).toBe(true);
  expect(JHF.isNumber(null)).toBe(false);
  expect(JHF.isNumber(undefined)).toBe(false);
});

test('randomString', () => {
  expect(JHF.randomString()).toBeTruthy();
  expect(JHF.randomString(10).length).toEqual(10);
  expect(JHF.randomString(10,'abcdefghijklmnopqrstuvwxyz')).toBeTruthy();
});

test('isBoolean', () => {
  expect(JHF.isBoolean({})).toBe(false);
  expect(JHF.isBoolean({name:'princess'})).toBe(false);
  expect(JHF.isBoolean([])).toBe(false);
  expect(JHF.isBoolean([{name:'yoshi'},{name:'princess'}])).toBe(false);
  expect(JHF.isBoolean('')).toBe(false);
  expect(JHF.isBoolean('princess')).toBe(false);
  expect(JHF.isBoolean(-1)).toBe(false);
  expect(JHF.isBoolean(0)).toBe(false);
  expect(JHF.isBoolean(1)).toBe(false);
  expect(JHF.isBoolean(null)).toBe(false);
  expect(JHF.isBoolean(undefined)).toBe(false);
  expect(JHF.isBoolean(true)).toBe(true);
  expect(JHF.isBoolean(false)).toBe(true);
});

test('fileNameFromPath', () => {
  expect(JHF.fileNameFromPath('tests/core/core-helper.test.js','/')).toBeTruthy();
  expect(JHF.fileNameFromPath('tests/core/core-helper.test.js','/')).toBe('core-helper.test.js');
});

test('keyBy', () => {
  let data = [
    {name:'Yoshi Green', age:'27', sex:'Male'},
    {name:'Princess Peach', age:'32', sex:'Female'},
    {name:'Princess Daisy', age:'28', sex:'Female'},
  ];

  let expected = {
    "Female": {
      "age": "28", 
      "index": 2, 
      "name": "Princess Daisy", 
      "sex": "Female"
    }, 
    "Male": {
      "age": "27", 
      "index": 0, 
      "name": 
      "Yoshi Green", 
      "sex": "Male"
    }
  }
  expect(JHF.keyBy(data,'sex')).toEqual(expected);
});

test('tryOrReplace', () => {
  let data = {character:{name:'Donkey Kong', age:'36', sex:'Male'}};
  expect(JHF.tryOrReplace(data,'character.name','unavailable')).toBe('Donkey Kong');
  expect(JHF.tryOrReplace(data,'character.type.type','unavailable')).toBe('unavailable');
});