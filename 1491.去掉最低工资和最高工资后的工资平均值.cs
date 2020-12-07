/*
 * @lc app=leetcode.cn id=1491 lang=csharp
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
public class Solution {
    public double Average(int[] salary) {
        int max=salary[0];
        int min=salary[0];
        int sum=0;
        foreach (var item in salary)
        {
            if(item>max)max=item;
            if(item<min)min=item;
            sum+=item;
        }

        return (sum-max-min)*1.0/(salary.Length-2);
    }
}
// @lc code=end

