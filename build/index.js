if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/large-two-numbers-add.js')
} else {
    module.exports = require('./dist/large-two-numbers-add.min.js')
}