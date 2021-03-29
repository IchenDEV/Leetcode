/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let seenOnce = 0,
    seenTwice = 0;

  for (let num of nums) {
    // first appearence:
    // add num to seen_once
    // don't add to seen_twice because of presence in seen_once

    // second appearance:
    // remove num from seen_once
    // add num to seen_twice

    // third appearance:
    // don't add to seen_once because of presence in seen_twice
    // remove num from seen_twice
    seenOnce = ~seenTwice & (seenOnce ^ num);
    seenTwice = ~seenOnce & (seenTwice ^ num);
  }

  return seenOnce;
};
// @lc code=end
