let chai = require('chai');
let expect = chai.expect;

let request = require('../request');

describe('#request get test', function () {
    this.timeout(0); // 关闭超时限制
    it('#加载新浪财api,返回数据，应该是个对象', (done) => {
        request((res) => {
            expect(res).to.be.a('object');
            done();
        });
    });
    it('#加载新浪财api,经返回数据，应该有result 属性', (done) => {
        request((res) => {
            expect(res).to.have.property('result');
            done();
        });
    });
    it('#加载新浪财api,返回数据,应该含有data属性并且是个数组', (done) => {
        request((res) => {
            let ret = res.result;
            expect(ret).to.have.property('data');
            expect(ret.data).to.be.a('array');
            done();
        });
    });
});
