const express = require('express');
const moment = require('moment');
const db = require('../db');
const router = express.Router();

const { checkReturn, verifyCar, verifyDriver, verifyRent } = require('../functions')


router.get('/', async (req, res, next) => {
    try {
        let sql = `SELECT * FROM aluguel_carro INNER JOIN CARROS ON CARROS.PLACA = aluguel_carro.automovel INNER JOIN motoristas ON motoristas.ID = aluguel_carro.motorista`
        try {
            let result = await db.handle(sql)
            return checkReturn(res, result)
        } catch (erro) {
            console.log(erro)
            return res.sendStatus(500).send("Internal Server Error")
        }

    } catch (e) {
        console.log(e)
        return res.sendStatus(500).send("Internal Server Error")
    }
})



router.post('/register', async (req, res, next) => {
    const rent_fields = {
        "automovel": req.body.automovel,
        "motorista": req.body.motorista,
        "motivo": req.body.motivo
    }
    const msg = {
        "sucesso": "Aluguel realizado com sucesso!",
        "erro": "Este carro ou motorista já está reservado"
    }

    verifyCar(rent_fields.automovel).then(resp => {
        verifyDriver(rent_fields.motorista).then(response => {
            if (resp == true && response == true) {
                verifyRent(rent_fields.automovel).then(result => {
                    console.log(result)
                    if (result == false || result == null) {
                        let sql = `INSERT INTO ALUGUEL_CARRO (motorista, automovel, motivo, data_retirada) values('${rent_fields.motorista}', '${rent_fields.automovel}', '${rent_fields.motivo}', '${moment(new Date).format('YYYY/MM/DD')}')`
                        try {
                            let result = db.handle(sql)
                        } catch (e) {
                            console.log(e)
                            return res.json(msg.erro)
                        }
                        return res.json(msg.sucesso)
                    } else {
                        return res.json(msg.erro)
                    }
                }).catch(e => {
                    console.log(e)
                    return res.json(msg.erro)
                })
            } else {
                res.send("Este motorista e/ou automóvel não existe")
            }
        }).catch(e => {
            console.log(e)
        })
    }).catch(e => {
        console.log(e)
    })

})

router.put('/finished', async (req, res, next) => {
    const rent_fields = {
        "id": req.body.id,
        "automovel": req.body.automovel
    }
    const msg = {
        "sucesso": "Aluguel finalizado com sucesso!",
        "erro": "Falha ao finalizar o aluguel"
    }

    try {
        if (rent_fields.id != undefined && rent_fields.id != '') {
            verifyRent(rent_fields.automovel)
                .then(resp => {
                    if (resp == false || resp != null) {
                        let sql = `UPDATE aluguel_carro SET data_entrega = '${moment(new Date).format('YYYY-MM-DD')}' where ID = ${rent_fields.id}`
                        try {
                            let result = db.handle(sql)
                        } catch (e) {
                            console.log(e)
                            return res.json(msg.erro)
                        }
                        return res.json(msg.sucesso)
                    } else {
                        res.send("Este automóvel não foi alugado")
                    }
                   
                }).catch(err => {
                    console.log(err)
                })
        }
    } catch (e) {
        console.log(e)
        return res.sendStatus(500).send("Internal Server Error")

    }
})


module.exports = router