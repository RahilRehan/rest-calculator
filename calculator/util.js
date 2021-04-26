
const getOperands = (params) => {
    return Object.keys(params).map((key) => Number(params[key]))
}

module.exports = getOperands