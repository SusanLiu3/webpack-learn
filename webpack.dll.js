const path=require('path')
const webpack=require('webpack')
module.exports = {
    entry: {
        library: [
            'vue',
        ]
    },
    output:{
        filename:'[name]_[chunkhash].js', // 生成的文件名字
        path:path.join(__dirname,'library'), // 打包到build目录下library文件夹下
        library:"[name]"
    },
    plugins:[
        new webpack.DllPlugin({
            name:'[name]_[chunkhash]',
            path: path.join(__dirname, 'library/mainfest.json')
        })
    ]
}