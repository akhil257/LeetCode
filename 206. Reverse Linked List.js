/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let cur = head;

  while (cur) {
    let next = cur.next;

    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};

// Runtime: 80 ms, faster than 53.57% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 40.5 MB, less than 77.23% of JavaScript online submissions for Reverse Linked List.
