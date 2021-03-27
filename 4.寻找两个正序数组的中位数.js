/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let num = Array.prototype.concat(nums1, nums2);
  num.sort((a,b)=>{return a-b});
  console.log(num);
  let len =num.length;
  if(len%2==0){
    return (num[Math.floor((len-1)/2)]+num[Math.floor((len)/2)])/2
  }

  return num[Math.floor((len-1)/2)]
};
// @lc code=end
