// import { methodName } from '../core/core-helper.js';

/**
 * Create a FormData object with a given object
 * @param {object} object 
 * @return {object}
 */
const objectToFormData = (object) => {
    const formData = new FormData();
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            formData.append(key, object[key]);
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
 * Convert a form input file to base64
 * @param {file Object} file eg: e.target.files[0]
 * @param {function} callback 
 * @return {string}
 */
const inputFileToBase64 = (file, callback) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    return reader.onloadend = () => {
        callback(reader.result);
    };
};

export * from '../core/core-helper.js';
export {objectToFormData, isEnv, inputFileToBase64};