/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;

  let head = new TreeNode(nums[Math.floor(nums.length / 2)]);
  if (nums.length === 1) return head;

  head.left = sortedArrayToBST(nums.slice(0, Math.floor(nums.length / 2)));
  head.right = sortedArrayToBST(nums.slice(Math.floor(nums.length / 2) + 1));

  return head;
};

// Runtime: 99 ms, faster than 19.11% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
// Memory Usage: 40.8 MB, less than 98.19% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
