const express = require('express'),
    app = express(),
    calculator = require('./app/calculator'),
    cors = require('cors'),
    logger = require('./middlewares/http-logger');

const PORT = process.env.PORT || 3000


app.use(cors())
app.use(logger)

app.get('/', (req, res) => {
    res.json({message: "Welcome to our rest calculator api!!"})
})
app.use('/calculator', calculator)


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})