let TerserPlugin=require('terser-webpack-plugin')
module.exports = {
    entry: {
        'large-two-numbers-add': './src/index.js',
        'large-two-numbers-add.min': './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
        library: 'large-two-numbers-add',
        libraryTarget: 'umd'
    },
    mode:'none',// 默认不压缩
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.min\.js$/i,
            }),
        ],
    },
}