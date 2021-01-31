import Vue from 'vue';
import test from './img/test.jpg';
import './style/index.scss';
import testSplit from '../../common/index';
import add from 'large-two-numbers-add'
testSplit();
new Vue({
    data() {
        return {
            msg: '',
        };
    },
    render() {
        return <div class='flex'>
            <h2>hello jsx</h2>
            <div>{add('999','11')}</div>
            <img src={test}></img>
            <button onClick={ this.clkProcess }> 点击 </button>
            <p>动态显示{this.msg ? this.msg : ''}</p></div>;
    },
    methods: {
        clkProcess() {
            console.log('kkk');
            import('./lazy.js').then((i) => {
                this.msg = i.default.msg;
            });
        },
        
    },
}).$mount('#app');
