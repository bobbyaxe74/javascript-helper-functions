/**
 * Check if a given object is empty
 * @param {Object} object 
 * @return {Boolean}
 */
const isEmptyObject = (object) => {
    if (isObject(object) && object !== undefined && Object.keys(object).length === 0) {
        return true
    }
    return false;
}

/**
 * Check if a given value is an object
 * @param {*} value 
 * @return {boolean}
 */
const isObject = (value) => {
    if (!Array.isArray(value) && value instanceof Object){
        return true;
    }
    return false
}

/**
 * Check if a given array is empty
 * @param {Array} array 
 * @return {Boolean}
 */
const isEmptyArray = (array) => {
    if (isArray(array) && array !== undefined && array.length === 0) {
       return true;
    }
    return false;
}

/**
 * Check if a given value is an array
 * @param {*} value 
 * @return {boolean}
 */
const isArray = (value) => {
    if (Array.isArray(value) || value instanceof Array){
        return true;
    }
    return false
}

/**
 * Check if a given string is empty
 * @param {String} string 
 * @return {Boolean}
 */
const isEmptyString = (string) => {
    if (isString(string) && string !== undefined && string.length === 0) {
       return true;
    }
    return false;
}

/**
 * Check if a given value is a string
 * @param {*} value 
 * @return {boolean}
 */
const isString = (value) => {
    if (typeof value === 'string' || value instanceof String){
        return true;
    }
    return false
}

/**
 * Converts the first letter of a given string to uppercase
 * @param {string} string 
 * @return {string}
 */
const ucfirst = (string)=>{
    if (string === undefined) {
        return '';
    }
    return string.charAt(0).toUpperCase()+string.slice(1)
}

/**
 * Converts the first letter of a given string to lowercase
 * @param {string} string 
 * @return {string}
 */
const lcfirst = (string)=>{
    if (string === undefined) {
        return '';
    }
    return string.charAt(0).toLowerCase()+string.slice(1)
}

/**
 * Returns a random date and time relative to current date
 * @param {integer|null} max hours ahead
 * @param {integer|null} min hours behind
 * @return {string} date time string
 */
const randomDate = (max=null, min=null)=>{
    let currentDate = new Date(Date.now());
    let maxHours = max?max:1;
    let minHours = min?-min:1;
    let totalHours =  Math.floor(Math.random() * (maxHours - minHours + 1) + minHours);
    currentDate.setHours(currentDate.getHours()+totalHours);
    return new Date(currentDate).toLocaleString();
}

/**
 * Evaluates and returns password strength based on a 100% points scale
 * @param {string} string 
 * @return {integer}
 */
const passwordStrengthMeter = (string)=>{
    // Additions
    let additions = 0;
    let lengthScore = string.length * 4;
    let stringTypeScore = 0;
    let stringGroupScore = 0;
    let stringGroup = {uppercase:[],lowercase:[],numbers:[],specials:[]};

    string.split('').forEach(function(character) {
        // Reward uppercase
        if (character.match(/^[A-Z]+$/)) {
            stringGroup.uppercase.push(character);
            stringTypeScore = stringTypeScore+2;
        }
        // Reward lowercase
        if (character.match(/^[a-z]+$/)) {
            stringGroup.lowercase.push(character);
            stringTypeScore = stringTypeScore+2;
        }
        // Reward numbers
        if (character.match(/^[0-9]+$/)) {
            stringGroup.numbers.push(character);
            stringTypeScore = stringTypeScore+4;
        }
        // Reward special characters
        if (character.match(/^[^a-zA-Z0-9]+/)) {
            stringGroup.specials.push(character);
            stringTypeScore = stringTypeScore+6;
        }
        // Reward middle numbers and alphabets
        if (character.match(/^[f-rF-R4-7]+$/)) {
            additions = additions+2;
        }
    });

    Object.keys(stringGroup).forEach((item, key)=>{ return stringGroupScore = stringGroup[item].length > 0? stringGroupScore+5 : stringGroupScore; });

    // Deductions
    let deductions = 0;

    string.split('').forEach(function(uno, index) {
        // Get the next character for the loop
        let duo = (string[index+1] !== undefined)? string[index+1] : '';
        let trio = (string[index+2] !== undefined)? string[index+2] : '';

        // Punish uppercase followed by uppercase
        if (isUpperCase(uno+duo)) {
            deductions = deductions+2;
        }
        // Punish lowercase followed by lowercase
        if (isLowerCase(uno+duo)) {
            deductions = deductions+2;
        }
        // Punish numbers followed by number
        if (Number.isInteger(uno+duo*1)) {
            if ((uno*1) === (duo*1)) {
                deductions = deductions+2;
            }
        }
        // Punish sequential characters
        if (hasRepeatedLetters(uno+duo+trio)) {
            deductions = deductions+3;
        }
        // Punish numerically sequential characters
        if (Number.isInteger(uno+duo+trio*1)) {
            if ((uno+duo+trio*1) === (uno+(uno++)+(uno+++1)*1)) {
                deductions = deductions+3;
            }
        }
    });

    return Math.round(((additions + lengthScore + stringTypeScore + stringGroupScore - deductions) * 100)/268);
}

