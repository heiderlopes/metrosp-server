var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send(LINHAS);
});

const LINHAS = [
    {
        "cor" : "AZUL",
        "numero" : "1"
    },
    {
        "cor" : "VERDE",
        "numero" : "2"
    },
    {
        "cor" : "VERMELHA",
        "numero" : "3"
    },
    {
        "cor" : "AMARELA",
        "numero" : "4"
    },
    {
        "cor" : "LILÁS",
        "numero" : "5"
    },
    {
        "cor" : "PRATA",
        "numero" : "15"
    },
]


module.exports = router;