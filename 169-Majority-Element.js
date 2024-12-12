/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let freq = {};
  for (let num of nums) {
    freq[num] ? freq[num]++ : (freq[num] = 1);
    if (freq[num] > Math.floor(nums.length / 2)) {
      return num;
    }
  }
  return null;
};