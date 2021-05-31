const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 30,
    password: '',
    user: 'root',
    database: 'automobiles',
    host: '127.0.0.1',
    port: '3306'
})

let automobiles = {}
automobiles.handle = (query) => {
    return new Promise((resolve, reject) => {
        pool.query(`${query}`, (err, results) => {
            if(err){
                return reject(err)
            } 
            return resolve(results)
        })
    })
}



module.exports = automobiles