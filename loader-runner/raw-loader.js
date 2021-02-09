const loaderUtils=require('loader-utils')
module.exports=function (source) {
    let obj=loaderUtils.getOptions(this)
    console.log('name:',obj.name)
    return JSON.stringify(source).replace('\u2028','\\u2028')
}