/**
 * @param {number[]} nums
 * @return {number[][]}
 * -------------------------------------
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 */
var threeSum = function(nums) {
  if(nums.length < 3) return [];
  nums.sort((a,b)=>a-b); // ascend
  let ret = [], hash= {}, temp = [];
  for(let i=0; i<nums.length-2; i++){
    let index = i+1, right = nums.length-1;
    while(index < right){
      let sum = nums[i]+nums[right]+nums[index];
      if(sum > 0){
        right--;
      } else if(sum < 0){
        index++;
      } else {
        temp.push(nums[i], nums[index], nums[right]);
        if(!hash[temp]){
          hash[temp] = true;
          ret.push(temp);
        }
        temp = [];
        index = i+1;
        for(let j = right; j>index; j--){
          right = j-1;
          if(nums[j] != nums[j-1]){
            break;
          }
        }
      }
    }
  }
  return ret;
};
