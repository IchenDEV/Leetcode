/*
 * @lc app=leetcode.cn id=812 lang=cpp
 *
 * [812] 最大三角形面积
 */

// @lc code=start
class Solution {
public:
    double largestTriangleArea(vector<vector<int>>& points) {
        double ans=0;
        for(int i=0;i<points.size()-2;i++){
            for(int j=i+1;j<points.size()-1;j++){
                double a=sqrt(pow(points[i][0]-points[j][0],2)+pow(points[i][1]-points[j][1],2));
                for(int k=j+1;k<points.size();k++){
                    double b=sqrt(pow(points[i][0]-points[k][0],2)+pow(points[i][1]-points[k][1],2));
                    double c=sqrt(pow(points[k][0]-points[j][0],2)+pow(points[k][1]-points[j][1],2));
                    ans=max(ans,sqrt(abs((a+b+c)*(a+b-c)*(b+c-a)*(a+c-b)))/4);
                }
            }
        }
        return ans;
    }
};
// @lc code=end

