import test from 'ava';
import { SologenicError } from './error';

test('check for duplicate error ids and messages', async function(t) {
    let errorCodes = SologenicError.getErrorCodes();

    for (var i in errorCodes) {
        let errorId = SologenicError.getErrorCodeByMessage(errorCodes[i].message);
        let message = SologenicError.getErrorCodeById(errorCodes[i].id);
       
        t.true(typeof(errorId) == 'string');
        t.true(typeof(message) == 'string');          

        await new Promise((resolve) => {
            let count = 0;

            for (var index in errorCodes) {
                if (errorCodes[index].id == errorId) {
                    count++;
                }
            }

            resolve(count);
        }).then(function(value) {
            t.is(value, 1);
        });

        await new Promise((resolve) => {
            let count = 0;

            for (var index in errorCodes) {
                if (errorCodes[index].message == message) {
                    count++;
                }
            }

            resolve(count);
        }).then(function(value) {
            t.is(value, 1);
        });
    }       
});