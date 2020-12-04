let fs = require('fs');

module.exports = function readFile(cb) {
    let str = '';
    str = fs.readFile('./test.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        }
        typeof cb === 'function' && cb(data);
    });
};
