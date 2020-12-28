/*
 * @lc app=leetcode.cn id=168 lang=cpp
 *
 * [168] Excel表列名称
 */

// @lc code=start
class Solution {
public:
    string convertToTitle(int n) {
        string res="";

        do{
                    n--;
            char c=((n%26)+'A');
        res= c+ res;
        n/=26;
        }while(n>0);


        return res;
    }
};
// @lc code=end

