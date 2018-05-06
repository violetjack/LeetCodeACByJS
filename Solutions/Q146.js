/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = {};
    this.set = new Set();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map[key]) { // key already exist, we need to delete the key and add to end
        this.set.delete(key);
        this.set.add(key);
        return this.map[key];   
    } 
    return -1;
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map[key]) {
        // remove this key and add back in set, update in hashmap
        this.set.delete(key);
    } else {
        if(this.set.size >= this.capacity) {
            var it = this.set.values();
            var oldKey = it.next().value;
            delete this.map[oldKey];
            this.set.delete(oldKey);
        }
    }
    this.set.add(key);
    this.map[key] = value;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
