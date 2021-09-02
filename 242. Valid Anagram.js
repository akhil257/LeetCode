/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let hashMap = new Map();

  if (s.length !== t.length) return false;

  for (val of s) {
    hashMap.set(val, (hashMap.get(val) || 0) + 1);
  }

  for (val of t) {
    if (hashMap.get(val) && hashMap.get(val) > 0)
      hashMap.set(val, hashMap.get(val) - 1);
    else return false;
  }
  return true;
};

// Runtime: 160 ms, faster than 10.42% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 41 MB, less than 70.41% of JavaScript online submissions for Valid Anagram.
