module.exports=function (source) {
    console.log('loader b running')
    this.emitFile('test.txt',source)
    return source
}