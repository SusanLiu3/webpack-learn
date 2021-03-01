const path=require('path')
const ZipPlugin=require('./zipPlugin/index.js')
module.exports={
    entry:'./zip/index.js',
    output:{
        path: path.join(__dirname,'zipdist'),
        filename:'[name].js'
    },
    mode:'production',
    plugins:[
        new ZipPlugin({
            filename:'zip'
        })
    ]

}