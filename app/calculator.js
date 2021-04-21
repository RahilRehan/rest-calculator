const express = require('express')
const router = express.Router()
const logger = require('../utils/logger')

const getOperands = (params) => {
    return Object.keys(params).map((key) => Number(params[key]))
}

router.get('/add/:operandOne/:operandTwo', (req, res, next) => {
    logger(req)
    const [operandOne, operandTwo] = getOperands(req.params)
    res.json({answer:operandOne + operandTwo})
})

router.get('/multiply/:operandOne/:operandTwo', (req, res) => {
    logger(req)
    const [operandOne, operandTwo] = getOperands(req.params)
    res.json({answer:operandOne * operandTwo})
})

module.exports = router;