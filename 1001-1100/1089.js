/**
 * 给你一个长度固定的整数数组 arr，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。
 * 注意：请不要在超过该数组长度的位置写入元素。
 * 要求：请对输入的数组 就地 进行上述修改，不要从函数返回任何东西。
 */
var duplicateZeros = function(arr) {
    let i=0;
    while(i<arr.length){
      if(arr[i]==0){
        arr.splice(i,0,0);
        arr.pop();
        i++;
      }
      i++;
    }
    return arr;
};

let arr = [1,0,2,2,0];
console.log(...duplicateZeros(arr))