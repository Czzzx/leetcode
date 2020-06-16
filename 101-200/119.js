/**
 * @param {number} rowIndex
 * @return {number[]}
 * ------------------------------
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 */
function row(preRow){
  let arr = [1];
  for(let i=0; i<preRow.length-1; i++){
    arr.push(preRow[i]+preRow[i+1])
  }
  arr.push(1);
  return arr;
}
var getRow = function(rowIndex) {
  if(rowIndex == 0){
    return [1];
  }else if(rowIndex == 1){
    return [1, 1];
  }else {
    let pre = [1,1]
    for(let i=2; i<=rowIndex; i++){
      pre = row(pre);
    }
    return pre;
  }
};
