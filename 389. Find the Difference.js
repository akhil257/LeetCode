/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let charMap = new Map();
  for (char of s) {
    if (charMap.has(char)) charMap.set(char, charMap.get(char) + 1);
    else charMap.set(char, 1);
  }

  for (char of t) {
    if (!charMap.has(char)) {
      return char;
    }

    if (charMap.get(char) > 0) charMap.set(char, charMap.get(char) - 1);
    else return char;
  }
  return "";
};

// Runtime: 76 ms, faster than 85.56% of JavaScript online submissions for Find the Difference.
// Memory Usage: 40.7 MB, less than 41.29% of JavaScript online submissions for Find the Difference.

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    
  let cookies=new Map();
  for(size of s){
      cookies.set(s, cookies.get(s)+1 || 1)
  }
  console.log(cookies)
  let counter=0;
  for(greed of g){
      if(cookies.has(g) && cookies.get(g)>0){
          counter++;
          cookies.set(g, cookies.get(g)-1)
      }
  }
  return counter;
};