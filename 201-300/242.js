/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * -------------------------------
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 */
var isAnagram = function(s, t) {
  let arrS = s.split('');
  let arrT = t.split('');
  arrS.sort();
  arrT.sort();
  return arrS.join('') === arrT.join('');
};
