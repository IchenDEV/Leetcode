/*
 * @lc app=leetcode.cn id=71 lang=csharp
 *
 * [71] 简化路径
 */

// @lc code=start
public class Solution {
    public string SimplifyPath(string path) {
        List<string> st = new List<string>();
        string ans="";

        var lists=path.Split("/",StringSplitOptions.RemoveEmptyEntries);
        foreach(var item in lists){
            switch (item)
            {
                case "..":
                    if(st.Count>0)
                        st.RemoveAt(st.Count-1);
                    break;
                case ".":
                    break;
                default:
                    st.Add(item);
                    break;
            }
        }
        
        foreach (string c in st){
            ans+="/"+c;
        }
        if(ans=="")return "/";
        return ans;
    }
}
// @lc code=end

