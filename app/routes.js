const express = require('express'),
    router = express.Router()

const add = require('../calculator/add'),
    multiply = require('../calculator/multiply'),
    divide = require('../calculator/divide')

require('dotenv').config()

router.get('/add', (req, res) => {
    const answer = add(req.query)
    res.json({answer:answer})
})

router.get('/multiply', (req, res, next) => {
    if(Number(process.env.ENABLE_MULTIPLY)){
        const answer = multiply(req.query)
        res.json({answer:answer})
    }else{
        next()
    }
})


router.get('/divide', (req, res) => {
    const answer = divide(req.query)
    res.json({answer:answer})
})



module.exports = router
