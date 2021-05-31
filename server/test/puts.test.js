const axios = require('axios')
const moment = require('moment')

test('Deve alterar motorista', async function () {
    const motorista = {
        "id": 1,
        "nome": "Teste",
    }
    const response = await axios.put(`http://127.0.0.1:3000/drivers/update/`, {
        motorista
    })

    jest.setTimeout(20000)
    expect(response.status).toBe(200)
})

test('Deve alterar carro', async function () {
    const automovel = {
        "placa": "ABC-1234",
        "marca": "honda",
        "cor": "prata",
    }
    const response = await axios.put(`http://127.0.0.1:3000/cars/update/`, {
        automovel
    })
    jest.setTimeout(20000)
    expect(response.status).toBe(200)
})


test('Deve finalizar aluguel', async function () {
    const rent_fields = {
        "automovel": 'ABC-1234',
    }
    const response = await axios.put(`http://127.0.0.1:3000/rent/finished/`, {
        rent_fields
    })
    jest.setTimeout(20000)
    expect(response.status).toBe(200)
})
