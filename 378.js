/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 * -------------------------------
 * 给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第k小的元素。
 * 请注意，它是排序后的第k小元素，而不是第k个元素。
 */
var kthSmallest = function(matrix, k) {
    let arr = [];
    for(let i=0; i<matrix.length; i++){
      arr.push(...matrix[i])
    }
    arr.sort((a,b)=>a-b);
    return arr[k-1];
};

console.log(kthSmallest([
  [ 1,  5,  9],
  [10, 11, 13],
  [12, 13, 15]
],8))