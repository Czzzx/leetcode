/**
 * 如果一个数列 至少有三个元素 ，并且任意两个相邻元素之差相同，则称该数列为等差数列。
 * 例如，[1,3,5,7,9]、[7,7,7,7] 和 [3,-1,-5,-9] 都是等差数列。
 * 给你一个整数数组 nums ，返回数组 nums 中所有为等差数组的 子数组 个数。
 * 子数组 是数组中的一个连续序列。
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = function(nums) {
    if (nums.length < 3) return 0;

    let count = 0;
    let prev = 0;
    let diff = nums[1] - nums[0];

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === diff) {
            prev += 1;
            count += prev;
        } else {
            diff = nums[i] - nums[i - 1];
            prev = 0;
        }
    }

    return count;
};