# Available Methods

We'll discuss each method available on the JHF file. Remember, some of these methods may 
require additional packages or API. which would be indicated appropriately.

- [`autoEllipses`](#autoEllipses())
- [`characterRange`](#characterRange())
- [`fileNameFromPath`](#fileNameFromPath())
- [`hasRepeatedLetters`](#hasRepeatedLetters())
- [`hex2rgba`](#hex2rgba())
- [`inputFileToBase64`](#inputFileToBase64())
- [`isArray`](#isArray())
- [`isBoolean`](#isBoolean())
- [`isDefined`](#isDefined())
- [`isEmpty`](#isEmpty())
- [`isEmptyArray`](#isEmptyArray())
- [`isEmptyObject`](#isEmptyObject())
- [`isEmptyString`](#isEmptyString())
- [`isEnv`](#isEnv())

` `  
` `  

### `# autoEllipses()`

The `autoEllipses()` method ellipse's long words and sentences in relation to given parameters.

```
let sentence, displayAreaWidth, ellipsesPercentage;

sentence = 'Princess peach is a mushroomnian';
displayAreaWidth = 50;
ellipsesPercentage = 20;

autoEllipses(sentence, displayAreaWidth, ellipsesPercentage);

// Princess peach is a ...
```

` `  
` `  

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

` `  
` `  

### `# fileNameFromPath`

The `fileNameFromPath()` method returns the file name from a file path according to the path separator which defaults to '\\'

```
fileNameFromPath("characters/images/mario.jpg",'/');

// mario.jpg

fileNameFromPath("characters\\images\\luigi.jpg",'\\');

// luigi.jpg
```

` `  
` `  

### `# hasRepeatedLetters()`

The `hasRepeatedLetters()` method checks if a string has repeated characters.

```
hasRepeatedLetters('Princess Rosalina');

// true

hasRepeatedLetters('Pauline Louise');

// false
```

` `  
` `  

### `# hex2rgba()`

The `hex2rgba()` method converts hex color string to an rgba color string.

```
hex2rgba('#fff');

// rgba(255,255,255,1)

hex2rgba('#ffffff',0.4);

// rgba(255,255,255,0.4)
```

` `  
` `  

### `# inputFileToBase64()`

> **Requires Web API**

The `inputFileToBase64()` method convert a form input file to a base64 sting.

```
inputFileToBase64(fileObject,(data) => data);

// data:image/png;base64,iVBORw0KGgoAAAA...
```

` `  
` `  

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

` `  
` `  

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

` `  
` `  

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

` `  
` `  

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

` `  
` `  

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

` `  
` `  

### `# isEmptyObject()`

The `isEmptyObject()` method checks if an given value is an object and if the object is empty.

```
isEmptyObject({});

// true

isEmptyObject({firstName:'Mario', lastName:'Mario', age:36});

// false

isEmptyObject('');

// false

```

` `  
` ` 

### `# isEmptyString()`

The `isEmptyString()` method checks if a given value is a string and if the string is empty.

```
isEmptyString('');

// true

isEmptyString('Princess	Daisy');

// false

isEmptyString([]);

// false
```

` `  
` ` 

### `# isEnv()`

The `isEnv()` method compares environmental variables.

```
process.env.WORLD = 'super mario world';

isEnv('WORLD','super mario world');

// true

process.env.WORLD = 'super mario world';

isEnv('WORLD','super-mario-world');

// false
```

` `  
` `  
