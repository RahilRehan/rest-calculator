const addLogger = (req) => 
    console.log(`HIT:ADD URL:${req.originalUrl}  METHOD:${req.method}  OPERANDS:${req.query.a + ' and ' + req.query.b}`)

const multiplyLogger = (req) => 
    console.log(`HIT:MULTIPLY URL:${req.originalUrl}  METHOD:${req.method}  OPERANDS:${req.query.a + ' and ' + req.query.b}`)

const divideLogger = (req) => 
    console.log(`HIT:DIVIDE URL:${req.originalUrl}  METHOD:${req.method}  OPERANDS:${req.query.a + ' and ' + req.query.b}`)

module.exports = {addLogger, multiplyLogger, divideLogger}