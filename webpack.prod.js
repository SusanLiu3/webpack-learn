const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const SpeedMeasureWebpackPlugin= require('speed-measure-webpack-plugin')
const smp=new SpeedMeasureWebpackPlugin()
const {
    BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer')
const {
    CleanWebpackPlugin,
} = require('clean-webpack-plugin');
const {
    entryObj,
    htmlWebpackList,
} = require('./setPwa.js');
// 生成环境不需要热跟新
module.exports = smp.wrap({
    // entry:'./src/index.js',
    // output:{
    //     path:path.join(__dirname,'dist'),
    //     filename:'bundle.js'
    // }, //单入口
    entry: entryObj,
    // {
    //     index: './src/index/index.js',
    //     search: './src/search/index.js',
    //     vue: './src/vue/index.js'
    // },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[hash:8].js', // js:chunkhash// '[name].js'
    }, // 多入口
    mode: 'production',
    module: {
        rules: [{
            test: /\.js$/, // 匹配js文件
            use: ['babel-loader', 'eslint-loader'], // 使用babel-loader 进行解析
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
                        remPrecision: 8, // 转换成rem 保留的小数位数
                    },
                },
            ],
        },
        {
            test: /.(png|jpg|gif|svg)$/,
            // use: 'file-loader'
            use: [{
                loader: 'file-loader', // 'url-loader',

                options: {
                    name: '[name]_[hash:8].[ext]',
                    limit: 10240,
                },
            }],
        },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css',
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/,
            cssProcessor: require('cssnano'),
        }),
        new CleanWebpackPlugin(),
        // 通过cdn引入 不打入bundle中 分离基础库
        new HtmlWebpackExternalsPlugin({
            externals: [{
                module: 'vue',
                entry: 'https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.runtime.min.js',
                global: 'Vue',
            }],
        }),
        new BundleAnalyzerPlugin(),
    ].concat(htmlWebpackList),
    optimization: {
        splitChunks: {
            minSize: 0,
            cacheGroups: {
                commons: {
                    name: 'vendors',
                    chunks: 'all',
                    minChunks: 2,
                    // test: /vue/,
                    // name: "vendors",
                    // chunks: "all"
                },
            },
        },
    },
});
