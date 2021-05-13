module.exports = (req, res, next, message) => {
	message = message ?? 'Not found'
	res.status(404).send({
		status: 404,
		error: message,
	})
}
