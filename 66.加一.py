#
# @lc app=leetcode.cn id=66 lang=python3
#
# [66] 加一
#

# @lc code=start
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        sx=str(int("".join(map(lambda x:str(x), digits)))+1)
        return [int(x) for x in sx]

# @lc code=end

