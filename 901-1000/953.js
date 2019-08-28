/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 * -----------------------------
 * 某种外星语也使用英文小写字母，但可能顺序 order 不同。字母表的顺序（order）是一些小写字母的排列。
 * 给定一组用外星语书写的单词 words，以及其字母表的顺序 order，只有当给定的单词在这种外星语中按字典序排列时，返回 true；否则，返回 false。
 */
var isAlienSorted = function(words, order) {
  let flag = true;
  for(let i=0; i<words.length-1; i++){
    let j = 0;
    while(j<words[i].length){
      if(words[i+1].length-1 >= j){
        let pre = order.indexOf(words[i][j]);
        let lat = order.indexOf(words[i+1][j]);
        if(pre > lat){
          flag = false;
          break;
        } else if(pre < lat){
          break;
        } else {
          j++;
        }
      }else{
        flag = false;
        break;
      }
    }
    if(!flag) break;
  }
  return flag;
};

console.log(isAlienSorted(["hello","leetcode"],"hlabcdefgijkmnopqrstuvwxyz"))