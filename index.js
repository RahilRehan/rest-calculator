const express = require('express'),
    app = express(),
    root = require('./app/root'),
    calculator = require('./app/calculator'),
    errorHandler = require('./app/errorHandler'),
    cors = require('cors'),
    logger = require('./middlewares/http-logger'),
    {transport, message} = require('./utils/mailer')

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(logger)

app.use('/', root)
app.use('/calculator', calculator)
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})
