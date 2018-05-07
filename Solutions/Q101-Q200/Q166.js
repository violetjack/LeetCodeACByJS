/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    if (numerator == 0) return "0"

    const res = new Array()

    if (numerator > 0 ^ denominator > 0) {
        res.push("-")
    }
    let num = Math.abs(numerator), den = Math.abs(denominator)
    res.push(parseInt(num / den))
    if (num % den == 0) return res.join("")

    res.push(".")
    num %= den

    let map = new Map()
    while (true) {
        let curNum = parseInt((num * 10) / den)
        num = (num * 10) % den
        if (map.has(curNum)) {
            const index = map.get(curNum)
            res.splice(index, 0, "(")
            res.push(")")
            break
        } else if (num == 0) {
            res.push(curNum)
            break
        } else {
            res.push(curNum)
            map.set(curNum, res.length - 1)
        }
    }
    return res.join("")
};