const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
let {
    entryObj,
    htmlWebpackList
} = require('./setPwa.js')
module.exports = {
    // entry:'./src/index.js',
    // output:{
    //     path:path.join(__dirname,'dist'),
    //     filename:'bundle.js'
    // }, //单入口
    entry: entryObj,
    // {
    //      index: './src/index/index.js',
    //          search: './src/search/index.js',
    //          vue: './src/vue/index.js'
    // },
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
        new CleanWebpackPlugin(),
        //  new htmlWebpackPlugin({
        //          filename: 'index.html',
        //          template: path.join(__dirname, './src/index/index.html'),
        //          chunks: ['index'],
        //          inject: true,
        //          minify: true
        //      }),
        //      new htmlWebpackPlugin({
        //          filename: 'vue.html', // 打包输出文件名
        //          template: path.join(__dirname, './src/vue/index.html'), // 模板
        //          chunks: ['vue'], // 需要注入的chunk (js/css)
        //          inject: true, // 是否需要将chunk自动注入到html中
        //          minify: true
        //      }),
        //      new htmlWebpackPlugin({
        //          filename: 'search.html',
        //          template: path.join(__dirname, './src/search/index.html'),
        //          chunks: ['search'],
        //          inject: true,
        //          minify: true
        //      }),
    ].concat(htmlWebpackList),
    devServer: {
        contentBase: './dist',
        hot: true
    },
    // devtool: 'cheap-source-map'
}