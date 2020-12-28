/*
 * @lc app=leetcode.cn id=344 lang=cpp
 *
 * [344] 反转字符串
 */

// @lc code=start
class Solution {
public:
    void reverseString(vector<char>& s) {
        int len=s.size();
        for(int i=0;i<len/2;i++){
            int tmp=s[i];
            s[i]=s[len-i-1];
            s[len-i-1]=tmp;
        }
    }
};
// @lc code=end

