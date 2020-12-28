/*
 * @lc app=leetcode.cn id=1502 lang=javascript
 *
 * [1502] 判断能否形成等差数列
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr = arr.sort((a,b)=>{return a - b;});
  if (arr.length < 2) return false;
  const det = arr[1] - arr[0];
  for (let i = 1; i < arr.length - 1; i++)
    if (arr[i + 1] - arr[i] !== det) return false;

  return true;
};
// @lc code=end
