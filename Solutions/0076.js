/**
 * 2018.06.01
 * 
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
    var ans = '';

    // 1. process hashmap
    var map = {};
    t.split('').forEach(ch => map[ch] = (map[ch] || 0) + 1);
    var count = Object.keys(map).length;

    // 2. traverse s to find boundaries
    // both l & r are inclusive
    var l = 0;
    var r = -1;

    while (r < s.length) {
        if (count === 0) {
            // good condition
            // l~r contains t

            // update ans
            if (!ans || r - l + 1 < ans.length) {
                ans = s.slice(l, r + 1);
            }

            // get rid of curr ch and then move l
            if (map[s[l]] !== undefined) {
                map[s[l]]++;
            }
            if (map[s[l]] > 0) {
                count++;
            }
            l++;

        } else {
            // bad condition
            // l~r doesn't contain t

            // move r and add new ch
            r++;
            if (map[s[r]] !== undefined) {
                map[s[r]]--;
            }
            if (map[s[r]] === 0) {
                count--;
            }
        }
    }
    return ans;
}

/**
 * 2020.05.23
 * 
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (s.length < t.length) {
        return '';
    }

    const map = {};
    const tMap = {};
    for (let i = 0; i < t.length; i++) {
        map[t[i]] = 0;
        tMap[t[i]] = tMap[t[i]] ? tMap[t[i]] + 1 : 1;
    }
    Object.preventExtensions(map);
    let index = 0;
    let len = Number.MAX_VALUE;

    let left = 0;
    let right = 0;

    while (right < s.length) {
        map[s[right]]++;
        right++;
        if (allright(map, tMap)) {
            while (left < right) {
                if (map[s[left]] === undefined) {
                    left++;
                } else if (map[s[left]] > tMap[s[left]]) {
                    map[s[left]]--;
                    left++;
                } else {
                    if (right - left < len) {
                        index = left;
                        len = right - left;
                    }
                    break;
                }
            }
        }
    }
    if (len === Number.MAX_VALUE) {
        return '';
    }
    return s.substring(index, index + len);
};

var allright = function (map, tMap) {
    for (let key of Object.keys(map)) {
        if (map[key] <= tMap[key] - 1) {
            return false;
        }
    }
    return true;
};

console.log(minWindow('aa', 'aa'));
