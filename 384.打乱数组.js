/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

const { random } = require("core-js/core/number");
const { randomInt } = require("node:crypto");

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.oriData = [...nums];
  this.data = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.data = [...this.oriData];
  return this.data;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  for (let index = 0; index < this.data.length; index++) {
    let r = Math.floor( Math.random() * (this.data.length - index) + index);
    let t = this.data[index];
    this.data[index] = this.data[r];
    this.data[r] = t;
  }

  return this.data;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end
