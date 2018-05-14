/**
 * @param {number} num (1-3999)
 * @return {string}
 */
var intToRoman = function(num) {
    let ans = ""
    while(num >= 1000){
        num -= 1000
        ans += "M"
    }
    while(num >= 500){
        num -= 500
        ans += "D"
    }
    while(num >= 100){
        num -= 100
        ans += "C"
    }
    while(num >= 50){
        num -= 50
        ans += "L"
    }
    while(num >= 10){
        num -= 10
        ans += "X"
    }
    while(num >= 5){
        num -= 5
        ans += "V"
    }
    while(num >= 1){
        num -= 1
        ans += "I"
    }

    ans = ans.replace("DCCCC", "CM")
    ans = ans.replace("CCCC", "CD")
    ans = ans.replace("LXXXX", "XC")
    ans = ans.replace("XXXX", "XL")
    ans = ans.replace("VIIII", "IX")
    ans = ans.replace("IIII", "IV")
    return ans
};

console.log(intToRoman(58))
console.log(intToRoman(3))
console.log(intToRoman(4))
console.log(intToRoman(1994))