
const express = require('express'),
    root = require('./app/root'),
    routes = require('./app/routes'),
    errorHandler = require('./errors/handler'),
    cors = require('cors'),
    reqResHandler = require('./middleware/reqResHandler')

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(reqResHandler)

app.use('/', root)
app.use('/calculator', routes)
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})
