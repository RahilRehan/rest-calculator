const axios = require('axios')
const app = require('../calculator')

describe('testing get routes', () =>{
    test('shouldReturnJsonForRootRoute', async () => {
        const response = await axios('http://localhost:3000')
        expect(response.status).toEqual(200)
        expect(response.headers['content-type']).toEqual('application/json; charset=utf-8')
    })


    test('shouldReturnValidAdditionForTwoNumbers', async () => {
        const response = await axios('http://localhost:3000/calculator/add/6/7')
        expect(response.status).toEqual(200)
        expect(response.headers['content-type']).toEqual('application/json; charset=utf-8')
        expect(response.data.answer).toEqual(13)
    })

    test('shouldReturnValidMultiplicationForTwoNumbers', async () => {
        const response = await axios('http://localhost:3000/calculator/multiply/4/5')
        expect(response.status).toEqual(200)
        expect(response.headers['content-type']).toEqual('application/json; charset=utf-8')
        expect(response.data.answer).toEqual(20)
    })
})

