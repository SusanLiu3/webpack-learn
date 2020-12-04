let assert = require('assert');
let add = require('../add');
describe('add js test', () => {
    describe('func add test', () => {
        before(() => {
            console.log('test before ...');
        });
        after(() => {
            console.log('test done');
        });
        beforeEach(() => {
            console.log('single assert before');
        });
        afterEach(() => {
            console.log('single assert after');
        });
        it('sum should return 0 ', () => {
            // assert 断言
            assert.strictEqual(add(), 0);
        });
        it('add should return 15', () => {
            assert.strictEqual(add(1, 2, 3, 4, 5), 15);
        });
    });
});

describe('Array test', () => {
    describe('#indexOf test', () => {
        it('should return -1 when value not exist', () => {
            assert.strictEqual([1, 2, 3].indexOf(4), -1);
        });
    });
});
