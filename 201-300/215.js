/** kth Largest Element in an Array
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * ------------------------------
 * 在未排序的数组中找到第 k 个最大的元素。
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素
 */
var findKthLargest = function(nums, k) {
  let midIndex = Math.floor(nums.length/2);
  let mid = nums.splice(midIndex,1);
  let left = [], right = [];
  for(let num of nums){
    if(num >= mid){
      right.push(num);
    }else{
      left.push(num);
    }
  }
  if(right.length == k-1){
    return mid[0];
  }else if(right.length > k-1){
    return findKthLargest(right, k);
  }else {
    return findKthLargest(left, k-right.length-1);
  }
};
