/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 * --------------------------------
 * 我们来定义一个函数 f(s)，其中传入参数 s 是一个非空字符串；该函数的功能是统计 s  中（按字典序比较）最小字母的出现频次。
 * 例如，若 s = "dcce"，那么 f(s) = 2，因为最小的字母是 "c"，它出现了 2 次。
 * 现在，给你两个字符串数组待查表 queries 和词汇表 words，请你返回一个整数数组 answer 作为答案
 * 其中每个 answer[i] 是满足 f(queries[i]) < f(W) 的词的数目，W 是词汇表 words 中的词。
 */
function calTimes(arr){
  let count = 1;
  for(let i=0; i<arr.length-1; i++){
    if(arr[i]==arr[i+1]){
      count++;
    }else{
      break;
    }
  }
  return count;
}
var numSmallerByFrequency = function(queries, words) {
  let queriesTimes = [];
  let wordsTimes = [];
  for(let i=0; i<queries.length; i++){
    let arr = queries[i].split('');
    arr.sort();
    queriesTimes.push(calTimes(arr))
  }
  for(let i=0; i<words.length; i++){
    let arr = words[i].split('');
    arr.sort();
    wordsTimes.push(calTimes(arr))
  }
  let ret = [];
  for(let i=0; i<queriesTimes.length; i++){
    let count = 0;
    for(let j=0; j<wordsTimes.length; j++){
      if(queriesTimes[i]<wordsTimes[j]){
        count++;
      }
    }
    ret.push(count)
  }
  return ret;
};
