import Vue from 'vue'
import test from './img/test.jpg'
import './style/index.scss'
new Vue({
     render: h=><div class='flex'>
        <h2>hello jsx</h2>  
        <img src={test}></img>
          </div>
}).$mount('#app');