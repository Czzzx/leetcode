/**
 * 给定数组 A，我们可以对其进行煎饼翻转:
 * 我们选择一些正整数 k <= A.length，然后反转 A 的前 k 个元素的顺序。
 * 我们要执行零次或多次煎饼翻转（按顺序一次接一次地进行）以完成对数组 A 的排序。
 * 返回能使 A 排序的煎饼翻转操作所对应的 k 值序列。
 * 任何将数组排序且翻转次数在 10 * A.length 范围内的有效答案都将被判断为正确。
 */

function reverse(start,end, A){
  while(start<end){
    let temp = A[start];
    A[start] = A[end];
    A[end] = temp;
    start++;
    end--;
  }
  return A;
}

var pancakeSort = function(A) {
  let ret = [];
  while(A.length > 1){
    let max = A.length;
    let index = A.indexOf(max);
    if(index != max-1 && index != 0){
      ret.push(index+1);
      A = reverse(0, index, A)
    }else if( index == 0 ){
      ret.push(max);
      A = reverse(0, max-1, A);
      A = A.slice(0, max-1)
    }else {
      A = A.slice(0, max-1)
    }
  }
  return ret;
};

let A = [1,2,3]
console.log(pancakeSort(A))