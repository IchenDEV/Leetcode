/*
 * @lc app=leetcode.cn id=231 lang=cpp
 *
 * [231] 2的幂
 */

// @lc code=start
#include<math.h>
class Solution {
public:
    bool isPowerOfTwo(int n) {
        long long x=n;
        if(n == 0)
            return false;
        return (x & (-x)) == x;
    }
};
// @lc code=end

