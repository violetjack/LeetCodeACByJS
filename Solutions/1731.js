var findTheLongestSubstring = function (s) {
  var state = new Array(32);
  var cur = 0;
  var ans = 0;
  state[0] = -1;
  for (let i = 0; i < s.length; i++) {
    console.log("----");
    console.log(s[i], cur);
    switch (s[i]) {
      case "a":
        cur ^= 1; // 00001
        break;
      case "e":
        cur ^= 2; // 00010
        break;
      case "i":
        cur ^= 4; // 00100
        break;
      case "o":
        cur ^= 8; // 01000
        break;
      case "u":
        cur ^= 16; // 10000
        break;
      default:
        break;
    }
    console.log(cur);
    if (state[cur] === undefined) {
      state[cur] = i;
    } else {
      ans = Math.max(ans, i - state[cur]);
    }
    console.log(state);
  }
  return ans;
};

findTheLongestSubstring("eleetcodeisgoodupdate");
