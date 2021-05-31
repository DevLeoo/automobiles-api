const axios = require('axios')

test('Deve remover motorista', async function () {
    const nome = 'joao'
    const expect_response = "Motorista removido com sucesso"
    const response = await axios.delete(`http://127.0.0.1:3000/drivers/delete/${nome}`)
    expect(response.data).toEqual(expect_response)
    expect(response.status).toBe(200)
})



test('Deve remover carro', async function () {
    const placa = 'ABC-1234'
    const expect_response = "Automóvel removido com sucesso"
    const response = await axios.delete(`http://127.0.0.1:3000/cars/delete/${placa}`)
    expect(response.data).toEqual(expect_response)
    expect(response.status).toBe(200)
})
