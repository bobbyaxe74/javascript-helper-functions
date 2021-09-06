/**
 * @jest-environment node
 */
import * as JHF from '../../helpers/server/server-helper.js';

test('objectToFormData', () => {
    let form = JHF.objectToFormData({firstName:'Princess', lastName:'Peach'});
    expect(form._streams[0]).toEqual(expect.stringContaining('firstName'));
    expect(form._streams[1]).toBe('Princess');
    expect(form._streams[3]).toEqual(expect.stringContaining('lastName'));
    expect(form._streams[4]).toBe('Peach');
});

test('isEnv', () => {
    expect(JHF.isEnv('NODE_ENV','test')).toBe(true);
});

test('mongooseSelectDB', () => {
    let mongoString = 'mongodb://superAdmin:*****@255.255.255.255:27000/?authSource=admin';
    let dbName = 'super-mario-world'
    let string = JHF.mongooseSelectDB(mongoString,dbName);
    expect(string).toEqual(expect.stringContaining('mongodb://superAdmin:*****@255.255.255.255:27000/super-mario-world?'));
});