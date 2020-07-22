const express = require ('express');
const mysql = require ('mysql');
// const  = require ('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'mysql-container',
    user: 'programadortest',
    password: 'lililalalulu',
    database: 'programadortest',

})

connection.connect()

app.get('/produtos', function (request, response) {
    connection.query('SELECT * FROM produtos',
        function (error, results) {
        if (error) {
            throw error;
        };

        response.send( results.map(
            item => ({
                nome: item.nome, price: item.price
            }))
        );

    });
});

app.listen(9001, '0.0.0.0', function () {
    console.log('*****Listening on port 9001*****');
})
