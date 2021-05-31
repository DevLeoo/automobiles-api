const axios = require('axios')

test('Deve retornar todos os carros', async function () {
    const response = await axios.get(`http://127.0.0.1:3000/cars/`)
    expect(response.data[0]).toEqual({
        "placa": expect.any(String),
        "cor": expect.any(String),
        "marca": expect.any(String)
    })
    expect(response.data[0]).toEqual(expect.any(Object))
})


test('Deve retornar todos os carros filtrados por cor ou marca', async function () {
    let cor = "PRETO"
    let marca = "HONDA"
    //obs: não é necessario passar todos os filtros
    const response = await axios.get(`http://127.0.0.1:3000/cars?cor=${cor}&marca=${marca}`)
    expect(response.data[0].marca).toBe(marca)
    expect(response.data[0].cor).toBe(cor)
    expect(response.data[0]).toEqual(expect.any(Object))

})

test('Deve retornar os carros filtrados por placa', async function () {
    let placa = 'ABC-1234'
    const response = await axios.get(`http://127.0.0.1:3000/cars/${placa}`)
    expect(response.data[0]).toEqual(expect.any(Object))
    expect(response.data[0].placa).toBe(placa)
})

test('Deve retornar motoristas', async function () {
    const response = await axios.get(`http://127.0.0.1:3000/drivers`)
    expect(response.data[0]).toEqual({
        "id": expect.any(Number),
        "nome": expect.any(String)
    })

})

test('Deve retornar motorista filtrado por id', async function () {
    let id = 1
    const response = await axios.get(`http://127.0.0.1:3000/drivers?id=${id}`)
    expect(response.data[0]).toEqual({
        "id": expect.any(Number),
        "nome": expect.any(String)
    })
    expect(response.data[0].id).toBe(id)

})

test('Deve retornar motoristas friltado por nome', async function () {
    let nome = 'joao'
    const response = await axios.get(`http://127.0.0.1:3000/drivers/${nome}`)
    expect(response.data[0]).toEqual({
        "id": expect.any(Number),
        "nome": expect.any(String)
    })
    expect(response.data[0].nome).toBe(nome.toUpperCase())

})
test('Deve retornar alugueis ', async function () {
    const response = await axios.get(`http://127.0.0.1:3000/rent`)
    expect(response.data[0]).toEqual(expect.any(Object))
    expect(response.data[0]).toEqual({
        "motorista": expect.any(Number),
        "automovel": expect.any(String),
        "motivo": expect.any(String),
        "data_retirada": expect.any(String),
        "data_entrega": expect.any(String),
        "placa": expect.any(String),
        "cor": expect.any(String),
        "marca": expect.any(String),
        "id": expect.any(Number),
        "nome": expect.any(String)
    })

})
