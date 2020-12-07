/*
 * @lc app=leetcode.cn id=68 lang=csharp
 *
 * [68] 文本左右对齐
 */

// @lc code=start
public class Solution
{
    public IList<string> FullJustify(string[] words, int maxWidth)
    {
        List<string> listX = new List<string>();
        int i = 0;


        while (i < words.Length )
        {
            int word_size = 0;
            int p = i;
            int word_count = 0;
            for (; word_size + words[i].Length + word_count-1 < maxWidth; i++)
            {
                word_size += words[i].Length;
                word_count++;
            }
            int space = maxWidth - word_size;
            int space_count = word_count - 1;

            string tmp = "";
            if (space % space_count == 0)
            {

                for (; p < i; p++)
                {
                    tmp += words[p];
                    if (p != i - 1)
                    {
                        for (int j = 0; j < space / space_count; j++)
                        {
                            tmp += " ";
                        }
                    }
                }
            }
            else
            {

                bool flag = true;
                for (; p < i; p++)
                {
                    tmp += words[p];
                    if (flag)
                    {
                        for (int j = 0; j < space / space_count + 1; j++)
                        {
                            tmp += " ";
                        }
                        flag=false;
                    }
                    else if (p != i - 1)
                    {
                        for (int j = 0; j < space / space_count; j++)
                        {
                            tmp += " ";
                        }
                    }
                }
            }
            listX.Add(tmp);
        }

        return listX;
    }

}
// @lc code=end

