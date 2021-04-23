const fs = require('fs').promises;
const path = require('path')

const parseIp = (req) => req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress

const logger = async (req, res, next) => {
    try {
        const log = `URL:${req.originalUrl}  METHOD:${req.method}  OPERANDS:${req.query.a + ' and ' + req.query.b}\n`
        await fs.appendFile('logs/logs.txt', log)
    } catch (error) {
        console.error(`Got an error trying to write to a file: ${error.message}`);
    }
    console.log(`IP:${parseIp(req)} URL:${req.originalUrl}  METHOD:${req.method}  OPERANDS:${req.query.a + ' and ' + req.query.b}`)
    next()
}

module.exports = logger