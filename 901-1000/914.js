/**
 * 给定一副牌，每张牌上都写着一个整数。
 * 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
 * 每组都有 X 张牌。
 * 组内所有的牌上都写着相同的整数。
 * 仅当你可选的 X >= 2 时返回 true。
 */

var hasGroupsSizeX = function(deck) {
  let deckMap = new Map();
  for(let i=0; i<deck.length; i++){
      if(!deckMap.has(deck[i])){
          deckMap.set(deck[i],1);
      } else {
          deckMap.set(deck[i],deckMap.get(deck[i])+1);
      }
  }
  let v = Array.from(deckMap.values());
  let min = Math.min(...v);
  if(min<2) return false;
  for(let i=0; i<v.length; i++){
    let a = min;
    let b = v[i];
    while(b % a != 0){
      let c = b % a;
      b = a;
      a = c;
    }
    if(b<2) return false;
  } 
  return true;
};