#
# @lc app=leetcode.cn id=4 lang=python3
#
# [4] 寻找两个正序数组的中位数
#

# @lc code=start
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        nums1.append(nums2)
        size = len(nums1)
        if(size%2==0):
            return (nums1[size/2-1]+nums1[size/2])/2.0
        return nums1[size/2]
# @lc code=end

