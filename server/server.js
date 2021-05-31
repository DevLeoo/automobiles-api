const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const cars = require('./routes/cars');
const drivers = require('./routes/drivers');
const rent = require('./routes/rent');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use('/drivers/', drivers);
app.use('/cars/', cars);
app.use('/rent/', rent);

app.use((req, res, next) => {
    const erro = new Error('Rota não encontrada');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT || '3000'}`);
});