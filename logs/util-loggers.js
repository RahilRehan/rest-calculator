const error = require('../errors/handler')
const rootLogger = (req, next) => {
    console.log(`HIT:ROOT URL:${req.originalUrl}  METHOD:${req.method}`)
    next()
    return
}

const incorrectParamLogger = (req, res, next) => {
    console.log(`HIT:ERROR URL:${req.originalUrl}  METHOD:${req.method} Error: Not Enough parameters`)
    error(req, res, next, 'Pass correct parameters')
    return
}

module.exports = {rootLogger, incorrectParamLogger}