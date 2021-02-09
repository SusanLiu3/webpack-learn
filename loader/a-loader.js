module.exports=function (source) {
    console.log('loader a running')
    
    // throw new Error('err')
    // this.callback( new Error('err'),source)
    this.callback(null,source)
    // return source
}