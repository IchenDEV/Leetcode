/*
 * @lc app=leetcode.cn id=1041 lang=csharp
 *
 * [1041] 困于环中的机器人
 */

// @lc code=start
public class Solution {
    public bool IsRobotBounded(string instructions) {
        int[,] order=new int[4,2]{{0,1},{1,0},{0,-1},{-1,0}};
        int ord=0;
        int x=0,y=0;
        foreach (var item in instructions)
        {
            switch (item)
            {
                case 'R': 
                ord++;
                if(ord>=4){
                    ord=0;
                }
                   
                    break;
                case 'L':
                    ord--;
                    if(ord<0){
                        ord=3;
                    }
                    break;
                
                default:
x+=order[ord%4,0];
                    y+=order[ord%4,1];
                
                    break;
            }
        }

        return ord!=0 ||x==0&&y==0;        
    }
}
// @lc code=end

