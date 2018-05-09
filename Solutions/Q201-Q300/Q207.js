/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var courses = new Array(numCourses),
        visited = new Array(numCourses),
        preLen = prerequisites.length,
        flag = true,
        temp;
    
    visited.fill(false);
    courses.fill(undefined);
    for (let key in courses) {
        courses[key] = [];
    }
    
    for (let cur in prerequisites) {
        temp = prerequisites[cur];
        courses[temp[0]].push(temp[1]);
    }
    
    for (let key in courses) {
        if (flag && !visited[key]) {
            visited[key] = true;
            map = new Array(numCourses);
            map.fill(false);
            dfs(key, map);
        }
    }
    
    return flag;
    
    function dfs(index, map) {
        if (!flag) return;
        
        visited[index] = true;
        
        if (map[index]) {
            flag = false;
            return;
        }
        
        for (let key in courses[index]) {
            map[index] = true;
            dfs(courses[index][key], map);
            map[index] = false;
        }
    }
    
};
