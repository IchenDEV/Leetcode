/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {
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
      warp(candidates, target - k, i);
      select.pop();
    }
  }
  warp(candidates, target, 0);
  return Array.from(s);
};
// @lc code=end
