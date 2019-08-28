/**
 * @param {number[]} nums
 * @return {number[][]}
 * ---------------------------------
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。
 */
var subsets = function(nums) {
  let ret = [[]];
  for(let num of nums){
    let temp = [];
    for(let r of ret){
      temp.push(r.concat(num));
    }
    ret = ret.concat(temp)
  }
  return ret;
};

console.log(...subsets([1,2,3]))

/**
 * 规律：
 * 初始[]
 * 1加入进去[][1]
 * 2加入进去[][1][2][1,2]
 * 3加入进去[][1][2][1,2][3][1,3][2,3][1,2,3]
 * ......
 * 相当于就是在之前答案基础上concat新数字
 */