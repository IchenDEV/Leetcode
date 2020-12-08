/*
 * @lc app=leetcode.cn id=47 lang=cpp
 *
 * [47] 全排列 II
 */

// @lc code=start
class Solution {
public:
    set<vector<int>>  result;
    vector<int> sec;
    vector<int> current;
    map<int,bool> book;
    void dfs(int step){
        if(step==sec.size()){
            result.insert(current);
        }

        for(int i=0;i<sec.size();i++){
            if(!book[i]){
                book[i]=true;
                current.push_back(sec[i]);
                dfs(step+1);
                current.pop_back();
                book[i]=false;
            }
            
        }
    }
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        sec=nums;
        dfs(0);
        vector<vector<int>> ans;
        for(set<vector<int>>::iterator it=result.begin();it!=result.end();it++){
            ans.push_back(*it);
        }
        return ans;
    }
};
// @lc code=end

