let assert = require('assert');
const { expect } = require('chai');
let add = require('../add');
describe('add js test', () => {
    describe('func add test', () => {
        before(() => {
            console.log('test before ...');
        });
        after(() => {
            console.log('test done');
        });
        beforeEach('#beforeEach', () => {
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
    describe('#indexOf test', function(){
        // mocha中默认超时时间是2秒 可以通过设置
        this.timeout(5000); // 设置成5秒
        this.timeout(0); // 关闭超时限制
        it('should return -1 when value not exist', () => {
            assert.strictEqual([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('#pending test', () => {
    it('#pending'); // 当未将回调函数作为第二个参数传递给it 时，这将会是一个待处理的测试 ，并非是错误的测试
});

describe('only test', () => {
    // only 只允许当前的测试运行
    // it.only('should flatten array ', () => {}); // 所有的测试，只有这个将被运行
    // it('should not run', () => {
    //     expect('123').to.be.a('string'); // 不会运行，其他的也不会运行
    // });
});
let a = false;
describe('skip test', () => {
    it('should merge two ways', function () {
        if (!a) {
            expect([1, 2, 3].indexOf(1)).to.be.equal(0);
            return this.skip(); // 在测试过程中跳过的测试都会标记未待处理测试
        }
    });
});

describe('#test随便写点',()=>{
    it('随便噢',()=>{})
})