/**
 * Check if a string of characters contains only alphabets
 * @param {string} character 
 * @return {boolean}
 */
const isLetter = (character) => {
    return character.match(/^[a-zA-Z]+$/);
}

/**
 * Check if a string is completely uppercase alphabets
 * @param {string} string 
 * @return {boolean}
 */
const isUpperCase = (string) => {
    return !isLetter(string)? false : string === string.toUpperCase();
}

/**
 * Check if a string is completely lowercase alphabets
 * @param {string} string 
 * @return {boolean}
 */
const isLowerCase = (string) => {
    return !isLetter(string)? false : string === string.toLowerCase();
}

/**
 * Check if a string has repeated characters
 * @param {string} string 
 * @return {boolean}
 */
const hasRepeatedLetters = (string) => {
    return (/([a-zA-Z0-9])\1{1,}/).test(string);
}

/**
 * Check if a given value is defined
 * @param {*} value 
 * @return {boolean}
 */
const isDefined = (value) => {
    if (value === undefined) {
        return false;
    }
    return true;
}

/**
 * Check if a given value is an empty string, an empty array, an empty object or is undefined
 * @param {*} value 
 * @return {boolean}
 */
const isEmpty = (value) => {
    if(!isDefined(value)){return true;}
    if(isString(value) && isEmptyString(value)){return true;}
    if(isArray(value) && isEmptyArray(value)){return true;}
    if(isObject(value) && isEmptyObject(value)){return true;}

    return false;
}

/**
 * Ellipse long words and sentences
 * @param {string} string text to be eclipsed.
 * @param {integer} displayAreaWidth current display area width
 * @param {integer} ellipsesPercentage 0-100, percentage of string not to wrap with respect to display area width
 * @return {string}
 */
const autoEllipses = (string, displayAreaWidth, ellipsesPercentage = 60) => {
    let sliceLength = (parseInt(displayAreaWidth,10)/10) * (parseInt(ellipsesPercentage,10)/100);
    let suffix = sliceLength < string.length ? '...' : '';

    return string.slice(0, sliceLength) + suffix;
}

/**
 * Check if a value contains only numerical string
 * @param {*} value 
 * @return {boolean}
 */
const isNumeric = (value) => {
    if (!isArray(value)) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
    return false;
}

/**
 * Check if a give value is exactly a number and not numeric string
 * @param {*} value 
 * @return {boolean}
 */
const isNumber = (value) => {
    return typeof value === 'number';
}

/**
 * Generate a random string
 * Note this is neither collision free or unpredictable
 * @param {integer} length, max 999999, returned string length
 * @param {string} range, characters to be used for generation
 * @return {string}
 */
const randomString = (length=8, range=null) => {

    length = length*1>999999? 999999 : length*1;

    if (isString(range)) {
        const chars = [...range];
        return [...Array(length)].map(i=>chars[Math.random()*chars.length|0]).join(``);

    } else {
        return [...Array(length)].map(i=>(Math.random()*36|0).toString(36)).join(``);
    }
}

/**
 * Check if a given value is a boolean
 * @param {*} value 
 * @return {boolean}
 */
const isBoolean = (value) => {
    if (typeof value === "boolean" || typeof(value) === typeof(true)){
        return true;
    }
    return false
}

/**
 * Return the file name from a file path
 * @param {string} path 
 * @param {string} separator
 * @return {string}
 */
