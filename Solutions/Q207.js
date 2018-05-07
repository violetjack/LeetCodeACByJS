/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let hasConflict = false
    for (let i = 0; i < prerequisites.length; i++) {
        for (let j = 0; j < prerequisites.length; j++) {
            if (i != j
                && prerequisites[i][0] == prerequisites[j][1]
                && prerequisites[i][0] == prerequisites[j][1])
                return false
        }
    }

    for (let i = 0; i < numCourses; i++) {
        if (dfs(i, prerequisites.slice())) return true
    }
    return false
};

function dfs(index, prerequisites) {
    if (prerequisites.length == 0) {
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