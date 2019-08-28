/**
 * @param {number[]} nums
 * @return {string}
 * ----------------------------
 * 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数
 */
var largestNumber = function(nums) {
  nums = nums.sort((a,b)=>{
    let astr = a.toString()+b.toString();
    let bstr = b.toString()+a.toString();
    return bstr - astr;
  })
  let i=0;
  while(i<nums.length-1){
    if(nums[i]==0){
      nums.splice(0,1);
    }else{
      break;
    }
  }
  return nums.join('')
};

console.log(largestNumber([0,0]))