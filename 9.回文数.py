#
# @lc app=leetcode.cn id=9 lang=python3
#
# [9] 回文数
#

# @lc code=start
class Solution:
    def isPalindrome(self, x: int) -> bool:
        s=str(x)
        sx=s[::-1]
        if(sx==s):
            return True
        return False
# @lc code=end

