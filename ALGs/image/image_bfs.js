/**
 * 深度优先搜索（DFS）
 */
let mark = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
]

function bfs(rect){
    let queue = []
    queue.push({ i: 0, j: 0 })
    
    while(queue.length != 0) {
        let position = queue.shift()
        if (position.i > 0 
            && !mark[position.i - 1][position.j] 
            && rect[position.i - 1][position.j] > rect[position.i][position.j])
            queue.push({ i: position.i - 1, j: position.j })
        if (position.i < rect.length - 1 
            && !mark[position.i + 1][position.j] 
            && rect[position.i + 1][position.j] > rect[position.i][position.j])
            queue.push({ i: position.i + 1, j: position.j })
        if (position.j > 0 
            && !mark[position.i][position.j - 1] 
            && rect[position.i][position.j - 1] > rect[position.i][position.j])
            queue.push({ i: position.i, j: position.j - 1 })
        if (position.j < rect[0].length - 1 
            && !mark[position.i][position.j + 1] 
            && rect[position.i][position.j + 1] > rect[position.i][position.j])
            queue.push({ i: position.i, j: position.j + 1 })
        mark[position.i][position.j] = true
    }
}

const rect = [
    [1, 2, 3, 5],
    [3, 3, 6, 8],
    [1, 4, 5, 6],
    [9, 3, 6, 7]
]

bfs(rect)

/*
bfs 是发散可能性的写法，一次性尝试所有可能性。
dfs 是升入可能性的写法，一次深入尝试一种方案。
TODO 关于 BFS 之后通过实例继续深入学习。
*/