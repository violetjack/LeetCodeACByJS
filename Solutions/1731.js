/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  const yuan = ["a", "e", "i", "o", "u"];

  const arr = new Array(yuan.length).fill(new Array(s.length).fill(0));
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (yuan.includes(char)) {
      for (let j = 0; j < yuan.length; j++) {
        if (char === yuan[j]) {
          arr[j][i]++
        }
      }
    }
  }
  console.log(arr)
};

const str = "eleetminicoworoep";

findTheLongestSubstring(str);
