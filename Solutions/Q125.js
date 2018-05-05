var isPalindrome = function (s) {
    s = s.replace(/[^\w]/g, "")
    if (s.length == 0) return true

    var start = 0, end = s.length - 1
    while (start < end) {
        if (!s[start] || !s[end]) {
            return false
        }
        if (s[start].toLowerCase() != s[end].toLowerCase()) {
            return false
        }
        start++
        end--
    }
    return true
};

isPalindrome("A man, a plan, a canal: Panama")
isPalindrome("A man, a plan, a canal: Panama")