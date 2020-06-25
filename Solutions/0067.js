/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const maxLenght = Math.max(a.length, b.length)
  const aArr = a.split('')
  const bArr = b.split('')
  let add = false
  let result = ''

  while (aArr.length !== 0 || bArr.length !== 0) {
    const aStr = aArr.pop()
    const bStr = bArr.pop()
    console.log(aArr, bArr)
    if (aStr === '1' && bStr === '1') {
      result = (add ? '1' : '0') + result
      add = true
      // console.log('1 ---->', result, add)
    } else if (aStr !== '1' && bStr !== '1') {
      result = (add ? '1' : '0') + result
      add = false
      // console.log('2 ---->', result, add)
    } else {
      if (add) {
        result = '0' + result
        add = true
        // console.log('3 ---->', result, add)
      } else {
        result = '1' + result
        add = false
        // console.log('4 ---->', result, add)
      }
    }
  }

  if (add) {
    result = '1' + result
  }
  return result
};

console.log(addBinary('1010', '1011'))