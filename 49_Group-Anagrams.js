//Given an array of strings strs, group the anagrams together. You can return the answer in any order.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Solution 1

var groupAnagrams = function (strs) {
  const numberOfWords = strs.length;
  const sortedArray = [];
  const checkArray = [];
  const resultArray = [];

  for (let i = 0; i < numberOfWords; i++) {
    sortedArray[i] = strs[i].split("").sort().join("");
  }

  for (let i = 0; i < numberOfWords; i++) {
    if (!checkArray.includes(i)) {
      const newArray = [];
      newArray.push(strs[i]);
      for (let j = i + 1; j < numberOfWords; j++) {
        if (sortedArray[i] === sortedArray[j]) {
          newArray.push(strs[j]);
          checkArray.push(j);
        }
      }
      resultArray.push(newArray);
    }
  }
  return resultArray;
};
