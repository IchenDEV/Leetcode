/*
 * @lc app=leetcode.cn id=46 lang=cpp
 *
 * [46] 全排列
 */

// @lc code=start
#include<map>
class Solution {
public:
    vector<vector<int>>  result;
    vector<int> sec;
    vector<int> current;
    map<int,bool> book;
    void dfs(int step){
        if(step==sec.size()){
            result.push_back(current);
        }

        for(int i=0;i<sec.size();i++){
            if(!book[sec[i]]){
                book[sec[i]]=true;
                current.push_back(sec[i]);
                dfs(step+1);
                current.pop_back();
                book[sec[i]]=false;
            }
            
        }
    }
    vector<vector<int>> permute(vector<int>& nums) {
        sec=nums;
        dfs(0);
        return result;
    }
};
// @lc code=end

