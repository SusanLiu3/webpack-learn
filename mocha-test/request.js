let http = require('http');
module.exports = function fetchData( cb) {
    let url = `http://boyin.cj.sina.com.cn/client/api/feed_wb/pre_list?plugin=fund`;
    http.get(url, function ( res) {
        let resData = '';
        res.on('data', function (chunk) {
            resData += chunk;
        });
        res.on('end', function () {
            cb(JSON.parse(resData));
        });
        // console.log(resData)
        // cb(resData);
    });
};
