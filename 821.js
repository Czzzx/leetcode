/**
 * 给定一个字符串 S 和一个字符 C。
 * 返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。
 */
var shortestToChar = function(S, C) {
  let CIndex = [];
  let ret = [];
  for(let i=0; i<S.length; i++){
    if(S[i]==C){
      CIndex.push(i);
    }
  }
  let cpoint_curr = 0;
  for(let i=0; i<S.length; i++){
    if(i<=CIndex[cpoint_curr]){
      ret.push(CIndex[cpoint_curr]-i)
    }else{
      if(cpoint_curr==CIndex.length-1){
        ret.push(i-CIndex[cpoint_curr])
      }else{
        if(i-CIndex[cpoint_curr]<=CIndex[cpoint_curr+1]-i){
          ret.push(i-CIndex[cpoint_curr])
        }else{
          ret.push(CIndex[++cpoint_curr]-i)
        }
      }
    }
  }
  return ret;
};

let S = "aaba", C = 'b';
console.log(...shortestToChar(S,C))