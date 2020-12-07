/*
 * @lc app=leetcode.cn id=203 lang=cpp
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {

        ListNode *f;
        while(head!=NULL&&head->val==val){
            f=head;
            head=head->next;
            delete (f);
        }
        ListNode *p =head;
        while (p!=NULL&&p->next!=NULL)
        {
            while(p->next!=NULL&&p->next->val==val){
                f=p->next;
                p->next=p->next->next;
                 delete (f);
            }
            p=p->next;
        }

        return head;
        
    }
};
// @lc code=end

