const fs = require('fs').promises;
const error = require('../errors/handler')
const {addLogger, multiplyLogger, divideLogger} = require('./calculator-logger') 

const parseIp = (req) => req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress

const logger = async (req, res, next) => {
    const url = req.originalUrl

    if(Object.keys(req.query).length!==2){
        console.log(`HIT:ERROR URL:${req.originalUrl}  METHOD:${req.method} Error: Not Enough parameters`)
        error(req, res, next, 'Pass correct parameters')
        return
    }

    switch (true){
        case url.startsWith('/calculator/add'):
            addLogger(req)
            break
        case url.startsWith('/calculator/multiply'):
            multiplyLogger(req)
            break
        case url.startsWith('/calculator/divide'):
            divideLogger(req)
            break
    }


    /* Use this for file logging
    try {
        const log = `IP:${parseIp(req)} URL:${req.originalUrl}  METHOD:${req.method}  OPERANDS:${req.query.a + ' and ' + req.query.b}\n`
        await fs.appendFile('logs/logs.txt', log)
    } catch (error) {
        console.error(`Got an error trying to write to a file: ${error.message}`);
    }*/
    next()
}

module.exports = logger