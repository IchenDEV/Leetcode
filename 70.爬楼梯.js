/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStArr=[0,1,2];

var climbStairs = function(n) {
    for(let i=3;i<=n;i++)
        climbStArr[i]=climbStArr[i-1]+climbStArr[i-2];
    return climbStArr[n]
};
// @lc code=end

