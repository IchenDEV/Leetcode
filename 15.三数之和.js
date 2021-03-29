/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let n = nums.length;
  let ans = new Set();
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] > 0) {
          break;
        }
        if (nums[i] + nums[j] + nums[k] == 0)
          ans.add([nums[i], nums[j], nums[k]]);
        while (k < n - 1 && nums[k] == nums[k + 1]) k++;
      }
      while (j < n - 1 && nums[j] == nums[j + 1]) j++;
    }
    while (i < n - 1 && nums[i] == nums[i + 1]) i++;
  }
  return Array.from(ans);
};
// @lc code=end
