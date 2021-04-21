const express = require('express'),
    app = express(),
    router = require('./app')
    cors = require('cors')

const PORT = 3000

app.use(cors())
app.use(router)


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})