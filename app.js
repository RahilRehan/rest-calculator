const express = require('express')
const router = express.Router()

router.get('/calculator/add/:operandOne/:operandTwo', (req, res) => {
    const [operandOne, operandTwo] = Object.keys(req.params).map((key) => Number(req.params[key]))
    res.json({answer:operandOne + operandTwo})
})

router.get('/calculator/multiply/:operandOne/:operandTwo', (req, res) => {
    const [operandOne, operandTwo] = Object.keys(req.params).map((key) => Number(req.params[key]))
    res.json({answer:operandOne * operandTwo})
})

module.exports = router;