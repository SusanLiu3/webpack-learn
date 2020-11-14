const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

// 生成环境不需要热跟新
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
        filename: '[name]_[hash:8].js' //js:chunkhash// '[name].js'
    }, // 多入口
    mode: 'production',
    module: {
        rules: [{
                test: /\.js$/, // 匹配js文件
                use: 'babel-loader' // 使用babel-loader 进行解析
            }, {
                test: /.css$/,
                use: [
                    // 因为使用mini-css-extract-plugin 将css提取到单独文件，所以不需要style-loader
                    // 使用插件自带的loader
                    MiniCssExtractPlugin.loader,
                    // 'style-loader', // 将样式通过style标签插入到head
                    'css-loader',
                    'sass-loader',
                    'postcss-loader',
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUni: 75, // 1rem 代表的px
                            remPrecision: 8 ,// 转换成rem 保留的小数位数
                        }
                    }
                ]
            },
            {
                test: /.(png|jpg|gif|svg)$/,
                // use: 'file-loader'
                use: [{
                    loader: 'file-loader', // 'url-loader',

                    options: {
                        name: '[name]_[hash:8].[ext]',
                        limit: 10240
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new optimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/,
            cssProcessor: require('cssnano'),
        }),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, './src/index.html'),
            chunks: ['index'],
            inject: true,
            minify: true
        }),
        new htmlWebpackPlugin({
            filename: 'vue.html', // 打包输出文件名
            template: path.join(__dirname, './src/vue.html'), // 模板
            chunks: ['vue'], // 需要注入的chunk (js/css)
            inject: true, // 是否需要将chunk自动注入到html中
            minify: true
        }),
        new htmlWebpackPlugin({
            filename: 'search.html',
            template: path.join(__dirname, './src/search.html'),
            chunks: ['search'],
            inject: true,
            minify: true
        }),
        new CleanWebpackPlugin(),
    ]
}