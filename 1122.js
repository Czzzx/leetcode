/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 * ----------------------------
 * 给你两个数组，arr1 和 arr2，
 * arr2 中的元素各不相同
 * arr2 中的每个元素都出现在 arr1 中
 * 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。
 */
var relativeSortArray = function(arr1, arr2) {
  let ret = [];
  for(let i=0; i<arr2.length; i++){
    let index = arr1.indexOf(arr2[i]);
    while(index != -1){
      ret.push(...arr1.splice(index, 1));
      index = arr1.indexOf(arr2[i]);
    }
  }
  return ret.concat(arr1.sort((a,b)=>a-b))
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))