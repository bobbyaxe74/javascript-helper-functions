/**
 * @jest-environment jsdom
 */
import { expect } from '@jest/globals';
import * as JHF from '../../helpers/client/client-helper';

test('objectToFormData', () => {
    let form = JHF.objectToFormData({firstName:'Princess', lastName:'Peach'});
    expect(form.get('firstName')).toBe('Princess');
    expect(form.get('lastName')).toBe('Peach');
});

test('isEnv', () => {
    expect(JHF.isEnv('NODE_ENV','test')).toBe(true);
});

test('inputFileToBase64', (done) => {

    const file = new File(["foo"], "foo.txt", {
        type: "text/plain",
    });

    const callBack = (string) => {
        expect(string).toEqual(expect.stringContaining('data:text/plain;base64,'));
        done();
    }

    expect(JHF.inputFileToBase64(file,callBack)).toBeTruthy();
});