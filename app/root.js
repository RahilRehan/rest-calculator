const express = require('express'),
    router = express.Router()

router.get('/', (req, res) => {
    res.json({message: "Welcome to our rest calculator api!!"})
})

module.exports = router