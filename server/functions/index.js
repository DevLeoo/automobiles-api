const db = require('../db')



function checkReturn (res, result) {
    if (result.length === 0){
        return res.sendStatus(404)
    }

    return res.json(result)
}


async function verifyCar (car) {
    let sql = `SELECT * FROM CARROS WHERE PLACA = '${car}'`
    let result = await db.handle(sql)
    
    if (result.length == 0){
        return false
    }
    return true
}


async function verifyDriver (id) {
    let sql = `SELECT * FROM MOTORISTAS WHERE ID = ${id}`
    let result = await db.handle(sql)
    
    if (result.length == 0){
        return false
    }
    return true
}



async function verifyRent(placa) {
    let sql = `SELECT data_retirada FROM aluguel_carro WHERE automovel = '${placa}'`
    try {
        let result = await db.handle(sql)
        if (result.length != 0) {
            if (result.data_retirada == '') {
                return true
            }
            return false
        }
        return null
    } catch (erro) {
        console.log(erro)
        return false
    }
}

function verifyQueryParameters (cor, marca) {
    let checkCor, checkMarca, sql

    if (cor == '') {
        checkCor = null
    } else{
        checkCor = cor
    }

    if (marca == '') {
        checkMarca = null
    } else {
        checkMarca = marca
    }
    
    if (checkMarca == null && checkCor == null){
        sql = `SELECT * FROM CARROS ORDER BY PLACA`
    } else if( checkCor != null && checkMarca != null) {
        sql = `SELECT * FROM CARROS WHERE COR = '${checkCor}' AND MARCA = '${checkMarca}' ORDER BY PLACA`
    } else if( checkMarca != null && checkCor == null) {
        sql = `SELECT * FROM CARROS WHERE MARCA = '${checkMarca}' ORDER BY PLACA`
    } else {
        sql = `SELECT * FROM CARROS WHERE COR = '${checkCor}' ORDER BY PLACA`
    }

    return sql

}

module.exports = {checkReturn, verifyCar, verifyDriver, verifyRent, verifyQueryParameters}