let loaderUtils =require('loader-utils')
module.exports=function (source) {
    console.log('loader b running')
    let url = loaderUtils.interpolateName(this, '[name].[ext]', source)
    console.log(url,'*****')
    this.emitFile(url, source)
    return source
}