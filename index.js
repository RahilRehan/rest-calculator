const express = require('express'),
    app = express(),
    router = require('./app')
    cors = require('cors')

const PORT = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.json({message: "Welcome to our rest calculator api!!"})
})

app.use(router)


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})