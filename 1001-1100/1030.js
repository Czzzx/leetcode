/**
* 给出 R 行 C 列的矩阵，其中的单元格的整数坐标为 (r, c)，满足 0 <= r < R 且 0 <= c < C。
* 另外，我们在该矩阵中给出了一个坐标为 (r0, c0) 的单元格。
* 返回矩阵中的所有单元格的坐标，并按到 (r0, c0) 的距离从最小到最大的顺序排
* 其中，两单元格(r1, c1) 和 (r2, c2) 之间的距离是曼哈顿距离，|r1 - r2| + |c1 - c2|。
 */

var allCellsDistOrder = function(R, C, r0, c0) {
  let arr = [];
  for(let i=0; i<R; i++){
    for(let j=0; j<C; j++){
      let mhd = Math.abs(r0-i)+Math.abs(c0-j);
      arr.push({mhd: mhd, point: [i,j]})
    }
  }
  arr.sort((a,b) => a.mhd-b.mhd);
  let ret = [];
  for(let k=0; k<arr.length; k++){
    ret.push(arr[k].point);
  }
  return ret;
};
