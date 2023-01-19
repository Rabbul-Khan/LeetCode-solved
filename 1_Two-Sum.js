// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Solution 2: Using HashMap

const twoSum = (nums, target) => {
  const myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (myMap.has(diff)) {
      return [i, myMap.get(diff)];
    } else {
      myMap.set(nums[i], i);
    }
  }
};

//Time Complexity: O(n)
//Space Complexity: O(n)

// Solution 1: Brute force

// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// Time Complexity: O(n^2)
// Space Complexity: O(1)
