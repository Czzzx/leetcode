/** 
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 */
var addStrings = function(num1, num2) {
  let sum = '';
  let len1 = num1.length;
  let len2 = num2.length;
  let add = 0;
  if(len2<len1){
    let tempArr = num2;
    num2 = num1;
    num1 = tempArr;
    len1 = num1.length;
    len2 = num2.length;
  }
  for(let i=len1-1; i>=0; i--){
    let b1 = +num1[i];
    let b2 = +num2[i+len2-len1];
    if(b1 + b2 + add < 10){
      sum = b1 + b2 + add + sum;
      add = 0;
    }else{
      sum = b1 + b2 + add - 10 + sum;
      add = 1;
    }
  }
  if(add==1){
    if(len2-len1==0){
      sum = 1 + sum;
    }else{
      let sub = num2.substring(0,len2-len1);
      for(let i=sub.length-1; i>=0; i--){
        let b = +sub[i];
        if(b + 1 == 10 && i!=0){
          sum = '0' + sum;
        }else if(b + 1 == 10 && i==0){
          sum = '10' + sum;
        }else{
          sum = b + 1 + sum;
          let rest = sub.substring(0,i);
          sum = rest + sum;
          break;
        }
      }
    }
  }else{
    if(len2-len1>0){
      let sub = num2.substring(0,len2-len1);
      sum = sub + sum;
    }
  }
  return sum;
};

let a = '98';
let b = '9';
console.log(addStrings(a,b))
