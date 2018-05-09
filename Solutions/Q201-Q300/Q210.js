/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // edge case
    if (!numCourses || numCourses === 0) { return []; }
    
    // calculate in-degree and edges
    let inDegree = {}; // 要学习的数量
    let edges = {}; // 学习条件
    for (let i = 0; i < numCourses; i++) {
        inDegree[i] = 0;
        edges[i] = [];
    }
    for (let i = 0; i < prerequisites.length; i++) {
        inDegree[prerequisites[i][0]]++;
        edges[prerequisites[i][1]].push(prerequisites[i][0]);
    }
    
    // find root(s)
    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) { queue.push(i); }
    }
    
    // BFS
    let res = [];
    while (queue.length > 0) {
        let node = queue.shift();
        res.push(node);
        for (let i = 0; i < edges[node].length; i++) {
            let nextNode = edges[node][i];
            inDegree[nextNode]--;
            if (inDegree[nextNode] === 0) {
                queue.push(nextNode);
            }
        }
    }
    
    // check
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] > 0) { return []; }
    }
    
    return res;
};