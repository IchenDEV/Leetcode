/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head == null) return head;
  let cache = [];
  let p = head;
  while (p != null) {
    cache.push(p);
    if (cache.length > n + 1) cache.shift();
    p = p.next;
  }
  if (cache.length < n + 1) {
    head = head.next;
  } else {
    p = cache.shift();
    p.next = p.next.next;
  }

  return head;
};
// @lc code=end
