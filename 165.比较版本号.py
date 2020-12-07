#
# @lc app=leetcode.cn id=165 lang=python3
#
# [165] 比较版本号
#

# @lc code=start
class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        v1=version1.split('.')
        v2=version2.split('.')

        mx=max(len(v1),len(v2))
        mi=min(len(v1),len(v2))
        if(len(v1)>len(v2)):
            for i in range(mx-mi):
                v2.append('0')
        elif(len(v1)<len(v2)):
            for i in range(mx-mi):
                v1.append('0')

        for i in range(mx):
            if int(v1[i])>int(v2[i]):
                return 1
            elif int(v1[i])<int(v2[i]):
                return -1
        return 0
        
# @lc code=end

