function node(val) {
    this.val = val
    this.next = null
}

function get(node, key, d) {
    if (node == null) return null
    if (d == key.length) return node
    let c = key.charAt(d)
    return get(node.next[c], key, d + 1)
}

function put(node, key, val, d) {
    if (node == null) node = new node(null)
    if (d == key.length) {
        node.val = val
        return node
    }
    let c = key.charAt(d)
    node.next[c] = put(node.next[c], key, val, d + 1)
    return node
}

function del(node, key, d){
    if (node == null) return null
    if (d == key.length) {
        node.val = null
    } else {
        let c = key.charAt(d)
        x.next[c] = del(node.next[c], key, d + 1)
    }
    if (node.val != null) return node
    for (let c = 0; c < R; c++){
        if (node.next[c] != null) return node
    }
    return null
}