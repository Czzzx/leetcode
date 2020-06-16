/**
 * @param {number[]} A
 * @return {boolean}
 * ------------------------------
 * 给定一个整数数组 A
 * 只有我们可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。
 */
var canThreePartsEqualSum = function(A) {
  let sum = 0;
  A.forEach( v => { sum += v });
  if(sum%3 != 0) return false;
  let s = sum/3;
  let temp = 0, count = 0;
  for(let i=0; i<A.length; i++){
    temp += A[i];
    if(temp == s){
      temp = 0;
      count++;
    }
  }
  if(count >= 3){
    return true;
  }
  return false;
};
