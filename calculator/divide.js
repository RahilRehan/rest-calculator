const getOperands = require('./util')

const divide = (query) => {
    const [operandOne, operandTwo] = getOperands(query)
    const answer = operandOne / operandTwo
    return answer
}

module.exports = divide