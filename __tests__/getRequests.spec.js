const axios = require('axios')
const app = require('../app')

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
})

