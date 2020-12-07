/*
 * @lc app=leetcode.cn id=912 lang=cpp
 *
 * [912] 排序数组
 */

// @lc code=start
#include<algorithm>
class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
       std::sort(nums.begin(),nums.end());
        return nums;
    }
};
// @lc code=end

