const axios = require('axios')

describe('testing get routes', () =>{
    test('shouldReturnJsonForRootRoute', async () => {
        const response = await axios('http://localhost:3000')
        expect(response.status).toEqual(200)
        expect(response.headers['content-type']).toEqual('application/json; charset=utf-8')
    })

    test('shouldReturnValidAdditionForTwoNumbers', async () => {
        const response = await axios('http://localhost:3000/calculator/add/?a=6&b=7')
        expect(response.status).toEqual(200)
        expect(response.headers['content-type']).toEqual('application/json; charset=utf-8')
        expect(response.data.answer).toEqual(13)
    })

    test('shouldReturnValidMultiplicationForTwoNumbers', async () => {
        const response = await axios('http://localhost:3000/calculator/multiply/?a=4&b=5')
        expect(response.status).toEqual(200)
        expect(response.headers['content-type']).toEqual('application/json; charset=utf-8')
        expect(response.data.answer).toEqual(20)
    })

    test('shouldReturnValidDivisionForTwoNumbers', async () => {
        const response = await axios('http://localhost:3000/calculator/divide/?a=10&b=2')
        expect(response.status).toEqual(200)
        expect(response.headers['content-type']).toEqual('application/json; charset=utf-8')
        expect(response.data.answer).toEqual(5)
    })

    test('shouldReturnErrorResponseForMalformedQuery', async () => {
        const response = await axios('http://localhost:3000/calculator/divide/?a=1')
        expect(response.status).toEqual(200)
        expect(response.headers['content-type']).toEqual('application/json; charset=utf-8')
        expect(response.data).toEqual({error:'malformed query', 'query format': '/calculator/operation?a=operandOne&b=operandTwo'})
    })
})

//tests for middleware
//tests for logging