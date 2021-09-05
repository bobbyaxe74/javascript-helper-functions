import {isArray, isBoolean} from '../core/core-helper.js';
import FormData from 'form-data';

/**
 * Create a FormData object with a given object
 * @param {object} object 
 * @return {object}
 */
const objectToFormData = (object) => {
    const formData = new FormData();
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            let value = isArray(object[key]) ? JSON.stringify(object[key]) : object[key];
            value = isBoolean(value) ? value.toString() : value;
            formData.append(key, value);
        }
    }

    return formData;
}

/**
 * Compare environmental variables
 * For dotenv variables, Assumes `process.env` is available
 * @param {string} applicationEnvironmentKey 
 * @param {string} string 
 * @return {boolean}
 */
const isEnv = (applicationEnvironmentKey, string) => {
    if (process.env[applicationEnvironmentKey] === string) {
        return true;
    }

    return false;
}

/**
 * Specify a database name or override a give database name
 * On a mongoDB connection string
 * @param {string} mongoString mongoDB connection string
 * @param {string} dbName database name
 * @return {string}
 */
const mongooseSelectDB = (mongoString, dbName) => {
    try {
        let string = mongoString;
        string = string.replace('mongodb://','');
        string = string.split('?');
        if(string[0].includes('/')){
            let temp = string[0].split('/');
            return 'mongodb://'+temp[0]+'/'+dbName+'?'+string[1];
        } else {
            return 'mongodb://'+string[0]+'/'+dbName+'?'+string[1];
        }
    } catch (error) {
        console.error('mongooseSelectDB was unable to switch to the preferred database.');
        return mongoString;
    }
}

export * from '../core/core-helper.js';
export {objectToFormData, isEnv, mongooseSelectDB};