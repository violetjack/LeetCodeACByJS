var checkInclusion = function(s1, s2) {
    const n = s1.length, m = s2.length;
    if (n > m) {
        return false;
    }
    const cnt = new Array(26).fill(0);
    for (let i = 0; i < n; ++i) {
        --cnt[s1[i].charCodeAt() - 'a'.charCodeAt()];
        ++cnt[s2[i].charCodeAt() - 'a'.charCodeAt()];
    }
    let diff = 0;
    for (const c of cnt) {
        if (c !== 0) {
            ++diff;
        }
    }
    if (diff == 0) {
        return true;
    }
    for (let i = n; i < m; ++i) {
        const x = s2[i].charCodeAt() - 'a'.charCodeAt(), y = s2[i - n].charCodeAt() - 'a'.charCodeAt();
        if (x == y) {
            continue;
        }
        if (cnt[x] == 0) {
            ++diff;
        }
        ++cnt[x];
        if (cnt[x] == 0) {
            --diff;
        }
        if (cnt[y] == 0) {
            ++diff;
        }
        --cnt[y];
        if (cnt[y] == 0) {
            --diff;
        }
        if (diff == 0) {
            return true;
        }
    }
    return false;
};

// 使用滑动指针、滑动窗口来实现。
// 审题要明确