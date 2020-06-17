/**
 * 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
 * 请返回 nums 的动态和。
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let ret = []
    let sum = 0

    nums.forEach(v => {
        sum += v
        ret.push(sum)
    })

    return ret
};