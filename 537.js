/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * --------------------------
 * 给定两个表示复数的字符串。
 * 返回表示它们乘积的字符串。注意，根据定义 i^2 = -1 。
 */
var complexNumberMultiply = function(a, b) {
  let arrA = a.split('+');
  let arrB = b.split('+');
  arrA[1] = parseInt(arrA[1]);
  arrB[1] = parseInt(arrB[1]);
  let re = (arrA[0]*arrB[0]-arrA[1]*arrB[1])+'+';
  let im = (arrA[0]*arrB[1]+arrA[1]*arrB[0])+'i';
  return re + im;
};

console.log(complexNumberMultiply('1+1i','1+1i'))