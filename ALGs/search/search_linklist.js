
function node(key, val, next){
    this.key = key
    this.val = val
    this.next = next
}

function get(key, first){
    for(let x= first; x!= null; x= x.next){
        if(key == x.key){
            return x.val
        }
    }
    return null
}

function put(key, val, first){
    for (let x = first; x != null; x = x.next){
        if(key == x.key) {
            x.val = val
            return
        }
    }
    first = new node(key, val, first)
}

let S = new node(0, "S", null)
let E = new node(1, "E", null)
let A = new node(2, "A", null)
let R = new node(3, "R", null)
let C = new node(4, "C", null)
let H = new node(5, "H", null)
let EE = new node(6, "E", null)
let first = new node(8, "B", null)
first.next = S
first.next.next = E
first.next.next.next = A
first.next.next.next.next = R
first.next.next.next.next.next = C
first.next.next.next.next.next.next = H
first.next.next.next.next.next.next.next = EE

console.log(first)
console.log(get(6, first))
console.log(get(3, first))
put(3, "BB", first)
console.log(get(3, first))


