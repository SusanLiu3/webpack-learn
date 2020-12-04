let chai = require('chai');
var expect = chai.expect;
let readFile = require('../readFile');
// let assert=require('assert')
// 测试异步 传入回调函数
describe('read file test', () => {
    it('callback test ', (done) => {
        readFile((str) => {
            expect(str).to.be.equal('我是一份测试数据，哈哈哈');
            // assert.strictEqual(str,'我是一份测试数据，哈哈哈')
            done();
        });
    })
});

// 传入promise
