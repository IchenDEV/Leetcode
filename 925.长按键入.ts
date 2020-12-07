/*
 * @lc app=leetcode.cn id=925 lang=typescript
 *
 * [925] 长按键入
 */

// @lc code=start
function isLongPressedName(name: string, typed: string): boolean {
    let i = 0, j = 0;
    while (i < name.length) {
        if (name[i] !== typed[j])
            return false;

        let count_i = 0, count_j = 0;
        do { i++; count_i++ }
        while (i < name.length && name[i - 1] === name[i]);
        do { j++; count_j++; }
        while (j < typed.length && typed[j - 1] === typed[j])

        if (count_i > count_j)
            return false;
        if (i >= name.length && j < typed.length)
            return false;
    }
    return true;
};
// @lc code=end

