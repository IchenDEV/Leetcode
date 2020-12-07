/*
 * @lc app=leetcode.cn id=1598 lang=csharp
 *
 * [1598] 文件夹操作日志搜集器
 */

// @lc code=start
public class Solution {
    public int MinOperations(string[] logs) {
        int deep=0;
        foreach (var item in logs)
        {
            switch (item)
            {
                case "../":{
                           if(deep>0){
                      deep--;
                }
                break;
                }
         
              
                case "./":break;
                default:{
                    deep++;
                    break;
                    }

            }
        }

        return deep;
    }
}
// @lc code=end

