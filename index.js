const express = require('express'),
    app = express(),
    calculator = require('./calculator')
    cors = require('cors')
    morgan = require('morgan')

const PORT = 3000

app.use(cors())
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.json({message: "Welcome to our rest calculator api!!"})
})

app.use('/calculator', calculator)


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})