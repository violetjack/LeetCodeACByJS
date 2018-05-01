let M = 4 // 线性探测表的大小
let N = 3// 符号表中键值对的总数

function hash(key) {
    return key.charCodeAt() % M
}

function put(key, val, keys, vals) {
    if (N >= parseInt(M/2)) resize(2 * M)
    let i;
    for(i = hash(key); keys[i] != null; i=(i + 1)%M){
        if (keys[i] == key){
            vals[i] = val
            return
        }
    }
    keys[i] = key
    vals[i] = val
    N++
}

function resize(len){

}

function get(key, keys, vals) {
    for (i = hash(key); keys[i] != null; i = (i + 1) % M) {
        if (keys[i] == key) {
            return vals[i]
        }
    }
    return null
}

let keys = new Array(M)
let vals = new Array(M)

put("A", "jack", keys, vals)
put("B", "rose", keys, vals)
put("C", "james", keys, vals)
put("D", "over", keys, vals)
// put("E", "nash", keys, vals)
// put("F", "curry", keys, vals)
// put("G", "bb", keys, vals)
// put("H", "pet", keys, vals)
// put("I", "boss", keys, vals)
// put("J", "steven", keys, vals)
// put("K", "green", keys, vals)
// put("L", "klar", keys, vals)
console.log(keys)
console.log(vals)

/**
 * 散列表的线性探测法
 * 如果有两个相同散列值、不同键的相遇，后面的散列值往后移动。写不下就往后移动，就算有原主人来了也只好往后移动。
 * 如果有两个相同散列值、相同键的相遇，取后面的 value。
 * 
 * TODO 在 JS 中和在 Java 中稍有不同，并没与实现成功。
 */