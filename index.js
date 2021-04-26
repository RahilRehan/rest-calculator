const express = require('express'),
    app = express(),
    root = require('./app/root'),
    routes = require('./app/routes'),
    errorHandler = require('./errors/handler'),
    cors = require('cors'),
    logger = require('./logs/logger')

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(logger)

app.use('/', root)
app.use('/calculator', routes)
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})
