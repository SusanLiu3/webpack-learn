import Vue from 'vue'
import test from './img/test.jpg'
import './style/index.scss'
new Vue({
     render: h=><div>
        <h2>hello jsx</h2>  
        <img src={test}></img>
          </div>
}).$mount('#app');