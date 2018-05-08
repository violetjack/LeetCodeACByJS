/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let num = 0
    if (s.includes("IV")) num -= 2
    if (s.includes("IX")) num -= 2
    if (s.includes("XL")) num -= 20
    if (s.includes("XC")) num -= 20
    if (s.includes("CD")) num -= 200
    if (s.includes("CM")) num -= 200

    for (let c of s) {
        switch (c) {
            case "I":
                num += 1
                break
            case "V":
                num += 5
                break
            case "X":
                num += 10
                break
            case "L":
                num += 50
                break
            case "C":
                num += 100
                break
            case "D":
                num += 500
                break
            case "M":
                num += 1000
                break
        }
    }
    return num
};