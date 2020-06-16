/**
 * 编写一个函数，输入是一个无符号整数
 * 返回其二进制表达式中数字位数为 ‘1’ 的个数（也被称为汉明重量）
 */
var hammingWeight = function(n) {
  let str = n.toString(2);
  let weight = 0;
  for(let i=0; i<str.length; i++){
    if(str[i]==1){
      weight++;
    }
  }
  return weight;
};
