const winston = require('winston')

const winstonLogger = winston.createLogger({
	level: 'info',
	format: winston.format.json(),
	transports: [
		new winston.transports.File({
			filename: 'logs/error.log',
			level: 'error',
		}),
		new winston.transports.File({
			filename: 'logs/combined.log',
			level: 'info',
		}),
	],
})

if (process.env.NODE_ENV !== 'production') {
	winstonLogger.add(
		new winston.transports.Console({
			format: winston.format.simple(),
		})
	)
}

const logger = (message, statusCode) => {
	if (statusCode === 'error') {
		winstonLogger.error(message)
	} else if (statusCode === 'info') {
		winstonLogger.info(message)
	}
}

module.exports = logger
