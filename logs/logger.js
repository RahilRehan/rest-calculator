const {addLogger, multiplyLogger, divideLogger} = require('./calculator-logger') 
const {rootLogger, incorrectParamLogger} = require('./util-loggers')

const logger = async (req, res, next) => {
    const url = req.originalUrl
    if(url === '/'){
        rootLogger(req, next)
        return
    }

    if(Object.keys(req.query).length!==2){
        incorrectParamLogger(req, res, next)
        return
    }

    switch (true){
        case url === '/calculator':
            next()
            break
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
    next()
}

module.exports = logger