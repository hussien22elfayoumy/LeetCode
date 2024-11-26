/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
     let result = [];

  for (let [i, val] of arr.entries()) {
    result.push(fn(val, i));
  }

  return result;
};