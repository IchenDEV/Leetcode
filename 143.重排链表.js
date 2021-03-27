/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let len = 0;
  let p = head;
  let a = [];
  while (p !== null && p !== undefined) {
    a.push(p);
    p = p.next;
    len++;
  }
  let q = head;
  for (let i = len - 1; i >= (len + 1) / 2; i--) {
    let t = q.next;
    q.next = a[i];
    a[i].next = t;
    q = t;
  }
  console.log(len);
  if(len>0){
    if (len % 2 == 0) a[Math.floor((len + 1) / 2)].next = null;
    else a[Math.floor(len / 2)].next = null;
  }


};
// @lc code=end
