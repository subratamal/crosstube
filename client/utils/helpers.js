var _ = require('lodash');

function avg(numbers) {
    return _.reduce(numbers, function(memo, num) {
        return memo + num;
    }, 0) / (numbers.length === 0 ? 1 : numbers.length);
}

module.exports = avg;
