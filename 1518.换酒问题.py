#
# @lc app=leetcode.cn id=1518 lang=python3
#
# [1518] 换酒问题
#

# @lc code=start
class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        return (numBottles - numExchange) // (numExchange - 1) + 1 + numBottles if numBottles >= numExchange else numBottles

# @lc code=end

