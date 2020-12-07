/*
 * @lc app=leetcode.cn id=1089 lang=typescript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 Do not return anything, modify arr in-place instead.
 */

function duplicateZeros(arr: number[]): void {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            i++;
        }
    }
    arr.splice(len,arr.length-len)
};
// @lc code=end

