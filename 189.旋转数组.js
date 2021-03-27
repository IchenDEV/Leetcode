/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let n = nums.length;
  k %= n;
  let l1 = nums.filter((v, i) => i < n - k);
  let l2 = nums.filter((v, i) => i >= n - k);
  let l3 = l2.concat(l1);
  l3.forEach((v, i) => {
    nums[i] = v;
  });
};
// @lc code=end
