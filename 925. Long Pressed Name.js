/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  if (typed.length < name.length) return false;

  let i = 0,
    j = 0,
    prev;
  while (i < typed.length) {
    if (typed[i] == name[j]) {
      prev = typed[i];
      i++;
      j++;
    } else if (typed[i] === prev) {
      i++;
    } else return false;
  }
  if (j < name.length) return false;
  return true;
};

// Runtime: 72 ms, faster than 84.55% of JavaScript online submissions for Long Pressed Name.
// Memory Usage: 38.7 MB, less than 88.18% of JavaScript online submissions for Long Pressed Name.
