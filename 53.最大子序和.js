/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
let all=0;
let max=nums[0];
nums.forEach((val)=>{
all += val;
if(all>max)max=all;
if(all<0)all=0;
})
return max;
};
// @lc code=end

