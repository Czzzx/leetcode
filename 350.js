/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * -----------------------------
 * 给定两个数组，编写一个函数来计算它们的交集
 */
var intersect = function(nums1, nums2) {
  let ret = [];
  for(let i=0; i<nums1.length; i++){
    let index = nums2.indexOf(nums1[i]);
    if(index != -1){
      ret.push(...nums2.splice(index,1))
    }
    if(nums2.length <= 0) break;
  }
  return ret;
};

console.log(intersect([4,9,5], [9,4,9,8,4]))