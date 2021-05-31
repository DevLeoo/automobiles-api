const express = require('express');
const moment = require('moment');
const db = require('../db');
const router = express.Router();

const { checkReturn } = require('../functions')

router.get('/', async (req, res, next) => {

    const id = req.query.id == undefined ? null : req.query.id
    try {
        let sql
        if (id == null){
            sql = `SELECT * FROM MOTORISTAS ORDER BY id`
        } else {
            sql = `SELECT * FROM MOTORISTAS WHERE ID = ${id} ORDER BY id`
        }
        let result = await db.handle(sql)

        return checkReturn(res, result)
        
    } catch (e) {
        console.log(e)
        return res.sendStatus(500).send("Internal Server Error")
    }
})

router.get('/:nome', async (req, res, next) => {

    const nome = req.params.nome
    try {
        let sql = `SELECT * FROM MOTORISTAS WHERE NOME = '${nome.toUpperCase()}' ORDER BY ID`
        let result = await db.handle(sql)
        return checkReturn(res, result)

    } catch (e) {
        console.log(e)
        return res.sendStatus(500).send("Internal Server Error")
    }
})



router.post('/register', async (req, res, next) => {
    const motorista = {
        "nome": req.body.nome,
    }
    const msg = {
        "sucesso": "Motorista cadastrado com sucesso!",
        "erro": "Motorista já cadastrado",
        "nome": "o Nome deve ser preenchido corretamente"
    }

    try {
        if (motorista.nome !== undefined && motorista.nome !== ""){
            let sql = `INSERT INTO MOTORISTAS (nome) values('${motorista.nome.toUpperCase()}')`
           
            try {
                let result = await db.handle(sql)
                console.log(result)
            } catch (e) {
                return res.json(msg.erro)
            }
            return res.json(msg.sucesso)
        }
        return res.json(msg.nome)
    } catch (e) {
        console.log(e)
        return res.sendStatus(500).send("Internal Server Error")

    }
})

router.put('/update', async (req, res, next) => {
    const motorista = {
        "id": req.body.id,
        "nome": req.body.nome.toUpperCase()
    }
    const msg = {
        "sucesso": "Motorista alterado com sucesso!",
        "erro": "Não foi possivel alterar os dados",
        "nome": "o Nome deve ser preenchido corretamente"
    }

    try {
        if (motorista.nome !== undefined && motorista.nome !== ""){
            let sql = `UPDATE MOTORISTAS SET nome = '${(motorista.nome)}' WHERE ID = ${(motorista.id)}`
           
            try {
                let result = await db.handle(sql)
                console.log(result)
            } catch (e) {
                return res.json(msg.erro)
            }
            return res.json(msg.sucesso)
        }
        return res.json(msg.nome)
    } catch (e) {
        console.log(e)
        return res.sendStatus(500).send("Internal Server Error")
    }
})


router.delete('/delete/:id', async (req, res, next) => {

    const id = req.params.id
    try {
        let sql = `DELETE FROM MOTORISTAS WHERE ID = ${id}`
        try {
            let result = await db.handle(sql)
        } catch (e) {
            return res.send("Não foi possivel remover o motorista")
        }
        return res.send("Motorista removido com sucesso")

    } catch (e) {
        console.log(e)
        return res.sendStatus(500).send("Internal Server Error")
    }
})


module.exports = router