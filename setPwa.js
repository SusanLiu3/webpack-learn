var glob = require("glob")
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
let entryObj = {}
let htmlWebpackList=[]
let files = glob.sync('./src/*/index.js')
files.forEach(i => {
    let fileObj = i.match(/src\/(.*)\/index\.js/)
    let filename = fileObj[1]
    entryObj[filename] = i
    htmlWebpackList.push(
        new htmlWebpackPlugin({
            filename: `${filename}.html`,
            template: path.join(__dirname, `src/${filename}/index.html`),
            chunks: [filename],
            inject: true,
            minify: true,
        })
    )
})
module.exports = {
   entryObj,
   htmlWebpackList
}