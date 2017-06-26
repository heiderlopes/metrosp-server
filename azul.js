var express = require('express');
var router = express.Router();

// middleware that is specific to this router
/*router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});*/

router.get('/azul/estacoes', function(req, res) {
  res.send(ESTACOES_LINHA_AZUL);
});

const ESTACOES_LINHA_AZUL = [{
	"nome" : "JABAQUARA",
	"endereco" : "RUA DOS JEQUITIBÁS, 80",
	"latitude" : "-23.6462810",
	"longitude" : "-46.6425470",
}];

module.exports = router;