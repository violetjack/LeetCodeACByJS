/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let index = 0,
        stack = []

    while (index < tokens.length) {
        if (tokens[index] == "+"
            || tokens[index] == "-"
            || tokens[index] == "*"
            || tokens[index] == "/") {
            if (index < 2) return new Error()
            let num1 = stack.pop()
            let num2 = stack.pop()
            if (tokens[index] == "+") stack.push(num2 + num1)
            else if (tokens[index] == "-") stack.push(num2 - num1)
            else if (tokens[index] == "*") stack.push(num2 * num1)
            else if (tokens[index] == "/") stack.push(parseInt(num2 / num1))
        } else {
            stack.push(parseInt(tokens[index]))
        }
        index++
    }
    return stack[0]
};

console.log(evalRPN(["2", "1", "+", "3", "*"]))