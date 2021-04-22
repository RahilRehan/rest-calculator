const logger = (req, res, next) => {
    console.log(`URL:${req.originalUrl}  METHOD:${req.method}  OPERANDS:${req.query.a + ' and ' + req.query.b}`)
    next()
}

module.exports = logger