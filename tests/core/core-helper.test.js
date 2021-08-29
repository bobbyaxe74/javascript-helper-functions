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