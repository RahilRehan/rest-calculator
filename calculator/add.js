const getOperands = require('./util')

const add = (query ) => {
    const [operandOne, operandTwo] = getOperands(query)
    const answer = operandOne + operandTwo
    return answer
}

module.exports = add