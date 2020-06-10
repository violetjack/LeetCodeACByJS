/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    const unionfind = {};
    for (const [c1, c2, c3, c4] of equations) {
      if (c2 === "=") {
        union(c1, c4);
      }
    }
  
    for (const [c1, c2, c3, c4] of equations) {
      const x = find(c1);
      const y = find(c4);
      if (c2 === "!") {
        if (x === y) {
          return false;
        }
      }
    }
    return true;
  
    function find(i) {
      if (unionfind[i] === undefined) {
        return (unionfind[i] = i);
      }
      return unionfind[i] === i ? i : (unionfind[i] = find(unionfind[i]));
    }
  
    function union(x, y) {
      x = find(x);
      y = find(y);
      unionfind[y] = x;
    }
  };
  
  
/**
 * 下面是我写的奇奇怪怪的东西…… 
 */  
  
  
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
    const newQuestions = [
        ...equations.filter((eq) => eq.includes("==")),
        ...equations.filter((eq) => eq.includes("!=")),
    ];
    const arr = [];
    let num = 1;
    for (let equation of newQuestions) {
        const { begin, equal, end } = parse(equation);
        const beginIndex = getArrIndex(begin, arr);
        const endIndex = getArrIndex(end, arr);
        if (equal === "==") {
            if (beginIndex === -1 && endIndex === -1) {
                arr.push([begin, end]);
            } else if (beginIndex !== -1 && endIndex === -1) {
                arr[beginIndex].push(end);
            } else if (endIndex !== -1 && beginIndex === -1) {
                arr[endIndex].push(begin);
            } else {
                if (beginIndex !== endIndex) {
                    const b = arr.splice(beginIndex, 1);
                    const e = arr.splice(endIndex, 1);
                    arr.push([...b[0], ...e[0]]);
                }
            }
            console.log("== -->", arr);
        } else {
            console.log('!= --->', beginIndex, endIndex)
            if (beginIndex === -1 && endIndex === -1) {

            } else {
                return beginIndex === endIndex
            }
        }
    }
    return true;
};

var parse = function (str) {
    return {
        begin: str.substring(0, 1),
        equal: str.substring(1, 3),
        end: str.substring(3),
    };
};

var getArrIndex = function (char, arr) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].includes(char)) {
            return index;
        }
    }
    return -1;
};

console.log(
    equationsPossible(["b==d", "c==a", "h==a", "d==d", "a==b", "h!=k", "i==h"])
);
