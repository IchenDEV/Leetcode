/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let ans = [];
  function dfs(deep, charlist, ch) {
    if (deep > charlist.length - 1) {
      if (charlist.length > 0) ans.push(ch);
      return;
    }
    for (let i = 0; i < charlist[deep].length; i++) {
      dfs(deep + 1, charlist, ch + charlist[deep][i]);
    }
  }

  let charl = digits.split("").map((dit) => {
    if (dit == "2") {
      return "abc";
    }
    if (dit == "3") {
      return "def";
    }
    if (dit == "4") {
      return "ghi";
    }
    if (dit == "5") {
      return "jkl";
    }
    if (dit == "6") {
      return "mno";
    }
    if (dit == "7") {
      return "pqrs";
    }
    if (dit == "8") {
      return "tuv";
    }
    if (dit == "9") {
      return "wxyz";
    }
  });
  dfs(0, charl, "");
  return ans;
};
// @lc code=end
