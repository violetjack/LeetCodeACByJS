/**
 * KMP 的特点在于之前检查过的字符串不在重复检查
 * 更加上一次匹配的结果来决定是否从头匹配
 * 减少搜索次数
 */
let pat = "search"
let dfa = []


function KMP(){
    const M = pat.length
    const R = 256

    dfa[pat.charAt(0)][0] = 1
    for(let x = 0, j = 1; j < M; j++){
        for (let c = 0; c < R; c++){
            dfs[c][j] = dfs[c][x]
        }
        dfa[pat.charAt(j)][j] = j + 1
        x = dfa[pat.charAt(j)][x]
    }
}

function search(txt){
    let i, j, N = txt.length, M = pat.length
    for(i = 0, j=0; i < N && j < M; i++){
        j = dfs[txt.charAt(i)][j]
    }
    if (j == M) {
        return i - M
    } else {
        return  -1
    }
}

KMP()
const txt = "hello search baby"
console.log(search(txt))

/**
 * TODO 由于 Java 和 JS 的数据结构不同，所以运行失败
 * 
 * 大体思想需要学习，之后进行实现。
 */