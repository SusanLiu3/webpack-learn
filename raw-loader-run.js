const path = require('path');
const fs = require('fs');
const runLoaders=require('loader-runner')
console.log(runLoaders)
// import { runLoaders } from 'loader-runner';

runLoaders.runLoaders(
    {
        resource: path.join(__dirname, 'raw-loader-text.txt'), // 解析资源的路径（绝对路径）
        loaders: [path.resolve('./loader-runner/raw-loader.js')], // 数组，可以传递多个loader
        context: { minimize: true },
        readResource: fs.readFile.bind(fs),
    },
    function (err, result) {
        return err ? console.log(err) : console.log(result);
    }
);
