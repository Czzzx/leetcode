/**
 * @param {string} s
 * @return {number}
 * -----------------------------
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。
 * 如果不存在，则返回 -1。
 */
var firstUniqChar = function(s) {
  let existed = [];
  for(let i=0; i<s.length; i++){
    if(s.lastIndexOf(s[i]) == i){
      if(!existed.includes(s[i])){
        return i;
      }
    } else {
      existed.push(s[i])
    }
  }
  return -1;
};
