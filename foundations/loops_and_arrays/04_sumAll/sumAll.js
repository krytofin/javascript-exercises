const sumAll = function (left, right) {
    if (typeof (left) != 'number' || typeof (right) != 'number' || left <= 0 || right <= 0 || left % 1 !== 0 || right % 1 !== 0) {
        return 'ERROR'
    }
    let sum = 0;
    if (left < right) {
        for (let i = left; i <= right; i++)
            sum += i;
    }
    else {
        for (let i = left; i >= right; i--)
            sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
