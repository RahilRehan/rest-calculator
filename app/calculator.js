const express = require('express'),
    router = express.Router();

require('dotenv').config()

const getOperands = (params) => {
    return Object.keys(params).map((key) => Number(params[key]))
}

router.get('/add', (req, res) => {
    const [operandOne, operandTwo] = getOperands(req.query)
    const answer = operandOne + operandTwo
    res.json(isNaN(answer) ? {error:'malformed query', 'query format': '/calculator/operation?a=operandOne&b=operandTwo'}:{answer:answer})
})

router.get('/multiply', (req, res, next) => {
    if(process.env.DISABLE_MULTIPLY === 'true'){
        const [operandOne, operandTwo] = getOperands(req.query)
        const answer = operandOne * operandTwo
        res.json(isNaN(answer) ? {error:'malformed query', 'query format': '/calculator/operation?a=operandOne&b=operandTwo'}:{answer:answer})
    }else{
        next()
    }
})

router.get('/divide', (req, res) => {
    const [operandOne, operandTwo] = getOperands(req.query)
    const answer = operandOne / operandTwo
    res.json(isNaN(answer) ? {error:'malformed query', 'query format': '/calculator/operation?a=operandOne&b=operandTwo'}:{answer:answer})
})

module.exports = router;