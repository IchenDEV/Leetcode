/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
if(strs.length<1) return "";
let sub="";
let minLen=strs[0].length;
for(let str of strs)
    minLen = str.length < minLen ? str.length: minLen;
for (let i=0;i<minLen;i++){
    for(let str of strs)
        if(str[i]!==strs[0][i]){
            return sub;
        }

    sub+=strs[0][i];
}

return sub;
};
// @lc code=end

