

class Solution {
    public int longestSubstring(String s, int k) {
        char[] str = s.toCharArray();
        return helper(str, 0, s.length(), k);
    }
    private int helper(char[] str, int start, int end, int k) {
        if (end - start < k) return 0;//substring length shorter than k.
        int[] count = new int[26];
        for (int i = start; i < end; i++) {
            int idx = str[i] - 'a';
            count[idx]++;
        }
        for (int i = 0; i < 26; i++) {
            if (count[i] < k && count[i] > 0) { //count[i]=0 => i+'a' does not exist in the string, skip it.
                for (int j = start; j < end; j++) {
                    if (str[j] == i + 'a') {
                        int left = helper(str, start, j, k);
                        int right = helper(str, j + 1, end, k);
                        return Math.max(left, right);
                    }
                }
            }
        }
        return end - start;
    }
}

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
    let str = s.split("")
    return helper(str, 0, s.length, k)
};

function helper(str, start, end, k) {
    if (end - start < k) return 0;//substring length shorter than k.
    let count = new Array(26)
    for (let i = start; i < end; i++) {
        let idx = str[i] - 'a'.charCodeAt();
        count[idx]++;
    }
    for (let i = 0; i < 26; i++) {
        if (count[i] < k && count[i] > 0) { //count[i]=0 => i+'a' does not exist in the string, skip it.
            for (let j = start; j < end; j++) {
                if (str[j].charCodeAt() == i + 'a'.charCodeAt()) {
                    let left = helper(str, start, j, k);
                    let right = helper(str, j + 1, end, k);
                    return Math.max(left, right);
                }
            }
        }
    }
    return end - start;
}


longestSubstring("bbaaacbd", 3)