const loaderUtils=require('loader-utils')
let fs=require('fs')
let path=require('path')
module.exports=function (source) {
    let obj=loaderUtils.getOptions(this)
    let cb=this.async()
    fs.readFile(path.join(__dirname,'./async.txt'),'utf-8',(err,data)=>{
        
        if (err){
            cb(err, '')
        }
        cb(null, data)

    })
    // console.log('name:',obj.name)
    // return JSON.stringify(source).replace('\u2028','\\u2028')
}