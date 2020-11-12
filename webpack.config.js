const path = require('path')
const webpack = require('webpack')
module.exports = {
    // entry:'./src/index.js',
    // output:{
    //     path:path.join(__dirname,'dist'),
    //     filename:'bundle.js'
    // }, //单入口
    entry: {
        index: './src/index.js',
        search: './src/search.js',
        vue: './src/vue.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    }, // 多入口
    mode: 'development', // 'production',
    module: {
        rules: [{
                test: /\.js$/, // 匹配js文件
                use: 'babel-loader' // 使用babel-loader 进行解析
            }, {
                test: /.css$/,
                use: [

                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /.(png|jpg|gif|svg)$/,
                // use: 'file-loader'
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 热更新
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
}