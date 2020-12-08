/*
 * @lc app=leetcode.cn id=104 lang=cpp
 *
 * [104] 二叉树的最大深度
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

    int max=0;
    int deep=0;
    void search(TreeNode* node){
        if(node==nullptr)return;
        deep++;
        if(deep>max)max=deep;

        search(node->left);
        search(node->right);
        deep--;
    }
    int maxDepth(TreeNode* root) {
        search(root);
        return max;
    }
};
// @lc code=end

