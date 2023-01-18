// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  let sSorted = s.split("").sort().toString();
  let tSorted = t.split("").sort().toString();

  if (sSorted === tSorted.toString()) {
    return true;
  } else {
    return false;
  }
};

// The time and space complexity depend on the sorting algorithm used.
// Time and space complexity of good sorting algorithm is O(nlogn) and O(n) respectively. Very optimized sorting algorithm may have O(1) space complexity.

// Another solution is to use HashMap frequrency
// Time and Space complexity: O(s+t)