const fileNameFromPath = (path, separator='\\') => {
    if (separator === '\\'){
        return path.split('\\').pop();
    }

    if (separator === '/'){
        return path.split('/').pop();
    }

    return path;
}

/**
 * Keys an array of objects by the given key
 * If multiple items have the same key, only the last one will appear
 * @param {array} arrayOfObjects 
 * @param {string} key 
 * @return {object}
 */
const keyBy = (arrayOfObjects,key) => {
    let bag = {};

    if (!isEmpty(arrayOfObjects)){
        arrayOfObjects.map((item,index)=>{
            bag[item[key]]={...item,index:index};
            return true;
        });
        return bag;
    }
    return false;
}

/**
 * Access an uncertain object and return a replacement if accessor fails
 * @param {object} object 
 * @param {string} accessors eg:'fish.type.food' where fish is the object, 'type.food' would be accessor string
 * @param {*} replacement 
 * @return {*}
 */
const tryOrReplace = (object, accessors, replacement=false) => {
    try {

        accessors = accessors.split('.');
        for (const key of accessors) {
            object = object[key];
        }
        return object;

    } catch (err){
        return replacement;
    }
}

/**
 * List and return all numeric numbers between given numbers
 * @param {integer} startAt 
 * @param {integer} endAt max:999
 * @param {integer} step min:1
 * @return {boolean|array}
 */
const numericRange = (startAt, endAt, step=1) => {
    if (startAt > endAt || endAt > 999 || step < 1){return false;}
    return Array(Math.ceil((endAt+1 - startAt) / step)).fill(startAt).map(
      (x, y) => {return x + y * step;}
    );
}

/**
 * List and return all characters between given characters
 * @param {string} startChar charset:UTF-8
 * @param {string} endChar charset:UTF-8
 * @return {boolean|string}
 */
const characterRange = (startChar, endChar) => {
    startChar = startChar.charCodeAt(0);
    endChar = endChar.charCodeAt(0);
    let numberOfChar = endChar - startChar +1;

    if (startChar > endChar || numberOfChar < 0 || numberOfChar > 65535){return false;}
    return String.fromCharCode(...[...Array(numberOfChar).keys()].map(i => i + startChar));
}

/**
 * Paginate an array of objects and return objects for specified page
 * @param {array} arrayOfObjects 
 * @param {integer} pageSize, number of objects per page
 * @param {integer} pageNumber, current page
 * @return {array}
 */
const paginateData = (arrayOfObjects, pageSize, pageNumber) => {
    return arrayOfObjects.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

/**
 * Retrieves all the values for a given key in an array of objects
 * @param {array} arrayOfObjects 
 * @param {string} key 
 * @return {array|boolean}
 */
const pluck = (arrayOfObjects, key) => {
    let bag = [];

    if (!isEmpty(arrayOfObjects)){
        arrayOfObjects.map((item)=>{
            bag.push(item[key]);
            return true;
        });
        return bag;
    }
    return false;
}

/**
 * Converts hex color string to an rgba color string
 * @param {string} hex eg: #01e, #3e4b1c
 * @param {decimal} alpha min:0 max:1 eg: 0.2
 * @return {string}
 */
const hex2rgba = (hex, alpha = 1) => {
    hex = hex.replace('#','');
    hex = hex.length === 3? hex+hex:hex;
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
};

/**
 * Groups an array of objects by a specified number
 * @param {array} arrayOfObjects
 * @param {integer} numberPerGroup min:1
 * @return {array}
 */
const sliceInToGroups = (arrayOfObjects, numberPerGroup=1) => {
    let bag = [];
    let length = arrayOfObjects.length;
    let start = 0;
    let stop = numberPerGroup;

    do {
        bag.push(arrayOfObjects.slice(start, stop));
        start = start + numberPerGroup;
        stop = stop + numberPerGroup;
    } while (start < length);

    return bag;
}

export {isEmptyObject, isEmptyArray, ucfirst, randomDate, passwordStrengthMeter, isLetter, isLowerCase, isUpperCase, 
    hasRepeatedLetters, isString, isEmptyString, isArray, isObject, isDefined, isEmpty, lcfirst, autoEllipses, isNumeric, 
    isNumber, randomString, isBoolean, fileNameFromPath, keyBy, tryOrReplace, numericRange, characterRange, paginateData, 
    pluck, hex2rgba, sliceInToGroups
};