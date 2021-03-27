/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let mp = new Map();
  for (let i = 0; i < s.length; i++) {
    if (max == 0) max = 1;
    mp.set(s[i], i);
    for (let j = i + 1; j < s.length; j++) {
      if (!mp.has(s[j])) {
        mp.set(s[j], j);
      } else {
        i = mp.get(s[j]);
        break;
      }
      if (mp.size > max) max = mp.size;
    }
    mp.clear();
  }
  return max;
};
// @lc code=end
