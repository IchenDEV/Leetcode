/*
 * @lc app=leetcode.cn id=111 lang=cpp
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    
    int min=100000;
    void search(TreeNode* node,int deep){
        if(node->left!=nullptr)
            search(node->left,deep+1);
        if(node->right!=nullptr)
            search(node->right,deep+1);
        if(node->left==nullptr&&node->right==nullptr){
            if(min>deep)min=deep;
        }
    }
    int minDepth(TreeNode* root) {
        if(root==nullptr) return 0;
        search(root,1);
        return min;
    }
};
// @lc code=end

