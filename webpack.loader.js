const path=require('path')
// 用来看loader的执行顺序
// 从后往前(从右往左)执行
module.exports={
    entry:{
        index:'./loader-test.js'
    },
    output:{
        path:path.resolve('loader-dist'),
        filename:"[name]_[contenthash:8].js"
    },
    module: {
        rules:[
            {
                test:/\.js$/,
                use:[
                    path.resolve('./loader/a-loader.js'),
                    path.resolve('./loader/b-loader.js')
                ]
            }
        ]
    }
}