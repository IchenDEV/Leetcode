/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
let v1=s.split("").sort()
let v2=t.split("").sort()
console.log(v1.join())
console.log(v2.join())

for(var i=0;i<v1.length;i++){
    if(v1[i]!=v2[i]){
        return v2[i];
    }
}
return v2[v2.length-1];
};
// @lc code=end

