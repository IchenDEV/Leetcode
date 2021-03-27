/*
 * @lc app=leetcode.cn id=456 lang=javascript
 *
 * [456] 132模式
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  nums = nums.reverse();
  let minn = nums[0];
  let maxn = -Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < nums.length; i++) {
    if (maxn == -Number.MAX_SAFE_INTEGER) {
      if (nums[i] > minn) maxn = nums[i];
      else minn = nums[i];
    } else {
      if (nums[i] >= maxn && nums[i] > minn) {
        maxn = nums[i];
      } else if (nums[i] >= minn) {
        minn = nums[i];
      } else {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end
