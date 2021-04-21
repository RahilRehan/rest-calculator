const logger = (req) => {
    console.log(`URL:${req.originalUrl}  METHOD:${req.method}  OPERANDS:${req.params.operandOne + ' and ' + req.params.operandTwo}`)
}

module.exports = logger;