/**
 * 实现将打包资源压缩成zip包的插件
 * 
 */
const JSZip = require('jszip')
const zip = new JSZip()
const RawSource = require('webpack-sources').RawSource
const path = require('path')
module.exports = class ZipPlugin {
    constructor(option) {
        this.options = option
    }
    apply(compiler) {
        compiler.hooks.emit.tapAsync('ZipPlugin', (compilation, cb) => {
            let folder = zip.folder() // 创建一个目录
            for (const filename in compilation.assets) {
                // console.log(compilation.assets[filename].source)
                let source = compilation.assets[filename].source() // 拿到文件的内容
                folder.file(filename, source) // 将内容添加到文件

                // 压缩
                zip.generateAsync({
                    type: "nodebuffer" // buffer流
                }).then((content) => {
                    // 将content是压缩后的字节流内容，转换成源内容后挂载到compilation.assets上
                    let output = path.join(compilation.options.output.path, this.options.filename + 'zip')
                    let relativePath = path.relative(compilation.options.output.path, output)
                    compilation.assets[relativePath] = new RawSource(content)
                    cb()
                });
            }
        })
    }
}