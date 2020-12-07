/*
 * @lc app=leetcode.cn id=1496 lang=csharp
 *
 * [1496] 判断路径是否相交
 */

// @lc code=start
public class Solution {
    public bool IsPathCrossing(string path) {
     HashSet<Tuple<int,int>> set = new HashSet<Tuple<int,int>>();
        int e=0;
        int n=0;
        set.Add(new Tuple<int,int>(e,n));

        foreach(char c in path)
        {
            switch(c)
            {
                case 'E':++e;break;
                case 'W':--e;break;
                case 'N':++n;break;
                case 'S':--n;break;
            }
            Tuple<int,int> temp = new Tuple<int,int>(e,n);
            if(set.Contains(temp))
                return true;
            else
                set.Add(temp);
        }
        return false;
    }
}
// @lc code=end

