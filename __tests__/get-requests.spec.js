const axios = require('axios')

describe('testing get routes', () => {
	test('shouldReturnJsonForRootRoute', async () => {
		const response = await axios('http://localhost:3000')
		expect(response.status).toEqual(200)
		expect(response.headers['content-type']).toEqual(
			'application/json; charset=utf-8'
		)
	})

	test('shouldReturnValidAdditionForTwoNumbers', async () => {
		const response = await axios(
			'http://localhost:3000/calculator/add/?a=6&b=7'
		)
		expect(response.status).toEqual(200)
		expect(response.headers['content-type']).toEqual(
			'application/json; charset=utf-8'
		)
	})

	test('shouldReturnValidMultiplicationForTwoNumbers', async () => {
		const response = await axios(
			'http://localhost:3000/calculator/multiply/?a=4&b=5'
		)
		expect(response.status).toEqual(200)
		expect(response.headers['content-type']).toEqual(
			'application/json; charset=utf-8'
		)
	})

	test('shouldReturnValidDivisionForTwoNumbers', async () => {
		const response = await axios(
			'http://localhost:3000/calculator/divide/?a=10&b=2'
		)
		expect(response.status).toEqual(200)
		expect(response.headers['content-type']).toEqual(
			'application/json; charset=utf-8'
		)
	})
	test('shouldReturnErrorInJSONForMalformedURL', async () => {
		try {
			const response = await axios(
				'http://localhost:3000/calculator/divide/?a=10'
			)
		} catch (e) {
			expect(e.response.data.status).toEqual(404)
			expect(e.response.headers['content-type']).toEqual(
				'application/json; charset=utf-8'
			)
		}
	})
})
