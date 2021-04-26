const getOperands = require('./util')

const multiply = (query) => {
    const [operandOne, operandTwo] = getOperands(query)
    const answer = operandOne * operandTwo
    return answer
}

module.exports = multiply