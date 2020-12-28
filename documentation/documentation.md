# Available Methods

We'll discuss each method available on the JHF file. Remember, some of these methods may 
require additional packages or API. which would be indicated appropriately.

- [`autoEllipses`](#-autoEllipses)
- [`characterRange`](#-characterRange)
- [`fileNameFromPath`](#-fileNameFromPath)
- [`hasRepeatedLetters`](#-hasRepeatedLetters)
- [`hex2rgba`](#-hex2rgba)
- [`inputFileToBase64`](#-inputFileToBase64)
- [`isArray`](#-isArray)
- [`isBoolean`](#-isBoolean)
- [`isDefined`](#-isDefined)
- [`isEmpty`](#-isEmpty)
- [`isEmptyArray`](#-isEmptyArray)
- [`isEmptyObject`](#-isEmptyObject)
- [`isEmptyString`](#-isEmptyString)
- [`isEnv`](#-isEnv)
- [`isLetter`](#-isLetter)
- [`isLowerCase`](#-isLowerCase)
- [`isNotEmptyArray`](#-isNotEmptyArray)
- [`isNotEmptyObject`](#-isNotEmptyObject)
- [`isNotEmptyString`](#-isNotEmptyString)
- [`isNumber`](#-isNumber)
- [`isNumeric`](#-isNumeric)
- [`isObject`](#-isObject)
- [`isString`](#-isString)
- [`isUpperCase`](#-isUpperCase)
- [`keyBy`](#-keyBy)

&nbsp;

### `# autoEllipses()`

The `autoEllipses()` method ellipse's long words and sentences in relation to given parameters.

```
let sentence, displayAreaWidth, ellipsesPercentage;

sentence = 'Princess peach is a mushroomnian';
displayAreaWidth = 200;
ellipsesPercentage = 95;

autoEllipses(sentence, displayAreaWidth, ellipsesPercentage);

// Princess peach is a ...
```

&nbsp;

### `# characterRange()`

The `characterRange()` method lists and returns all characters between given characters according to UTF-8 charset,
will return false if they are no characters in between or the number of characters in between exceeds 65535.

```
characterRange('a','z');

// abcdefghijklmnopqrstuvwxyz

characterRange('a','Z');

// false

characterRange('1','z');

// 123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz
```

Notice that lowercase "a" to uppercase "Z" returns false as in the UTF-8 charset uppercase "Z" is considered higher.

&nbsp;

### `# fileNameFromPath`

The `fileNameFromPath()` method returns the file name from a file path according to the path separator which defaults to '\\'

```
fileNameFromPath("characters/images/mario.jpg",'/');

// mario.jpg

fileNameFromPath("characters\\images\\luigi.jpg",'\\');

// luigi.jpg
```

&nbsp;

### `# hasRepeatedLetters()`

The `hasRepeatedLetters()` method checks if a string has repeated characters.

```
hasRepeatedLetters('Princess Rosalina');

// true

hasRepeatedLetters('Pauline Louise');

// false
```

&nbsp;

### `# hex2rgba()`

The `hex2rgba()` method converts hex color string to an rgba color string.

```
hex2rgba('#fff');

// rgba(255,255,255,1)

hex2rgba('#ffffff',0.4);

// rgba(255,255,255,0.4)
```

&nbsp;

### `# inputFileToBase64()`

> CLIENT - **Requires Web API**

The `inputFileToBase64()` method convert a form input file to a base64 sting.

```
inputFileToBase64(fileObject,(data) => data);

// data:image/png;base64,iVBORw0KGgoAAAA...
```

&nbsp;

### `# isArray()`

The `isArray()` method checks if a given value is an array.

```
isArray([]);

// true

isArray([{firstName:'Mario', occupation:'Plumber'}, {firstName:'Luigi', occupation:'Plumber'}]);

// true

isArray({});

// false
```

&nbsp;

### `# isBoolean()`

The `isBoolean()` method checks if a given value is a boolean.

```
isBoolean(true);

// true

isBoolean(false);

// true

isBoolean('true');

// false
```

&nbsp;

### `# isDefined()`

The `isDefined()` method checks if a given value is defined.

```
let citizen = 'Koopa Jr.';

isDefined(citizen);

// true

let citizen;

isDefined(citizen);

// false
```

&nbsp;

### `# isEmpty()`

The `isEmpty()` method checks if a given value is an empty string, an empty array, an empty object or is undefined.

```
isEmpty('');

// true

isEmpty([]);

// true

isEmpty({});

// true

isEmpty(undefined);

// true

isEmpty('Princess Peach');

// false
```

&nbsp;

### `# isEmptyArray()`

The `isEmptyArray()` method check if a given value is an array and if the array is empty.

```
isEmptyArray([]);

// true

isEmptyArray(['Diddy Kong','Donkey Kong']);

// false

isEmptyArray({});

// false
```

&nbsp;

### `# isEmptyObject()`

The `isEmptyObject()` method checks if an given value is an object and if the object is empty.

```
isEmptyObject({});

// true

isEmptyObject({firstName:'Mario', lastName:'Mario', age:36});

// false

isEmptyObject([]);

// false

```

&nbsp;

### `# isEmptyString()`

The `isEmptyString()` method checks if a given value is a string and if the string is empty.

```
isEmptyString('');

// true

isEmptyString('Princess	Daisy');

// false

isEmptyString(' ');

// false
```

&nbsp;

### `# isEnv()`

> CLIENT - **Requires `dotenv` Package**

> SERVER - **Requires `dotenv` Package**

The `isEnv()` method compares environmental variables.

```
process.env.WORLD = 'super mario world';

isEnv('WORLD','super mario world');

// true

process.env.WORLD = 'super mario world';

isEnv('WORLD','super-mario-world');

// false
```

&nbsp;

### `# isLetter()`

The `isLetter()` method checks if a string of characters contains only alphabet.

```
isLetter('DonkeyKong);

// true

isLetter('Donkey Kong);

// null

isLetter('10');

// null
```

&nbsp;

### `# isLowerCase()`

The `isLowerCase()` method checks if a string is completely lowercase alphabets.

```
isLowerCase('diddykong);

// true

isLowerCase('diddy kong);

// false

isLowerCase('DiddyKong);

// false
```

&nbsp;

### `# isNotEmptyArray()`

The `isNotEmptyArray()` method checks if a given array is a valid array and is not empty.

```
isNotEmptyArray(['Professor Elvin Gadd','Pauline Louise']);

// true

isNotEmptyArray([]);

// false

isNotEmptyArray({});

// false
```

&nbsp;

### `# isNotEmptyObject()`

The `isNotEmptyObject()` method checks if a given object is a valid object and is not empty.

```
isNotEmptyObject({'name':'Princess Rosalina','birthPlace':'Comet Observatory'});

// true

isNotEmptyObject({});

// false

isNotEmptyObject([]);

// false
```

&nbsp;

### `# isNotEmptyString()`

The `isNotEmptyString()` method checks if a given string is a valid string and is not empty.

```
isNotEmptyString('Pauline Louise');

// true

isNotEmptyString('');

// false

isNotEmptyString(1981);

// false
```

&nbsp;

### `# isNumber()`

The `isNumber()` method checks if a give value is exactly a number and not numeric string.

```
isNumber(1981);

// true

isNumber('1981');

// false
```

&nbsp;

### `# isNumeric()`

The `isNumeric()` method checks if a value contains only numerical string.

```
isNumeric(1985);

// true

isNumeric('1985');

// true

isNumeric('1985A');

// false
```

&nbsp;

### `# isObject()`

The `isObject()` method checks if a given value is an object.

```
isObject({});

// true

isObject([]);

// false
```

&nbsp;

### `# isString()`

The `isString()` method checks if a given value is a string.

```
isString('');

// true

isString('Koopa Jr. Koopa');

// true

isString([]);

// false
```

&nbsp;

### `# isUpperCase()`

The `isUpperCase()` method checks if a given string is completely uppercase alphabets.

```
isUpperCase('BOOM BOOM);

// true

isUpperCase('Boom Boom');

// false
```

&nbsp;

### `# keyBy()`

The `keyBy()` method keys an array of objects by the given key.

```
let arrayOfObjects = [
  {firstName:'Mario',lastName:'Mario',occupation:'Plumber'},
  {firstName:'Luigi',lastName:'Mario',occupation:'Plumber'},
]

keyBy(arrayOfObjects,'name');

// ...
{
    Mario: {
        firstName:"Mario",
        lastName:"Mario",
        occupation:"Plumber",
        index:0
    },
    Luigi: {
        firstName:"Luigi",
        lastName:"Mario",
        occupation:"Plumber",
        index:1
    },
}
```
If multiple items have the same key, only the last one will appear

```
let arrayOfObjects = [
  {firstName:'Princess',lastName:'Peach',occupation:'Princess'},
  {firstName:'Princess',lastName:'Daisy',occupation:'Princess'},
]

keyBy(arrayOfObjects,'firstName');

// ...
{
    Princess: {
        firstName:"Princess",
        lastName:"Daisy",
        occupation:"Princess",
        index:1
    }
}
```

&nbsp;