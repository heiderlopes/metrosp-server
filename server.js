var express = require('express'),
    app = express(),
    estacoes_azul = require('./estacoes_azul'),
    estacoes_verde = require('./estacoes_verde'),
    linhas = require('./linhas');

app.use(express.static('public'));

app.use('/linhas', linhas);

app.use('/linhas', estacoes_azul);

app.use('/linhas', estacoes_verde);

var server = app.listen(3000);

console.log('Servidor Express iniciado na porta %s', server.address().port);