/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * ---------------------------
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 输入为非空字符串且只包含数字 1 和 0
 */
var addBinary = function(a, b) {
  let aIndex = a.length-1;
  let bIndex = b.length-1;
  if(aIndex >= bIndex){
    for(let i=0; i<aIndex-bIndex; i++){
      b = '0' + b;
    }
  } else {
    for(let i=0; i<bIndex-aIndex; i++){
      a = '0' + a;
    }
  }
  let carry = 0;
  let ret = '';
  for(let i=a.length-1; i>=0; i--){
    if(a[i] == '1' && b[i] == '1'){
      ret = carry + ret;
      carry = 1;
    }else if(a[i] == '0' && b[i] == '0'){
      ret = carry + ret;
      carry = 0;
    }else {
      if(carry == 0){
        ret = 1 + ret;
      } else {
        ret = 0 + ret;
      }
    }
  }
  if(carry==1){
    ret = 1 + ret;
  }
  return ret;
};
