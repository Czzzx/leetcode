/**
 * 给出一个整数数组 A 和一个查询数组 queries。
 * 对于第 i 次查询有:
 * val = queries[i][0]
 * index = queries[i][1]
 * 我们会把 val 加到 A[index] 上。
 * 然后，第 i 次查询的答案是 A 中偶数值的和。
 * （此处给定的 index = queries[i][1] 是从 0 开始的索引，每次查询都会永久修改数组 A。）
 * 返回所有查询的答案。
 * 你的答案应当以数组 answer 给出，answer[i] 为第 i 次查询的答案。
 */
var sumEvenAfterQueries = function(A, queries) {
  let initSum = 0;
  for(let k=0; k<A.length; k++){
    if(A[k]%2==0)
      initSum += A[k];
  }
  let answer = [];
  let val = 0;
  let index = 0;
  let sum = initSum;
  for(let i=0; i<queries.length; i++){
    val = queries[i][0];
    index = queries[i][1];
    if(A[index]%2==0 && val%2==0){
      sum += val;
    }else if(A[index]%2!=0 && val%2!=0){
      sum += (A[index]+val);
    }else if(A[index]%2==0 && val%2!=0){
      sum -= A[index];
    }
    A[index] += val;
    answer.push(sum);
  }
  return answer
};

var A = [1,2,3,4];
var queries = [[1,0],[-3,1],[-4,0],[2,3]];
console.log(sumEvenAfterQueries(A,queries))
