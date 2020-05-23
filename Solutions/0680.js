/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1
  const arr = [...s]
  while(right - left > 1) {
      if (arr[left] === arr[right]) {
          left++
          right--
      } else if ((arr[left + 1] === arr[right]) || (arr[left] === arr[right - 1])) {
          return parse(s.substring(left + 1, right + 1)) || parse(s.substring(left, right))
      } else {
          return false
      }
  }
  return true
};

var parse = function (s) {
  console.log('parse', s)
  let left = 0;
  let right = s.length - 1
  let hasDel = true
  const arr = [...s]
  while(right - left > 1) {
      if (arr[left] === arr[right]) {
          left++
          right--
      } else {
          return false
      }
  }
  return true
}

/**
 * 我这里写的太啰嗦
 * 网上有个更简洁的版本
 */

 /**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, flag = true) {
  let l = 0, r = s.length - 1;
  while (l < r && s[l] === s[r]) l++, r--;
  if (r <= l) return true;
  if (flag == true) return validPalindrome(s.slice(l, r), false) || validPalindrome(s.slice(l + 1, r + 1), false)
  return false;
};