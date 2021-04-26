const { query } = require('express')
const add = require('../calculator/add'),
    multiply = require('../calculator/multiply'),
    divide = require('../calculator/divide')

describe('test calculator api', () => {
    test('shouldReturnValidValueForAdd', () => {
        const query = {a:23, b:44}
        answer = add(query)
        expect(answer).toEqual(67)
    })
})