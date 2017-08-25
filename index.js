var express = require('express'),
    url = require('url');
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express();

// Liberar acesso aos broswer
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Accept, X-api-key, X-auth-token, Content-Type, Content-Length');
    res.setHeader('Access-Control-Allow-Credentials', true);
    if (req.headers && req.headers.authorization) { delete req.headers.authorization; }
    next();
});


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

// Ferramenta utilizada para trajetória de arquivo
app.use(express.static(path.join(__dirname, '/frontEnd-astra')));


app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

// Inicializar a cliente
app.get('/*', function (req, res) {
  res.sendfile('frontEnd-astra/index.html');
});

// Chamar o servidor
app.set('port', process.env.PORT || 8080);
var server = app.listen(app.get('port'), function() {

});
