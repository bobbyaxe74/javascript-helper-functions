# Available Methods

We'll discuss each method available on the JHF file. Remember, some of these methods may 
require additional packages or API. which would be indicated appropriately.

- [`autoEllipses`](#-autoEllipses)
- [`characterRange`](#-characterRange)
- [`fileNameFromPath`](#-fileNameFromPath)
- [`groupBy`](#-groupBy)
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
- [`lcfirst`](#-lcfirst)
- [`mongooseSelectDB`](#-mongooseSelectDB)
- [`numericRange`](#-numericRange)
- [`objectToFormData`](#-objectToFormData)
- [`paginateData`](#-paginateData)
- [`passwordStrengthMeter`](#-passwordStrengthMeter)
- [`pluck`](#-pluck)
- [`randomDate`](#-randomDate)
- [`randomString`](#-randomString)
- [`sliceInToGroups`](#-sliceInToGroups)
- [`mapAs`](#-mapAs)
- [`tryOrReplace`](#-tryOrReplace)
- [`ucfirst`](#-ucfirst)

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

### `# groupBy()`

The `groupBy()` method groups objects contained in an array by a common key.

```
let arrayOfObjects = [
  {firstName:'Mario',lastName:'Mario', nationality:'Italian'},
  {firstName:'Luigi',lastName:'Mario', nationality:'Italian'},
  {firstName:'Yoshi',lastName:'Green', nationality:'Mushroomnian'},
  {firstName:'Princess',lastName:'Peach', nationality:'Mushroomnian'},
  {firstName:'Princess',lastName:'Daisy', nationality:'Sarasalander'},
  {firstName:'Pauline',lastName:'Louise', nationality:'Donish'},
]

groupBy(arrayOfObjects,'nationality');

// ...
{
    Italian: [
        {firstName: 'Mario',   lastName: 'Mario', nationality: 'Italian', index: 0},
        {firstName: 'Luigi', lastName: 'Mario', nationality: 'Italian', index: 1}
    ],
    Mushroomnian: [
        {firstName: 'Yoshi', lastName: 'Green', nationality: 'Mushroomnian', index: 2},
        {firstName: 'Princess', lastName: 'Peach', nationality: 'Mushroomnian', index: 3}
    ],
    Sarasalander: [
        {firstName: 'Princess', lastName: 'Daisy', nationality: 'Sarasalander', index: 4}
    ],
    Donish: [
        {firstName: 'Pauline', lastName: 'Louise', nationality: 'Donish', index: 5}
    ]
}

groupBy([],'nationality');

// false
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

let person;

isDefined(person);

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

### `# lcfirst()`

The `lcfirst()` method converts the first letter of a given string to lowercase.

```
lcfirst('Toadette Mushroom);

// toadette	Mushroom

lcfirst(undefined);

// ''
```

&nbsp;

### `# mapAs()`

The `mapAs()` method restructures individual objects contained in an array 
to conform with the given structure, also with the option of merging in the original object.

```
let data = [
    {fullName:'Mario Mario',occupation:'Plumber',age:'34'},
    {fullName:'Luigi Mario',occupation:'Plumber',age:'34'},
    {fullName:'Yoshi Green',occupation:'Self Employed',age:'27'},
    {fullName:'Princess Peach',occupation:'Princess',age:'32'}
];
let structure = {'fullName':'name','occupation':'job'};

mapAs(data,structure);

// ...
[
  { name: 'Mario Mario', job: 'Plumber' },
  { name: 'Luigi Mario', job: 'Plumber' },
  { name: 'Yoshi Green', job: 'Self Employed' },
  { name: 'Princess Peach', job: 'Princess' }
]

mapAs(data,structure,true);

// ...
[
  { fullName: 'Mario Mario', occupation: 'Plumber', age: '34', name: 'Mario Mario', job: 'Plumber'},
  { fullName: 'Luigi Mario', occupation: 'Plumber', age: '34', name: 'Luigi Mario', job: 'Plumber'},
  { fullName: 'Yoshi Green', occupation: 'Self Employed', age: '27', name: 'Yoshi Green', job: 'Self Employed'},
  { fullName: 'Princess Peach', occupation: 'Princess', age: '32', name: 'Princess Peach', job: 'Princess'}
]
```

&nbsp;

### `# mongooseSelectDB()`

The `mongooseSelectDB()` method will specify a database name or override a give database name
on a mongoDB connection string. This is helpful in situations where you have no control of the
connection string being passed in through the environmental variables.

```
mongooseSelectDB('mongodb://superAdmin:*****@111.887.144.322:27017/?authSource=admin','super_mario_world');

// mongodb://superAdmin:*****@111.887.144.322:27017/super_mario_world?authSource=admin
```

&nbsp;

### `# numericRange()`

The `numericRange()` method lists and return all numeric numbers between given numbers.

```
numericRange('3','99');

// [3,4,5,6,7,8,9,.......91,92,93,94,95,96,97,98,99]

numericRange(3,99,9);

// [3,12,21,30,39,48,57,66,75,84,93]
```
There is also a third parameter of step which determines the sequence in which the numeric numbers are listed.

&nbsp;

### `# objectToFormData()`

> CLIENT - **Requires Web API**

> SERVER - **Requires `form-data` Package**

The `objectToFormData()` method creates a FormData object with a given object.

```
let person = {"firstName":"Professor Elvin","lastName":"Gadd"};

let formDataObject = objectToFormData(person);
formDataObject.get('lastName');

// Gadd

let formDataObject = objectToFormData(person);
formDataObject.get('middleName');

// null
```

&nbsp;

### `# paginateData()`

The `paginateData()` method paginates an array of objects and return objects for specified page.

```
let list = [
  {firstName:'Iggy',lastName:'Koopalings'},
  {firstName:'Larry',lastName:'Koopalings'},
  {firstName:'Morton Jr.',lastName:'Koopalings'},
  {firstName:'Wendy O',lastName:'Koopalings'},
  {firstName:'Roy',lastName:'Koopalings'},
  {firstName:'Lemmy',lastName:'Koopalings'},
  {firstName:'Ludwig von',lastName:'Koopalings'},
];

paginateData(list,3,1);

// ...
[
  {firstName:'Iggy',lastName:'Koopalings'},
  {firstName:'Larry',lastName:'Koopalings'},
  {firstName:'Morton Jr.',lastName:'Koopalings'}
]

paginateData(list,3,3);

// ...
[
    {firstName:'Ludwig von',lastName:'Koopalings'}
]
```
This method requires three parameters `paginateData(arrayOfObjects, pageSize, pageNumber)` the first is
**arrayOfObjects** which is the array of the objects that needs to be paginated, The second is **pageSize**
which is the number of objects expected per page and the third is **pageNumber** which is the current page.

&nbsp;

### `# passwordStrengthMeter()`

The `passwordStrengthMeter()` method evaluates and returns password strength based on a 100% points scale.

```
passwordStrengthMeter('theprincessisinanothercastle');

// 51

passwordStrengthMeter('ThePrincessIsInAnotherCastle');

// 61

passwordStrengthMeter('ThePr!n(e$$!$!n@nother(astle');

// 81
```

&nbsp;

### `# pluck()`

The `pluck()` method retrieves all the values for a given key in an array of objects.

```
let list = [
    {firstName:'King',lastName:'Koopa'},
    {firstName:'Koopa Jr.',lastName:'Koopa'},
    {firstName:'Kamek',lastName:'Koopa'},
    {firstName:'Kammy',lastName:'Koopa'},
];

pluck(list,'firstName');

// ...
[ 
    "King",
    "Koopa Jr.",
    "Kamek",
    "Kammy"
]

pluck(list,'lastName');

// ...
[ 
    "Koopa",
    "Koopa",
    "Koopa",
    "Koopa"
]

pluck(list,'age');

// ...
[
    undefined, 
    undefined, 
    undefined, 
    undefined
]
```

&nbsp;

### `# randomDate()`

The `randomDate()` method returns a random date and time relative to current date.

```
randomDate();

// 01/01/2021, 23:44:15

randomDate(10);

// 02/01/2021, 05:45:21

randomDate(10,10);

// 02/01/2021, 03:45:49

randomDate(null,10);

// 01/01/2021, 13:47:52

randomDate(10,null);

// 02/01/2021, 03:48:32
```
This method has two optional parameters that are both nullable `randomDate(max, min)` the first is 
**max** which is the maximum number of hours ahead that is allowed in the random time generation and
the second is **min** which is the minimum number of hours behind that is allowed for the random
time generation.

&nbsp;

### `# randomString()`

The `randomString()` method generates a random string.

```
randomString();

// boq9z5vk

randomString(9);

// aykjmt1c6

randomString(9,'abcd');

// bcdadadcc
```
Warning:*this method generates strings that are neither collision free or unpredictable*

This method has two optional parameters `randomString(length, range)` the first is 
**length** which is the maximum length of string to be generated and the second is 
**range** which will serve as the PRNG or seed value for generation of the string.

&nbsp;

### `# sliceInToGroups()`

The `sliceInToGroups()` method groups an array of objects by a specified number.

```
let list = [
  {fullName:'Mario Mario',occupation:'Plumber'},
  {fullName:'Luigi Mario',occupation:'Plumber'},
  {fullName:'Yoshi Green',occupation:'Self Employed'},
  {fullName:'Princess Peach',occupation:'Princess'},
  {fullName:'King Koopa',occupation:'King'}
];

sliceInToGroups(list,2);

// ...
[
    [
        {fullName:'Mario Mario',occupation:'Plumber'},
        {fullName:'Luigi Mario',occupation:'Plumber'}
    ],
    [
        {fullName:'Yoshi Green',occupation:'Self Employed'},
        {fullName:'Princess Peach',occupation:'Princess'}
    ],
    [
        {fullName:'King Koopa',occupation:'King'}
    ],
]

sliceInToGroups(list,4);

// ...
[
    [
        {fullName:'Mario Mario',occupation:'Plumber'},
        {fullName:'Luigi Mario',occupation:'Plumber'},
        {fullName:'Yoshi Green',occupation:'Self Employed'},
        {fullName:'Princess Peach',occupation:'Princess'}
    ],
    [
        {fullName:'King Koopa',occupation:'King'}
    ],
]
```
This method requires two parameters `sliceInToGroups(arrayOfObjects, numberPerGroup)` the first is
**arrayOfObjects** which is the array of the objects that needs to be grouped, The second is **numberPerGroup**
which is the number of objects expected per group.

&nbsp;

### `# tryOrReplace()`

The `tryOrReplace()` method accesses an uncertain object value and return a replacement if accessor fails.

```
let person = {
    "fullName":"Lord Fawful",
    "residency":{
      "nationality":"Beanish"
    },
    "occupation":{
      "type":"Shop keeper",
      "finance":{
        "income":"$1000",
        "tax":"$100"
      }
    }
};

tryOrReplace(person,'occupation.finance.income');

// $1000

tryOrReplace(person,'occupation.finance.salary');

// undefined

tryOrReplace(person,'occupation.finance.salary.amount');

// false

tryOrReplace(person,'occupation.finance.salary.amount','$0');

// $0
```
This method has three parameters `tryOrReplace(object, accessors, replacement)` the first is
**object** which is the object to be accessed, The second is **accessors** which is the path of 
the object's property being accessed and the third is the **replacement** which is the value to
be returned should an exception be thrown while trying to access the given object's accessors path.

&nbsp;

### `# ucfirst()`

The `ucfirst()` method converts the first letter of a given string to uppercase.

```
ucfirst(king Boo);

// King Boo

ucfirst(undefined);

// ''
```

&nbsp;