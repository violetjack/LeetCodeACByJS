/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim()
  var res = 0
  if (s.length == 0)
    return 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] != ' ') {
      if (i != 0 && s[i - 1] == ' ')
        res = 1;
      else res++
    }
  }
  return res
};
