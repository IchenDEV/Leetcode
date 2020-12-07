/*
 * @lc app=leetcode.cn id=874 lang=csharp
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
public class Solution {
    public int RobotSim(int[] commands, int[][] obstacles) {
        HashSet<Tuple<int,int>> set = new HashSet<Tuple<int,int>>();
        foreach (var item in obstacles)
        {
            Tuple<int,int> temp = new Tuple<int,int>(item[0],item[1]);
            if(!set.Contains(temp))
                set.Add(temp);
        }



        int x=0;
        int y=0;
        int[,] order=new int[4,2]{{0,1},{1,0},{0,-1},{-1,0}};
        int ord=0;
        int max=0;
        foreach (var item in commands)
        {
            switch (item)
            {
                case -1:
                    ord++;
                    break;
                case -2:
                    ord--;
                    if(ord<0){
                        ord=3;
                    }
                    break;
                
                default:
                    for(int i=0;i<item;i++){
                        Tuple<int,int> temp = new Tuple<int,int>(x+order[ord%4,0],y+order[ord%4,1]);
                                    if(!set.Contains(temp)){
                                        x+=order[ord%4,0];
                                        y+=order[ord%4,1];
                                        if(x*x+y*y>max)
                                        max=x*x+y*y;
                                    }
                     
                    }
                    break;
            }
        }

        return max;        
    }
}
// @lc code=end

