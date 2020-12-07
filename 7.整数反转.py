#
# @lc app=leetcode.cn id=7 lang=python3
#
# [7] 整数反转
#

# @lc code=start
class Solution:
    def reverse(self, x: int) -> int:
        t=abs(x)
        t=str(t)[::-1]
        if(x<0):
            t =-int(t)
        else:
            t = int(t)
        if t<-pow(2,31) or t > pow(2,31)-1:
            return 0
        return t
# @lc code=end

