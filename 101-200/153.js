/**
 * @param {number[]} nums
 * @return {number}
 * ---------------------------------
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )
 * 请找出其中最小的元素
 */
var findMin = function(nums) {
  return Math.min(...nums)
};