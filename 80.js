/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 */
var removeDuplicates = function(nums) {
  let count = 1;
  let i = 0;
  while(i < nums.length-1){
      if(nums[i]==nums[i+1]){
          count += 1;
          if(count > 2){
              nums.splice(i,1);
          } else {
            i++;
          }
      } else {
          count = 1;
          i++;
      }
  }
  return nums.length
};

let nums = [1,1,1,2,2,0,0,0,0,3,3];
console.log(removeDuplicates(nums))