const Vue = require('vue');
const test = require('./img/test.jpg').default;
require('./style/index.scss');
const testSplit = require('../../common/index');
const add = require('large-two-numbers-add').default;
testSplit.default();
let app = new Vue({
    data() {
        return {
            msg: '',
        };
    },
    render() {
        return (
            <div class="flex">
                <h2>hello jsx</h2>
                <div>{add('999', '11')}</div>
                <img src={test}></img>
                <button onClick={this.clkProcess}> 点击 </button>
                <p>动态显示{this.msg ? this.msg : ''}</p>
            </div>
        );
    },
    methods: {
        clkProcess() {
            console.log('kkk');
            require('./lazy.js').then((i) => {
                debugger;
                this.msg = i.default;
            });
        },
    },
});

module.exports = app;
