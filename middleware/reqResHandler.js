const logger = require('../logging/logger.js')
const errorHandler = require('../errors/handler')

const reqResHandler = async (req, res, next) => {
	const url = req.originalUrl
	if (url === '/') {
		logger(`HIT:ROOT URL:${req.originalUrl}  METHOD:${req.method}`, 'info')
		next()
		return
	}

	if (Object.keys(req.query).length !== 2) {
		logger(
			`HIT:ERROR URL:${req.originalUrl}  METHOD:${req.method} Error: Malformed URL`,
			'error'
		)
		errorHandler(req, res, next, 'Malformed URL')
		return
	}

	switch (true) {
		case url === '/calculator':
			next()
			break
		case url.startsWith('/calculator/add'):
			logger(
				`HIT:ADD URL:${req.originalUrl}  METHOD:${
					req.method
				}  OPERANDS:${req.query.a + ' and ' + req.query.b},`,
				'info'
			)
			break
		case url.startsWith('/calculator/multiply'):
			logger(
				`HIT:MULTIPLY URL:${req.originalUrl}  METHOD:${
					req.method
				}  OPERANDS:${req.query.a + ' and ' + req.query.b}`,
				'info'
			)
			break
		case url.startsWith('/calculator/divide'):
			logger(
				`HIT:DIVIDE URL:${req.originalUrl}  METHOD:${
					req.method
				}  OPERANDS:${req.query.a + ' and ' + req.query.b}`,
				'info'
			)
			break
	}
	next()
}

module.exports = reqResHandler
