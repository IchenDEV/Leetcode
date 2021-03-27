/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let m = new Map();
  nums.forEach((mc) => {
    if (m.has(mc)) m.set(mc, m.get(mc) + 1);
    else m.set(mc, 1);
  });
  var arrayObj = Array.from(m);
  arrayObj.sort((a, b) => b[1] - a[1]);
  console.log(arrayObj);
  let ans = [];
  for (let i = 0; i < k; i++) {
    ans[i] = arrayObj[i][0];
  }
  return ans;
};
// @lc code=end
