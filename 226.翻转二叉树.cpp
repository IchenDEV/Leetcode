/*
 * @lc app=leetcode.cn id=226 lang=cpp
 *
 * [226] 翻转二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if(root!=NULL){
            std::swap(root->left,root->right);
            if(root->left!=NULL)
                invertTree(root->left);
            if(root->right!=NULL)
                invertTree(root->right);
        }
        return root;
    }
};
// @lc code=end

