/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
function reverseWords(s: string): string {
    return s.split(' ').reverse().filter((s)=>{return s!==''}).join(' ');

};
// @lc code=end

