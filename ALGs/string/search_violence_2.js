function search(par, txt){
    let i,j,
        M = pat.length,
        N = txt.length
    for(i = 0, j = 0; i < N && j < M; i++){
        if (txt.charAt(i) == pat.charAt(j)){
            j++
        } else {
            i -= j
            j = 0
        }
    }
    if (j == M) return i - M
    else return -1
}

const pat = "search"
const txt = "hello search baby"

console.log(search(pat, txt))