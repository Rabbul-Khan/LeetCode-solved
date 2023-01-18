// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Solution 3: Using HashSet

const containsDuplicate = (nums) => {
  let numsSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (numsSet.has(nums[i])) {
      return true;
    } else {
      numsSet.add(nums[i]);
    }
  }
  return false;
};

// Time complexity: O(n)
// Space complexity: O(n)

// ------------------------------------

// Solution 2: Using sort

// const containsDuplicate = (nums) => {
//         nums.sort();
//     for(let i=0; i<nums.length; i++){
//         if (nums[i]===nums[i+1]){
//             return true;
//         }
//     }
// }

// Time complexity: O(nlogn)
// Space complexity: O(1)

// ------------------------------------

// Solution 1: Brute force

// const containsDuplicate = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// Time complexity: O(n^2)
// Space complexity: O(1)
