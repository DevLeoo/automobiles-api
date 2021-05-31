const axios = require('axios')
const moment = require('moment')

test('Deve cadastrar motorista', async function () {
    const motorista = {
        "nome": "Vini",
    }
    const response = await axios.post(`http://127.0.0.1:3000/drivers/register/`, {
        motorista
    })
    expect(response.status).toBe(200)
})

test('Deve cadastrar carro', async function () {
    const automovel = {
        "placa": "ABC-1234",
        "marca": "honda",
        "cor": "prata",
    }
    const response = await axios.post(`http://127.0.0.1:3000/cars/register/`, {
        automovel
    })
    expect(response.status).toBe(200)
})


test('Deve realizar aluguel', async function () {
    const automovel = {
        "automovel": "ABC-1234",
        "motorista": 1,
        "motivo": "Final de semana na praia"
    }
    const response = await axios.post(`http://127.0.0.1:3000/rent/register/`, {
        automovel
    })
    expect(response.status).toBe(200)
})
