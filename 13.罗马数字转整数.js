/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

   dic={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000,
        'a':4,'b':9,'c':40,'d':90,'e':400,'f':900}

   s= s.replace("IV","a");
   s= s.replace("IX","b");
   s= s.replace("XL","c");
   s= s.replace("XC","d");
   s= s.replace("CD","e");
   s= s.replace("CM","f");

   let total=0;
   for(let i of s)
       total+=dic[i];
   return total;
};
// @lc code=end

