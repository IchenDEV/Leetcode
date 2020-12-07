#
# @lc app=leetcode.cn id=191 lang=python3
#
# [191] 位1的个数
#

# @lc code=start
class Solution:
    def hammingWeight(self, n: int) -> int:
        x=bin(n)
        s=0
        for i in x:
            if(i=='1'):
                s=s+1
        return s
        
# @lc code=end

