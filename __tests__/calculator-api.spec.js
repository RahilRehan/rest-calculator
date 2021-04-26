const add = require('../calculator/add'),
    multiply = require('../calculator/multiply'),
    divide = require('../calculator/divide')

describe('test calculator api', () => {
    test('shouldReturnValidValueForAdd', () => {
        const query = {a:23, b:44}
        answer = add(query)
        expect(answer).toEqual(67)
    })
    test('shouldReturnValidValueForMultiply', () => {
        const query = {a:20, b:10}
        answer = multiply(query)
        expect(answer).toEqual(200)
    })
    test('shouldReturnValidValueForDivide', () => {
        const query = {a:50, b:10}
        answer = divide(query)
        expect(answer).toEqual(5)
    })
})