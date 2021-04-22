const express = require('express'),
    router = express.Router();

require('dotenv').config()

const getOperands = (params) => {
    return Object.keys(params).map((key) => Number(params[key]))
}

router.get('/add', (req, res) => {
    const [operandOne, operandTwo] = getOperands(req.query)
    res.json({answer:operandOne + operandTwo})
})

router.get('/multiply', (req, res, next) => {
    if(process.env.DISABLE_MULTIPLY === 'true'){
        const [operandOne, operandTwo] = getOperands(req.query)
        res.json({answer:operandOne * operandTwo})
    }else{
        next()
    }
})

router.get('/divide', (req, res) => {
    const [operandOne, operandTwo] = getOperands(req.query)
    res.json({answer:operandOne / operandTwo})
})

module.exports = router;