function search(pat, txt){
    const M = pat.length,
        N = txt.length
    for (let i = 0; i <= N - M; i++){
        let j
        for (j = 0; j < M; j++){
            if (txt.charAt(i + j) != pat.charAt(j)){
                break
            }
            if (j == M - 1) return i
        }
    }
    return -1
}

const pat = "search"
const txt = "hello search baby"

console.log(search(pat, txt))

/**
 * 输出结果：6
 * 
 * 通过遍历的方式查找某一段字符是否匹配，没有占用额外内存。
 */