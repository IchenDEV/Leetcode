/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let len=s.length/2;
    for(var i=0;i<len;i++){
        s= s.replace("[]",'');
        s= s.replace("()",'');
        s= s.replace("{}",'');
    }
    return s.length>0 ?false:true;

};
// @lc code=end

