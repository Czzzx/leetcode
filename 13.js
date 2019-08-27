/**
 * 通常情况下，罗马数字中小的数字在大的数字的右边。
 * 但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。
 * 同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
 * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 * 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
 */
var romanToInt = function(s) {
  let ret = 0;
  let i = 0;
  let len = s.length;
  while(i < len){
      switch(s[i]){
          case 'I':
              if(s[i+1] == 'V'){
                  ret += 4;
                  i += 2;
              }else if(s[i+1] == 'X'){
                  ret += 9;
                  i += 2;
              } else {
                  ret += 1;
                  i++;
              }
              break;
          case 'V':
              ret += 5;
              i++;
              break;
          case 'X':
              if(s[i+1] == 'L'){
                  ret += 40;
                  i += 2;
              }else if(s[i+1] == 'C'){
                  ret += 90;
                  i += 2;
              } else {
                  ret += 10;
                  i++;
              }
              break;
          case 'L':
              ret += 50;
              i++;
              break;
          case 'C':
              if(s[i+1] == 'D'){
                  ret += 400;
                  i += 2;
              }else if(s[i+1] == 'M'){
                  ret += 900;
                  i += 2;
              } else {
                  ret += 100;
                  i++;
              }
              break;
          case 'D':
              ret += 500;
              i++;
              break;
          case 'M':
              ret += 1000;
              i++;
              break;
      }
  }
  return ret;
};

let s = 'MCMXCIV';
console.log(romanToInt(s))