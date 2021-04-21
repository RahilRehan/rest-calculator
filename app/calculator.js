const express = require('express'),
    router = express.Router();

require('dotenv').config()

const getOperands = (params) => {
    return Object.keys(params).map((key) => Number(params[key]))
}

router.get('/add/:operandOne/:operandTwo', (req, res) => {
    const [operandOne, operandTwo] = getOperands(req.params)
    res.json({answer:operandOne + operandTwo})
})

router.get('/multiply/:operandOne/:operandTwo', (req, res, next) => {
    if(process.env.DISABLE_MULTIPLY === 'true'){
        const [operandOne, operandTwo] = getOperands(req.params)
        res.json({answer:operandOne * operandTwo})
    }else{
        next()
    }
})

router.get('/divide/:operandOne/:operandTwo', (req, res) => {
    const [operandOne, operandTwo] = getOperands(req.params)
    res.json({answer:operandOne / operandTwo})
})

module.exports = router;