module.exports = function add(...params) {
    let sum = 0;
    if (params.length === 0) {
        return 0;
    }
    sum = params.reduce((prev, next) => {
        return prev + next;
    });
    return sum || 0;
};
