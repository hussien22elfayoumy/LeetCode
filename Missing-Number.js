/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // [3, 0, 1]
    const numsSet = new Set(nums)
    
    /* 
    [0, 1, 3]
    [0, 1, 2, 3]
        [0, 3]
     */
     
     for(let i = 0 ; i  <= nums.length; i++) {
        if(!numsSet.has(i)) {
            return  i;
        }
     }
};