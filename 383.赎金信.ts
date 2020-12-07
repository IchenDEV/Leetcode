/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
    let map1 = new Map();
    let map2 = new Map();

    for (const iterator of ransomNote)
        if (map1.has(iterator))
            map1.set(iterator, map1.get(iterator) + 1)
        else
            map1.set(iterator, 1)



    for (const iterator of magazine)
        if (map2.has(iterator))
            map2.set(iterator, map2.get(iterator) + 1)
        else
            map2.set(iterator, 1)


    for (const iterator of map1) {
        const key = iterator[0]
        const val = iterator[1]

        if (!map2.has(key))
            return false;
        if (map2.get(key) < val)
            return false;
    }


    return true;

};
// @lc code=end

