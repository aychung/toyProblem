/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var tracker = {};
  
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] in tracker) {
      return [tracker[nums[i]], i];
    } else {
      tracker[target - nums[i]] = i;
    }
  }
};