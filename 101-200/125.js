/**
 * @param {string} s
 * @return {boolean}
 * ----------------------
 * 给定一个字符串，验证它是否是回文串
 * 只考虑字母和数字字符，可以忽略字母的大小写。
 */
var isPalindrome = function(s) {
  if(s.length<=0) return true;
  s = s.toLowerCase();
  let left = 0, right = s.length-1;
  while(left < right){
    if(s[left].match(/[0-9a-zA-Z]/) && s[right].match(/[0-9a-zA-Z]/)){
      if(s[left] != s[right]) return false;
      left++;
      right--;
    }else if(!s[left].match(/[0-9a-zA-Z]/)){
      left++;
    }else{
      right--;
    }
  }
  return true;
};
