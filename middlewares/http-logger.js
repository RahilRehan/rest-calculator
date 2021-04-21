const logger = (req, res, next) => {
    const splits = req.originalUrl.split('/')
    if(splits.length === 5){
        operandOne = splits[3]
        operandTwo = splits[4]
        console.log(`URL:${req.originalUrl}  METHOD:${req.method}  OPERANDS:${operandOne + ' and ' + operandTwo}`)
    }else{
        console.log(`URL:${req.originalUrl}  METHOD:${req.method}`)
    }
    next()
}

module.exports = logger