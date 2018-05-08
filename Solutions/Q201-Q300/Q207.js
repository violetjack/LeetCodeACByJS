/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    for (let i = 0; i < numCourses; i++) {
        if (dfs(i, [], prerequisites)) return true
    }
    return false
};

let can = false

function dfs(index, arr, numCourses, prerequisites) {
    if (arr.length == numCourses) {
        return true
    }
    let canFinish = false
    for (let i = 0; i < prerequisites.length; i++) {
        let pre = prerequisites[i][1]
        let next = prerequisites[i][0]
        if (pre == index) {
            let del = prerequisites.splice(i, 1)
            canFinish = canFinish || dfs(next, prerequisites)
            prerequisites.splice(i, 0, del)
        }
    }
    return canFinish
}

canFinish(2, [[0, 1], [1, 0]])