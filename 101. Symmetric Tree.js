/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function helper(first, second) {
    if (first === null && second === null) return true;
    else if (first === null || second === null) return false;

    if (first.val === second.val) {
      return (
        helper(first.left, second.right) && helper(first.right, second.left)
      );
    } else return false;
  }

  return helper(root.left, root.right);
};

// Runtime: 90 ms, faster than 47.23% of JavaScript online submissions for Symmetric Tree.
// Memory Usage: 40.2 MB, less than 97.44% of JavaScript online submissions for Symmetric Tree.
