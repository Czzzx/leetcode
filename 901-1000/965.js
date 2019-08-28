/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * ------------------------
 * 如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。
 * 只有给定的树是单值二叉树时，才返回 true；否则返回 false。
 */

var isUnivalTree = function(root) {
  let val = root.val;
  return comp(root, val);
  function comp(root,val){
      if(!root){
          return true;
      }
      if(root && root.val != val){
          return false;
      }
      return comp(root.left,val) && comp(root.right, val);;
  }
};