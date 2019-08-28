/**
 * 给定二叉搜索树的根结点 root，返回 L 和 R（含）之间的所有结点的值的和。
 * 二叉搜索树保证具有唯一的值。
 */
var rangeSumBST = function(root, L, R) {
  var sum = 0;
  function BST(root, L, R) {
    if(root){
      if(root.val>=L && root.val<=R){
        sum+=root.val;
        BST(root.left,L,R);
        BST(root.right,L,R);
      }
      else if(root.val<L)
        BST(root.right,L,R);
      else if(root.val>R)
        BST(root.left,L,R);
    }
    return sum;
  };
  BST(root, L, R);
  return sum
};