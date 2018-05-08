var calculate = function(s) {
    return s.replace(/-/g, '+-').split('+').reduce((sum, s) => sum + mult(s), 0);
};

function mult(s) {
    let ops = '*' + s.replace(/[\d -]+/g, '');
    if (ops.length === 1) return parseInt(s);
    return s.split(/[*\/]/g).reduce((a, b, i) => ops[i] === '*' ? a * b : (a ^ b) > 0 ? ~~(a / b) : -~~(-a / b), 1);
}

/**
 * TODO 此题我的方案又 TLE 了
 * 所以先看了看别人的方案，之后重新搞一遍。
 */