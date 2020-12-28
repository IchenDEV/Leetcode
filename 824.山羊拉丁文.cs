/*
 * @lc app=leetcode.cn id=824 lang=csharp
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
public class Solution {
    public string ToGoatLatin(string S) {
        var strList=S.Split(" ");
        string ans="";
        for(int i=0;i<strList.Length;i++){
            var item=strList[i];
            switch (item[0])
            {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                case 'A':
                case 'E':
                case 'I':
                case 'O':
                case 'U':  
                    item+="ma";
                    break;
                default:
                    item=item.Substring(1)+item[0]+"ma";
                    break;
            }
            for(int j=0;j<i+1;j++){
                item+='a';
            }
            if(i!=strList.Length-1)
                ans+=item+" ";
            else
                ans+=item;
        }
        return ans;

    }
}
// @lc code=end

