/*
 * @lc app=leetcode.cn id=876 lang=csharp
 *
 * [876] 链表的中间结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode MiddleNode(ListNode head) {
            int len=0;
            ListNode p=head;
            while (p!=null)
            {
                p=p.next;
                len++;
            }
            p=head;
            for(int i=0;i<(len)/2;i++){
                p=p.next;
            }
            return p;
    }
}
// @lc code=end

