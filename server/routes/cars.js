const express = require('express');
const moment = require('moment');
const db = require('../db');
const router = express.Router();

const { checkReturn, verifyQueryParameters} = require('../functions')

router.get('/', async (req, res, next) => {

    const cor = req.query.cor == undefined ? null : req.query.cor
    const marca = req.query.marca == undefined ? null : req.query.marca
    try {
        let query = verifyQueryParameters(cor, marca)
        let result = await db.handle(query)

        return checkReturn(res, result)
        
    } catch (e) {
        console.log(e)
        return res.sendStatus(500).send("Internal Server Error")
    }
})

router.get('/:placa', async (req, res, next) => {

    const placa = req.params.placa
    try {
        let sql = `SELECT * FROM CARROS WHERE PLACA = '${placa}' ORDER BY PLACA`
        let result = await db.handle(sql)
        return checkReturn(res, result)

    } catch (e) {
        console.log(e)
        return res.sendStatus(500).send("Internal Server Error")
    }
})



router.post('/register', async (req, res, next) => {
    const car = {
        "placa": req.body.placa,
        "marca": req.body.marca.toUpperCase(),
        "cor": req.body.cor.toUpperCase(),
    }
    const msg = {
        "sucesso": "Automóvel cadastrado com sucesso!",
        "erro": "Automóvel já cadastrado",
        "placa": "A placa deve ser preenchida corretamente"
    }

    try {
        if (car.placa !== undefined && car.placa !== ""){
            let sql = `INSERT INTO CARROS VALUES ('${car.placa}', '${car.cor}', '${car.marca}')`
           
            try {
                let result = await db.handle(sql)
            } catch (e) {
                return res.json(msg.erro)
            }
            return res.json(msg.sucesso)
        }
        return res.json(msg.placa)
    } catch (e) {
        console.log(e)
        return res.sendStatus(500).send("Internal Server Error")

    }
})

router.put('/update', async (req, res, next) => {
    const car = {
        "placa": req.body.placa,
        "marca": req.body.marca,
        "cor": req.body.cor,
    }
    const msg = {
        "sucesso": "Automóvel alterado com sucesso!",
        "erro": "Não foi possivel alterar os dados",
        "placa": "A placa deve ser preenchida corretamente"
    }

    try {
        if (car.placa !== undefined && car.placa !== ""){
            let sql = `UPDATE CARROS SET COR = '${car.cor}', MARCA = '${car.marca}' WHERE PLACA = '${car.placa}'`
           
            try {
                let result = await db.handle(sql)
                console.log(result)
            } catch (e) {
                return res.json(msg.erro)
            }
            return res.json(msg.sucesso)
        }
        return res.json(msg.placa)
    } catch (e) {
        console.log(e)
        return res.sendStatus(500).send("Internal Server Error")
    }
})


router.delete('/delete/:placa', async (req, res, next) => {

    const placa = req.params.placa
    try {
        let sql = `DELETE FROM CARROS WHERE PLACA = '${placa}'`
        try {
            let result = await db.handle(sql)
        } catch (e) {
            return res.send("Não foi possivel remover o automóvel")
        }
        return res.send("Automóvel removido com sucesso")

    } catch (e) {
        console.log(e)
        return res.sendStatus(500).send("Internal Server Error")
    }
})


module.exports = router