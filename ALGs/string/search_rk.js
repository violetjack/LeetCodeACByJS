/**
 * RK 指纹字符串查找算法
 * 使用散列值的方法，将每个字符的值进行某种方式的计算，计算的值相同再去检查字符串
 */
function search(pat, txt){
    let N = txt.length
    let patHash = hash(pat, pat.length)
    let txtHash = hash(txt, N)
    if (patHash == txtHash) return 0
    for (let i = M; i < N; i++){
        txtHash = (txtHash  + Q - RM*txt.charCodeAt(i-M)%Q)%Q
        txtHash = (txtHash*R + txt.charCodeAt(i))%Q
        if (patHash == txtHash) {
            return i - M + 1
        }
    }
    return -1
}

/**
 * TODO 这个方法并没有真正的实现，只是进行了了解。
 */