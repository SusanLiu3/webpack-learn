const path = require('path');
const fs = require('fs');
const runLoaders=require('loader-runner')

runLoaders.runLoaders(
    {
        resource: path.join(__dirname, 'raw-loader-text.txt'), // 解析资源的路径（绝对路径）
        loaders: [{
            loader:path.resolve('./loader-runner/raw-loader.js'),
            options:{
                name:'test'
            }
        }], // 数组，可以传递多个loader
        context: { minimize: true },
        readResource: fs.readFile.bind(fs),
    },
    function (err, result) {
        return err ? console.log(err) : console.log(result);
    }
);
