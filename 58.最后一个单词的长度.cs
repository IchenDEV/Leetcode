/*
 * @lc app=leetcode.cn id=58 lang=csharp
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
public class Solution {
    public int LengthOfLastWord(string s) {
        var c= s.Trim().Split(' ');
        return  c.Length>0?c.Last().Length:0;
    }
}
// @lc code=end

