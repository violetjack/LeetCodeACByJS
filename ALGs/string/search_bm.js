/**
 * 从右向左扫描模式字符串的更有效方法
 * 
 * 获取匹配字符串最右侧的字符 R 与 M - N + 1 的目标字符串匹配
 * 如果目标字符串截取值中没有 R，则匹配字符串整体向右移动 N - 1 位开始匹配
 * 如果匹配上最右侧一位，然后再向左匹配
 */
const pat = "search"
const txt = "hello search baby"
let R = 256
let right = new Array(R)

function BM(){
    let M = pat.length
    
    for (let c= 0; c < R; c++){
        right[c] = -1
    }
    for (let j = 0; j < M; j++){
        right[pat.charCodeAt(j)] = j
    }
}

function search(txt){
    let N = txt.length
    let M = pat.length
    let skip
    for(let i = 0; i < N-M; i+= skip){
        skip = 0
        for(let j = M - 1; j >= 0; j--){
            if (pat.charCodeAt(j) != txt.charCodeAt(i + j)){
                skip = j - right[txt.charCodeAt(i + j)]
                if (skip < 1) skip = 1
                break
            }
        }
        if (skip == 0) return i
    }
    return -1
}

BM()
console.log(search(txt))

/**
 * 输出：6
 */