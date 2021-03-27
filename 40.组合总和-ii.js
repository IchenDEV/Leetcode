/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let select = [];
  let s = new Set();

  function warp(candidates, target, ind) {
    if (target === 0) {
      let ans = Array.from(select);
      s.add(ans.sort((a, b) => a - b));
    }
    if (target < 0) {
      return;
    }
    for (let i = ind; i < candidates.length; i++) {
      let k = candidates[i];
      select.push(k);
      warp(candidates, target - k, i + 1);
      select.pop();
    }
  }
  warp(candidates, target, 0);

  return Array.from(s);
};
// @lc code=end
