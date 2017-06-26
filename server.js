var express = require('express'),
    app = express(),
    azul = require('./azul'),
    linhas = require('./linhas');

app.use('/azul', azul);

app.use('/linhas', linhas);

var server = app.listen(3000);

console.log('Servidor Express iniciado na porta %s', server.address().port);