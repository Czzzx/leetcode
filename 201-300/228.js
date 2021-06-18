/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums.length === 0) return [];

    let start = nums[0];
    let ret = [];
    let len = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] > 1) {
            if (start === nums[i - 1]) {
                ret.push(`${start}`);
            } else {
                ret.push(`${start}->${nums[i - 1]}`);
            }
            start = nums[i];
            len = 0;
        } else {
            len++;
        }
    }

    if (len === 0) {
        ret.push(`${start}`);
    } else {
        ret.push(`${start}->${nums[nums.length - 1]}`);
    }

    return ret;
};
// @lc code=end

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));