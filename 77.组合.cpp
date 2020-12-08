/*
 * @lc app=leetcode.cn id=77 lang=cpp
 *
 * [77] 组合
 */

// @lc code=start
class Solution {
public:

    int count=0;
    int N,K;
    vector<vector<int>> ans;
    vector<int> current;
    void dfs(int pos){

        current.push_back(pos);
        count++;
        for(int i=pos+1;i<=N&&count<K;i++){
            dfs(i);
        }

        if(count==K){
           ans.push_back(current);
        }

        count--;
        current.pop_back();
    }
    vector<vector<int>> combine(int n, int k) {
        N=n;K=k;
        for(int i=1;i<=n;i++){
            dfs(i);
        }
        return ans;
    }
};
// @lc code=end

