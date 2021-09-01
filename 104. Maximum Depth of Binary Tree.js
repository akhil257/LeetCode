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
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// Runtime: 68 ms, faster than 98.88% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 41.9 MB, less than 22.30% of JavaScript online submissions for Maximum Depth of Binary Tree.
