const express = require('express');
const app = express();
const fs = require('fs');


if (typeof self === 'undefined') {
    global.self = {};
}

app.use(express.static('dist')); 

let builtJs = require('../dist/vue-server.js');


// 模板
let template = fs.readFileSync('dist/vue.html', 'utf-8');

// 创建渲染引擎
let render = require('vue-server-renderer').createRenderer({ template });
// let context={
//     title:'ssr practice'
// }
// 监听端口号
app.listen(3000, () => {
    console.log('app is running on port 3000');
});
// 监听某个页面
app.get('/vue', (req, res) => {
    render.renderToString(builtJs, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error');
            return;
        }
        res.end(html);
    });
});
