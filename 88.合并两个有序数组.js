/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let num3 = [];
  let i = 0,
    j = 0;
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      num3.push(nums1[i]);
      i++;
    } else {
      num3.push(nums2[j]);
      j++;
    }
  }
  while (i < m) {
    num3.push(nums1[i]);
    i++;
  }
  while (j < n) {
    num3.push(nums2[j]);
    j++;
  }
  num3.forEach((n, i) => {
    nums1[i] = n;
  });
};
// @lc code=end
