let chai = require('chai');
let expect = chai.expect;
let promise = require('../waitConsole');
describe('promise test', () => {
    it('async promise test ', (done) => {
        promise('123').then((str) => {
            // expect 风格断言
            expect(str).to.be.equal('123'); // 值相等
            done()
        });
    });

    it('is string type',(done)=>{
        expect('str').to.be.a('string')  // 判断类型
        done() // 必须要执行done 告诉mocha 等调用结束后测试
    })
});
