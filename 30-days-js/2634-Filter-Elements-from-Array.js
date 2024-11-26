/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    const result = [];
    for (let [i, val] of arr.entries()) {
        if (fn(val, i)) result.push(val);
    }

    return result;
};