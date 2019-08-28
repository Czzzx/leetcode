/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串
 * 判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 */
var isValid = function(s) {
  let left = [];
  let flag = true;
  for(let i=0; i<s.length; i++){
    switch(s[i]){
      case '(':
      case '[':
      case '{':
        left.push(s[i]);
        continue;
      case ')':
        if(left.pop()!=='('){
          flag = false;
          break;
        }
        continue;
      case ']':
        if(left.pop()!=='[') {
          flag = false;
          break;
        }
        continue;
      case '}':
        if(left.pop()!=='{') {
          flag = false;
          break;
        }
        continue;
    }
  }
  if(left.length)
      return false;
  return flag;
};