/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    if(canStringBeSegmented(s, wordDict)) {
        return getAllPossibleSegments(s, wordDict, {});
    } else {
      return []
    }
  };
  // DFS
  function getAllPossibleSegments(s, dict, map) {
      if (s in map) return map[s];
      const result = [];
      if (dict.includes(s)) result.push(s);
      for (let i = 1; i < s.length; i++) {
          const left = s.substring(0, i);
          const right = s.substring(i);
          if (dict.includes(left) && containsSuffix(dict, right)) {
              for (let segment of getAllPossibleSegments(right, dict, map)) {
                  result.push(`${left} ${segment}`);
              }
          }
      }
      map[s] = result;
      return result;
  }
  
  function containsSuffix(dict, str) {
      for (let i = 0; i < str.length; i++) {
          if (dict.includes(str.substring(i))) return true;
      }
      return false;
  }
  // 使用 dp 判断能否
  function canStringBeSegmented(inputStr, inputDict) {
      const memTable = Array(inputStr.length + 1).fill(false);
      memTable[0] = true;
  
      for (let i = 1; i <= inputStr.length; i++) {
          for (let j = 0; j < i; j++) {
              if (memTable[j] && inputDict.includes(inputStr.substring(j, i))) {
                  memTable[i] = true;
                  break;
              }
          }
      }
      return memTable[inputStr.length];
  }