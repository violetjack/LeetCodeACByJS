const patternMatching = (pattern, value) => {
  const map = new Map() // 保存a和b所对应的单词
  const set = new Set() // 用于确保map中的a和b不会对应相同的单词
  
  const match = (pattern, value, map, set) => { // pattern子串和value子串是否匹配
    if (pattern == '')        // 递归的出口 如果pattern为空字符串，但value不是
      return value == ''      // 则不匹配，否则，匹配
    const pChar = pattern[0]  // 获取pattern的首字符
    if (map.has(pChar)) {     // map中，如果pChar已经有对应的单词
      if (!value.startsWith(map.get(pChar))) // 如果value不是以该单词开头 返回false
        return false                         // 否则继续考察剩余的pattern和value
      return match(pattern.substring(1), value.substring(map.get(pChar).length), map, set)
    }
    for (let i = -1; i < value.length; i++) { // pChar可以是''，所以从-1开始
      const word = value.substring(0, i + 1)  // 从value串的开头截取不同长度的单词
      if (set.has(word)) continue          // 别的pChar已经对应了该单词 跳过该单词
      map.set(pChar, word)                 // 当前pChar和对应的单词存入map
      set.add(word)                        // 单词存入set集合
      if (match(pattern.substring(1), value.substring(i + 1), map, set)) {
        return true     // match递归调用，考察剩余pattern和剩余的value串是否匹配
      }                 // 如果match的结果是true，直接返回true，否则进行下面的回溯
      map.delete(pChar) // map中删除pChar和它对应的单词
      set.delete(word)  // set中删除该单词，继续考察下一个单词
    }
    return false        // 遍历了所有情况，都没有返回true，只有返回false
  }
  return match(pattern, value, map, set) // 入口，整个pattern和整个value串是否匹配
};